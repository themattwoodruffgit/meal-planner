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

  function freshDays() {
    return [emptyDay(), emptyDay(), emptyDay(), emptyDay(), emptyDay(), emptyDay(), emptyDay()];
  }

  var state = load() || {
    weekCommencing: nextMonday(),
    weeks: {},                            // weekCommencing ISO -> {days: [7 x {b,l,d}], checked: {}}
    swaps: { wholemeal: false, upf: false },
    extras: [],                           // user-added shop items: {name, qty} (shared across weeks)
    ratings: {}                           // this device's star ratings: recipeId -> 1-5
  };

  // the currently selected week's plan (each week-commencing date keeps its own)
  function wk() {
    var key = state.weekCommencing || nextMonday();
    if (!state.weeks[key]) state.weeks[key] = { days: freshDays(), checked: {} };
    return state.weeks[key];
  }

  function migrateDays(days) {
    return days.map(function (day) {
      if (Array.isArray(day)) return { b: [], l: [], d: day }; // pre-slot plans were flat dinner arrays
      return { b: day.b || [], l: day.l || [], d: day.d || [] };
    });
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return null;
      var s = JSON.parse(raw);
      if (!s.weeks) {
        // migrate single-plan format: {days, checked} -> weeks keyed by weekCommencing
        if (!s.days || s.days.length !== 7) return null;
        s.weeks = {};
        s.weeks[s.weekCommencing || nextMonday()] = {
          days: migrateDays(s.days),
          checked: s.checked || {}
        };
        delete s.days;
        delete s.checked;
      } else {
        Object.keys(s.weeks).forEach(function (k) {
          s.weeks[k].days = migrateDays(s.weeks[k].days || []);
          if (s.weeks[k].days.length !== 7) s.weeks[k].days = freshDays();
          s.weeks[k].checked = s.weeks[k].checked || {};
        });
      }
      s.weekCommencing = s.weekCommencing || nextMonday();
      s.swaps = s.swaps || { wholemeal: false, upf: false };
      s.extras = s.extras || [];
      s.ratings = s.ratings || {};
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

  /* ---------------- ratings ----------------
   * Two layers: FAMILY_RATINGS (shared, ships with the site, keyed per person)
   * and state.ratings (this device's own stars). avgRating blends them all.
   */
  var FAMILY = window.FAMILY_RATINGS || {};

  function ratingVoices(recipeId) {
    var voices = [];
    var fam = FAMILY[recipeId] || {};
    Object.keys(fam).forEach(function (person) {
      voices.push({ who: person, stars: fam[person] });
    });
    if (state.ratings[recipeId]) voices.push({ who: 'You', stars: state.ratings[recipeId] });
    return voices;
  }

  function avgRating(recipeId) {
    var voices = ratingVoices(recipeId);
    if (!voices.length) return null;
    var sum = voices.reduce(function (s, v) { return s + v.stars; }, 0);
    return Math.round((sum / voices.length) * 10) / 10;
  }

  function setRating(recipeId, stars) {
    if (state.ratings[recipeId] === stars) delete state.ratings[recipeId]; // tap again to clear
    else state.ratings[recipeId] = stars;
    save();
  }

  // interactive 5-star row showing this device's rating
  function buildStars(recipeId, onChange) {
    var wrap = document.createElement('div');
    wrap.className = 'stars';
    function paint() {
      var own = state.ratings[recipeId] || 0;
      wrap.querySelectorAll('button').forEach(function (b, i) {
        b.classList.toggle('on', i < own);
      });
    }
    for (var i = 1; i <= 5; i++) {
      (function (n) {
        var b = document.createElement('button');
        b.type = 'button';
        b.textContent = '★';
        b.title = 'Rate ' + n + '/5' + (n === 1 ? ' (tap your current rating again to clear)' : '');
        b.addEventListener('click', function (e) {
          e.stopPropagation();
          setRating(recipeId, n);
          paint();
          if (onChange) onChange();
        });
        wrap.appendChild(b);
      })(i);
    }
    paint();
    return wrap;
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

        var meals = wk().days[dayIdx][slot.key];

        var label = document.createElement('div');
        label.className = 'slot-label';
        label.textContent = slot.label;
        if (!meals.length) {
          var skip = document.createElement('button');
          skip.className = 'slot-skip no-print';
          skip.textContent = '–';
          skip.title = 'Mark ' + slot.label.toLowerCase() + ' as not needed (eating out, leftovers…)';
          skip.addEventListener('click', function () {
            wk().days[dayIdx][slot.key].push({ placeholder: true });
            save(); renderPlanner(); renderShopping();
          });
          label.appendChild(skip);
        }
        zone.appendChild(label);

        meals.forEach(function (meal, mealIdx) {
          if (meal.placeholder) {
            var ph = document.createElement('div');
            ph.className = 'meal placeholder';
            var phTitle = document.createElement('div');
            phTitle.className = 'meal-title';
            phTitle.textContent = meal.note || 'Not needed';
            phTitle.title = 'Click to add a note (e.g. "Out in London")';
            phTitle.addEventListener('click', function () {
              var note = prompt('Note for this slot (e.g. "Out in London"):', meal.note || '');
              if (note !== null) {
                meal.note = note.trim();
                save(); renderPlanner();
              }
            });
            ph.appendChild(phTitle);
            var phRm = document.createElement('button');
            phRm.className = 'meal-remove no-print';
            phRm.innerHTML = '✕';
            phRm.title = 'Remove';
            phRm.addEventListener('click', function () {
              wk().days[dayIdx][slot.key].splice(mealIdx, 1);
              save(); renderPlanner(); renderShopping();
            });
            ph.appendChild(phRm);
            zone.appendChild(ph);
            return;
          }
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
            wk().days[dayIdx][slot.key].splice(mealIdx, 1);
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
    wk().days[dayIdx][slotKey].push({ recipeId: recipeId, servings: defaultServings });
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
    rating: document.getElementById('f-rating'),
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
    if (f.rating.value) {
      var avg = avgRating(r.id);
      if (f.rating.value === 'unrated') { if (avg !== null) return false; }
      else if (avg === null || avg < parseFloat(f.rating.value)) return false;
    }
    if (f.gf.checked && !r.dietary.glutenFree) return false;
    if (f.df.checked && !r.dietary.dairyFree) return false;
    if (f.veg.checked && !r.dietary.vegetarian) return false;
    return true;
  }

  function sortedFiltered() {
    var list = RECIPES.filter(matchesFilters);
    var key = filterEls.sort.value;
    list.sort(function (a, b) {
      if (key === 'rating') {
        var ra = avgRating(a.id), rb = avgRating(b.id);
        if (ra === null && rb === null) return a.title.localeCompare(b.title);
        if (ra === null) return 1;
        if (rb === null) return -1;
        return rb - ra;
      }
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

      var ratingRow = document.createElement('div');
      ratingRow.className = 'rating-row';
      var famAvg = document.createElement('span');
      famAvg.className = 'fam-avg';
      function paintAvg() {
        var avg = avgRating(r.id);
        var n = ratingVoices(r.id).length;
        famAvg.textContent = avg === null ? 'not rated yet' : '★ ' + avg + ' (' + n + ')';
        famAvg.classList.toggle('has-rating', avg !== null);
      }
      ratingRow.appendChild(buildStars(r.id, paintAvg));
      ratingRow.appendChild(famAvg);
      paintAvg();
      body.appendChild(ratingRow);

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
    function plannedTitles(dayIdx, slotKey) {
      return wk().days[dayIdx][slotKey].map(function (m) {
        if (m.placeholder) return m.note || 'not needed';
        var rec = findRecipe(m.recipeId);
        return rec ? rec.title : null;
      }).filter(Boolean);
    }

    DAY_NAMES.forEach(function (name, idx) {
      var row = document.createElement('div');
      row.className = 'popover-row';

      var naturalPlanned = plannedTitles(idx, naturalSlot);
      var naturalLabel = SLOTS.filter(function (s) { return s.key === naturalSlot; })[0].label.toLowerCase();
      var b = document.createElement('button');
      b.textContent = name;
      b.title = 'Add to ' + name + ' ' + naturalLabel +
        (naturalPlanned.length ? ' (already planned: ' + naturalPlanned.join(', ') + ')' : ' (empty)');
      b.addEventListener('click', function () {
        addToDay(idx, naturalSlot, recipeId);
        closePopover();
      });
      row.appendChild(b);

      SLOTS.forEach(function (slot) {
        var planned = plannedTitles(idx, slot.key);
        var sb = document.createElement('button');
        sb.className = 'popover-slot' +
          (slot.key === naturalSlot ? ' natural' : '') +
          (planned.length ? ' filled' : '');
        sb.textContent = slot.short;
        sb.title = name + ' ' + slot.label.toLowerCase() +
          (planned.length ? ' — already planned: ' + planned.join(', ') : ' — empty');
        sb.addEventListener('click', function () {
          addToDay(idx, slot.key, recipeId);
          closePopover();
        });
        row.appendChild(sb);
      });

      popover.appendChild(row);
    });

    var legend = document.createElement('div');
    legend.className = 'popover-legend';
    legend.textContent = 'shaded = already planned';
    popover.appendChild(legend);
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

    var voices = ratingVoices(r.id);
    html += '<div class="modal-rating"><span class="modal-rating-label">Rate it:</span><span id="modal-stars"></span>';
    if (voices.length) {
      html += '<span class="fam-avg has-rating">★ ' + avgRating(r.id) + ' — ' +
        voices.map(function (v) { return esc(v.who) + ' ★' + v.stars; }).join(' · ') + '</span>';
    }
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
    var starMount = modalBody.querySelector('#modal-stars');
    if (starMount) {
      starMount.appendChild(buildStars(r.id, function () {
        renderModal(r, servings);
        renderRecipes();
      }));
    }
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
    wk().days.forEach(function (day, dayIdx) {
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

    if (!meals.length && !state.extras.length) {
      metaEl.textContent = '';
      shoppingEl.innerHTML = '<div class="shopping-empty">Plan some meals above — or add your own items — and the shopping list will appear here.</div>';
      shoppingEl.classList.remove('shopping-list');
      staplesEl.innerHTML = '';
      renderAnalysis(meals);
      return;
    }
    shoppingEl.classList.add('shopping-list');

    if (meals.length) {
      var totalPlates = meals.reduce(function (sum, m) { return sum + m.servings; }, 0);
      metaEl.textContent = metaEl.dataset.week + ' · ' + meals.length + ' meal' + (meals.length === 1 ? '' : 's') +
        ' · ' + totalPlates + ' plates: ' +
        meals.map(function (m) { return m.recipe.title + ' (' + m.servings + ')'; }).join(' · ');
    } else {
      metaEl.textContent = metaEl.dataset.week + ' · no meals planned yet — extras only';
    }

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
        item.className = 'shop-item' + (wk().checked[key] ? ' checked' : '') + (swap.swappedFrom ? ' swapped' : '');
        var qty = A.formatParts(row.parts, row.unparsed);
        item.innerHTML =
          '<label><input type="checkbox"' + (wk().checked[key] ? ' checked' : '') + '>' +
          '<span class="shop-name">' + esc(swap.name) +
          (swap.swappedFrom ? '<span class="swap-note">instead of ' + esc(swap.swappedFrom) + '</span>' : '') +
          '</span>' +
          '<span class="shop-qty">' + esc(qty) + '</span></label>';
        item.querySelector('input').addEventListener('change', function (e) {
          wk().checked[key] = e.target.checked;
          if (!e.target.checked) delete wk().checked[key];
          item.classList.toggle('checked', e.target.checked);
          save();
        });
        g.appendChild(item);
      });
      shoppingEl.appendChild(g);
    });

    // user-added extras (store cupboard, drinks, household bits)
    if (state.extras.length) {
      var xg = document.createElement('div');
      xg.className = 'shop-group';
      xg.innerHTML = '<h3>your extras</h3>';
      state.extras.forEach(function (extra, idx) {
        var key = 'extra:' + extra.name.toLowerCase();
        var swap = S.apply(extra.name, state.swaps);
        var item = document.createElement('div');
        item.className = 'shop-item' + (wk().checked[key] ? ' checked' : '') + (swap.swappedFrom ? ' swapped' : '');
        item.innerHTML =
          '<label><input type="checkbox"' + (wk().checked[key] ? ' checked' : '') + '>' +
          '<span class="shop-name">' + esc(swap.name) +
          (swap.swappedFrom ? '<span class="swap-note">instead of ' + esc(swap.swappedFrom) + '</span>' : '') +
          '</span>' +
          (extra.qty ? '<span class="shop-qty">' + esc(extra.qty) + '</span>' : '') +
          '</label>' +
          '<button class="extra-remove no-print" title="Remove item">✕</button>';
        item.querySelector('input').addEventListener('change', function (e) {
          wk().checked[key] = e.target.checked;
          if (!e.target.checked) delete wk().checked[key];
          item.classList.toggle('checked', e.target.checked);
          save();
        });
        item.querySelector('.extra-remove').addEventListener('click', function () {
          state.extras.splice(idx, 1);
          delete wk().checked[key];
          save(); renderShopping();
        });
        xg.appendChild(item);
      });
      shoppingEl.appendChild(xg);
    }

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

    var days = wk().days.map(function (day, i) {
      var t = { kcal: 0, protein: 0, carbs: 0, fibre: 0, count: 0, slots: { b: 0, l: 0, d: 0 }, skips: { b: 0, l: 0, d: 0 } };
      SLOTS.forEach(function (slot) {
        day[slot.key].forEach(function (m) {
          if (m.placeholder) { t.skips[slot.key]++; return; } // deliberately not needed (eating out etc.)
          var r = findRecipe(m.recipeId);
          if (!r || mealTypeOf(r) === 'bake') { if (r) t.slots[slot.key]++; return; } // a loaf isn't a meal
          var n = r.nutritionPerServing;
          t.kcal += n.calories; t.protein += n.proteinG; t.carbs += n.carbsG; t.fibre += n.fibreG || 0;
          t.count++; t.slots[slot.key]++;
        });
      });
      t.hasAny = t.count > 0 || (t.slots.b + t.slots.l + t.slots.d + t.skips.b + t.skips.l + t.skips.d) > 0;
      return t;
    });

    var html = '<table class="analysis-table"><tr><th></th>';
    DAY_NAMES.forEach(function (d) { html += '<th>' + d.slice(0, 3) + '</th>'; });
    html += '</tr>';

    function row(label, fmt, cls, showWhenAny) {
      html += '<tr><td>' + label + '</td>';
      days.forEach(function (t) {
        var show = showWhenAny ? t.hasAny : t.count;
        var out = show ? fmt(t) : '–';
        var c = t.count && cls ? cls(t) : '';
        html += '<td class="' + c + '">' + out + '</td>';
      });
      html += '</tr>';
    }

    // ✓ planned · – deliberately skipped · · unplanned
    row('Meals', function (t) {
      return ['b', 'l', 'd'].map(function (k) {
        return t.slots[k] ? '✓' : (t.skips[k] ? '–' : '·');
      }).join(' ');
    }, null, true);
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
    if (state.extras.length) {
      lines.push('YOUR EXTRAS');
      state.extras.forEach(function (extra) {
        var swap = S.apply(extra.name, state.swaps);
        lines.push('  [ ] ' + swap.name + (extra.qty ? ' — ' + extra.qty : '') +
          (swap.swappedFrom ? ' (instead of ' + swap.swappedFrom + ')' : ''));
      });
      lines.push('');
    }
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
    if (!confirm('Clear all planned meals and ticks for this week? (Your extras are kept.)')) return;
    state.weeks[state.weekCommencing] = { days: freshDays(), checked: {} };
    save(); renderPlanner(); renderShopping();
  });

  /* ---------------- shared plan links ----------------
   * Plans are per-device (no backend), so sharing works by packing the week's
   * plan into a URL fragment. Opening the link on another device imports it.
   */
  function encodePlanLink() {
    var payload = { v: 1, wc: state.weekCommencing, days: wk().days, extras: state.extras };
    var json = JSON.stringify(payload);
    var b64 = btoa(unescape(encodeURIComponent(json)))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    return location.origin + location.pathname + '#plan=' + b64;
  }

  function tryImportPlanFromHash() {
    var m = location.hash.match(/^#plan=([A-Za-z0-9_-]+)$/);
    if (!m) return;
    try {
      var json = decodeURIComponent(escape(atob(m[1].replace(/-/g, '+').replace(/_/g, '/'))));
      var p = JSON.parse(json);
      if (p.v !== 1 || !p.wc || !Array.isArray(p.days) || p.days.length !== 7) throw new Error('bad payload');
      var ok = confirm('Import the shared meal plan for week commencing ' + p.wc + '? This replaces that week\'s plan on this device.');
      if (ok) {
        state.weeks[p.wc] = { days: migrateDays(p.days), checked: {} };
        state.weekCommencing = p.wc;
        (p.extras || []).forEach(function (x) {
          if (x && x.name && !state.extras.some(function (e) { return e.name.toLowerCase() === x.name.toLowerCase(); })) {
            state.extras.push({ name: String(x.name), qty: String(x.qty || '') });
          }
        });
        wcInput.value = state.weekCommencing;
        save();
      }
    } catch (e) {
      alert('Sorry — that plan link could not be read.');
    }
    history.replaceState(null, '', location.pathname);
  }

  document.getElementById('share-plan').addEventListener('click', function () {
    var url = encodePlanLink();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () {
        flashButton('share-plan', '✓ Link copied — WhatsApp it');
      }, function () { fallbackCopy(url, 'share-plan'); });
    } else { fallbackCopy(url, 'share-plan'); }
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

  document.getElementById('copy-ratings').addEventListener('click', function () {
    var ids = Object.keys(state.ratings);
    if (!ids.length) { flashButton('copy-ratings', 'Nothing rated yet'); return; }
    var lines = ['My meal ratings — ' + new Date().toLocaleDateString('en-GB')];
    ids.forEach(function (id) {
      var r = findRecipe(id);
      if (r) lines.push(id + ' · ' + r.title + ' · ' + state.ratings[id] + '/5');
    });
    lines.push('', '(WhatsApp this to Matt to add it to the family ratings)');
    var text = lines.join('\n');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        flashButton('copy-ratings', '✓ Copied — WhatsApp it over');
      }, function () { fallbackCopy(text); });
    } else { fallbackCopy(text); }
  });

  document.getElementById('copy-list').addEventListener('click', function () {
    var text = shoppingAsText();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        flashButton('copy-list', '✓ Copied');
      }, function () { fallbackCopy(text); });
    } else { fallbackCopy(text); }
  });

  function fallbackCopy(text, btnId) {
    var ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); flashButton(btnId || 'copy-list', '✓ Copied'); } catch (e) {}
    document.body.removeChild(ta);
  }

  function flashButton(id, label) {
    var b = document.getElementById(id);
    var old = b.textContent;
    b.textContent = label;
    setTimeout(function () { b.textContent = old; }, 1400);
  }

  document.getElementById('uncheck-all').addEventListener('click', function () {
    wk().checked = {};
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

  /* quick-add extra shop items (inline form + mobile floating button) */
  function addExtraFrom(nameEl, qtyEl, feedback) {
    var name = nameEl.value.trim();
    if (!name) { nameEl.focus(); return; }
    state.extras.push({ name: name, qty: qtyEl.value.trim() });
    nameEl.value = '';
    qtyEl.value = '';
    nameEl.focus();
    save(); renderShopping();
    if (feedback) feedback();
  }

  var extraName = document.getElementById('extra-name');
  var extraQty = document.getElementById('extra-qty');
  document.getElementById('extra-add-btn').addEventListener('click', function () { addExtraFrom(extraName, extraQty); });
  [extraName, extraQty].forEach(function (el) {
    el.addEventListener('keydown', function (e) { if (e.key === 'Enter') addExtraFrom(extraName, extraQty); });
  });

  var fabPanel = document.getElementById('fab-panel');
  var fabName = document.getElementById('fab-name');
  var fabQty = document.getElementById('fab-qty');
  function fabFeedback() {
    var b = document.getElementById('fab-add-btn');
    var old = b.textContent;
    b.textContent = '✓ Added';
    setTimeout(function () { b.textContent = old; }, 900);
  }
  document.getElementById('fab-add').addEventListener('click', function () {
    fabPanel.classList.toggle('hidden');
    if (!fabPanel.classList.contains('hidden')) fabName.focus();
  });
  document.getElementById('fab-close').addEventListener('click', function () { fabPanel.classList.add('hidden'); });
  document.getElementById('fab-add-btn').addEventListener('click', function () { addExtraFrom(fabName, fabQty, fabFeedback); });
  [fabName, fabQty].forEach(function (el) {
    el.addEventListener('keydown', function (e) { if (e.key === 'Enter') addExtraFrom(fabName, fabQty, fabFeedback); });
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
    filterEls.rating.value = '';
    filterEls.gf.checked = filterEls.df.checked = filterEls.veg.checked = false;
    filterEls.sort.value = 'title';
    renderRecipes();
  });

  /* ---------------- init ---------------- */
  tryImportPlanFromHash();
  populateCuisines();
  renderPlanner();
  renderRecipes();
  renderShopping();
})();
