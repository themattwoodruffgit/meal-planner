# Meal Planner

A simple, self-hosted meal planning and shopping app, built around Gousto-style recipe
cards. Browse a library of transcribed recipe cards, filter them, drop them onto a weekly
calendar, and get a combined shopping list with exact quantities — so you buy precisely
what the week's cooking needs.

![No build step](https://img.shields.io/badge/build-none-brightgreen) — plain HTML/CSS/JS.

## Features

- **Recipe library** — each Gousto card transcribed faithfully: ingredients per serving
  count (2/3/4), verbatim cooking steps, nutrition, allergens and cupboard staples.
- **Filtering & sorting** — by search term (title *or* ingredient), cuisine, cooking
  time, calories, health rating (A–E, computed from fat/sat-fat/sugar/salt traffic
  lights), and gluten-free / dairy-free / vegetarian flags.
- **Weekly planner** — drag recipes onto days (or use the *+ Plan* button), set the
  number of people per meal, and print the week as a clean calendar.
- **Shopping list** — automatically aggregates every planned meal's ingredients
  (`250g + 2 × 250g = 750g`), grouped by supermarket section, with tick-boxes, a
  printable layout, and copy-as-text for sharing.
- Everything persists locally in your browser (`localStorage`) — no accounts, no server.

## Running

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8642
```

then visit <http://localhost:8642>.

## Adding recipes

Recipes live in [`data/recipes.js`](data/recipes.js) — one object per card, schema
documented in the file header. The intended workflow is to photograph a recipe card
(front and back) and have Claude transcribe it into the schema; the process and rules
are documented in [`CLAUDE.md`](CLAUDE.md).

Optionally drop a photo of the finished dish at `images/{id}.jpg` and the app will use
it on the recipe card automatically.

## Tests

The ingredient amount parser (the maths behind the shopping list) has a unit test suite:

```bash
node tests/amounts.test.js
```
