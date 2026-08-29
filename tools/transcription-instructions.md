# Gousto recipe card transcription — agent instructions

You are transcribing photos of Gousto recipe cards. Each card has two sides,
photographed separately (images may be rotated or upside down — read them as-is):

- **FRONT**: recipe title (red text), time + dietary info line, photo of the dish,
  nutrition table, ingredients table with x2/x3/x4 columns, "Allergens:" line,
  "You need:" line, and a card ref like `R-1234` printed near a corner.
- **BACK**: 8 numbered cooking steps with small photos, card ref `R-1234` in a corner.

For EACH image you are given, produce one JSON entry. Collect all entries into a single
JSON file (format below). TRANSCRIBE VERBATIM — never paraphrase, never invent. If any
value is genuinely illegible, use the string "UNREADABLE" so a human can check that image.

## Output file format

Write ONE file (path given in your task) containing:

```json
{
  "entries": [
    { "file": "<image filename>", "side": "front", "cardRef": "R-1234", ...front fields },
    { "file": "<image filename>", "side": "back",  "cardRef": "R-1234", "steps": ["...", "..."] },
    { "file": "<image filename>", "side": "skip",  "reason": "not a recipe card / duplicate of X" }
  ]
}
```

## Front fields

```json
{
  "file": "...", "side": "front", "cardRef": "R-8239",
  "title": "King Prawn, Garlic & Chilli Linguine",
  "timeMinutes": { "min": 20, "max": 30 },
  "tags": ["Dairy-free", "2 of your 5-a-day"],
  "fiveADay": 2,
  "dietary": { "glutenFree": false, "dairyFree": true, "vegetarian": false, "vegan": false },
  "cuisine": "Italian",
  "nutritionPerServing": { "calories": 431, "fatG": 2, "satFatG": 0.7, "carbsG": 75,
                           "sugarG": 7, "fibreG": 5, "proteinG": 26, "saltG": 0.7 },
  "allergens": ["A1: gluten", "A2: crustacean"],
  "staples": ["olive oil", "pepper", "salt"],
  "ingredients": [
    { "name": "cherry tomatoes", "category": "produce", "x2": "125g", "x3": "250g", "x4": "250g" }
  ]
}
```

Rules:
- **tags**: the info line after the time, split on "/" — e.g. "Gluten-free / Dairy-free /
  3 of your 5-a-day" → ["Gluten-free", "Dairy-free", "3 of your 5-a-day"]. Keep verbatim.
- **fiveADay**: the number from "N of your 5-a-day"; 0 if absent.
- **dietary**: glutenFree/dairyFree true ONLY if printed in the tags line. vegetarian/vegan
  true only if the title has "(V)" or tags say Vegetarian/Plant-based (Plant-based ⇒ both true).
- **cuisine**: your judgement, one of: Indian, Italian, Spanish, Hungarian, Sri Lankan,
  Chinese, Asian, Thai, Japanese, Mexican, British, Greek, French, Mediterranean,
  Middle Eastern, American — or another if clearly better. Prefer reusing these.
- **nutritionPerServing**: the 8 values from the nutrition table (Calories, Fat, Sat fat,
  Carbs, Sugar, Fibre, Protein, Salt), numbers only (430kcal → 430, 0.5g → 0.5).
- **allergens**: each "A#: name" as its own string; [] if the card says "none".
- **staples**: the "You need:" items as an array. Split on commas AND on "|" (items after
  "|" are equipment like "tin foil", "microwave" — include them). Drop the phrase
  "(or dietary alternatives)".
- **ingredients**: every row of the x2/x3/x4 table, in printed order.
  - **name**: verbatim INCLUDING any pack size in parentheses — "chestnut mushrooms (160g)",
    "gnocchi (250g)" — but DROP allergen codes: "linguine A1" → "linguine",
    "soy sauce A1, A6" → "soy sauce". Also drop the ↺ substitution symbol.
  - **x2/x3/x4**: the printed cell EXACTLY: "250g", "2 x 250g", "125g & 250g", "1½ x 50g",
    "½", "¾", "0.5tsp", "15ml", "1tsp". A dash "–" (nothing supplied) → "" (empty string).
    Keep unicode fractions as printed. Do not convert units or do maths.
  - **category**: one of exactly: produce | meat & fish | dairy | bakery | frozen |
    pantry | herbs & spices | other. (Fresh veg/fruit/herbs → produce; meat/fish/prawns →
    meat & fish; cheese/cream/yoghurt/butter → dairy; bread/tortillas/ciabatta → bakery;
    rice/pasta/stock/sauces/vinegars/seeds/tinned/lentils/nut butters → pantry;
    dried spices/spice blends/dried herbs → herbs & spices.)

## Back fields

```json
{ "file": "...", "side": "back", "cardRef": "R-8239",
  "steps": ["step 1 full text.", "step 2 full text.", "..."] }
```

- Steps in numbered order (1→8; some cards have fewer). FULL text of each step, verbatim,
  including bracket serving variants exactly as printed — e.g. "350ml [455ml] [600ml]",
  "1 tsp [1 1/2 tsp] [2 tsp]" — plus "Tip:" sentences, "(no pink meat!)", "(can't handle
  the heat? Go easy!)", and the final "Enjoy!". Keep "°C". Join a step's paragraphs into
  one string with a ". " between sentences as printed; end each step with ".".
- The steps header "Instructions for 2 [for 3] [for 4]" is NOT a step — skip it.

## General

- One entry per image. The card ref is CRITICAL — read it carefully (front: small grey
  text near a corner; back: corner, often beside "Printed sustainably"). Format R-####.
- If two of your images show the same side of the same card, transcribe the clearer one
  and mark the other side:"skip" with reason "duplicate".
- If an image is not a Gousto card at all, side:"skip" with a short reason.
- Return (as your final agent text) ONLY a short summary: how many fronts, backs, skips,
  the card refs seen, and any UNREADABLE fields — do NOT return the JSON itself.
