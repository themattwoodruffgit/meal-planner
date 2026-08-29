/* Run with: node tests/swaps.test.js */
'use strict';
const S = require('../js/swaps.js');

let passed = 0, failed = 0;
function eq(actual, expected, label) {
  const a = JSON.stringify(actual), e = JSON.stringify(expected);
  if (a === e) { passed++; }
  else { failed++; console.error(`FAIL ${label}\n  expected ${e}\n  got      ${a}`); }
}

const both = { wholemeal: true, upf: true };
const wm = { wholemeal: true, upf: false };
const upf = { wholemeal: false, upf: true };
const off = { wholemeal: false, upf: false };

// wholemeal rules
eq(S.apply('white basmati rice', wm).name, 'brown basmati rice', 'white basmati -> brown');
eq(S.apply('white long grain rice (100g)', wm).name, 'brown long grain rice', 'long grain with pack size');
eq(S.apply('penne pasta', wm).name, 'wholewheat penne', 'penne matches inside name');
eq(S.apply('spaghetti', wm).name, 'wholewheat spaghetti', 'spaghetti');
eq(S.apply('linguine', wm).name, 'wholewheat linguine', 'linguine');
eq(S.apply('plain tortillas', wm).name, 'wholemeal tortillas', 'tortillas wholemeal');
eq(S.apply('ciabatta (1pcs)', wm).name, 'wholemeal ciabatta (or crusty wholemeal roll)', 'ciabatta');
eq(S.apply('naan breads', wm).name, 'wholemeal pitta (shop wholemeal naan is rare)', 'naan -> wholemeal pitta');
eq(S.apply('gnocchi (250g)', wm).swappedFrom, null, 'gnocchi is potato — not a wholemeal target');

// UPF rules
eq(S.apply('fish fingers', upf).name, 'chunky white fish strips in homemade breadcrumbs', 'fish fingers');
eq(S.apply('chicken stock mix (11g)', upf).name, 'fresh stock or natural bouillon (check the label)', 'stock mix');
eq(S.apply('beef stock cube', upf).name, 'fresh stock or natural bouillon (check the label)', 'stock cube');
eq(S.apply('hoisin sauce', upf).name, 'homemade hoisin (soy, honey, peanut butter, five-spice)', 'hoisin');
eq(S.apply('crispy onions', upf).name, 'shallots, thinly sliced and pan-fried until crisp', 'crispy onions');
eq(S.apply('granola', upf).swappedFrom, 'granola', 'granola flagged');
eq(S.apply('pork sausages', upf).swappedFrom, 'pork sausages', 'sausages flagged');
eq(S.apply('ready-rolled puff pastry (320g)', upf).name, 'all-butter puff pastry with a short ingredient list', 'puff pastry flagged');
eq(S.apply('soy sauce', upf).swappedFrom, null, 'traditional soy sauce untouched');
eq(S.apply('tomato paste (32g)', upf).swappedFrom, null, 'tomato paste untouched');

// precedence: UPF suggestion wins when both toggles match the same item
eq(S.apply('plain tortillas', both).name, 'wraps with a short ingredient list', 'UPF wins over wholemeal for tortillas');
// wholemeal-only item unaffected by UPF toggle alone
eq(S.apply('white basmati rice', upf).swappedFrom, null, 'rice is not UPF');
eq(S.apply('white basmati rice', both).name, 'brown basmati rice', 'both toggles: rice still swaps wholemeal');

// toggles off
eq(S.apply('fish fingers', off), { name: 'fish fingers', swappedFrom: null }, 'all off = untouched');
eq(S.apply('brown onion', both), { name: 'brown onion', swappedFrom: null }, 'no rule = untouched');

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
