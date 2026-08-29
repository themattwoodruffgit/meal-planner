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
  },
  {
    "id": "R-1654",
    "title": "Nasi Goreng With Cucumber And Sriracha (V)",
    "source": "Gousto",
    "cuisine": "Asian",
    "tags": [
      "Dairy-free",
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": true,
      "vegetarian": true,
      "vegan": false
    },
    "timeMinutes": {
      "min": 10,
      "max": 20
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 545,
      "fatG": 28,
      "satFatG": 5,
      "carbsG": 52,
      "sugarG": 8,
      "fibreG": 9,
      "proteinG": 19,
      "saltG": 1
    },
    "allergens": [
      "A1: gluten",
      "A3: egg",
      "A5: peanut",
      "A6: soya",
      "A11: sesame"
    ],
    "staples": [
      "sugar",
      "vegetable oil",
      "microwave"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British free range egg (1pcs)",
        "category": "other",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "carrot (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "cooked brown long grain rice (280g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "cucumber (0.5pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "dried chilli flakes (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "lime (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "roasted garlic paste (15g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "roasted peanuts (25g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "shredded kale (80g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "soy sauce (8ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "spring onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "sriracha hot chilli sauce (8ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "toasted sesame oil (10ml)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "toasted sesame oil (20ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Before you begin... Get all your ingredients and equipment ready. Skim through these steps, then wash your fruit and veg. Note: Equipment and pan sizes vary. Make sure you cook food thoroughly (even if it takes you a little longer than 10 min).",
      "Now, let's get started! Squeeze your pouch[es] of cooked brown long grain rice to separate the grains. Tear the top corner of the pouch[es] (just a little!) and microwave for 2 min or until piping hot. Tip: If you're cooking two pouches, pop them in together but increase the microwave cook time accordingly.",
      "Top, tail, peel and grate your carrot[s].",
      "Heat a large, wide-based pan (preferably non-stick) with a drizzle of vegetable oil over a medium-high heat. Wash your shredded kale, then pat it dry with kitchen paper. Trim, then slice your spring onion[s] roughly.",
      "Once the pan is hot, remove it from the heat, then add the brown rice with your roasted garlic paste, grated carrot, shredded kale and sliced spring onion. Return the pan to the heat, then add your toasted sesame oil, soy sauce, chilli flakes (can't handle the heat? Go easy!) and 2 tsp [3 tsp] [4 tsp] sugar and cook for 2-3 min or until fully combined.",
      "Meanwhile, heat a separate, large, wide-based pan (preferably non-stick with a matching lid) with a drizzle of vegetable oil over a medium heat. Once hot, crack your egg[s] into the pan and cook, covered, for 3 min or until cooked to your liking. Tip: Give your egg a little shake before you crack for a perfectly centred yolk!",
      "Add the juice of half your lime[s] to the pan with the rice and give everything a good mix up – this is your nasi goreng. Cut your cucumber in half lengthways, then slice finely. Cut the remaining lime into 1 wedge per person.",
      "Serve the nasi goreng and top it with a fried egg. Garnish with the sliced cucumber, roasted peanuts and lime wedges. Squeeze over your sriracha (not a fan of spice? Just add a little!). Enjoy!"
    ]
  },
  {
    "id": "R-1871",
    "title": "Goan-Style King Prawn Balchão Curry With Basmati Rice",
    "source": "Gousto",
    "cuisine": "Indian",
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "3 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": true,
      "dairyFree": true,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 25,
      "max": 40
    },
    "fiveADay": 3,
    "nutritionPerServing": {
      "calories": 374,
      "fatG": 2,
      "satFatG": 0.2,
      "carbsG": 64,
      "sugarG": 11,
      "fibreG": 6,
      "proteinG": 21,
      "saltG": 0.9
    },
    "allergens": [
      "A2: crustacean"
    ],
    "staples": [
      "salt",
      "sugar",
      "vegetable oil",
      "water",
      "food processor / pestle & mortar"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "cayenne pepper",
        "category": "herbs & spices",
        "amounts": {
          "2": "0.5tsp",
          "3": "0.5tsp",
          "4": "0.5tsp"
        }
      },
      {
        "name": "cider vinegar",
        "category": "pantry",
        "amounts": {
          "2": "30ml",
          "3": "15ml & 30ml",
          "4": "2 x 30ml"
        }
      },
      {
        "name": "dried chilli flakes",
        "category": "herbs & spices",
        "amounts": {
          "2": "0.5tsp",
          "3": "0.5tsp",
          "4": "2 x 0.5tsp"
        }
      },
      {
        "name": "fresh root ginger",
        "category": "produce",
        "amounts": {
          "2": "15g",
          "3": "15g",
          "4": "2 x 15g"
        }
      },
      {
        "name": "garlic clove",
        "category": "produce",
        "amounts": {
          "2": "3",
          "3": "5",
          "4": "6"
        }
      },
      {
        "name": "ground coriander",
        "category": "herbs & spices",
        "amounts": {
          "2": "1tsp",
          "3": "1tsp",
          "4": "2 x 1tsp"
        }
      },
      {
        "name": "ground cumin",
        "category": "herbs & spices",
        "amounts": {
          "2": "1tsp",
          "3": "1tsp",
          "4": "2 x 1tsp"
        }
      },
      {
        "name": "raw peeled king prawns",
        "category": "meat & fish",
        "amounts": {
          "2": "171g",
          "3": "85g & 171g",
          "4": "2 x 171g"
        }
      },
      {
        "name": "red onion",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "spinach",
        "category": "produce",
        "amounts": {
          "2": "80g",
          "3": "1½ x 80g",
          "4": "2 x 80g"
        }
      },
      {
        "name": "tamarind paste",
        "category": "pantry",
        "amounts": {
          "2": "15g",
          "3": "15g",
          "4": "2 x 15g"
        }
      },
      {
        "name": "tomato paste",
        "category": "pantry",
        "amounts": {
          "2": "32g",
          "3": "16g & 32g",
          "4": "2 x 32g"
        }
      },
      {
        "name": "white basmati rice",
        "category": "pantry",
        "amounts": {
          "2": "130g",
          "3": "65g & 130g",
          "4": "2 x 130g"
        }
      }
    ],
    "steps": [
      "Peel and finely dice your red onion[s].",
      "Heat a large, wide-based pan (preferably non-stick) with a generous drizzle of vegetable oil over a medium-low heat. Once hot, add the diced onion with a pinch of salt and cook for 10-12 min or until softened.",
      "Meanwhile, add your basmati rice and 300ml [390ml] [600ml] cold water to a pot with a lid and bring to the boil over a high heat. Once boiling, reduce the heat to low and cook, covered, for 10-12 min or until all the water has absorbed and the rice is cooked. Once done, remove from the heat and keep covered until serving.",
      "Meanwhile, peel (scrape the skin off with a teaspoon) and roughly chop your ginger. Peel and roughly chop your garlic.",
      "Add the chopped ginger, chopped garlic, ground coriander, ground cumin, chilli flakes, cayenne pepper (can't handle the heat? Go easy!) and a generous pinch of salt to a pestle & mortar and grind to a smooth paste. Tip: Don't have a pestle & mortar? Use a food processor instead! Add 2 tbsp [3 tbsp] [4 tbsp] vegetable oil and give everything a good mix up – this is your balchão spice paste.",
      "Once the onion has softened, add the balchão spice paste and tomato paste to the pan and cook for 4-5 min or until fragrant. Wash your spinach, then pat it dry with kitchen paper.",
      "Once fragrant, increase the heat to medium-high, drain your king prawns, then add them to the pan with your tamarind paste, cider vinegar and 1 tsp [1 1/2 tsp] [2 tsp] sugar and cook for 2-3 min or until the prawns are almost cooked through. Add your spinach with 60ml [80ml] [100ml] cold water and cook for a further 3-4 min or until the spinach has wilted, the sauce has thickened to a curry-like consistency and the prawns are cooked through – this is your Goan-style king prawn balchão curry.",
      "Serve the Goan-style king prawn balchão curry over the basmati rice. Enjoy!"
    ]
  },
  {
    "id": "R-1911",
    "title": "Chicken Fajitas With Tortillas And Salsa",
    "source": "Gousto",
    "cuisine": "Mexican",
    "tags": [
      "3 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 25,
      "max": 30
    },
    "fiveADay": 3,
    "nutritionPerServing": {
      "calories": 574,
      "fatG": 14,
      "satFatG": 6,
      "carbsG": 65,
      "sugarG": 17,
      "fibreG": 13,
      "proteinG": 45,
      "saltG": 1
    },
    "allergens": [
      "A1: gluten",
      "A7: milk"
    ],
    "staples": [
      "salt",
      "vegetable oil",
      "microwave"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British chicken breast portion (1pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "British chicken breast portions (2pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "coriander (5g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "gem lettuce (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "ground coriander (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "ground cumin (2tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "ground smoked paprika (2tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "lime (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "natural yoghurt (80g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "red onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "red pepper (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "seeded tortillas (6pcs)",
        "category": "bakery",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "tomato (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Before you start cooking, take your chicken out of the fridge, open the packet and let it air. Chop your chicken breast portion[s] into thin strips.",
      "Deseed your pepper[s] (scrape the seeds and pith out with a teaspoon) and cut into thin strips. Peel then slice your red onion[s]. Add the chopped chicken, chopped pepper and most of the red onion (you'll use the rest later!) to a large bowl.",
      "Add your ground smoked paprika, ground cumin, ground coriander, 1 tbsp [1 1/2 tbsp] [2 tbsp] vegetable oil and a generous pinch of salt and give it a good mix up – this is your chicken fajita mix.",
      "Heat a large wide-based pan (preferably non-stick) over a high heat. Once hot, add the chicken fajita mix and cook for 12-15 min or until the veg has softened and the chicken is cooked through (no pink meat!).",
      "Meanwhile, wash your gem lettuce, then pat dry with kitchen paper and shred finely. Dice your tomato[es] and the remaining red onion. Chop your coriander roughly, including the stalks. Chop the red onion, tomato and coriander together as finely as you can.",
      "Add the diced onion, tomato and coriander to a small bowl, add a squeeze of lime juice and a pinch of salt – this is your tomato salsa.",
      "Add your seeded tortillas to a plate and pop in the microwave for 20 secs on high or until warmed through. Meanwhile, chop the remaining lime into 1 wedge per person.",
      "Dollop the warmed tortillas with your natural yoghurt, a handful of shredded lettuce, the cooked chicken fajita mix and a dollop of tomato salsa. Garnish with a lime wedge. Enjoy!"
    ]
  },
  {
    "id": "R-2012",
    "title": "Peri Peri Chicken Pitta With Sweet Potato Wedges",
    "source": "Gousto",
    "cuisine": "Portuguese",
    "tags": [
      "3 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 30,
      "max": 35
    },
    "fiveADay": 3,
    "nutritionPerServing": {
      "calories": 468,
      "fatG": 5,
      "satFatG": 1,
      "carbsG": 69,
      "sugarG": 19,
      "fibreG": 8,
      "proteinG": 42,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten",
      "A6: soya",
      "A7: milk"
    ],
    "staples": [
      "salt",
      "sugar",
      "vegetable oil"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British chicken breast portion (1pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "British chicken breast portions (2pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "dried chilli flakes (0.5tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "dried oregano (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "gem lettuce (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "ground smoked paprika (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "lemon (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "natural yoghurt (80g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "red onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "soy sauce (8ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "sweet potato (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "tomato (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "wholemeal pittas (2pcs)",
        "category": "bakery",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Preheat the oven to 220°C/ 200°C (fan)/ gas 7, then take your chicken out of the fridge and open the packet to let it air. Cut your sweet potato[es] (skin on) into wedges and add to a baking tray (or two!) with a drizzle of vegetable oil and a generous pinch of salt and give everything a good mix up. Put the tray[s] in the oven for 20-25 min or until the wedges are tender and starting to crisp.",
      "Peel and slice your red onion[s]. Heat a large, wide-based pan (preferably non-stick with a matching lid) with 1/2 tbsp [3/4 tbsp] [1 tbsp] vegetable oil over a medium heat. Once hot, add the sliced onion with a pinch of salt and 1 tsp [1 1/2 tsp] [2 tsp] sugar and cook for 3-5 min or until starting to caramelise.",
      "Cut your chicken breast portion[s] in half across the middle – these are your chicken pieces. Peel and finely chop (or grate) your garlic and cut your lemon[s] in half.",
      "Combine your ground smoked paprika, dried oregano, chopped garlic and chilli flakes (can't handle the heat? Go easy!) on a plate. Add the juice from your lemon[s], your soy sauce and 1/2 tbsp [3/4 tbsp] [1 tbsp] vegetable oil and mix to form a paste – this is your peri peri paste. Add the chicken pieces to the paste and mix until fully coated – this is your coated chicken.",
      "Once the onion has caramelised, push to one side of the pan and increase the heat to high. Add the coated chicken to the other side of the pan and cook for 4 min on each side until golden, then turn the heat down to medium, cover with a lid and cook for a further 3-4 min or until cooked through (no pink meat!) – this is your peri peri chicken. Tip: Cooking for 3 or more? Use 2 pans! Ordered extra halloumi? Slice and cook in a pan with a little oil for 4-6 min or until golden all over.",
      "While the chicken is cooking, wash and shred your gem lettuce finely, then pat it dry with kitchen paper. Slice your tomato[es] into rounds.",
      "Add your pitta[s] to the tray[s] with the sweet potato wedges and cook for 1-2 min or until warmed through.",
      "Cut the warmed pitta in half and spread the inside of each half with a dollop of natural yoghurt, then stuff with the peri peri chicken, caramelised onions, shredded lettuce and tomato rounds – this is your is your peri peri chicken pitta. Serve the peri peri chicken pitta with the sweet potato wedges and any remaining shredded lettuce and tomato rounds to the side. Enjoy!"
    ]
  },
  {
    "id": "R-2277",
    "title": "Curried Haddock With Spinach & Turmeric Dal",
    "source": "Gousto",
    "cuisine": "Indian",
    "tags": [
      "3 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 40,
      "max": 45
    },
    "fiveADay": 3,
    "nutritionPerServing": {
      "calories": 420,
      "fatG": 4,
      "satFatG": 1,
      "carbsG": 50,
      "sugarG": 9,
      "fibreG": 18,
      "proteinG": 44,
      "saltG": 1
    },
    "allergens": [
      "A4: fish",
      "A7: milk"
    ],
    "staples": [
      "salt",
      "vegetable oil",
      "tin foil"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "brown onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "coriander & mint (10g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "cucumber (0.5pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "curry powder (0.5tbsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "curry powder (1tbsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "fresh root ginger (15g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "green lentils (390g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "ground turmeric (0.5tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "haddock bites (200g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "lemon (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "natural yoghurt (80g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "nigella seeds (1tsp)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "red lentils (100g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "spinach (120g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Preheat the oven to 220°C/ 200°C (fan)/ gas 7, then rinse your red lentils in a sieve under cold running water. Add the red lentils to a pot with plenty of cold water, then bring to the boil over a high heat and reduce to medium-low and cook for 15-20 min or until the lentils are tender. Once done, drain and return them to the pot.",
      "Whilst the lentils are cooking, cut your cucumber in half lengthways and scrape out the inner seeds with a teaspoon, throw the watery seeds away and chop the cucumber finely. Cut your lemon[s] in half. Strip your mint leaves from their stems and chop them finely, discard the stems. Finely chop your coriander, including the stalks.",
      "Peel and finely chop your brown onion[s]. Peel (scrape the skin off with a teaspoon) and chop (or grate) your ginger. Peel and finely chop (or grate) your garlic.",
      "Combine your natural yoghurt with the chopped coriander, the juice of half your lemon and a pinch of salt – this is your coriander yoghurt. Combine the chopped cucumber with the chopped mint, nigella seeds, juice of the remaining lemon and a pinch of salt – this is your cucumber salad.",
      "Heat a large, wide-based pan (preferably non-stick) with 1 tbsp [1 1/2 tbsp] [2 tbsp] vegetable oil over a medium-high heat. Once hot, add the chopped onion with a generous pinch of salt and cook for 5-6 min or until softened. Once softened, add the chopped ginger, garlic and ground turmeric and cook for 1 min or until fragrant.",
      "Pat your haddock bites dry with kitchen paper (unevenly sized haddock bites? Chop any larger ones into bite-sized pieces!) and add them to a tin foil-lined tray. Sprinkle over your curry powder and turn the haddock bites several times until they're fully coated. Lightly drizzle them with 1 tbsp [1 1/2 tbsp] [2 tbsp] vegetable oil and put the tray in the oven for 5 min or until cooked through – this is your curried haddock. Tip: Your fish is cooked once it turns opaque and flakes easily.",
      "Wash your spinach, then pat dry with kitchen paper. Once the red lentils are cooked, add them to the pan with the green lentils and the spinach and give everything a good mix up. Cook for 2-3 min or until the spinach has wilted and the lentils are warmed through – this is your spinach & turmeric dal.",
      "Serve the curried haddock over the spinach & turmeric dal with the cucumber salad to the side. Dollop over the coriander yoghurt. Enjoy!"
    ]
  },
  {
    "id": "R-2366",
    "title": "Persian-Style Lamb Burger With Herby Feta And Harissa Mayo",
    "source": "Gousto",
    "cuisine": "Middle Eastern",
    "tags": [
      "1 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 30,
      "max": 35
    },
    "fiveADay": 1,
    "nutritionPerServing": {
      "calories": 825,
      "fatG": 36,
      "satFatG": 13,
      "carbsG": 88,
      "sugarG": 21,
      "fibreG": 8,
      "proteinG": 38,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten",
      "A3: egg",
      "A7: milk",
      "A12: sulphites"
    ],
    "staples": [
      "olive oil",
      "pepper",
      "salt",
      "vegetable oil",
      "water",
      "tin foil"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British lamb mince (125g)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "British lamb mince (250g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "carrot (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "ciabatta (1pcs)",
        "category": "bakery",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "coriander (5g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "feta (30g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "ground cumin (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "harissa paste (20g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "mayonnaise (30ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "red wine vinegar (15ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "sultanas (30g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "white potato (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "3",
          "3": "5",
          "4": "6"
        }
      }
    ],
    "steps": [
      "Preheat the oven to 220°C/ 200°C (fan)/ gas 7. Cut your potatoes (skins on) into chips. Add the chips to a baking tray (or two!) with a drizzle of vegetable oil and a pinch of salt and pepper. Give everything a good mix up and put the tray[s] in the oven for 20-25 min or until golden and crisp.",
      "Whilst the chips are in the oven, peel and finely chop (or grate) your garlic. Add the chopped garlic to a bowl with your lamb mince and ground cumin and a generous pinch of salt and pepper. Massage the meat with clean hands for 1 min (this helps the patty hold its shape whilst cooking), then shape into 1 equal-sized patty per person. Add to a baking tray (use tin foil to avoid mess!) and put into the oven for 15-20 min or until cooked through (no pink meat!).",
      "Chop your coriander roughly, including the stalks.",
      "Add the chopped coriander to a bowl and crumble in your feta. Add a drizzle of olive oil and a generous pinch of pepper and stir it all together – this is your herby feta.",
      "Chop your sultanas roughly. Top, tail, peel and grate your carrot[s]. Add the chopped sultanas and grated carrot to a separate bowl with your red wine vinegar and a pinch of salt. Give everything a good mix up – this is your zingy carrot & sultana slaw.",
      "Meanwhile, slice your ciabatta[s] in half. Heat a large, dry, wide-based pan (preferably non-stick) over a medium heat. Once hot, add the ciabatta halves, cut side down, and cook for 2-3 min or until warmed through.",
      "Combine your harissa paste (can't handle the heat? Go easy!), mayo, a drizzle of olive oil and 1 tsp [1 1/2 tsp] [2 tsp] water in a small bowl – this is your harissa mayo.",
      "Spread a spoonful of harissa mayo onto the warmed ciabatta base, then top with a lamb patty, the herby feta and warmed ciabatta lid – this is your Persian-style lamb burger. Serve with the chips, zingy carrot & sultana slaw and any remaining harissa mayo to the side. Enjoy!"
    ]
  },
  {
    "id": "R-2385",
    "title": "Creamy Garlic Mushroom Gnocchi (V)",
    "source": "Gousto",
    "cuisine": "Italian",
    "tags": [
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": true,
      "vegan": false
    },
    "timeMinutes": {
      "min": 10,
      "max": 20
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 439,
      "fatG": 14,
      "satFatG": 9,
      "carbsG": 60,
      "sugarG": 3,
      "fibreG": 4,
      "proteinG": 18,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten",
      "A6: soya",
      "A7: milk",
      "A10: mustard",
      "A12: sulphites"
    ],
    "staples": [
      "olive oil",
      "pepper"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "Dijon mustard (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "basil (5g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "chestnut mushrooms (80g)",
        "category": "produce",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "chestnut mushrooms (160g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "crème fraîche (80g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "gnocchi (350g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "grated Italian hard cheese (30g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "roasted garlic paste (15g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "soy sauce (8ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "spinach (80g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Before you begin... Get all your ingredients and equipment ready. Skim through these steps, then wash your fruit and veg. Note: Equipment and pan sizes vary. Make sure you cook food thoroughly (even if it takes you a little longer than 10 min).",
      "Now, let's get started! Boil a full kettle. Heat a large, wide-based pan (preferably non-stick) with a drizzle of olive oil over a medium-high heat. Tear your chestnut mushrooms into rough bite-sized pieces.",
      "Once hot, add the torn mushrooms and roasted garlic paste to the pan and cook for 2-3 min or until starting to caramelise.",
      "Add your gnocchi to a pot of boiled water and bring to the boil over a high heat. Cook the gnocchi for 3 min or until it begins to rise to the top of the pot. Once done, drain the cooked gnocchi, reserving a cup of the starchy pasta water.",
      "Wash your spinach, then pat it dry with kitchen paper. Once the mushrooms have started to caramelise, add your spinach and soy sauce to the pan and cook for 2-3 min or until starting to wilt.",
      "Once done, add your crème fraîche and Dijon mustard and stir everything together.",
      "Add the drained gnocchi and half of your grated Italian hard cheese (save the rest for garnish!) and give everything a good mix up – this is your creamy garlic mushroom gnocchi. Tip: Add a splash of the reserved starchy pasta water if it's looking a little dry.",
      "Serve the creamy garlic mushroom gnocchi. Tear your basil leaves over the top. Garnish with the remaining grated Italian hard cheese and a generous grind of black pepper. Enjoy!"
    ]
  },
  {
    "id": "R-2942",
    "title": "Chicken, Date & Tamarind Curry With Brown Rice",
    "source": "Gousto",
    "cuisine": "Indian",
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": true,
      "dairyFree": true,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 40,
      "max": 50
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 561,
      "fatG": 13,
      "satFatG": 9,
      "carbsG": 72,
      "sugarG": 19,
      "fibreG": 8,
      "proteinG": 40,
      "saltG": 1.9
    },
    "allergens": [],
    "staples": [
      "butter",
      "olive oil",
      "pepper",
      "salt",
      "water"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "brown basmati rice",
        "category": "pantry",
        "amounts": {
          "2": "130g",
          "3": "1½ x 130g",
          "4": "2 x 130g"
        }
      },
      {
        "name": "chicken breast strips",
        "category": "meat & fish",
        "amounts": {
          "2": "250g",
          "3": "125g & 250g",
          "4": "2 x 250g"
        }
      },
      {
        "name": "chicken stock mix",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "5.5g",
          "4": ""
        }
      },
      {
        "name": "chicken stock mix (intense)",
        "category": "pantry",
        "amounts": {
          "2": "5.5g",
          "3": "5.5g",
          "4": "2 x 5.5g"
        }
      },
      {
        "name": "chopped dates",
        "category": "pantry",
        "amounts": {
          "2": "30g",
          "3": "1½ x 30g",
          "4": "2 x 30g"
        }
      },
      {
        "name": "coriander",
        "category": "produce",
        "amounts": {
          "2": "5g",
          "3": "5g",
          "4": "2 x 5g"
        }
      },
      {
        "name": "cucumber",
        "category": "produce",
        "amounts": {
          "2": "½",
          "3": "¾",
          "4": "1"
        }
      },
      {
        "name": "curry powder",
        "category": "herbs & spices",
        "amounts": {
          "2": "1tbsp",
          "3": "0.5tbsp & 1tbsp",
          "4": "2tbsp"
        }
      },
      {
        "name": "fresh root ginger",
        "category": "produce",
        "amounts": {
          "2": "15g",
          "3": "15g",
          "4": "2 x 15g"
        }
      },
      {
        "name": "ground turmeric",
        "category": "herbs & spices",
        "amounts": {
          "2": "1tsp",
          "3": "1tsp",
          "4": "2 x 1tsp"
        }
      },
      {
        "name": "red onion",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "solid creamed coconut",
        "category": "pantry",
        "amounts": {
          "2": "25g",
          "3": "25g",
          "4": "2 x 25g"
        }
      },
      {
        "name": "tamarind paste",
        "category": "pantry",
        "amounts": {
          "2": "15g",
          "3": "15g",
          "4": "2 x 15g"
        }
      },
      {
        "name": "tomato",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Before you start cooking, take your chicken out of the fridge, open the packet and let it air. Boil a kettle. Peel and slice your red onion[s] finely.",
      "Heat a large, wide-based pan (preferably non-stick with a matching lid) with a knob of butter over a medium-low heat. Once melted, add most of the sliced onion (you'll use the rest later!) with a pinch of salt and cook for 8-10 min or until softened and caramelised.",
      "While the onion is cooking, rinse your brown rice and add it to a pot with plenty of cold water and bring to the boil over a high heat. Once boiling, reduce the heat to medium and cook for 20-25 min or until it's tender with a slight bite. Once cooked, drain and return it to the pot with a knob of butter and keep covered until serving.",
      "Whilst the rice is cooking, peel (scrape the skin off with a teaspoon) and finely chop (or grate) your ginger. Chop your creamed coconut roughly (if required!).",
      "Combine your chopped dates, tamarind paste, chicken stock mix and chopped creamed coconut with 400ml [600ml] [800ml] boiled water – this is your date & tamarind stock. Chop your coriander finely (including the stalks), then dice your tomato[es] and cucumber and set everything aside for later.",
      "Add the chopped ginger, ground turmeric, curry powder and a generous grind of black pepper to the softened onion and cook for 30 secs. Add the date & tamarind stock and give everything a good mix up. Add your chicken breast strips and increase the heat to high. Cook, covered, for 13-15 min or until the chicken is cooked through (no pink meat!) and the sauce has reduced to a curry-like consistency.",
      "Combine the diced tomato, diced cucumber and remaining onion with a pinch of salt and drizzle of olive oil in a large bowl, then add the chopped coriander just before serving – this is your Indian-style salad. Remove the pan from the heat and shred the cooked chicken apart in the pan using two forks – this technique is known as 'pulling'. Give everything a good mix up – this is your chicken, date & tamarind curry.",
      "Serve the chicken, date & tamarind curry over the brown rice with the Indian-style salad to the side. Enjoy!"
    ]
  },
  {
    "id": "R-3125",
    "title": "Oven-Baked Spicy King Prawn Arrabbiata Farfalle",
    "source": "Gousto",
    "cuisine": "Italian",
    "tags": [
      "1 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 35,
      "max": 40
    },
    "fiveADay": 1,
    "nutritionPerServing": {
      "calories": 506,
      "fatG": 7,
      "satFatG": 4,
      "carbsG": 86,
      "sugarG": 8,
      "fibreG": 6,
      "proteinG": 30,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten",
      "A2: crustacean",
      "A7: milk"
    ],
    "staples": [
      "olive oil",
      "pepper",
      "sugar",
      "butter",
      "water",
      "hob-safe oven-proof casserole dish"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "basil (5g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "dried chilli flakes (0.5tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "dried chilli flakes (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "farfalle (100g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "farfalle (200g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "finely chopped tomatoes (200g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "3",
          "3": "5",
          "4": "6"
        }
      },
      {
        "name": "grated Italian hard cheese (30g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "raw peeled king prawns (171g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "raw peeled king prawns (85g)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "rocket (20g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "tomato paste (16g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "vegetable stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "vegetable stock mix (11g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Before you begin... This recipe takes around 5-10 min to prep, so get your casserole dish and all your ingredients ready, then wash your fruit and veg. Note: Make sure your dish is oven-proof and safe to use on the hob. Don't have one? Start cooking in a large, wide-based pan then transfer to an oven-proof dish and cover tightly with foil.",
      "Now, let's get started! Preheat the oven to 220°C/ 200°C (fan)/ gas 7. Boil a kettle. Heat a large, wide-based, hob-safe oven-proof casserole dish with a matching lid with a drizzle of olive oil over a medium-high heat. Crush your garlic cloves open by squashing them with the side of a knife, then remove the skins and chop roughly.",
      "Add the chopped garlic to the dish with your chilli flakes (can't handle the heat? Go easy!) and cook for 30 secs.",
      "Stir in your vegetable stock mix, then add the chopped tomatoes, tomato paste and 400ml [600ml] [800ml] boiled water. Bring to the boil over a high heat.",
      "Once boiling, add 1/2 tsp [3/4 tsp] [1 tsp] sugar and stir through your farfalle.",
      "Cover with a lid and put the dish in the oven for an initial 25 min. Use this time to clear up, set the table, have a cup of tea or simply chill!",
      "Once the pasta has been cooking for 25 min, remove the dish from the oven. Drain your king prawns, then add them to the dish and give everything a good mix up. Cover with a lid and return the dish to the oven for 4-5 min further or until the prawns are cooked through and the pasta is tender – this is your oven-baked spicy king prawn arrabbiata farfalle. Wash your rocket, then pat it dry with kitchen paper.",
      "To serve, tear your basil leaves into the oven-baked spicy king prawn arrabbiata farfalle and stir through your grated Italian hard cheese with a large knob of butter. Garnish with your rocket and season with a grind of pepper. Dig in!"
    ]
  },
  {
    "id": "R-3140",
    "title": "Cajun-Style Chicken Thigh & Sweetcorn Casserole",
    "source": "Gousto",
    "cuisine": "American",
    "tags": [
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 25,
      "max": 30
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 502,
      "fatG": 19,
      "satFatG": 7,
      "carbsG": 36,
      "sugarG": 9,
      "fibreG": 9,
      "proteinG": 44,
      "saltG": 1
    },
    "allergens": [
      "A7: milk"
    ],
    "staples": [
      "flour",
      "pepper",
      "salt",
      "vegetable oil",
      "sugar",
      "water"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British skinless chicken thighs (160g)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "British skinless chicken thighs (320g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "basil (5g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "butter beans (185g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "butter beans (400g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "canned sweetcorn (150g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "cayenne pepper (0.5tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "chicken stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "dried oregano (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "fine green beans (80g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "ground coriander (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "ground cumin (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "ground smoked paprika (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "soft cheese (50g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Boil half a kettle, then take your chicken out of the fridge, open the packet and let it air. Add your ground smoked paprika, cayenne pepper (can't handle the heat? Go easy!), ground coriander, dried oregano, ground cumin, a pinch of sugar and salt and a generous grind of black pepper to a plate and give it a good mix up – this is your Cajun-style spice blend.",
      "Add your chicken thighs to the Cajun-style spice blend and turn them several times until they're fully coated in all the spices – these are your Cajun-style spiced chicken thighs.",
      "Heat a large, wide-based pan (preferably non-stick with a matching lid) with a generous drizzle of vegetable oil over a medium-high heat. Once hot, add the Cajun-style spiced chicken thighs to the pan and cook for 3 min on each side.",
      "While the chicken is cooking, trim your green beans, then chop into bite-sized pieces. Add the chopped green beans to the pan with the chicken.",
      "Peel and grate your garlic. Dissolve your chicken stock mix in 200ml [260ml] [350ml] boiled water with your soft cheese and grated garlic – this is your creamy garlic stock.",
      "Add 1 tbsp [1 1/2 tbsp] [2 tbsp] flour to the pan and stir it into the sauce around the chicken, so the flour soaks up the juices, then add the creamy garlic stock.",
      "Drain and rinse your sweetcorn and butter beans and add them to the pan. Roughly tear half of your basil (save some for garnish!) into the pan and season with a generous crack of black pepper and a pinch of salt. Mix everything together and cook covered, stirring occasionally, for 12 min or until the chicken is cooked through (no pink meat!) – this is your Cajun-style chicken thigh & sweetcorn casserole.",
      "Serve the Cajun-style chicken thigh & sweetcorn casserole. Tear the remaining basil over the top and season with a grind of black pepper. Enjoy!"
    ]
  },
  {
    "id": "R-3449",
    "title": "Sweet Chilli Salmon With Sesame Pak Choi And Ginger Rice",
    "source": "Gousto",
    "cuisine": "Asian",
    "tags": [
      "Dairy-free",
      "1 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": true,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 25,
      "max": 30
    },
    "fiveADay": 1,
    "nutritionPerServing": {
      "calories": 566,
      "fatG": 19,
      "satFatG": 4,
      "carbsG": 68,
      "sugarG": 10,
      "fibreG": 4,
      "proteinG": 30,
      "saltG": 1
    },
    "allergens": [
      "A1: gluten",
      "A4: fish",
      "A6: soya",
      "A11: sesame"
    ],
    "staples": [
      "olive oil",
      "salt",
      "vegetable oil",
      "water",
      "tin foil"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "chipotle paste (20g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "fresh root ginger (15g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "pak choi (200g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "red chilli relish (25g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "skin on salmon fillet (1pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "skin on salmon fillets (2pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "soy sauce (8ml)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "soy sauce (15ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "toasted sesame seeds (5g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "white long grain rice (130g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "white long grain rice (65g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      }
    ],
    "steps": [
      "Preheat the oven to 220°C/ 200°C (fan)/ gas 7. Peel (scrape the skin off with a teaspoon) and finely chop (or grate) your ginger.",
      "Add your white long grain rice, chopped ginger, a pinch of salt and 225ml [300ml] [450ml] cold water to a pot with a lid and bring to the boil over a high heat. Once boiling, reduce the heat to very low and cook, covered, for 12-15 min or until all the water has absorbed and the rice is cooked. Once done, remove from the heat and set aside (lid on) to steam until serving – this is your ginger rice.",
      "While the rice is cooking, combine your chilli relish, chipotle paste (can't handle the heat? Go easy!) and 1 tbsp [1 1/2 tbsp] [2 tbsp] olive oil in a bowl – this is your sweet chilli sauce.",
      "Add your salmon fillet[s] to a tin foil-lined tray (or two!). Season the salmon with a pinch of salt and spoon the sweet chilli sauce over the top evenly. Put the tray[s] in the oven for 14-15 min or until the salmon is cooked through – this is your sweet chilli salmon. Tip: Your fish is cooked when it turns opaque and flakes easily.",
      "While the salmon is in the oven, peel and finely slice (don't chop!) your garlic. Wash your pak choi, then pat it dry with kitchen paper and cut in half, separating the white bases and green tops. Boil half a kettle.",
      "Heat a large, wide-based pan (preferably non-stick with a matching lid) with a drizzle of vegetable oil over a medium heat. Once hot, add the pak choi white bases and the sliced garlic and cook for 1-2 min or until the garlic has browned slightly. Add 50ml [75ml] [100ml] boiled water to the pan and cook, covered, for a further 2-3 min.",
      "Add the pak choi green tops and your soy sauce to the pan and cook for 2-3 min or until the pak choi green tops have wilted. Sprinkle your toasted sesame seeds over the wilted pak choi – this is your sesame pak choi.",
      "Serve the sweet chilli salmon with the ginger rice and sesame pak choi to the side. Enjoy!"
    ]
  },
  {
    "id": "R-3535",
    "title": "Southern Thai-Style Haddock Panang Curry",
    "source": "Gousto",
    "cuisine": "Thai",
    "tags": [
      "Dairy-free",
      "1 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": true,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 25,
      "max": 30
    },
    "fiveADay": 1,
    "nutritionPerServing": {
      "calories": 653,
      "fatG": 30,
      "satFatG": 18,
      "carbsG": 61,
      "sugarG": 8,
      "fibreG": 8,
      "proteinG": 31,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten",
      "A4: fish",
      "A5: peanut"
    ],
    "staples": [
      "salt",
      "sugar",
      "vegetable oil",
      "water"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "brown onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "crispy onions (15g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "dried makrut lime leaf (1pcs)",
        "category": "herbs & spices",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "fish sauce (8ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "pepper (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "ground turmeric (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "haddock bites (200g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "haddock bites (100g)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "red Thai curry paste (20g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "smooth peanut butter (26g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "solid creamed coconut (50g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "solid creamed coconut (25g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "white basmati rice (130g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "white basmati rice (65g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      }
    ],
    "steps": [
      "Add your basmati rice and 300ml [390ml] [600ml] cold water to a pot with a lid and bring to the boil over a high heat. Once boiling, reduce the heat to very low and cook, covered, for 10-12 min or until all the water has been absorbed and the rice is cooked. Once cooked, remove from the heat and keep covered until serving.",
      "Meanwhile, peel and finely slice your brown onion[s]. Deseed your pepper[s] (scrape the seeds and pith out with a teaspoon) and cut into thin strips.",
      "Heat a large, wide-based pan (preferably non-stick with matching lid) with a drizzle of vegetable oil over a medium heat. Once hot, add the sliced onion and pepper strips and cook for 4-5 min or until starting to soften.",
      "Boil half a kettle. Chop your creamed coconut roughly (if required!).",
      "Dissolve the chopped creamed coconut and peanut butter in 250ml [325ml] [450ml] boiled water. Add your ground turmeric, fish sauce, lime leaves and 1 tsp [1 1/2 tsp] [2 tsp] sugar – this is your peanut stock.",
      "Once the veg has softened, add your red Thai curry paste to the pan and cook for 3-4 min or until fragrant. Once fragrant, add the peanut stock and cook for 2-3 min further or until the sauce has thickened. Pat your haddock bites dry with kitchen paper (unevenly sized haddock bites? Chop any larger ones into bite-sized pieces!).",
      "Once thickened, top the curry with the haddock bites and cook, covered, for 4-5 min further or until the fish is cooked through, then season with a pinch of salt – this is your Southern Thai-style haddock panang curry. Tip: Your fish is cooked once it turns opaque and flakes easily. Fluff the basmati rice with a fork and season with a pinch of salt.",
      "Serve the Southern Thai-style haddock panang curry with the basmati rice to the side. Garnish with your crispy onions. Enjoy!"
    ]
  },
  {
    "id": "R-359",
    "title": "Warm Ginger Beef Noodle Salad With Peanuts",
    "source": "Gousto",
    "cuisine": "Asian",
    "tags": [
      "Dairy-free",
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": true,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 20,
      "max": 25
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 571,
      "fatG": 28,
      "satFatG": 10,
      "carbsG": 44,
      "sugarG": 16,
      "fibreG": 5,
      "proteinG": 36,
      "saltG": 3
    },
    "allergens": [
      "A1: gluten",
      "A3: egg",
      "A5: peanut",
      "A6: soya"
    ],
    "staples": [
      "olive oil",
      "sugar",
      "vegetable oil"
    ],
    "servingsSupported": [
      2,
      3
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British beef mince (125g)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "British beef mince (250g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "carrot (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "coriander & mint (10g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "fine egg noodle nest (1pcs)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "fresh root ginger (15g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "gem lettuce (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "red chilli relish (25g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "rice vinegar (30ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "roasted peanuts (25g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": ""
        }
      },
      {
        "name": "soy sauce (15ml)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "soy sauce (30ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": ""
        }
      }
    ],
    "steps": [
      "Preheat the oven to 200°C/ 180°C (fan)/ gas 6. Boil a full kettle. Add your rice vinegar and chilli relish to a small bowl with half of your soy sauce (you'll use the rest later!), 1 tsp [1 1/2 tsp] [2 tsp] sugar and 1 tbsp [1 1/2 tbsp] [2 tbsp] olive oil – this is your chilli dressing.",
      "Add your roasted peanuts to a baking tray and put the tray in the oven for 3-4 min or until toasted and lightly golden. Tip: Watch them like a hawk to make sure they don't burn! Once toasted, remove from the oven and set aside.",
      "Meanwhile, peel (scrape the skin off with a teaspoon) and finely chop (or grate) your ginger. Peel and finely chop (or grate) your garlic.",
      "Heat a large, wide-based pan (preferably non-stick) with a drizzle of vegetable oil over a high heat. Once hot, add your beef mince and cook for 2-3 min or until starting to brown, breaking it up with a wooden spoon. Once starting to brown, add the chopped ginger, chopped garlic and remaining soy sauce and cook for 5-6 min or until the beef is cooked through (no pink meat!) and starting to crisp – this is your ginger beef.",
      "Add your fine egg noodles to a large bowl, cover them with boiled water and stir for 10 secs to separate the noodles. Set aside to soak for 4 min. Drain the soaked noodles, return them to the bowl and set aside.",
      "Wash your gem lettuce, then shred finely. Peel your carrot[s], then continue to peel lengths until you end up with a pile of carrot ribbons. Strip your mint leaves from their stems and chop them roughly, discard the stems. Chop your coriander finely, including the stalks.",
      "Chop the toasted peanuts coarsely. Add the chilli dressing to the drained noodles with the carrot ribbons, shredded lettuce and chopped herbs. Give everything a good mix up (use your hands for ease) – this is your noodle salad.",
      "Serve the noodle salad topped with the ginger beef. Garnish with the chopped peanuts. Enjoy!"
    ]
  },
  {
    "id": "R-3592",
    "title": "All-In-One Chicken Thigh & Gnocchi Cacio E Pepe",
    "source": "Gousto",
    "cuisine": "Italian",
    "tags": [
      "1 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 50,
      "max": 55
    },
    "fiveADay": 1,
    "nutritionPerServing": {
      "calories": 567,
      "fatG": 15,
      "satFatG": 8,
      "carbsG": 66,
      "sugarG": 5,
      "fibreG": 4,
      "proteinG": 43,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten",
      "A7: milk",
      "A12: sulphites"
    ],
    "staples": [
      "salt",
      "olive oil",
      "water",
      "oven-proof dish"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British diced chicken thigh (250g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "balsamic vinegar (15ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "chicken stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "cornflour (1tsp)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "cornflour (1tbsp)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "cracked black pepper (2.5g)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "gnocchi (350g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "grated Italian hard cheese (30g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "rocket (50g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "soft cheese (50g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "tomato (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Before you begin... This recipe takes around 5-10 min to prep, so get your oven-proof dish and all your ingredients ready, then wash your fruit and veg.",
      "Now, let’s get started! Preheat the oven to 220°C/ 200°C (fan)/ gas 7, then take your chicken out of the fridge, open the packet and let it air. Add a generous drizzle of olive oil to a large oven-proof dish (or two!). Add the diced chicken thigh to one side of the dish[es]. Coat your gnocchi in a little olive oil and add it to the other side of the dish[es].",
      "Put the dish[es] in the oven for an initial 30 min or until the chicken is cooked through (no pink meat!) and the gnocchi is crispy and golden. Tip: Check your gnocchi after 25 min and give it a stir for even crispiness!",
      "Use this time to clear up, set the table, have a cup of tea or simply chill!",
      "Once the gnocchi and chicken has been cooking for 30 min, boil half a kettle. Cut your tomato[es] in half. Add the tomato halves, cut-side up, to a baking tray with a drizzle of olive oil and season with salt. Drizzle over half your balsamic vinegar (save the rest for later!). Put the tray in the oven for 12-15 min or until tender – these are your roasted balsamic tomatoes.",
      "Once the gnocchi and chicken are almost done, mix your grated Italian hard cheese and cornflour in a jug. Add 200ml [260ml] [350ml] boiled water, your chicken stock mix, soft cheese and cracked black pepper – this is your cacio e pepe sauce.",
      "Wash your rocket, then pat it dry with kitchen paper. Remove the gnocchi & chicken dish[es] from the oven, pour over the cacio e pepe sauce and give everything a good mix up. Return the dish[es] to the oven for 8-10 min further or until the sauce has thickened and the cheese has melted – this is your all-in-one chicken thigh & gnocchi cacio e pepe.",
      "Serve the all-in-one chicken thigh & gnocchi cacio e pepe with the rocket to the side topped with the roasted balsamic tomatoes. Combine the remaining balsamic vinegar with a drizzle of olive oil and sprinkle it over the salad. Dig in!"
    ]
  },
  {
    "id": "R-3635",
    "title": "Truffle Mayo Burger With Sweet Potato Fries",
    "source": "Gousto",
    "cuisine": "American",
    "tags": [
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 35,
      "max": 40
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 971,
      "fatG": 55,
      "satFatG": 18,
      "carbsG": 84,
      "sugarG": 16,
      "fibreG": 8,
      "proteinG": 39,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten",
      "A3: egg",
      "A7: milk"
    ],
    "staples": [
      "pepper",
      "salt",
      "vegetable oil",
      "butter",
      "baking paper"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British beef mince (125g)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "British beef mince (250g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "brioche style buns (2pcs)",
        "category": "bakery",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "cheddar cheese (40g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "dried oregano (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "baby leaf salad (50g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "ground smoked paprika (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "mayonnaise (30ml)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "mayonnaise (50ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "sweet potato (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "truffle flavoured extra virgin olive oil (8ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "white wine vinegar (15ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Preheat the oven to 200°C/ 180°C (fan)/ gas 6. Remove 15g [25g] [30g] butter from the fridge and set aside to soften slightly. Peel and cut your sweet potato[es] into chips.",
      "Add the sweet potato chips to a baking paper-lined baking tray (or two!). Add a drizzle of vegetable oil, a pinch of salt and pepper and your ground smoked paprika and give everything a good mix up. Put the tray[s] in the oven for 25-30 min or until cooked through and golden – these are your smoky sweet potato chips.",
      "Meanwhile, combine your mayo, truffle oil, your white wine vinegar and a generous grind of black pepper – this is your truffle & black pepper mayo. Peel and finely chop (or grate) your garlic, then add it to a separate bowl with your dried oregano and softened butter and give everything a good mix up – this is your garlic & herb butter.",
      "Season your beef mince with a generous pinch of salt and pepper. Massage the meat with clean hands for 1 min (this helps them to hold their shape whilst cooking). Divide the mince and shape them into 1 patty per person.",
      "Once the chips have been in for 15-20 min, heat a large, dry, wide-based pan (preferably non-stick with a matching lid) over a high heat. Once hot, add the beef patty[ies], press down firmly with a spatula and cook for 5 min. Tip: Cooking for 5? You may need to do this in batches! Flip the patty[ies] and reduce the heat to medium-high and cook for 3 min further.",
      "While the patties are cooking, cut your brioche bun[s] in half and spread them with the garlic & herb butter. Add to a baking tray (or two!), butter-side up, and put the tray[s] in the oven for 3-4 min or until golden – this is your garlic & herb brioche bun[s]. Grate your cheddar cheese.",
      "Once browned, flip the beef patty[ies]and top with the grated cheddar cheese. Cover loosely with a lid (or some tin foil!) and cook for 2-3 min further or until the cheese has melted and the patties are cooked through (no pink meat!). Meanwhile, wash your baby leaf salad.",
      "Spread the base of the garlic & herb brioche bun with some truffle & black pepper mayo. Build your burger by topping the base with some baby leaf salad, a cheesy patty and some more truffle & black pepper mayo then top with the lid. Serve with the smoky sweet potato chips to the side. Enjoy!"
    ]
  },
  {
    "id": "R-3693",
    "title": "Hearty Mushroom, Basil & Lentil Ragù Gnocchi Bake (V)",
    "source": "Gousto",
    "cuisine": "Italian",
    "tags": [
      "4 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": true,
      "vegan": false
    },
    "timeMinutes": {
      "min": 35,
      "max": 40
    },
    "fiveADay": 4,
    "nutritionPerServing": {
      "calories": 356,
      "fatG": 6,
      "satFatG": 3,
      "carbsG": 57,
      "sugarG": 8,
      "fibreG": 8,
      "proteinG": 19,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten",
      "A7: milk"
    ],
    "staples": [
      "olive oil",
      "pepper",
      "salt",
      "water",
      "oven-proof dish"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "basil (5g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "brown onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "chestnut mushrooms (160g)",
        "category": "produce",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "chestnut mushrooms (250g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "dried bay leaf (1pcs)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "dried oregano (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "finely chopped tomatoes (200g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "gnocchi (250g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "grated Italian hard cheese (30g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "green lentils (185g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "spinach (80g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "vegetable stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Preheat the oven to 220°C/ 200°C (fan)/ gas 7. Boil a full kettle. Peel and finely chop your brown onion[s]. Grate your chestnut mushrooms.",
      "Heat a large, wide-based pan (preferably non-stick), with a drizzle of olive oil over a medium-high heat. Once hot, add the chopped onion and your bay leaf[ves] and cook for 4-5 min or until the onion is starting to soften. Once softened, add the grated mushrooms and cook for 3 min or until tender.",
      "Meanwhile, dissolve your vegetable stock mix in 150ml [200ml] [250ml] boiled water. Drain and rinse your green lentils.",
      "Once the mushrooms have softened, add your dried oregano, chopped tomatoes, green lentils and vegetable stock to the pan. Bring to the boil over a high heat and cook for 4-5 min or until the stock has thickened to a ragù-like consistency – this is your mushroom & lentil ragù.",
      "Whilst the ragù is thickening, add your gnocchi to a pot of boiled water and bring to the boil over a high heat. Cook the gnocchi for 3 min or until it begins to rise to the top of the pot. Once done, drain the cooked gnocchi. Chop your basil finely, including the stalks.",
      "Once the ragù has thickened, wash then add your spinach and chopped basil to the pan. Cook for 2-3 min further, stirring continuously until the spinach has wilted. Add the cooked gnocchi, season with a generous pinch of salt and pepper and give everything a good mix up. Remove the bay leaf[ves] and discard – this is your hearty mushroom, basil & lentil gnocchi ragù.",
      "Transfer the hearty mushroom, basil & lentil gnocchi ragù to an oven-proof dish. Sprinkle over your grated Italian hard cheese. Put the dish in the oven for 10-15 min or until bubbling and golden – this is your hearty mushroom, basil & lentil gnocchi ragù bake.",
      "Once done, remove the dish from the oven and leave to stand for 5 min before serving (this helps the flavours to develop and makes it easier to serve!). Serve the hearty mushroom, basil & lentil ragù gnocchi bake. Enjoy!"
    ]
  },
  {
    "id": "R-3704",
    "title": "Chicken With Creamy Tomato Sauce And Harissa Mash",
    "source": "Gousto",
    "cuisine": "British",
    "tags": [
      "Gluten-free",
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": true,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 25,
      "max": 30
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 359,
      "fatG": 10,
      "satFatG": 5,
      "carbsG": 33,
      "sugarG": 13,
      "fibreG": 6,
      "proteinG": 36,
      "saltG": 1
    },
    "allergens": [
      "A7: milk"
    ],
    "staples": [
      "pepper",
      "salt",
      "butter",
      "milk",
      "vegetable oil",
      "water"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British chicken breast portion (1pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "British chicken breast portions (2pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "carrot (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "cherry tomatoes (125g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "chicken stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "harissa paste (20g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "soft cheese (50g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "spinach (80g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "white potato (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      }
    ],
    "steps": [
      "Before you start cooking, take your chicken out of the fridge, open the packet and let it air. Boil a kettle. Chop your potato[es] and carrot[s] (no need to peel!) into rough bite-sized pieces.",
      "Add the chopped potato and carrot to a pot of boiled water, bring to the boil over a high heat and cook for 10-12 min or until fork-tender. Once done, drain and return to the pot to steam dry.",
      "Heat a large, wide-based pan (preferably non-stick with a matching lid) with a drizzle of vegetable oil over a medium-high heat. Once hot, add your chicken breast portion[s] and cook for 3 min on each side or until golden.",
      "Reboil half a kettle. Chop your cherry tomatoes in half. Dissolve your chicken stock mix in 150ml [200ml] [250ml] boiled water, then add your soft cheese and mix well – this is your creamy chicken stock.",
      "Peel and finely slice (don't chop!) your garlic. Once the chicken is golden, add the halved cherry tomatoes and the sliced garlic to the pan and cook for 1-2 min or until starting to soften. Add the creamy chicken stock to the pan, reduce the heat to medium-low, and cook, covered, for 10-12 min or until the chicken is cooked through (no pink meat!).",
      "While the chicken is cooking, return the drained potato & carrot to a low heat with a knob of butter, a splash of milk, your harissa paste (can't handle the heat? Go easy!) and a very generous pinch of salt and pepper. Mash until smooth – this is your harissa mash. Tip: Don't worry if your carrot doesn't get completely smooth, it will add some texture to your mash!",
      "Once the chicken is cooked, wash your spinach, then add it to the pan and cook for 3-4 min or until it has wilted slightly – this is your creamy tomato sauce.",
      "Serve the cooked chicken with the harissa mash and drizzle over the creamy tomato sauce. Enjoy!"
    ]
  },
  {
    "id": "R-3940",
    "title": "Sticky Sweet Chilli Pork With Rice",
    "source": "Gousto",
    "cuisine": "Chinese",
    "tags": [
      "Dairy-free",
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": true,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 20,
      "max": 25
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 572,
      "fatG": 20,
      "satFatG": 7,
      "carbsG": 60,
      "sugarG": 11,
      "fibreG": 5,
      "proteinG": 33,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten",
      "A6: soya"
    ],
    "staples": [
      "pepper",
      "salt",
      "sugar",
      "vegetable oil",
      "water"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British pork mince (125g)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "British pork mince (250g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "Chinese rice wine (15ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "coriander (5g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "fine green beans (80g)",
        "category": "produce",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "fine green beans (160g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "fresh root ginger (15g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "pepper (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "lime (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "red chilli relish (25g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "soy sauce (15ml)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "soy sauce (30ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "spring onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "white basmati rice (130g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "white basmati rice (65g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      }
    ],
    "steps": [
      "Add your basmati rice and 300ml [390ml] [600ml] cold water to a pot with a lid and bring to the boil over a high heat. Once boiling, reduce the heat to low and cook, covered, for 10-12 min or until all the water has absorbed and the rice is cooked. Once cooked, remove from the heat and keep covered until serving.",
      "While the rice is cooking, heat a large, wide-based pan (preferably non-stick) with a drizzle of vegetable oil over a high heat. Once hot, add your pork mince (remove the paper if required!) with a pinch of salt and pepper and cook for 3-4 min or until starting to brown, breaking it up with a wooden spoon as you go. Tip: Add a drizzle of vegetable oil if the pan is looking a little dry.",
      "Meanwhile, trim, then chop your green beans into small pieces. Deseed your pepper[s] (scrape the seeds and pith out with a teaspoon) and dice.",
      "Add the chopped green beans and diced pepper to the pork mince and cook for 4-5 min further. Trim, then slice your spring onion[s].",
      "Peel and finely chop (or grate) your garlic. Peel (scrape the skin off with a teaspoon) and finely chop (or grate) your ginger. Combine the chopped garlic, chopped ginger, Chinese rice wine, soy sauce, a splash of cold water, your chilli relish and a generous pinch of sugar in a bowl – this is your sweet chilli sauce.",
      "Add the sweet chilli sauce, most of the sliced spring onion (save the rest for garnish!) and the juice of half your lime[s] to the pan and cook for 1-2 min or until sticky and the pork is cooked through (no pink meat!) – this is your sticky sweet chilli pork. Cut the remaining lime into 1 wedge per person.",
      "Chop your coriander finely, including the stalks.",
      "Serve the sticky sweet chilli pork with the basmati rice to the side. Garnish with the chopped coriander, remaining sliced spring onion and a lime wedge. Enjoy!"
    ]
  },
  {
    "id": "R-4079",
    "title": "Goats' Cheese & Caramelised Onion Beef Burger",
    "source": "Gousto",
    "cuisine": "American",
    "tags": [
      "1 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 30,
      "max": 35
    },
    "fiveADay": 1,
    "nutritionPerServing": {
      "calories": 731,
      "fatG": 31,
      "satFatG": 15,
      "carbsG": 73,
      "sugarG": 6,
      "fibreG": 7,
      "proteinG": 41,
      "saltG": 1
    },
    "allergens": [
      "A1: gluten",
      "A7: milk",
      "A12: sulphites"
    ],
    "staples": [
      "butter",
      "olive oil",
      "pepper",
      "salt",
      "sugar",
      "vegetable oil"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British beef mince (125g)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "British beef mince (250g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "balsamic vinegar (15ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "brown onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "ciabatta (1pcs)",
        "category": "bakery",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "rocket (50g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "rosemary (5g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "soft goats' cheese (75g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "white potato (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "3",
          "3": "5",
          "4": "6"
        }
      }
    ],
    "steps": [
      "Preheat the oven to 220°C/ 200°C (fan)/ gas 7. Cut your potatoes (skins on) into fries and add them to a baking tray (or two!) with a drizzle of vegetable oil. Strip your rosemary leaves from their stems then chop them as finely as possible, discard the stems.",
      "Sprinkle the chopped rosemary over the fries with a pinch of salt and a grind of black pepper and mix it all together. Put the tray[s] in the oven for 20-25 min or until crisp, golden and cooked through – these are your rosemary fries.",
      "While the fries are cooking, peel and chop your brown onion[s] into wedges. Finely dice 1/4 of your onion wedges. Finely slice the remaining onion wedges.",
      "Heat a large, wide-based pan (preferably non-stick with a matching lid) with a drizzle of olive oil over a medium heat. Once hot, add the sliced onion (save the diced onion for later!) with half of your balsamic vinegar (save the rest for later!), a pinch of salt and a generous pinch of sugar. Reduce the heat to very low and cook the onion until ready to serve, or until it has softened and caramelised.",
      "While the onion is cooking, combine your beef mince with the diced onion and a generous pinch of salt and pepper in a bowl. Massage the meat with clean hands for 1 min (this helps them to hold their shape whilst cooking). Divide the mince and shape into 1 patty per person.",
      "Once the chips have been in for 15-20 min, heat a large, dry, wide-based pan (preferably non-stick with a matching lid) over a high heat. Once hot, add the beef patty[ies] and press down firmly with a spatula and cook for 5 min. Tip: Cooking for 5? You may need to do this in batches! Meanwhile, slice your ciabatta[s] in half and put them in the oven for 2-3 min or until warmed through.",
      "Once browned, flip the beef patty[ies] and crumble your goats' cheese over them. Cover and reduce the heat to medium-high then cook for 5 min further until cooked through and charred (no pink meat!) – this is your cheesy patty[ies]. Wash your rocket, then pat it dry with kitchen paper.",
      "To build your burger, spread a little butter on your warmed ciabatta base, then top with a cheesy patty, some caramelised onion, a handful of rocket and finally the warmed ciabatta lid. Serve the rosemary fries and remaining rocket to the side. Dress the rocket with the remaining balsamic vinegar and a splash of olive oil. Enjoy!"
    ]
  },
  {
    "id": "R-4141",
    "title": "Spanish-Style King Prawn & Charred Pepper Salad",
    "source": "Gousto",
    "cuisine": "Spanish",
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": true,
      "dairyFree": true,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 30,
      "max": 40
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 317,
      "fatG": 11,
      "satFatG": 1,
      "carbsG": 39,
      "sugarG": 8,
      "fibreG": 8,
      "proteinG": 17,
      "saltG": 0.9
    },
    "allergens": [
      "A2: crustacean",
      "A3: egg",
      "A10: mustard",
      "A12: sulphites"
    ],
    "staples": [
      "olive oil",
      "pepper",
      "salt",
      "vegetable oil"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "cayenne pepper",
        "category": "herbs & spices",
        "amounts": {
          "2": "0.5tsp",
          "3": "0.5tsp",
          "4": "0.5tsp"
        }
      },
      {
        "name": "dried oregano",
        "category": "herbs & spices",
        "amounts": {
          "2": "1tsp",
          "3": "1tsp",
          "4": "2 x 1tsp"
        }
      },
      {
        "name": "garlic clove",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "green pepper",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "ground smoked paprika",
        "category": "herbs & spices",
        "amounts": {
          "2": "2tsp",
          "3": "2tsp",
          "4": "2 x 2tsp"
        }
      },
      {
        "name": "mayonnaise (new recipe)",
        "category": "pantry",
        "amounts": {
          "2": "25ml",
          "3": "2 x 25ml",
          "4": "2 x 25ml"
        }
      },
      {
        "name": "raw peeled king prawns",
        "category": "meat & fish",
        "amounts": {
          "2": "171g",
          "3": "85g & 171g",
          "4": "2 x 171g"
        }
      },
      {
        "name": "red onion",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "red wine vinegar",
        "category": "pantry",
        "amounts": {
          "2": "15ml",
          "3": "15ml",
          "4": "30ml"
        }
      },
      {
        "name": "rocket",
        "category": "produce",
        "amounts": {
          "2": "50g",
          "3": "1½ x 50g",
          "4": "2 x 50g"
        }
      },
      {
        "name": "tomato",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "white potato",
        "category": "produce",
        "amounts": {
          "2": "3",
          "3": "5",
          "4": "6"
        }
      }
    ],
    "steps": [
      "Preheat the oven to 220°C/ 200°C (fan)/ gas 7. Chop your potatoes (skins on) into small bite-sized pieces. Add the chopped potatoes to a baking tray (or two!) with a drizzle of vegetable oil and a pinch of salt and pepper. Sprinkle your dried oregano all over, give everything a good mix up and put the tray[s] in the oven for an initial 10 min.",
      "Meanwhile, peel and finely chop (or grate) your garlic. Combine your mayo with your red wine vinegar and your cayenne pepper (can't handle the heat? Go easy!) in a small bowl. Add the chopped garlic (not a fan of raw garlic? Just add a little!) with a pinch of salt to the bowl and stir it all together – this is your spicy aioli.",
      "Peel and chop your red onion[s] into wedges. Chop your tomato[es] into wedges. Once the potatoes have had an initial 10 min, add the onion wedges and tomato wedges to the baking tray[s] with the potatoes and return to the oven for a final 15-20 min or until the potatoes are golden and crisp – these are your crispy potatoes and roasted onion & tomato.",
      "Deseed your pepper[s] (scrape the seeds and pith out with a teaspoon) and chop into rough, bite-sized pieces. Heat a large, wide-based pan (preferably non-stick) with a drizzle of olive oil over a high heat. Once hot, add the chopped pepper and cook for 4-5 min, turning occasionally, until starting to char and soften – this is your charred pepper.",
      "Meanwhile, drain your king prawns. Add your ground smoked paprika to a plate with a generous pinch of salt and pepper. Mix everything together, then add the drained king prawns to the plate and turn them several times until they're fully coated – these are your paprika king prawns.",
      "Once the pepper has started to char, add the paprika king prawns and cook for a further 4-5 min or until cooked through.",
      "Wash your salad, then pat dry with kitchen paper.",
      "Add your salad to a the plate and top with the crispy potatoes, roasted onion & tomato, paprika king prawns and charred pepper – this is your Spanish-style king prawn & charred pepper salad. Drizzle the spicy aioli all over. Enjoy!"
    ]
  },
  {
    "id": "R-4164",
    "title": "Creamy Harissa, Charred Pepper & King Prawn Spaghetti",
    "source": "Gousto",
    "cuisine": "Mediterranean",
    "tags": [
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 15,
      "max": 20
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 503,
      "fatG": 12,
      "satFatG": 6,
      "carbsG": 70,
      "sugarG": 11,
      "fibreG": 10,
      "proteinG": 26,
      "saltG": 1
    },
    "allergens": [
      "A1: gluten",
      "A2: crustacean",
      "A7: milk"
    ],
    "staples": [
      "olive oil",
      "pepper",
      "salt"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "coriander (5g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "crème fraîche (80g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "ground sumac (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "harissa paste (20g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "raw peeled king prawns (171g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "raw peeled king prawns (85g)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "red pepper (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "wholewheat spaghetti (190g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "tomato (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      }
    ],
    "steps": [
      "Boil a kettle. Deseed your pepper[s] (scrape the seeds and pith out with a teaspoon) and cut into strips.",
      "Heat a large, wide-based pan (preferably non-stick) with a drizzle of olive oil over a medium-high heat. Once hot, add the pepper strips to the pan along with a pinch of salt and cook for 7-8 min or until lightly charred.",
      "While the pepper strips are cooking, add your wholewheat spaghetti to a pot of boiled water with a pinch of salt and bring to the boil over a high heat. Cook the wholewheat spaghetti for 8-10 min or until cooked with a slight bite. Once cooked, drain the wholewheat spaghetti and reserve a cup of the starchy pasta water.",
      "Meanwhile, chop your tomato[es] roughly. Peel and slice (don't chop!) your garlic. Chop your coriander finely, including the stalks.",
      "Drain your king prawns. Once the peppers are charred, add the drained king prawns along with a generous pinch of salt and cook for 2 min.",
      "Add the sliced garlic, chopped tomato and a small splash of water and cook for 3-4 min or until the tomato is starting to soften and the prawns are cooked through.",
      "Once the tomato is soft, add your harissa paste (can't handle the heat? Go easy!) crème fraîche, drained spaghetti, most of the chopped coriander, half your ground sumac (you'll use the rest later!) and a splash of starchy pasta water. Season with a generous pinch of salt and give everything a good mix up – this is your creamy harissa, charred pepper & king prawn spaghetti. Tip: If it's looking a little dry add a splash more of the starchy pasta water.",
      "Serve the creamy harissa, charred pepper & king prawn spaghetti. Top with the remaining ground sumac, remaining chopped coriander and a generous grind of pepper. Enjoy!"
    ]
  },
  {
    "id": "R-4201",
    "title": "Curried Chicken & Bombay-Style Potato Tray Bake",
    "source": "Gousto",
    "cuisine": "Indian",
    "tags": [
      "Gluten-free",
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": true,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 35,
      "max": 40
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 393,
      "fatG": 5,
      "satFatG": 2,
      "carbsG": 45,
      "sugarG": 13,
      "fibreG": 9,
      "proteinG": 40,
      "saltG": 2
    },
    "allergens": [
      "A7: milk",
      "A10: mustard"
    ],
    "staples": [
      "pepper",
      "salt",
      "vegetable oil",
      "butter",
      "water",
      "tin foil"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British chicken breast portion (1pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "British chicken breast portions (2pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "black mustard seeds (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "brown onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "chicken stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "chicken stock mix (11g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "curry powder (0.5tbsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "curry powder (1tbsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "fresh root ginger (15g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "garam masala (1tbsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "ground turmeric (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "natural yoghurt (80g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "shredded spring greens (120g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "tomato paste (16g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "tomato paste (32g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "white potato (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "3",
          "3": "5",
          "4": "6"
        }
      }
    ],
    "steps": [
      "Preheat the oven to 220°C/ 200°C (fan)/ gas 7. Before you start cooking, take your chicken out of the fridge, open the packet and let it air. Chop your potatoes (skins on) into bite-sized pieces. Peel and chop half your brown onion[s] into wedges, then finely slice the remaining onion.",
      "Add the chopped potatoes and onion wedges to one side of the baking tray with a drizzle of vegetable oil and a pinch of salt and pepper. Sprinkle over your ground turmeric, black mustard seeds and half of your curry powder and give everything a good mix up – these are your Bombay-style potatoes. Put the tray in the oven for an initial 10-12 min.",
      "While the potatoes are cooking, peel and finely chop (or grate) your garlic. Peel (scrape the skin off with a teaspoon) and finely chop (or grate) your ginger. Add half your garam masala (save the rest for later!) to a plate with a pinch of salt and pepper and give everything a good mix up. Add your chicken breast portion[s] to the plate and turn several times until fully coated.",
      "After the Bombay-style potatoes have had an initial 10-12 min add the coated chicken to the other side of the tray with a drizzle of vegetable oil. Tip: Cooking for 3 or more? Use 2 trays! Return the tray[s] to the oven for a further 18-20 min, or until the potatoes are crispy and the chicken is cooked through (no pink meat!) – this is your curried chicken & Bombay-style potato tray bake.",
      "Meanwhile, wash your shredded spring greens then pat it dry with kitchen paper. Line a separate baking tray with a large piece of tin foil (or two!), then add the shredded spring greens to the middle of the foil with a pinch of salt, a knob of butter and 2 tbsp [3 tbsp] [4 tbsp] water. Scrunch the edges of the foil to form a sealed parcel[s] and put the tray in the oven for 10-12 min or until the greens are tender.",
      "Boil a kettle. Heat a large, wide-based pan (preferably non-stick) with a drizzle of vegetable oil over a medium-high heat. Once hot, add the sliced onion to the pan with a pinch of salt and cook for 2-3 min or until the onion has started to soften. Dissolve your chicken stock mix and tomato paste in 200ml [260ml] [350ml] boiled water.",
      "Once the onion has softened, add the chopped garlic, chopped ginger, remaining curry powder and remaining garam masala to the pan and cook for 1 min or until fragrant. Once fragrant, add the tomato stock and cook for 2-3 min or until the sauce has thickened. Once thickened, remove the pan from the heat and stir through half of your natural yoghurt – this is your masala sauce.",
      "Serve the curried chicken & Bombay-style potato tray bake and with the spring greens to the side. Spoon the masala sauce over the chicken and drizzle over the remaining natural yoghurt. Enjoy!"
    ]
  },
  {
    "id": "R-4981",
    "title": "Scandi-Style Salmon & Dill Chowder",
    "source": "Gousto",
    "cuisine": "Scandinavian",
    "tags": [
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 30,
      "max": 35
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 480,
      "fatG": 17,
      "satFatG": 7,
      "carbsG": 61,
      "sugarG": 10,
      "fibreG": 10,
      "proteinG": 24,
      "saltG": 3
    },
    "allergens": [
      "A1: gluten",
      "A4: fish",
      "A7: milk",
      "A10: mustard",
      "A12: sulphites"
    ],
    "staples": [
      "butter",
      "flour",
      "milk",
      "olive oil",
      "pepper",
      "salt",
      "water"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "Dijon mustard (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "capers (20g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "ciabatta (1pcs)",
        "category": "bakery",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "dill (5g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "leek (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "salmon flakes (100g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "shallot (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "soured cream (80g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "spinach (120g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "vegetable stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "vegetable stock mix (11g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "white potato (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "3",
          "3": "5",
          "4": "6"
        }
      }
    ],
    "steps": [
      "Preheat the oven to 200°C/ 180°C (fan)/ gas 6. Boil half a kettle. Chop your leek[s] in half lengthways, wash thoroughly to remove any grit then top, tail and slice finely. Peel and finely slice your shallot[s].",
      "Heat a large, wide-based pan (preferably non-stick with a matching lid) with a small knob of butter and a drizzle of olive oil over a medium heat. Once the butter has melted, add the sliced leek and sliced shallot with a pinch of salt and a generous grind of black pepper and cook for 5-6 min or until softened.",
      "Meanwhile, dissolve your vegetable stock mix and Dijon mustard in 300ml [450ml] [600ml] boiled water and 200ml [300ml] [400ml] milk – this is your creamy veg stock. Chop your potatoes (skins on) into small bite-sized pieces. Peel and finely chop (or grate) your garlic.",
      "Once the leek and shallot have softened, add the chopped garlic and 1 tsp [1 1/2 tsp] [2 tsp] flour to the pan and cook for 30 secs or until fragrant. Once fragrant, add the chopped potatoes and creamy veg stock and bring to the boil over a high heat. Once boiling, reduce to heat to medium-low and cook, covered, for 18-20 min or until the potatoes are fork-tender.",
      "While the potatoes are cooking, reboil a kettle. Tear your ciabatta[s] into bite-sized pieces and add to a baking tray with a drizzle of olive oil. Put the tray in the oven for 5-6 min or until crisp and golden – these are your ciabatta croutons.",
      "Wash, then add your spinach to a colander and pour boiled water all over it so that it starts to wilt. Rinse the wilted spinach under cold running water until it's cool. Once cool, squeeze as much water out of the spinach as you can, then chop it roughly. Chop your dill finely, including the stalks.",
      "Once the potatoes are fork-tender, add your salmon flakes, capers, most of the chopped dill (save some for garnish!) and chopped spinach to the pan. Add half your soured cream (you'll use the rest later!) and give everything a good mix up – this is your Scandi-style salmon & dill chowder.",
      "Serve the Scandi-style salmon & dill chowder and top with the ciabatta croutons. Dollop over the remaining soured cream and garnish with the remaining chopped dill. Season with a grind of black pepper. Enjoy!"
    ]
  },
  {
    "id": "R-4988",
    "title": "Smashed Patty Burger With Cheesy Fries",
    "source": "Gousto",
    "cuisine": "American",
    "tags": [
      "1 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 35,
      "max": 40
    },
    "fiveADay": 1,
    "nutritionPerServing": {
      "calories": 840,
      "fatG": 36,
      "satFatG": 16,
      "carbsG": 89,
      "sugarG": 16,
      "fibreG": 8,
      "proteinG": 41,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten",
      "A7: milk",
      "A10: mustard"
    ],
    "staples": [
      "butter",
      "milk",
      "pepper",
      "salt",
      "sugar",
      "vegetable oil",
      "baking paper",
      "rolling pin"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British beef mince (125g)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "British beef mince (250g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "Henderson’s Relish (15ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "brioche style buns (2pcs)",
        "category": "bakery",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "brown onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "cheddar cheese (40g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "cornflour (1tsp)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "cornflour (1tbsp)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "crispy onions (15g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "gem lettuce (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "ground smoked paprika (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "mustard ketchup (20g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "tomato ketchup (30ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "tomato ketchup (10ml)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "white potato (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "3",
          "3": "5",
          "4": "6"
        }
      }
    ],
    "steps": [
      "Preheat the oven to 220°C/ 200°C (fan)/ gas 7. Cut your potatoes (skins on) into fries. Add the fries to a baking paper-lined baking tray (or two!) with a drizzle of vegetable oil and a pinch of salt and pepper. Give everything a good mix up and put the tray[s] in the oven for 20-25 min or until golden and crisp.",
      "Peel and finely slice your brown onion[s]. Heat a large, wide-based pan (preferably non-stick) with a drizzle of vegetable oil and a small knob of butter over a medium heat. Once hot, add the sliced onion with a pinch of salt and 1 tsp [1 1/2 tsp] [2 tsp] sugar. Cook for 8-10 min or until the onion has softened and caramelised – this is your caramelised onion.",
      "While the onion is cooking, wash your gem lettuce and pat it dry with kitchen paper, remove 1 outer leaf per person and set aside, then cut the inner core into wedges. Grate your cheddar cheese and combine with your cornflour and a pinch of salt in a pot and mix until the cheese is fully coated. Add your mustard ketchup and 100ml [150ml] [200ml] milk to the pot and set aside for later – this is your cheese sauce base.",
      "Combine your beef mince and ground smoked paprika in a bowl with your Henderson’s Relish and a pinch of salt. Mix until combined, then equally divide into 2 pieces per person and shape into meatballs. Cover the meatballs with a sheet of baking paper and roll them out to approx. 0.5cm thickness with a rolling pin until evenly flattened – these are your patties.",
      "Once the onion is caramelised, transfer it to a plate (reserve the pan!) and set aside until serving. Return the reserved pan to a high heat with a drizzle of vegetable oil. Once hot, add the patties, press them down very firmly with a spatula and cook for 2-3 min on each side, pressing down continuously, or until slightly charred and cooked through (no pink meat!) – these are your smashed patties.",
      "Slice your brioche bun[s] in half. Remove the tray[s] with the fries from the oven and add the brioche halves (cut side up!) on top of the fries. Return the tray[s] to the oven for 4-5 min or until warmed through.",
      "Once the smashed patties are cooked through, set aside to rest until serving. Heat the pot with the cheese sauce base over a medium heat. Cook for 1-2 min, stirring frequently, or until the cheese has melted and thickened – this is your cheese sauce.",
      "To build, top the warmed brioche base with your tomato ketchup, an outer lettuce leaf, 2 smashed patties, a dollop of cheese sauce, the caramelised onion and a warmed brioche lid – this is your smashed patty burger. Serve the gem wedges and fries to the side, drizzle over the remaining cheese sauce and top with the crispy onions. Enjoy!"
    ]
  },
  {
    "id": "R-5021",
    "title": "Spanish-Style Bean Shakshuka With Herby Potatoes & Garlic Aioli (V)",
    "source": "Gousto",
    "cuisine": "Spanish",
    "tags": [
      "Gluten-free",
      "3 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": true,
      "dairyFree": false,
      "vegetarian": true,
      "vegan": false
    },
    "timeMinutes": {
      "min": 20,
      "max": 25
    },
    "fiveADay": 3,
    "nutritionPerServing": {
      "calories": 580,
      "fatG": 28,
      "satFatG": 5,
      "carbsG": 64,
      "sugarG": 15,
      "fibreG": 13,
      "proteinG": 22,
      "saltG": 2
    },
    "allergens": [
      "A3: egg"
    ],
    "staples": [
      "butter",
      "pepper",
      "salt",
      "sugar",
      "vegetable oil",
      "water",
      "cling film",
      "microwave"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British free range egg (1pcs)",
        "category": "dairy",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "butter beans (400g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "butter beans (185g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "dried chilli flakes (0.5tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "finely chopped tomatoes (200g)",
        "category": "pantry",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "ground coriander (2tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "ground smoked paprika (2tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "mayonnaise (50ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "mayonnaise (30ml)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "parsley (5g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "sweet pointed pepper (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "vegetable stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "vegetable stock mix (11g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "waxy potatoes (350g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Boil half a kettle. Peel and finely chop (or grate) your garlic. Chop your parsley roughly, including the stalks. Deseed your sweet pointed pepper[s] (scrape the seeds and pith out with a teaspoon) and slice into rings. Drain and rinse your butter beans.",
      "Heat a large, wide-based pan (preferably non-stick with a matching lid) over a high heat with a drizzle of vegetable oil. Once hot, add the sliced pepper to the pan with a pinch of salt and pepper and cook for 4-5 min or until beginning to soften.",
      "Meanwhile, chop your waxy potatoes in half. Add the halved waxy potatoes to a heatproof bowl, then cover the bowl with cling film and pierce a few holes in the top with a fork. Put the bowl in the microwave for 6-8 min or until the potatoes are fork-tender.",
      "Once softened, add half the chopped garlic to the pan with the drained butter beans, ground smoked paprika, ground coriander and chilli flakes (can't handle the heat? Go easy!) and cook for 1 min or until fragrant. Once fragrant, add your chopped tomatoes with your vegetable stock mix, 100ml [125ml] [150ml] boiled water and a pinch of sugar and bring to the boil, then reduce the heat to medium and cook for 5-6 min or until the vegetables are tender and the stock has thickened to a stew-like consistency.",
      "Combine the remaining chopped garlic (not a big garlic fan? Try using less!) with your mayo in a bowl. Season with a pinch of pepper and stir it all together – this is your garlic aioli.",
      "Once thickened, make 1 well per person in the pan, then crack your egg[s] into the well[s] and cook, covered, for 2-3 min or until the egg is done to your liking – this is your Spanish-style bean shakshuka.",
      "Heat a separate large, wide-based pan (preferably non-stick with a matching lid) over a high heat with a drizzle of vegetable oil and a knob of butter. Once hot, add the cooked potatoes to the pan cut side down and cook for 2-3 min or until golden. Once golden, add half the chopped parsley (you'll use the rest later) and season with a pinch of salt and pepper and give everything a good mix up – these are your herby potatoes.",
      "Serve the Spanish-style bean shakshuka with the herby potatoes to the side. Garnish with the remaining chopped parsley and drizzle over the garlic aioli. Enjoy!"
    ]
  },
  {
    "id": "R-5089",
    "title": "Crispy Pork & Corn Birria-Inspired Ramen",
    "source": "Gousto",
    "cuisine": "Mexican",
    "tags": [
      "1 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 10,
      "max": 20
    },
    "fiveADay": 1,
    "nutritionPerServing": {
      "calories": 698,
      "fatG": 29,
      "satFatG": 12,
      "carbsG": 70,
      "sugarG": 11,
      "fibreG": 4,
      "proteinG": 40,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten",
      "A3: egg",
      "A7: milk"
    ],
    "staples": [
      "salt",
      "sugar",
      "vegetable oil",
      "water"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British pork mince (125g)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "British pork mince (250g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "beef stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "beef stock mix (11g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "canned sweetcorn (150g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "cheddar cheese (40g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "chipotle paste (20g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "fine egg noodle nest (1pcs)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "fine egg noodle nests (2pcs)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "ground coriander (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "ground smoked paprika (2tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "roasted garlic paste (15g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "spring onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "tomato paste (16g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "tomato paste (32g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Before you begin... Get all your ingredients and equipment ready. Skim through these steps, then wash your fruit and veg. Note: Equipment and pan sizes vary. Make sure you cook food thoroughly (even if it takes you a little longer than 10 min).",
      "Now, let's get started! Boil a kettle. Heat a large, wide-based pan (preferably non-stick) with a drizzle of vegetable oil over a high heat. Once hot, add your pork mince (remove the paper if required) and cook for 3-4 min or until beginning to brown, breaking it up into very small pieces with a wooden spoon as you go.",
      "While the pork is cooking, trim, then slice your spring onion[s]. Grate your cheddar cheese finely. Drain your sweetcorn.",
      "Once the pork is beginning to brown, add half your ground smoked paprika (you'll use the rest later!) with 1 tsp [1 1/2 tsp] [2 tsp] sugar and a pinch of salt to the pan. Cook for 4-5 min further or until cooked through (no pink meat!) and crispy – this is your crispy pork.",
      "Meanwhile, heat a large, wide-based pot with a drizzle of vegetable oil over a medium heat. Add your tomato paste with your ground coriander and remaining ground smoked paprika and cook for 1 min or until fragrant.",
      "Once fragrant, add your chipotle paste (can't handle the heat? Go easy!), roasted garlic paste and beef stock mix and give everything a good mix up.",
      "Add 700ml [1.1L] [1.3L] boiled water with your fine egg noodles and drained sweetcorn. Bring to the boil over a high heat and cook for 1-2 min or until the noodles are tender – this is your corn birria-inspired ramen.",
      "Serve the corn birria-inspired ramen topped with the crispy pork, grated cheddar and sliced spring onion – this is your crispy pork & corn birria-inspired ramen. Enjoy!"
    ]
  },
  {
    "id": "R-5106",
    "title": "Smoked Basa With Leek & Potato Hash And Poached Egg",
    "source": "Gousto",
    "cuisine": "British",
    "tags": [
      "Gluten-free",
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": true,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 30,
      "max": 35
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 378,
      "fatG": 8,
      "satFatG": 3,
      "carbsG": 46,
      "sugarG": 8,
      "fibreG": 9,
      "proteinG": 33,
      "saltG": 2
    },
    "allergens": [
      "A3: egg",
      "A4: fish"
    ],
    "staples": [
      "butter",
      "olive oil",
      "pepper",
      "salt",
      "tin foil"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British free range egg (1pcs)",
        "category": "other",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "dill (5g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "leek (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "smoked basa fillet (1pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "smoked basa fillets (2pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "spinach (80g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "spring onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "white potato (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "4",
          "3": "6",
          "4": "8"
        }
      }
    ],
    "steps": [
      "Preheat the oven to 220°C/ 200°C (fan)/ gas 7 and boil a kettle. Chop your potatoes (skins on) into bite-sized pieces. Add the chopped potatoes to a pot with plenty of boiled water and bring to the boil over a high heat. Once boiling, reduce the heat to medium and cook for 12- 15 min or until fork-tender, then drain and reserve the pot.",
      "Chop your leek[s] in half lengthways, wash thoroughly to remove any grit then top, tail and slice finely. Peel and finely chop (or grate) your garlic. Chop your dill finely, including the stalks. Trim, then slice your spring onion[s] finely.",
      "Cut a large piece of tin foil and place it on a baking tray. Tip: Cooking for 3 or more? Use 2 trays! Place your basa fillet[s] in the centre of the foil. Top each basa fillet with a small knob of butter and a pinch of salt and pepper.",
      "Scrunch the edges of the foil together around the fish to form a tightly sealed parcel[s]. Put the tray[s] in the oven for 12- 15 min or until the fish is cooked through (keep the basa in the foil parcels until ready to serve!) – this is your baked basa. Tip: Your fish is cooked once it turns opaque and flakes easily.",
      "Heat a large, wide-based pan (preferably non-stick with a matching lid) with a generous drizzle of olive oil and a knob of butter over a medium-high heat. Once the butter has melted, add the cooked potatoes, sliced leek and a generous pinch of salt. Cook for 8-10 min or until the leek has softened and the potatoes are starting to brown, crushing them lightly as they cook. Reboil the kettle.",
      "Wash your spinach and pat it dry with kitchen paper. Add the spinach, chopped garlic, half the sliced spring onion and half the chopped dill (save the rest for garnish!) to the pan. Stir it all together and cook for 2-3 min or until the spinach has wilted, then remove from the heat and keep covered until serving – this is your leek & potato hash.",
      "Bring the reserved pot with plenty of boiled water to the boil over a high heat. Crack your egg[s] gently into the water and leave for 3 min. Once done, gently transfer the egg[s] with a slotted spoon to kitchen paper or a clean tea-towel – this is your poached egg[s].",
      "Serve the leek & potato hash topped with the smoked basa and poached egg. Drizzle any buttery sauce from the fish parcel[s] over the potatoes. Sprinkle the remaining dill and sliced spring onion all over and season with a pinch of salt and pepper. Enjoy!"
    ]
  },
  {
    "id": "R-5319",
    "title": "Lamb Meatball Biryani With Minty Mayo And Pickled Onion",
    "source": "Gousto",
    "cuisine": "Indian",
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "1 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": true,
      "dairyFree": true,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 30,
      "max": 35
    },
    "fiveADay": 1,
    "nutritionPerServing": {
      "calories": 661,
      "fatG": 31,
      "satFatG": 10,
      "carbsG": 59,
      "sugarG": 10,
      "fibreG": 3,
      "proteinG": 33,
      "saltG": 2
    },
    "allergens": [
      "A3: egg"
    ],
    "staples": [
      "pepper",
      "salt",
      "sugar",
      "vegetable oil",
      "water"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British lamb mince (250g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "British lamb mince (125g)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "chicken stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "chicken stock mix (11g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "curry powder (0.5tbsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "curry powder (1tbsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "ground turmeric (0.5tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "mayonnaise (30ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "mint sauce (20g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "red onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "spinach (80g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "white basmati rice (130g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "white basmati rice (65g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "white wine vinegar (15ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Boil a kettle, then peel and finely chop (or grate) your garlic. Add your lamb mince to a large bowl with half your mint sauce, half the chopped garlic (you'll use the rest the later!) and a very generous pinch of salt and pepper. Mix thoroughly until fully combined, divide and roll into 3 meatballs per person (clean hands is the best way!).",
      "Heat a large, wide-based pan (preferably non-stick with a matching lid) with a drizzle of vegetable oil over a medium-high heat. Once hot, add the lamb meatballs and cook for an initial 5-6 min or until starting to brown all over. Once brown, transfer the meatballs to a plate and reserve the pan.",
      "Meanwhile, peel and finely dice half your red onion[s]. Slice the remaining red onion. Dissolve your chicken stock mix in 300ml [390ml] [510ml] boiled water.",
      "Return the reserved pan to a medium heat. Add the diced onion and a pinch of salt and cook for 1-2 min or until starting to soften. Once the onion is soft, add your curry powder, ground turmeric and remaining chopped garlic to the pan and cook for 30 secs or until fragrant.",
      "Once fragrant, add your chicken stock and basmati rice to the pan and give everything a good mix up. Add the browned meatballs, then bring to the boil over a high heat. Once boiling, reduce the heat to very low and cook, covered, for 10-12 min or until the lamb is cooked through (no pink meat!) and the water has absorbed – this is your biryani.",
      "While the biryani is cooking, add the sliced onion to a bowl with your white wine vinegar, 1 tsp [1 1/2 tsp] [2 tsp] sugar and a pinch of salt then give everything a good mix up – this is your quick-pickled onion. Combine your mayo and remaining mint sauce in a bowl with 1 tsp [1 1/2 tsp] [2 tsp] cold water – this is your minty mayo.",
      "Wash your spinach then add it to a colander and pour boiled water all over it so that it starts to wilt. Rinse the wilted spinach under cold running water until it's cool. Once cool, squeeze as much water out of the spinach as you can and roughly chop. Once the lamb is cooked through, add the chopped spinach to the biryani and give everything a good mix up – this is your lamb meatball biryani.",
      "Top the lamb meatball biryani with the quick-pickled onion. Drizzle over the minty mayo. Enjoy!"
    ]
  },
  {
    "id": "R-5369",
    "title": "Korean-Style Chicken Thigh Tacos With Sesame Slaw",
    "source": "Gousto",
    "cuisine": "Asian",
    "tags": [
      "Dairy-free",
      "1 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": true,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 25,
      "max": 30
    },
    "fiveADay": 1,
    "nutritionPerServing": {
      "calories": 708,
      "fatG": 30,
      "satFatG": 7,
      "carbsG": 74,
      "sugarG": 17,
      "fibreG": 6,
      "proteinG": 38,
      "saltG": 3
    },
    "allergens": [
      "A1: gluten",
      "A3: egg",
      "A6: soya",
      "A11: sesame"
    ],
    "staples": [
      "pepper",
      "salt",
      "sugar",
      "vegetable oil",
      "water",
      "microwave"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British diced chicken thigh (250g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "carrot (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "vegetable stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "gochujang paste (30g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "ground paprika (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "mayonnaise (30ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "plain tortillas (6pcs)",
        "category": "bakery",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "rice vinegar (15ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "shredded red cabbage (150g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "spring onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "toasted sesame oil (10ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "toasted sesame seeds (5g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Take your chicken out of the fridge, open the packet and let it air. Trim, then slice your spring onion[s] finely, keeping the whites and greens separate. Top, tail, peel and grate your carrot[s].",
      "Heat a large, wide-based pan (preferably non-stick) with a drizzle of vegetable oil over a high heat. Once hot, add your diced chicken thigh and cook for 4-5 min or until lightly browned all over. Tip: Unevenly sized diced chicken thigh? Chop any larger ones into bite-sized pieces!",
      "Dissolve your gochujang paste (can't handle the heat? Go easy!) and vegetable stock mix in 50ml [75ml] [100ml] warm water. Add 1 tsp [1 1/2 tsp] [2 tsp] sugar, your ground paprika, half your rice vinegar (you'll use the rest later!) and a pinch of salt. Give everything a good mix up – this is your gochujang stock.",
      "Once the chicken is lightly browned, reduce the heat to medium-high and add the gochujang stock. Stir it all together and cook, stirring occasionally, for 6-8 min or until the sauce has thickened and the chicken is cooked through (no pink meat!) – this is your Korean-style glazed chicken.",
      "While the chicken is cooking, combine your shredded red cabbage, grated carrot and spring onion whites in a large bowl – this is your slaw mix.",
      "Add your mayo, remaining rice vinegar, toasted sesame oil and a generous pinch of pepper to the slaw mix. Mix until fully combined – this is your sesame slaw.",
      "When the chicken is nearly cooked, add your tortillas to a plate and pop in the microwave for 20 secs on high or until warmed through.",
      "Load up the warmed tortillas with the sesame slaw and Korean-style glazed chicken. Drizzle over any remaining glaze and top with the sliced spring onion greens and toasted sesame seeds. Enjoy!"
    ]
  },
  {
    "id": "R-5451",
    "title": "Creamy Pea & Spinach Gnocchi With Pine Nuts (V)",
    "source": "Gousto",
    "cuisine": "Italian",
    "tags": [
      "Plant-based",
      "Dairy-free",
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": true,
      "vegetarian": true,
      "vegan": true
    },
    "timeMinutes": {
      "min": 10,
      "max": 20
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 592,
      "fatG": 23,
      "satFatG": 3,
      "carbsG": 76,
      "sugarG": 11,
      "fibreG": 9,
      "proteinG": 19,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten"
    ],
    "staples": [
      "pepper",
      "salt",
      "olive oil",
      "food processor"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "blanched peas (160g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "creamy single oat (250ml)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "gnocchi (350g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "lemon (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "mint (5g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "pine nuts (15g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "roasted garlic paste (15g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "rocket (20g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "spinach (80g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "vegetable stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Before you begin... Get all your ingredients and equipment ready. Skim through these steps, then wash your fruit and veg. Note: Equipment and pan sizes vary. Make sure you cook food thoroughly (even if it takes you a little longer than 10 min).",
      "Now, let’s get started! Heat a large, wide-based pan (preferably non-stick) with a generous drizzle of olive oil over a high heat. Once hot, add your gnocchi with a pinch of salt and cook for an initial 5-6 min or until beginning to crisp. Tip: Don’t stir too often as this will prevent the gnocchi from crisping!",
      "Meanwhile, strip your mint leaves from the stems, discard the stems. Add half your blanched peas and half your pine nuts (you’ll use the rest later!) to a food processor with your creamy single oat and mint leaves. Blitz until smooth – this is your creamy pea & mint sauce.",
      "Cut your lemon[s] in half.",
      "Once the gnocchi is beginning to crisp, add your roasted garlic paste to the pan with a pinch of salt and cook for 1 min further or until fragrant.",
      "Once fragrant, add the creamy pea & mint sauce to the pan with your vegetable stock mix and give everything a good mix up.",
      "Wash your spinach and add it to the pan with the remaining blanched peas and the juice of half the lemon[s]. Season with a grind of black pepper and cook for a final 2-3 min or until the sauce has slightly thickened – this is your creamy pea & spinach gnocchi. Cut the remaining lemon into 1 wedge per person. Wash your rocket and pat dry with kitchen paper.",
      "Serve the creamy pea & spinach gnocchi with the rocket to the side. Sprinkle over the remaining pine nuts and garnish with a lemon wedge. Drizzle over a little olive oil. Enjoy!"
    ]
  },
  {
    "id": "R-5508",
    "title": "One-Pan Keralan-Style Basa Curry",
    "source": "Gousto",
    "cuisine": "Indian",
    "tags": [
      "Dairy-free",
      "1 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": true,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 10,
      "max": 20
    },
    "fiveADay": 1,
    "nutritionPerServing": {
      "calories": 578,
      "fatG": 21,
      "satFatG": 11,
      "carbsG": 70,
      "sugarG": 7,
      "fibreG": 7,
      "proteinG": 27,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten",
      "A4: fish",
      "A10: mustard"
    ],
    "staples": [
      "vegetable oil",
      "salt",
      "water",
      "microwave"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "basa fillet (1pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "basa fillets (2pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "black mustard seeds (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "cooked white long grain rice (280g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "crispy onions (15g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "curry powder (0.5tbsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "fine green beans (80g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "ginger & garlic paste (15g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "ground turmeric (0.5tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "solid creamed coconut (25g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "tomato (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "vegetable stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "vegetable stock mix (11g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Before you begin... Get all your ingredients and equipment ready. Skim through these steps, then wash your fruit and veg. Note: Equipment and pan sizes vary. Make sure you cook food thoroughly (even if it takes you a little longer than 10 min).",
      "Now, let's get started! Boil half a kettle. Chop your tomato[es] into wedges. Trim, then chop your green beans in half.",
      "Heat a large, wide-based pan (preferably non-stick with a matching lid) with a generous drizzle of vegetable oil over a medium heat. Once hot, add the tomato wedges and cook for 2-3 min or until beginning to soften. Chop your creamed coconut roughly (if required!). Combine the chopped creamed coconut with 250ml [350ml] [450ml] boiled water – this is your coconut stock.",
      "Once the tomatoes are beginning to soften, add your ginger & garlic paste, curry powder, ground turmeric, black mustard seeds and a generous pinch of salt and cook for 30 secs or until fragrant. Once fragrant, add the coconut stock and give everything a good mix up.",
      "Chop your basa fillet[s] into large, bite-sized pieces. Add the chopped basa and halved green beans to the pan and bring to the boil over a high heat. Once boiling, reduce the heat to medium and cook, covered, for 4-5 min further or until the fish is cooked through. Tip: Your fish is cooked once it turns opaque and flakes easily.",
      "While the fish is cooking, squeeze your pouch[es] of white long grain rice to separate the grains. Tear the top corner of the pouch[es] (just a little!) and microwave for 2 min or until piping hot. Tip: If you're cooking two or more pouches, pop them in together but increase the microwave cook time accordingly.",
      "Once the basa is cooked and the green beans are tender, add the cooked rice, vegetable stock mix and a pinch of salt to the pan. Gently stir everything together – this is your one-pot Keralan-style basa curry.",
      "Serve the one-pan Keralan-style basa curry and garnish with your crispy onions. Enjoy!"
    ]
  },
  {
    "id": "R-5573",
    "title": "One-Pot Chilli & Miso Pork Udon Noodles",
    "source": "Gousto",
    "cuisine": "Japanese",
    "tags": [
      "Dairy-free",
      "1 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": true,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 35,
      "max": 40
    },
    "fiveADay": 1,
    "nutritionPerServing": {
      "calories": 618,
      "fatG": 23,
      "satFatG": 8,
      "carbsG": 69,
      "sugarG": 9,
      "fibreG": 3,
      "proteinG": 33,
      "saltG": 4
    },
    "allergens": [
      "A1: gluten",
      "A6: soya"
    ],
    "staples": [
      "flour",
      "salt",
      "sugar",
      "vegetable oil",
      "water",
      "hob-safe oven-proof casserole dish"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British pork mince (125g)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "British pork mince (250g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "brown onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "carrot (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "crispy onions (15g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "dried chilli flakes (0.5tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "ginger & garlic paste (15g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "soy sauce (15ml)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "soy sauce (30ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "spring onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "sriracha hot chilli sauce (8ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "udon noodles (200g)",
        "category": "pantry",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "white miso paste (17g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Before you begin... This recipe takes around 5-10 min to prep, so get your casserole dish and all your ingredients ready, then wash your fruit and veg. Note: Make sure your dish is oven-proof and safe to use on the hob. Don't have one? Start cooking in a large, wide-based pan then transfer to an oven-proof dish and cover tightly with foil.",
      "Now, let's get started! Preheat the oven to 200°C/ 180°C (fan)/ gas 6. Boil a kettle. Heat a large, wide-based, hob-safe oven-proof casserole dish with a matching lid with a drizzle of vegetable oil over a high heat.",
      "Once hot, add your pork mince (remove the paper if required!) to the dish with a pinch of salt. Give everything a stir for 2-3 min, breaking the pork mince up into rough, large pieces with a wooden spoon as you go.",
      "Top, tail, peel and slice your carrot[s] into discs. Peel and chop your brown onion[s] into wedges.",
      "Add the carrot discs and onion wedges to the dish with 1 tsp [1 1/2 tsp] [2 tsp] flour, 1 tsp [1 1/2 tsp] [2 tsp] sugar, chilli flakes, sriracha (can't handle the heat? Go easy!), soy sauce, miso paste and ginger & garlic paste. Give everything a good mix up then add 400ml [520ml] [680ml] boiled water. Bring to the boil, then cover with a lid and put the dish in the oven for an initial 20 min.",
      "Use this time to clear up, set the table, have a cup of tea or simply chill!",
      "After the initial 20 min, remove the dish from the oven and add your udon noodles. Tip: Gently separate the noodles with a fork! Cover with a lid and return the dish to the oven for 5-7 min further or until the noodles are tender and the pork is cooked through (no pink meat!) – this is your one-pot chilli & miso pork udon noodles. Trim, then slice your spring onion[s].",
      "To serve, top the one-pot chilli & miso pork udon noodles with the sliced spring onion and crispy onions. Dig in!"
    ]
  },
  {
    "id": "R-5621",
    "title": "Smoked Basa With Creamy Cannellini Beans & Crusty Ciabatta",
    "source": "Gousto",
    "cuisine": "French",
    "tags": [
      "1 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 10,
      "max": 20
    },
    "fiveADay": 1,
    "nutritionPerServing": {
      "calories": 372,
      "fatG": 10,
      "satFatG": 5,
      "carbsG": 36,
      "sugarG": 4,
      "fibreG": 10,
      "proteinG": 30,
      "saltG": 3
    },
    "allergens": [
      "A1: gluten",
      "A4: fish",
      "A7: milk",
      "A10: mustard",
      "A12: sulphites"
    ],
    "staples": [
      "butter",
      "flour",
      "olive oil",
      "pepper",
      "salt",
      "water",
      "toaster"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "Dijon mustard (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "cannellini beans (185g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "cannellini beans (390g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "ciabatta (1pcs)",
        "category": "bakery",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "fine green beans (80g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "shallot (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "smoked basa fillet (1pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "smoked basa fillets (2pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "soft cheese (50g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "vegetable stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Before you begin... Get all your ingredients and equipment ready. Skim through these steps, then wash your fruit and veg. Note: Equipment and pan sizes vary. Make sure you cook food thoroughly (even if it takes you a little longer than 10 min).",
      "Now let's get started! Boil a kettle. Peel, then slice your shallot[s] roughly. Trim, then chop your green beans into bite-sized pieces. Dissolve your vegetable stock mix, Dijon mustard and soft cheese in 200ml [260ml] [350ml] boiled water – this is your creamy Dijon stock.",
      "Heat a large, wide-based pan (preferably non-stick with a matching lid) with a drizzle of olive oil over a medium heat. Once hot, add the sliced shallot to the pan with a pinch of salt and cook for 1-2 min or until slightly softened.",
      "Meanwhile, drain and rinse your cannellini beans. Once the shallot has slightly softened, add the drained cannellini beans and chopped green beans to the pan and cook for 2-3 min or until the beans have begun to soften.",
      "While the beans are softening, chop your smoked basa fillet[s] into bite-sized pieces.",
      "Once the beans are slightly softened, add 1 tsp [1 1/2 tsp] [2 tsp] flour to the pan and cook for 30 secs. Add the creamy Dijon stock to the pan and top with the chopped smoked basa and a crack of black pepper. Cook, covered, for 5 min or until your fish is cooked through – this is your smoked basa with creamy cannellini beans. Tip: Your fish is cooked once it turns opaque and flakes easily.",
      "While the fish is cooking, slice your ciabatta[s] in half and place in the toaster for 1-2 min or until toasted.",
      "Spread a little butter over the toasted ciabatta and cut into triangles. Serve the smoked basa with creamy cannellini beans with the crusty ciabatta to the side. Drizzle over a little olive oil and season with a grind of black pepper. Enjoy!"
    ]
  },
  {
    "id": "R-5660",
    "title": "Loaded Patatas Rancheros With Greek Cheese (V)",
    "source": "Gousto",
    "cuisine": "Mexican",
    "tags": [
      "Gluten-free",
      "3 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": true,
      "dairyFree": false,
      "vegetarian": true,
      "vegan": false
    },
    "timeMinutes": {
      "min": 35,
      "max": 40
    },
    "fiveADay": 3,
    "nutritionPerServing": {
      "calories": 553,
      "fatG": 24,
      "satFatG": 10,
      "carbsG": 62,
      "sugarG": 16,
      "fibreG": 12,
      "proteinG": 21,
      "saltG": 2
    },
    "allergens": [
      "A3: egg",
      "A7: milk"
    ],
    "staples": [
      "salt",
      "sugar",
      "vegetable oil",
      "water"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "Greek salad cheese (100g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "black beans (185g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "black beans (390g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "brown onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "canned sweetcorn (150g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "chipotle paste (20g)",
        "category": "pantry",
        "amounts": {
          "2": "2",
          "3": "2",
          "4": "4"
        }
      },
      {
        "name": "chives (5g)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "2",
          "4": "4"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "green chilli (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "ground smoked paprika (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "lime (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "mayonnaise (30ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "tomato paste (16g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "tomato paste (32g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "vegetable stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "waxy potatoes (350g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Preheat the oven to 220°C/ 200°C (fan)/ gas 7 and boil a kettle. Chop your waxy potatoes in half, lengthways. Add the halved potatoes and ground smoked paprika to a baking tray with a drizzle of vegetable oil and a pinch of salt and give everything a good mix up. Put the tray in the oven for an initial 20 min or until the potatoes are golden.",
      "While the potatoes are cooking, peel and finely dice your brown onion[s]. Heat a large, wide-based pan (preferably non-stick) with a drizzle of vegetable oil over a medium heat. Once hot, add the diced onion and cook for 3-5 min or until starting to soften.",
      "While the onion is softening, drain and rinse your black beans and sweetcorn. Dissolve your vegetable stock mix in 400ml [520ml] [750ml] boiled water. Once the onion has started to soften, increase the heat to medium-high and add your tomato paste and chipotle paste (can't handle the heat? Go easy!) to the pan and cook for 1-2 min or until fragrant.",
      "Once fragrant, add the drained black beans & sweetcorn with the vegetable stock and cook for 10-15 min or until it's reduced to a stew-like consistency. Once done, crush some of the beans with a masher and give everything a good mix up until fully combined – this is your rancheros-style chilli.",
      "While the chilli is cooking, cut your lime[s] in half. Slice your green chilli[es] finely. Add the sliced chilli to a bowl with the juice of half your lime and a pinch of sugar and set aside to pickle – this is your quick-pickled chilli. Cut the remaining lime into wedges.",
      "After an initial 20 min, remove the potatoes from the oven and crush with the base of a mug to flatten them. Tip: Just crush them gently, or they'll turn to mash! Add a drizzle of vegetable oil and and give everything a good mix up. Put the tray back in the oven and cook for a further 5-8 min or until the potatoes are crisp and golden – these are your crispy potatoes.",
      "While the potatoes are cooking, peel and finely chop (or grate) your garlic. Combine your mayo and chopped garlic (not a big garlic fan? Try using less!) with 1 tsp [1 1/2 tsp] [2 tsp] cold water – this is your garlic mayo. Crumble your Greek cheese into rough bite-sized pieces. Chop your chives finely.",
      "Serve the rancheros-style chilli over the crispy potatoes. Drizzle over the garlic mayo, then sprinkle over the crumbled Greek cheese, chopped chives and quick-pickled chilli (not a fan of spice? Just add a little!) – this is your loaded patatas rancheros. Garnish with a lime wedge. Enjoy!"
    ]
  },
  {
    "id": "R-5725",
    "title": "3 Cheese Veg-Packed Pasta Bake (V)",
    "source": "Gousto",
    "cuisine": "Italian",
    "tags": [
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": true,
      "vegan": false
    },
    "timeMinutes": {
      "min": 25,
      "max": 30
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 603,
      "fatG": 23,
      "satFatG": 15,
      "carbsG": 73,
      "sugarG": 13,
      "fibreG": 6,
      "proteinG": 31,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten",
      "A7: milk",
      "A12: sulphites"
    ],
    "staples": [
      "olive oil",
      "pepper",
      "salt",
      "sugar",
      "water",
      "oven-proof dish"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "Italian hard cheese (20g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "balsamic vinegar (15ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "cheddar cheese (40g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "cherry tomatoes (125g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "courgette (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "dried basil (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "finely chopped tomatoes (200g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "mozzarella (125g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "parsley (10g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "tomato paste (16g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "tortiglioni (150g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "vegetable stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "vegetable stock mix (11g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Preheat the oven to 240°C/ 220°C (fan)/ gas 9. Boil a kettle. Peel and finely chop (or grate) your garlic.",
      "Add your tortiglioni to a pot of boiled water with a pinch of salt, bring to the boil over a high heat and cook for 8-10 min or until cooked with a slight bite. Once cooked, drain the tortiglioni. Reboil half a kettle.",
      "While the pasta is cooking, top, tail and chop your courgette[s] into quarters lengthways, then slice finely. Heat a large, wide-based pan (preferably non-stick) with a drizzle of olive oil over a medium-high heat. Once hot, add the sliced courgette with a pinch of salt and cook for 4 min or until beginning to soften.",
      "Meanwhile, dissolve your vegetable stock mix, dried basil, balsamic vinegar, tomato paste and 1 tsp [1 1/2tsp] [2 tsp] sugar in 100ml [130ml] [150ml] boiled water – this is your stock. Chop your cherry tomatoes roughly.",
      "Once the courgette is beginning to soften, add the chopped garlic to the pan and cook for 30 secs. Add the stock with the chopped cherry tomatoes and your finely chopped tomatoes and bring to the boil over a high heat. Season with a generous grind of black pepper and cook for 3-4 min further.",
      "Grate your cheddar cheese. Grate your Italian hard cheese. Drain your mozzarella, then pat and squeeze as much liquid out as you can with kitchen paper. Tear the drained mozzarella into rough, bite-sized pieces. Chop your parsley finely, including the stalks.",
      "Add the drained tortiglioni to the sauce with the chopped parsley (save some for garnish!) and mix it up. Add half the pasta mixture to an oven-proof dish, then top with the grated cheddar cheese. Top with the remaining pasta mixture, torn mozzarella and grated Italian hard cheese and put the dish in the oven for 5-10 min or until all the cheese has melted – this is your 3 cheese veg-packed pasta bake.",
      "Serve the 3 cheese veg-packed pasta bake topped with the reserved chopped parsley and a grind of black pepper and enjoy! Loved this recipe? Us too! That's why it's one of our Everyday Favourites, available every week."
    ]
  },
  {
    "id": "R-5889",
    "title": "One-Pot Plant-Based Tortiglioni Puttanesca (V)",
    "source": "Gousto",
    "cuisine": "Italian",
    "tags": [
      "Plant-based",
      "Dairy-free",
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": true,
      "vegetarian": true,
      "vegan": true
    },
    "timeMinutes": {
      "min": 25,
      "max": 30
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 455,
      "fatG": 6,
      "satFatG": 1,
      "carbsG": 90,
      "sugarG": 12,
      "fibreG": 8,
      "proteinG": 16,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten"
    ],
    "staples": [
      "olive oil",
      "pepper",
      "salt",
      "sugar",
      "water"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "brown onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "capers (20g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "dried basil (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "dried chilli flakes (0.5tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "finely chopped tomatoes (200g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "parsley (5g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "black olives (40g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "spinach (80g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "tomato paste (16g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "tomato paste (32g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "tortiglioni (200g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "vegetable stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "vegetable stock mix (11g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Boil a kettle. Peel and finely slice your brown onion[s]. Peel and finely slice (don’t chop!) your garlic. Chop your black olives roughly. Chop your capers roughly.",
      "Heat a large pot with a matching lid with a drizzle of olive oil over a medium heat. Once hot, add the sliced onion with a pinch of salt and cook for 3-4 min or until beginning to soften.",
      "Meanwhile, dissolve your tomato paste and vegetable stock mix in 375ml [500ml] [700ml] boiled water – this is your tomato stock.",
      "Once the onion has softened, add the sliced garlic and dried basil to the pot with your chilli flakes (can’t handle the heat? Go easy!), chopped olives and capers. Cook for a further 1 min or until fragrant.",
      "Once fragrant, add the tomato stock and your chopped tomatoes to the pot with your tortiglioni and bring to the boil over a high heat. Once boiling, reduce the heat to medium and cook, covered, for 12-15 min, stirring occasionally, until the pasta is cooked through and the sauce has thickened.",
      "Whilst the tortiglioni is cooking, chop your parsley finely, including the stalks. Wash your spinach and pat dry with kitchen paper.",
      "Once the tortiglioni is cooked, stir through the spinach with a generous grind of black pepper, a pinch of sugar and a splash of boiled water. Cook for a further 1 min or until the spinach has wilted – this is your one-pot plant-based tortiglioni puttanesca.",
      "Serve the one-pot plant-based tortiglioni puttanesca in a bowl. Season with a grind of black pepper and garnish with the chopped parsley. Enjoy!"
    ]
  },
  {
    "id": "R-5920",
    "title": "Chicken Katsu Salad With Curried Coconut Croutons",
    "source": "Gousto",
    "cuisine": "Japanese",
    "tags": [
      "Dairy-free",
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": true,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 30,
      "max": 35
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 461,
      "fatG": 13,
      "satFatG": 9,
      "carbsG": 46,
      "sugarG": 15,
      "fibreG": 7,
      "proteinG": 39,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten",
      "A6: soya"
    ],
    "staples": [
      "salt",
      "sugar",
      "vegetable oil",
      "pepper",
      "water",
      "baking paper",
      "cling film",
      "rolling pin"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British chicken breast portion (1pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "British chicken breast portions (2pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "carrot & cabbage slaw mix (160g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "ciabatta (1pcs)",
        "category": "bakery",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "curry powder (0.5tbsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "gem lettuce (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "ginger & garlic paste (15g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "ground turmeric (0.5tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "mango chutney (20g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "panko breadcrumbs (30g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "red chilli (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "rice vinegar (15ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "solid creamed coconut (25g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "soy sauce (8ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Preheat the oven to 220°C/ 200°C (fan)/ gas 7, then take your chicken out of the fridge, open the packet and let it air. Wash your gem lettuce, then pat it dry with kitchen paper and roughly shred, then slice your red chilli[es] finely, then combine the sliced red chilli (can’t handle the heat? Go easy!) with 1 tsp [1 1/2 tsp] [2 tsp] sugar and half your rice vinegar (save the rest for later!) and give everything a good mix up – this is your quick-pickled chilli.",
      "Boil half a kettle. Chop your creamed coconut roughly (if required!). Tear your ciabatta[s] into bite-sized pieces. Add the chopped creamed coconut to a bowl with half your curry powder (save the rest for later!), a pinch of salt and 100ml [150ml] [200ml] boiled water and stir to combine – this is your marinade.",
      "Press the torn ciabatta into the marinade until all the sauce soaks into the bread – these are your coconut curried croutons. Add the coconut curried croutons to a baking paper-lined tray. Put the tray in the oven for 15-20 min or until the croutons are crispy around the edges.",
      "Heat a large, wide-based pan (preferably non-stick) with a small drizzle of vegetable oil over a medium-high heat. Once hot, add the remaining curry powder and ginger & garlic paste to the pan and cook for 1-2 min or until fragrant. Once fragrant, transfer it to a bowl and reserve the pan. Add your mango chutney and soy sauce to the bowl with the remaining rice vinegar and mix it all together – this is your katsu dressing.",
      "Add your chicken breast portion[s] to a chopping board and cover with some cling film. Bash the chicken with a rolling pin until evenly flattened – this is your chicken escalope.",
      "Add your panko breadcrumbs and your ground turmeric to a plate and season with a generous pinch of salt and pepper – this is your panko mix. Coat the chicken escalope in a drizzle of vegetable oil, then press into the panko mix firmly to evenly coat all over – this is your coated chicken.",
      "Return the reserved pan to a medium-high heat with a generous drizzle of vegetable oil. Once hot, add the coated chicken and cook for 5-6 min on each side or until golden and cooked through (no pink meat!) – this is your breaded chicken. Tip: Add a drizzle more oil if your pan is looking a little dry! Drain the quick-pickled chilli, add the pickling liquid to the katsu dressing and stir it all together.",
      "On a clean board, slice the breaded chicken finely into strips. Serve your shredded lettuce, carrot & cabbage slaw mix and curried coconut croutons topped with the sliced breaded chicken and quick-pickled chilli (not a fan of spice? Just add a little!). Drizzle the katsu dressing all over. Enjoy!"
    ]
  },
  {
    "id": "R-5967",
    "title": "Baja-Style Basa Burger With Lime Slaw And Smoky Fries",
    "source": "Gousto",
    "cuisine": "Mexican",
    "tags": [
      "Dairy-free",
      "1 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": true,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 30,
      "max": 35
    },
    "fiveADay": 1,
    "nutritionPerServing": {
      "calories": 616,
      "fatG": 17,
      "satFatG": 3,
      "carbsG": 91,
      "sugarG": 10,
      "fibreG": 8,
      "proteinG": 28,
      "saltG": 1
    },
    "allergens": [
      "A1: gluten",
      "A3: egg",
      "A4: fish"
    ],
    "staples": [
      "olive oil",
      "pepper",
      "salt",
      "sugar",
      "vegetable oil",
      "baking paper"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "basa fillet (1pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "basa fillets (2pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "brioche style buns (2pcs)",
        "category": "bakery",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "carrot & cabbage slaw mix (160g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "cornflour (4tbsp)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "dried chilli flakes (0.5tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "dried oregano (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "ground smoked paprika (2tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "lime (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "mayonnaise (30ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "white potato (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "3",
          "3": "5",
          "4": "6"
        }
      }
    ],
    "steps": [
      "Preheat the oven to 220°C/ 200°C (fan)/ gas 7. Cut your potatoes (skins on) into fries. Peel and grate your garlic.",
      "Add the fries to a baking paper-lined baking tray (or two!) with a drizzle of vegetable oil, the grated garlic, dried oregano and half your ground smoked paprika (save the rest for later!). Add a generous pinch of salt and pepper and give everything a good mix up until the fries are well coated. Put the tray[s] in the oven for an initial 20-25 min or until lightly golden.",
      "Meanwhile, zest half your lime[s] (try to grate lightly with a micro-plane or sharp box grater and avoid grating the white pith, as this is very bitter). Combine your mayo with the lime zest, a small squeeze of lime juice (not sure about citrus? Try using less!) and a pinch of pepper in a bowl – this is your lime mayo.",
      "Add your carrot & cabbage slaw mix to a bowl with the remaining lime juice, chilli flakes (can't handle the heat? Go easy!), 1 tsp [1 1/2 tsp] [2 tsp] sugar, a drizzle of olive oil, and a generous pinch of salt and pepper. Give everything a good mix up – this is your chilli-lime slaw.",
      "Add your cornflour to a plate with the remaining ground smoked paprika and a very generous pinch of salt and mix until fully combined. Pat your basa fillet[s] dry with kitchen paper. Place the basa fillet[s] onto the floured plate, pressing firmly to coat evenly on both sides – this is your coated basa.",
      "When the fries are almost ready, heat a large, wide-based pan (preferably non-stick) with a very generous drizzle of vegetable oil (enough to cover the base of the pan) over a medium-high heat. Once hot, add the coated basa and cook for 3-4 min on each side or until cooked through – this is your Baja-style basa fillet. Tip: Your fish is cooked once it turns opaque and flakes easily.",
      "While the fish is cooking, slice your brioche bun[s] in half. Once the fries are lightly golden, remove the tray[s] from the oven, push the fries to one side and add the brioche halves to the other side, cut-side down. Return the tray[s] to the oven for a final 4-5 min or until the brioche is warmed through and the fries are golden and crisp – these are your smoky fries.",
      "Build your burger by topping a warmed brioche base with a Baja-style basa fillet, a drizzle of lime mayo, some of the chilli-lime slaw and a warmed brioche lid – this is your Baja-style basa burger. Serve the smoky fries and remaining chilli-lime slaw to the side. Enjoy!"
    ]
  },
  {
    "id": "R-6110",
    "title": "Spanish-Style Pork Meatballs With Tomato & Cannellini Bean Stew",
    "source": "Gousto",
    "cuisine": "Spanish",
    "tags": [
      "3 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 30,
      "max": 35
    },
    "fiveADay": 3,
    "nutritionPerServing": {
      "calories": 571,
      "fatG": 20,
      "satFatG": 7,
      "carbsG": 59,
      "sugarG": 13,
      "fibreG": 10,
      "proteinG": 37,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten"
    ],
    "staples": [
      "butter",
      "olive oil",
      "pepper",
      "salt",
      "sugar",
      "water",
      "baking paper",
      "toaster"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "British pork mince (125g)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "British pork mince (250g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "cannellini beans (390g)",
        "category": "pantry",
        "amounts": {
          "2": "½",
          "3": "1",
          "4": "1"
        }
      },
      {
        "name": "chicken stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "chicken stock mix (11g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "ciabatta (1pcs)",
        "category": "bakery",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "dried thyme (0.5tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "finely chopped tomatoes (200g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "ground smoked paprika (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "parsley (5g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "red onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "red pepper (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Preheat the oven to 220°C/ 200°C (fan)/ gas 7 and boil half a kettle. Peel and finely dice your red onion[s]. Deseed your pepper[s] (scrape the seeds and pith out with a teaspoon) and finely dice. Peel and finely chop (or grate) your garlic, then chop your parsley finely, including the stalks.",
      "Combine your pork mince (remove the paper if required!) in a bowl with half the chopped garlic, half the chopped parsley (you'll use the rest later!) and a pinch of salt and pepper. Tip: Cooking for kids? Leave out the parsley! Give everything a good mix up until thoroughly combined (clean hands is the best way!). Divide equally and shape them into 3 meatballs per person.",
      "Dissolve your chicken stock mix in 125ml [185ml] [250ml] boiled water. Drain and rinse your cannellini beans.",
      "Add the pork meatballs to a baking tray (use baking paper to avoid mess!) and put the tray in the oven for 15-18 min or until cooked through (no pink meat!).",
      "Whilst the meatballs are cooking, heat a pot with a drizzle of olive oil over a medium-high heat. Once hot, add the diced onion and pepper and cook for 4-5 min or until softened. Once softened, add the remaining chopped garlic with your dried thyme and ground smoked paprika. Cook for 1 min or until fragrant.",
      "Once fragrant, add your chopped tomatoes and chicken stock to the pot with the drained cannellini beans and a pinch of pepper and sugar and bring to the boil over a high heat. Once boiling, reduce the heat to medium and cook for 5-6 min or until thickened – this is your tomato & cannellini bean stew.",
      "Slice your ciabatta[s] in half and place in the toaster for 1-2 min or until warmed through. Spread a little butter over each toasted ciabatta half. Mix the cooked meatballs through the stew – these are your Spanish-style pork meatballs with tomato & cannellini bean stew. Tip: Cooking for kids? Keep the meatballs and stew separate!",
      "Serve the Spanish-style pork meatballs with tomato & cannellini bean stew in a bowl and the buttered ciabatta to the side. Taste for seasoning, adding more salt and pepper if needed. Garnish with the remaining chopped parsley. Tip: Cooking for kids? Leave out the parsley! Enjoy!"
    ]
  },
  {
    "id": "R-6155",
    "title": "Spicy Saag Gosht-Style Beef Meatballs & Rice",
    "source": "Gousto",
    "cuisine": "Indian",
    "tags": [
      "Gluten-free",
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": true,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 25,
      "max": 30
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 659,
      "fatG": 24,
      "satFatG": 10,
      "carbsG": 73,
      "sugarG": 14,
      "fibreG": 4,
      "proteinG": 36,
      "saltG": 2
    },
    "allergens": [
      "A7: milk"
    ],
    "staples": [
      "pepper",
      "salt",
      "sugar",
      "vegetable oil",
      "water",
      "food processor"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "mango chutney (20g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "British beef mince (125g)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "British beef mince (250g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "beef stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "beef stock mix (11g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "coriander (5g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "curry powder (1tbsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "garam masala (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "3",
          "3": "5",
          "4": "6"
        }
      },
      {
        "name": "ginger paste (15g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "green chilli (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "natural yoghurt (80g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "spinach (120g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "tomato paste (32g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "tomato paste (16g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "white long grain rice (130g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "white long grain rice (65g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      }
    ],
    "steps": [
      "Boil a full kettle, then peel and finely chop (or grate) half your garlic (save the rest for later!). Combine the chopped garlic and 1 tsp [1 1/2 tsp] [2 tsp] sugar in a bowl with your garam masala, beef mince and a pinch of salt and pepper. Give everything a good mix up until thoroughly combined (clean hands is the best way!), then divide equally and shape into 6 meatballs per person.",
      "Wash your spinach then add to a colander and pour boiled water all over it so that it starts to wilt. Rinse the wilted spinach under cold running water until it's cool, then once cool, squeeze as much water out of the spinach as you can. Chop your green chilli[es] in half. Crush the remaining garlic open by squashing with the side of a knife and discard the skin.",
      "Add your white long grain rice to a pot with a lid with 225ml [300ml] [450ml] cold water and bring to the boil over a high heat. Once boiling, reduce the heat to very low and cook, covered, for 12-15 min or until all the water has absorbed and the rice is cooked. Once done, remove from the heat and set aside (lid on) to steam until serving.",
      "Heat a large, wide-based pan (preferably non-stick with a matching lid) over a medium-high heat with a little drizzle of vegetable oil. Once hot, add the meatballs to the pan and cook for 2 min on each side or until browned.",
      "Reboil half a kettle. Add the wilted spinach and half the green chilli (not a fan of spice? Just add a little!) to a food processor with the crushed garlic, ginger paste, curry powder and most of the coriander (save some leaves for garnish!). Add a drizzle of vegetable oil and a generous pinch of salt and pepper. Blitz until smooth – this is your saag paste.",
      "Once the meatballs are browned, add the saag paste and tomato paste to the pan. Cook for 1 min or until fragrant.",
      "Once fragrant, add your beef stock mix to the pan with 175ml [230ml] [300ml] boiled water. Reduce the heat to medium and cook, covered, for 12-15 min or until the beef is cooked through (no pink meat!), stirring occasionally – this is your spicy saag gosht-style beef meatballs. Slice the remaining green chilli into rounds.",
      "Serve the spicy saag gosht-style beef meatballs with the cooked rice to the side. Drizzle over your yoghurt and dollop on your mango chutney. Top with the reserved coriander leaves and the chilli rounds (can't handle the heat? Go easy!). Enjoy!"
    ]
  },
  {
    "id": "R-6197",
    "title": "Baked Harissa Gambas Pil Pil With Roast Potatoes",
    "source": "Gousto",
    "cuisine": "Spanish",
    "tags": [
      "Gluten-free",
      "Dairy-free",
      "1 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": true,
      "dairyFree": true,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 35,
      "max": 40
    },
    "fiveADay": 1,
    "nutritionPerServing": {
      "calories": 274,
      "fatG": 2,
      "satFatG": 0.3,
      "carbsG": 48,
      "sugarG": 8,
      "fibreG": 7,
      "proteinG": 18,
      "saltG": 1
    },
    "allergens": [
      "A2: crustacean"
    ],
    "staples": [
      "olive oil",
      "pepper",
      "salt",
      "oven-proof dish"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "brown onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "cherry tomatoes (125g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "dried chilli flakes (0.5tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "ground smoked paprika (1tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "harissa paste (20g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "lemon (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "parsley (5g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "raw peeled king prawns (171g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "raw peeled king prawns (85g)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "rocket (20g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "white potato (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "4",
          "3": "6",
          "4": "8"
        }
      }
    ],
    "steps": [
      "Before you begin... This recipe takes around 5-10 min to prep, so get your oven-proof dish and all your ingredients ready, then wash your fruit and veg.",
      "Now, let's get started! Preheat the oven to 220°C/ 200°C (fan)/ gas 7. Chop your potatoes (skins on) into bite-sized pieces.",
      "Peel and cut your brown onion[s] into wedges. Cut your lemon[s] into wedges. Peel and finely slice (don't chop!) your garlic.",
      "Add the chopped potatoes to a baking tray with a drizzle of olive oil and a pinch of salt and pepper. Give everything a good mix up and put the tray in the oven for 20-25 min or until golden and crisp.",
      "Add the onion wedges, the juice of half your lemon[s], sliced garlic, ground smoked paprika, cherry tomatoes, harissa paste and chilli flakes (can't handle the heat? Go easy!) to an oven-proof dish. Add 3 tbsp [4 1/2 tbsp] [6 tbsp] olive oil and a pinch of salt and pepper. Give everything a good mix up and put the dish in the oven for an initial 15 min.",
      "Use this time to clear up, set the table, have a cup of tea or simply chill!",
      "After an initial 15 min, drain and add your king prawns to the oven-proof dish, give everything a good mix up and return to the oven for 4-5 min or until the prawns are cooked through – this is your harissa gambas pil pil. Wash your rocket then pat dry with kitchen paper.",
      "Serve the harissa gambas pil pil with the roast potatoes and rocket to one side. Garnish with a lemon wedge and chop your parsley roughly over with scissors. Dig in!"
    ]
  },
  {
    "id": "R-6353",
    "title": "Bariis Iskukaris-Style Baked Cod With Green Chilli Mayo",
    "source": "Gousto",
    "cuisine": "African",
    "tags": [
      "1 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 35,
      "max": 40
    },
    "fiveADay": 1,
    "nutritionPerServing": {
      "calories": 594,
      "fatG": 18,
      "satFatG": 4,
      "carbsG": 81,
      "sugarG": 18,
      "fibreG": 5,
      "proteinG": 27,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten",
      "A3: egg",
      "A4: fish"
    ],
    "staples": [
      "sugar",
      "pepper",
      "salt",
      "vegetable oil",
      "butter",
      "water",
      "rolling pin",
      "hob-safe oven-proof casserole dish"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "brown onion (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "cardamom pod (1pcs)",
        "category": "herbs & spices",
        "amounts": {
          "2": "3",
          "3": "3",
          "4": "6"
        }
      },
      {
        "name": "cod fillet (1pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "cod fillets (2pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "crispy onions (15g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "garam masala (1tbsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "green chilli (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "ground turmeric (0.5tsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "mayonnaise (30ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "roasted garlic paste (15g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "sultanas (30g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "tomato (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "vegetable stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "vegetable stock mix (11g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "white long grain rice (130g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "white long grain rice (65g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "white wine vinegar (15ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Before you begin... This recipe takes around 5-10 min to prep, so get your casserole dish and all your ingredients ready, then wash your fruit and veg. Note: Make sure your dish is oven-proof and safe to use on the hob. Don't have one? Start cooking in a large, wide-based pan then transfer to an oven-proof dish and cover tightly with foil.",
      "Now, Let's get started! Preheat the oven to 220°C/ 200°C (fan)/ gas 7 and boil a kettle. Heat a large, wide-based hob-safe oven-proof casserole dish with a matching lid with a drizzle of vegetable oil over a medium-high heat. Peel and chop your brown onion[s] into wedges. Once hot, add the onion wedges to the dish.",
      "Chop your tomato[es] into wedges. Crush your cardamom pods open by squashing them with the side of a knife. Cut your green chilli[es] in half lengthways, deseed (scrape the seeds out with a teaspoon), then gently bash with a rolling pin until the skin has broken down.",
      "Add the tomato wedges and crushed cardamom pods to the dish with most of your garam masala (save the rest for later!), ground turmeric, roasted garlic paste, white long grain rice and the sultanas. Add your vegetable stock mix, half your white wine vinegar (save the rest for later!), a pinch of salt and pepper and 300ml [390ml] [600ml] boiled water and give everything a good mix up, then bring to the boil over a high heat, once boiling, cover with a lid and put the dish in the oven for an initial 20 min.",
      "Meanwhile, add the crushed chilli (can't handle the heat? Go easy!) to a small bowl with the remaining white wine vinegar, mayo and a small pinch of salt and sugar. Mix it all together and set aside – this is your green chilli mayo.",
      "Use this time to clear up, set the table, have a cup of tea or simply chill!",
      "After 20 min, remove the dish from the oven and add your cod fillet[s] with a generous knob of butter and a generous pinch of salt and pepper. Sprinkle over the remaining garam masala. Return the dish to the oven for a further 8-10 min or until the fish is cooked through – this is your bariis iskukaris-style baked cod. Tip: Your fish is cooked once it turns opaque and flakes easily.",
      "Serve the bariis iskukaris-style baked cod and drizzle over the green chilli mayo. Garnish with your crispy onions. Dig in!"
    ]
  },
  {
    "id": "R-7022",
    "title": "One Pan Creamy Sausage, Mushroom & Spinach Orzo",
    "source": "Gousto",
    "cuisine": "Italian",
    "tags": [
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 25,
      "max": 30
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 715,
      "fatG": 39,
      "satFatG": 20,
      "carbsG": 62,
      "sugarG": 6,
      "fibreG": 4,
      "proteinG": 28,
      "saltG": 3
    },
    "allergens": [
      "A1: gluten",
      "A7: milk",
      "A10: mustard",
      "A12: sulphites"
    ],
    "staples": [
      "pepper",
      "salt",
      "water"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "Chinese rice wine (15ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "Dijon mustard (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "Italian hard cheese (20g)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "chestnut mushrooms (160g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "chestnut mushrooms (80g)",
        "category": "produce",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "double cream (80ml)",
        "category": "dairy",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "garlic clove (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "3",
          "3": "4",
          "4": "6"
        }
      },
      {
        "name": "orzo (150g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "orzo (75g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "sausage meat (150g)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "spinach (80g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "vegetable stock mix (5.5g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "vegetable stock mix (11g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      }
    ],
    "steps": [
      "Boil a kettle. Heat a large, wide-based pan (preferably non-stick with a matching lid) over a high heat. Add your sausage meat (remove the paper if required!) to the pan and break it up with a wooden spoon.",
      "Tear your mushrooms into the pan and cook for 5 min or until the sausage meat is beginning to brown.",
      "Peel your garlic. Once the sausage meat is beginning to brown, grate the peeled garlic into the pan.",
      "Add your orzo, stirring to coat the grains and cook for 1-2 min or until fragrant.",
      "Once fragrant, add 500ml [650ml] [1L] boiled water with your vegetable stock mix, Chinese rice wine and Dijon mustard. Add a generous pinch of salt and pepper and bring to the boil.",
      "Once boiling, reduce the heat to medium-low and cook, covered, for 12-15 min or until cooked with a slight bite. Tip: Stir the orzo occasionally to stop it from sticking. Wash your spinach and pat dry with kitchen paper.",
      "Once cooked through, increase the heat to medium high and add your double cream and spinach and cook for 1-2 min or until the spinach has wilted and the sauce has thickened – this is your one pan creamy sausage, mushroom & spinach orzo.",
      "Serve the one pan creamy sausage, mushroom & spinach orzo and grate your Italian hard cheese finely all over top. Season with a generous grind of pepper. Enjoy!"
    ]
  },
  {
    "id": "R-769",
    "title": "Chicken Katsu Curry",
    "source": "Gousto",
    "cuisine": "Japanese",
    "tags": [
      "Dairy-free",
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": false,
      "dairyFree": true,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 35,
      "max": 45
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 620,
      "fatG": 7,
      "satFatG": 2,
      "carbsG": 93,
      "sugarG": 16,
      "fibreG": 5,
      "proteinG": 45,
      "saltG": 2
    },
    "allergens": [
      "A1: gluten",
      "A3: egg",
      "A6: soya"
    ],
    "staples": [
      "flour",
      "olive oil",
      "pepper",
      "salt",
      "vegetable oil",
      "water",
      "cling film",
      "rolling pin"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "mango chutney (20g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "British chicken breast portion (1pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "British chicken breast portions (2pcs)",
        "category": "meat & fish",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "British free range egg (1pcs)",
        "category": "other",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "carrot (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "2",
          "3": "3",
          "4": "4"
        }
      },
      {
        "name": "curry powder (0.5tbsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "curry powder (1tbsp)",
        "category": "herbs & spices",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "fresh root ginger (15g)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "gem lettuce (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "1½",
          "4": "2"
        }
      },
      {
        "name": "panko breadcrumbs (30g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      },
      {
        "name": "panko breadcrumbs (60g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "rice vinegar (15ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "shallot (1pcs)",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "soy sauce (8ml)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "white long grain rice (130g)",
        "category": "pantry",
        "amounts": {
          "2": "1",
          "3": "1",
          "4": "2"
        }
      },
      {
        "name": "white long grain rice (65g)",
        "category": "pantry",
        "amounts": {
          "2": "",
          "3": "1",
          "4": ""
        }
      }
    ],
    "steps": [
      "Before you start cooking, take your chicken out of the fridge, open the packet and let it air. Add your white long grain rice to a pot with a lid with 225ml [300ml] [450ml] cold water and bring to the boil over a high heat. Once boiling, reduce the heat to very low and cook, covered, for 12-15 min or until all the water has absorbed and the rice is cooked. Once done, remove from the heat and set aside (lid on).",
      "Top, tail and peel half of your carrot[s] into a pile of ribbons, then grate the remaining carrot. Peel (scrape the skin off with a teaspoon) and finely chop (or grate) your ginger. Peel and chop your shallot[s].",
      "Crack your egg[s] into a shallow bowl and beat lightly with a fork. Add 2 tbsp [3 tbsp] [4 tbsp] flour to a plate and season with salt and pepper, then add your panko breadcrumbs to another plate. Boil half a kettle. Wash your gem lettuce, pat dry with kitchen paper then shred roughly.",
      "Add your chicken breast portion[s] to a chopping board and slice through the thickest part of the chicken being careful not to cut all the way through to the other side, then open it out like a book. Cover with cling film and bash with a rolling pin until you have an even thickness – this is your butterflied chicken. Coat the butterflied chicken in the flour, tap off the excess, then add to the beaten egg and finally press into the panko breadcrumbs firmly to evenly coat all over.",
      "Heat a large, wide-based pan (preferably non-stick with a matching lid) with 1 tbsp [1 ½ tbsp] [2 tbsp] vegetable oil over a medium heat. Once hot, add the grated carrot, chopped ginger and chopped shallot and cook for 3 min. Add your curry powder and cook for a further 2 min. Add 1 tbsp [1 1/2 tbsp] [2 tbsp] flour and cook for 1 min, stirring to coat the vegetables evenly.",
      "Add 300ml [450ml] [600ml] boiled water and reduce the heat to low. Add your soy sauce and stir through your mango chutney. Cook for 5-7 min or until the sauce has thickened to a curry-like consistency. Season with a generous pinch of salt, cover with a lid and set aside for later – this is your katsu sauce.",
      "Heat a separate, large, wide-based pan (preferably non-stick) with a very generous drizzle of vegetable oil over a medium-high heat. Once hot, add the breaded chicken and cook for 7-8 min on each side, pressing down firmly with a spatula until the outside is golden and the chicken is cooked through (no pink meat!). Combine your rice vinegar with a drizzle of olive oil and a pinch of salt in a large bowl – this is your dressing.",
      "Add the shredded lettuce and carrot ribbons to the bowl with the dressing and give it a good mix up – this is your dressed salad. On a clean board, slice the breaded chicken finely into strips. Spoon the katsu sauce onto the plate and serve the sliced breaded chicken over the sauce with the cooked rice and salad to the side. Enjoy!"
    ]
  },
  {
    "id": "R-7781",
    "title": "Chicken Tikka Loaded Masala Fries",
    "source": "Gousto",
    "cuisine": "Indian",
    "tags": [
      "Gluten-free",
      "2 of your 5-a-day"
    ],
    "dietary": {
      "glutenFree": true,
      "dairyFree": false,
      "vegetarian": false,
      "vegan": false
    },
    "timeMinutes": {
      "min": 30,
      "max": 40
    },
    "fiveADay": 2,
    "nutritionPerServing": {
      "calories": 420,
      "fatG": 5,
      "satFatG": 1,
      "carbsG": 59,
      "sugarG": 18,
      "fibreG": 7,
      "proteinG": 38,
      "saltG": 1
    },
    "allergens": [
      "A7: milk"
    ],
    "staples": [
      "pepper",
      "salt",
      "sugar",
      "vegetable oil",
      "water",
      "baking paper",
      "microwave"
    ],
    "servingsSupported": [
      2,
      3,
      4
    ],
    "image": null,
    "ingredients": [
      {
        "name": "chicken breast strips",
        "category": "meat & fish",
        "amounts": {
          "2": "250g",
          "3": "125g & 250g",
          "4": "2 x 250g"
        }
      },
      {
        "name": "cucumber",
        "category": "produce",
        "amounts": {
          "2": "½",
          "3": "¾",
          "4": "1"
        }
      },
      {
        "name": "curry powder",
        "category": "herbs & spices",
        "amounts": {
          "2": "0.5tbsp",
          "3": "0.5tbsp",
          "4": "2 x 0.5tbsp"
        }
      },
      {
        "name": "garam masala",
        "category": "herbs & spices",
        "amounts": {
          "2": "1tsp",
          "3": "2 x 1tsp",
          "4": "2 x 1tsp"
        }
      },
      {
        "name": "ginger & garlic paste",
        "category": "pantry",
        "amounts": {
          "2": "15g",
          "3": "15g",
          "4": "2 x 15g"
        }
      },
      {
        "name": "mango chutney",
        "category": "pantry",
        "amounts": {
          "2": "20g",
          "3": "1½ x 20g",
          "4": "2 x 20g"
        }
      },
      {
        "name": "natural yoghurt",
        "category": "dairy",
        "amounts": {
          "2": "80g",
          "3": "1½ x 80g",
          "4": "2 x 80g"
        }
      },
      {
        "name": "tamarind paste",
        "category": "pantry",
        "amounts": {
          "2": "15g",
          "3": "15g",
          "4": "2 x 15g"
        }
      },
      {
        "name": "tomato",
        "category": "produce",
        "amounts": {
          "2": "1",
          "3": "2",
          "4": "2"
        }
      },
      {
        "name": "tomato paste",
        "category": "pantry",
        "amounts": {
          "2": "16g",
          "3": "32g",
          "4": "32g"
        }
      },
      {
        "name": "white potato",
        "category": "produce",
        "amounts": {
          "2": "4",
          "3": "6",
          "4": "8"
        }
      }
    ],
    "steps": [
      "Preheat the oven to 220°C/ 200°C (fan)/ gas 7, take your chicken out of the fridge, open the packet and let it air. Cut your potatoes (skins on) into fries then add the fries to a baking paper-lined baking tray (or two!) with a drizzle of vegetable oil, your garam masala and a pinch of salt and pepper. Give everything a good mix up and put the tray[s] in the oven for 20-25 min or until golden and crisp – these are your masala fries.",
      "Add 1 tbsp per person of your natural yoghurt (you'll use the rest later!) to a large bowl with your curry powder, ginger & garlic paste and a generous pinch of salt and pepper. Give everything a good mix up – this is your tikka-style marinade.",
      "Add your chicken breast strips to the tikka-style marinade, give everything a good mix up and set aside for later – this is your marinated chicken.",
      "Dice your cucumber very finely.",
      "Dice your tomato[es] finely.",
      "Add your tomato paste to a small bowl with your tamarind paste, 1/2 tsp [3/4 tsp] [1 tsp] sugar and 1 tbsp [1 1/2 tbsp] [2 tbsp] cold water. Give everything a good mix up and pop in the microwave for 20 secs or until warmed through and slightly thickened – this is your tamarind ketchup.",
      "Heat a large, wide-based pan (preferably non-stick), over a medium-high heat with a very generous drizzle of vegetable oil. Once hot, add the marinated chicken and cook for 6-7 min on each side until lightly charred and cooked through (no pink meat!) – these are your chicken tikka strips. Tip: Cooking for 4 or more? Use 2 pans!",
      "Serve the chicken tikka strips over the masala fries topped with the diced tomato and cucumber. Drizzle with the remaining natural yoghurt, your mango chutney and the tamarind ketchup. Enjoy!"
    ]
  },
  {
    id: "X-001",
    title: "Beef, Bean & Pasta One-Pot",
    source: "Family staple",
    cuisine: "British",
    tags: ["Family staple", "3 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: false, vegetarian: false, vegan: false },
    timeMinutes: { min: 25, max: 30 },
    fiveADay: 3,
    nutritionPerServing: {
      calories: 640, fatG: 22, satFatG: 9, carbsG: 68,
      sugarG: 12, fibreG: 10, proteinG: 42, saltG: 1.6
    },
    allergens: ["gluten (pasta)", "milk (cheddar)"],
    staples: ["olive oil", "salt", "pepper", "water"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "beef mince",                    category: "meat & fish",    amounts: { "2": "250g",   "3": "375g",    "4": "500g" } },
      { name: "brown onion",                   category: "produce",        amounts: { "2": "1",      "3": "1",       "4": "2" } },
      { name: "carrot",                        category: "produce",        amounts: { "2": "1",      "3": "2",       "4": "2" } },
      { name: "garlic clove",                  category: "produce",        amounts: { "2": "2",      "3": "3",       "4": "4" } },
      { name: "cannellini beans (400g tin)",   category: "pantry",         amounts: { "2": "1",      "3": "1",       "4": "2" } },
      { name: "chopped tomatoes (400g tin)",   category: "pantry",         amounts: { "2": "1",      "3": "1",       "4": "2" } },
      { name: "tomato purée",                  category: "pantry",         amounts: { "2": "1 tbsp", "3": "1.5 tbsp", "4": "2 tbsp" } },
      { name: "beef stock cube",               category: "pantry",         amounts: { "2": "1",      "3": "1",       "4": "2" } },
      { name: "dried mixed herbs",             category: "herbs & spices", amounts: { "2": "1 tsp",  "3": "1.5 tsp", "4": "2 tsp" } },
      { name: "smoked paprika",                category: "herbs & spices", amounts: { "2": "1 tsp",  "3": "1.5 tsp", "4": "2 tsp" } },
      { name: "penne pasta",                   category: "pantry",         amounts: { "2": "180g",   "3": "270g",    "4": "360g" } },
      { name: "cheddar cheese",                category: "dairy",          amounts: { "2": "40g",    "3": "60g",     "4": "80g" } }
    ],
    steps: [
      "Peel and finely chop your brown onion[s]. Top, tail, peel and coarsely grate your carrot[s]. Peel and finely chop (or grate) your garlic. Boil a kettle.",
      "Heat a large, wide-based pan (with a matching lid) with a drizzle of olive oil over a high heat. Once hot, add your beef mince and cook for 4-5 min, breaking it up with a wooden spoon, until browned all over.",
      "Reduce the heat to medium and add the chopped onion and grated carrot. Cook for 3-4 min or until softened, then add the chopped garlic, your smoked paprika, dried mixed herbs and tomato purée and cook for 1 min further or until fragrant.",
      "Dissolve your beef stock cube in 500ml [700ml] [900ml] boiled water. Add the stock to the pan with your chopped tomatoes and penne pasta and give everything a good mix up.",
      "Bring to the boil, then reduce the heat to medium-low and cook, covered, for 10-12 min, stirring every few minutes so the pasta doesn't stick, until the pasta is cooked with a slight bite.",
      "Meanwhile, drain and rinse your cannellini beans. Grate your cheddar cheese.",
      "Stir the drained beans through the pan and cook for 2-3 min further or until warmed through and the sauce is clinging to the pasta. Season generously with salt and pepper – this is your beef, bean & pasta one-pot.",
      "Serve the beef, bean & pasta one-pot in bowls topped with the grated cheddar. Enjoy!"
    ]
  },
  {
    id: "X-002",
    title: "Spaghetti Bolognese",
    source: "Family staple",
    cuisine: "Italian",
    tags: ["Family staple", "3 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: false, vegetarian: false, vegan: false },
    timeMinutes: { min: 45, max: 55 },
    fiveADay: 3,
    nutritionPerServing: {
      calories: 620, fatG: 20, satFatG: 8, carbsG: 70,
      sugarG: 13, fibreG: 8, proteinG: 38, saltG: 1.5
    },
    allergens: ["gluten (spaghetti)", "milk (cheese)"],
    staples: ["olive oil", "salt", "pepper", "water"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "beef mince",                  category: "meat & fish",    amounts: { "2": "250g",   "3": "375g",    "4": "500g" } },
      { name: "smoked bacon lardons",        category: "meat & fish",    amounts: { "2": "80g",    "3": "120g",    "4": "160g" } },
      { name: "brown onion",                 category: "produce",        amounts: { "2": "1",      "3": "1",       "4": "2" } },
      { name: "carrot",                      category: "produce",        amounts: { "2": "1",      "3": "2",       "4": "2" } },
      { name: "celery stick",                category: "produce",        amounts: { "2": "1",      "3": "2",       "4": "2" } },
      { name: "garlic clove",                category: "produce",        amounts: { "2": "2",      "3": "3",       "4": "4" } },
      { name: "chopped tomatoes (400g tin)", category: "pantry",         amounts: { "2": "1",      "3": "2",       "4": "2" } },
      { name: "tomato purée",                category: "pantry",         amounts: { "2": "2 tbsp", "3": "3 tbsp",  "4": "4 tbsp" } },
      { name: "beef stock cube",             category: "pantry",         amounts: { "2": "1",      "3": "1",       "4": "2" } },
      { name: "dried oregano",               category: "herbs & spices", amounts: { "2": "1 tsp",  "3": "1.5 tsp", "4": "2 tsp" } },
      { name: "bay leaf",                    category: "herbs & spices", amounts: { "2": "1",      "3": "1",       "4": "2" } },
      { name: "spaghetti",                   category: "pantry",         amounts: { "2": "180g",   "3": "270g",    "4": "360g" } },
      { name: "hard Italian cheese",         category: "dairy",          amounts: { "2": "30g",    "3": "45g",     "4": "60g" } }
    ],
    steps: [
      "Peel and finely chop your brown onion[s]. Top, tail, peel and finely dice your carrot[s]. Finely dice your celery. Peel and finely chop (or grate) your garlic.",
      "Heat a large, wide-based pan with a drizzle of olive oil over a medium heat. Once hot, add the chopped onion, carrot and celery and cook for 6-7 min or until soft and sweet, stirring occasionally.",
      "Increase the heat to high, add your smoked bacon lardons and cook for 2 min, then add your beef mince and cook for 4-5 min, breaking it up with a wooden spoon, until browned all over.",
      "Add the chopped garlic, your dried oregano and tomato purée and cook for 1 min further or until fragrant. Meanwhile, boil a kettle and dissolve your beef stock cube in 200ml [300ml] [400ml] boiled water.",
      "Add your chopped tomatoes, the stock and your bay leaf/leaves to the pan. Bring to the boil, then reduce the heat to low and simmer, uncovered, for 25-30 min, stirring now and then, until rich and thickened. Tip: The longer and slower it bubbles, the better it gets – add a splash of water if it thickens too much.",
      "When the sauce has 10 min to go, add your spaghetti to a pot of boiled water with a large pinch of salt and cook for 8-10 min or until cooked with a slight bite. Once done, drain, reserving a cup of the starchy pasta water.",
      "Remove the bay leaf/leaves. Season the sauce generously with salt and pepper, then add the drained spaghetti with a splash of the reserved pasta water and toss until every strand is coated – this is your spaghetti bolognese.",
      "Serve the spaghetti bolognese in bowls, topped with your hard Italian cheese, grated, and a grind of black pepper. Enjoy!"
    ]
  },
  {
    id: "X-003",
    title: "Creamy Chicken Masala Curry",
    source: "Family staple",
    cuisine: "Indian",
    tags: ["Family staple", "Gluten-free", "1 of your 5-a-day"],
    dietary: { glutenFree: true, dairyFree: false, vegetarian: false, vegan: false },
    timeMinutes: { min: 40, max: 50 },
    fiveADay: 1,
    nutritionPerServing: {
      calories: 650, fatG: 24, satFatG: 12, carbsG: 62,
      sugarG: 12, fibreG: 4, proteinG: 45, saltG: 0.8
    },
    allergens: ["milk (yoghurt, cream)"],
    staples: ["vegetable oil", "salt", "pepper", "sugar", "water"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "chicken breast",       category: "meat & fish",    amounts: { "2": "300g",    "3": "450g",     "4": "600g" } },
      { name: "natural yoghurt",      category: "dairy",          amounts: { "2": "100g",    "3": "150g",     "4": "200g" } },
      { name: "garam masala",         category: "herbs & spices", amounts: { "2": "1 tbsp",  "3": "1.5 tbsp", "4": "2 tbsp" } },
      { name: "ground cumin",         category: "herbs & spices", amounts: { "2": "1 tsp",   "3": "1.5 tsp",  "4": "2 tsp" } },
      { name: "ground paprika",       category: "herbs & spices", amounts: { "2": "1 tsp",   "3": "1.5 tsp",  "4": "2 tsp" } },
      { name: "ground turmeric",      category: "herbs & spices", amounts: { "2": "0.5 tsp", "3": "0.75 tsp", "4": "1 tsp" } },
      { name: "brown onion",          category: "produce",        amounts: { "2": "1",       "3": "2",        "4": "2" } },
      { name: "garlic clove",         category: "produce",        amounts: { "2": "3",       "3": "4",        "4": "6" } },
      { name: "fresh root ginger",    category: "produce",        amounts: { "2": "15g",     "3": "20g",      "4": "30g" } },
      { name: "tomato passata",       category: "pantry",         amounts: { "2": "250g",    "3": "375g",     "4": "500g" } },
      { name: "double cream",         category: "dairy",          amounts: { "2": "75ml",    "3": "100ml",    "4": "150ml" } },
      { name: "white basmati rice",   category: "pantry",         amounts: { "2": "150g",    "3": "225g",     "4": "300g" } },
      { name: "coriander",            category: "produce",        amounts: { "2": "5g",      "3": "10g",      "4": "10g" } }
    ],
    steps: [
      "Cut your chicken breast[s] into bite-sized pieces and add to a bowl with half your yoghurt, half your garam masala and half your ground paprika (you'll use the rest of each later!) and a pinch of salt. Give everything a good mix up and set aside – this is your marinated chicken.",
      "Peel and finely chop your brown onion[s]. Peel and finely chop (or grate) your garlic and ginger.",
      "Add your basmati rice and 300ml [450ml] [600ml] cold water to a pot with a lid and bring to the boil over a high heat. Once boiling, reduce the heat to very low and cook, covered, for 10-12 min or until all the water has absorbed and the rice is cooked. Remove from the heat and keep covered until serving.",
      "Meanwhile, heat a large, wide-based pan with a drizzle of vegetable oil over a high heat. Once hot, add the marinated chicken and cook for 3-4 min on each side until lightly charred (it will finish cooking in the sauce!). Transfer to a plate.",
      "Return the pan to a medium heat with a drizzle more oil. Add the chopped onion and cook for 4-5 min or until softened, then add the chopped garlic and ginger, your ground cumin, ground turmeric and the remaining garam masala and paprika and cook for 1 min or until fragrant.",
      "Add your tomato passata with a pinch of sugar and 100ml [150ml] [200ml] cold water. Bring to a simmer and cook for 5 min, then return the chicken to the pan and cook for 5-6 min further or until the chicken is cooked through (no pink meat!).",
      "Remove from the heat and stir through your double cream and the remaining yoghurt – this is your creamy chicken masala curry. Roughly chop your coriander, including the stalks.",
      "Serve the creamy chicken masala curry with the basmati rice to the side, garnished with the chopped coriander. Enjoy!"
    ]
  },
  {
    id: "X-004",
    title: "Lamb Biryani",
    source: "Family staple",
    cuisine: "Indian",
    tags: ["Family staple", "Gluten-free", "1 of your 5-a-day"],
    dietary: { glutenFree: true, dairyFree: false, vegetarian: false, vegan: false },
    timeMinutes: { min: 55, max: 65 },
    fiveADay: 1,
    nutritionPerServing: {
      calories: 690, fatG: 24, satFatG: 10, carbsG: 75,
      sugarG: 10, fibreG: 4, proteinG: 40, saltG: 0.7
    },
    allergens: ["milk (yoghurt)"],
    staples: ["vegetable oil", "salt", "pepper", "water"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "diced lamb leg",       category: "meat & fish",    amounts: { "2": "300g",    "3": "450g",     "4": "600g" } },
      { name: "natural yoghurt",      category: "dairy",          amounts: { "2": "100g",    "3": "150g",     "4": "200g" } },
      { name: "brown onion",          category: "produce",        amounts: { "2": "2",       "3": "3",        "4": "4" } },
      { name: "garlic clove",         category: "produce",        amounts: { "2": "3",       "3": "4",        "4": "6" } },
      { name: "fresh root ginger",    category: "produce",        amounts: { "2": "15g",     "3": "20g",      "4": "30g" } },
      { name: "garam masala",         category: "herbs & spices", amounts: { "2": "1 tbsp",  "3": "1.5 tbsp", "4": "2 tbsp" } },
      { name: "ground cumin",         category: "herbs & spices", amounts: { "2": "1 tsp",   "3": "1.5 tsp",  "4": "2 tsp" } },
      { name: "ground turmeric",      category: "herbs & spices", amounts: { "2": "0.5 tsp", "3": "0.75 tsp", "4": "1 tsp" } },
      { name: "cardamom pod",         category: "herbs & spices", amounts: { "2": "4",       "3": "6",        "4": "8" } },
      { name: "cinnamon stick",       category: "herbs & spices", amounts: { "2": "1",       "3": "1",        "4": "2" } },
      { name: "white basmati rice",   category: "pantry",         amounts: { "2": "150g",    "3": "225g",     "4": "300g" } },
      { name: "coriander",            category: "produce",        amounts: { "2": "10g",     "3": "10g",      "4": "20g" } },
      { name: "mint",                 category: "produce",        amounts: { "2": "5g",      "3": "5g",       "4": "10g" } },
      { name: "lemon",                category: "produce",        amounts: { "2": "1",       "3": "1",        "4": "1" } }
    ],
    steps: [
      "Add your diced lamb to a bowl with your yoghurt, half your garam masala, your ground cumin and half your ground turmeric (you'll use the rest later!) and a generous pinch of salt. Mix well and set aside to marinate while you prep – this is your marinated lamb. Rinse your basmati rice in a sieve until the water runs clear, then leave it to soak in cold water.",
      "Peel and finely slice your brown onions. Peel and finely chop (or grate) your garlic and ginger. Crush your cardamom pods open with the side of a knife.",
      "Heat a large, wide-based pan (with a matching lid) with a very generous drizzle of vegetable oil over a medium-high heat. Once hot, add the sliced onion and cook for 10-12 min, stirring often, until deep golden and starting to crisp. Transfer half to kitchen paper (these are your crispy onions – save them for serving!), leaving the rest in the pan.",
      "Add the chopped garlic and ginger to the pan and cook for 1 min, then add the marinated lamb and cook for 4-5 min or until browned all over. Add 150ml [200ml] [250ml] cold water, reduce the heat to low and simmer, covered, for 25-30 min or until the lamb is tender.",
      "Meanwhile, boil a kettle. Drain the soaked rice and add it to a pot of boiled water with a generous pinch of salt, the crushed cardamom pods, your cinnamon stick[s] and the remaining ground turmeric. Boil for 5 min (the rice should still have a good bite – it finishes cooking with the lamb), then drain.",
      "Roughly chop your coriander (stalks and all) and your mint leaves. Cut your lemon[s] into wedges.",
      "Layer the part-cooked rice over the tender lamb, scatter over half the chopped herbs, then cover with the lid and cook over a very low heat for 12-15 min or until the rice is cooked through and fragrant. Remove from the heat and rest, covered, for 5 min – this is your lamb biryani.",
      "Gently fold the biryani together and discard the cinnamon. Serve topped with the crispy onions, the remaining herbs and a lemon wedge to the side. Enjoy!"
    ]
  },
  {
    id: "X-005",
    title: "Pasta Carbonara",
    source: "Family staple",
    cuisine: "Italian",
    tags: ["Family staple"],
    dietary: { glutenFree: false, dairyFree: false, vegetarian: false, vegan: false },
    timeMinutes: { min: 15, max: 20 },
    fiveADay: 0,
    nutritionPerServing: {
      calories: 720, fatG: 32, satFatG: 13, carbsG: 68,
      sugarG: 3, fibreG: 4, proteinG: 36, saltG: 1.9
    },
    allergens: ["gluten (pasta)", "egg", "milk (cheese)"],
    staples: ["salt", "pepper", "water"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "spaghetti",             category: "pantry",      amounts: { "2": "180g", "3": "270g", "4": "360g" } },
      { name: "smoked bacon lardons",  category: "meat & fish", amounts: { "2": "150g", "3": "225g", "4": "300g" } },
      { name: "egg",                   category: "dairy",       amounts: { "2": "3",    "3": "4",    "4": "6" } },
      { name: "pecorino romano",       category: "dairy",       amounts: { "2": "50g",  "3": "75g",  "4": "100g" } }
    ],
    steps: [
      "Boil a full kettle. Finely grate your pecorino romano.",
      "Crack your eggs into a bowl, add most of the grated pecorino (save a handful for serving!) and a very generous grind of black pepper, and beat with a fork until completely combined – this is your carbonara mix.",
      "Add your spaghetti to a pot of boiled water with a pinch of salt and cook for 8-10 min or until cooked with a slight bite. Once done, drain, reserving a full cup of the starchy pasta water.",
      "Meanwhile, add your smoked bacon lardons to a large, cold, wide-based pan and place over a medium heat. Cook for 6-8 min, stirring occasionally, until deeply golden and crisp, then remove the pan from the heat. Tip: Starting in a cold pan renders the fat slowly – no oil needed!",
      "Working quickly, add the drained spaghetti to the pan of lardons (off the heat!) with a splash of the reserved pasta water and toss well. Pour over the carbonara mix and keep tossing for 1-2 min – the residual heat will turn the egg and cheese into a glossy sauce that coats every strand. Add more pasta water, a splash at a time, until silky. Tip: If the pan is too hot the egg will scramble – off the heat is the way!",
      "Serve the pasta carbonara immediately, topped with the reserved pecorino and plenty more black pepper. Enjoy!"
    ]
  },
  {
    id: "X-006",
    title: "Harissa Sausage Pasta With Spinach & Tomato",
    source: "Family staple",
    cuisine: "Mediterranean",
    tags: ["Family staple", "3 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: false, vegetarian: false, vegan: false },
    timeMinutes: { min: 25, max: 30 },
    fiveADay: 3,
    nutritionPerServing: {
      calories: 780, fatG: 38, satFatG: 15, carbsG: 72,
      sugarG: 12, fibreG: 7, proteinG: 32, saltG: 2
    },
    allergens: ["gluten (pasta)", "milk (crème fraîche, cheese)", "sulphites (sausages – check label)"],
    staples: ["olive oil", "salt", "pepper"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "pork sausages",               category: "meat & fish", amounts: { "2": "4",      "3": "6",       "4": "8" } },
      { name: "harissa paste",               category: "pantry",      amounts: { "2": "2 tbsp", "3": "3 tbsp",  "4": "4 tbsp" } },
      { name: "brown onion",                 category: "produce",     amounts: { "2": "1",      "3": "1",       "4": "2" } },
      { name: "garlic clove",                category: "produce",     amounts: { "2": "2",      "3": "3",       "4": "4" } },
      { name: "cherry tomatoes",             category: "produce",     amounts: { "2": "200g",   "3": "300g",    "4": "400g" } },
      { name: "chopped tomatoes (400g tin)", category: "pantry",      amounts: { "2": "1",      "3": "1",       "4": "2" } },
      { name: "spinach",                     category: "produce",     amounts: { "2": "120g",   "3": "180g",    "4": "240g" } },
      { name: "rigatoni",                    category: "pantry",      amounts: { "2": "180g",   "3": "270g",    "4": "360g" } },
      { name: "crème fraîche",               category: "dairy",       amounts: { "2": "75g",    "3": "100g",    "4": "150g" } },
      { name: "hard Italian cheese",         category: "dairy",       amounts: { "2": "30g",    "3": "45g",     "4": "60g" } }
    ],
    steps: [
      "Boil a full kettle. Peel and finely chop your brown onion[s]. Peel and finely chop (or grate) your garlic. Chop your cherry tomatoes in half.",
      "Squeeze your sausages out of their skins directly into a large, wide-based pan (discard the skins) and place over a medium-high heat with a small drizzle of olive oil. Cook for 5-6 min, breaking the sausagemeat into rough chunks with a wooden spoon, until golden and starting to crisp.",
      "Meanwhile, add your rigatoni to a pot of boiled water with a large pinch of salt and cook for 10-12 min or until cooked with a slight bite. Once done, drain, reserving a cup of the starchy pasta water.",
      "Add the chopped onion to the sausage pan and cook for 3-4 min or until softened, then add the chopped garlic and your harissa paste and cook for 1 min further or until fragrant. Tip: Can't handle the heat? Start with half the harissa and build it up!",
      "Add the halved cherry tomatoes and your chopped tomatoes and simmer for 5-6 min or until the sauce has thickened and the cherry tomatoes are starting to collapse.",
      "Wash your spinach, then add it to the pan a handful at a time, stirring until wilted. Remove from the heat and stir through your crème fraîche.",
      "Add the drained rigatoni with a splash of the reserved pasta water and toss until everything is coated in the terracotta-coloured sauce. Season with salt and pepper – this is your harissa sausage pasta.",
      "Serve the harissa sausage pasta in bowls with your hard Italian cheese grated over the top. Enjoy!"
    ]
  },
  {
    id: "X-007",
    title: "Fish Fingers, Jacket Potatoes & Salad",
    source: "Family staple",
    cuisine: "British",
    tags: ["Family staple", "2 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: false, vegetarian: false, vegan: false },
    timeMinutes: { min: 60, max: 70 },
    fiveADay: 2,
    nutritionPerServing: {
      calories: 520, fatG: 18, satFatG: 6, carbsG: 68,
      sugarG: 8, fibreG: 8, proteinG: 22, saltG: 1.2
    },
    allergens: ["gluten (fish finger crumb)", "fish", "milk (butter)"],
    staples: ["butter", "olive oil", "vinegar", "salt", "pepper"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "fish fingers",     category: "frozen",  amounts: { "2": "8",    "3": "12",   "4": "16" } },
      { name: "baking potato",    category: "produce", amounts: { "2": "2",    "3": "3",    "4": "4" } },
      { name: "gem lettuce",      category: "produce", amounts: { "2": "1",    "3": "2",    "4": "2" } },
      { name: "cucumber",         category: "produce", amounts: { "2": "½",    "3": "¾",    "4": "1" } },
      { name: "cherry tomatoes",  category: "produce", amounts: { "2": "150g", "3": "200g", "4": "300g" } },
      { name: "lemon",            category: "produce", amounts: { "2": "1",    "3": "1",    "4": "1" } }
    ],
    steps: [
      "Preheat the oven to 200°C/ 180°C (fan)/ gas 6. Scrub your baking potatoes, pat dry, and prick each a few times with a fork. Rub with a little olive oil and a generous pinch of salt.",
      "Put the potatoes straight on the middle oven shelf and bake for 60-70 min or until the skins are crisp and a knife slides through the middle with no resistance. Tip: Short on time? Microwave the pricked potatoes for 8-10 min first, then finish in the oven for 20-25 min to crisp the skins.",
      "When the potatoes have 15 min to go, add your fish fingers to a baking tray and cook on the top shelf for 12-15 min, turning halfway, until golden and crisp all over.",
      "Meanwhile, wash your gem lettuce, pat it dry with kitchen paper and roughly shred. Slice your cucumber into half-moons. Chop your cherry tomatoes in half.",
      "Add the shredded lettuce, cucumber and tomatoes to a large bowl. Just before serving, dress with a good drizzle of olive oil, a small splash of vinegar and a pinch of salt and pepper and toss well – this is your salad. Cut your lemon[s] into 1 wedge per person.",
      "Split the jacket potatoes open, season, and add a generous knob of butter to each.",
      "Serve the fish fingers with a jacket potato and a big handful of salad to the side, with a lemon wedge for squeezing over the fish. Enjoy!"
    ]
  },
  {
    id: "X-008",
    title: "Thai Green Chicken Curry",
    source: "Family staple",
    cuisine: "Thai",
    tags: ["Family staple", "Gluten-free", "Dairy-free", "2 of your 5-a-day"],
    dietary: { glutenFree: true, dairyFree: true, vegetarian: false, vegan: false },
    timeMinutes: { min: 35, max: 40 },
    fiveADay: 2,
    nutritionPerServing: {
      calories: 700, fatG: 34, satFatG: 24, carbsG: 62,
      sugarG: 8, fibreG: 5, proteinG: 40, saltG: 1.8
    },
    allergens: ["fish (fish sauce)", "crustacean (curry paste – check label)"],
    staples: ["vegetable oil", "salt", "sugar", "water"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "chicken breast",              category: "meat & fish", amounts: { "2": "300g",   "3": "450g",    "4": "600g" } },
      { name: "Thai green curry paste",      category: "pantry",      amounts: { "2": "45g",    "3": "70g",     "4": "90g" } },
      { name: "coconut milk (400ml tin)",    category: "pantry",      amounts: { "2": "1",      "3": "1½",      "4": "2" } },
      { name: "fine green beans",            category: "produce",     amounts: { "2": "150g",   "3": "225g",    "4": "300g" } },
      { name: "red pepper",                  category: "produce",     amounts: { "2": "1",      "3": "2",       "4": "2" } },
      { name: "basil",                       category: "produce",     amounts: { "2": "15g",    "3": "20g",     "4": "30g" } },
      { name: "lime",                        category: "produce",     amounts: { "2": "1",      "3": "1",       "4": "2" } },
      { name: "fish sauce",                  category: "pantry",      amounts: { "2": "1 tbsp", "3": "1.5 tbsp", "4": "2 tbsp" } },
      { name: "white basmati rice",          category: "pantry",      amounts: { "2": "150g",   "3": "225g",    "4": "300g" } }
    ],
    steps: [
      "Add your basmati rice and 300ml [450ml] [600ml] cold water to a pot with a lid and bring to the boil over a high heat. Once boiling, reduce the heat to very low and cook, covered, for 10-12 min or until all the water has absorbed and the rice is cooked. Remove from the heat and keep covered until serving.",
      "Meanwhile, cut your chicken breast[s] into bite-sized pieces. Trim your green beans and cut in half. Deseed your red pepper[s] and cut into strips.",
      "Heat a large, wide-based pan (or wok) with a drizzle of vegetable oil over a medium-high heat. Once hot, add your Thai green curry paste and cook for 1 min, stirring, until it smells amazing. Tip: Frying the paste first wakes it up – don't skip it!",
      "Add the chicken pieces and stir to coat in the paste, cooking for 2-3 min until sealed all over.",
      "Pour in your coconut milk with a pinch of sugar, stir well and bring to a gentle simmer. Cook for 8-10 min, then add the green beans and pepper strips and cook for 4-5 min further, or until the veg is tender-crisp and the chicken is cooked through (no pink meat!).",
      "Remove from the heat. Season with your fish sauce and the juice of half your lime[s] – taste and balance: it should be savoury, a little sweet, with a citrus edge. Tear in most of your basil leaves and stir through – this is your Thai green chicken curry.",
      "Serve the Thai green chicken curry over the basmati rice, topped with the remaining basil and the rest of the lime, cut into wedges. Enjoy!"
    ]
  },
  {
    id: "X-009",
    title: "Salmon En Croute With Baby Potatoes & Broccoli",
    source: "Family staple",
    cuisine: "French",
    tags: ["Family staple", "2 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: false, vegetarian: false, vegan: false },
    timeMinutes: { min: 50, max: 60 },
    fiveADay: 2,
    nutritionPerServing: {
      calories: 820, fatG: 48, satFatG: 20, carbsG: 55,
      sugarG: 5, fibreG: 7, proteinG: 42, saltG: 1.4
    },
    allergens: ["fish (salmon)", "gluten (pastry)", "milk (soft cheese, butter)", "egg"],
    staples: ["butter", "salt", "pepper", "baking paper"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "skinless salmon fillets",            category: "meat & fish", amounts: { "2": "2",    "3": "3",    "4": "4" } },
      { name: "ready-rolled puff pastry (320g)",    category: "bakery",      amounts: { "2": "1",    "3": "1",    "4": "2" } },
      { name: "soft cheese",                        category: "dairy",       amounts: { "2": "75g",  "3": "100g", "4": "150g" } },
      { name: "spinach",                            category: "produce",     amounts: { "2": "120g", "3": "180g", "4": "240g" } },
      { name: "garlic clove",                       category: "produce",     amounts: { "2": "1",    "3": "2",    "4": "2" } },
      { name: "dill",                               category: "produce",     amounts: { "2": "5g",   "3": "10g",  "4": "10g" } },
      { name: "lemon",                              category: "produce",     amounts: { "2": "1",    "3": "1",    "4": "1" } },
      { name: "egg",                                category: "dairy",       amounts: { "2": "1",    "3": "1",    "4": "1" } },
      { name: "baby potatoes",                      category: "produce",     amounts: { "2": "400g", "3": "600g", "4": "800g" } },
      { name: "broccoli",                           category: "produce",     amounts: { "2": "300g", "3": "450g", "4": "600g" } }
    ],
    steps: [
      "Preheat the oven to 200°C/ 180°C (fan)/ gas 6 and take your puff pastry out of the fridge (it handles best at room temperature). Boil a kettle.",
      "Wash your spinach and add to a colander, then pour over boiled water until wilted. Once cool enough to handle, squeeze out as much water as you can (really squeeze – wet spinach means soggy pastry!) and chop roughly. Peel and finely chop (or grate) your garlic. Chop your dill finely.",
      "Mix the chopped spinach, garlic and most of the dill with your soft cheese, the zest of your lemon and a generous pinch of salt and pepper – this is your creamy spinach filling.",
      "Unroll your puff pastry on its paper and cut into 1 rectangle per fillet. Spread the creamy spinach filling over the middle of each, sit a salmon fillet on top and season. Fold the pastry over and pinch the edges together to seal (crimp with a fork for the full bakery look). Beat your egg and brush it all over, then cut 2 small slits in each top to let steam out.",
      "Transfer the parcels (sealed-side down) to a baking paper-lined tray and bake for 25-30 min or until the pastry is puffed, deep golden and crisp underneath – these are your salmon en croutes.",
      "When the parcels have 20 min to go, halve any larger baby potatoes and add to a pot of cold, salted water. Bring to the boil and cook for 15-18 min or until a knife slides through easily. Drain, return to the pan and toss with a knob of butter and a pinch of salt.",
      "Meanwhile, cut your broccoli into florets. When the potatoes have 5 min to go, boil or steam the broccoli for 4-5 min or until just tender with a little bite.",
      "Serve a salmon en croute per person with the buttered baby potatoes and broccoli to the side. Garnish with the remaining dill and the lemon, cut into wedges. Enjoy!"
    ]
  },
  {
    id: "X-010",
    title: "Jeera Chicken With Tarka Dal",
    source: "Family staple",
    cuisine: "Indian",
    tags: ["Family staple", "Gluten-free", "2 of your 5-a-day"],
    dietary: { glutenFree: true, dairyFree: false, vegetarian: false, vegan: false },
    timeMinutes: { min: 60, max: 70 },
    fiveADay: 2,
    nutritionPerServing: {
      calories: 640, fatG: 30, satFatG: 9, carbsG: 40,
      sugarG: 7, fibreG: 8, proteinG: 54, saltG: 0.8
    },
    allergens: ["milk (yoghurt, butter)"],
    staples: ["vegetable oil", "butter (or ghee)", "salt", "pepper", "water"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "whole chicken (approx 1.5kg)", category: "meat & fish",    amounts: { "2": "1",       "3": "1",        "4": "1" } },
      { name: "natural yoghurt",              category: "dairy",          amounts: { "2": "100g",    "3": "150g",     "4": "200g" } },
      { name: "cumin seeds",                  category: "herbs & spices", amounts: { "2": "2 tbsp",  "3": "2 tbsp",   "4": "3 tbsp" } },
      { name: "ground coriander",             category: "herbs & spices", amounts: { "2": "2 tsp",   "3": "2 tsp",    "4": "1 tbsp" } },
      { name: "garam masala",                 category: "herbs & spices", amounts: { "2": "1 tsp",   "3": "1.5 tsp",  "4": "2 tsp" } },
      { name: "ground turmeric",              category: "herbs & spices", amounts: { "2": "1 tsp",   "3": "1.5 tsp",  "4": "2 tsp" } },
      { name: "garlic clove",                 category: "produce",        amounts: { "2": "4",       "3": "5",        "4": "6" } },
      { name: "fresh root ginger",            category: "produce",        amounts: { "2": "20g",     "3": "25g",      "4": "30g" } },
      { name: "green chilli",                 category: "produce",        amounts: { "2": "1",       "3": "1",        "4": "2" } },
      { name: "brown onion",                  category: "produce",        amounts: { "2": "2",       "3": "2",        "4": "3" } },
      { name: "tomato",                       category: "produce",        amounts: { "2": "1",       "3": "2",        "4": "2" } },
      { name: "red lentils",                  category: "pantry",         amounts: { "2": "150g",    "3": "225g",     "4": "300g" } },
      { name: "coriander",                    category: "produce",        amounts: { "2": "10g",     "3": "10g",      "4": "20g" } },
      { name: "lemon",                        category: "produce",        amounts: { "2": "1",       "3": "1",        "4": "1" } }
    ],
    steps: [
      "Joint your whole chicken into 8-10 bone-in pieces (legs, thighs, wings, breasts halved) — or have the butcher do it. Peel and finely chop (or grate) your garlic and ginger. Coarsely crush half your cumin seeds with a pestle and mortar (you'll use the rest later!).",
      "Add the chicken pieces to a large bowl with your yoghurt, the crushed cumin, your ground coriander, garam masala, half your ground turmeric, half the chopped garlic and ginger, the juice of half your lemon[s] and a generous pinch of salt. Massage it all in and set aside to marinate while you prep — 15 min minimum, overnight in the fridge if you're organised. Cooking for 2? A whole bird gives glorious leftovers.",
      "Rinse your red lentils in a sieve until the water runs clear, then add to a pot with 600ml [900ml] [1.2L] cold water, the remaining ground turmeric and a pinch of salt. Bring to the boil, skim off any foam, then simmer for 20-25 min, stirring now and then, until soft and collapsing. Whisk briefly until creamy and loosen with a splash of water if needed — this is your dal.",
      "Meanwhile, peel and finely slice your brown onions. Chop your tomato[es] roughly. Slit your green chilli[es] lengthways.",
      "Heat a very large, wide-based pan (with a matching lid) with a drizzle of vegetable oil over a high heat. Once hot, brown the marinated chicken pieces for 2-3 min on each side, in batches if needed, and set aside — they'll finish cooking later.",
      "Reduce the heat to medium and add a drizzle more oil with most of the remaining cumin seeds (save a pinch for the tarka!). Once they sizzle, add the sliced onions with a pinch of salt and cook for 10-12 min, stirring often, until deeply golden. Add the remaining garlic and ginger and the chopped tomato and cook for 2 min further.",
      "Return the chicken and any juices to the pan with a splash of water, cover, and cook over a medium-low heat for 25-30 min, turning halfway, until the chicken is cooked through at the bone (no pink meat!). Remove the lid and let it bubble for a final few minutes until the masala clings to the pieces — jeera chicken is a dry-style dish, not a saucy curry.",
      "For the tarka: melt a knob of butter (or ghee) in a small pan, add the reserved cumin seeds and the slit green chilli and sizzle for 30 secs, then pour it over the dal. Chop your coriander roughly and scatter over both. Serve the jeera chicken with the tarka dal alongside and the remaining lemon in wedges. Enjoy!"
    ]
  },
  {
    id: "X-011",
    title: "Tandoori Chicken With Naan & Kachumber Salad",
    source: "Family staple",
    cuisine: "Indian",
    tags: ["Family staple", "2 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: false, vegetarian: false, vegan: false },
    timeMinutes: { min: 55, max: 65 },
    fiveADay: 2,
    nutritionPerServing: {
      calories: 680, fatG: 28, satFatG: 8, carbsG: 55,
      sugarG: 8, fibreG: 6, proteinG: 52, saltG: 1.6
    },
    allergens: ["milk (yoghurt)", "gluten (naan)"],
    staples: ["vegetable oil", "salt", "pepper"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "whole chicken (approx 1.5kg)", category: "meat & fish",    amounts: { "2": "1",       "3": "1",       "4": "1" } },
      { name: "natural yoghurt",              category: "dairy",          amounts: { "2": "150g",    "3": "200g",    "4": "250g" } },
      { name: "ground cumin",                 category: "herbs & spices", amounts: { "2": "2 tsp",   "3": "2 tsp",   "4": "1 tbsp" } },
      { name: "ground coriander",             category: "herbs & spices", amounts: { "2": "2 tsp",   "3": "2 tsp",   "4": "1 tbsp" } },
      { name: "ground paprika",               category: "herbs & spices", amounts: { "2": "1 tbsp",  "3": "1 tbsp",  "4": "1.5 tbsp" } },
      { name: "garam masala",                 category: "herbs & spices", amounts: { "2": "1 tsp",   "3": "1.5 tsp", "4": "2 tsp" } },
      { name: "ground turmeric",              category: "herbs & spices", amounts: { "2": "0.5 tsp", "3": "0.75 tsp", "4": "1 tsp" } },
      { name: "chilli powder",                category: "herbs & spices", amounts: { "2": "0.5 tsp", "3": "0.75 tsp", "4": "1 tsp" } },
      { name: "garlic clove",                 category: "produce",        amounts: { "2": "4",       "3": "5",       "4": "6" } },
      { name: "fresh root ginger",            category: "produce",        amounts: { "2": "20g",     "3": "25g",     "4": "30g" } },
      { name: "lemon",                        category: "produce",        amounts: { "2": "1",       "3": "1",       "4": "2" } },
      { name: "naan breads",                  category: "bakery",         amounts: { "2": "2",       "3": "3",       "4": "4" } },
      { name: "cucumber",                     category: "produce",        amounts: { "2": "½",       "3": "¾",       "4": "1" } },
      { name: "tomato",                       category: "produce",        amounts: { "2": "2",       "3": "3",       "4": "4" } },
      { name: "red onion",                    category: "produce",        amounts: { "2": "½",       "3": "¾",       "4": "1" } },
      { name: "coriander",                    category: "produce",        amounts: { "2": "10g",     "3": "10g",     "4": "20g" } }
    ],
    steps: [
      "Joint your whole chicken into 8-10 bone-in pieces (or have the butcher do it) and pull the skin off the larger pieces. Slash each piece 2-3 times down to the bone — this lets the marinade get right in and helps it cook evenly. Cooking for 2? The leftovers make a superb next-day lunch.",
      "Peel and finely chop (or grate) your garlic and ginger. In a large bowl, mix your yoghurt with the garlic and ginger, your ground cumin, ground coriander, ground paprika, garam masala, ground turmeric and chilli powder (can't handle the heat? Go easy!), the juice of half your lemon[s], a drizzle of vegetable oil and a very generous pinch of salt — this is your tandoori marinade.",
      "Add the chicken pieces to the tandoori marinade and massage it into every slash. Marinate for at least 30 min — overnight in the fridge is where the magic happens.",
      "Preheat the oven to 220°C/ 200°C (fan)/ gas 7. Arrange the chicken on a wire rack over a foil-lined tray (the rack keeps it roasting, not stewing) and cook for 35-40 min, turning once, until charred at the edges and cooked through at the bone (no pink meat!).",
      "Meanwhile, make your kachumber salad: dice your cucumber and tomato[es], peel and very finely slice your red onion, and roughly chop most of your coriander. Toss it all with a squeeze of lemon and a pinch of salt just before serving.",
      "When the chicken has 3-4 min to go, warm your naan breads in the bottom of the oven (or 30 secs a side in a dry pan).",
      "Pile the tandoori chicken onto a platter with the warm naans and kachumber salad alongside. Scatter with the remaining coriander and serve with the rest of the lemon in wedges. Enjoy!"
    ]
  },
  {
    id: "X-012",
    title: "Chicken Miso Soup With Soft-Boiled Eggs",
    source: "Family staple",
    cuisine: "Japanese",
    tags: ["Family staple", "Dairy-free", "2 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: true, vegetarian: false, vegan: false },
    timeMinutes: { min: 15, max: 20 },
    fiveADay: 2,
    nutritionPerServing: {
      calories: 330, fatG: 12, satFatG: 3, carbsG: 14,
      sugarG: 6, fibreG: 5, proteinG: 38, saltG: 2.5
    },
    allergens: ["soya (miso)", "egg", "gluten (some miso pastes – check label)"],
    staples: ["water"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "cooked chicken",       category: "meat & fish",    amounts: { "2": "200g", "3": "300g", "4": "400g" } },
      { name: "miso paste sachets",   category: "pantry",         amounts: { "2": "3",    "3": "4",    "4": "6" } },
      { name: "egg",                  category: "dairy",          amounts: { "2": "2",    "3": "3",    "4": "4" } },
      { name: "spring onion",         category: "produce",        amounts: { "2": "3",    "3": "4",    "4": "6" } },
      { name: "fresh root ginger",    category: "produce",        amounts: { "2": "20g",  "3": "25g",  "4": "30g" } },
      { name: "red chilli",           category: "produce",        amounts: { "2": "1",    "3": "1",    "4": "2" } },
      { name: "mange tout",           category: "produce",        amounts: { "2": "150g", "3": "200g", "4": "300g" } },
      { name: "baby corn",            category: "produce",        amounts: { "2": "150g", "3": "200g", "4": "300g" } }
    ],
    steps: [
      "Bring a small pot of water to the boil, gently lower in your eggs and cook for 7 min (set white, jammy middle). Run under cold water, peel and halve.",
      "Meanwhile, trim and finely slice your spring onions, keeping the white and green parts separate. Peel your ginger (scrape the skin off with a teaspoon) and cut into fine matchsticks. Slice your red chilli[es] into rounds (can't handle the heat? Deseed it, or go easy!). Halve your baby corn lengthways. Shred or slice your cooked chicken.",
      "Add 900ml [1.3L] [1.8L] water to a large pot with the ginger matchsticks and the spring onion whites and bring to a gentle simmer for 3-4 min to build the base.",
      "Add the baby corn and simmer for 2 min, then add your mange tout and the cooked chicken and simmer for 2-3 min further, or until the chicken is piping hot and the greens are just tender with plenty of snap.",
      "Take the pot OFF the heat. Dissolve your miso paste sachets in a ladleful of the hot broth, then stir it back through the pot. Tip: Miso is never boiled — adding it off the heat keeps its flavour alive. Taste and add more miso if you like it deeper.",
      "Ladle into deep bowls, sit two egg halves on top of each, and finish with the spring onion greens and chilli rounds. Light, hot and sorted in 20 minutes. Enjoy!"
    ]
  },
  {
    id: "X-101",
    title: "Granola, Greek Yoghurt & Berry Bowl",
    source: "Family staple",
    mealType: "breakfast",
    cuisine: "British",
    tags: ["Family staple", "Zero prep", "1 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: false, vegetarian: true, vegan: false },
    timeMinutes: { min: 5, max: 5 },
    fiveADay: 1,
    nutritionPerServing: {
      calories: 420, fatG: 14, satFatG: 5, carbsG: 48,
      sugarG: 18, fibreG: 6, proteinG: 22, saltG: 0.2
    },
    allergens: ["gluten (granola – check label)", "milk (yoghurt)", "nuts (granola/seeds – check label)"],
    staples: ["honey"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "granola",            category: "pantry",  amounts: { "2": "100g", "3": "150g", "4": "200g" } },
      { name: "Greek yoghurt",      category: "dairy",   amounts: { "2": "300g", "3": "450g", "4": "600g" } },
      { name: "mixed berries",      category: "produce", amounts: { "2": "160g", "3": "240g", "4": "320g" } },
      { name: "pumpkin seeds",      category: "pantry",  amounts: { "2": "20g",  "3": "30g",  "4": "40g" } }
    ],
    steps: [
      "Divide your Greek yoghurt between bowls.",
      "Top with your granola, then scatter over your mixed berries and pumpkin seeds.",
      "Finish with a small drizzle of honey. Enjoy!"
    ]
  },
  {
    id: "X-102",
    title: "Bite-Size Shredded Wheat With Banana & Blueberries",
    source: "Family staple",
    mealType: "breakfast",
    cuisine: "British",
    tags: ["Family staple", "Zero prep", "1 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: false, vegetarian: true, vegan: false },
    timeMinutes: { min: 5, max: 5 },
    fiveADay: 1,
    nutritionPerServing: {
      calories: 340, fatG: 5, satFatG: 2, carbsG: 60,
      sugarG: 16, fibreG: 8, proteinG: 14, saltG: 0.1
    },
    allergens: ["gluten (wheat)", "milk"],
    staples: [],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "bite-size shredded wheat", category: "pantry",  amounts: { "2": "90g",   "3": "135g",  "4": "180g" } },
      { name: "semi-skimmed milk",        category: "dairy",   amounts: { "2": "400ml", "3": "600ml", "4": "800ml" } },
      { name: "banana",                   category: "produce", amounts: { "2": "1",     "3": "2",     "4": "2" } },
      { name: "blueberries",              category: "produce", amounts: { "2": "80g",   "3": "120g",  "4": "160g" } },
      { name: "ground cinnamon",          category: "herbs & spices", amounts: { "2": "0.5 tsp", "3": "0.75 tsp", "4": "1 tsp" } }
    ],
    steps: [
      "Divide your bite-size shredded wheat between bowls (100% wholegrain, no added fat or sugar – the toppings do the sweetening).",
      "Slice your banana[s] and arrange over the top with your blueberries.",
      "Pour over your milk and finish with a dusting of ground cinnamon. Enjoy!"
    ]
  },
  {
    id: "X-103",
    title: "Apple & Cinnamon Overnight Oats",
    source: "Family staple",
    mealType: "breakfast",
    cuisine: "British",
    tags: ["Family staple", "1 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: false, vegetarian: true, vegan: false },
    timeMinutes: { min: 5, max: 10 },
    fiveADay: 1,
    nutritionPerServing: {
      calories: 390, fatG: 10, satFatG: 4, carbsG: 55,
      sugarG: 19, fibreG: 7, proteinG: 18, saltG: 0.2
    },
    allergens: ["gluten (oats – check label)", "milk"],
    staples: ["honey"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "porridge oats",     category: "pantry",         amounts: { "2": "100g",    "3": "150g",     "4": "200g" } },
      { name: "natural yoghurt",   category: "dairy",          amounts: { "2": "150g",    "3": "225g",     "4": "300g" } },
      { name: "semi-skimmed milk", category: "dairy",          amounts: { "2": "200ml",   "3": "300ml",    "4": "400ml" } },
      { name: "apple",             category: "produce",        amounts: { "2": "1",       "3": "2",        "4": "2" } },
      { name: "ground cinnamon",   category: "herbs & spices", amounts: { "2": "0.5 tsp", "3": "0.75 tsp", "4": "1 tsp" } },
      { name: "sultanas",          category: "pantry",         amounts: { "2": "30g",     "3": "45g",      "4": "60g" } }
    ],
    steps: [
      "The night before: add your oats, yoghurt and milk to a container (or one jar per person) and mix well.",
      "Coarsely grate your apple[s] (skin on) straight in, add your ground cinnamon and sultanas, and stir through with a small drizzle of honey.",
      "Cover and refrigerate overnight (or at least 2 hours).",
      "In the morning, give it a good stir and loosen with a splash more milk if you like it softer. Enjoy!"
    ]
  },
  {
    id: "X-104",
    title: "Eggs On Toast With Roasted Tomatoes",
    source: "Family staple",
    mealType: "breakfast",
    cuisine: "British",
    tags: ["Family staple", "1 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: false, vegetarian: true, vegan: false },
    timeMinutes: { min: 15, max: 20 },
    fiveADay: 1,
    nutritionPerServing: {
      calories: 380, fatG: 18, satFatG: 6, carbsG: 32,
      sugarG: 6, fibreG: 6, proteinG: 21, saltG: 1
    },
    allergens: ["gluten (bread)", "egg", "milk (butter)"],
    staples: ["butter", "olive oil", "salt", "pepper"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "egg",              category: "dairy",   amounts: { "2": "4",    "3": "6",    "4": "8" } },
      { name: "wholemeal bread",  category: "bakery",  amounts: { "2": "4 slices", "3": "6 slices", "4": "8 slices" } },
      { name: "cherry tomatoes",  category: "produce", amounts: { "2": "150g", "3": "225g", "4": "300g" } }
    ],
    steps: [
      "Preheat the grill to high. Chop your cherry tomatoes in half, add to a small tray, drizzle with olive oil, season with salt and pepper and grill for 6-8 min or until soft and starting to catch. Tip: Using slices from your bread machine loaf? Even better.",
      "Meanwhile, bring a pot of water to a gentle simmer for poached eggs (or heat a knob of butter in a pan for scrambled – dealer's choice!).",
      "Crack in your eggs and poach for 3-4 min for a runny yolk (or scramble gently until just set).",
      "Toast your wholemeal bread and butter it. Top with the eggs, pile the roasted tomatoes alongside and season with a grind of black pepper. Enjoy!"
    ]
  },
  {
    id: "X-105",
    title: "Greek Yoghurt Protein Pot With Nuts & Seeds",
    source: "Family staple",
    mealType: "breakfast",
    cuisine: "British",
    tags: ["Family staple", "Zero prep", "Gluten-free", "1 of your 5-a-day"],
    dietary: { glutenFree: true, dairyFree: false, vegetarian: true, vegan: false },
    timeMinutes: { min: 5, max: 5 },
    fiveADay: 1,
    nutritionPerServing: {
      calories: 400, fatG: 22, satFatG: 6, carbsG: 24,
      sugarG: 16, fibreG: 5, proteinG: 26, saltG: 0.2
    },
    allergens: ["milk (yoghurt)", "nuts"],
    staples: ["honey"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "Greek yoghurt", category: "dairy",   amounts: { "2": "400g", "3": "600g", "4": "800g" } },
      { name: "mixed nuts",    category: "pantry",  amounts: { "2": "40g",  "3": "60g",  "4": "80g" } },
      { name: "pumpkin seeds", category: "pantry",  amounts: { "2": "20g",  "3": "30g",  "4": "40g" } },
      { name: "mixed berries", category: "produce", amounts: { "2": "120g", "3": "180g", "4": "240g" } }
    ],
    steps: [
      "Divide your Greek yoghurt between bowls or lidded pots (this one travels well!).",
      "Roughly chop your mixed nuts and scatter over with your pumpkin seeds.",
      "Top with your mixed berries and the smallest drizzle of honey. Enjoy!"
    ]
  },
  {
    id: "X-106",
    title: "Radhi's Granola, Fruit & Yoghurt Bowl",
    source: "Family staple",
    mealType: "breakfast",
    cuisine: "British",
    tags: ["Family staple", "Zero prep", "2 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: false, vegetarian: true, vegan: false },
    timeMinutes: { min: 5, max: 5 },
    fiveADay: 2,
    nutritionPerServing: {
      calories: 430, fatG: 12, satFatG: 4, carbsG: 62,
      sugarG: 24, fibreG: 7, proteinG: 16, saltG: 0.2
    },
    allergens: ["gluten (granola – check label)", "milk (yoghurt)", "nuts (granola – check label)"],
    staples: [],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "natural yoghurt", category: "dairy",   amounts: { "2": "300g", "3": "450g", "4": "600g" } },
      { name: "granola",         category: "pantry",  amounts: { "2": "100g", "3": "150g", "4": "200g" } },
      { name: "banana",          category: "produce", amounts: { "2": "1",    "3": "2",    "4": "2" } },
      { name: "mixed berries",   category: "produce", amounts: { "2": "120g", "3": "180g", "4": "240g" } }
    ],
    steps: [
      "Divide your natural yoghurt between bowls.",
      "Slice your banana[s] and arrange over the yoghurt with your mixed berries.",
      "Top with your granola so it stays crunchy. Enjoy! Tip: With the shopping list's UPF swap on, the granola line suggests a low-sugar, short-ingredient (or homemade) version."
    ]
  },
  {
    id: "X-107",
    title: "Bite-Size Shredded Wheat With Strawberries & Almonds",
    source: "Family staple",
    mealType: "breakfast",
    cuisine: "British",
    tags: ["Family staple", "Zero prep", "1 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: false, vegetarian: true, vegan: false },
    timeMinutes: { min: 5, max: 5 },
    fiveADay: 1,
    nutritionPerServing: {
      calories: 380, fatG: 9, satFatG: 2, carbsG: 58,
      sugarG: 14, fibreG: 8, proteinG: 15, saltG: 0.1
    },
    allergens: ["gluten (wheat)", "milk", "nuts (almonds)"],
    staples: [],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "bite-size shredded wheat", category: "pantry",  amounts: { "2": "90g",   "3": "135g",  "4": "180g" } },
      { name: "semi-skimmed milk",        category: "dairy",   amounts: { "2": "400ml", "3": "600ml", "4": "800ml" } },
      { name: "strawberries",             category: "produce", amounts: { "2": "150g",  "3": "225g",  "4": "300g" } },
      { name: "flaked almonds",           category: "pantry",  amounts: { "2": "20g",   "3": "30g",   "4": "40g" } }
    ],
    steps: [
      "Divide your bite-size shredded wheat between bowls.",
      "Hull and halve your strawberries and scatter over with your flaked almonds.",
      "Pour over your milk. Done – wholegrains, fruit and a little crunch, zero prep. Enjoy!"
    ]
  },
  {
    id: "X-108",
    title: "Banana & Peanut Butter Yoghurt Pot",
    source: "Family staple",
    mealType: "breakfast",
    cuisine: "British",
    tags: ["Family staple", "Zero prep", "1 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: false, vegetarian: true, vegan: false },
    timeMinutes: { min: 5, max: 5 },
    fiveADay: 1,
    nutritionPerServing: {
      calories: 420, fatG: 16, satFatG: 4, carbsG: 46,
      sugarG: 20, fibreG: 5, proteinG: 21, saltG: 0.2
    },
    allergens: ["milk (yoghurt)", "peanut", "gluten (oats – check label)"],
    staples: [],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "natural yoghurt",       category: "dairy",   amounts: { "2": "300g", "3": "450g", "4": "600g" } },
      { name: "banana",                category: "produce", amounts: { "2": "1",    "3": "2",    "4": "2" } },
      { name: "smooth peanut butter",  category: "pantry",  amounts: { "2": "30g",  "3": "45g",  "4": "60g" } },
      { name: "porridge oats",         category: "pantry",  amounts: { "2": "30g",  "3": "45g",  "4": "60g" } }
    ],
    steps: [
      "Divide your natural yoghurt between bowls or lidded pots.",
      "Slice your banana[s] over the top.",
      "Drizzle (or dollop!) over your peanut butter and finish with a sprinkle of raw porridge oats for crunch. Travels well too. Enjoy!"
    ]
  },
  {
    id: "X-109",
    title: "Weekend Cooked Breakfast",
    source: "Family staple",
    mealType: "breakfast",
    cuisine: "British",
    tags: ["Family staple", "2 of your 5-a-day"],
    dietary: { glutenFree: false, dairyFree: false, vegetarian: false, vegan: false },
    timeMinutes: { min: 20, max: 25 },
    fiveADay: 2,
    nutritionPerServing: {
      calories: 590, fatG: 38, satFatG: 11, carbsG: 34,
      sugarG: 4, fibreG: 9, proteinG: 30, saltG: 2.2
    },
    allergens: ["egg", "gluten (bread)", "milk (butter)"],
    staples: ["butter", "olive oil", "salt", "pepper"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "egg",                category: "dairy",       amounts: { "2": "4",         "3": "6",         "4": "8" } },
      { name: "smoked back bacon",  category: "meat & fish", amounts: { "2": "4 rashers", "3": "6 rashers", "4": "8 rashers" } },
      { name: "wholemeal bread",    category: "bakery",      amounts: { "2": "4 slices",  "3": "6 slices",  "4": "8 slices" } },
      { name: "avocado",            category: "produce",     amounts: { "2": "1",         "3": "2",         "4": "2" } },
      { name: "chestnut mushrooms", category: "produce",     amounts: { "2": "200g",      "3": "300g",      "4": "400g" } }
    ],
    steps: [
      "Preheat the grill to high (or heat a large pan). Lay your smoked back bacon on the grill rack and cook for 3-4 min on each side, or until it's exactly how your family argues it should be.",
      "Meanwhile, thickly slice your chestnut mushrooms. Heat a large, wide-based pan with a small knob of butter and a drizzle of olive oil over a medium-high heat, add the mushrooms with a pinch of salt and cook for 5-6 min, stirring now and then, until golden and any liquid has cooked off. Push to one side of the pan (or keep warm under the grill with the bacon).",
      "Halve, de-stone and slice (or roughly smash) your avocado[s] with a pinch of salt and pepper.",
      "Add a little more butter to the pan and fry your eggs for 2-3 min for runny yolks (poach them if that's your house style). Meanwhile, toast your wholemeal bread — slices from the bread machine loaf are exactly right here — and butter it.",
      "Load the plates: toast, avocado, bacon, mushrooms and the eggs on top, with a good grind of black pepper. Weekends sorted. Enjoy!"
    ]
  },
  {
    id: "X-201",
    title: "Chicken, Avocado & Quinoa Lunchbox Salad",
    source: "Family staple",
    mealType: "lunch",
    cuisine: "Mediterranean",
    tags: ["Family staple", "Gluten-free", "3 of your 5-a-day"],
    dietary: { glutenFree: true, dairyFree: true, vegetarian: false, vegan: false },
    timeMinutes: { min: 20, max: 25 },
    fiveADay: 3,
    nutritionPerServing: {
      calories: 520, fatG: 24, satFatG: 4, carbsG: 34,
      sugarG: 5, fibreG: 9, proteinG: 42, saltG: 0.4
    },
    allergens: [],
    staples: ["olive oil", "salt", "pepper"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "chicken breast",   category: "meat & fish", amounts: { "2": "300g", "3": "450g", "4": "600g" } },
      { name: "quinoa",           category: "pantry",      amounts: { "2": "120g", "3": "180g", "4": "240g" } },
      { name: "avocado",          category: "produce",     amounts: { "2": "1",    "3": "2",    "4": "2" } },
      { name: "cucumber",         category: "produce",     amounts: { "2": "½",    "3": "¾",    "4": "1" } },
      { name: "cherry tomatoes",  category: "produce",     amounts: { "2": "150g", "3": "225g", "4": "300g" } },
      { name: "baby leaf salad",  category: "produce",     amounts: { "2": "60g",  "3": "90g",  "4": "120g" } },
      { name: "lemon",            category: "produce",     amounts: { "2": "1",    "3": "1",    "4": "1" } }
    ],
    steps: [
      "Rinse your quinoa in a sieve, then add to a pot with double its volume of cold water and a pinch of salt. Bring to the boil, reduce to a simmer and cook, covered, for 12-15 min or until the water has absorbed and the grains are tender. Spread on a plate to cool.",
      "Meanwhile, butterfly your chicken breast[s] (slice horizontally, almost all the way through, and open like a book). Season with salt and pepper and a drizzle of olive oil.",
      "Heat a large, wide-based pan over a medium-high heat. Once hot, cook the chicken for 4-5 min on each side or until charred and cooked through (no pink meat!). Rest for a few minutes, then slice.",
      "Chop your cucumber into half-moons and your cherry tomatoes in half. Halve, de-stone and slice your avocado[s], squeezing over a little lemon juice to keep them green.",
      "Build the lunchboxes: cooled quinoa on the bottom, then baby leaves, cucumber, tomatoes, avocado and the sliced chicken on top. Dress with olive oil, the juice of the remaining lemon, salt and pepper just before eating (or pack the dressing in a little pot). Keeps in the fridge until lunchtime. Enjoy!"
    ]
  },
  {
    id: "X-202",
    title: "Tuna & White Bean Lunchbox Salad",
    source: "Family staple",
    mealType: "lunch",
    cuisine: "Mediterranean",
    tags: ["Family staple", "Gluten-free", "Dairy-free", "2 of your 5-a-day"],
    dietary: { glutenFree: true, dairyFree: true, vegetarian: false, vegan: false },
    timeMinutes: { min: 10, max: 15 },
    fiveADay: 2,
    nutritionPerServing: {
      calories: 420, fatG: 14, satFatG: 2, carbsG: 30,
      sugarG: 6, fibreG: 10, proteinG: 40, saltG: 0.9
    },
    allergens: ["fish (tuna)"],
    staples: ["olive oil", "vinegar", "salt", "pepper"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "tuna (145g tin)",             category: "pantry",  amounts: { "2": "2",    "3": "3",    "4": "4" } },
      { name: "cannellini beans (400g tin)", category: "pantry",  amounts: { "2": "1",    "3": "1",    "4": "2" } },
      { name: "red onion",                   category: "produce", amounts: { "2": "½",    "3": "¾",    "4": "1" } },
      { name: "cherry tomatoes",             category: "produce", amounts: { "2": "150g", "3": "225g", "4": "300g" } },
      { name: "parsley",                     category: "produce", amounts: { "2": "10g",  "3": "10g",  "4": "20g" } },
      { name: "lemon",                       category: "produce", amounts: { "2": "1",    "3": "1",    "4": "1" } },
      { name: "pitted olives",               category: "pantry",  amounts: { "2": "50g",  "3": "75g",  "4": "100g" } }
    ],
    steps: [
      "Drain and rinse your cannellini beans. Drain your tuna.",
      "Peel and very finely slice your red onion. Chop your cherry tomatoes in half. Roughly chop your parsley, stalks and all. Halve your olives.",
      "Add the beans, tuna, onion, tomatoes, olives and most of the parsley to a large bowl. Dress with a generous glug of olive oil, the juice of your lemon[s], a small splash of vinegar and plenty of black pepper, then toss gently so the tuna stays in chunks.",
      "Pack into lunchboxes and scatter with the remaining parsley. It genuinely improves as it sits – the beans soak up the dressing by lunchtime. Enjoy!"
    ]
  },
  {
    id: "X-203",
    title: "Halloumi, Chickpea & Roast Pepper Salad",
    source: "Family staple",
    mealType: "lunch",
    cuisine: "Mediterranean",
    tags: ["Family staple", "Gluten-free", "Vegetarian", "3 of your 5-a-day"],
    dietary: { glutenFree: true, dairyFree: false, vegetarian: true, vegan: false },
    timeMinutes: { min: 15, max: 20 },
    fiveADay: 3,
    nutritionPerServing: {
      calories: 540, fatG: 30, satFatG: 14, carbsG: 36,
      sugarG: 9, fibreG: 10, proteinG: 28, saltG: 2.1
    },
    allergens: ["milk (halloumi)"],
    staples: ["olive oil", "salt", "pepper"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "halloumi",               category: "dairy",          amounts: { "2": "225g", "3": "1½ x 225g", "4": "2 x 225g" } },
      { name: "chickpeas (400g tin)",   category: "pantry",         amounts: { "2": "1",    "3": "1",         "4": "2" } },
      { name: "red pepper",             category: "produce",        amounts: { "2": "1",    "3": "2",         "4": "2" } },
      { name: "spinach",                category: "produce",        amounts: { "2": "80g",  "3": "120g",      "4": "160g" } },
      { name: "cucumber",               category: "produce",        amounts: { "2": "½",    "3": "¾",         "4": "1" } },
      { name: "dried oregano",          category: "herbs & spices", amounts: { "2": "1 tsp", "3": "1.5 tsp",  "4": "2 tsp" } },
      { name: "lemon",                  category: "produce",        amounts: { "2": "1",    "3": "1",         "4": "1" } }
    ],
    steps: [
      "Deseed your red pepper[s] and cut into strips. Heat a large, wide-based pan (preferably non-stick) with a drizzle of olive oil over a high heat and cook the pepper strips for 4-5 min or until softened and charring at the edges. Transfer to a large bowl.",
      "Drain and rinse your chickpeas, then add them to the empty pan with your dried oregano and a drizzle of olive oil. Cook for 3-4 min or until slightly crisped, then add to the bowl.",
      "Slice your halloumi into 1cm slabs, pat dry, and cook in the same pan for 1-2 min on each side or until deep golden. Tip: No oil needed – halloumi looks after itself.",
      "Chop your cucumber into half-moons. Add the cucumber and your spinach to the bowl, squeeze over the juice of your lemon[s], season with pepper (the halloumi brings the salt!) and toss.",
      "Top with the golden halloumi. If packing for later, keep the halloumi separate and add it at lunchtime so it stays bouncy, not squeaky. Enjoy!"
    ]
  },
  {
    id: "X-204",
    title: "Egg, Lentil & Beetroot Salad",
    source: "Family staple",
    mealType: "lunch",
    cuisine: "British",
    tags: ["Family staple", "Gluten-free", "Vegetarian", "2 of your 5-a-day"],
    dietary: { glutenFree: true, dairyFree: false, vegetarian: true, vegan: false },
    timeMinutes: { min: 15, max: 15 },
    fiveADay: 2,
    nutritionPerServing: {
      calories: 430, fatG: 20, satFatG: 7, carbsG: 30,
      sugarG: 10, fibreG: 9, proteinG: 30, saltG: 1.1
    },
    allergens: ["egg", "milk (feta)"],
    staples: ["olive oil", "vinegar", "salt", "pepper"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "egg",                        category: "dairy",   amounts: { "2": "4",    "3": "6",    "4": "8" } },
      { name: "cooked puy lentils (250g pouch)", category: "pantry", amounts: { "2": "1", "3": "1½",  "4": "2" } },
      { name: "cooked beetroot",            category: "produce", amounts: { "2": "150g", "3": "225g", "4": "300g" } },
      { name: "spinach",                    category: "produce", amounts: { "2": "80g",  "3": "120g", "4": "160g" } },
      { name: "feta",                       category: "dairy",   amounts: { "2": "60g",  "3": "90g",  "4": "120g" } }
    ],
    steps: [
      "Bring a pot of water to the boil. Gently lower in your eggs and cook for 7 min (jammy) or 9 min (hard-boiled for lunchboxes), then run under cold water and peel.",
      "Meanwhile, warm your lentils per the pouch (or use straight from the pouch – they're already cooked). Chop your cooked beetroot into bite-sized wedges.",
      "Add the lentils, beetroot and your spinach to a large bowl. Dress with olive oil, a splash of vinegar, salt and pepper and toss well.",
      "Quarter the boiled eggs and arrange on top, then crumble over your feta with a final grind of pepper. Packs beautifully – keep the eggs whole until lunchtime if travelling. Enjoy!"
    ]
  },
  {
    id: "X-205",
    title: "Smoked Mackerel, New Potato & Spinach Salad",
    source: "Family staple",
    mealType: "lunch",
    cuisine: "British",
    tags: ["Family staple", "Gluten-free", "2 of your 5-a-day"],
    dietary: { glutenFree: true, dairyFree: false, vegetarian: false, vegan: false },
    timeMinutes: { min: 20, max: 25 },
    fiveADay: 2,
    nutritionPerServing: {
      calories: 520, fatG: 32, satFatG: 7, carbsG: 32,
      sugarG: 5, fibreG: 5, proteinG: 26, saltG: 1.8
    },
    allergens: ["fish (mackerel)", "milk (yoghurt)", "mustard"],
    staples: ["olive oil", "salt", "pepper"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "smoked mackerel fillets", category: "meat & fish",    amounts: { "2": "150g",  "3": "225g",    "4": "300g" } },
      { name: "new potatoes",            category: "produce",        amounts: { "2": "300g",  "3": "450g",    "4": "600g" } },
      { name: "spinach",                 category: "produce",        amounts: { "2": "80g",   "3": "120g",    "4": "160g" } },
      { name: "radishes",                category: "produce",        amounts: { "2": "100g",  "3": "150g",    "4": "200g" } },
      { name: "natural yoghurt",         category: "dairy",          amounts: { "2": "75g",   "3": "100g",    "4": "150g" } },
      { name: "wholegrain mustard",      category: "pantry",         amounts: { "2": "1 tsp", "3": "1.5 tsp", "4": "2 tsp" } },
      { name: "lemon",                   category: "produce",        amounts: { "2": "1",     "3": "1",       "4": "1" } }
    ],
    steps: [
      "Halve your new potatoes (quarter any big ones) and add to a pot of cold, salted water. Bring to the boil and cook for 12-15 min or until a knife slides through easily, then drain and let them steam-dry.",
      "Meanwhile, mix your natural yoghurt, wholegrain mustard, half the juice of your lemon[s] and a grind of pepper in a small bowl – this is your mustard dressing.",
      "Finely slice your radishes. Peel the skin off your smoked mackerel fillets and flake the fish into big pieces, checking for bones.",
      "Toss the warm potatoes with the radishes, your spinach and half the mustard dressing (warm potatoes drink up dressing – exactly what you want).",
      "Top with the flaked mackerel, drizzle over the remaining dressing and finish with the rest of the lemon, squeezed over. Works warm now or cold from a lunchbox tomorrow. Enjoy!"
    ]
  },
  {
    id: "X-206",
    title: "Greek-Style Chicken & Feta Salad",
    source: "Family staple",
    mealType: "lunch",
    cuisine: "Greek",
    tags: ["Family staple", "Gluten-free", "3 of your 5-a-day"],
    dietary: { glutenFree: true, dairyFree: false, vegetarian: false, vegan: false },
    timeMinutes: { min: 15, max: 20 },
    fiveADay: 3,
    nutritionPerServing: {
      calories: 470, fatG: 26, satFatG: 8, carbsG: 12,
      sugarG: 9, fibreG: 5, proteinG: 44, saltG: 1.5
    },
    allergens: ["milk (feta)"],
    staples: ["olive oil", "vinegar", "salt", "pepper"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "chicken breast",  category: "meat & fish",    amounts: { "2": "300g",  "3": "450g",    "4": "600g" } },
      { name: "feta",            category: "dairy",          amounts: { "2": "100g",  "3": "150g",    "4": "200g" } },
      { name: "gem lettuce",     category: "produce",        amounts: { "2": "1",     "3": "2",       "4": "2" } },
      { name: "cucumber",        category: "produce",        amounts: { "2": "½",     "3": "¾",       "4": "1" } },
      { name: "cherry tomatoes", category: "produce",        amounts: { "2": "150g",  "3": "225g",    "4": "300g" } },
      { name: "red onion",       category: "produce",        amounts: { "2": "½",     "3": "¾",       "4": "1" } },
      { name: "pitted olives",   category: "pantry",         amounts: { "2": "50g",   "3": "75g",     "4": "100g" } },
      { name: "dried oregano",   category: "herbs & spices", amounts: { "2": "1 tsp", "3": "1.5 tsp", "4": "2 tsp" } }
    ],
    steps: [
      "Butterfly your chicken breast[s], rub with olive oil, half your dried oregano and a pinch of salt and pepper.",
      "Heat a large, wide-based pan over a medium-high heat and cook the chicken for 4-5 min on each side or until charred and cooked through (no pink meat!). Rest, then slice.",
      "Meanwhile, wash and roughly chop your gem lettuce. Chop your cucumber into chunky half-moons and your cherry tomatoes in half. Peel and very finely slice your red onion. Halve your olives.",
      "Add everything to a large bowl, dress with a generous glug of olive oil, a splash of vinegar, the remaining oregano and a grind of pepper, and toss.",
      "Top with the sliced chicken and crumble over your feta. For lunchboxes: dressing in the bottom, sturdy veg next, leaves and chicken on top – shake at lunchtime. Enjoy!"
    ]
  },
  {
    id: "X-301",
    title: "Bread Machine Wholemeal Loaf",
    source: "Family staple",
    mealType: "bake",
    cuisine: "British",
    tags: ["Family staple", "Wholemeal", "No UPF"],
    dietary: { glutenFree: false, dairyFree: false, vegetarian: true, vegan: false },
    timeMinutes: { min: 5, max: 10 },
    fiveADay: 0,
    nutritionPerServing: {
      calories: 220, fatG: 4, satFatG: 2, carbsG: 38,
      sugarG: 2, fibreG: 6, proteinG: 9, saltG: 0.6
    },
    allergens: ["gluten (wheat flour)", "milk (butter)"],
    staples: ["butter", "salt", "water"],
    servingsSupported: [2, 3, 4],
    image: null,
    ingredients: [
      { name: "strong wholemeal bread flour", category: "pantry", amounts: { "2": "500g",  "3": "500g",  "4": "500g" } },
      { name: "fast-action dried yeast (7g)", category: "pantry", amounts: { "2": "1",     "3": "1",     "4": "1" } },
      { name: "honey",                        category: "pantry", amounts: { "2": "1 tbsp", "3": "1 tbsp", "4": "1 tbsp" } },
      { name: "mixed seeds",                  category: "pantry", amounts: { "2": "30g",   "3": "30g",   "4": "30g" } }
    ],
    steps: [
      "Add 350ml lukewarm water and your honey to the bread machine pan (or follow your machine's stated order — some want dry ingredients first!).",
      "Add your strong wholemeal bread flour on top, then 25g butter in small pieces in one corner, 1.5 tsp salt in another, and your fast-action dried yeast in a well in the centre — keep the yeast away from the salt.",
      "Add your mixed seeds (or hold them back for the machine's nut/seed beep if it has one).",
      "Set the machine to its wholemeal programme, medium crust, and start. That's it — 5 minutes of effort, one 5-ingredient loaf, nothing you can't pronounce.",
      "When it's done, tip the loaf out and cool completely on a rack before slicing (patience makes it sliceable!). Keeps 2-3 days wrapped in a clean tea towel — a loaf every couple of days keeps breakfasts and lunches in fresh wholemeal bread. Enjoy!"
    ]
  }
];
