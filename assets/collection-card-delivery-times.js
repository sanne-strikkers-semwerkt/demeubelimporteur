/**
 * Run once per page: update delivery text (Levering vanaf ...) for all
 * .product-box.coll-page tiles using data-stockinfo. Used on collection and search.
 */
(function () {
  function getMondayOfWeek(weekNumber, year) {
    year = year || new Date().getFullYear();
    var jan1 = new Date(year, 0, 1);
    var jan1Day = jan1.getDay();
    var offset = jan1Day <= 4 ? 1 - jan1Day : 8 - jan1Day;
    var monday = new Date(year, 0, 1 + offset + (weekNumber - 1) * 7);
    var day = monday.getDate();
    var monthName = monday.toLocaleString('nl-NL', { month: 'long' });
    return day + ' ' + monthName;
  }

  function getMondayOfWeekFromToday(weeksFromToday) {
    var today = new Date();
    var targetDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + weeksFromToday * 7);
    var day = targetDate.getDay();
    var diffToMonday = day === 0 ? -6 : 1 - day;
    var monday = new Date(targetDate);
    monday.setDate(targetDate.getDate() + diffToMonday);
    var monthName = monday.toLocaleString('nl-NL', { month: 'long' });
    return monday.getDate() + ' ' + monthName;
  }

  function updateDeliveryTimes() {
    var rangeRegex = /tussen de\s+(\d+)\s+en\s+(\d+)\s+weken/i;
    var singleWeekRegex = /(\d+)\s*weken?/i;
    var vanafWeekRegex = /vanaf\s+week\s+(\d+)/i;

    var boxes = document.querySelectorAll('.product-box.coll-page');
    boxes.forEach(function (box) {
      var levertijdText = box.getAttribute('data-stockinfo');
      if (!levertijdText) return;

      var updatedText = levertijdText;
      if (rangeRegex.test(levertijdText)) {
        var match = levertijdText.match(rangeRegex);
        var earliestWeek = parseInt(match[1], 10);
        updatedText = 'Levering vanaf ' + getMondayOfWeekFromToday(earliestWeek);
      } else if (vanafWeekRegex.test(levertijdText)) {
        match = levertijdText.match(vanafWeekRegex);
        updatedText = 'Levering vanaf ' + getMondayOfWeek(parseInt(match[1], 10));
      } else if (singleWeekRegex.test(levertijdText)) {
        match = levertijdText.match(singleWeekRegex);
        updatedText = 'Levering vanaf ' + getMondayOfWeek(parseInt(match[1], 10));
      }

      var weeksEl = box.querySelector('h5.weekss');
      if (weeksEl) weeksEl.textContent = updatedText;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateDeliveryTimes);
  } else {
    updateDeliveryTimes();
  }
})();
