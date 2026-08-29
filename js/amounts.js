/*
 * Ingredient amount parsing + aggregation.
 *
 * Gousto cards print amounts as strings like "250g", "1tsp", "2 x 250g",
 * "125g & 250g", "1", or "–" (nothing for that serving count). This module
 * turns those strings into {qty, unit} pairs so the shopping list can sum
 * the same ingredient across recipes.
 *
 * Works both in the browser (window.Amounts) and in Node (module.exports)
 * so the parser can be unit-tested.
 */
(function (root) {
  'use strict';

  var UNIT_ALIASES = {
    g: 'g', gram: 'g', grams: 'g',
    kg: 'kg',
    ml: 'ml', l: 'l', litre: 'l', liter: 'l',
    tsp: 'tsp', tbsp: 'tbsp',
    x: '', pcs: '', pc: '', unit: '', units: ''
  };

  var VULGAR_FRACTIONS = { '½': 0.5, '¼': 0.25, '¾': 0.75, '⅓': 1 / 3, '⅔': 2 / 3 };

  // Cards print unicode fractions: "1½ x 50g", "½", "¾". Normalise to decimals
  // ("1.5 x 50g", "0.5", "0.75") before parsing.
  function normalizeFractions(str) {
    return str.replace(/(\d+)?\s*([½¼¾⅓⅔])/g, function (_, whole, frac) {
      var val = (whole ? parseInt(whole, 10) : 0) + VULGAR_FRACTIONS[frac];
      return String(Math.round(val * 100) / 100);
    });
  }

  // Convert to a base unit so 0.5kg + 250g can merge.
  function toBase(qty, unit) {
    if (unit === 'kg') return { qty: qty * 1000, unit: 'g' };
    if (unit === 'l') return { qty: qty * 1000, unit: 'ml' };
    return { qty: qty, unit: unit };
  }

  // "1 1/2" -> 1.5, "1/2" -> 0.5, "5.5" -> 5.5, "3" -> 3
  function parseNumber(str) {
    str = str.trim();
    var whole = 0;
    var m = str.match(/^(\d+)\s+(\d+)\s*\/\s*(\d+)$/); // "1 1/2"
    if (m) return parseInt(m[1], 10) + parseInt(m[2], 10) / parseInt(m[3], 10);
    m = str.match(/^(\d+)\s*\/\s*(\d+)$/); // "1/2"
    if (m) return parseInt(m[1], 10) / parseInt(m[2], 10);
    var n = parseFloat(str);
    return isNaN(n) ? null : n;
  }

  // Parse a single term like "250g", "2 x 250g", "0.5tsp", "1"
  function parseTerm(term) {
    term = term.trim().toLowerCase();
    if (!term || term === '-' || term === '–' || term === '—') return null;

    var mult = 1;
    // "2 x 250g" — multiplier prefix
    var m = term.match(/^(\d+(?:\.\d+)?)\s*[x×]\s*(.+)$/);
    if (m) {
      mult = parseFloat(m[1]);
      term = m[2].trim();
    }

    // number + optional unit, e.g. "5.5g", "1 tbsp", "1 1/2 tsp", "3"
    m = term.match(/^((?:\d+\s+\d+\s*\/\s*\d+)|(?:\d+\s*\/\s*\d+)|(?:\d+(?:\.\d+)?))\s*([a-z]*)\.?$/);
    if (!m) return null;

    var qty = parseNumber(m[1]);
    if (qty === null) return null;

    var rawUnit = m[2] || '';
    var unit = Object.prototype.hasOwnProperty.call(UNIT_ALIASES, rawUnit)
      ? UNIT_ALIASES[rawUnit]
      : rawUnit; // keep unknown units as-is rather than losing them

    return toBase(qty * mult, unit);
  }

  /**
   * Parse a full amount string into an array of {qty, unit} pairs,
   * merged by unit. Returns [] for empty / "–" amounts.
   *   "2 x 250g"    -> [{qty: 500, unit: 'g'}]
   *   "125g & 250g" -> [{qty: 375, unit: 'g'}]
   *   "1"           -> [{qty: 1, unit: ''}]
   */
  function parseAmount(str) {
    if (str === null || str === undefined) return [];
    var parts = normalizeFractions(String(str)).split(/&|\+|,/);
    var byUnit = {};
    var order = [];
    for (var i = 0; i < parts.length; i++) {
      var parsed = parseTerm(parts[i]);
      if (!parsed) continue;
      if (!(parsed.unit in byUnit)) {
        byUnit[parsed.unit] = 0;
        order.push(parsed.unit);
      }
      byUnit[parsed.unit] += parsed.qty;
    }
    return order.map(function (u) {
      return { qty: round2(byUnit[u]), unit: u };
    });
  }

  function round2(n) {
    return Math.round(n * 100) / 100;
  }

  /**
   * Aggregate ingredient lines across recipes.
   * items: [{name, category, amountStr}]
   * Returns [{name, category, parts: [{qty, unit}], unparsed: [str]}]
   * merged case-insensitively by name.
   */
  function aggregate(items) {
    var byName = {};
    var order = [];
    items.forEach(function (item) {
      var key = item.name.trim().toLowerCase();
      if (!(key in byName)) {
        byName[key] = { name: item.name.trim(), category: item.category || 'other', byUnit: {}, unitOrder: [], unparsed: [] };
        order.push(key);
      }
      var entry = byName[key];
      var parts = parseAmount(item.amountStr);
      if (parts.length === 0 && String(item.amountStr || '').trim() &&
          !/^[-–—]$/.test(String(item.amountStr).trim())) {
        entry.unparsed.push(String(item.amountStr).trim());
        return;
      }
      parts.forEach(function (p) {
        if (!(p.unit in entry.byUnit)) {
          entry.byUnit[p.unit] = 0;
          entry.unitOrder.push(p.unit);
        }
        entry.byUnit[p.unit] += p.qty;
      });
    });
    return order.map(function (key) {
      var e = byName[key];
      return {
        name: e.name,
        category: e.category,
        parts: e.unitOrder.map(function (u) { return { qty: round2(e.byUnit[u]), unit: u }; }),
        unparsed: e.unparsed
      };
    });
  }

  // "500 g" -> "500g", counts -> "3", tidy decimals
  function formatPart(part) {
    var qty = part.qty;
    var str = (Math.abs(qty - Math.round(qty)) < 1e-9)
      ? String(Math.round(qty))
      : String(qty);
    if (!part.unit) return str;
    if (part.unit === 'tsp' || part.unit === 'tbsp') return str + ' ' + part.unit;
    return str + part.unit;
  }

  function formatParts(parts, unparsed) {
    var bits = parts.map(formatPart);
    if (unparsed && unparsed.length) bits = bits.concat(unparsed);
    return bits.join(' + ');
  }

  var api = {
    parseAmount: parseAmount,
    aggregate: aggregate,
    formatPart: formatPart,
    formatParts: formatParts
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
  root.Amounts = api;
})(typeof window !== 'undefined' ? window : globalThis);
