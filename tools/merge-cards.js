#!/usr/bin/env node
/*
 * Merge agent-transcribed chunk JSONs into data/recipes.js entries.
 *   node tools/merge-cards.js <chunks-dir>          -> dry-run report only
 *   node tools/merge-cards.js <chunks-dir> --write  -> append validated recipes to data/recipes.js
 */
'use strict';
const fs = require('fs');
const path = require('path');

const CARDS_DIR = process.argv[2];
if (!CARDS_DIR || !fs.existsSync(CARDS_DIR)) {
  console.error('usage: node tools/merge-cards.js <dir-with-chunk-*.json> [--write]');
  process.exit(1);
}
const REPO = path.join(__dirname, '..');
const RECIPES_PATH = path.join(REPO, 'data', 'recipes.js');
const A = require(path.join(REPO, 'js', 'amounts.js'));

const CATEGORIES = new Set(['produce', 'meat & fish', 'dairy', 'bakery', 'frozen', 'pantry', 'herbs & spices', 'other']);
const write = process.argv.includes('--write');

// ---- load existing recipe ids ----
global.window = global;
require(RECIPES_PATH);
const existingIds = new Set(global.RECIPES.map(r => r.id));

// ---- load chunks ----
const chunkFiles = fs.readdirSync(CARDS_DIR).filter(f => /^chunk-..\.json$/.test(f)).sort();
const problems = [];
const warnings = [];
const byRef = {}; // ref -> {fronts: [], backs: []}
const orphanFronts = []; // fronts whose cardRef was unreadable/cropped

for (const cf of chunkFiles) {
  let data;
  try {
    data = JSON.parse(fs.readFileSync(path.join(CARDS_DIR, cf), 'utf8'));
  } catch (e) {
    problems.push(`${cf}: JSON parse error — ${e.message}`);
    continue;
  }
  for (const entry of data.entries || []) {
    if (entry.side === 'skip') {
      warnings.push(`SKIPPED ${entry.file}: ${entry.reason}`);
      continue;
    }
    const ref = (entry.cardRef || '').trim();
    if (!/^R-\d{2,5}$/.test(ref)) {
      if (entry.side === 'front' && entry.title) {
        orphanFronts.push(entry); // ref cropped out of photo — pair by title below
      } else {
        problems.push(`${cf} ${entry.file}: bad cardRef "${entry.cardRef}" on a ${entry.side}`);
      }
      continue;
    }
    byRef[ref] = byRef[ref] || { fronts: [], backs: [] };
    if (entry.side === 'front') byRef[ref].fronts.push(entry);
    else if (entry.side === 'back') byRef[ref].backs.push(entry);
    else problems.push(`${cf} ${entry.file}: unknown side "${entry.side}"`);
  }
}

// ---- pair orphan fronts (unreadable ref) to backs via title-in-steps match ----
// Backs reliably restate the dish name in their steps ("Serve the <dish>...").
function titleWords(t) {
  return t.toLowerCase().replace(/\(v\)/g, '').replace(/[^a-z0-9 ]/g, ' ')
    .split(/\s+/).filter(w => w.length > 3 && !['with', 'style', 'your'].includes(w));
}
for (const front of orphanFronts) {
  const words = titleWords(front.title);
  const scored = Object.keys(byRef)
    .filter(ref => byRef[ref].backs.length && !byRef[ref].fronts.length)
    .map(ref => {
      const stepsText = byRef[ref].backs[0].steps.join(' ').toLowerCase();
      const hit = words.filter(w => stepsText.includes(w)).length;
      return { ref, score: words.length ? hit / words.length : 0 };
    })
    .sort((a, b) => b.score - a.score);
  const best = scored[0];
  const runnerUp = scored[1];
  if (best && best.score >= 0.6 && (!runnerUp || runnerUp.score < best.score)) {
    front.cardRef = best.ref;
    byRef[best.ref].fronts.push(front);
    warnings.push(`PAIRED orphan front "${front.title}" (${front.file}) -> ${best.ref} (title-match ${(best.score * 100).toFixed(0)}%${runnerUp ? `, runner-up ${(runnerUp.score * 100).toFixed(0)}%` : ''})`);
  } else {
    problems.push(`orphan front "${front.title}" (${front.file}): no confident back match (best ${best ? best.ref + ' ' + (best.score * 100).toFixed(0) + '%' : 'none'})`);
  }
}

const existingTitles = new Set(global.RECIPES.map(r => r.title.toLowerCase()));

// ---- helpers ----
function hasUnreadable(obj) {
  return JSON.stringify(obj).includes('UNREADABLE');
}

function pickOne(list, ref, side) {
  if (list.length > 1) {
    warnings.push(`${ref}: ${list.length} ${side}s transcribed (files: ${list.map(e => e.file).join(', ')}) — using first, verify duplicates`);
  }
  return list[0];
}

// ---- assemble ----
const NUTRITION_KEYS = ['calories', 'fatG', 'satFatG', 'carbsG', 'sugarG', 'fibreG', 'proteinG', 'saltG'];
const recipes = [];
const refs = Object.keys(byRef).sort();

