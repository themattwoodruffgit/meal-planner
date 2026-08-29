/*
 * Healthier shopping-list swaps.
 *
 * Two independent rule sets applied to aggregated shopping-list item names:
 *  - WHOLEMEAL: white-carb items (bread, pasta, rice, wraps) -> wholemeal/brown versions
 *  - UPF: ultra-processed items -> a whole-food alternative suggestion
 *
 * Matching is by lowercase substring against the ingredient name. When both rule
 * sets are enabled and both match, the UPF suggestion wins (it is the bigger change).
 *
 * UMD-style like amounts.js so the rules are unit-testable in Node.
 */
(function (root) {
  'use strict';

  var WHOLEMEAL = [
    { match: 'white basmati rice',    swap: 'brown basmati rice' },
    { match: 'white long grain rice', swap: 'brown long grain rice' },
    { match: 'linguine',              swap: 'wholewheat linguine' },
    { match: 'spaghetti',             swap: 'wholewheat spaghetti' },
    { match: 'farfalle',              swap: 'wholewheat farfalle' },
    { match: 'tortiglioni',           swap: 'wholewheat tortiglioni' },
    { match: 'rigatoni',              swap: 'wholewheat rigatoni' },
    { match: 'penne',                 swap: 'wholewheat penne' },
    { match: 'macaroni',              swap: 'wholewheat macaroni' },
    { match: 'orzo',                  swap: 'wholewheat orzo' },
    { match: 'udon',                  swap: 'wholewheat noodles' },
    { match: 'egg noodle',            swap: 'wholewheat noodles' },
    { match: 'ciabatta',              swap: 'wholemeal ciabatta (or crusty wholemeal roll)' },
    { match: 'tortilla',              swap: 'wholemeal tortillas' },
    { match: 'pitta',                 swap: 'wholemeal pitta' },
    { match: 'brioche bun',           swap: 'wholemeal bun' },
    { match: 'burger bun',            swap: 'wholemeal bun' },
    { match: 'white bread',           swap: 'wholemeal bread' }
  ];

  var UPF = [
    { match: 'fish finger',       swap: 'chunky white fish strips in homemade breadcrumbs' },
    { match: 'stock mix',         swap: 'fresh stock or natural bouillon (check the label)' },
    { match: 'stock cube',        swap: 'fresh stock or natural bouillon (check the label)' },
    { match: 'hoisin sauce',      swap: 'homemade hoisin (soy, honey, peanut butter, five-spice)' },
    { match: 'crispy onion',      swap: 'shallots, thinly sliced and pan-fried until crisp' },
    { match: 'red chilli relish', swap: 'fresh chilli, honey & vinegar, mixed' },
    { match: 'sweet chilli',      swap: 'fresh chilli, honey & rice vinegar, mixed' },
    { match: 'sriracha',          swap: 'fresh chilli and a squeeze of lime' },
    { match: 'mayo',              swap: 'thick natural yoghurt or homemade mayonnaise' },
    { match: 'gnocchi',           swap: 'gnocchi with a short ingredient list (or homemade)' },
    { match: 'granola',           swap: 'low-sugar granola with a short ingredient list (or homemade: oats, nuts, honey)' },
    { match: 'pork sausages',     swap: "butcher's high-meat-content sausages (check the label)" },
    { match: 'puff pastry',       swap: 'all-butter puff pastry with a short ingredient list' },
    { match: 'baked beans',       swap: 'cannellini beans simmered in passata' },
    { match: 'tortilla',          swap: 'wraps with a short ingredient list' },
    { match: 'ciabatta',          swap: 'a fresh bakery loaf' }
  ];

  function findRule(rules, name) {
    var lower = name.toLowerCase();
    for (var i = 0; i < rules.length; i++) {
      if (lower.indexOf(rules[i].match) !== -1) return rules[i];
    }
    return null;
  }

  /**
   * apply("white basmati rice", {wholemeal: true, upf: false})
   *   -> { name: "brown basmati rice", swappedFrom: "white basmati rice" }
   * No match (or all toggles off) -> { name: original, swappedFrom: null }
   */
  function apply(name, opts) {
    opts = opts || {};
    var rule = null;
    if (opts.upf) rule = findRule(UPF, name);
    if (!rule && opts.wholemeal) rule = findRule(WHOLEMEAL, name);
    if (!rule) return { name: name, swappedFrom: null };
    return { name: rule.swap, swappedFrom: name };
  }

  var api = { apply: apply, WHOLEMEAL: WHOLEMEAL, UPF: UPF };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.Swaps = api;
})(typeof window !== 'undefined' ? window : globalThis);
