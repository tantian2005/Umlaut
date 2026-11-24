/* App shell: data index, routing, views */
(function () {
  'use strict';
  var S = G.store, esc = G.esc, ICON = G.ICON, t = G.t;
  var view = document.getElementById('view');
  var topbar = document.getElementById('topbar');
  var rail = document.getElementById('rail');
  var sheetRoot = document.getElementById('sheet-root');

  // ---------- data index ----------
  function hash(s) {
    var h = 5381;
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  }
  var unitById = {}, itemIndex = {};
  (window.GRAMMATIK_UNITS || []).forEach(function (u) { unitById[u.id] = u; });
  (window.GRAMMATIK_EXTEND || []).forEach(function (x) { if (unitById[x.id]) unitById[x.id].ex = unitById[x.id].ex.concat(x.ex); });
  // chapters (Goethe course levels) define the order of the path
  var chapters = (window.GRAMMATIK_CHAPTERS || []).map(function (c) {
    return { id: c.id, level: c.level, title: c.title, goal: c.goal, units: c.units.map(function (id) { return unitById[id]; }).filter(Boolean) };
  });
  var units = [];
  chapters.forEach(function (c) { c.units.forEach(function (u) { u.ch = c.id; units.push(u); }); });
  (window.GRAMMATIK_UNITS || []).forEach(function (u) { if (!u.ch) { u.ch = u.level; units.push(u); } });
  var TIPS_PLUS = window.GRAMMATIK_TIPS_PLUS || {};
  units.forEach(function (u) { if (TIPS_PLUS[u.id] && !u._plus) { u.tip += TIPS_PLUS[u.id]; u._plus = true; } });
  var chapterById = {};
  chapters.forEach(function (c) { chapterById[c.id] = c; });
  units.forEach(function (u) {
    u.ids = u.ex.map(function (ex) {
      var key = ex.t + '|' + (ex.q || ex.a || '') + '|' + (ex.pairs ? ex.pairs.map(function (p) { return p.join('='); }).join(';') : '');
      var id = u.id + ':' + hash(key);
      while (itemIndex[id]) id += 'x';
      itemIndex[id] = { unit: u, ex: ex };
      return id;
    });
  });
  G.units = units;
  G.itemIndex = itemIndex;
  G.chapters = chapters;

  // lessons needed to master a unit: about one lesson per 8 exercises, 3 to 5
  function need(u) { return Math.min(5, Math.max(3, Math.ceil(u.ex.length / 8))); }
  function lvc(level) { return level === 'B2' ? ' b2' : level === 'C1' ? ' c1' : ''; }
  G.need = need;
  G.lvc = lvc;

  // ---------- icons ----------
  var UI = {
    flame: ICON.flame,
    bolt: '<svg viewBox="0 0 24 24"><path fill="#f2a900" d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>',
    target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#18a058"/><circle cx="12" cy="12" r="6.5" fill="#fff"/><circle cx="12" cy="12" r="3.5" fill="#18a058"/></svg>',
    back: '<svg viewBox="0 0 24 24"><path d="M15.4 5 8.4 12l7 7-1.4 1.4L5.6 12 14 3.6z"/></svg>',
    close: ICON.close,
    check: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2 15-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8z"/></svg>',
    crown: '<svg viewBox="0 0 24 24"><path d="M3 7.5 7.5 11 12 4l4.5 7L21 7.5 19.5 18h-15zM4.5 19.5h15V21h-15z"/></svg>',
    book: '<svg viewBox="0 0 24 24"><path d="M5 3h11a3 3 0 0 1 3 3v15H7a2 2 0 0 1-2-2zm2 14v2h10v-2z"/></svg>',
    trophy: ICON.trophy,
    chev: '<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5z"/></svg>',
    lessons: '<svg viewBox="0 0 24 24"><path fill="#3b5bdb" d="M4 4h12a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2z"/><path fill="#fff" d="M7 8h8v1.6H7zm0 3.5h8v1.6H7z"/><path fill="#8b3fd9" d="M18 7h2v13a2 2 0 0 1-2 2H7v-2h11z"/></svg>',
    acc: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#18a058"/><path fill="#fff" d="m10.5 16.2-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4z"/></svg>',
    best: '<svg viewBox="0 0 24 24"><path fill="#f2a900" d="m12 2 3 6.3 6.9.9-5 4.8 1.2 6.9L12 17.6 5.9 20.9 7.1 14l-5-4.8 6.9-.9z"/></svg>',
    time: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#3b5bdb"/><path fill="#fff" d="M11 6h2v5.4l3.6 2.1-1 1.7L11 12.6z"/></svg>'
  };
  var UNIT_ICONS = {
    clock: '<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 10.4 3.6 2.1-1 1.7L11 13.6V6h2z"/>',
    link: '<path d="M10.6 13.4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0zM8 17a3 3 0 0 1-2.1-5.1l2.5-2.5 1.4 1.4-2.5 2.5a1 1 0 0 0 1.4 1.4l2.5-2.5 1.4 1.4-2.5 2.5A3 3 0 0 1 8 17zm8.1-2.4-1.4-1.4 2.5-2.5a1 1 0 0 0-1.4-1.4l-2.5 2.5-1.4-1.4 2.5-2.5a3 3 0 0 1 4.2 4.2z" transform="translate(-1 -0.5) scale(1.08)"/>',
    branch: '<path d="M6 3a3 3 0 0 1 1 5.8v6.4a3 3 0 1 1-2 0V8.8A3 3 0 0 1 6 3zm12 3a3 3 0 0 1-2.1 2.9C15.5 12 13 13 10 13.4v-2c2.2-.4 3.7-1 4-2.6A3 3 0 1 1 18 6z"/>',
    cloud: '<path d="M7 19a5 5 0 0 1-.6-10A6.5 6.5 0 0 1 19 9.5 4.8 4.8 0 0 1 18 19z"/>',
    swap: '<path d="M7 4 3 8l4 4V9h11V7H7zm10 8v3H6v2h11v3l4-4z"/>',
    star: '<path d="m12 2 3 6.3 6.9.9-5 4.8 1.2 6.9L12 17.6 5.9 20.9 7.1 14l-5-4.8 6.9-.9z"/>',
    chat: '<path d="M4 3h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8l-5 4V4a1 1 0 0 1 1-1zm3 6v2h2V9zm4 0v2h2V9zm4 0v2h2V9z"/>',
    pin: '<path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7zm0 4.5A2.5 2.5 0 1 0 14.5 9 2.5 2.5 0 0 0 12 6.5z"/>',
    key: '<path d="M14 3a7 7 0 1 1-6.3 10H6v2H4v2H2v-4l5.4-5.4A7 7 0 0 1 14 3zm2 3.5A1.5 1.5 0 1 0 17.5 8 1.5 1.5 0 0 0 16 6.5z"/>',
    target: '<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm0-9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/>',
    puzzle: '<path d="M10 3a2 2 0 0 1 2 2v1h4a1 1 0 0 1 1 1v4h1a2 2 0 1 1 0 4h-1v4a1 1 0 0 1-1 1h-4v-1a2 2 0 1 0-4 0v1H4a1 1 0 0 1-1-1v-4h1a2 2 0 1 0 0-4H3V7a1 1 0 0 1 1-1h4V5a2 2 0 0 1 2-2z"/>',
    scale: '<path d="M11 3h2v2h6l-3 7a3.5 3.5 0 0 0 7 0l-3-7h1V3h-6.2A2 2 0 0 0 13 2h-2a2 2 0 0 0-1.8 1H3v2h1l-3 7a3.5 3.5 0 0 0 7 0L5 5h6v14H7v2h10v-2h-4zM4.5 6.8 6.3 11H2.7zm15 0 1.8 4.2h-3.6z"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7zm-7.7 8.9L12 14.7l7.7-3.8L22 12l-10 5-10-5zm0 5L12 19.7l7.7-3.8L22 17l-10 5-10-5z"/>',
    sort: '<path d="M3 5h18v2.4H3zm0 5.8h13v2.4H3zm0 5.8h8V19H3z"/>',
    trend: '<path d="M2 17.6 9 10.6l4 4 6.6-6.6H16V6h7v7h-2V9.4l-8 8-4-4-5.6 5.6z"/>',
    forward: '<path d="M3 18.5 11.5 12 3 5.5zm9.5 0L21 12l-8.5-6.5z"/>',
    tool: '<path d="M22.7 19 13.6 9.9c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>',
    cube: '<path d="M12 2 3 7v10l9 5 9-5V7zm0 2.3L18.8 8 12 11.7 5.2 8zM5 9.7l6 3.3v6.6l-6-3.3zm8 9.9V13l6-3.3v6.6z"/>',
    spark: '<path d="m12 2 2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z"/>',
    tag: '<path d="M21.4 11.6 12.4 2.6A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7c0 .6.2 1.1.6 1.4l9 9a2 2 0 0 0 2.8 0l7-7a2 2 0 0 0 0-2.8zM6.5 8A1.5 1.5 0 1 1 8 6.5 1.5 1.5 0 0 1 6.5 8z"/>',
    quote: '<path d="M5 6h6v6c0 3.3-1.8 5.4-5 6l-.7-1.7c1.8-.6 2.7-1.8 2.7-3.3H5zm9 0h6v6c0 3.3-1.8 5.4-5 6l-.7-1.7c1.8-.6 2.7-1.8 2.7-3.3H14z"/>'
  };
  function unitIcon(u, st) {
    if (st === 'done') return '<svg viewBox="0 0 24 24">' + UI.crown.replace(/<\/?svg[^>]*>/g, '') + '</svg>';
    return '<svg viewBox="0 0 24 24">' + (UNIT_ICONS[u.icon] || UNIT_ICONS.star) + '</svg>';
  }

  // ---------- helpers ----------
  function unitState(u) {
    var n = S.unit(u.id).lessons;
    if (n >= need(u)) return 'done';
    if (n > 0) return 'started';
    return 'fresh';
  }
  function mastery(u) {
    var ok = 0;
    u.ids.forEach(function (id) {
      var it = S.item(id);
      if (it && it.c > 0 && it.box === 0) ok++;
    });
    return u.ids.length ? ok / u.ids.length : 0;
  }
  function validIds() { return itemIndex; }
  function dueCount() { return S.dueIds(validIds()).length; }
  function currentUnit() {
    var last = S.state.settings.lastUnit && unitById[S.state.settings.lastUnit];
    if (last && unitState(last) !== 'done') return last;
    for (var i = 0; i < units.length; i++) if (unitState(units[i]) !== 'done') return units[i];
    return null;
  }
  function plural(n, one, many) { return n + ' ' + (n === 1 ? one : many); }

  function toast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { t.classList.remove('show'); }, 2200);
  }

  // ---------- sheets ----------
  function openSheet(html, opts) {
    opts = opts || {};
    var scrim = document.createElement('div');
    scrim.className = 'scrim';
    scrim.innerHTML = '<div class="sheet' + (opts.wide ? ' wide' : '') + '" role="dialog" aria-modal="true"><div class="grab" aria-hidden="true"></div>' + html + '</div>';
    var prevFocus = document.activeElement;
    function close() {
      scrim.remove();
      if (!sheetRoot.querySelector('.scrim')) document.documentElement.classList.remove('sheet-open');
      document.removeEventListener('keydown', onKey, true);
      if (opts.onClose) opts.onClose();
      if (prevFocus && prevFocus.focus) prevFocus.focus({ preventScroll: true });
    }
    function onKey(e) {
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(); }
    }
    scrim.addEventListener('click', function (e) { if (e.target === scrim) close(); });
    document.addEventListener('keydown', onKey, true);
    sheetRoot.appendChild(scrim);
    var sheetEl = scrim.querySelector('.sheet');
    swipeToClose(sheetEl, close);
    // the page behind a sheet must not scroll (iOS ignores overflow:hidden on body)
    scrim.addEventListener('touchmove', function (e) {
      var inside = sheetEl.contains(e.target) && sheetEl.scrollHeight > sheetEl.clientHeight;
      if (!inside && e.cancelable) e.preventDefault();
    }, { passive: false });
    document.documentElement.classList.add('sheet-open');
    var x = scrim.querySelector('[data-close]');
    if (x) x.onclick = close;
    var f = scrim.querySelector('[data-autofocus]') || scrim.querySelector('button');
    if (f) setTimeout(function () { f.focus({ preventScroll: true }); }, 30);
    return { el: scrim, close: close };
  }

  function swipeToClose(sh, close) {
    var y0 = null, dy = 0;
    sh.addEventListener('touchstart', function (e) {
      if (sh.scrollTop > 0 || !window.matchMedia('(max-width: 700px)').matches) return;
      y0 = e.touches[0].clientY; dy = 0; sh.style.transition = 'none';
    }, { passive: true });
    sh.addEventListener('touchmove', function (e) {
      if (y0 === null) return;
      dy = Math.max(0, e.touches[0].clientY - y0);
      if (dy > 0 && e.cancelable) e.preventDefault();
      sh.style.transform = 'translateY(' + dy + 'px)';
    }, { passive: false });
    sh.addEventListener('touchend', function () {
      if (y0 === null) return;
      y0 = null;
      sh.style.transition = 'transform .2s ease';
      if (dy > 90) { sh.style.transform = 'translateY(100%)'; setTimeout(close, 180); }
      else sh.style.transform = '';
    });
  }

  function confirmDlg(o) {
    return new Promise(function (resolve) {
      var done = false;
      var s = openSheet(
        '<div class="sheet-head"><div><h2>' + esc(o.title) + '</h2>' + (o.text ? '<p>' + esc(o.text) + '</p>' : '') + '</div></div>' +
        '<div class="sheet-actions">' +
          '<button class="btn ghost' + (o.danger ? ' danger' : '') + '" data-v="1">' + esc(o.ok) + '</button>' +
          '<button class="btn" data-v="0" data-autofocus>' + esc(o.cancel || t('Abbrechen')) + '</button>' +
        '</div>', { onClose: function () { if (!done) resolve(false); } });
      s.el.querySelectorAll('[data-v]').forEach(function (b) {
        b.onclick = function () { done = true; resolve(b.dataset.v === '1'); s.close(); };
      });
    });
  }
  // add a speaker button to German sentences: .tip example lines and [data-say] lines
  function wireSpeak(container) {
    if (!S.state.settings.tts || !G.sound.canSpeak()) return;
    container.querySelectorAll('.tip .ex p[lang="de"], [data-say]').forEach(function (p) {
      if (p.classList.contains('speakable')) return;
      var text = p.getAttribute('data-say') || p.textContent;
      if (!text) return;
      var b = document.createElement('button');
      b.className = 'say';
      b.setAttribute('aria-label', t('Vorlesen'));
      b.innerHTML = G.ICON.speak;
      p.appendChild(b);
      p.classList.add('speakable');
      p.onclick = function () { G.sound.speak(text); };
    });
  }
  G.ui = { confirm: confirmDlg, toast: toast, sheet: openSheet, wireSpeak: wireSpeak };

  function unitSheet(u) {
    var st = S.unit(u.id), n = Math.min(st.lessons, need(u));
    var label = t(n === 0 ? 'Starten' : n < need(u) ? 'Weiter' : 'Üben');
    var dots = '';
    for (var i = 0; i < need(u); i++) dots += '<i class="' + (i < n ? 'on' : '') + '"></i>';
    var s = openSheet(
      '<div class="sheet-head">' +
        '<div><span class="tag' + lvc(u.level) + '">' + u.ch + '</span>' +
        '<h2 style="margin-top:8px" lang="de">' + esc(u.title) + '</h2><p>' + esc(u.zh) + '</p>' +
        '<div class="dots" aria-label="' + t('{n} von {m} Lektionen', { n: n, m: need(u) }) + '">' + dots + '</div></div>' +
        '<button class="icon-btn" data-close aria-label="' + t('Schließen') + '">' + UI.close + '</button>' +
      '</div>' +
      '<div class="sheet-actions">' +
        '<button class="btn ghost" data-act="tip">' + t('Grammatik') + '</button>' +
        '<button class="btn" data-act="go" data-autofocus>' + label + '</button>' +
      '</div>');
    s.el.querySelector('[data-act="tip"]').onclick = function () { s.close(); location.hash = '#/unit/' + u.id; };
    s.el.querySelector('[data-act="go"]').onclick = function () { s.close(); startUnit(u); };
  }

  // quick jump between difficulty levels
  function chapterSheet() {
    var s = openSheet(
      '<div class="sheet-head"><div><h2>' + t('Niveau wählen') + '</h2></div>' +
        '<button class="icon-btn" data-close aria-label="' + t('Schließen') + '">' + UI.close + '</button></div>' +
      '<div class="list">' + chapters.map(function (c) {
        var done = c.units.filter(function (u) { return unitState(u) === 'done'; }).length;
        var score = S.testScore(c.id);
        return '<button class="row ch-row" data-ch="' + c.id + '"><span class="tag' + lvc(c.level) + '">' + c.id + '</span>' +
          '<span class="grow"><span class="t">' + esc(t(c.title)) + '</span><div class="mini-meter"><i style="width:' + (100 * done / c.units.length) + '%"></i></div></span>' +
          '<span class="pct">' + (score >= S.PASS ? UI.trophy.replace('<svg', '<svg width="20" height="20" fill="#f2a900"') : done + ' / ' + c.units.length) + '</span></button>';
      }).join('') + '</div>', { wide: true });
    s.el.querySelectorAll('[data-ch]').forEach(function (b) {
      b.onclick = function () {
        s.close();
        var sec = document.getElementById('ch-' + b.dataset.ch);
        if (sec) sec.scrollIntoView({ block: 'start', behavior: 'smooth' });
      };
    });
  }

  function startUnit(u) {
    S.state.settings.lastUnit = u.id;
    S.save();
    G.lesson.start({ kind: 'unit', unit: u });
  }

  function testSheet(lv) {
    var best = S.testScore(lv), ch = chapterById[lv];
    var s = openSheet(
      '<div class="sheet-head">' +
        '<div><span class="tag' + lvc(ch.level) + '">' + lv + '</span>' +
        '<h2 style="margin-top:8px">' + t('Abschnittstest') + '</h2><p>' + t('{n} Fragen', { n: TEST_SIZE }) + ' · ' + t('ab {p}%', { p: S.PASS }) + (best ? ' · ' + t('Bestwert {n}%', { n: best }) : '') + '</p></div>' +
        '<button class="icon-btn" data-close aria-label="' + t('Schließen') + '">' + UI.close + '</button>' +
      '</div>' +
      '<button class="btn gold block" data-act="go" data-autofocus>' + t('Test starten') + '</button>');
    s.el.querySelector('[data-act="go"]').onclick = function () { s.close(); startTest(lv); };
  }
  var TEST_SIZE = 15;
  function startTest(lv) {
    var picks = [];
    var pool = [];
    G.shuffle(chapterById[lv].units).forEach(function (u) {
      var ids = G.shuffle(u.ids.filter(function (id) { return itemIndex[id].ex.t !== 'm'; }));
      picks.push(ids[0]);
      pool = pool.concat(ids.slice(1));
    });
    G.shuffle(pool).forEach(function (id) { if (picks.length < TEST_SIZE) picks.push(id); });
    G.lesson.start({ kind: 'test', level: lv, ids: G.shuffle(picks.slice(0, TEST_SIZE)) });
  }

  function startReview() {
    var ids = S.dueIds(validIds()).slice(0, 10);
    if (!ids.length) return;
    G.lesson.start({ kind: 'review', ids: G.shuffle(ids) });
  }

  function startMixed() {
    var pool = [];
    units.forEach(function (u) {
      if (S.unit(u.id).lessons > 0) u.ids.forEach(function (id) { if (itemIndex[id].ex.t !== 'm') pool.push(id); });
    });
    if (!pool.length) return;
    var weak = pool.filter(function (id) { var it = S.item(id); return it && it.box > 0; });
    var pick = G.shuffle(weak).slice(0, 4);
    G.shuffle(pool).forEach(function (id) { if (pick.length < 10 && pick.indexOf(id) < 0) pick.push(id); });
    G.lesson.start({ kind: 'practice', ids: G.shuffle(pick) });
  }

  function unseenWordItems() {
    var seen = S.state.words || {};
    return Object.keys(itemIndex).filter(function (id) {
      return itemIndex[id].ex.t !== 'm' && G.vocab.of(id).some(function (w) { return !seen[w.id]; });
    });
  }
  function startWords() {
    var ids = G.shuffle(unseenWordItems()).slice(0, 10);
    if (!ids.length) return;
    G.lesson.start({ kind: 'practice', ids: ids });
  }
  function wordStats() {
    var seen = S.state.words || {}, by = {}, total = 0, got = 0;
    G.vocab.list.forEach(function (w) {
      var b = by[w.lv] || (by[w.lv] = { total: 0, seen: 0 });
      b.total++; total++;
      if (seen[w.id]) { b.seen++; got++; }
    });
    return { by: by, total: total, seen: got };
  }

  // ---------- chrome (topbar, rail, nav) ----------
  function chips() {
    var st = S.streak(), today = S.todayXP(), goal = S.state.settings.goal;
    return '<span class="chip flame' + (S.streakActiveToday() ? '' : ' off') + '" title="' + t('Serie') + '" aria-label="' + t('Serie: {n}', { n: st }) + '">' + UI.flame + st + '</span>' +
      '<span class="chip xp" title="XP" aria-label="' + t('XP gesamt: {n}', { n: S.state.xp }) + '">' + UI.bolt + S.state.xp + '</span>' +
      '<span class="chip goal" title="' + t('Tagesziel') + '" aria-label="' + t('Heute {a} von {b} XP', { a: today, b: goal }) + '">' + UI.target + Math.min(today, goal) + '/' + goal + '</span>';
  }

  function renderChrome(route) {
    topbar.innerHTML = '<div class="chip-row">' + chips() + '</div>';
    var due = dueCount();
    var today = S.todayXP(), goal = S.state.settings.goal;
    function doneOf(list) { return list.filter(function (u) { return unitState(u) === 'done'; }).length; }
    var ws = wordStats();
    rail.innerHTML =
      '<div class="chip-row">' + chips() + '</div>' +
      '<div class="card"><h3>' + t('Tagesziel') + '</h3><div class="goal-line"><div class="meter' + (today >= goal ? ' ok' : '') + '"><i style="width:' + Math.min(100, 100 * today / goal) + '%"></i></div><b>' + Math.min(today, goal) + ' / ' + goal + ' XP</b></div></div>' +
      (due ? '<div class="card"><h3>' + t('{n} Fehler fällig', { n: due }) + '</h3><button class="btn bad block small" data-act="review">' + t('Wiederholen') + '</button></div>' : '') +
      '<div class="card"><h3>' + t('Fortschritt') + '</h3><div class="prog-list">' +
        chapters.map(function (c) { return progressRow(c.id, doneOf(c.units), c.units.length, c.level); }).join('') +
      '</div></div>' +
      '<a class="card card-link" href="#/words"><h3>' + t('Wortschatz') + '</h3><div class="goal-line"><div class="meter ok"><i style="width:' + (100 * ws.seen / Math.max(1, ws.total)) + '%"></i></div><b>' + ws.seen + ' / ' + ws.total + '</b></div></a>';
    var rb = rail.querySelector('[data-act="review"]');
    if (rb) rb.onclick = startReview;

    document.querySelectorAll('.nav-link').forEach(function (a) {
      var on = a.dataset.nav === route;
      a.classList.toggle('active', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    document.documentElement.style.setProperty('--tb', topbar.offsetHeight + 'px');
    var badge = document.querySelector('[data-badge="review"]');
    badge.hidden = !due;
    badge.textContent = due > 99 ? '99+' : due;
  }
  function progressRow(lv, done, total, level) {
    return '<div class="goal-line"><span class="tag' + lvc(level || lv) + '">' + lv + '</span><div class="meter ok"><i style="width:' + (100 * done / total) + '%"></i></div><b>' + done + ' / ' + total + '</b></div>';
  }

  // ---------- views ----------
  var OFFS = [0, 0.9, 1.4, 0.9, 0, -0.9, -1.4, -0.9];

  function viewLearn() {
    var cur = currentUnit();
    var zhUI = G.i18n.lang() === 'zh';
    var html = '';
    chapters.forEach(function (ch) {
      var lv = ch.id, list = ch.units, lvl = ch.level.toLowerCase();
      if (!list.length) return;
      var done = list.filter(function (u) { return unitState(u) === 'done'; }).length;
      html += '<section class="chapter" aria-label="' + lv + '" id="ch-' + lv + '">' +
        '<button class="section-banner ' + lvl + '" data-chapters aria-haspopup="dialog"><span class="sb-text"><small>' + lv + '</small><strong>' + esc(t(ch.title)) + UI.chev + '</strong></span>' +
        '<span class="chip" style="color:#fff">' + UI.crown.replace('<svg', '<svg fill="#fff"') + done + ' / ' + list.length + '</span></button>' +
        '<div class="path">';
      list.forEach(function (u, i) {
        var st = unitState(u);
        var n = Math.min(S.unit(u.id).lessons, need(u));
        var off = OFFS[i % OFFS.length] * 52;
        var isCur = cur && cur.id === u.id;
        // progress ring around the current button, with a gap so it never touches it
        var ring = (isCur || st === 'started')
          ? '<svg class="pring ' + lvl + '" viewBox="0 0 108 108" aria-hidden="true"><circle class="track" cx="54" cy="54" r="49"/>' +
            (n ? '<circle class="fill" cx="54" cy="54" r="49" pathLength="100" stroke-dasharray="100" stroke-dashoffset="' + (100 * (1 - n / need(u))).toFixed(1) + '"/>' : '') + '</svg>' : '';
        html += '<div class="node-wrap' + (isCur ? ' current' : '') + (ring ? ' has-ring' : '') + '" style="transform:translateX(' + off + 'px)">' + ring +
          (isCur ? '<div class="bubble">' + t(n ? 'Weiter' : 'Start') + '</div>' : '') +
          '<button class="node ' + lvl + ' ' + (isCur && st === 'fresh' ? 'started' : st) + '" data-u="' + u.id + '" aria-label="' + esc(t('{t}, {n} von {m}', { t: u.title, n: n, m: need(u) })) + '">' + unitIcon(u, st) + '</button>' +
          '<div class="node-label"><span lang="de">' + esc(u.title) + '</span>' + (zhUI ? '<small>' + esc(G.i18n.unitZh(u.id)) + '</small>' : '') + '</div></div>';
      });
      var score = S.testScore(lv), passed = score >= S.PASS;
      html += '<div class="node-wrap checkpoint">' +
        '<button class="node test ' + lvl + (passed ? ' done' : '') + '" data-test="' + lv + '" aria-label="' + t('{lv}-Test', { lv: lv }) + (score ? ', ' + score + '%' : '') + '">' +
        '<svg viewBox="0 0 24 24">' + (passed ? UNIT_ICONS.star : '<path d="M18 4V2H6v2H2v4a4 4 0 0 0 4 4h.3A6 6 0 0 0 11 15.9V19H7v3h10v-3h-4v-3.1a6 6 0 0 0 4.7-3.9h.3a4 4 0 0 0 4-4V4zM4 8V6h2v4a2 2 0 0 1-2-2zm16 0a2 2 0 0 1-2 2V6h2z"/>') + '</svg></button>' +
        '<div class="node-label">' + t('{lv}-Test', { lv: lv }) + (score ? ' · ' + score + '%' : '') + '</div></div>';
      html += '</div></section>';
    });
    view.innerHTML = '<div>' + html + '</div>';
    view.querySelectorAll('[data-test]').forEach(function (b) {
      b.onclick = function () { testSheet(b.dataset.test); };
    });
    view.querySelectorAll('[data-chapters]').forEach(function (b) { b.onclick = chapterSheet; });
    view.querySelectorAll('.node[data-u]').forEach(function (b) {
      b.onclick = function () { unitSheet(unitById[b.dataset.u]); };
    });
    if (!viewLearn._scrolled && cur) {
      viewLearn._scrolled = true;
      var el = view.querySelector('[data-u="' + cur.id + '"]');
      if (el && units.indexOf(cur) > 2) setTimeout(function () { el.scrollIntoView({ block: 'center' }); }, 0);
    }
  }

  function viewUnit(id) {
    var u = unitById[id];
    if (!u) { location.hash = '#/'; return; }
    var n = Math.min(S.unit(u.id).lessons, need(u));
    var label = t(n === 0 ? 'Starten' : n < need(u) ? 'Weiter' : 'Üben');
    view.innerHTML = '<div>' +
      '<div class="page-head"><a class="icon-btn" href="#/" aria-label="' + t('Zurück') + '">' + UI.back + '</a>' +
      '<div><span class="tag' + lvc(u.level) + '">' + u.level + '</span><h1 lang="de">' + esc(u.title) + '</h1>' + (G.i18n.lang() === 'zh' ? '<p class="h1-sub">' + esc(u.zh) + '</p>' : '') + '</div></div>' +
      '<article class="card tip">' + u.tip + '</article>' +
      '<div class="sticky-cta"><button class="btn block" data-act="go">' + label + '</button></div>' +
      '</div>';
    view.querySelector('[data-act="go"]').onclick = function () { startUnit(u); };
    wireSpeak(view);
  }

  function viewReview() {
    var due = dueCount();
    var weak = S.weakIds(validIds()).length;
    var started = units.filter(function (u) { return S.unit(u.id).lessons > 0; });
    var html =
      '<div class="page-head"><h1>' + t('Wiederholen') + '</h1></div>' +
      '<div class="hero">' +
        '<div class="num' + (due ? '' : ' zero') + '">' + (due ? due : UI.check.replace('<svg', '<svg width="48" height="48" fill="currentColor"')) + '</div>' +
        '<div class="grow"><h2>' + t(due ? 'Fehler fällig' : 'Alles erledigt') + '</h2>' +
        (weak > due ? '<div class="sub">' + t('{n} später', { n: weak - due }) + '</div>' : '') + '</div>' +
        (due ? '<button class="btn bad" data-act="review">' + t('Start') + '</button>' : '') +
      '</div>' +
      (started.length ? '<button class="row" data-act="mixed"><span class="grow"><span class="t">' + t('Gemischtes Training') + '</span><span class="s" style="display:block">' + t(started.length === 1 ? '{n} Einheit' : '{n} Einheiten', { n: started.length }) + '</span></span><span class="btn small">' + t('Start') + '</span></button>' : '') +
      (started.length ? '<h2 class="section-title">' + t('Einheiten') + '</h2><div class="list">' + started.map(function (u) {
        var m = Math.round(mastery(u) * 100);
        return '<button class="row" data-u="' + u.id + '"><span class="tag' + lvc(u.level) + '">' + u.ch + '</span>' +
          '<span class="grow"><span class="t" lang="de">' + esc(u.title) + '</span><div class="mini-meter"><i style="width:' + m + '%"></i></div></span>' +
          '<span class="pct">' + m + '%</span></button>';
      }).join('') + '</div>' : '<div class="empty">' + UI.book.replace('<svg', '<svg style="fill:var(--ink-3)"') + '<a class="btn" href="#/">' + t('Lernen') + '</a></div>');
    html += notebookHTML();
    view.innerHTML = '<div>' + html + '</div>';
    wireNotebook();
    var r = view.querySelector('[data-act="review"]'); if (r) r.onclick = startReview;
    var m = view.querySelector('[data-act="mixed"]'); if (m) m.onclick = startMixed;
    view.querySelectorAll('[data-u]').forEach(function (b) { b.onclick = function () { unitSheet(unitById[b.dataset.u]); }; });
  }

  // ---------- mistake notebook ----------
  var NB_PAGE = 20, nbShown = NB_PAGE;
  function notebookIds() {
    var items = S.state.items;
    return Object.keys(items).filter(function (id) { return itemIndex[id] && items[id].w > 0; })
      .sort(function (a, b) {
        var A = items[a], B = items[b];
        return ((B.box > 0) - (A.box > 0)) || (B.last - A.last);
      });
  }
  function notebookHTML() {
    var ids = notebookIds();
    if (!ids.length) return '';
    var open = ids.filter(function (id) { return S.state.items[id].box > 0; }).length;
    return '<h2 class="section-title">' + t('Fehlerheft') + ' <span class="count">' + open + ' / ' + ids.length + '</span>' +
      '<button class="info" data-tip="' + t('Rot: noch in der Wiederholung. Grün: inzwischen richtig beantwortet.') + '" aria-label="' + t('Info: Rot heißt noch offen, Grün heißt gelernt') + '">i</button></h2>' +
      '<div class="list nb">' + ids.slice(0, nbShown).map(function (id) {
        var info = itemIndex[id], ex = info.ex, it = S.state.items[id];
        return '<div class="nb-card ' + (it.box > 0 ? 'open' : 'fixed') + '">' +
          '<div class="nb-top"><span class="tag' + lvc(info.unit.level) + '">' + esc(info.unit.title) + '</span><span class="nb-w">×' + it.w + '</span></div>' +
          '<p lang="de" data-say="' + esc(G.fullSentence(ex)) + '">' + esc(G.answerText(ex)) + '</p>' +
          (ex.e ? '<small>' + ex.e + '</small>' : '') +
        '</div>';
      }).join('') + '</div>' +
      (ids.length > nbShown ? '<button class="btn ghost block small" data-act="nb-more" style="margin-top:12px">' + t('Mehr anzeigen') + '</button>' : '');
  }
  function wireNotebook() {
    wireSpeak(view);
    var more = view.querySelector('[data-act="nb-more"]');
    if (more) more.onclick = function () { nbShown += NB_PAGE; var y = window.scrollY; viewReview(); window.scrollTo(0, y); };
  }

  function viewStats() {
    var WD = G.i18n.weekdays();
    var st = S.state, tot = st.totals;
    var acc = tot.answered ? Math.round(100 * tot.correct / tot.answered) : 0;
    var mins = Math.round(tot.ms / 60000);
    var today = S.dayKey(), goal = st.settings.goal;
    var days = [], max = goal;
    for (var i = 6; i >= 0; i--) {
      var k = S.shiftDay(today, -i), v = st.days[k] || 0;
      var p = k.split('-');
      days.push({ k: k, v: v, d: WD[new Date(+p[0], +p[1] - 1, +p[2]).getDay()] });
      if (v > max) max = v;
    }
    var cal = calendarHTML(st, today, goal);
    var ws = wordStats();
    view.innerHTML = '<div>' +
      '<div class="page-head"><h1>' + t('Statistik') + '</h1></div>' +
      '<div class="stat-grid">' +
        stat(UI.flame, S.streak(), t('Serie')) +
        stat(UI.best, st.streak.best || 0, t('Rekord')) +
        stat(UI.bolt, st.xp, t('XP')) +
        stat(UI.lessons, tot.lessons, t('Lektionen')) +
        stat(UI.acc, acc + '%', t('Genauigkeit')) +
        stat(UI.time, t('{n} min', { n: mins }), t('Lernzeit')) +
        stat(UI.book.replace('<svg', '<svg fill="#0c8599"'), ws.seen + ' / ' + ws.total, t('Wörter')) +
        stat(UI.trophy.replace('<svg', '<svg fill="#f2a900"'), chapters.filter(function (c) { return S.testScore(c.id) >= S.PASS; }).length + ' / ' + chapters.length, t('Tests bestanden')) +
      '</div>' +
      '<div class="card"><h3>' + t('Diese Woche') + '</h3><div class="week">' + days.map(function (d) {
        var h = d.v ? Math.max(6, 100 * d.v / max) : 4;
        return '<div class="bar' + (d.v >= goal ? ' goal' : '') + (d.v ? '' : ' zero') + (d.k === today ? ' today' : '') + '"><em>' + (d.v || '') + '</em><i style="height:' + h + '%"></i><span>' + d.d + '</span></div>';
      }).join('') + '</div></div>' +
      '<div class="card" style="margin-top:16px"><h3>' + t('Lernkalender') + ' <span class="count">' + t('{n} Lerntage im letzten Jahr', { n: cal.days }) + '</span></h3>' + cal.html + '</div>' +
      '<div class="card" style="margin-top:16px"><h3>' + t('Einheiten') + '</h3><div class="prog-list">' +
        chapters.map(function (c) { return progressRow(c.id, c.units.filter(function (u) { return unitState(u) === 'done'; }).length, c.units.length, c.level); }).join('') +
      '</div></div>' +
      '</div>';
  }
  // GitHub-style year calendar: one column per week (Mon–Sun), colour by XP relative to the daily goal
  var MONTHS = { de: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'], zh: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'] };
  function calendarHTML(st, today, goal) {
    var p = today.split('-'), d = new Date(+p[0], +p[1] - 1, +p[2]);
    var dow = (d.getDay() + 6) % 7;                 // 0 = Monday
    var WEEKS = 53;
    var start = S.shiftDay(today, -(dow + 7 * (WEEKS - 1)));
    var cells = '', months = '', lastMonth = -1, active = 0;
    var mnames = MONTHS[G.i18n.lang()] || MONTHS.de;
    for (var w = 0; w < WEEKS; w++) {
      var wk = S.shiftDay(start, w * 7), wp = wk.split('-'), m = +wp[1] - 1;
      months += '<span style="grid-column:' + (w + 1) + '">' + (m !== lastMonth && +wp[2] <= 7 ? mnames[m] : '') + '</span>';
      if (+wp[2] <= 7) lastMonth = m;
      for (var k = 0; k < 7; k++) {
        var key = S.shiftDay(start, w * 7 + k);
        if (key > today) { cells += '<i class="future"></i>'; continue; }
        var x = st.days[key] || 0;
        if (x) active++;
        var lvl = x === 0 ? '' : x < goal / 2 ? 'l1' : x < goal ? 'l2' : x < goal * 2 ? 'l3' : 'l4';
        cells += '<i class="' + lvl + (key === today ? ' today' : '') + '" title="' + key + ' · ' + x + ' XP"></i>';
      }
    }
    var wd = G.i18n.weekdays();
    var html = '<div class="cal-scroll"><div class="cal">' +
      '<div class="cal-months">' + months + '</div>' +
      '<div class="cal-days"><span></span><span>' + wd[1] + '</span><span></span><span>' + wd[3] + '</span><span></span><span>' + wd[5] + '</span><span></span></div>' +
      '<div class="cal-grid">' + cells + '</div></div></div>' +
      '<div class="cal-legend">' + t('Weniger') + '<i></i><i class="l1"></i><i class="l2"></i><i class="l3"></i><i class="l4"></i>' + t('Mehr') + '</div>';
    return { html: html, days: active };
  }

  function stat(icon, val, label) {
    return '<div class="stat">' + icon + '<div><b>' + val + '</b><span>' + label + '</span></div></div>';
  }

  // ---------- vocabulary ----------
  var wf = { q: '', lv: 'all', st: 'all', shown: 120 };
  function viewWords() {
    var ws = wordStats(), seen = S.state.words || {};
    var unseenItems = unseenWordItems().length;
    var levels = ['B1', 'B2', 'C1'];
    var q = wf.q.trim().toLowerCase();
    var rows = G.vocab.list.filter(function (w) {
      if (wf.lv !== 'all' && w.lv !== wf.lv) return false;
      if (wf.st === 'new' && seen[w.id]) return false;
      if (wf.st === 'seen' && !seen[w.id]) return false;
      return !q || w.de.toLowerCase().indexOf(q) >= 0 || w.zh.indexOf(q) >= 0;
    });
    function seg(name, opts, cur) {
      return '<div class="seg small" role="group">' + opts.map(function (o) {
        return '<button aria-pressed="' + (o[0] === cur) + '" data-wf="' + name + '" data-v="' + o[0] + '">' + o[1] + '</button>';
      }).join('') + '</div>';
    }
    view.innerHTML = '<div>' +
      '<div class="page-head"><h1>' + t('Wortschatz') + '</h1></div>' +
      '<div class="word-cards">' + levels.map(function (lv) {
        var b = ws.by[lv] || { total: 0, seen: 0 };
        return '<div class="stat wc"><span class="tag' + lvc(lv) + '">' + lv + '</span><div><b>' + b.seen + ' / ' + b.total + '</b><div class="mini-meter"><i style="width:' + (100 * b.seen / Math.max(1, b.total)) + '%"></i></div></div></div>';
      }).join('') + '</div>' +
      (unseenItems ? '<button class="row" data-act="words-go"><span class="grow"><span class="t">' + t('Neue Wörter üben') + '</span><span class="s" style="display:block">' + t('{n} Übungen mit neuen Wörtern', { n: unseenItems }) + '</span></span><span class="btn small">' + t('Start') + '</span></button>' : '') +
      '<div class="word-tools">' +
        '<input type="search" class="search" placeholder="' + t('Suchen') + '" aria-label="' + t('Suchen') + '" value="' + esc(wf.q) + '">' +
        '<div class="word-filter">' +
          '<div class="ltabs" role="tablist">' + [['all', t('Alle'), ws.total]].concat(levels.map(function (lv) { return [lv, lv, (ws.by[lv] || {}).total || 0]; })).map(function (o) {
            return '<button role="tab" aria-selected="' + (wf.lv === o[0]) + '" data-wf="lv" data-v="' + o[0] + '">' + o[1] + '<small>' + o[2] + '</small></button>';
          }).join('') + '</div>' +
          '<button class="fchip" aria-pressed="' + (wf.st === 'new') + '" data-wf="st" data-v="' + (wf.st === 'new' ? 'all' : 'new') + '">' + t('Nur neue') + '</button>' +
        '</div>' +
      '</div>' +
      (rows.length ? '<div class="word-list">' + rows.slice(0, wf.shown).map(function (w) {
        var n = seen[w.id] || 0;
        return '<div class="wrow' + (n ? ' seen' : '') + '"><span class="tag' + lvc(w.lv) + '">' + w.lv + '</span>' +
          '<p class="w-de" lang="de" data-say="' + esc(w.de) + '">' + esc(w.de) + '</p><span class="w-zh">' + esc(w.zh) + '</span>' +
          '<span class="w-n">' + (n ? '×' + n : '') + '</span></div>';
      }).join('') + '</div>' : '<div class="empty">' + t('Keine Treffer') + '</div>') +
      (rows.length > wf.shown ? '<button class="btn ghost block small" data-act="w-more" style="margin-top:12px">' + t('Mehr anzeigen') + '</button>' : '') +
      '</div>';
    wireSpeak(view);
    var go = view.querySelector('[data-act="words-go"]'); if (go) go.onclick = startWords;
    var more = view.querySelector('[data-act="w-more"]');
    if (more) more.onclick = function () { wf.shown += 200; var y = window.scrollY; viewWords(); window.scrollTo(0, y); };
    view.querySelectorAll('[data-wf]').forEach(function (b) {
      b.onclick = function () { wf[b.dataset.wf] = b.dataset.v; wf.shown = 120; viewWords(); };
    });
    var inp = view.querySelector('.search');
    inp.oninput = function () {
      wf.q = inp.value; wf.shown = 120;
      var pos = inp.selectionStart;
      viewWords();
      var again = view.querySelector('.search');
      again.focus(); again.setSelectionRange(pos, pos);
    };
  }

  function viewSettings() {
    var s = S.state.settings;
    function seg(name, opts, cur) {
      return '<div class="seg small" role="group" aria-label="' + name + '">' + opts.map(function (o) {
        return '<button aria-pressed="' + (String(o[0]) === String(cur)) + '" data-set="' + name + '" data-v="' + o[0] + '">' + o[1] + '</button>';
      }).join('') + '</div>';
    }
    function sw(key, label) {
      return '<label class="setting sw-row" for="sw-' + key + '"><span>' + label + '</span><span class="switch"><input type="checkbox" role="switch" id="sw-' + key + '" data-sw="' + key + '"' + (s[key] ? ' checked' : '') + '><i aria-hidden="true"></i></span></label>';
    }
    view.innerHTML = '<div>' +
      '<div class="page-head"><h1>' + t('Einstellungen') + '</h1></div>' +
      '<div class="list">' +
        '<div class="setting"><span>' + t('Sprache') + '</span>' + seg('lang', [['de', 'Deutsch'], ['zh', '中文']], G.i18n.lang()) + '</div>' +
        '<div class="setting"><span>' + t('Tagesziel') + '</span>' + seg('goal', [[10, '10'], [20, '20'], [30, '30'], [50, '50']], s.goal) + '</div>' +
        sw('sound', t('Töne')) +
        (G.sound.canSpeak() ? sw('tts', t('Vorlesen')) : '') +
        (G.sound.canSpeak() && s.tts ? sw('autoSpeak', t('Nach jeder Antwort vorlesen')) : '') +
        (G.sound.canVibrate() ? sw('haptic', t('Vibration')) : '') +
        '<div class="setting"><span>' + t('Design') + '</span>' + seg('theme', [['auto', t('Auto')], ['light', t('Hell')], ['dark', t('Dunkel')]], s.theme) + '</div>' +
      '</div>' +
      '<h2 class="section-title">' + t('Daten') + ' <button class="info" data-tip="' + t('Fortschritt wird nur in diesem Browser gespeichert. Mit Export/Import auf ein anderes Gerät übertragen.') + '" aria-label="' + t('Info: Fortschritt wird nur in diesem Browser gespeichert') + '">i</button></h2>' +
      '<div class="btn-row">' +
        '<button class="btn ghost small" data-act="export">' + t('Exportieren') + '</button>' +
        '<button class="btn ghost small" data-act="import">' + t('Importieren') + '</button>' +
        '<input type="file" accept="application/json,.json" hidden data-file>' +
      '</div>' +
      '<div class="danger-zone">' +
        '<p>' + t('Zurücksetzen löscht XP, Serie und den gesamten Lernfortschritt unwiderruflich.') + '</p>' +
        '<button class="btn ghost danger small" data-act="reset">' + t('Fortschritt zurücksetzen') + '</button>' +
      '</div>' +
      '</div>';
    view.querySelectorAll('[data-set]').forEach(function (b) {
      b.onclick = function () {
        var k = b.dataset.set, v = b.dataset.v;
        S.set(k, k === 'goal' ? +v : v);
        if (k === 'theme') applyTheme();
        if (k === 'lang') G.i18n.applyStatic();
        refresh();
      };
    });
    view.querySelectorAll('[data-sw]').forEach(function (i) {
      i.onchange = function () {
        var k = i.dataset.sw;
        S.set(k, i.checked);
        if (i.checked && k === 'sound') G.sound.ok();
        if (i.checked && (k === 'tts' || k === 'autoSpeak')) G.sound.speak('Hallo! Viel Spaß beim Lernen.');
        if (k === 'tts') refresh();
      };
    });
    view.querySelector('[data-act="export"]').onclick = function () {
      var name = 'umlaut-' + S.dayKey() + '.json';
      var blob = new Blob([S.exportJSON()], { type: 'application/json' });
      var touch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      if (touch && window.File && navigator.canShare) {
        var f = new File([blob], name, { type: 'application/json' });
        if (navigator.canShare({ files: [f] })) {
          navigator.share({ files: [f], title: 'Umlaut' }).catch(function () {});
          return;
        }
      }
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'umlaut-' + S.dayKey() + '.json';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    };
    var file = view.querySelector('[data-file]');
    view.querySelector('[data-act="import"]').onclick = function () { file.click(); };
    file.onchange = function () {
      var f = file.files[0]; if (!f) return;
      confirmDlg({ title: t('Importieren?'), text: t('Der aktuelle Fortschritt wird durch die Datei ersetzt.'), ok: t('Ersetzen'), danger: true })
        .then(function (yes) {
          if (!yes) { file.value = ''; return; }
          f.text().then(function (txt) {
            try { S.importJSON(txt); applyTheme(); G.i18n.applyStatic(); refresh(); toast(t('Importiert')); }
            catch (e) { toast(t('Ungültige Datei')); }
            file.value = '';
          });
        });
    };
    view.querySelector('[data-act="reset"]').onclick = function () {
      confirmDlg({ title: t('Alles zurücksetzen?'), text: t('XP, Serie und Lernfortschritt werden unwiderruflich gelöscht.'), ok: t('Löschen'), danger: true })
        .then(function (yes) { if (yes) { S.reset(); refresh(); toast(t('Zurückgesetzt')); } });
    };
  }

  // ---------- router ----------
  function route() {
    var h = location.hash.replace(/^#\/?/, '');
    var parts = h.split('/');
    var r = parts[0] || 'learn';
    var nav = r;
    if (r === 'unit') { viewUnit(parts[1]); nav = 'learn'; }
    else if (r === 'review') viewReview();
    else if (r === 'stats') { viewStats(); var cs = view.querySelector('.cal-scroll'); if (cs) cs.scrollLeft = cs.scrollWidth; }
    else if (r === 'words') viewWords();
    else if (r === 'settings') viewSettings();
    else { viewLearn(); nav = 'learn'; }
    renderChrome(nav);
    return r;
  }
  var lastRoute = null;
  function onHash() {
    var r = route();
    if (r !== lastRoute) { window.scrollTo(0, 0); lastRoute = r; }
  }
  function refresh() { route(); }

  // browser / Android bars follow the effective theme
  var darkMQ = window.matchMedia('(prefers-color-scheme: dark)');
  function applyTheme() {
    var t = S.state.settings.theme;
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
    var dark = t === 'dark' || (t !== 'light' && darkMQ.matches);
    var old = document.querySelector('meta[name="theme-color"]');
    var meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = dark ? '#12141a' : '#f6f7fb';
    if (old) old.replaceWith(meta); else document.head.appendChild(meta);
  }
  if (darkMQ.addEventListener) darkMQ.addEventListener('change', applyTheme);

  // back to the learning path, scrolled to the current unit
  function home() {
    viewLearn._scrolled = false;
    if (location.hash.replace(/^#\/?/, '') !== '') location.replace('#/');
    else { refresh(); window.scrollTo(0, 0); }
  }
  G.app = { refresh: refresh, toast: toast, home: home };
  document.addEventListener('touchstart', function () {}, { passive: true });
  document.addEventListener('contextmenu', function (e) {
    if (e.target.closest && e.target.closest('button, a, .tile, .opt, .node, img, .nav-link')) e.preventDefault();
  });
  applyTheme();
  G.i18n.applyStatic();
  window.addEventListener('hashchange', onHash);
  window.addEventListener('resize', function () { document.documentElement.style.setProperty('--tb', topbar.offsetHeight + 'px'); });
  onHash();
  // keep "due" counts fresh when returning to the app
  document.addEventListener('visibilitychange', function () { if (!document.hidden && !G.lesson.active) refresh(); });

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
})();
