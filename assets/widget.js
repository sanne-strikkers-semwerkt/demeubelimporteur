/*! For license information please see v2-widget.js.LICENSE.txt */
(() => {
  function e(t) {
    return (
      (e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      e(t)
    );
  }
  function t(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function n(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(e, l(o.key), o);
    }
  }
  function o() {
    var e,
      t,
      n = "function" == typeof Symbol ? Symbol : {},
      r = n.iterator || "@@iterator",
      a = n.toStringTag || "@@toStringTag";
    function c(n, o, r, a) {
      var c = o && o.prototype instanceof u ? o : u,
        s = Object.create(c.prototype);
      return (
        i(
          s,
          "_invoke",
          (function (n, o, i) {
            var r,
              a,
              c,
              u = 0,
              s = i || [],
              d = !1,
              p = {
                p: 0,
                n: 0,
                v: e,
                a: y,
                f: y.bind(e, 4),
                d: function (t, n) {
                  return (r = t), (a = 0), (c = e), (p.n = n), l;
                },
              };
            function y(n, o) {
              for (a = n, c = o, t = 0; !d && u && !i && t < s.length; t++) {
                var i,
                  r = s[t],
                  y = p.p,
                  f = r[2];
                n > 3
                  ? (i = f === o) &&
                    ((c = r[(a = r[4]) ? 5 : ((a = 3), 3)]), (r[4] = r[5] = e))
                  : r[0] <= y &&
                    ((i = n < 2 && y < r[1])
                      ? ((a = 0), (p.v = o), (p.n = r[1]))
                      : y < f &&
                        (i = n < 3 || r[0] > o || o > f) &&
                        ((r[4] = n), (r[5] = o), (p.n = f), (a = 0)));
              }
              if (i || n > 1) return l;
              throw ((d = !0), o);
            }
            return function (i, s, f) {
              if (u > 1) throw TypeError("Generator is already running");
              for (
                d && 1 === s && y(s, f), a = s, c = f;
                (t = a < 2 ? e : c) || !d;

              ) {
                r ||
                  (a
                    ? a < 3
                      ? (a > 1 && (p.n = -1), y(a, c))
                      : (p.n = c)
                    : (p.v = c));
                try {
                  if (((u = 2), r)) {
                    if ((a || (i = "next"), (t = r[i]))) {
                      if (!(t = t.call(r, c)))
                        throw TypeError("iterator result is not an object");
                      if (!t.done) return t;
                      (c = t.value), a < 2 && (a = 0);
                    } else
                      1 === a && (t = r.return) && t.call(r),
                        a < 2 &&
                          ((c = TypeError(
                            "The iterator does not provide a '" + i + "' method"
                          )),
                          (a = 1));
                    r = e;
                  } else if ((t = (d = p.n < 0) ? c : n.call(o, p)) !== l)
                    break;
                } catch (t) {
                  (r = e), (a = 1), (c = t);
                } finally {
                  u = 1;
                }
              }
              return { value: t, done: d };
            };
          })(n, r, a),
          !0
        ),
        s
      );
    }
    var l = {};
    function u() {}
    function s() {}
    function d() {}
    t = Object.getPrototypeOf;
    var p = [][r]
        ? t(t([][r]()))
        : (i((t = {}), r, function () {
            return this;
          }),
          t),
      y = (d.prototype = u.prototype = Object.create(p));
    function f(e) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(e, d)
          : ((e.__proto__ = d), i(e, a, "GeneratorFunction")),
        (e.prototype = Object.create(y)),
        e
      );
    }
    return (
      (s.prototype = d),
      i(y, "constructor", d),
      i(d, "constructor", s),
      (s.displayName = "GeneratorFunction"),
      i(d, a, "GeneratorFunction"),
      i(y),
      i(y, a, "Generator"),
      i(y, r, function () {
        return this;
      }),
      i(y, "toString", function () {
        return "[object Generator]";
      }),
      (o = function () {
        return { w: c, m: f };
      })()
    );
  }
  function i(e, t, n, o) {
    var r = Object.defineProperty;
    try {
      r({}, "", {});
    } catch (e) {
      r = 0;
    }
    (i = function (e, t, n, o) {
      if (t)
        r
          ? r(e, t, {
              value: n,
              enumerable: !o,
              configurable: !o,
              writable: !o,
            })
          : (e[t] = n);
      else {
        var a = function (t, n) {
          i(e, t, function (e) {
            return this._invoke(t, n, e);
          });
        };
        a("next", 0), a("throw", 1), a("return", 2);
      }
    }),
      i(e, t, n, o);
  }
  function r(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t &&
        (o = o.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, o);
    }
    return n;
  }
  function a(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? r(Object(n), !0).forEach(function (t) {
            c(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : r(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function c(e, t, n) {
    return (
      (t = l(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function l(t) {
    var n = (function (t, n) {
      if ("object" != e(t) || !t) return t;
      var o = t[Symbol.toPrimitive];
      if (void 0 !== o) {
        var i = o.call(t, n || "default");
        if ("object" != e(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === n ? String : Number)(t);
    })(t, "string");
    return "symbol" == e(n) ? n : n + "";
  }
  function u(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return d(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      s(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function s(e, t) {
    if (e) {
      if ("string" == typeof e) return d(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return (
        "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(e)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? d(e, t)
          : void 0
      );
    }
  }
  function d(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
    return o;
  }
  function p(e, t, n, o, i, r, a) {
    try {
      var c = e[r](a),
        l = c.value;
    } catch (e) {
      return void n(e);
    }
    c.done ? t(l) : Promise.resolve(l).then(o, i);
  }
  function y(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (o, i) {
        var r = e.apply(t, n);
        function a(e) {
          p(r, o, i, a, c, "next", e);
        }
        function c(e) {
          p(r, o, i, a, c, "throw", e);
        }
        a(void 0);
      });
    };
  }
  y(
    o().m(function e() {
      var i, r, c, l;
      return o().w(function (e) {
        for (;;)
          switch (e.n) {
            case 0:
              (l = function () {
                (window.zienyAr = new c()), r();
              }),
                (r = function () {
                  var e,
                    t,
                    n,
                    r = "https://ar-view-zieny.com/model-viewer.js",
                    c = "https://ar-view-zieny.com/qrcode.js",
                    l = "ar-zieny-modal",
                    s = "https://ar-view-zieny.com/v2-index.html",
                    d = "https://api.ar-view-zieny.com/proxy/products",
                    p = "https://ar-view-zieny.com/v2-styles.css",
                    f = "https://ar-view-zieny.com/v2-script.js",
                    m = "https://api.ar-view-zieny.com/proxy/products/variants";
                  function w(e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "module",
                      n = document.createElement("link");
                    (n.rel = "prefetch"),
                      (n.href = e),
                      document.head.appendChild(n),
                      fetch(e)
                        .then(function (e) {
                          return e.text();
                        })
                        .then(function (n) {
                          var o = document.createElement("script");
                          (o.textContent = n),
                            (o.type = t),
                            (o.id = e),
                            document.head.appendChild(o);
                        });
                  }
                  function _(e) {
                    return new URLSearchParams(window.location.search).has(e);
                  }
                  function v(e) {
                    return !!document.getElementById(e);
                  }
                  function g(e, t) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : function () {};
                    if (
                      t &&
                      ["woff", "woff2", "ttf", "otf", "eot"].some(function (e) {
                        return t.endsWith(e);
                      })
                    ) {
                      new FontFace(e, "url(".concat(t, ")"))
                        .load("1em ".concat(e))
                        .then(function (t) {
                          document.fonts.add(t),
                            n(),
                            i("".concat(e, " has been successfully loaded."));
                        })
                        .catch(function (e) {
                          console.error("Failed to load the font: ".concat(e));
                        });
                    } else {
                      var o = document.createElement("link");
                      (o.rel = "stylesheet"),
                        (o.href = t),
                        document.head.appendChild(o),
                        n();
                    }
                  }
                  function h() {
                    if (
                      "www.tuinmeubelshop.nl" !==
                      new URL(window.location.href).hostname
                    ) {
                      !(function () {
                        var e = document.getElementById("cairoFontLink");
                        e && e.remove();
                        var t = document.createElement("link");
                        (t.id = "cairoFontLink"),
                          (t.rel = "stylesheet"),
                          (t.href =
                            "https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"),
                          document.head.appendChild(t);
                      })();
                      var e = document.getElementById("googleFontLink");
                      e && e.remove();
                      var t = document.createElement("link");
                      (t.id = "googleFontLink"),
                        (t.rel = "stylesheet"),
                        (t.href =
                          "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"),
                        document.head.appendChild(t);
                    }
                  }
                  function b() {
                    var e, t;
                    (e = f),
                      (t = document.getElementById(e)) && t.remove(),
                      (window._zeinyScriptLoaded = !0);
                    var n = document.getElementById("zieny_widget");
                    n && n.remove();
                    var o = document.createElement("div");
                    (o.id = "zieny_widget"),
                      document.body.appendChild(o),
                      o
                        ? fetch(s)
                            .then(function (e) {
                              return e.text();
                            })
                            .then(function (e) {
                              (o.innerHTML = e),
                                i("Zieny widget loaded", o),
                                (function (e) {
                                  return A.apply(this, arguments);
                                })(o).then(function (e) {
                                  if (e.response.product_url) {
                                    var t = (function (e) {
                                        if (
                                          !sessionStorage.hasOwnProperty(
                                            "zienyWidgetData"
                                          )
                                        ) {
                                          var t =
                                            Date.now() +
                                            60 *
                                              (e.response.cache_expiry
                                                ? Math.round(
                                                    e.response.cache_expiry
                                                  )
                                                : 15) *
                                              1e3;
                                          sessionStorage.setItem(
                                            "zienyWidgetData",
                                            JSON.stringify(
                                              a(a({}, e), {}, { expiry: t })
                                            )
                                          );
                                        }
                                        var n = e.response,
                                          o = {
                                            camera_controls: !1,
                                            auto_rotate: !1,
                                            disable_zoom: !1,
                                          };
                                        n.modelViewerSettings
                                          .split(",")
                                          .forEach(function (e) {
                                            var t = e
                                              .split(":")
                                              .map(function (e) {
                                                return e.trim();
                                              });
                                            o[t[0]] = "yes" === t[1];
                                          });
                                        var i = {
                                            model_viewer_file: null,
                                            ar_placement: "floor",
                                            popup_text: "View",
                                            product_id: null,
                                          },
                                          r = n.product_url
                                            .split(",")
                                            .map(function (e) {
                                              return e.trim();
                                            }),
                                          c = n["3dfile"]
                                            .split(",")
                                            .map(function (e) {
                                              return e.trim();
                                            }),
                                          l = n.popup_text
                                            .split(",")
                                            .map(function (e) {
                                              return e.trim();
                                            }),
                                          s = n.product_id
                                            .split(",")
                                            .map(function (e) {
                                              return e.trim();
                                            }),
                                          d = n.isVariantEnable
                                            ? n.isVariantEnable
                                                .split(",")
                                                .map(function (e) {
                                                  return e.trim();
                                                })
                                            : [],
                                          p = n.ar_placement
                                            .split(",")
                                            .map(function (e) {
                                              return e.trim();
                                            }),
                                          y = new URL(window.location.href),
                                          f =
                                            y.protocol +
                                            "//" +
                                            y.hostname +
                                            y.pathname,
                                          m =
                                            y.protocol +
                                            "//" +
                                            ((v = y),
                                            (g = new URL(v).hostname),
                                            (h = g.match(
                                              /([a-z0-9-]+\.[a-z]+)$/i
                                            )),
                                            h ? h[0] : g) +
                                            y.pathname,
                                          w = r.includes(f) || r.includes(m);
                                        var v, g, h;
                                        if (w) {
                                          var b = r.indexOf(f);
                                          (i.model_viewer_file = c[b]),
                                            (i.popup_text = l[b]),
                                            (i.product_id = s[b]),
                                            (i.ar_placement = p[b]),
                                            (i.isVariantEnable =
                                              d.length > 0 ? d[b] : null),
                                            document
                                              .querySelector('[id^="zieny_"]')
                                              .setAttribute(
                                                "data-product-id",
                                                i.product_id
                                              );
                                        }
                                        i.isVariantEnable &&
                                          "yes" === i.isVariantEnable &&
                                          (function (e, t) {
                                            return k.apply(this, arguments);
                                          })(new URL(f).hostname, y.pathname)
                                            .then(function (e) {
                                              if (
                                                ((window._zienyVariants =
                                                  e.data),
                                                (function (e) {
                                                  var t =
                                                      document.querySelector(
                                                        ".zieny-variant-container"
                                                      ),
                                                    n = t.querySelector(
                                                      "#zieny-variant-select"
                                                    ),
                                                    o = t.querySelector(
                                                      ".zieny-color-container"
                                                    ),
                                                    i = t.querySelector(
                                                      ".zieny-select-container"
                                                    ),
                                                    r = t.querySelector(
                                                      ".zieny-scroll-container"
                                                    ),
                                                    a =
                                                      (t.querySelector(
                                                        "#zieny-variant-label"
                                                      ),
                                                      t.querySelector(
                                                        "#zieny-variant-color-label"
                                                      ));
                                                  t.style.display = "flex";
                                                  var c = e.data,
                                                    l = c.variants,
                                                    u = {};
                                                  (window._zienyVariant = {
                                                    select: null,
                                                    color: null,
                                                  }),
                                                    l.forEach(function (e) {
                                                      if (
                                                        "colors" ===
                                                        e.variantType
                                                      ) {
                                                        (a.innerHTML =
                                                          e.variantName),
                                                          o.classList.contains(
                                                            "zieny-hide"
                                                          ) &&
                                                            (o.classList.remove(
                                                              "zieny-hide"
                                                            ),
                                                            o.classList.add(
                                                              "zieny-show"
                                                            )),
                                                          u[e.variantType] ||
                                                            ((window._zienyVariant.color =
                                                              e.id),
                                                            (u[e.variantType] =
                                                              e.id));
                                                        var t =
                                                          document.createElement(
                                                            "div"
                                                          );
                                                        t.classList.add(
                                                          "zieny-variant-color-swatch"
                                                        ),
                                                          u[e.variantType] &&
                                                            e.id ===
                                                              u[
                                                                e.variantType
                                                              ] &&
                                                            t.classList.add(
                                                              "selected"
                                                            ),
                                                          (t.style.backgroundColor =
                                                            e.hex),
                                                          t.setAttribute(
                                                            "data-id",
                                                            e.id
                                                          ),
                                                          t.setAttribute(
                                                            "data-color",
                                                            e.hex
                                                          ),
                                                          t.setAttribute(
                                                            "data-name",
                                                            e.name
                                                          ),
                                                          r.appendChild(t);
                                                      } else {
                                                        i.classList.contains(
                                                          "zieny-hide"
                                                        ) &&
                                                          (i.classList.remove(
                                                            "zieny-hide"
                                                          ),
                                                          i.classList.add(
                                                            "zieny-show"
                                                          )),
                                                          u[e.variantType] ||
                                                            ((window._zienyVariant.select =
                                                              e.id),
                                                            (u[e.variantType] =
                                                              e.id));
                                                        var c =
                                                          document.createElement(
                                                            "div"
                                                          );
                                                        c.classList.add(
                                                          "custom-option"
                                                        ),
                                                          u[e.variantType] &&
                                                            e.id ===
                                                              u[
                                                                e.variantType
                                                              ] &&
                                                            c.classList.add(
                                                              "selected"
                                                            ),
                                                          c.setAttribute(
                                                            "data-id",
                                                            e.id
                                                          ),
                                                          c.setAttribute(
                                                            "data-name",
                                                            e.name
                                                          ),
                                                          (c.textContent =
                                                            e.name),
                                                          n.appendChild(c);
                                                      }
                                                    });
                                                })(e),
                                                (function () {
                                                  var e =
                                                      document.querySelectorAll(
                                                        ".custom-option"
                                                      ),
                                                    t =
                                                      document.querySelectorAll(
                                                        ".zieny-variant-color-swatch"
                                                      ),
                                                    n =
                                                      document.getElementById(
                                                        "modelViewerscript"
                                                      ),
                                                    o = document.querySelector(
                                                      "#zieny-variant-color-label"
                                                    ),
                                                    i = document.querySelector(
                                                      "#zieny-color-preview"
                                                    ),
                                                    r = document.querySelector(
                                                      ".zieny-color-container-inner"
                                                    );
                                                  (i.style.display = "none"),
                                                    []
                                                      .concat(u(t), u(e))
                                                      .forEach(function (a) {
                                                        a.addEventListener(
                                                          "click",
                                                          function (c) {
                                                            var l =
                                                              c.target.getAttribute(
                                                                "data-id"
                                                              );
                                                            u(t).includes(a)
                                                              ? ((window._zienyVariant.color =
                                                                  l),
                                                                t.forEach(
                                                                  function (e) {
                                                                    return e.classList.remove(
                                                                      "selected"
                                                                    );
                                                                  }
                                                                ),
                                                                (o.innerHTML =
                                                                  c.target.getAttribute(
                                                                    "data-name"
                                                                  )),
                                                                (i.style.backgroundColor =
                                                                  c.target.getAttribute(
                                                                    "data-color"
                                                                  )),
                                                                (i.style.display =
                                                                  "block"),
                                                                r.classList.remove(
                                                                  "open"
                                                                ))
                                                              : (e.forEach(
                                                                  function (e) {
                                                                    return e.classList.remove(
                                                                      "selected"
                                                                    );
                                                                  }
                                                                ),
                                                                (window._zienyVariant.select =
                                                                  l)),
                                                              this.classList.add(
                                                                "selected"
                                                              );
                                                            var s = (function (
                                                              e
                                                            ) {
                                                              var t =
                                                                window._zienyVariants.fileUrls.find(
                                                                  function (t) {
                                                                    var n =
                                                                      Object.values(
                                                                        window._zienyVariant
                                                                      ).join(
                                                                        "|"
                                                                      );
                                                                    return window
                                                                      ._zienyVariants
                                                                      .isMultiVariantType
                                                                      ? n ===
                                                                          t.id
                                                                      : t.id ===
                                                                          e;
                                                                  }
                                                                );
                                                              return t;
                                                            })(l);
                                                            n &&
                                                              s &&
                                                              (n.setAttribute(
                                                                "src",
                                                                s.url
                                                              ),
                                                              window._zienyAddAnalytics &&
                                                                s.uniqueId &&
                                                                ((window._zienyVariantId =
                                                                  s.uniqueId),
                                                                window._zienyAddAnalytics(
                                                                  {
                                                                    product_id:
                                                                      s.uniqueId,
                                                                    iframe_btn_click:
                                                                      !0,
                                                                  }
                                                                )));
                                                          }
                                                        );
                                                      });
                                                  var a =
                                                      document.querySelector(
                                                        ".zieny-left"
                                                      ),
                                                    c =
                                                      document.querySelector(
                                                        ".zieny-right"
                                                      );
                                                  a &&
                                                    c &&
                                                    (a.addEventListener(
                                                      "click",
                                                      l
                                                    ),
                                                    c.addEventListener(
                                                      "click",
                                                      s
                                                    ));
                                                  function l() {
                                                    container.scrollBy({
                                                      left: -100,
                                                      behavior: "smooth",
                                                    });
                                                  }
                                                  function s() {
                                                    container.scrollBy({
                                                      left: 100,
                                                      behavior: "smooth",
                                                    });
                                                  }
                                                })(),
                                                (function () {
                                                  var e =
                                                      document.querySelector(
                                                        "#zieny-variant-select-wrapper"
                                                      ),
                                                    t = e.querySelector(
                                                      "#zieny-variant-select-trigger"
                                                    ),
                                                    n =
                                                      e.querySelectorAll(
                                                        ".custom-option"
                                                      ),
                                                    o = document.querySelector(
                                                      "#zieny-variant-color-trigger"
                                                    ),
                                                    i = document.querySelector(
                                                      "#zieny-variant-color-wrapper"
                                                    ),
                                                    r = document.querySelector(
                                                      ".zieny-color-container-inner"
                                                    ),
                                                    a = document.querySelector(
                                                      ".zieny-variant-container"
                                                    ),
                                                    c =
                                                      document.querySelector(
                                                        ".init-AR-button"
                                                      ),
                                                    l =
                                                      document.getElementById(
                                                        "modelViewerscript"
                                                      ),
                                                    u =
                                                      (document.querySelectorAll(
                                                        ".arrow > img"
                                                      ),
                                                      document.querySelectorAll(
                                                        ".arrow"
                                                      ),
                                                      function (e) {
                                                        "https://ar-view-zieny.com/".concat(
                                                          e
                                                            ? "spinner"
                                                            : "arrow",
                                                          ".svg"
                                                        );
                                                        (a.style.visibility = e
                                                          ? "hidden"
                                                          : "visible"),
                                                          (c.style.visibility =
                                                            e
                                                              ? "hidden"
                                                              : "visible");
                                                      });
                                                  (window._uiUpdateListener =
                                                    function (e) {
                                                      var n =
                                                        1 !==
                                                        e.detail.totalProgress;
                                                      (!n ||
                                                        ("true" !==
                                                          o.getAttribute(
                                                            "data-disabled"
                                                          ) &&
                                                          "true" !==
                                                            t.getAttribute(
                                                              "data-disabled"
                                                            ))) &&
                                                        window.innerWidth <
                                                          768 &&
                                                        u(n);
                                                    }),
                                                    l.addEventListener(
                                                      "progress",
                                                      window._uiUpdateListener
                                                    ),
                                                    o.addEventListener(
                                                      "click",
                                                      function () {
                                                        "true" !==
                                                          o.getAttribute(
                                                            "data-disabled"
                                                          ) &&
                                                          (i.classList.toggle(
                                                            "open"
                                                          ),
                                                          r.classList.toggle(
                                                            "open"
                                                          ));
                                                      }
                                                    ),
                                                    t.addEventListener(
                                                      "click",
                                                      function () {
                                                        "true" !==
                                                          t.getAttribute(
                                                            "data-disabled"
                                                          ) &&
                                                          e.classList.toggle(
                                                            "open"
                                                          );
                                                      }
                                                    ),
                                                    n.forEach(function (n) {
                                                      n.addEventListener(
                                                        "click",
                                                        function () {
                                                          n.getAttribute(
                                                            "data-value"
                                                          );
                                                          var o = n.textContent;
                                                          (t.querySelector(
                                                            ".selected-text"
                                                          ).textContent = o),
                                                            e.classList.remove(
                                                              "open"
                                                            );
                                                        }
                                                      );
                                                    }),
                                                    document.addEventListener(
                                                      "click",
                                                      function (t) {
                                                        e.contains(t.target) ||
                                                          e.classList.remove(
                                                            "open"
                                                          );
                                                      }
                                                    ),
                                                    E(
                                                      ".zieny-scroll-container",
                                                      ".zieny-variant-color-swatch",
                                                      0
                                                    ),
                                                    E(
                                                      ".custom-options",
                                                      ".custom-option",
                                                      0
                                                    );
                                                })(),
                                                _("openar") && _("variant_id"))
                                              ) {
                                                var t = new URLSearchParams(
                                                    window.location.search
                                                  ),
                                                  n =
                                                    ((i = t.get("variant_id")),
                                                    window._zienyVariants.fileUrls.find(
                                                      function (e) {
                                                        return e.id === i;
                                                      }
                                                    )),
                                                  o =
                                                    document.querySelector(
                                                      "#modelViewerscript"
                                                    );
                                                o &&
                                                  n &&
                                                  o.setAttribute("src", n.url),
                                                  L();
                                              }
                                              var i;
                                            })
                                            .catch(function (e) {
                                              console.error(
                                                "Error fetching product variants:",
                                                e
                                              );
                                            });
                                        var z = {
                                          enable_widget: w,
                                          company_button_ui_details:
                                            n.buttonUIdetails,
                                          modelviewer_settings: o,
                                          product_details: i,
                                          product_ui_details: n.buttonUIdetails,
                                          allowed_domain_list:
                                            n.allowed_domain_list,
                                          language: n.language,
                                          widget_ui: a(
                                            a({}, n.widgetButton),
                                            {},
                                            { text: i.popup_text }
                                          ),
                                        };
                                        return z;
                                      })(e),
                                      n = [
                                        document.querySelectorAll(
                                          "#zieny_widget .floating-button"
                                        ),
                                        document.querySelectorAll(
                                          "#zieny_widget .icon-container"
                                        ),
                                        document.querySelectorAll(
                                          "#zieny_widget #view-text"
                                        ),
                                      ],
                                      s = [
                                        document.querySelectorAll(
                                          "#zieny_widget .title-text"
                                        ),
                                        document.querySelectorAll(
                                          "#zieny_widget .init-AR-button"
                                        ),
                                        document.querySelectorAll(
                                          "#zieny_widget .subtitle-text"
                                        ),
                                        document.querySelectorAll(
                                          "#zieny_widget .zieny-powered-by a"
                                        ),
                                      ];
                                    t.enable_widget &&
                                      (v(r) || w(r),
                                      v(c) || w(c, "text/javascript"),
                                      t.widget_ui.button_font_url &&
                                        g(
                                          t.widget_ui.button_font_name,
                                          t.widget_ui.button_font_url,
                                          function () {
                                            n.forEach(function (e) {
                                              e.forEach(function (e) {
                                                e.style.setProperty(
                                                  "font-family",
                                                  t.widget_ui.button_font_name,
                                                  "important"
                                                );
                                              });
                                            });
                                          }
                                        ),
                                      t.widget_ui.popup_font_url &&
                                        g(
                                          t.widget_ui.popup_font_name,
                                          t.widget_ui.popup_font_url,
                                          function () {
                                            s.forEach(function (e) {
                                              e.forEach(function (e) {
                                                e.style.setProperty(
                                                  "font-family",
                                                  t.widget_ui.popup_font_name,
                                                  "important"
                                                );
                                              });
                                            });
                                          }
                                        ),
                                      (function (e, t) {
                                        var n = "",
                                          o = t.querySelector("#showModalBtn");
                                        e.product_ui_details.widget_font ||
                                        e.company_button_ui_details.widget_font
                                          ? (function (e, t) {
                                              var n =
                                                document.createElement("link");
                                              (n.id = "mainButtonFont"),
                                                (n.rel = "stylesheet"),
                                                (n.href =
                                                  "https://fonts.googleapis.com/css2?family=" +
                                                  e +
                                                  ":wght@400;700&display=swap"),
                                                document.head.appendChild(n),
                                                (t.style.fontFamily = e);
                                            })(
                                              e.product_ui_details
                                                .widget_font ||
                                                e.company_button_ui_details
                                                  .widget_font,
                                              o
                                            )
                                          : i("No custom font found");
                                        Object.keys(e.product_ui_details)
                                          .length > 0
                                          ? (n =
                                              e.product_ui_details
                                                .button_font_color)
                                          : Object.keys(
                                              e.company_button_ui_details
                                            ).length > 0 &&
                                            (n =
                                              e.company_button_ui_details
                                                .button_font_color);
                                        var r = {
                                          desktop: {
                                            pos1: {
                                              top: "30%",
                                              right: "0px",
                                              left: "auto",
                                            },
                                            pos2: {
                                              top: "50%",
                                              right: "0px",
                                              left: "auto",
                                            },
                                            pos3: {
                                              top: "97.5%",
                                              right: "auto",
                                              left: "50%",
                                            },
                                            pos4: {
                                              top: "97.5%",
                                              right: "80%",
                                              left: "auto",
                                            },
                                          },
                                          mobile: {
                                            pos1: { top: "30%", right: "0px" },
                                            pos2: { top: "50%", right: "0px" },
                                          },
                                        };
                                        function a(e, n) {
                                          var o = t.querySelector("#" + e);
                                          o && (o.textContent = n);
                                        }
                                        if (o) {
                                          var c = {
                                            first_popup_button:
                                              e.widget_ui.text ||
                                              "Bekijk dit product in 3D",
                                            first_popup_header:
                                              "Bekijk dit product in 3D",
                                            second_popup_button: "Bekijk in 3D",
                                            second_popup_header:
                                              "Bekijk in jouw ruimte",
                                            second_popup_step1_description:
                                              "Open de camera van je telefoon en richt op de QR-code om de AR-ervaring te starten.",
                                            second_popup_step1_title:
                                              "1. Scan de QR-code",
                                            second_popup_step2_description:
                                              "Gebruik je vingers om het product in jouw ruimte te verplaatsen en te draaien.",
                                            second_popup_step2_title:
                                              "2. Verplaats het product",
                                          };
                                          Object.keys(c).forEach(function (t) {
                                            c[t] &&
                                              e.language &&
                                              e.language[t] &&
                                              e.language[t].length > 0 &&
                                              (c[t] = e.language[t]);
                                          }),
                                            a(
                                              "first_popup_title",
                                              c.first_popup_header
                                            ),
                                            a(
                                              "activateAR",
                                              c.first_popup_button
                                            ),
                                            a(
                                              "second_popup_title",
                                              c.second_popup_header
                                            ),
                                            a(
                                              "again-open-model",
                                              c.second_popup_button
                                            );
                                          var u =
                                              document.getElementById(
                                                "view-text"
                                              ),
                                            s = document.getElementById("icon"),
                                            d = document.getElementById(l);
                                          u &&
                                            ((u.textContent = e.widget_ui.text),
                                            (u.style.color =
                                              e.widget_ui.text_color)),
                                            s &&
                                              (s.style.backgroundColor =
                                                e.widget_ui.button_icon_box_color);
                                          var y =
                                            document.querySelectorAll(
                                              ".zieny-powered-by"
                                            );
                                          if (
                                            e.widget_ui.sp_test &&
                                            !0 === e.widget_ui.sp_test
                                          ) {
                                            y &&
                                              y.length > 0 &&
                                              y.forEach(function (e) {
                                                e.style.display = "none";
                                              });
                                            var m =
                                              document.getElementById(
                                                "activateAR"
                                              );
                                            m &&
                                              window.innerWidth > 500 &&
                                              (m.style.display = "none");
                                          }
                                          e.widget_ui &&
                                            e.widget_ui.hasOwnProperty(
                                              "powered_by"
                                            ) &&
                                            !1 === e.widget_ui.powered_by &&
                                            y &&
                                            y.length > 0 &&
                                            y.forEach(function (e) {
                                              e.style.display = "none";
                                            }),
                                            e.widget_ui.qr_only_version &&
                                              (window.zienyArQrOnlyVersion =
                                                e.widget_ui.qr_only_version);
                                          var g =
                                            window.innerWidth > 500
                                              ? e.widget_ui.desktop_position
                                              : 1;
                                          r.desktop["pos" + g] &&
                                            (d.classList.toggle("pos" + g),
                                            o.classList.toggle("pos" + g),
                                            window.innerWidth > 500
                                              ? (d.classList.toggle("desktop"),
                                                o.classList.toggle("desktop"),
                                                e.widget_ui.big_popup &&
                                                  (d.classList.contains(
                                                    "big_popup"
                                                  ) ||
                                                    d.classList.toggle(
                                                      "big_popup"
                                                    ),
                                                  a(
                                                    "desk_qr_title",
                                                    c.second_popup_step1_title
                                                  ),
                                                  a(
                                                    "desk_step_one_title",
                                                    c.second_popup_step1_title
                                                  ),
                                                  a(
                                                    "desk_step_one_desc",
                                                    c.second_popup_step1_description
                                                  ),
                                                  a(
                                                    "desk_step_two_title",
                                                    c.second_popup_step2_title
                                                  ),
                                                  a(
                                                    "desk_step_two_desc",
                                                    c.second_popup_step2_description
                                                  )))
                                              : (d.classList.toggle("mobile"),
                                                o.classList.toggle("mobile"),
                                                (o.style.top =
                                                  e.widget_ui
                                                    .mobile_position_custom +
                                                  "px"))),
                                            (o.style.backgroundColor =
                                              e.widget_ui.button_background_color),
                                            (o.style.color = n);
                                          var h =
                                            document.querySelectorAll(
                                              ".zieny-ar-btn"
                                            );
                                          i("customZienyButton", h),
                                            h && h.length > 0
                                              ? h.forEach(function (e) {
                                                  e.style.display = "flex";
                                                })
                                              : (o.style.display = "flex");
                                          var b =
                                            t.querySelector("#activateAR");
                                          b &&
                                            (b.style.backgroundColor =
                                              e.widget_ui.button_background_color);
                                          var z =
                                            t.querySelector(
                                              "#again-open-model"
                                            );
                                          z &&
                                            (z.style.backgroundColor =
                                              e.widget_ui.button_background_color);
                                          var S =
                                              e.product_details
                                                .model_viewer_file,
                                            k =
                                              t.querySelector(
                                                "#modelViewerscript"
                                              );
                                          if (k) {
                                            k.setAttribute("src", S);
                                            var A =
                                                e.modelviewer_settings
                                                  .camera_controls,
                                              E =
                                                e.modelviewer_settings
                                                  .auto_rotate,
                                              q =
                                                (e.modelviewer_settings
                                                  .disable_zoom,
                                                e.product_details.ar_placement);
                                            E
                                              ? k.setAttribute(
                                                  "auto-rotate",
                                                  !0
                                                )
                                              : k.removeAttribute(
                                                  "auto-rotate"
                                                ),
                                              A
                                                ? k.setAttribute(
                                                    "camera-controls",
                                                    !0
                                                  )
                                                : k.removeAttribute(
                                                    "camera-controls"
                                                  ),
                                              q
                                                ? k.setAttribute(
                                                    "ar-placement",
                                                    q
                                                  )
                                                : k.setAttribute(
                                                    "ar-placement",
                                                    "floor"
                                                  ),
                                              e.widget_ui.lazy_loading ||
                                                k.setAttribute(
                                                  "loading",
                                                  "eager"
                                                ),
                                              !1 === e.widget_ui.scaling &&
                                                (i(
                                                  "scaling",
                                                  e.widget_ui.scaling
                                                ),
                                                k.setAttribute(
                                                  "ar-scale",
                                                  "fixed"
                                                )),
                                              k.setAttribute(
                                                "referrerpolicy",
                                                "origin"
                                              ),
                                              _("openar") &&
                                                !_("variant_id") &&
                                                L();
                                          }
                                          var j =
                                            document.createElement("link");
                                          (j.rel = "stylesheet"),
                                            (j.href = p),
                                            document.head.appendChild(j),
                                            v(f) || w(f),
                                            window.zienyAr.emit("ready");
                                        } else i("widget will not load");
                                      })(t, o));
                                  } else i("Zieny widget is not loaded");
                                });
                            })
                        : i("Zieny widget is not loaded");
                  }
                  function z(e) {
                    return S.apply(this, arguments);
                  }
                  function S() {
                    return (S = y(
                      o().m(function e(t) {
                        return o().w(function (e) {
                          for (;;)
                            if (0 === e.n)
                              return e.a(
                                2,
                                fetch(t)
                                  .then(function (e) {
                                    if (!e.ok)
                                      throw new Error(
                                        "Network response was not ok"
                                      );
                                    return e.json();
                                  })
                                  .catch(function (e) {
                                    console.error("Fetch error:", e);
                                  })
                              );
                        }, e);
                      })
                    )).apply(this, arguments);
                  }
                  function k() {
                    return (k = y(
                      o().m(function e(t, n) {
                        return o().w(function (e) {
                          for (;;)
                            if (0 === e.n)
                              return e.a(
                                2,
                                z(
                                  ""
                                    .concat(m, "?company_url=")
                                    .concat(t, "&product_url=")
                                    .concat(n)
                                )
                              );
                        }, e);
                      })
                    )).apply(this, arguments);
                  }
                  function A() {
                    return (A = y(
                      o().m(function e(t) {
                        var n, r;
                        return o().w(function (e) {
                          for (;;)
                            switch (e.n) {
                              case 0:
                                if (
                                  ((t.querySelector(
                                    "#showModalBtn"
                                  ).style.display = "none"),
                                  (n = { company_url: window.location.host }),
                                  !(
                                    (r = JSON.parse(
                                      sessionStorage.getItem(
                                        "zienyWidgetData"
                                      ) || "null"
                                    )) && r.expiry > Date.now()
                                  ))
                                ) {
                                  e.n = 1;
                                  break;
                                }
                                return (
                                  i("Zieny widget data from cache", r),
                                  e.a(2, Promise.resolve(r))
                                );
                              case 1:
                                return (
                                  sessionStorage.removeItem("zienyWidgetData"),
                                  e.a(
                                    2,
                                    fetch(
                                      ""
                                        .concat(d, "?company_url=")
                                        .concat(n.company_url),
                                      {
                                        method: "GET",
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                      }
                                    )
                                      .then(function (e) {
                                        if (!e.ok)
                                          throw new Error(
                                            "Network response was not ok"
                                          );
                                        return e.json();
                                      })
                                      .catch(function (e) {
                                        i("Zieny widget error", e.message, e);
                                      })
                                  )
                                );
                            }
                        }, e);
                      })
                    )).apply(this, arguments);
                  }
                  function E(e, t, n) {
                    var o = document.querySelector(e);
                    if (o) {
                      var i = o.querySelectorAll(t);
                      if (n < 0 || n >= i.length)
                        console.warn("Invalid index: ".concat(n));
                      else i[n].click();
                    } else console.warn("Container not found");
                  }
                  function L() {
                    var e = document.querySelector("#modelViewerscript"),
                      t = /(android)/i.test(navigator.userAgent);
                    e.addEventListener("load", function () {
                      i("Opening AR"),
                        t && window._zeinyClickBtnListener
                          ? window._zeinyClickBtnListener()
                          : e.activateAR();
                    });
                  }
                  (e = window.history),
                    (t = e.pushState),
                    (n = e.replaceState),
                    (e.pushState = function () {
                      t.apply(e, arguments), b();
                    }),
                    (e.replaceState = function () {
                      n.apply(e, arguments), b();
                    }),
                    window.addEventListener("popstate", function (e) {
                      b();
                    }),
                    "loading" === document.readyState
                      ? document.addEventListener(
                          "DOMContentLoaded",
                          function () {
                            b(), h();
                          }
                        )
                      : (b(), h()),
                    (window._changeVariantModelViewerSrc = function (e, t) {
                      var n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 0,
                        o = document.getElementById("modelViewerscript");
                      o &&
                        (o.setAttribute("src", e),
                        "colors" === t
                          ? E(
                              ".zieny-scroll-container",
                              ".zieny-variant-color-swatch",
                              n
                            )
                          : E(".custom-options", ".custom-option", n));
                    });
                }),
                (i = function () {}),
                (window._log = i),
                (c = (function () {
                  return (
                    (e = function e() {
                      t(this, e), (this.events = {}), (this.modalState = !1);
                    }),
                    (o = [
                      {
                        key: "on",
                        value: function (e, t) {
                          this.events[e] || (this.events[e] = []),
                            this.events[e].push(t);
                        },
                      },
                      {
                        key: "emit",
                        value: function (e) {
                          for (
                            var t = arguments.length,
                              n = new Array(t > 1 ? t - 1 : 0),
                              o = 1;
                            o < t;
                            o++
                          )
                            n[o - 1] = arguments[o];
                          this.events[e] &&
                            this.events[e].forEach(function (e) {
                              return e.apply(void 0, n);
                            });
                        },
                      },
                      {
                        key: "off",
                        value: function (e, t) {
                          this.events[e] &&
                            (this.events[e] = this.events[e].filter(function (
                              e
                            ) {
                              return e !== t;
                            }));
                        },
                      },
                      {
                        key: "open",
                        value: function () {
                          i("open", this.modalState),
                            !1 === this.modalState &&
                              window._zeinyClickBtnListener &&
                              (window.zienyAr.emit("open"),
                              window._zeinyClickBtnListener(),
                              (this.modalState = !0));
                        },
                      },
                      {
                        key: "close",
                        value: function () {
                          !0 === this.modalState &&
                            window._zeinyClickBtnListener &&
                            (window.zienyAr.emit("close"),
                            window._zeinyClickBtnListener(),
                            (this.modalState = !1));
                        },
                      },
                      {
                        key: "changeVariant",
                        value: function (e) {
                          var t = null,
                            n = 0,
                            o = null;
                          window._zienyVariants &&
                            window._zienyVariants.variants.length > 0 &&
                            ((t = window._zienyVariants.variants.find(function (
                              t
                            ) {
                              return t.id === e;
                            })),
                            (o = t.variantType),
                            (n = window._zienyVariants.variants
                              .filter(function (e) {
                                return e.variantType === o;
                              })
                              .findIndex(function (t) {
                                return t.id === e;
                              }))),
                            t
                              ? window._changeVariantModelViewerSrc(
                                  t.fileUrl,
                                  o,
                                  n
                                )
                              : console.error("Zieny Variant not found");
                        },
                      },
                    ]),
                    o && n(e.prototype, o),
                    r && n(e, r),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                  var e, o, r;
                })()),
                (window.onload = function () {
                  l();
                }),
                "complete" !== document.readyState ||
                  window._zeinyScriptLoaded ||
                  l(),
                window.addEventListener("load", function () {
                  window._zeinyScriptLoaded || l();
                });
            case 1:
              return e.a(2);
          }
      }, e);
    })
  )();
})();
