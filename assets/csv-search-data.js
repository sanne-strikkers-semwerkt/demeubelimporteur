window.ProductSearchData = [];
window.ProductSearchDataLoaded = false;

async function fetchAllProductsFromJson() {
  const cacheKey = 'csv_search_products_json_full_v2';
  try {
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      const { data, time } = JSON.parse(cached);
      const TTL = 2 * 60 * 1000;
      if (Date.now() - time < TTL && Array.isArray(data) && data.length > 0) return data;
    }
  } catch (e) {}

  const all = [];
  const perPage = 250;
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const res = await fetch(`/products.json?limit=${perPage}&page=${page}`, { cache: 'no-store' });
    if (!res.ok) break;
    const data = await res.json();
    const raw = Array.isArray(data) ? data : (data.products || []);
    if (raw.length === 0) break;
    all.push.apply(all, raw);
    hasMore = raw.length >= perPage;
    page++;
    if (page > 100) break;
  }

  try {
    sessionStorage.setItem(cacheKey, JSON.stringify({ data: all, time: Date.now() }));
  } catch (e) {}
  return all;
}

function normalizeProductsFromJSON(rawProducts) {
  if (!Array.isArray(rawProducts)) return [];
  return rawProducts.map((p) => {
    const variant = (p.variants && p.variants[0]) || {};
    const img = (p.images && p.images[0]) ? p.images[0] : null;
    const src = (typeof img === 'string') ? img : (img && img.src) ? img.src : '';
    const tags = p.tags;
    const tagsStr = Array.isArray(tags) ? (tags.join ? tags.join(' ') : '') : (typeof tags === 'string' ? tags : '');

    return {
      id: p.id,
      title: p.title || '',
      handle: p.handle || '',
      url: p.handle ? `/products/${p.handle}` : '',
      vendor: p.vendor || '',
      product_type: p.product_type || '',
      tags: tagsStr,
      featured_image: src,
      price: variant.price != null ? variant.price : 0,
      compare_at_price: variant.compare_at_price,
      available: variant.available != null ? variant.available : (p.variants && p.variants.some((v) => v.available)),
      updated_at: p.updated_at || '',
    };
  });
}

async function loadProductSearchData() {
  try {
    const rawProducts = await fetchAllProductsFromJson();
    window.ProductSearchData = normalizeProductsFromJSON(rawProducts);
    window.ProductSearchDataLoaded = true;
  } catch (error) {
    if (typeof loadCSVSearchData === "function") {
      await loadCSVSearchData();
    }
  }
}

function fuzzySearch(query, text) {
  if (!query || !text) return false;
  const queryLower = query.toLowerCase();
  const textLower = text.toLowerCase();
  if (textLower.includes(queryLower)) return true;
  const queryWords = queryLower.split(/\s+/);
  return queryWords.every(word => textLower.includes(word))
}

function searchProductData(query, limit = 10) {
  if (!query || !window.ProductSearchData || !window.ProductSearchDataLoaded) {
    return []
  }
  const results = [];
  const queryLower = query.toLowerCase();
  for (const product of window.ProductSearchData) {
    const titleMatch = fuzzySearch(query, product.title);
    const vendorMatch = fuzzySearch(query, product.vendor);
    const typeMatch = fuzzySearch(query, product.product_type);
    let tagsMatch = false;
    if (product.tags) {
      if (Array.isArray(product.tags)) {
        tagsMatch = product.tags.some(tag => fuzzySearch(query, tag))
      } else if (typeof product.tags === "string") {
        tagsMatch = fuzzySearch(query, product.tags)
      }
    }
    if (titleMatch || vendorMatch || typeMatch || tagsMatch) {
      results.push({
        ...product,
        matchType: titleMatch ? "title" : vendorMatch ? "vendor" : typeMatch ? "type" : "tags",
        relevanceScore: calculateProductRelevanceScore(query, product, titleMatch, vendorMatch, typeMatch, tagsMatch)
      })
    }
  }
  const finalResults = results.sort((a, b) => b.relevanceScore - a.relevanceScore).slice(0, limit);
  return finalResults
}

function calculateProductRelevanceScore(query, product, titleMatch, vendorMatch, typeMatch, tagsMatch) {
  let score = 0;
  const queryLower = query.toLowerCase();
  const titleLower = product.title.toLowerCase();
  if (titleMatch) {
    score += 100;
    if (titleLower === queryLower) score += 50;
    if (titleLower.startsWith(queryLower)) score += 25
  }
  if (vendorMatch) score += 60;
  if (typeMatch) score += 50;
  if (tagsMatch) score += 30;
  score += Math.max(0, 50 - product.title.length);
  return score
}

function calculateLiveRelevanceScore(query, product, titleMatch, vendorMatch, typeMatch, tagsMatch) {
  return calculateProductRelevanceScore(query, product, titleMatch, vendorMatch, typeMatch, tagsMatch)
}

function calculateRelevanceScore(query, product, titleMatch, collectionMatch, skuMatch) {
  return calculateProductRelevanceScore(query, product, titleMatch, false, false, false)
}
document.addEventListener("DOMContentLoaded", loadProductSearchData);