for (const ref of refs) {
  const g = byRef[ref];
  if (!g.fronts.length || !g.backs.length) {
    problems.push(`${ref}: incomplete pair — ${g.fronts.length} front(s), ${g.backs.length} back(s)` +
      (g.fronts[0] ? ` [front: ${g.fronts[0].file}]` : '') + (g.backs[0] ? ` [back: ${g.backs[0].file}]` : ''));
    continue;
  }
  const front = pickOne(g.fronts, ref, 'front');
  const back = pickOne(g.backs, ref, 'back');

  if (existingIds.has(ref)) {
    warnings.push(`${ref}: already in library ("${front.title}") — skipped`);
    continue;
  }
  if (existingTitles.has((front.title || '').toLowerCase())) {
    warnings.push(`${ref}: title "${front.title}" duplicates an existing library recipe (different card ref) — skipped`);
    continue;
  }
  if (hasUnreadable(front) || hasUnreadable(back)) {
    problems.push(`${ref}: contains UNREADABLE fields — needs manual review (files: ${front.file}, ${back.file})`);
    continue;
  }

  // validations
  const v = [];
  if (!front.title) v.push('missing title');
  const n = front.nutritionPerServing || {};
  for (const k of NUTRITION_KEYS) if (typeof n[k] !== 'number') v.push(`nutrition.${k} not a number`);
  if (!front.timeMinutes || typeof front.timeMinutes.min !== 'number' || typeof front.timeMinutes.max !== 'number') v.push('bad timeMinutes');
  if (!Array.isArray(front.ingredients) || front.ingredients.length < 3) v.push('suspiciously few ingredients');
  if (!Array.isArray(back.steps) || back.steps.length < 5 || back.steps.length > 10) v.push(`unusual step count (${(back.steps || []).length})`);
  (front.ingredients || []).forEach(ing => {
    if (!CATEGORIES.has(ing.category)) {
      warnings.push(`${ref}: category "${ing.category}" for "${ing.name}" not in list — set to "other"`);
      ing.category = 'other';
    }
    for (const col of ['x2', 'x3', 'x4']) {
      const amt = ing[col];
      if (amt === undefined) { v.push(`${ing.name}: missing ${col}`); continue; }
      if (amt && !/^[-–—]$/.test(amt.trim()) && A.parseAmount(amt).length === 0) {
        v.push(`${ing.name} ${col}="${amt}" does not parse`);
      }
    }
  });
  if (v.length) {
    problems.push(`${ref} ("${front.title}"): ${v.join('; ')}`);
    continue;
  }

  recipes.push({
    id: ref,
    title: front.title,
    source: 'Gousto',
    cuisine: front.cuisine || 'Other',
    tags: front.tags || [],
    dietary: front.dietary || { glutenFree: false, dairyFree: false, vegetarian: false, vegan: false },
    timeMinutes: front.timeMinutes,
    fiveADay: front.fiveADay || 0,
    nutritionPerServing: n,
    allergens: front.allergens || [],
    staples: front.staples || [],
    servingsSupported: front.servingsSupported || [2, 3, 4],
    image: null,
    ingredients: (front.ingredients || []).map(i => ({
      name: i.name,
      category: i.category,
      amounts: {
        "2": /^[-–—]$/.test((i.x2 || '').trim()) ? '' : (i.x2 || ''),
        "3": /^[-–—]$/.test((i.x3 || '').trim()) ? '' : (i.x3 || ''),
        "4": /^[-–—]$/.test((i.x4 || '').trim()) ? '' : (i.x4 || '')
      }
    })),
    steps: back.steps
  });
  existingTitles.add(front.title.toLowerCase()); // guard against the same card photographed twice in this batch
}

// ---- report ----
console.log(`chunks read: ${chunkFiles.length} (${chunkFiles.join(', ')})`);
console.log(`card refs seen: ${refs.length}`);
console.log(`ready to add: ${recipes.length}`);
recipes.forEach(r => console.log(`  + ${r.id}  ${r.title}  [${r.cuisine}] ${r.timeMinutes.min}-${r.timeMinutes.max}min ${r.nutritionPerServing.calories}kcal ${r.ingredients.length}ing/${r.steps.length}steps`));
if (warnings.length) { console.log('\nWARNINGS:'); warnings.forEach(w => console.log('  ~ ' + w)); }
if (problems.length) { console.log('\nPROBLEMS (excluded from write):'); problems.forEach(p => console.log('  ! ' + p)); }

// ---- write ----
if (write && recipes.length) {
  const js = recipes.map(r => '  ' + JSON.stringify(r, null, 2).split('\n').join('\n  ')).join(',\n');
  let src = fs.readFileSync(RECIPES_PATH, 'utf8');
  const tail = /\n\];\s*$/;
  if (!tail.test(src)) { console.error('FATAL: recipes.js does not end with "];"'); process.exit(1); }
  src = src.replace(tail, ',\n' + js + '\n];\n');
  fs.writeFileSync(RECIPES_PATH, src);
  console.log(`\nWROTE ${recipes.length} recipes to ${RECIPES_PATH}`);
} else if (write) {
  console.log('\nNothing to write.');
}
