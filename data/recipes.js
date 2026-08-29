/*
 * Recipe library — transcribed from Gousto recipe cards.
 *
 * Schema (one object per card):
 * {
 *   id:        "R-996"                       // card ref, bottom corner of the card
 *   title:     "..."                         // exact card title
 *   source:    "Gousto"
 *   cuisine:   "Indian"                      // judgement call: Indian, Italian, Mexican, British, Asian, ...
 *   tags:      ["Gluten-free", ...]          // dietary/marketing line under the title, verbatim
 *   dietary:   { glutenFree, dairyFree, vegetarian, vegan }   // booleans
 *   timeMinutes: { min: 40, max: 50 }        // "40 – 50 min" on the card; if a single value, min === max
 *   fiveADay:  3                             // "N of your 5-a-day", 0 if absent
 *   nutritionPerServing: { calories, fatG, satFatG, carbsG, sugarG, fibreG, proteinG, saltG }
 *   allergens: []                            // "Allergens:" line; [] for "none"
 *   staples:   ["butter", ...]               // "You need:" line — cupboard items not supplied
 *   servingsSupported: [2, 3, 4]             // the xN columns present in the ingredients table
 *   image:     null                          // optional; app auto-tries images/{id}.jpg first
 *   ingredients: [
 *     { name, category, amounts: { "2": "...", "3": "...", "4": "..." } }
 *     //  - amounts copied verbatim from the card columns ("2 x 250g", "125g & 250g", "" for "–")
 *     //  - category ∈ produce | meat & fish | dairy | pantry | herbs & spices | bakery | frozen | other
 *   ]
 *   steps: [ "..." ]                         // back of card, verbatim, keeping the
 *                                            // "for 2 [for 3] [for 4]" bracket convention
 * }
 */
