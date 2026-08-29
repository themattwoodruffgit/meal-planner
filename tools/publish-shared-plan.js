#!/usr/bin/env node
/*
 * Publish a shared meal plan to the site, so every device's "Get latest" can pull it.
 *
 *   node tools/publish-shared-plan.js "<share link (or just its #plan=... code)>" [--push]
 *
 * Takes the link produced by the app's "Share plan" button, decodes it, writes
 * data/shared-plan.json, and with --push commits and pushes (Pages redeploys,
 * making it live for the family in a minute or two).
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const arg = process.argv[2];
if (!arg) {
  console.error('usage: node tools/publish-shared-plan.js "<share link>" [--push]');
  process.exit(1);
}

const m = arg.match(/#plan=([A-Za-z0-9_-]+)/) || arg.match(/^([A-Za-z0-9_-]{40,})$/);
if (!m) {
  console.error('Could not find a #plan=... code in that input.');
  process.exit(1);
}

let payload;
try {
  const b64 = m[1].replace(/-/g, '+').replace(/_/g, '/');
  payload = JSON.parse(Buffer.from(b64, 'base64').toString('utf8'));
} catch (e) {
  console.error('That plan code could not be decoded:', e.message);
  process.exit(1);
}

if (payload.v !== 1 || !payload.wc || !Array.isArray(payload.days) || payload.days.length !== 7) {
  console.error('Decoded payload is not a valid v1 plan.');
  process.exit(1);
}

const doc = { v: 1, published: new Date().toISOString(), plan: payload };
const dest = path.join(__dirname, '..', 'data', 'shared-plan.json');
fs.writeFileSync(dest, JSON.stringify(doc, null, 1) + '\n');

const meals = payload.days.reduce((n, d) => n + (d.b || []).length + (d.l || []).length + (d.d || []).length, 0);
console.log(`Wrote shared plan: week commencing ${payload.wc}, ${meals} slot entries, ${(payload.extras || []).length} extras.`);

if (process.argv.includes('--push')) {
  const repo = path.join(__dirname, '..');
  execSync('git add data/shared-plan.json', { cwd: repo, stdio: 'inherit' });
  execSync(`git commit -m "Publish shared plan (w/c ${payload.wc})"`, { cwd: repo, stdio: 'inherit' });
  execSync('git push', { cwd: repo, stdio: 'inherit' });
  console.log('Pushed — live for the family in a minute or two.');
} else {
  console.log('Now commit and push data/shared-plan.json (or rerun with --push).');
}
