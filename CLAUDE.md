# Meal Planner

A zero-dependency static web app for planning weekly meals from Gousto-style recipe
cards and generating a combined shopping list. No build step, no framework, no server-side
code. Recipes live as data in `data/recipes.js`; everything else is plain HTML/CSS/JS.

## Running

Open `index.html` directly, or serve the folder (needed for the optional recipe photos):

```bash
python3 -m http.server 8642
```

There is a preview config in `.claude/launch.json` (name: `meal-planner`).

## Testing

```bash
node tests/amounts.test.js
```

Run this after any change to `js/amounts.js` (the ingredient amount parser that powers
shopping-list aggregation).

## Adding a recipe from card photos (the main recurring task)

When the user uploads photos of a recipe card (front = title/ingredients/nutrition,
back = numbered cooking steps), transcribe it into a new object appended to the
`window.RECIPES` array in `data/recipes.js`. The full schema is documented in the header
comment of that file. Rules:

1. **Transcribe, don't paraphrase.** Title, tags, ingredient names, amounts, and steps are
   copied verbatim from the card — including Gousto's serving-variant bracket convention
   in steps ("350ml [455ml] [600ml]" = for 2 [for 3] [for 4]).
2. **`id`** is the card ref printed in the corner (e.g. `R-996`). Must be unique; if the
   card has no ref, invent `X-001`, `X-002`, …
3. **`ingredients[].amounts`** is keyed by serving count (`"2"`, `"3"`, `"4"` — whatever
   columns the card's table has, mirrored in `servingsSupported`). Copy the cell text
   exactly: `"250g"`, `"125g & 250g"`, `"2 x 250g"`, `"0.5tsp"`. A `–` (nothing supplied
   for that count) becomes `""`. The parser in `js/amounts.js` understands these forms —
   if a card uses a new form, extend the parser AND add a test.
4. **`ingredients[].category`** is a judgement call for shopping-list grouping. Use only:
   `produce`, `meat & fish`, `dairy`, `bakery`, `frozen`, `pantry`, `herbs & spices`, `other`.
5. **`cuisine`** is a judgement call (Indian, Italian, Mexican, British, Asian, …). Reuse
   existing values where possible so the filter dropdown stays tidy.
6. **`staples`** = the card's "You need:" line (cupboard items not supplied).
   **`allergens`** = the card's "Allergens:" line (`[]` for "none").
7. **Nutrition** is per serving, from the card's table. The health rating (A–E) is
   computed automatically in `js/app.js` (`healthRating()`) from fat/sat-fat/sugar/salt
   traffic lights; only set an explicit `healthRating` field to override it.
8. **Photos:** if the user provides a usable photo of the finished dish, save it as
   `images/{id}.jpg` — the app picks it up automatically and falls back to a cuisine
   emoji when absent. Do not save photos of the whole card.
9. After adding, run the tests and sanity-check in the browser that the new card renders,
   its modal shows all serving counts, and it aggregates into the shopping list.

## Batch import (a folder of card photos)

For a big batch (e.g. a WhatsApp export dump in ~/Downloads), don't transcribe serially:

1. Build a manifest of the image paths and split it into chunks of ~10.
2. Fan out one transcription subagent per chunk. Each agent follows
   `tools/transcription-instructions.md` and writes `chunk-XX.json`
   (entries keyed by the card ref, `side: front|back`) into one shared folder.
3. Run `node tools/merge-cards.js <that-folder>` for a dry-run report. It pairs fronts
   with backs by card ref, pairs ref-less fronts by title-vs-steps matching, dedupes
   against the library by id AND title, and validates every amount with `js/amounts.js`.
4. Fix anything it flags (usually a cropped/ambiguous card ref — read that photo
   yourself), then rerun with `--write` to append to `data/recipes.js`.
5. `node tests/amounts.test.js`, sanity-check in the browser, commit and push —
   the site is GitHub Pages (repo `themattwoodruffgit/meal-planner`), so push = deploy.

## Deployment

Live at https://themattwoodruffgit.github.io/meal-planner/ (GitHub Pages, `main`
branch, root). Personal repo — do NOT push this project to any company remote.

## Architecture notes

- `js/amounts.js` — amount parsing/aggregation. UMD-style: used by the browser and by the
  Node test suite. Keep it dependency-free.
- `js/app.js` — all UI logic. State (week plan, shopping ticks) persists to
  `localStorage` under key `mealplanner.v1`.
- Printing: the "Print plan" / "Print shopping list" buttons add `print-plan` /
  `print-list` classes to `<body>`; `@media print` rules in `css/styles.css` show only
  the relevant section.
- Day indexes are 0 = Monday … 6 = Sunday throughout.