window.RECIPES = [
  {
    id: "R-996",
    title: "Fragrant Chicken Saag Masala With Pilau Rice",
    source: "Gousto",
    cuisine: "Indian",
    tags: ["Gluten-free", "Dairy-free", "3 of your 5-a-day"],
    dietary: { glutenFree: true, dairyFree: true, vegetarian: false, vegan: false },
    timeMinutes: { min: 40, max: 50 },
    fiveADay: 3,
    nutritionPerServing: {
      calories: 430, fatG: 4, satFatG: 0.5, carbsG: 56,
      sugarG: 5, fibreG: 5, proteinG: 41, saltG: 1.4
    },
    allergens: [],
    staples: ["butter", "sugar", "vegetable oil", "water"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "brown onion",               category: "produce",        amounts: { "2": "1",      "3": "2",           "4": "2" } },
      { name: "cardamom pod",              category: "herbs & spices", amounts: { "2": "3",      "3": "3",           "4": "6" } },
      { name: "chicken breast strips",     category: "meat & fish",    amounts: { "2": "250g",   "3": "125g & 250g", "4": "2 x 250g" } },
      { name: "chicken stock mix",         category: "pantry",         amounts: { "2": "",       "3": "5.5g",        "4": "" } },
      { name: "chicken stock mix (intense)", category: "pantry",       amounts: { "2": "5.5g",   "3": "5.5g",        "4": "2 x 5.5g" } },
      { name: "coriander",                 category: "produce",        amounts: { "2": "5g",     "3": "5g",          "4": "2 x 5g" } },
      { name: "dried chilli flakes",       category: "herbs & spices", amounts: { "2": "1tsp",   "3": "1tsp",        "4": "2 x 1tsp" } },
      { name: "garam masala",              category: "herbs & spices", amounts: { "2": "1tbsp",  "3": "1tbsp",       "4": "2 x 1tbsp" } },
      { name: "garlic clove",              category: "produce",        amounts: { "2": "2",      "3": "3",           "4": "4" } },
      { name: "ground fenugreek",          category: "herbs & spices", amounts: { "2": "0.5tsp", "3": "0.5tsp",      "4": "2 x 0.5tsp" } },
      { name: "spinach",                   category: "produce",        amounts: { "2": "120g",   "3": "120g",        "4": "2 x 120g" } },
      { name: "tomato paste",              category: "pantry",         amounts: { "2": "32g",    "3": "16g & 32g",   "4": "2 x 32g" } },
      { name: "white basmati rice",        category: "pantry",         amounts: { "2": "130g",   "3": "65g & 130g",  "4": "2 x 130g" } }
    ],
    steps: [
      "Before you start cooking, take your chicken out of the fridge, open the packet and let it air, then boil a full kettle. Peel and finely slice your brown onion[s]. Heat a large, wide-based pan (preferably non-stick with a matching lid) with a drizzle of vegetable oil over a medium heat. Once hot, add the sliced onion and cook for 5 min or until softened.",
      "Meanwhile, wash your spinach, then add to a colander and pour boiled water all over it so that it starts to wilt. Rinse the wilted spinach under cold running water until it's cool. Once cool, squeeze as much water out of the spinach as you can, then chop it roughly. Reboil the kettle.",
      "Add the sliced garlic, your ground fenugreek, garam masala and chilli flakes (can't handle the heat? Go easy!) to the softened onion and cook for 30 secs or until fragrant. Increase the heat to high and add your chicken breast strips to the pan and cook for 3 min on each side or until they are lightly browned.",
      "While the chicken is browning, dissolve your chicken stock mix, tomato paste and 1 tsp [1 1/2 tsp] [2 tsp] sugar in 350ml [455ml] [600ml] boiled water – this is your tomato stock. Add the tomato stock and chopped spinach to the pan. Reduce the heat to medium-low and cook, covered, for 15-20 min or until the chicken is cooked through (no pink meat!) and the sauce has thickened.",
      "While the sauce thickens, crush your cardamom pods open by squashing them with the side of a knife. Melt a knob of butter in a pot with a matching lid over a medium heat. Once melted, add the crushed cardamom pods to the pot and cook for 1 min or until fragrant.",
      "Add your basmati rice to the pot and cook for 1 min further, then add 300ml [390ml] [600ml] cold water and bring to the boil over a high heat. Once boiling, reduce the heat to very low and cook, covered, for 10-12 min or until all the water has been absorbed and the rice is cooked. Once cooked, remove from the heat and keep covered until serving – this is your pilau rice.",
      "While the pilau rice is cooking, chop most of your coriander finely, including the stalks (save some leaves for garnish!). Transfer the cooked chicken to a clean board and shred apart using two forks – this technique is known as 'pulling'. Add the pulled chicken back to the curry and give it a good mix up – this is your fragrant chicken saag masala. Stir the chopped coriander through the pilau rice, then discard the cardamom pods.",
      "Serve the fragrant chicken saag masala with the pilau rice to the side. Garnish with the reserved coriander leaves. Enjoy!"
    ]
  },
  {
    id: "R-6177",
    title: "Buttery Paprika Basa With Pan Con Tomate Potatoes",
    source: "Gousto",
    cuisine: "Spanish",
    tags: ["2 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: false, vegetarian: false, vegan: false },
    timeMinutes: { min: 30, max: 35 },
    fiveADay: 2,
    nutritionPerServing: {
      calories: 351, fatG: 4, satFatG: 1, carbsG: 54,
      sugarG: 5, fibreG: 7, proteinG: 26, saltG: 1
    },
    allergens: ["A1: gluten", "A4: fish"],
    staples: ["butter", "olive oil", "pepper", "salt", "sugar", "baking paper", "food processor", "tin foil"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "basa fillet (1pcs)",            category: "meat & fish",    amounts: { "2": "",     "3": "1",   "4": "" } },
      { name: "basa fillets (2pcs)",           category: "meat & fish",    amounts: { "2": "1",    "3": "1",   "4": "2" } },
      { name: "ciabatta (1pcs)",               category: "bakery",         amounts: { "2": "1",    "3": "1½",  "4": "2" } },
      { name: "dried oregano (1tsp)",          category: "herbs & spices", amounts: { "2": "1",    "3": "1",   "4": "2" } },
      { name: "garlic clove",                  category: "produce",        amounts: { "2": "2",    "3": "3",   "4": "4" } },
      { name: "ground paprika (1tsp)",         category: "herbs & spices", amounts: { "2": "1",    "3": "1",   "4": "2" } },
      { name: "lemon",                         category: "produce",        amounts: { "2": "1",    "3": "1",   "4": "2" } },
      { name: "shredded spring greens (120g)", category: "produce",        amounts: { "2": "1",    "3": "1½",  "4": "2" } },
      { name: "tomato",                        category: "produce",        amounts: { "2": "2",    "3": "4",   "4": "4" } },
      { name: "white potato",                  category: "produce",        amounts: { "2": "3",    "3": "5",   "4": "6" } }
    ],
    steps: [
      "Preheat the oven to 220°C/ 200°C (fan)/ gas 7. Cut your potatoes (skins on) into small bite-sized pieces. Add the chopped potatoes to a baking paper-lined baking tray (or two!) with a drizzle of olive oil and a generous pinch of salt and pepper. Give everything a good mix up and put the tray[s] in the oven for an initial 15 min or until beginning to soften.",
      "While the potatoes are in the oven, roughly chop your tomatoes. Crush your garlic open by squashing them with the side of a knife and discard the skins. Cut your lemon[s] in half.",
      "Add the chopped tomatoes and peeled garlic to a food processor with 2 tbsp [3 tbsp] [4 tbsp] olive oil. Season with a very generous pinch of salt, a few grinds of black pepper and a pinch of sugar and blitz until smooth – this is your pan con tomate dressing.",
      "Wash your shredded spring greens, then pat dry with kitchen paper. Add the spring greens to a large piece of tin foil (or two!) with a pinch of salt, 1 tbsp [1 1/2 tbsp] [2 tbsp] cold water and a generous drizzle of olive oil. Scrunch the foil around the spring greens to form a tightly sealed parcel (or two!). Tear your ciabatta[s] roughly into bite-sized pieces.",
      "After the initial 15 min, remove the potatoes from the oven and add the torn ciabatta with a small drizzle of olive oil. Return the ciabatta and potatoes to the oven along with the spring green parcel[s] on a separate tray (or two!) and cook for 10-12 min or until the spring greens are tender and the ciabatta is golden.",
      "When everything's nearly ready, heat a large, wide-based pan (preferably non-stick) over a medium-high heat with a large knob of butter. Once melted, add your ground paprika and dried oregano with a pinch of salt and mix everything together. Add your basa fillet[s] to the pan with the juice of half your lemon[s] and cook for 3-4 min on each side – this is your buttery paprika basa. Tip: Your fish is cooked once it turns opaque and flakes easily.",
      "Once cooked, remove the tray[s] with the potatoes from the oven. Add the cooked spring greens to the cooked potatoes and mix through the pan con tomate dressing until everything is coated – these are your pan con tomate potatoes.",
      "Serve the buttery paprika basa over the pan con tomate potatoes. Cut the remaining lemon into 1 wedge per person. Garnish with a lemon wedge and season with a grind of black pepper. Enjoy!"
    ]
  },
  {
    id: "R-1856",
    title: "Pan-Fried Basa With Gnocchi, Mushrooms & Spinach",
    source: "Gousto",
    cuisine: "Italian",
    tags: ["2 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: false, vegetarian: false, vegan: false },
    timeMinutes: { min: 30, max: 35 },
    fiveADay: 2,
    nutritionPerServing: {
      calories: 364, fatG: 9, satFatG: 5, carbsG: 43,
      sugarG: 2, fibreG: 3, proteinG: 28, saltG: 2
    },
    allergens: ["A1: gluten", "A4: fish", "A7: milk"],
    staples: ["butter", "olive oil", "pepper", "salt", "water"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "basa fillet (1pcs)",         category: "meat & fish", amounts: { "2": "",  "3": "1",  "4": "" } },
      { name: "basa fillets (2pcs)",        category: "meat & fish", amounts: { "2": "1", "3": "1",  "4": "2" } },
      { name: "chestnut mushrooms (80g)",   category: "produce",     amounts: { "2": "",  "3": "1",  "4": "" } },
      { name: "chestnut mushrooms (160g)",  category: "produce",     amounts: { "2": "1", "3": "1",  "4": "2" } },
      { name: "garlic clove",               category: "produce",     amounts: { "2": "1", "3": "2",  "4": "2" } },
      { name: "gnocchi (250g)",             category: "pantry",      amounts: { "2": "1", "3": "1½", "4": "2" } },
      { name: "soft cheese (50g)",          category: "dairy",       amounts: { "2": "1", "3": "1½", "4": "2" } },
      { name: "spinach (120g)",             category: "produce",     amounts: { "2": "1", "3": "1",  "4": "2" } },
      { name: "vegetable stock mix (5.5g)", category: "pantry",      amounts: { "2": "1", "3": "1½", "4": "2" } }
    ],
    steps: [
      "Boil a kettle. Peel and finely chop (or grate) your garlic. Slice your chestnut mushrooms finely.",
      "Heat a large pot (preferably non-stick) with a drizzle of olive oil over a high heat. Once hot, add the sliced mushrooms and chopped garlic and reduce the heat to medium. Cook for 3 min or until the mushrooms have softened.",
      "Meanwhile, dissolve your vegetable stock mix in 200ml [300ml] [400ml] boiled water. Add your soft cheese and give everything a good mix up – this is your creamy vegetable stock.",
      "Add the creamy vegetable stock and gnocchi to the pot with the softened mushrooms and bring to the boil over a high heat. Once boiling, reduce the heat to medium and cook for 7-8 min, or until the liquid has started to thicken and the gnocchi is cooked through.",
      "While the gnocchi is cooking, pat your basa fillet[s] dry with kitchen paper and season with salt and pepper.",
      "Heat a large, wide-based pan (preferably non-stick) with 2 tbsp [3 tbsp] [4 tbsp] butter over a high heat. Once melted, add the basa and cook for 3-4 min on each side, or until browned and cooked through. Tip: Your fish is cooked when it turns opaque and flakes easily.",
      "Wash your spinach, then pat it dry with kitchen paper. Once the gnocchi is cooked and the sauce has thickened, add the spinach and cook for 1 min further or until it wilts. Give everything a good mix up – this is your gnocchi, mushrooms & spinach.",
      "Serve the pan-fried basa over the gnocchi, mushrooms & spinach. Enjoy!"
    ]
  },
  {
    id: "R-1608",
    title: "Smoky Chicken Goulash With Rice",
    source: "Gousto",
    cuisine: "Hungarian",
    tags: ["Gluten-free", "3 of your 5-a-day"],
    dietary: { glutenFree: true, dairyFree: false, vegetarian: false, vegan: false },
    timeMinutes: { min: 30, max: 35 },
    fiveADay: 3,
    nutritionPerServing: {
      calories: 476, fatG: 11, satFatG: 6, carbsG: 56,
      sugarG: 12, fibreG: 5, proteinG: 38, saltG: 1
    },
    allergens: ["A7: milk"],
    staples: ["pepper", "salt", "sugar", "vegetable oil", "water"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "British chicken breast portion (1pcs)",  category: "meat & fish",    amounts: { "2": "",  "3": "1",  "4": "" } },
      { name: "British chicken breast portions (2pcs)", category: "meat & fish",    amounts: { "2": "1", "3": "1",  "4": "2" } },
      { name: "brown onion",                            category: "produce",        amounts: { "2": "1", "3": "2",  "4": "2" } },
      { name: "chestnut mushrooms (80g)",               category: "produce",        amounts: { "2": "",  "3": "1",  "4": "" } },
      { name: "chestnut mushrooms (160g)",              category: "produce",        amounts: { "2": "1", "3": "1",  "4": "2" } },
      { name: "chicken stock mix (5.5g)",               category: "pantry",         amounts: { "2": "",  "3": "1",  "4": "" } },
      { name: "chicken stock mix (11g)",                category: "pantry",         amounts: { "2": "1", "3": "1",  "4": "2" } },
      { name: "ground paprika (2tsp)",                  category: "herbs & spices", amounts: { "2": "1", "3": "1",  "4": "2" } },
      { name: "ground paprika (1tsp)",                  category: "herbs & spices", amounts: { "2": "",  "3": "1",  "4": "" } },
      { name: "ground smoked paprika (1tsp)",           category: "herbs & spices", amounts: { "2": "1", "3": "1",  "4": "2" } },
      { name: "parsley (5g)",                           category: "produce",        amounts: { "2": "1", "3": "1",  "4": "2" } },
      { name: "soured cream (80g)",                     category: "dairy",          amounts: { "2": "1", "3": "1½", "4": "2" } },
      { name: "sweet pointed pepper",                   category: "produce",        amounts: { "2": "1", "3": "2",  "4": "2" } },
      { name: "tomato paste (32g)",                     category: "pantry",         amounts: { "2": "1", "3": "1",  "4": "2" } },
      { name: "tomato paste (16g)",                     category: "pantry",         amounts: { "2": "",  "3": "1",  "4": "" } },
      { name: "white long grain rice (100g)",           category: "pantry",         amounts: { "2": "1", "3": "1",  "4": "2" } },
      { name: "white long grain rice (50g)",            category: "pantry",         amounts: { "2": "",  "3": "1",  "4": "" } }
    ],
    steps: [
      "Before you start cooking, take your chicken out of the fridge, open the packet and let it air and boil a kettle. Heat a very large, wide-based pan (preferably non-stick) with a matching lid, with a drizzle of vegetable oil over a medium heat. Once hot, add your chicken breast portion[s] and cook for 3 min on each side or until golden.",
      "Meanwhile, peel and slice your brown onion[s] finely. Deseed your sweet pointed pepper[s] (scrape the seeds and pith out with a teaspoon) and cut into thin strips.",
      "Push the chicken to one side of the pan and reduce the heat to medium-low. Add the sliced onion and pepper strips with a generous pinch of salt and cook, covered, for 4-5 min or until beginning to soften.",
      "Meanwhile, chop your chestnut mushrooms into quarters. Dissolve your chicken stock mix, tomato paste and 1 tsp [1 1/2 tsp] [2 tsp] sugar in 350ml [455ml] [650ml] boiled water – this is your tomato stock.",
      "Add your white long grain rice to a pot with a lid with a pinch of salt and 175ml [230ml] [350ml] cold water and bring to the boil over a high heat. Once boiling, reduce the heat to very low and cook, covered, for 12-15 min or until all the water has absorbed and the rice is cooked. Once done, remove from the heat and set aside (lid on) to steam until serving.",
      "Once the veg is beginning to soften, add the chopped mushrooms, ground paprika and ground smoked paprika to the pan and cook for 1-2 min or until fragrant. Add the tomato stock, bring to the boil over a high heat and cook, covered, for 5 min further or until the chicken is cooked through (no pink meat!). Meanwhile, chop your parsley roughly, including the stalks.",
      "Once cooked, transfer the cooked chicken to a clean board and shred it apart, using two forks – this technique is known as 'pulling'. Return the pulled chicken to the pan and season generously with salt and pepper. Give everything a good mix up – this is your smoky chicken goulash.",
      "Serve the smoky chicken goulash in bowls with the cooked rice to the side. Top with a dollop of your soured cream, a good grind of black pepper and the chopped parsley. Enjoy!"
    ]
  },
  {
    id: "R-2655",
    title: "Sri Lankan-Style Coconut Dal With Aubergine Pickle (V)",
    source: "Gousto",
    cuisine: "Sri Lankan",
    tags: ["Plant-based", "Dairy-free", "1 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: true, vegetarian: true, vegan: true },
    timeMinutes: { min: 30, max: 35 },
    fiveADay: 1,
    nutritionPerServing: {
      calories: 641, fatG: 20, satFatG: 16, carbsG: 85,
      sugarG: 8, fibreG: 18, proteinG: 25, saltG: 2
    },
    allergens: ["A10: mustard"],
    staples: ["pepper", "salt", "sugar", "vegetable oil", "water"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "aubergine",                    category: "produce",        amounts: { "2": "1", "3": "1½", "4": "2" } },
      { name: "yellow mustard seeds (1tsp)",  category: "herbs & spices", amounts: { "2": "1", "3": "1",  "4": "2" } },
      { name: "cider vinegar (15ml)",         category: "pantry",         amounts: { "2": "1", "3": "1",  "4": "2" } },
      { name: "coriander (20g)",              category: "produce",        amounts: { "2": "1", "3": "1½", "4": "2" } },
      { name: "curry powder (1tbsp)",         category: "herbs & spices", amounts: { "2": "1", "3": "1½", "4": "2" } },
      { name: "fresh root ginger (15g)",      category: "produce",        amounts: { "2": "1", "3": "1",  "4": "2" } },
      { name: "garlic clove",                 category: "produce",        amounts: { "2": "3", "3": "5",  "4": "6" } },
      { name: "green chilli",                 category: "produce",        amounts: { "2": "1", "3": "1½", "4": "2" } },
      { name: "ground turmeric (1tsp)",       category: "herbs & spices", amounts: { "2": "1", "3": "1",  "4": "2" } },
      { name: "red lentils (100g)",           category: "pantry",         amounts: { "2": "1", "3": "1½", "4": "2" } },
      { name: "shallot",                      category: "produce",        amounts: { "2": "3", "3": "5",  "4": "6" } },
      { name: "solid creamed coconut (25g)",  category: "pantry",         amounts: { "2": "",  "3": "1",  "4": "" } },
      { name: "solid creamed coconut (50g)",  category: "pantry",         amounts: { "2": "1", "3": "1",  "4": "2" } },
      { name: "vegetable stock mix (11g)",    category: "pantry",         amounts: { "2": "1", "3": "1",  "4": "2" } },
      { name: "vegetable stock mix (5.5g)",   category: "pantry",         amounts: { "2": "",  "3": "1",  "4": "" } },
      { name: "white basmati rice (130g)",    category: "pantry",         amounts: { "2": "1", "3": "1",  "4": "2" } },
      { name: "white basmati rice (65g)",     category: "pantry",         amounts: { "2": "",  "3": "1",  "4": "" } }
    ],
    steps: [
      "Boil a full kettle. Add your basmati rice and 300ml [390ml] [600ml] cold water to a pot with a lid and bring to the boil over a high heat. Once boiling, reduce the heat to very low and cook, covered, for 10-12 min or until all the water has absorbed and the rice is cooked. Once cooked, remove from the heat and keep covered until serving.",
      "While the rice is cooking, peel and finely slice half your shallots, then peel and finely slice half your garlic (you'll use the rest later!). Chop your creamed coconut roughly (if required!). Dissolve your vegetable stock mix and chopped creamed coconut in 600ml [800ml] [1L] boiled water – this is your coconut stock. Rinse your red lentils in a sieve under cold running water.",
      "Trim the green stalk[s] off your aubergine[s] and discard, then slice lengthways, into strips. Heat a large, wide-based pan (preferably non-stick with a matching lid) with a very generous drizzle of vegetable oil over a medium-high heat. Once hot, add the aubergine strips with a pinch of salt and cook, covered, for 10-12 min, turning occasionally until golden and tender. Tip: Add a drizzle more oil if your pan is looking a little dry!",
      "Heat a separate pot with a drizzle of vegetable oil over a medium heat. Once hot, add the sliced shallot, sliced garlic, curry powder and half your ground turmeric (you'll use the rest later!) and cook for 1 min, then add the lentils and cook for 1 min further. Add the coconut stock, bring to the boil over a high heat, and cook for 15-20 min or until the lentils are tender and starting to break down – this is your Sri Lankan-style coconut dal.",
      "Whilst everything is cooking, slice your green chilli[es] in half lengthways, then slice diagonally into strips. Peel and chop the remaining shallot[s] into wedges. Peel and finely chop (or grate) the remaining garlic.",
      "Peel (scrape the skin off with a teaspoon) and finely chop (or grate) your ginger. Chop your coriander finely, including the stalks (save a few leaves for garnish!). Combine the chopped garlic with the chopped ginger, chopped coriander, cider vinegar, yellow mustard seeds and 1 tbsp [1 1/2 tbsp] [2 tbsp] sugar in a bowl – this is your pickling liquid.",
      "Once the aubergine is golden and tender, transfer it to kitchen paper and return the pan to a medium heat. Add the sliced green chilli (can't handle the heat? Go easy!) and shallot wedges with the remaining ground turmeric and cook for 2-3 min. Return the cooked aubergine to the pan with the pickling liquid and cook for 2-3 min or until all the liquid has evaporated – this is your aubergine pickle.",
      "Serve the Sri Lankan-style coconut dal with the basmati rice to the side. Top with the aubergine pickle, garnish with the reserved coriander leaves and season with a grind of black pepper. Enjoy!"
    ]
  },
  {
    id: "R-8210",
    title: "Shredded Hoisin Chicken Wraps",
    source: "Gousto",
    cuisine: "Chinese",
    tags: ["Dairy-free", "2 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: true, vegetarian: false, vegan: false },
    timeMinutes: { min: 20, max: 30 },
    fiveADay: 2,
    nutritionPerServing: {
      calories: 525, fatG: 10, satFatG: 4, carbsG: 66,
      sugarG: 13, fibreG: 4, proteinG: 42, saltG: 2.2
    },
    allergens: ["A1: gluten", "A6: soya", "A11: sesame"],
    staples: ["vegetable oil", "microwave"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "chicken breast strips",   category: "meat & fish", amounts: { "2": "250g", "3": "125g & 250g", "4": "2 x 250g" } },
      { name: "cucumber",                category: "produce",     amounts: { "2": "½",    "3": "¾",           "4": "1" } },
      { name: "gem lettuce",             category: "produce",     amounts: { "2": "1",    "3": "1½",          "4": "2" } },
      { name: "hoisin sauce",            category: "pantry",      amounts: { "2": "40g",  "3": "40g",         "4": "2 x 40g" } },
      { name: "plain tortillas",         category: "bakery",      amounts: { "2": "6",    "3": "9",           "4": "12" } },
      { name: "soy sauce",               category: "pantry",      amounts: { "2": "15ml", "3": "8ml & 15ml",  "4": "2 x 15ml" } },
      { name: "spring onion",            category: "produce",     amounts: { "2": "2",    "3": "3",           "4": "4" } },
      { name: "toasted sesame seeds",    category: "pantry",      amounts: { "2": "5g",   "3": "5g",          "4": "5g" } }
    ],
    steps: [
      "Before you start cooking, take your chicken out of the fridge, open the packet and let it air. Heat a large, wide-based pan (preferably non-stick) with a drizzle of vegetable oil over a high heat.",
      "Once hot, add your chicken breast strips and cook for 5-6 min on each side or until golden and the chicken is cooked through (no pink meat!).",
      "Whilst the chicken is cooking, slice your cucumber into discs. Slice each individual cucumber disc into matchsticks.",
      "Trim, then slice your spring onion[s] lengthways into thin strips.",
      "Add your tortillas to a plate and pop in the microwave for 20 secs on high or until warmed through.",
      "Once the chicken is cooked, transfer it to a clean board and shred it apart, using two forks – this technique is known as 'pulling' – this is your shredded chicken.",
      "Return the shredded chicken to the pan with your hoisin sauce and your soy sauce and cook for 2 min or until warmed through – this is your shredded hoisin chicken. Wash your lettuce, pat it dry with kitchen paper and finely shred.",
      "Assemble the wraps by dividing the shredded lettuce, spring onion strips, cucumber matchsticks and shredded hoisin chicken between the warmed tortillas. Garnish with your toasted sesame seeds. Enjoy!"
    ]
  },
  {
    id: "R-4169",
    title: "Bang Bang King Prawns With Crunchy Rice Salad",
    source: "Gousto",
    cuisine: "Asian",
    tags: ["Dairy-free", "2 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: true, vegetarian: false, vegan: false },
    timeMinutes: { min: 25, max: 35 },
    fiveADay: 2,
    nutritionPerServing: {
      calories: 422, fatG: 15, satFatG: 2, carbsG: 46,
      sugarG: 7, fibreG: 6, proteinG: 23, saltG: 2.2
    },
    allergens: ["A1: gluten", "A2: crustacean", "A5: peanut", "A6: soya", "A11: sesame"],
    staples: ["olive oil", "salt", "sugar", "vegetable oil", "water"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "baby leaf salad",         category: "produce",        amounts: { "2": "50g",   "3": "1½ x 50g",   "4": "2 x 50g" } },
      { name: "carrot",                  category: "produce",        amounts: { "2": "1",     "3": "2",          "4": "2" } },
      { name: "cucumber",                category: "produce",        amounts: { "2": "½",     "3": "¾",          "4": "1" } },
      { name: "five-spice mix",          category: "herbs & spices", amounts: { "2": "1tsp",  "3": "1tsp",       "4": "1tsp" } },
      { name: "raw peeled king prawns",  category: "meat & fish",    amounts: { "2": "171g",  "3": "85g & 171g", "4": "2 x 171g" } },
      { name: "red chilli",              category: "produce",        amounts: { "2": "1",     "3": "1",          "4": "1" } },
      { name: "rice vinegar",            category: "pantry",         amounts: { "2": "15ml",  "3": "15ml",       "4": "30ml" } },
      { name: "smooth peanut butter",    category: "pantry",         amounts: { "2": "26g",   "3": "26g",        "4": "2 x 26g" } },
      { name: "soy sauce",               category: "pantry",         amounts: { "2": "15ml",  "3": "8ml & 15ml", "4": "30ml" } },
      { name: "spring onion",            category: "produce",        amounts: { "2": "2",     "3": "3",          "4": "4" } },
      { name: "toasted sesame oil",      category: "pantry",         amounts: { "2": "10ml",  "3": "10ml",       "4": "20ml" } },
      { name: "toasted sesame seeds",    category: "pantry",         amounts: { "2": "5g",    "3": "5g",         "4": "5g" } },
      { name: "white basmati rice",      category: "pantry",         amounts: { "2": "100g",  "3": "50g & 100g", "4": "2 x 100g" } }
    ],
    steps: [
      "Boil half a kettle. Add your basmati rice and 250ml [325ml] [500ml] cold water to a pot with a lid and bring to the boil over a high heat. Once boiling, reduce the heat to very low and cook, covered, for 10-12 min or until all the water has been absorbed and the rice is cooked, then remove from the heat and keep covered until serving.",
      "Wash your salad, then pat it dry with kitchen paper. Top, tail, peel, then grate your carrot[s]. Trim, then slice your spring onion[s] finely. Add the salad, grated carrot and sliced spring onion to a large mixing bowl.",
      "Slice your cucumber into discs. Slice each individual cucumber disc into matchsticks. Cut half of your red chilli[es] into rounds (save the rest for later!). Add the cucumber matchsticks and chilli rounds (can't handle the heat? Go easy!) to the bowl with the salad, carrot and spring onion – this is your crunchy salad.",
      "Cut the remaining chilli in half lengthways, deseed (scrape the seeds out with a teaspoon) and chop finely.",
      "Combine your peanut butter and 1 tbsp [1 1/2 tbsp] [2 tbsp] boiled water in a small bowl and mix well until you have a smooth paste. Add your soy sauce, toasted sesame oil, rice vinegar, remaining chopped chilli (not a fan of spice? Just add a little!) and 1 tsp [1 1/2 tsp] [2 tsp] sugar and mix well to combine – this is your peanut dressing.",
      "Heat a large, wide-based pan (preferably non-stick) with a drizzle of vegetable oil over a medium-high heat. Once hot, drain your king prawns, then add them to the pan. Sprinkle your five-spice mix over the king prawns and cook for 4-5 min or until the prawns are cooked through – these are your bang bang king prawns.",
      "Meanwhile, fluff the cooked rice with a fork and add it to the crunchy salad – this is your crunchy rice salad. Toss the crunchy rice salad in a drizzle of olive oil and season with a pinch of salt.",
      "Serve the bang bang king prawns over the crunchy rice salad and drizzle the peanut dressing all over. Garnish with a sprinkling of your toasted sesame seeds. Enjoy!"
    ]
  },
  {
    id: "R-8239",
    title: "King Prawn, Garlic & Chilli Linguine",
    source: "Gousto",
    cuisine: "Italian",
    tags: ["Dairy-free", "2 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: true, vegetarian: false, vegan: false },
    timeMinutes: { min: 20, max: 30 },
    fiveADay: 2,
    nutritionPerServing: {
      calories: 431, fatG: 2, satFatG: 0.7, carbsG: 75,
      sugarG: 7, fibreG: 5, proteinG: 26, saltG: 0.7
    },
    allergens: ["A1: gluten", "A2: crustacean"],
    staples: ["olive oil", "pepper", "salt"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "baby leaf salad",        category: "produce",     amounts: { "2": "50g",  "3": "1½ x 50g",    "4": "2 x 50g" } },
      { name: "cherry tomatoes",        category: "produce",     amounts: { "2": "125g", "3": "250g",        "4": "250g" } },
      { name: "garlic clove",           category: "produce",     amounts: { "2": "3",    "3": "5",           "4": "6" } },
      { name: "lemon",                  category: "produce",     amounts: { "2": "1",    "3": "1",           "4": "1" } },
      { name: "linguine",               category: "pantry",      amounts: { "2": "190g", "3": "100g & 190g", "4": "2 x 190g" } },
      { name: "parsley",                category: "produce",     amounts: { "2": "10g",  "3": "10g",         "4": "10g" } },
      { name: "raw peeled king prawns", category: "meat & fish", amounts: { "2": "171g", "3": "85g & 171g",  "4": "2 x 171g" } },
      { name: "red chilli",             category: "produce",     amounts: { "2": "1",    "3": "1",           "4": "1" } },
      { name: "spring onion",           category: "produce",     amounts: { "2": "2",    "3": "3",           "4": "4" } }
    ],
    steps: [
      "Boil a kettle. Meanwhile, peel and finely chop (or grate) your garlic. Trim, then chop your spring onion[s] roughly. Cut your red chilli[es] in half lengthways, deseed (scrape the seeds out with a teaspoon) and chop roughly.",
      "Add your linguine to a pot of boiled water with a large pinch of salt and bring to the boil over a high heat. Cook the linguine for 7-9 min or until cooked with a slight bite. Once done, drain the cooked linguine, reserving a cup of the starchy pasta water.",
      "Mix the chopped chilli (can't handle the heat? Go easy!) and spring onion together and chop them until you are left with a finely chopped mixture – this is your chilli & spring onion mixture.",
      "Heat a large, wide-based pan (preferably non-stick) with 3 tbsp [4 1/2 tbsp] [6 tbsp] olive oil over a medium-high heat. Once hot, add the chilli & spring onion mixture to the pan with a generous pinch of salt and cook for 2 min or until it begins to soften. Drain your king prawns, then add them to the pan along with the chopped garlic and cook for 4-5 min or until the prawns are cooked through.",
      "While the prawns are cooking, cut your lemon[s] in half. Chop your parsley finely, including the stalks. Chop your cherry tomatoes in half.",
      "Once the prawns are cooked, add the drained linguine to the pan with a couple of splashes of the reserved starchy pasta water. Season with a generous pinch of salt and pepper. Squeeze in the juice of half the lemon and stir until the sauce sticks to the linguine – this is your king prawn, garlic & chilli linguine.",
      "Remove from the heat and stir through the chopped parsley. Cut the remaining lemon into 1 wedge per person. Wash your salad, then pat it dry with kitchen paper. Add the salad and chopped tomatoes to a bowl with a little drizzle of olive oil and a crack of black pepper and give everything a good mix up – this is your tomato salad.",
      "Serve the king prawn, garlic & chilli linguine in a bowl with the tomato salad. Garnish with a lemon wedge. Drizzle with a little olive oil and season with plenty of black pepper. Enjoy!"
    ]
  },
  {
    id: "R-3345",
    title: "Lighter King Prawn, Garlic & Chilli Linguine With Spinach",
    source: "Gousto",
    cuisine: "Italian",
    tags: ["Dairy-free", "2 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: true, vegetarian: false, vegan: false },
    timeMinutes: { min: 20, max: 30 },
    fiveADay: 2,
    nutritionPerServing: {
      calories: 279, fatG: 2, satFatG: 0.5, carbsG: 43,
      sugarG: 7, fibreG: 4, proteinG: 21, saltG: 0.8
    },
    allergens: ["A1: gluten", "A2: crustacean"],
    staples: ["olive oil", "pepper", "salt"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "cherry tomatoes",        category: "produce",        amounts: { "2": "125g",   "3": "250g",       "4": "250g" } },
      { name: "courgette",              category: "produce",        amounts: { "2": "1",      "3": "2",          "4": "2" } },
      { name: "dried chilli flakes",    category: "herbs & spices", amounts: { "2": "0.5tsp", "3": "0.5tsp",     "4": "1tsp" } },
      { name: "garlic clove",           category: "produce",        amounts: { "2": "3",      "3": "5",          "4": "6" } },
      { name: "lemon",                  category: "produce",        amounts: { "2": "1",      "3": "1",          "4": "1" } },
      { name: "linguine",               category: "pantry",         amounts: { "2": "100g",   "3": "1½ x 100g",  "4": "2 x 100g" } },
      { name: "raw peeled king prawns", category: "meat & fish",    amounts: { "2": "171g",   "3": "85g & 171g", "4": "2 x 171g" } },
      { name: "spinach",                category: "produce",        amounts: { "2": "80g",    "3": "2 x 80g",    "4": "2 x 80g" } }
    ],
    steps: [
      "Boil a full kettle. Add your linguine to a pot of boiled water with a large pinch of salt and bring to the boil over a high heat. Cook the linguine for 7-9 min or until cooked with a slight bite. Once done, drain the linguine, reserving a cup of starchy pasta water, then set it aside until later.",
      "Whilst the linguine is cooking, chop your cherry tomatoes into quarters.",
      "Trim the end[s] from your courgette[s] keeping the stalk[s] intact. Without cutting through the stalk[s], carefully slice the trimmed courgette[s] into thin strips, lengthways (at approx. 5mm intervals). Then peel the lengths of the sliced courgette[s] until you have a pile of 'courgetti'. Tip: Have a spiraliser? Use this instead!",
      "Heat a large, wide-based pan (preferably non-stick) with 1 tbsp [1 1/2 tbsp] [2 tbsp] olive oil over a medium heat. Once hot, add the chopped cherry tomatoes and a generous pinch of salt and cook for 6-8 min or until softened and starting to break down.",
      "Meanwhile, peel and finely slice (don't chop!) your garlic. Once the tomatoes have softened, add the sliced garlic and cook for 2-3 min until softened.",
      "Increase the heat to medium-high heat, then drain and add your king prawns and chilli flakes (can't handle the heat? Go easy!) and cook for 4-5 min or until cooked through. Wash your spinach, then pat it dry with kitchen paper.",
      "Once the prawns are cooked, add the spinach, drained linguine and courgetti to the pan and cook until the spinach has wilted. Remove from the heat and squeeze in the juice of half your lemon[s] and a pinch of salt, then give everything a good mix – this is your lighter king prawn, garlic & chilli linguine with spinach. Tip: If it's looking a little dry add a splash of the starchy pasta water.",
      "Cut the remaining lemon into 1 wedge per person. Serve the lighter king prawn, garlic & chilli linguine with spinach with a lemon wedge to the side. Finish with a generous grind of black pepper. Enjoy!"
    ]
  },
  {
    id: "R-7303",
    title: "Fragrant Laotian-Style Pork Laab With Steamed Rice",
    source: "Gousto",
    cuisine: "Asian",
    tags: ["Dairy-free", "2 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: true, vegetarian: false, vegan: false },
    timeMinutes: { min: 20, max: 30 },
    fiveADay: 2,
    nutritionPerServing: {
      calories: 592, fatG: 23, satFatG: 8, carbsG: 61,
      sugarG: 9, fibreG: 4, proteinG: 33, saltG: 2.1
    },
    allergens: ["A1: gluten", "A4: fish", "A6: soya"],
    staples: ["salt", "sugar", "vegetable oil", "water"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "coriander and mint mix", category: "produce",     amounts: { "2": "10g",      "3": "10g",         "4": "10g" } },
      { name: "crispy onions",          category: "pantry",      amounts: { "2": "15g",      "3": "15g",         "4": "2 x 15g" } },
      { name: "fine green beans",       category: "produce",     amounts: { "2": "80g",      "3": "2 x 80g",     "4": "2 x 80g" } },
      { name: "fish sauce",             category: "pantry",      amounts: { "2": "8ml",      "3": "8ml",         "4": "2 x 8ml" } },
      { name: "fresh root ginger",      category: "produce",     amounts: { "2": "15g",      "3": "15g",         "4": "2 x 15g" } },
      { name: "garlic clove",           category: "produce",     amounts: { "2": "1",        "3": "2",           "4": "2" } },
      { name: "lime",                   category: "produce",     amounts: { "2": "1",        "3": "1",           "4": "1" } },
      { name: "pork mince",             category: "meat & fish", amounts: { "2": "250g",     "3": "125g & 250g", "4": "2 x 250g" } },
      { name: "red chilli relish",      category: "pantry",      amounts: { "2": "25g",      "3": "25g",         "4": "2 x 25g" } },
      { name: "shallot",                category: "produce",     amounts: { "2": "2",        "3": "3",           "4": "4" } },
      { name: "soy sauce",              category: "pantry",      amounts: { "2": "½ x 15ml", "3": "15ml",        "4": "15ml" } },
      { name: "spinach",                category: "produce",     amounts: { "2": "80g",      "3": "2 x 80g",     "4": "2 x 80g" } },
      { name: "white basmati rice",     category: "pantry",      amounts: { "2": "130g",     "3": "65g & 130g",  "4": "2 x 130g" } }
    ],
    steps: [
      "Add your basmati rice and 300ml [390ml] [600ml] cold water with a pinch of salt to a pot with a lid and bring to the boil over a high heat. Once boiling, reduce the heat to very low and cook, covered, for 10-12 min or until all the water has absorbed and the rice is cooked. Once cooked, remove from the heat and keep covered until serving.",
      "Peel and finely chop (or grate) your garlic. Peel (scrape the skin off with a teaspoon) and finely chop (or grate) your ginger. Peel and finely slice your shallot[s].",
      "Heat a large, wide-based pan (preferably non-stick) with a drizzle of vegetable oil over a high heat. Once hot, add your pork mince (remove the paper if required!) with a pinch of salt and cook for an initial 4-5 min or until starting to brown, breaking it up with a wooden spoon as you go.",
      "Meanwhile, trim your green beans. Wash your spinach and pat dry with kitchen paper.",
      "Once the mince has started to brown, reduce the heat to medium-high and add the trimmed green beans. Cook for 4-5 min or until browned and tender.",
      "Meanwhile, roll your lime[s] with your hand on a hard surface (to release more juice) and cut into wedges. Chop your coriander roughly, including the stalks. Strip your mint leaves from their stems and chop them roughly, discard the stems. Combine your soy sauce with your red chilli relish, fish sauce (not a fan of fish sauce? Just add a little!), the juice from half the lime wedges (not sure about citrus? Try using less!) and 1 tsp [1 1/2 tsp] [2 tsp] sugar – this is your Laab-style dressing.",
      "Once the beans are tender, reduce the heat to medium and add the sliced shallot, chopped ginger and chopped garlic and cook for 1-2 min or until fragrant and the shallot is softening. Once the shallot is softening, add the spinach and cook for a final 2-3 min or until the spinach has wilted and the mince is cooked through (no pink meat!). Remove from the heat, add half the chopped coriander and mint and the Laab-style dressing then give everything a good mix up – this is your fragrant Laotian-style pork Laab.",
      "Serve the fragrant Laotian-style pork Laab with the basmati rice and a lime wedge to the side. Tip: For fancy presentation, press the rice into a small bowl and turn out. Top with the remaining chopped herbs and your crispy onions. Enjoy!"
    ]
  }
];
