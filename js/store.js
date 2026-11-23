/* Persistent progress (localStorage) */
(function () {
  'use strict';
  var KEY = 'grammatik.v1';
  var DAY = 86400000;
  // Leitner box -> next interval
  var INTERVALS = [0, 0, DAY, 3 * DAY, 7 * DAY, 16 * DAY];
  var LESSONS_PER_UNIT = 3;

  function blank() {
    return {
      v: 1,
      xp: 0,
      days: {},          // 'YYYY-MM-DD' -> xp
      streak: { count: 0, last: null, best: 0 },
      units: {},         // unitId -> { lessons, perfect }
      tests: {},         // chapter -> best score %
      words: {},         // vocabulary lemma -> times met in an answered exercise
      items: {},         // itemId -> { c, w, box, due, last }
      totals: { answered: 0, correct: 0, lessons: 0, ms: 0 },
      settings: {
        goal: 20, sound: true, tts: true, autoSpeak: true, haptic: true, theme: 'auto',
        lang: /^zh/i.test((navigator.languages && navigator.languages[0]) || navigator.language || '') ? 'zh' : 'de'
      }
    };
  }

  function dayKey(d) {
    d = d || new Date();
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day;
  }
  function shiftDay(key, n) {
    var p = key.split('-');
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    d.setDate(d.getDate() + n);
    return dayKey(d);
  }

  function merge(base, saved) {
    for (var k in saved) {
      if (!Object.prototype.hasOwnProperty.call(saved, k)) continue;
      var v = saved[k];
      if (v && typeof v === 'object' && !Array.isArray(v) && base[k] && typeof base[k] === 'object') {
        if (k === 'days' || k === 'units' || k === 'items' || k === 'tests' || k === 'words') base[k] = v;
        else merge(base[k], v);
      } else {
        base[k] = v;
      }
    }
    return base;
  }

  var state = blank();
  try {
    var raw = localStorage.getItem(KEY);
    if (raw) state = merge(blank(), JSON.parse(raw));
  } catch (e) { /* storage unavailable: run in-memory */ }

  var saveTimer = null;
  function save() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(flush, 50);
  }
  function flush() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }
  window.addEventListener('pagehide', flush);

  var listeners = [];
  function emit() { listeners.forEach(function (f) { f(state); }); }

  var S = {
    LESSONS_PER_UNIT: LESSONS_PER_UNIT,
    PASS: 80,
    testScore: function (lv) { return state.tests[lv] || 0; },
    get state() { return state; },
    dayKey: dayKey,
    shiftDay: shiftDay,
    on: function (f) { listeners.push(f); },
    save: function () { save(); emit(); },

    todayXP: function () { return state.days[dayKey()] || 0; },

    streak: function () {
      var s = state.streak, t = dayKey();
      if (s.last === t || s.last === shiftDay(t, -1)) return s.count;
      return 0;
    },
    streakActiveToday: function () { return state.streak.last === dayKey(); },

    unit: function (id) {
      return state.units[id] || { lessons: 0, perfect: 0 };
    },

    item: function (id) { return state.items[id]; },

    markItem: function (id, correct) {
      var it = state.items[id] || (state.items[id] = { c: 0, w: 0, box: 0, due: 0, last: 0 });
      var now = Date.now();
      it.last = now;
      if (correct) {
        it.c++;
        if (it.box > 0) {
          it.box++;
          if (it.box >= INTERVALS.length) { it.box = 0; it.due = 0; }
          else it.due = now + INTERVALS[it.box];
        }
      } else {
        it.w++;
        it.box = 1;
        it.due = now;
      }
      state.totals.answered++;
      if (correct) state.totals.correct++;
    },

    dueIds: function (validIds) {
      var now = Date.now(), out = [];
      for (var id in state.items) {
        var it = state.items[id];
        if (it.box > 0 && it.due <= now && (!validIds || validIds[id])) out.push(id);
      }
      out.sort(function (a, b) { return state.items[a].due - state.items[b].due; });
      return out;
    },

    weakIds: function (validIds) {
      var out = [];
      for (var id in state.items) {
        var it = state.items[id];
        if (it.box > 0 && (!validIds || validIds[id])) out.push(id);
      }
      return out;
    },

    finishLesson: function (r) {
      // r: { unitId, xp, perfect, ms, kind }
      var t = dayKey();
      state.xp += r.xp;
      state.days[t] = (state.days[t] || 0) + r.xp;
      state.totals.lessons++;
      state.totals.ms += r.ms || 0;
      var extended = false;
      var s = state.streak;
      if (s.last !== t) {
        s.count = (s.last === shiftDay(t, -1)) ? s.count + 1 : 1;
        s.last = t;
        extended = true;
        if (s.count > (s.best || 0)) s.best = s.count;
      }
      if (r.kind === 'test' && r.level) {
        state.tests[r.level] = Math.max(state.tests[r.level] || 0, r.score || 0);
      }
      if (r.unitId && r.kind === 'unit') {
        var u = state.units[r.unitId] || (state.units[r.unitId] = { lessons: 0, perfect: 0 });
        u.lessons++;
        if (r.perfect) u.perfect++;
      }
      save(); emit();
      return { extended: extended, streak: s.count };
    },

    markWords: function (ids) {
      ids.forEach(function (id) { state.words[id] = (state.words[id] || 0) + 1; });
      save();
    },

    set: function (key, val) {
      state.settings[key] = val;
      save(); emit();
    },

    exportJSON: function () { return JSON.stringify(state, null, 1); },
    importJSON: function (text) {
      var data = JSON.parse(text);
      if (!data || typeof data !== 'object' || !data.settings || !data.totals) throw new Error('format');
      state = merge(blank(), data);
      flush(); emit();
    },
    reset: function () {
      var keep = state.settings;
      delete keep.lastUnit;
      state = blank();
      state.settings = keep;
      flush(); emit();
    }
  };

  window.G = window.G || {};
  window.G.store = S;
})();
