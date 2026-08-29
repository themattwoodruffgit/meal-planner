/* Run with: node tests/amounts.test.js */
'use strict';
const A = require('../js/amounts.js');

let passed = 0, failed = 0;
function eq(actual, expected, label) {
  const a = JSON.stringify(actual), e = JSON.stringify(expected);
  if (a === e) { passed++; }
  else { failed++; console.error(`FAIL ${label}\n  expected ${e}\n  got      ${a}`); }
}

/* ---- parseAmount ---- */
eq(A.parseAmount('250g'), [{ qty: 250, unit: 'g' }], 'simple grams');
eq(A.parseAmount('5.5g'), [{ qty: 5.5, unit: 'g' }], 'decimal grams');
eq(A.parseAmount('1tsp'), [{ qty: 1, unit: 'tsp' }], 'tsp no space');
eq(A.parseAmount('1 tbsp'), [{ qty: 1, unit: 'tbsp' }], 'tbsp with space');
eq(A.parseAmount('0.5tsp'), [{ qty: 0.5, unit: 'tsp' }], 'half tsp');
eq(A.parseAmount('1 1/2 tsp'), [{ qty: 1.5, unit: 'tsp' }], 'mixed fraction');
eq(A.parseAmount('1/2 tsp'), [{ qty: 0.5, unit: 'tsp' }], 'bare fraction');
eq(A.parseAmount('3'), [{ qty: 3, unit: '' }], 'bare count');
eq(A.parseAmount('2 x 250g'), [{ qty: 500, unit: 'g' }], 'multiplied grams');
eq(A.parseAmount('2 X 0.5tsp'), [{ qty: 1, unit: 'tsp' }], 'multiplied tsp, capital X');
eq(A.parseAmount('125g & 250g'), [{ qty: 375, unit: 'g' }], 'ampersand sum');
eq(A.parseAmount('65g & 130g'), [{ qty: 195, unit: 'g' }], 'ampersand sum 2');
eq(A.parseAmount('300ml'), [{ qty: 300, unit: 'ml' }], 'ml');
eq(A.parseAmount('1kg'), [{ qty: 1000, unit: 'g' }], 'kg normalised to g');
eq(A.parseAmount(''), [], 'empty string');
eq(A.parseAmount('–'), [], 'en dash none');
eq(A.parseAmount('-'), [], 'hyphen none');
eq(A.parseAmount(null), [], 'null');
eq(A.parseAmount('40g & 1'), [{ qty: 40, unit: 'g' }, { qty: 1, unit: '' }], 'mixed units kept separate');
eq(A.parseAmount('½'), [{ qty: 0.5, unit: '' }], 'unicode half');
eq(A.parseAmount('¾'), [{ qty: 0.75, unit: '' }], 'unicode three-quarters');
eq(A.parseAmount('1½'), [{ qty: 1.5, unit: '' }], 'unicode mixed number');
eq(A.parseAmount('1½ x 50g'), [{ qty: 75, unit: 'g' }], 'unicode fraction multiplier');
eq(A.parseAmount('½ x 15ml'), [{ qty: 7.5, unit: 'ml' }], 'half multiplier ml');
eq(A.parseAmount('8ml & 15ml'), [{ qty: 23, unit: 'ml' }], 'ml sum');
eq(A.parseAmount('2 x 8ml'), [{ qty: 16, unit: 'ml' }], 'multiplied ml');

/* ---- aggregate ---- */
const agg = A.aggregate([
  { name: 'brown onion', category: 'produce', amountStr: '1' },
  { name: 'Brown Onion', category: 'produce', amountStr: '2' },
  { name: 'spinach', category: 'produce', amountStr: '120g' },
  { name: 'spinach', category: 'produce', amountStr: '2 x 120g' },
  { name: 'chicken stock mix', category: 'pantry', amountStr: '' },
  { name: 'garam masala', category: 'herbs & spices', amountStr: '1tbsp' },
  { name: 'garam masala', category: 'herbs & spices', amountStr: '2 x 1tbsp' }
]);

eq(agg.length, 4, 'aggregate row count (empty amount dropped later by caller filter — row still returned)');
eq(agg[0], { name: 'brown onion', category: 'produce', parts: [{ qty: 3, unit: '' }], unparsed: [] }, 'onion count merged case-insensitively');
eq(agg[1], { name: 'spinach', category: 'produce', parts: [{ qty: 360, unit: 'g' }], unparsed: [] }, 'spinach grams summed');
eq(agg[2], { name: 'chicken stock mix', category: 'pantry', parts: [], unparsed: [] }, 'empty amount yields empty parts');
eq(agg[3], { name: 'garam masala', category: 'herbs & spices', parts: [{ qty: 3, unit: 'tbsp' }], unparsed: [] }, 'tbsp summed');

/* ---- formatting ---- */
eq(A.formatPart({ qty: 500, unit: 'g' }), '500g', 'format grams');
eq(A.formatPart({ qty: 3, unit: '' }), '3', 'format count');
eq(A.formatPart({ qty: 1.5, unit: 'tsp' }), '1.5 tsp', 'format tsp spaced');
eq(A.formatPart({ qty: 4, unit: 'rashers' }), '4 rashers', 'word units spaced');
eq(A.formatPart({ qty: 6, unit: 'slices' }), '6 slices', 'slices spaced');
eq(A.parseAmount('4 rashers'), [{ qty: 4, unit: 'rashers' }], 'rashers parse');
eq(A.parseAmount('4 slices & 2 slices'), [{ qty: 6, unit: 'slices' }], 'slices sum');
eq(A.formatParts([{ qty: 40, unit: 'g' }, { qty: 1, unit: '' }], []), '40g + 1', 'format mixed parts');
eq(A.formatParts([{ qty: 40, unit: 'g' }], ['a splash']), '40g + a splash', 'unparsed appended');

/* ---- full-recipe scenario: Saag Masala for 2 twice (two nights) ---- */
const twice = A.aggregate([
  { name: 'chicken breast strips', category: 'meat & fish', amountStr: '250g' },
  { name: 'chicken breast strips', category: 'meat & fish', amountStr: '250g' },
  { name: 'white basmati rice', category: 'pantry', amountStr: '130g' },
  { name: 'white basmati rice', category: 'pantry', amountStr: '65g & 130g' }
]);
eq(twice[0].parts, [{ qty: 500, unit: 'g' }], 'chicken across two nights');
eq(twice[1].parts, [{ qty: 325, unit: 'g' }], 'rice for 2 + rice for 3');

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
