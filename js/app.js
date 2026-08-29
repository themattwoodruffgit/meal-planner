/* Meal Planner app logic. No dependencies, no build step. */
(function () {
  'use strict';

  var RECIPES = window.RECIPES || [];
  var A = window.Amounts;
  var S = window.Swaps;
  var DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var SLOTS = [
    { key: 'b', label: 'Breakfast', short: 'B' },
    { key: 'l', label: 'Lunch', short: 'L' },
    { key: 'd', label: 'Dinner', short: 'D' }
  ];
  var STORE_KEY = 'mealplanner.v1';

  function mealTypeOf(recipe) { return recipe.mealType || 'dinner'; }

  /* ---------------- state ---------------- */

  function emptyDay() { return { b: [], l: [], d: [] }; }

  var state = load() || {
    weekCommencing: nextMonday(),
    days: [emptyDay(), emptyDay(), emptyDay(), emptyDay(), emptyDay(), emptyDay(), emptyDay()],
    checked: {},                          // shopping ticks, keyed by ingredient name
    swaps: { wholemeal: false, upf: false }
  };

  function load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return null;
      var s = JSON.parse(raw);
      if (!s.days || s.days.length !== 7) return null;
      // migrate pre-slot plans: a day was a flat array of dinners
      s.days = s.days.map(function (day) {
        if (Array.isArray(day)) return { b: [], l: [], d: day };
        return { b: day.b || [], l: day.l || [], d: day.d || [] };
      });
      s.checked = s.checked || {};
      s.swaps = s.swaps || { wholemeal: false, upf: false };
      return s;
    } catch (e) { return null; }
  }

  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* private mode etc. */ }
  }

  function nextMonday() {
    var d = new Date();
    var diff = (8 - d.getDay()) % 7 || 7; // days until next Monday
    d.setDate(d.getDate() + diff);
    return d.toISOString().slice(0, 10);
  }

  /* ---------------- health rating ----------------
   * Traffic-light style heuristic per serving (fat, sat fat, sugar, salt):
   * green = 0, amber = 1, red = 2 points; total 0-8 mapped to A-E.
   * A recipe object may override with an explicit healthRating field.
   */
  var TL_BANDS = {
    fatG:    { green: 10,  red: 21 },
    satFatG: { green: 3,   red: 6 },
    sugarG:  { green: 10,  red: 27 },
    saltG:   { green: 0.9, red: 1.8 }
  };

  function trafficLight(metric, value) {
    var b = TL_BANDS[metric];
    if (value <= b.green) return 'green';
    if (value > b.red) return 'red';
    return 'amber';
  }

  function healthRating(recipe) {
    if (recipe.healthRating) return recipe.healthRating;
    var n = recipe.nutritionPerServing || {};
    var pts = 0;
    Object.keys(TL_BANDS).forEach(function (m) {
      var tl = trafficLight(m, n[m] || 0);
      pts += tl === 'red' ? 2 : tl === 'amber' ? 1 : 0;
    });
    if (pts <= 1) return 'A';
    if (pts <= 3) return 'B';
    if (pts <= 5) return 'C';
    if (pts <= 7) return 'D';
    return 'E';
  }

  function findRecipe(id) {
    for (var i = 0; i < RECIPES.length; i++) if (RECIPES[i].id === id) return RECIPES[i];
    return null;
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ---------------- planner ---------------- */

  var plannerEl = document.getElementById('planner');

  function renderPlanner() {
    plannerEl.innerHTML = '';
    var wc = state.weekCommencing ? new Date(state.weekCommencing + 'T00:00:00') : null;

    DAY_NAMES.forEach(function (dayName, dayIdx) {
      var day = document.createElement('div');
      day.className = 'day';
      day.dataset.day = dayIdx;

      var dateLabel = '';
      if (wc && !isNaN(wc)) {
        var d = new Date(wc);
        d.setDate(d.getDate() + dayIdx);
        dateLabel = d.getDate() + ' ' + d.toLocaleString('en-GB', { month: 'short' });
      }

      var head = document.createElement('div');
      head.className = 'day-head';
      head.innerHTML = '<span>' + dayName + '</span><span class="day-date">' + esc(dateLabel) + '</span>';
      day.appendChild(head);

      var body = document.createElement('div');
      body.className = 'day-body';

      SLOTS.forEach(function (slot) {
        var zone = document.createElement('div');
        zone.className = 'slot';
        zone.dataset.slot = slot.key;

        var label = document.createElement('div');
        label.className = 'slot-label';
        label.textContent = slot.label;
        zone.appendChild(label);

        var meals = state.days[dayIdx][slot.key];
        meals.forEach(function (meal, mealIdx) {
          var recipe = findRecipe(meal.recipeId);
          if (!recipe) return;
          var el = document.createElement('div');
          el.className = 'meal';

          var title = document.createElement('div');
          title.className = 'meal-title';
          title.textContent = recipe.title;
          title.title = 'View recipe';
          title.addEventListener('click', function () { openModal(recipe.id, meal.servings); });
          el.appendChild(title);

          var controls = document.createElement('div');
          controls.className = 'meal-controls';
          var sel = document.createElement('select');
          (recipe.servingsSupported || [2]).forEach(function (n) {
            var opt = document.createElement('option');
            opt.value = n;
            opt.textContent = n + ' ppl';
            if (n === meal.servings) opt.selected = true;
            sel.appendChild(opt);
          });
          sel.addEventListener('change', function () {
            meal.servings = parseInt(sel.value, 10);
            save(); renderShopping();
          });
          controls.appendChild(sel);
          el.appendChild(controls);

          var rm = document.createElement('button');
          rm.className = 'meal-remove no-print';
          rm.innerHTML = '✕';
          rm.title = 'Remove';
          rm.addEventListener('click', function () {
            state.days[dayIdx][slot.key].splice(mealIdx, 1);
            save(); renderPlanner(); renderShopping();
          });
          el.appendChild(rm);

          zone.appendChild(el);
        });

        // drag target per slot
        zone.addEventListener('dragover', function (e) { e.preventDefault(); zone.classList.add('drag-over'); });
        zone.addEventListener('dragleave', function () { zone.classList.remove('drag-over'); });
        zone.addEventListener('drop', function (e) {
          e.preventDefault();
          e.stopPropagation();
          zone.classList.remove('drag-over');
          var id = e.dataTransfer.getData('text/recipe-id');
          if (id) addToDay(dayIdx, slot.key, id);
        });

        body.appendChild(zone);
      });

      day.appendChild(body);
      plannerEl.appendChild(day);
    });

    updatePrintTitle();
  }

  function addToDay(dayIdx, slotKey, recipeId) {
    var recipe = findRecipe(recipeId);
    if (!recipe) return;
    var defaultServings = (recipe.servingsSupported && recipe.servingsSupported[0]) || 2;
    state.days[dayIdx][slotKey].push({ recipeId: recipeId, servings: defaultServings });
    save(); renderPlanner(); renderShopping();
  }

  // dropping a recipe onto its natural slot: breakfast recipes default to the
  // breakfast row via the popover; drag targets are explicit slot zones.
  function defaultSlotFor(recipe) {
    var t = mealTypeOf(recipe);
    return t === 'breakfast' ? 'b' : t === 'lunch' ? 'l' : 'd';
  }

  function updatePrintTitle() {
    var t = document.getElementById('plan-print-title');
    var s = document.getElementById('shopping-title');
    var label = 'week commencing ' + formatWC();
    t.textContent = 'Meal plan — ' + label;
    s.textContent = 'Shopping list';
    var meta = document.getElementById('shopping-meta');
    meta.dataset.week = label;
  }

  function formatWC() {
    if (!state.weekCommencing) return '…';
    var d = new Date(state.weekCommencing + 'T00:00:00');
    if (isNaN(d)) return '…';
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  /* ---------------- recipe library ---------------- */

  var gridEl = document.getElementById('recipe-grid');
  var filterEls = {
    search: document.getElementById('f-search'),
    meal: document.getElementById('f-meal'),
    cuisine: document.getElementById('f-cuisine'),
    time: document.getElementById('f-time'),
    calories: document.getElementById('f-calories'),
    health: document.getElementById('f-health'),
    gf: document.getElementById('f-gf'),
    df: document.getElementById('f-df'),
    veg: document.getElementById('f-veg'),
    sort: document.getElementById('f-sort')
  };

  function populateCuisines() {
    var seen = {};
    RECIPES.forEach(function (r) { if (r.cuisine) seen[r.cuisine] = true; });
    Object.keys(seen).sort().forEach(function (c) {
      var opt = document.createElement('option');
      opt.value = c; opt.textContent = c;
      filterEls.cuisine.appendChild(opt);
    });
  }

  function matchesFilters(r) {
    var f = filterEls;
    var q = f.search.value.trim().toLowerCase();
    if (q) {
      var hay = (r.title + ' ' + r.cuisine + ' ' + (r.tags || []).join(' ') + ' ' +
        (r.ingredients || []).map(function (i) { return i.name; }).join(' ')).toLowerCase();
      if (hay.indexOf(q) === -1) return false;
    }
    if (f.meal.value && mealTypeOf(r) !== f.meal.value) return false;
    if (f.cuisine.value && r.cuisine !== f.cuisine.value) return false;
    if (f.time.value && r.timeMinutes.max > parseInt(f.time.value, 10)) return false;
    if (f.calories.value && r.nutritionPerServing.calories > parseInt(f.calories.value, 10)) return false;
    if (f.health.value && healthRating(r) > f.health.value) return false; // letters compare alphabetically
    if (f.gf.checked && !r.dietary.glutenFree) return false;
    if (f.df.checked && !r.dietary.dairyFree) return false;
    if (f.veg.checked && !r.dietary.vegetarian) return false;
    return true;
  }

  function sortedFiltered() {
    var list = RECIPES.filter(matchesFilters);
    var key = filterEls.sort.value;
    list.sort(function (a, b) {
      if (key === 'calories') return a.nutritionPerServing.calories - b.nutritionPerServing.calories;
      if (key === 'time') return a.timeMinutes.max - b.timeMinutes.max;
      if (key === 'health') return healthRating(a) < healthRating(b) ? -1 : healthRating(a) > healthRating(b) ? 1 : 0;
      return a.title.localeCompare(b.title);
    });
    return list;
  }

  var CUISINE_EMOJI = {
    Indian: '🍛', Italian: '🍝', Mexican: '🌮', British: '🥧', Asian: '🥢',
    Chinese: '🥡', Thai: '🍜', Japanese: '🍣', Greek: '🥙', Spanish: '🥘',
    French: '🥖', American: '🍔', 'Middle Eastern': '🧆', Mediterranean: '🫒',
    Hungarian: '🍲', 'Sri Lankan': '🥥', Portuguese: '🍗', Scandinavian: '🥣', African: '🍚'
  };

  function renderRecipes() {
    var list = sortedFiltered();
    document.getElementById('recipe-count').textContent = list.length + ' of ' + RECIPES.length;
    gridEl.innerHTML = '';

    if (!list.length) {
      gridEl.innerHTML = '<div class="empty-note">No recipes match these filters.</div>';
      return;
    }

    list.forEach(function (r) {
      var card = document.createElement('div');
      card.className = 'recipe-card';
      card.draggable = true;
      card.dataset.id = r.id;

      card.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('text/recipe-id', r.id);
        e.dataTransfer.effectAllowed = 'copy';
        card.classList.add('dragging');
      });
      card.addEventListener('dragend', function () { card.classList.remove('dragging'); });

      var rating = healthRating(r);
      var photo = document.createElement('div');
      photo.className = 'recipe-photo';
      photo.innerHTML = '<span>' + (CUISINE_EMOJI[r.cuisine] || '🍽️') + '</span>' +
        '<span class="health-badge health-' + rating + '" title="Health rating ' + rating + '">' + rating + '</span>';
      // If a photo exists at images/{id}.jpg, use it (falls back silently to the emoji).
      var img = new Image();
      img.onload = function () {
        photo.insertBefore(img, photo.firstChild);
        photo.querySelector('span').classList.add('hidden');
      };
      img.src = r.image || ('images/' + r.id + '.jpg');
      card.appendChild(photo);

      var body = document.createElement('div');
      body.className = 'recipe-body';

      var title = document.createElement('div');
      title.className = 'recipe-title';
      title.textContent = r.title;
      title.addEventListener('click', function () { openModal(r.id); });
      body.appendChild(title);

      var meta = document.createElement('div');
      meta.className = 'recipe-meta';
      meta.innerHTML =
        '<span>⏱️ ' + r.timeMinutes.min + '–' + r.timeMinutes.max + ' min</span>' +
        '<span>🔥 ' + r.nutritionPerServing.calories + ' kcal</span>' +
        '<span>💪 ' + r.nutritionPerServing.proteinG + 'g protein</span>';
      body.appendChild(meta);

      var tags = document.createElement('div');
      tags.className = 'recipe-tags';
      var mealChip = mealTypeOf(r) !== 'dinner'
        ? { breakfast: '🌅 Breakfast', lunch: '🥗 Lunch', bake: '🍞 Bake' }[mealTypeOf(r)]
        : null;
      var tagList = [mealChip, r.cuisine].concat(r.tags || []);
      tagList.forEach(function (t) {
        if (!t) return;
        var el = document.createElement('span');
        el.className = 'tag';
        el.textContent = t;
        tags.appendChild(el);
      });
      body.appendChild(tags);

      var actions = document.createElement('div');
      actions.className = 'recipe-actions';
      var view = document.createElement('button');
      view.className = 'btn';
      view.textContent = 'View';
      view.addEventListener('click', function () { openModal(r.id); });
      var plan = document.createElement('button');
      plan.className = 'btn btn-primary';
      plan.textContent = '+ Plan';
      plan.addEventListener('click', function (e) { openDayPopover(e.currentTarget, r.id); });
      actions.appendChild(view);
      actions.appendChild(plan);
      body.appendChild(actions);

      card.appendChild(body);
      gridEl.appendChild(card);
    });
  }

  /* day-picker popover for "+ Plan" */
  var popover = document.getElementById('day-popover');

  function openDayPopover(anchor, recipeId) {
    popover.innerHTML = '';
    var recipe = findRecipe(recipeId);
    var naturalSlot = recipe ? defaultSlotFor(recipe) : 'd';
    DAY_NAMES.forEach(function (name, idx) {
      var row = document.createElement('div');
      row.className = 'popover-row';

      var b = document.createElement('button');
      b.textContent = name;
      b.title = 'Add to ' + name + ' ' + SLOTS.filter(function (s) { return s.key === naturalSlot; })[0].label.toLowerCase();
      b.addEventListener('click', function () {
        addToDay(idx, naturalSlot, recipeId);
        closePopover();
      });
      row.appendChild(b);

      SLOTS.forEach(function (slot) {
        var sb = document.createElement('button');
        sb.className = 'popover-slot' + (slot.key === naturalSlot ? ' natural' : '');
        sb.textContent = slot.short;
        sb.title = name + ' ' + slot.label.toLowerCase();
        sb.addEventListener('click', function () {
          addToDay(idx, slot.key, recipeId);
          closePopover();
        });
        row.appendChild(sb);
      });

      popover.appendChild(row);
    });
    var rect = anchor.getBoundingClientRect();
    popover.classList.remove('hidden');
    var top = rect.bottom + window.scrollY + 4;
    var left = Math.min(rect.left + window.scrollX, window.scrollX + document.documentElement.clientWidth - popover.offsetWidth - 8);
    popover.style.top = top + 'px';
    popover.style.left = left + 'px';
  }

  function closePopover() { popover.classList.add('hidden'); }
  document.addEventListener('click', function (e) {
    if (!popover.classList.contains('hidden') &&
        !popover.contains(e.target) && e.target.textContent !== '+ Plan') {
      closePopover();
    }
  });

  /* ---------------- modal ---------------- */

  var backdrop = document.getElementById('modal-backdrop');
  var modalBody = document.getElementById('modal-body');

  function openModal(recipeId, servings) {
    var r = findRecipe(recipeId);
    if (!r) return;
    var supported = r.servingsSupported || [2];
    var current = servings && supported.indexOf(servings) !== -1 ? servings : supported[0];
    renderModal(r, current);
    backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function renderModal(r, servings) {
    var n = r.nutritionPerServing;
    var rating = healthRating(r);

    var html = '';
    html += '<h2>' + esc(r.title) + '</h2>';
    html += '<div class="modal-sub">';
    html += '<span>' + esc(r.id) + ' · ' + esc(r.source || '') + '</span>';
    html += '<span>⏱️ ' + r.timeMinutes.min + '–' + r.timeMinutes.max + ' min</span>';
    html += '<span>' + esc(r.cuisine || '') + '</span>';
    html += '<span class="health-badge health-' + rating + '" style="position:static;display:inline-flex">' + rating + '</span>';
    html += '</div>';

    html += '<div class="nutrition">';
    html += nut('Calories', n.calories + ' kcal', null);
    html += nut('Fat', n.fatG + 'g', trafficLight('fatG', n.fatG));
    html += nut('Sat fat', n.satFatG + 'g', trafficLight('satFatG', n.satFatG));
    html += nut('Carbs', n.carbsG + 'g', null);
    html += nut('Sugar', n.sugarG + 'g', trafficLight('sugarG', n.sugarG));
    html += nut('Fibre', n.fibreG + 'g', null);
    html += nut('Protein', n.proteinG + 'g', null);
    html += nut('Salt', n.saltG + 'g', trafficLight('saltG', n.saltG));
    html += '</div>';

    html += '<div class="serving-toggle">';
    (r.servingsSupported || [2]).forEach(function (s) {
      html += '<button data-servings="' + s + '" class="' + (s === servings ? 'active' : '') + '">' + s + ' people</button>';
    });
    html += '</div>';

    html += '<div class="modal-cols">';

    html += '<div><h3>Ingredients</h3><table class="ing-table">';
    (r.ingredients || []).forEach(function (ing) {
      var amt = (ing.amounts && ing.amounts[String(servings)]) || '';
      html += '<tr><td class="ing-name">' + esc(ing.name) + '</td><td>' + (amt ? esc(amt) : '–') + '</td></tr>';
    });
    html += '</table>';
    if (r.staples && r.staples.length) {
      html += '<p class="staples"><strong>You need:</strong> ' + esc(r.staples.join(', ')) + '</p>';
    }
    html += '<p class="staples"><strong>Allergens:</strong> ' + esc(r.allergens && r.allergens.length ? r.allergens.join(', ') : 'none') + '</p>';
    html += '</div>';

    html += '<div><h3>Method <span style="font-weight:400;color:var(--muted);font-size:.8rem">(quantities in [brackets] are for 3 / 4 people)</span></h3><ol class="steps">';
    (r.steps || []).forEach(function (s) { html += '<li>' + esc(s) + '</li>'; });
    html += '</ol></div>';

    html += '</div>';

    modalBody.innerHTML = html;
    modalBody.querySelectorAll('.serving-toggle button').forEach(function (b) {
      b.addEventListener('click', function () {
        renderModal(r, parseInt(b.dataset.servings, 10));
      });
    });
  }

  function nut(label, value, tl) {
    return '<div class="nut' + (tl ? ' tl-' + tl : '') + '">' + label + '<b>' + value + '</b></div>';
  }

  function closeModal() {
    backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }
  document.getElementById('modal-close').addEventListener('click', closeModal);
  backdrop.addEventListener('click', function (e) { if (e.target === backdrop) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeModal(); closePopover(); } });

  /* ---------------- shopping list ---------------- */

  var CATEGORY_ORDER = ['produce', 'meat & fish', 'dairy', 'bakery', 'frozen', 'pantry', 'herbs & spices', 'other'];
  var shoppingEl = document.getElementById('shopping-list');
  var staplesEl = document.getElementById('staples');
  var metaEl = document.getElementById('shopping-meta');

  function plannedMeals() {
    var meals = [];
    state.days.forEach(function (day, dayIdx) {
      SLOTS.forEach(function (slot) {
        day[slot.key].forEach(function (m) {
          var r = findRecipe(m.recipeId);
          if (r) meals.push({ recipe: r, servings: m.servings, dayIdx: dayIdx, slot: slot.key });
        });
      });
    });
    return meals;
  }

  function buildShoppingItems(meals) {
    var items = [];
    meals.forEach(function (m) {
      (m.recipe.ingredients || []).forEach(function (ing) {
        var amt = ing.amounts ? ing.amounts[String(m.servings)] : '';
        items.push({ name: ing.name, category: ing.category, amountStr: amt || '' });
      });
    });
    return A.aggregate(items).filter(function (row) {
      return row.parts.length || row.unparsed.length;
    });
  }

  function renderShopping() {
    var meals = plannedMeals();
    updatePrintTitle();

    if (!meals.length) {
      metaEl.textContent = '';
      shoppingEl.innerHTML = '<div class="shopping-empty">Plan some meals above and the combined shopping list will appear here.</div>';
      shoppingEl.classList.remove('shopping-list');
      staplesEl.innerHTML = '';
      return;
    }
    shoppingEl.classList.add('shopping-list');

    var totalPlates = meals.reduce(function (sum, m) { return sum + m.servings; }, 0);
    metaEl.textContent = metaEl.dataset.week + ' · ' + meals.length + ' meal' + (meals.length === 1 ? '' : 's') +
      ' · ' + totalPlates + ' plates: ' +
      meals.map(function (m) { return m.recipe.title + ' (' + m.servings + ')'; }).join(' · ');

    var rows = buildShoppingItems(meals);

    // group by category
    var groups = {};
    rows.forEach(function (row) {
      var cat = CATEGORY_ORDER.indexOf(row.category) !== -1 ? row.category : 'other';
      (groups[cat] = groups[cat] || []).push(row);
    });

    shoppingEl.innerHTML = '';
    CATEGORY_ORDER.forEach(function (cat) {
      if (!groups[cat]) return;
      var g = document.createElement('div');
      g.className = 'shop-group';
      g.innerHTML = '<h3>' + esc(cat) + '</h3>';
      groups[cat].sort(function (a, b) { return a.name.localeCompare(b.name); });
      groups[cat].forEach(function (row) {
        var key = row.name.toLowerCase(); // tick state keys on the ORIGINAL name so toggling swaps keeps ticks
        var swap = S.apply(row.name, state.swaps);
        var item = document.createElement('div');
        item.className = 'shop-item' + (state.checked[key] ? ' checked' : '') + (swap.swappedFrom ? ' swapped' : '');
        var qty = A.formatParts(row.parts, row.unparsed);
        item.innerHTML =
          '<label><input type="checkbox"' + (state.checked[key] ? ' checked' : '') + '>' +
          '<span class="shop-name">' + esc(swap.name) +
          (swap.swappedFrom ? '<span class="swap-note">instead of ' + esc(swap.swappedFrom) + '</span>' : '') +
          '</span>' +
          '<span class="shop-qty">' + esc(qty) + '</span></label>';
        item.querySelector('input').addEventListener('change', function (e) {
          state.checked[key] = e.target.checked;
          if (!e.target.checked) delete state.checked[key];
          item.classList.toggle('checked', e.target.checked);
          save();
        });
        g.appendChild(item);
      });
      shoppingEl.appendChild(g);
    });

    // pantry staples across all planned recipes
    var staples = {};
    meals.forEach(function (m) { (m.recipe.staples || []).forEach(function (s) { staples[s] = true; }); });
    var list = Object.keys(staples).sort();
    staplesEl.innerHTML = list.length
      ? '<strong>Check your cupboard:</strong> ' + esc(list.join(', '))
      : '';

    renderAnalysis(meals);
  }

  /* ---------------- week nutrition analysis ----------------
   * All values are per person per day: nutritionPerServing is per person, so a
   * day's intake is simply the sum across that day's planned meals.
   * Targets (tweakable): protein-heavy >= 90g/day, carb-light <= 200g/day.
   */
  var TARGET_PROTEIN = 90;
  var TARGET_CARBS = 200;
  var analysisEl = document.getElementById('analysis');

  function renderAnalysis(meals) {
    if (!meals.length) {
      analysisEl.innerHTML = '<div class="shopping-empty no-print">Plan some meals and the week’s nutrition picture will appear here.</div>';
      return;
    }

    var days = state.days.map(function (day, i) {
      var t = { kcal: 0, protein: 0, carbs: 0, fibre: 0, count: 0, slots: { b: 0, l: 0, d: 0 } };
      SLOTS.forEach(function (slot) {
        day[slot.key].forEach(function (m) {
          var r = findRecipe(m.recipeId);
          if (!r || mealTypeOf(r) === 'bake') { if (r) t.slots[slot.key]++; return; } // a loaf isn't a meal
          var n = r.nutritionPerServing;
          t.kcal += n.calories; t.protein += n.proteinG; t.carbs += n.carbsG; t.fibre += n.fibreG || 0;
          t.count++; t.slots[slot.key]++;
        });
      });
      return t;
    });

    var html = '<table class="analysis-table"><tr><th></th>';
    DAY_NAMES.forEach(function (d) { html += '<th>' + d.slice(0, 3) + '</th>'; });
    html += '</tr>';

    function row(label, fmt, cls) {
      html += '<tr><td>' + label + '</td>';
      days.forEach(function (t) {
        var out = t.count ? fmt(t) : '–';
        var c = t.count && cls ? cls(t) : '';
        html += '<td class="' + c + '">' + out + '</td>';
      });
      html += '</tr>';
    }

    row('Meals', function (t) {
      return ['b', 'l', 'd'].map(function (k) { return t.slots[k] ? '✓' : '·'; }).join(' ');
    });
    row('kcal', function (t) { return Math.round(t.kcal); });
    row('Protein', function (t) { return Math.round(t.protein) + 'g'; },
      function (t) { return t.protein >= TARGET_PROTEIN ? 'good' : 'warn'; });
    row('Carbs', function (t) { return Math.round(t.carbs) + 'g'; },
      function (t) { return t.carbs <= TARGET_CARBS ? 'good' : 'warn'; });
    html += '</table>';

    // week roll-up
    var planned = days.filter(function (t) { return t.count; });
    var avg = function (k) {
      return Math.round(planned.reduce(function (s, t) { return s + t[k]; }, 0) / planned.length);
    };

    // vegetable variety: distinct produce-category ingredients across the planned week
    var veg = {};
    var titleCount = {};
    meals.forEach(function (m) {
      titleCount[m.recipe.title] = (titleCount[m.recipe.title] || 0) + 1;
      (m.recipe.ingredients || []).forEach(function (ing) {
        if (ing.category === 'produce') veg[ing.name.toLowerCase().replace(/\s*\(.*\)$/, '')] = true;
      });
    });
    var vegCount = Object.keys(veg).length;
    var repeats = Object.keys(titleCount).filter(function (t) { return titleCount[t] > 1; });

    html += '<div class="analysis-summary">';
    html += '<span><b>' + avg('kcal') + '</b> kcal avg/day</span>';
    html += '<span class="' + (avg('protein') >= TARGET_PROTEIN ? 'good' : 'warn') + '"><b>' + avg('protein') + 'g</b> protein avg/day (target ≥ ' + TARGET_PROTEIN + 'g)</span>';
    html += '<span class="' + (avg('carbs') <= TARGET_CARBS ? 'good' : 'warn') + '"><b>' + avg('carbs') + 'g</b> carbs avg/day (target ≤ ' + TARGET_CARBS + 'g)</span>';
    html += '<span class="' + (vegCount >= 15 ? 'good' : '') + '"><b>' + vegCount + '</b> different vegetables &amp; fruits this week</span>';
    if (repeats.length) {
      html += '<span class="warn">Repeated: ' + esc(repeats.map(function (t) { return t + ' ×' + titleCount[t]; }).join(', ')) + '</span>';
    }
    html += '</div>';

    analysisEl.innerHTML = html;
  }

  function shoppingAsText() {
    var meals = plannedMeals();
    var lines = ['Shopping list — ' + metaEl.dataset.week, ''];
    var rows = buildShoppingItems(meals);
    var groups = {};
    rows.forEach(function (row) {
      var cat = CATEGORY_ORDER.indexOf(row.category) !== -1 ? row.category : 'other';
      (groups[cat] = groups[cat] || []).push(row);
    });
    if (state.swaps.wholemeal || state.swaps.upf) {
      lines.push('Swaps on: ' +
        [state.swaps.wholemeal ? 'wholemeal carbs' : null, state.swaps.upf ? 'UPF swapped out' : null]
          .filter(Boolean).join(', '));
      lines.push('');
    }
    CATEGORY_ORDER.forEach(function (cat) {
      if (!groups[cat]) return;
      lines.push(cat.toUpperCase());
      groups[cat].sort(function (a, b) { return a.name.localeCompare(b.name); });
      groups[cat].forEach(function (row) {
        var swap = S.apply(row.name, state.swaps);
        lines.push('  [ ] ' + swap.name + ' — ' + A.formatParts(row.parts, row.unparsed) +
          (swap.swappedFrom ? ' (instead of ' + swap.swappedFrom + ')' : ''));
      });
      lines.push('');
    });
    var staples = {};
    meals.forEach(function (m) { (m.recipe.staples || []).forEach(function (s) { staples[s] = true; }); });
    var st = Object.keys(staples).sort();
    if (st.length) lines.push('Check your cupboard: ' + st.join(', '));
    return lines.join('\n');
  }

  /* ---------------- top bar wiring ---------------- */

  var wcInput = document.getElementById('week-commencing');
  wcInput.value = state.weekCommencing || '';
  wcInput.addEventListener('change', function () {
    state.weekCommencing = wcInput.value;
    save(); renderPlanner(); renderShopping();
  });

  document.getElementById('clear-week').addEventListener('click', function () {
    if (!confirm('Clear all planned meals for this week?')) return;
    state.days = [[], [], [], [], [], [], []];
    state.checked = {};
    save(); renderPlanner(); renderShopping();
  });

  function printSection(cls) {
    document.body.classList.add(cls);
    window.print();
  }
  window.addEventListener('afterprint', function () {
    document.body.classList.remove('print-plan', 'print-list');
  });
  document.getElementById('print-plan').addEventListener('click', function () { printSection('print-plan'); });
  document.getElementById('print-list').addEventListener('click', function () { printSection('print-list'); });

  document.getElementById('copy-list').addEventListener('click', function () {
    var text = shoppingAsText();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        flashButton('copy-list', '✓ Copied');
      }, function () { fallbackCopy(text); });
    } else { fallbackCopy(text); }
  });

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); flashButton('copy-list', '✓ Copied'); } catch (e) {}
    document.body.removeChild(ta);
  }

  function flashButton(id, label) {
    var b = document.getElementById(id);
    var old = b.textContent;
    b.textContent = label;
    setTimeout(function () { b.textContent = old; }, 1400);
  }

  document.getElementById('uncheck-all').addEventListener('click', function () {
    state.checked = {};
    save(); renderShopping();
  });

  /* healthier-swap toggles */
  var swapWholemeal = document.getElementById('swap-wholemeal');
  var swapUpf = document.getElementById('swap-upf');
  swapWholemeal.checked = state.swaps.wholemeal;
  swapUpf.checked = state.swaps.upf;
  swapWholemeal.addEventListener('change', function () {
    state.swaps.wholemeal = swapWholemeal.checked;
    save(); renderShopping();
  });
  swapUpf.addEventListener('change', function () {
    state.swaps.upf = swapUpf.checked;
    save(); renderShopping();
  });

  /* filters wiring */
  Object.keys(filterEls).forEach(function (k) {
    var el = filterEls[k];
    el.addEventListener(el.type === 'search' ? 'input' : 'change', renderRecipes);
  });
  document.getElementById('f-clear').addEventListener('click', function () {
    filterEls.search.value = '';
    filterEls.meal.value = '';
    filterEls.cuisine.value = '';
    filterEls.time.value = '';
    filterEls.calories.value = '';
    filterEls.health.value = '';
    filterEls.gf.checked = filterEls.df.checked = filterEls.veg.checked = false;
    filterEls.sort.value = 'title';
    renderRecipes();
  });

  /* ---------------- init ---------------- */
  populateCuisines();
  renderPlanner();
  renderRecipes();
  renderShopping();
})();
