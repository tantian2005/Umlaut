/* Lesson engine: exercise rendering, checking, feedback, results */
(function () {
  'use strict';
  var S = G.store;
  var tr = function (k, v) { return G.t(k, v); };
  var root = document.getElementById('lesson');
  var LESSON_SIZE = 8;
  var UMLAUTS = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'];

  var ICON = {
    close: '<svg viewBox="0 0 24 24"><path d="M6.4 5 12 10.6 17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4z"/></svg>',
    ok: '<svg viewBox="0 0 24 24"><path d="M9.5 16.2 5.3 12l-1.4 1.4 5.6 5.6L21 7.5l-1.4-1.4z"/></svg>',
    bad: '<svg viewBox="0 0 24 24"><path d="M6.4 5 12 10.6 17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4z"/></svg>',
    speak: '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>',
    book: '<svg viewBox="0 0 24 24"><path d="M5 3h11a3 3 0 0 1 3 3v15H7a2 2 0 0 1-2-2zm2 14v2h10v-2zM8 7v2h8V7zm0 4v2h6v-2z"/></svg>',
    trophy: '<svg viewBox="0 0 24 24"><path d="M18 4V2H6v2H2v4a4 4 0 0 0 4 4h.3A6 6 0 0 0 11 15.9V19H7v3h10v-3h-4v-3.1a6 6 0 0 0 4.7-3.9h.3a4 4 0 0 0 4-4V4zM4 8V6h2v4a2 2 0 0 1-2-2zm16 0a2 2 0 0 1-2 2V6h2z"/></svg>',
    flame: '<svg viewBox="0 0 24 24"><path fill="#ff7a1a" d="M13.5 1s1 3.5-1.6 7.2C10 11 8 10 8 7.5 5.6 9.6 4 12.6 4 15.5 4 19.6 7.6 23 12 23s8-3.4 8-7.5C20 8.6 13.5 1 13.5 1z"/><path fill="#ffc233" d="M12 23c-2.4 0-4-1.7-4-4 0-2.6 2.5-4.6 3.3-7 1 1.5 4.7 3.6 4.7 7 0 2.3-1.6 4-4 4z"/></svg>',
    bolt: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>',
    target: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 17a7 7 0 1 1 7-7 7 7 0 0 1-7 7zm0-11a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/></svg>',
    clock: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm1-13h-2v6l5 3 1-1.7-4-2.3z"/></svg>'
  };
  G.ICON = ICON;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  G.esc = esc;

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  G.shuffle = shuffle;

  // ---------- answer normalisation ----------
  function norm(s) {
    return String(s).replace(/[’‘`´]/g, "'").replace(/[„“”]/g, '"')
      .replace(/\s+/g, ' ').trim().replace(/^[.!?,;:]+|[.!?,;:]+$/g, '').trim().toLowerCase();
  }
  function translit(s) {
    return s.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');
  }
  function arr(a) { return Array.isArray(a) ? a : [a]; }

  // ---------- picking ----------
  // difficulty grows lesson by lesson: choice/matching → gap filling & sentence building → translation
  var STAGE_BONUS = [{ c: 3, m: 2, i: 1, o: 0 }, { c: 1, m: 0.5, i: 2.5, o: 2.5 }, { c: 0, m: 0, i: 2.5, o: 3 }];
  var RANK = { m: 0, c: 1, i: 2, o: 3, d: 3.5 };
  function stageOf(unit) { return Math.min(S.unit(unit.id).lessons, 2); }
  function pickForUnit(unit) {
    var ids = unit.ids.slice();
    var bonus = STAGE_BONUS[stageOf(unit)];
    var scored = ids.map(function (id) {
      var ex = G.itemIndex[id].ex, it = S.item(id), s = Math.random() * 2 + (bonus[ex.t] || 0);
      // C1: long, exam-style sentences come up more often
      if (unit.level === 'C1') s += Math.min(((ex.q || ex.a || '').length) / 70, 2.5);
      if (!it) s += 5;
      else {
        if (it.box > 0) s += 4;
        s += Math.min(it.w, 3) - Math.min(it.c, 3) * 0.6;
      }
      return { id: id, s: s };
    });
    scored.sort(function (a, b) { return b.s - a.s; });
    // per-stage mix: how many of each type at most (filled by priority, then topped up freely)
    var CAPS = [{ c: 4, m: 1, i: 2, o: 1 }, { c: 3, m: 1, i: 3, o: 2 }, { c: 2, m: 0, i: 3, o: 3 }][stageOf(unit)];
    var size = Math.min(LESSON_SIZE, ids.length), used = { c: 0, m: 0, i: 0, o: 0 }, pick = [];
    scored.forEach(function (x) {
      var t = G.itemIndex[x.id].ex.t;
      if (pick.length < size && used[t] < CAPS[t]) { pick.push(x.id); used[t]++; }
    });
    scored.forEach(function (x) {
      var t = G.itemIndex[x.id].ex.t;
      if (pick.length < size && pick.indexOf(x.id) < 0 && t !== 'm') pick.push(x.id);
    });
    // dictation: from the second lesson on, sentences of this unit that were already answered correctly
    var nD = stageOf(unit) === 0 || !canDictate() ? 0 : stageOf(unit);
    if (nD && unit.dIds) {
      var pool = unit.dIds.filter(function (id) { var src = S.item(G.itemIndex[id].ex.src); return src && src.c > 0; });
      var dPick = G.shuffle(pool).slice(0, nD);
      if (dPick.length) pick = pick.slice(0, Math.max(1, pick.length - dPick.length)).concat(dPick);
    }
    // easy → hard inside the lesson
    var key = {};
    pick.forEach(function (id) { key[id] = RANK[G.itemIndex[id].ex.t] + Math.random() * 0.9; });
    return pick.sort(function (a, b) { return key[a] - key[b]; });
  }

  // ---------- lesson state ----------
  var L = null;

  function start(opts) {
    var ids = opts.ids || (opts.unit ? pickForUnit(opts.unit) : []);
    if (!ids.length) return;
    L = {
      kind: opts.kind || 'unit',
      unit: opts.unit || null,
      stage: opts.unit ? stageOf(opts.unit) : 0,
      level: opts.level || null,
      queue: ids.map(function (id) { return { id: id, tries: 0 }; }),
      total: ids.length,
      solved: 0,
      firstOK: 0,
      wrongIds: {},
      attempted: {},
      combo: 0,
      t0: Date.now(),
      cur: null,
      answered: false,
      closing: false
    };
    root.hidden = false;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('in-lesson');
    history.pushState({ lesson: 1 }, '');
    render();
    fitViewport();
    next();
  }

  // keep the lesson exactly inside the visible area while the on-screen keyboard is open.
  // One update per frame and no layout switches, so the screen follows the keyboard instead of jumping.
  var fitRaf = 0, lastH = 0, lastTop = 0;
  function fitViewport() {
    if (fitRaf) return;
    fitRaf = requestAnimationFrame(function () { fitRaf = 0; fitNow(); });
  }
  function fitNow() {
    var vv = window.visualViewport;
    if (!vv || root.hidden) return;
    // newer iOS shrinks the whole page for the keyboard (then nothing is obscured), older iOS only the
    // visual viewport. So "keyboard open" = a text field has focus on a touch device; the explicit
    // height is only needed when part of the page is really hidden behind the keyboard.
    var obscured = window.innerHeight - vv.height > 120;
    var a = document.activeElement;
    var kb = obscured || (touchUI.matches && root.contains(a) && isField(a));
    var h = obscured ? Math.round(vv.height) : 0, top = obscured ? Math.round(vv.offsetTop) : 0;
    if (Math.abs(h - lastH) > 2) { root.style.height = h ? h + 'px' : ''; lastH = h; }
    if (top !== lastTop) { root.style.top = top ? top + 'px' : ''; lastTop = top; }
    root.classList.toggle('kb', kb);
    if (obscured) {
      // close any gap between the lesson's bottom edge and the keyboard (iOS can report them inconsistently)
      var gap = Math.round(vv.offsetTop + vv.height - root.getBoundingClientRect().bottom);
      if (Math.abs(gap) > 2) { lastH = Math.max(200, lastH + gap); root.style.height = lastH + 'px'; }
    }
    if (kb) keepFocusVisible();
  }
  // if the focused field ended up under the keyboard, move the lesson body (not the page) just enough
  function keepFocusVisible() {
    var a = document.activeElement, body = root.querySelector('.lesson-body');
    if (!a || !body || !body.contains(a) || !/INPUT|TEXTAREA/.test(a.tagName)) return;
    var r = a.getBoundingClientRect(), b = body.getBoundingClientRect();
    if (r.bottom > b.bottom - 8) body.scrollTop += r.bottom - b.bottom + 16;
    else if (r.top < b.top + 8) body.scrollTop -= b.top - r.top + 16;
  }
  var touchUI = window.matchMedia('(hover: none) and (pointer: coarse)');
  function isField(el) { return el && (el.tagName === 'TEXTAREA' || (el.tagName === 'INPUT' && /^(text|search)?$/.test(el.type || ''))); }
  root.addEventListener('focusin', function (e) { if (isField(e.target)) fitNow(); });
  // tapping the ä/ö/ü keys keeps the focus; only a real blur closes the keyboard
  root.addEventListener('focusout', function () { setTimeout(fitNow, 60); });
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', fitViewport);
    window.visualViewport.addEventListener('scroll', fitViewport);
  }

  function render() {
    root.innerHTML =
      '<div class="lesson-top">' +
        '<button class="icon-btn" data-act="quit" aria-label="' + tr('Lektion beenden') + '">' + ICON.close + '</button>' +
        '<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-label="' + tr('Fortschritt') + '"><i style="width:0"></i></div>' +
        '<div class="combo" aria-live="polite"></div>' +
        (L.kind === 'test' ? '' : '<button class="icon-btn" data-act="tip" aria-label="' + tr('Grammatik') + '">' + ICON.book + '</button>') +
      '</div>' +
      '<div class="lesson-body"><div class="q-wrap"></div></div>' +
      '<div class="lesson-foot"><div class="foot-in"></div></div>';
    root.querySelector('[data-act="quit"]').onclick = askQuit;
    var tb = root.querySelector('[data-act="tip"]');
    if (tb) tb.onclick = showTip;
  }

  function showTip() {
    if (!L || !L.cur || L.finished) return;
    var u = G.itemIndex[L.cur.id].unit;
    var s = G.ui.sheet(
      '<div class="sheet-head"><div><span class="tag' + G.lvc(u.level) + '">' + u.ch + '</span>' +
      '<h2 style="margin-top:8px" lang="de">' + esc(u.title) + '</h2></div>' +
      '<button class="icon-btn" data-close aria-label="' + tr('Schließen') + '">' + ICON.close + '</button></div>' +
      '<div class="tip">' + u.tip + '</div>', { wide: true });
    G.ui.wireSpeak(s.el);
  }

  function setProgress() {
    var p = L.total ? L.solved / L.total : 0;
    var bar = root.querySelector('.progress');
    bar.firstChild.style.width = Math.max(0, p * 100) + '%';
    bar.setAttribute('aria-valuenow', Math.round(p * 100));
    var c = root.querySelector('.combo');
    c.textContent = L.combo >= 3 ? L.combo + '×' : '';
  }

  function next() {
    G.sound.stop();
    setProgress();
    var e = L.queue.shift();
    if (!e) return finish();
    L.cur = e;
    L.answered = false;
    var info = G.itemIndex[e.id];
    L.view = makeView(info.ex, info.unit, e);
    var body = root.querySelector('.lesson-body');
    body.innerHTML = '';
    body.appendChild(L.view.el);
    body.scrollTop = 0;
    footIdle();
    if (L.view.focus) setTimeout(L.view.focus, 60);
  }

  function footIdle() {
    var foot = root.querySelector('.lesson-foot');
    foot.className = 'lesson-foot';
    L.partial = null;
    var auto = L.view.auto;
    var oldKeys = foot.querySelector('.foot-keys'); if (oldKeys) oldKeys.remove();
    if (L.view.insert) {
      var bar = document.createElement('div');
      bar.className = 'foot-keys';
      bar.setAttribute('aria-label', tr('Sonderzeichen'));
      bar.innerHTML = UMLAUTS.map(function (c) { return '<button type="button" tabindex="-1" data-k="' + c + '">' + c + '</button>'; }).join('');
      bar.querySelectorAll('button').forEach(function (b) {
        b.addEventListener('mousedown', function (e) { e.preventDefault(); });
        b.addEventListener('touchstart', function (e) { e.preventDefault(); L.view.insert(b.dataset.k); }, { passive: false });
        b.onclick = function () { L.view.insert(b.dataset.k); };
      });
      foot.insertBefore(bar, foot.firstChild);
    }
    foot.querySelector('.foot-in').innerHTML =
      '<button class="btn ghost skip" data-act="skip">' + tr('Überspringen') + '</button>' +
      (auto ? '' : '<button class="btn ok" data-act="check" disabled>' + tr('Prüfen') + '</button>');
    foot.querySelector('[data-act="skip"]').onclick = function () { answer(false, true); };
    var chk = foot.querySelector('[data-act="check"]');
    if (chk) chk.onclick = check;
    updateCheck();
  }

  function updateCheck() {
    var chk = root.querySelector('[data-act="check"]');
    if (chk) chk.disabled = !L.view.ready();
  }

  function check() {
    if (L.answered || !L.view.ready()) return;
    var r = L.view.grade();
    L.partial = r.partial ? r : null;
    answer(r.ok, false, r.note);
  }

  function answer(ok, skipped, note) {
    if (L.answered) return;
    L.answered = true;
    // phones: close the keyboard so the result panel gets the whole bottom of the screen
    if (touchUI.matches && isField(document.activeElement)) document.activeElement.blur();
    var e = L.cur, info = G.itemIndex[e.id], ex = info.ex;
    var first = !L.attempted[e.id];
    L.attempted[e.id] = true;
    e.tries++;
    if (skipped) ok = false;
    L.view.reveal(ok);

    var isMatch = ex.t === 'm';
    L.snap = { id: e.id, first: first, before: first ? JSON.stringify(S.item(e.id) || null) : null };
    if (first) S.markItem(e.id, ok);
    else if (ok && S.item(e.id) && S.item(e.id).box === 1) { /* retry success inside lesson: keep box */ }

    if (ok) {
      L.solved++;
      L.combo++;
      if (first) L.firstOK++;
      G.sound.ok();
    } else {
      L.combo = 0;
      L.wrongIds[e.id] = true;
      if (isMatch || L.kind === 'test') L.solved++;
      else L.queue.push(e);
      G.sound.bad();
    }
    S.save();
    setProgress();
    showFeedback(ok, ex, note, isMatch && !ok);
  }

  // the learner's translation was a valid alternative: count it as correct
  function forgive(ex) {
    var sn = L.snap, e = L.cur;
    if (!sn || sn.id !== e.id) return;
    if (sn.first) { S.restoreItem(e.id, sn.before); S.markItem(e.id, true); L.firstOK++; }
    delete L.wrongIds[e.id];
    L.queue = L.queue.filter(function (q) { return q !== e; });
    // in a test a wrong answer was already counted as done (it is not repeated)
    if (L.kind !== 'test') L.solved++;
    L.combo++;
    S.save();
    setProgress();
    L.view.reveal(true);
    var ta = root.querySelector('.tr-input'); if (ta) ta.classList.remove('bad');
    G.sound.ok();
    showFeedback(true, ex, null, false);
  }

  var PRAISE = ['Richtig!', 'Super!', 'Genau!', 'Sehr gut!', 'Klasse!', 'Perfekt!'];

  function showFeedback(ok, ex, note, softWrong) {
    var foot = root.querySelector('.lesson-foot');
    var fk = foot.querySelector('.foot-keys'); if (fk) fk.remove();
    var part = !ok && L.partial;
    foot.className = 'lesson-foot ' + (ok ? 'ok' : part ? 'part' : 'bad');
    var full = fullSentence(ex);
    var speak = full && S.state.settings.tts && G.sound.canSpeak()
      ? '<button class="say" data-act="say" aria-label="' + tr('Vorlesen') + '">' + ICON.speak + '</button>' : '';
    var head = tr(ok ? PRAISE[Math.floor(Math.random() * PRAISE.length)] : part ? 'Teilweise richtig' : (softWrong ? 'Fast!' : 'Richtige Lösung:'));
    if (part) { var pta = root.querySelector('.tr-input'); if (pta) { pta.classList.remove('bad'); pta.classList.add('part'); } }
    var ovr = !ok && !softWrong && L.view.override && !(L.partial && L.partial.strict) ? '<button class="ovr" data-act="ovr">' + tr('Ich hatte recht') + '</button>' : '';
    var ans = '';
    if (!ok && !softWrong && ex.t === 'm') { head = tr('Fast!'); ans = briefOf(ex) ? '<p class="exp brief">' + briefOf(ex) + '</p>' : ''; }
    else if (!ok && !softWrong) ans = '<p class="ans">' + esc(answerText(ex)) + speak + '</p>';
    // correct: no need to repeat the sentence (it is in the explanation sheet) — just the short reason
    else if (ok && briefOf(ex) && !note) ans = '<p class="exp brief">' + briefOf(ex) + '</p>';
    var words = G.vocab ? G.vocab.of(L.cur.id) : [];
    if (words.length) S.markWords(words.map(function (w) { return w.id; }));
    // like Duolingo: the panel stays short (result + solution); the full explanation opens on demand
    var more = explainHTML(ex, words, full);
    var whyBtn = more ? '<button class="why-btn" data-act="why">' + ICON_BOOK + '<span>' + tr('Erklärung') + '</span></button>' : '';
    var html =
      '<div class="fb" role="status">' +
        '<div class="fb-icon">' + (ok ? ICON.ok : ICON.bad) + '</div>' +
        '<div class="fb-text">' +
          '<div class="fb-head"><h3>' + head + '</h3>' + ovr + whyBtn + '</div>' +
          (part ? '<p class="mine">' + L.partial.diff + '</p><p class="exp sol">' + tr('Richtige Lösung:') + '</p>' : '') + ans +
          (note ? '<p class="exp">' + esc(note) + '</p>' : '') +
        '</div>' +
      '</div>' +
      '<button class="btn ' + (ok ? 'ok' : 'bad') + '" data-act="next">' + tr('Weiter') + '</button>';
    foot.querySelector('.foot-in').innerHTML = html;
    var nb = foot.querySelector('[data-act="next"]');
    nb.onclick = next;
    var sb = foot.querySelector('[data-act="say"]');
    if (sb) sb.onclick = function () { G.sound.speak(full); };
    var ob = foot.querySelector('[data-act="ovr"]');
    if (ob) ob.onclick = function () { forgive(ex); };
    var wb = foot.querySelector('[data-act="why"]');
    if (wb) wb.onclick = function () {
      var sh = G.ui.sheet(more);
      sh.el.querySelectorAll('.wchip').forEach(function (c) { c.onclick = function () { G.sound.speak(c.dataset.w); }; });
      var s2 = sh.el.querySelector('[data-act="say"]');
      if (s2) s2.onclick = function () { G.sound.speak(full); };
    };
    setTimeout(function () { nb.focus({ preventScroll: true }); }, 30);
    if (S.state.settings.tts && S.state.settings.autoSpeak && full) G.sound.speak(full);
  }

  var ICON_BOOK = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3.5 5.8C6.2 4.4 9.3 4.4 12 6v13.5c-2.7-1.6-5.8-1.6-8.5-.2zM20.5 5.8C17.8 4.4 14.7 4.4 12 6v13.5c2.7-1.6 5.8-1.6 8.5-.2z"/></svg>';
  var ICON_X = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.4 5 12 10.6 17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6 10.6 12 5 6.4z"/></svg>';

  // short line for the result panel / detailed note for the explanation sheet
  function matchNote(ex) { return ex.t === 'm' && G.MATCH_NOTES && G.MATCH_NOTES[(ex.p || '') + '|' + ex.pairs[0][0]]; }
  function briefOf(ex) { var m = matchNote(ex); return ex.e || (m ? m[0] : ''); }
  function detailOf(ex) { var m = matchNote(ex); return (m ? m[1] : '') || ex.e || ''; }

  // explanation sheet: grammar note, Chinese meaning, why each wrong option is wrong, words
  function explainHTML(ex, words, full) {
    var why = whyList(ex), detail = detailOf(ex);
    // the sentence's meaning (not for translation/word-order items: their prompt already is the Chinese)
    var zh = ex.t === 'o' ? '' : (ex.zh || (G.SENT_ZH && full && G.SENT_ZH[full]) || '');
    var pairs = ex.t === 'm' ? '<div class="pairs">' + ex.pairs.map(function (p) {
      return '<div><b lang="de">' + esc(p[0]) + '</b><span>' + esc(p[1]) + '</span></div>';
    }).join('') + '</div>' : '';
    var vocab = words.length ? '<div class="vocab">' + words.map(function (w) {
      return '<button class="wchip" data-w="' + esc(w.de) + '"><b lang="de">' + esc(w.de) + '</b><span>' + esc(w.zh) + '</span></button>';
    }).join('') + '</div>' : '';
    if (!detail && !why && !vocab && !pairs && !zh) return '';
    var speak = full && S.state.settings.tts && G.sound.canSpeak()
      ? '<button class="say" data-act="say" aria-label="' + tr('Vorlesen') + '">' + ICON.speak + '</button>' : '';
    return '<div class="sheet-head"><h2>' + tr('Erklärung') + '</h2><button class="icon-btn" data-close aria-label="' + tr('Schließen') + '">' + ICON_X + '</button></div>' +
      '<div class="explain">' +
        (full ? '<p class="ex-sent" lang="de">' + esc(full) + speak + '</p>' : '') +
        (zh ? '<p class="tr">' + esc(zh) + '</p>' : '') +
        (detail ? '<p class="exp">' + detail + '</p>' : '') + pairs +
        (why ? '<h3>' + tr('Andere Optionen') + '</h3>' + why : '') +
        (vocab ? '<h3>' + tr('Wörter') + '</h3>' + vocab : '') +
      '</div>';
  }

  // why each wrong option is wrong (js/data/why.js, keyed by "question|correct answer"); the picked one first
  function whyList(ex) {
    var w = ex.t === 'c' && G.WHY && G.WHY[ex.q + '|' + ex.o[0]];
    if (!w) return '';
    var picked = L.view.picked && L.view.picked(), items = [];
    ex.o.slice(1).forEach(function (o, i) {
      if (!w[i]) return;
      var li = '<li' + (o === picked ? ' class="picked"' : '') + '><b lang="de">' + esc(o) + '</b><span>' + esc(w[i]) + '</span></li>';
      if (o === picked) items.unshift(li); else items.push(li);
    });
    return '<ul class="why">' + items.join('') + '</ul>';
  }

  function answerText(ex) {
    if (ex.t === 'c') return ex.q && ex.q.indexOf('___') >= 0 ? fillGaps(ex.q, ex.o[0]) : ex.o[0];
    if (ex.t === 'i') return fillGaps(ex.q, arr(ex.a)[0]);
    if (ex.t === 'o' || ex.t === 'd') return ex.a;
    if (ex.t === 'm') return ex.pairs.map(function (p) { return p[0] + ' – ' + p[1]; }).join(' · ');
    return '';
  }
  function fullSentence(ex) {
    if (ex.t === 'm') return '';
    if (ex.say) return ex.say;
    return answerText(ex);
  }
  function fillGaps(q, ans) {
    var parts = String(ans).split(' / ');
    var i = 0;
    return q.replace(/___/g, function () { var p = parts[Math.min(i, parts.length - 1)]; i++; return p; })
      .replace(/\s+([,.!?])/g, '$1').replace(/\s{2,}/g, ' ').trim();
  }
  G.fillGaps = fillGaps;

  // ---------- views ----------
  function kindLabel(ex, unit) {
    if (L && L.kind === 'test') return '<p class="q-kind"><span class="tag' + G.lvc(unit.level) + '">' + tr('{lv} · Test', { lv: L.level }) + '</span></p>';
    var lv = '<span class="tag' + G.lvc(unit.level) + '">' + esc(unit.title) + '</span>';
    return '<p class="q-kind">' + lv + '</p>';
  }
  function titleFor(ex, unit) {
    if (ex.p) return tr(ex.p);
    if (unit && unit.cPrompt && ex.t === 'c') return tr(unit.cPrompt);
    return tr({ c: 'Wähle die richtige Antwort.', i: 'Ergänze die Lücke.', o: 'Bilde den Satz.', m: 'Finde die Paare.', d: 'Schreib, was du hörst.' }[ex.t]);
  }

  function sentenceHTML(q, gapFn) {
    var parts = q.split('___');
    var html = '';
    for (var i = 0; i < parts.length; i++) {
      html += esc(parts[i]);
      if (i < parts.length - 1) html += gapFn(i);
    }
    return html;
  }

  function makeView(ex, unit, entry) {
    var wrap = document.createElement('div');
    wrap.className = 'q-wrap';
    var head = kindLabel(ex, unit) + '<h2 class="q-title">' + esc(titleFor(ex, unit)) +
      (ex.t === 'o' ? '<br><span class="zh">' + esc(ex.zh) + '</span>' : '') + '</h2>';
    if (ex.t === 'c') return viewChoice(wrap, head, ex);
    if (ex.t === 'i') return viewInput(wrap, head, ex);
    if (ex.t === 'o' && translateMode(entry.id)) {
      head = kindLabel(ex, unit) + '<h2 class="q-title">' + esc(tr('Übersetze ins Deutsche.')) + '<br><span class="zh">' + esc(ex.zh) + '</span></h2>';
      return viewTranslate(wrap, head, ex);
    }
    if (ex.t === 'o') return viewOrder(wrap, head, ex);
    if (ex.t === 'm') return viewMatch(wrap, head, ex);
    if (ex.t === 'd') return viewDictation(wrap, head, ex);
    throw new Error('unknown exercise type ' + ex.t);
  }

  function translateMode(id) {
    if (L.kind === 'test') return false;
    if (L.kind === 'unit') return L.stage >= 2;
    var it = S.item(id);
    return !!(it && it.c >= 2);
  }
  function normSentence(s) {
    return translit(String(s).toLowerCase().replace(/[„“”"'’.,!?;:()\u2013-]/g, ' ').replace(/\s+/g, ' ').trim());
  }

  // ---------- translation grading: exact / typo / partial ----------
  var DETERMINERS = /^(der|die|das|den|dem|des|ein|eine|einen|einem|einer|eines|kein|keine|keinen|keinem|keiner|keines|(mein|dein|sein|ihr|unser|euer|eur|ihr)(e|en|em|er|es)?|dies(e|en|em|er|es))$/;
  function lev(a, b) {
    var m = a.length, n = b.length, d = [], i, j;
    for (i = 0; i <= m; i++) d[i] = [i];
    for (j = 0; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++)
      {
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    return d[m][n];
  }
  // zum = zu dem, im = in dem … : both spellings count as the same words
  var CONTRACT = { zum: 'zu dem', zur: 'zu der', im: 'in dem', ins: 'in das', am: 'an dem', ans: 'an das', beim: 'bei dem', vom: 'von dem', aufs: 'auf das', uebers: 'ueber das', fuers: 'fuer das', durchs: 'durch das', unterm: 'unter dem' };
  function toks(s) {
    return normSentence(s).split(' ').filter(Boolean).map(function (w) { return CONTRACT[w] || w; }).join(' ').split(' ');
  }
  // German allows another constituent in front as long as the verb stays second:
  // "Ich habe gestern … gesehen" → "Gestern habe ich … gesehen". Build those inversions from a reference.
  function inversions(a) {
    var out = [];
    for (var k = 1; k <= 3 && k < a.length - 2; k++) {
      var S = a.slice(0, k), V = a[k], rest = a.slice(k + 1);
      for (var i = 0; i < rest.length - 1; i++) for (var n = 1; n <= 5 && i + n <= rest.length - 1; n++) {
        var C = rest.slice(i, i + n);
        out.push(C.concat([V], S, rest.slice(0, i), rest.slice(i + n)).join(' '));
      }
    }
    return out;
  }
  // adverbs that may stand in different places of the middle field ("ich habe gestern meinen Freund …" = "… meinen Freund gestern …")
  var ADV = /^(gestern|heute|morgen|vorgestern|uebermorgen|jetzt|nun|bald|spaeter|frueher|damals|immer|oft|manchmal|selten|nie|niemals|schon|bereits|noch|auch|nicht|sehr|gern|gerne|lieber|leider|endlich|sofort|gleich|wieder|zusammen|vielleicht|wahrscheinlich|sicher|bestimmt|natuerlich|eigentlich|wirklich|ziemlich|fast|kaum|nur|erst|dort|hier|da|abends|morgens|mittags|nachts|jeden|letzte|letzten|naechste|naechsten|zuerst|dann|danach|trotzdem|deshalb|deswegen|also|ausserdem|dabei|darum|allerdings|jedoch|wohl|doch|ja|mal|halt|eben)$/;
  var PREP = /^(in|an|auf|mit|zu|von|bei|nach|aus|fuer|ueber|unter|vor|hinter|neben|zwischen|durch|gegen|ohne|um|seit|wegen|trotz|waehrend|statt|bis)$/;
  // position of the finite verb: an auxiliary/modal among the first words, else after a one-word
  // subject (or after article + noun)
  function verbPos(a) {
    for (var k = 1; k <= 3 && k < a.length; k++) if (AUX.test(a[k])) return k;
    return DETERMINERS.test(a[0]) ? 2 : 1;
  }
  function adverbMoves(a) {
    var out = [], v = verbPos(a);
    for (var i = v + 1; i < a.length - 1; i++) {
      if (!ADV.test(a[i])) continue;
      var b = a.slice(0, i).concat(a.slice(i + 1));
      // never between an article / preposition and what follows it ("meinen gestern Freund")
      for (var j = v + 1; j < b.length; j++) if (j !== i && !DETERMINERS.test(b[j - 1]) && !PREP.test(b[j - 1])) out.push(b.slice(0, j).concat([a[i]], b.slice(j)));
    }
    return out;
  }
  function sameOrderVariant(a, u) {
    var uj = u.join(' '), forms = [a].concat(adverbMoves(a));
    for (var i = 0; i < forms.length; i++) {
      if (forms[i].join(' ') === uj) return i > 0;
      if (inversions(forms[i]).indexOf(uj) >= 0) return true;
    }
    return inversions(u).indexOf(a.join(' ')) >= 0;
  }
  // word-order mistakes that are certainly wrong (no "German is flexible" hint, no "I was right" button):
  // an article or preposition separated from the word it belongs to, or a statement that starts with its verb
  function clearOrderError(a, u, src) {
    for (var i = 0; i < a.length - 1; i++) {
      if (!DETERMINERS.test(a[i]) && !PREP.test(a[i])) continue;
      if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])) continue;   // word occurs twice: can't tell which one
      var j = u.indexOf(a[i]);
      if (j < 0 || u[j + 1] !== a[i + 1]) return true;
    }
    if (/\?\s*$/.test(String(src))) return false;   // questions: leave it to the learner
    // the finite verb (an auxiliary or modal in the reference) must be second: only one complete phrase may stand before it
    for (var k = 1; k <= 3 && k < a.length; k++) {
      // the verb is known for sure when it is an auxiliary/modal, or when the sentence starts with a pronoun
      if (!AUX.test(a[k]) && !(k === 1 && /^(ich|du|er|sie|es|wir|ihr|man)$/.test(a[0]))) continue;
      var p = u.indexOf(a[k]);
      if (p === 0) return true;
      if (p > 0 && a.join(' ').indexOf(u.slice(0, p).join(' ')) < 0) return true;
      // the participle / infinitive closes the sentence
      var last = a[a.length - 1];
      if (AUX.test(a[k]) && !AUX.test(last) && u[u.length - 1] !== last && u.indexOf(last) >= 0) return true;
      break;
    }
    return false;
  }
  var AUX = /^(habe|hast|hat|haben|habt|hatte|hattest|hatten|bin|bist|ist|sind|seid|war|warst|waren|wird|werde|wirst|werden|werdet|wurde|wurden|kann|kannst|koennen|konnte|konnten|muss|musst|muessen|musste|mussten|will|willst|wollen|wollte|wollten|soll|sollst|sollen|sollte|sollten|darf|darfst|duerfen|durfte|moechte|moechtest|moechten|wuerde|wuerdest|wuerden|haette|haetten|waere|waeren|koennte|koennten|muesste|sollte)$/;
  function gradeTranslation(value, accepted) {
    var u = toks(value), uj = u.join(' '), best = null;
    if (!u.length) return { ok: false };
    for (var k = 0; k < accepted.length; k++) {
      var a = toks(accepted[k]);
      if (a.join(' ') === uj) return { ok: true };
      // valid word-order variant (fronted adverbial, subject after the verb) → correct
      if (u.length === a.length && sameOrderVariant(a, u))
        return { ok: true, note: tr('Andere Wortstellung, auch richtig. Musterlösung: {a}', { a: accepted[k] }) };
      var r = { a: a, src: accepted[k], score: 0 };
      if (a.length === u.length) {
        var typos = [], forms = [], other = [];
        for (var i = 0; i < a.length; i++) {
          if (a[i] === u[i]) continue;
          var dist = lev(a[i], u[i]);
          // ending-only differences (eine/einen, gute/guten) are grammar, not spelling
          var sameStem = a[i].slice(0, -2) === u[i].slice(0, -2) || a[i].indexOf(u[i]) === 0 || u[i].indexOf(a[i]) === 0;
          if (DETERMINERS.test(a[i]) && DETERMINERS.test(u[i])) forms.push(i);
          else if (dist <= (a[i].length > 6 ? 2 : 1) && !sameStem) typos.push(i);
          else if (sameStem) forms.push(i);
          else other.push(i);
        }
        r.score = a.length - typos.length * 0.2 - forms.length - other.length * 1.5;
        r.kind = (!forms.length && !other.length) ? 'typo' : (!other.length ? 'form' : 'words');
        r.mark = typos.concat(forms, other);
      } else if (Math.abs(a.length - u.length) === 1) {
        // exactly one word missing or one word too many
        var longer = a.length > u.length ? a : u, shorter = a.length > u.length ? u : a, sj = shorter.join(' ');
        for (var j = 0; j < longer.length; j++) {
          if (longer.slice(0, j).concat(longer.slice(j + 1)).join(' ') !== sj) continue;
          r.score = a.length - 1;
          if (a.length > u.length) { r.kind = 'missing'; r.mark = []; r.word = a[j]; }
          else { r.kind = 'extra'; r.mark = [j]; }
          break;
        }
        if (!r.kind) r.score = -99;
      } else r.score = -99;
      if (u.slice().sort().join(' ') === a.slice().sort().join(' ')) {
        r.kind = clearOrderError(a, u, accepted[k]) ? 'orderWrong' : 'order'; r.score = a.length - 0.5; r.mark = [];
      }
      if (!best || r.score > best.score) best = r;
    }
    if (!best || !best.kind || best.kind === 'words' && best.mark.length > Math.ceil(best.a.length / 3)) return { ok: false };
    var raw = String(value).trim().split(/\s+/).map(function (w) { return w.replace(/^[„“"'(]+|[.,!?;:“”"')]+$/g, ''); }).filter(Boolean);
    if (raw.length !== u.length) raw = u;
    var shown = raw.map(function (w, i) { return best.mark && best.mark.indexOf(i) >= 0 ? '<mark>' + esc(w) + '</mark>' : esc(w); }).join(' ');
    if (best.kind === 'typo') return { ok: true, note: tr('Schreibweise: {a}', { a: best.src }) };
    var NOTE = { form: 'Fast richtig: Artikel oder Endung prüfen.', order: 'Alle Wörter stimmen, nur die Wortstellung nicht.', orderWrong: 'Alle Wörter stimmen, aber die Wortstellung ist falsch.', words: 'Teilweise richtig.', extra: 'Ein Wort zu viel.' };
    var missing = best.kind === 'missing' && (String(best.src).split(/\s+/).map(function (w) { return w.replace(/[.,!?;:„“"]/g, ''); })
      .filter(function (w) { return translit(w.toLowerCase()) === best.word; })[0] || best.word);
    var msg = missing ? tr('Es fehlt ein Wort: {a}', { a: missing }) : tr(NOTE[best.kind]);
    return { ok: false, partial: true, note: msg, diff: shown, strict: best.kind === 'orderWrong' };
  }

  // ---------- dictation ----------
  function canDictate() { return S.state.settings.tts && G.sound.canSpeak() && G.sound.hasGermanVoice(); }
  // turtle = slow playback
  var ICON_SLOW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.2 15.2C2.6 10.6 6 7.5 10.2 7.5s7.6 3.1 8 7.7z"/><circle cx="20.2" cy="12.6" r="2.1"/><path d="M4.4 16.2h3l-.7 2.6H4.1zM12.8 16.2h3l.3 2.6h-2.6zM1 14.8l1.6-.6.3 1.2z"/><path fill="rgba(255,255,255,.35)" d="M10.2 9.2 12.6 11l-.9 2.8H8.7L7.8 11z"/></svg>';
  function viewDictation(wrap, head, ex) {
    wrap.innerHTML = head +
      '<div class="dict-play">' +
        '<button class="play" data-rate="0.95" aria-label="' + tr('Normal') + '">' + ICON.speak + '</button>' +
        '<button class="play slow" data-rate="0.6" aria-label="' + tr('Langsam') + '">' + ICON_SLOW + '</button>' +
      '</div>' +
      '<textarea class="tr-input dict-input" lang="de" rows="4" aria-label="' + tr('Schreib, was du hörst.') + '" autocomplete="off" autocorrect="off" autocapitalize="sentences" spellcheck="false" enterkeyhint="done"></textarea>' +
      '<div class="keys" aria-label="' + tr('Sonderzeichen') + '">' +
      UMLAUTS.map(function (c) { return '<button type="button" tabindex="-1" data-k="' + c + '">' + c + '</button>'; }).join('') + '</div>';
    var ta = wrap.querySelector('.tr-input');
    function play(rate) { G.sound.speak(ex.a, rate); }
    wrap.querySelectorAll('.play').forEach(function (b) {
      b.addEventListener('mousedown', function (e) { e.preventDefault(); });   // keep the keyboard open
      b.onclick = function () { play(+b.dataset.rate); };
    });
    setTimeout(function () { if (L && L.view && L.view.el === wrap && !L.answered) play(0.95); }, 350);
    ta.addEventListener('input', function () { ta.style.height = 'auto'; ta.style.height = ta.scrollHeight + 'px'; updateCheck(); });
    ta.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); if (L.answered) next(); else check(); }
    });
    function insert(ch) {
      if (L.answered) return;
      var s = ta.selectionStart, en = ta.selectionEnd;
      ta.value = ta.value.slice(0, s) + ch + ta.value.slice(en);
      ta.focus(); ta.setSelectionRange(s + 1, s + 1); updateCheck();
    }
    wrap.querySelectorAll('.keys button').forEach(function (b) {
      b.addEventListener('mousedown', function (e) { e.preventDefault(); });
      b.onclick = function () { insert(b.dataset.k); };
    });
    return {
      el: wrap, insert: insert,
      focus: function () { if (window.matchMedia('(hover: hover)').matches) ta.focus({ preventScroll: true }); },
      ready: function () { return ta.value.trim().length > 0; },
      grade: function () { return gradeDictation(ta.value, ex.a); },
      reveal: function (ok) { ta.readOnly = true; ta.classList.add(ok ? 'ok' : 'bad'); },
      key: function () { return false; }
    };
  }
  // Dictation is graded on spelling: same words in the same order; capitals count; punctuation does not.
  function dWords(s) {
    return String(s).replace(/[„“”"«»‚‘’]/g, '').split(/\s+/).map(function (w) { return w.replace(/^[(\[]+|[.,!?;:)\]]+$/g, ''); }).filter(Boolean);
  }
  function gradeDictation(value, ref) {
    var u = dWords(value), a = dWords(ref);
    if (!u.length) return { ok: false };
    var loose = function (w) { return translit(w.toLowerCase()); };
    // word-level alignment (Levenshtein with backtrace)
    var m = a.length, n = u.length, d = [], i, j;
    for (i = 0; i <= m; i++) { d[i] = [i]; }
    for (j = 0; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (loose(a[i - 1]) === loose(u[j - 1]) ? 0 : 1));
    var marks = [], missing = [], caseMarks = [], spelled = false;
    i = m; j = n;
    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && d[i][j] === d[i - 1][j - 1] + (loose(a[i - 1]) === loose(u[j - 1]) ? 0 : 1)) {
        if (loose(a[i - 1]) !== loose(u[j - 1])) marks.push(j - 1);
        else if (a[i - 1] !== u[j - 1]) {
          if (a[i - 1].toLowerCase() === u[j - 1].toLowerCase()) caseMarks.push(j - 1);   // Gross-/Kleinschreibung
          else spelled = true;                                                               // ae for ä, ss for ß
        }
        i--; j--;
      } else if (i > 0 && d[i][j] === d[i - 1][j] + 1) { missing.unshift(a[i - 1]); i--; }
      else { marks.push(j - 1); j--; }
    }
    var errors = marks.length + missing.length + caseMarks.length;
    if (!errors) return spelled ? { ok: true, note: tr('Schreibweise: {a}', { a: ref }) } : { ok: true };
    if (d[m][n] > Math.max(1, Math.ceil(m / 4))) return { ok: false };
    var all = marks.concat(caseMarks);
    var shown = u.map(function (w, k) { return all.indexOf(k) >= 0 ? '<mark>' + esc(w) + '</mark>' : esc(w); }).join(' ');
    var notes = [];
    if (marks.length) notes.push(tr('{n} Fehler', { n: marks.length }));
    if (missing.length) notes.push(tr('Es fehlt: {a}', { a: missing.join(', ') }));
    if (caseMarks.length) notes.push(tr('Groß- und Kleinschreibung prüfen.'));
    return { ok: false, partial: true, note: notes.join(' '), diff: shown, strict: true };
  }

  function viewTranslate(wrap, head, ex) {
    wrap.innerHTML = head +
      '<textarea class="tr-input" lang="de" rows="3" aria-label="' + tr('Deine Übersetzung') + '" autocomplete="off" autocorrect="off" autocapitalize="sentences" spellcheck="false" enterkeyhint="done"></textarea>' +
      '<div class="keys" aria-label="' + tr('Sonderzeichen') + '">' +
      UMLAUTS.map(function (c) { return '<button type="button" tabindex="-1" data-k="' + c + '">' + c + '</button>'; }).join('') + '</div>';
    var ta = wrap.querySelector('.tr-input');
    ta.addEventListener('input', function () { ta.style.height = 'auto'; ta.style.height = ta.scrollHeight + 'px'; updateCheck(); });
    ta.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); if (L.answered) next(); else check(); }
    });
    function insert(ch) {
      if (L.answered) return;
      var s = ta.selectionStart, en = ta.selectionEnd;
      ta.value = ta.value.slice(0, s) + ch + ta.value.slice(en);
      ta.focus(); ta.setSelectionRange(s + 1, s + 1); updateCheck();
    }
    wrap.querySelectorAll('.keys button').forEach(function (b) {
      b.addEventListener('mousedown', function (e) { e.preventDefault(); });
      b.onclick = function () { insert(b.dataset.k); };
    });
    var accepted = [ex.a].concat(ex.alt || []);
    return {
      el: wrap, insert: insert, override: true,
      focus: function () { if (window.matchMedia('(hover: hover)').matches) ta.focus({ preventScroll: true }); },
      ready: function () { return ta.value.trim().length > 0; },
      grade: function () { return gradeTranslation(ta.value, accepted); },
      reveal: function (ok) { ta.readOnly = true; ta.classList.add(ok ? 'ok' : 'bad'); },
      key: function () { return false; }
    };
  }

  function viewChoice(wrap, head, ex) {
    var opts = shuffle(ex.o.map(function (o, i) { return { text: o, ok: i === 0 }; }));
    var short = opts.every(function (o) { return o.text.length <= 16; }) && opts.length % 2 === 0;
    var nGaps = (ex.q.match(/___/g) || []).length;
    wrap.innerHTML = head +
      '<div class="sentence" lang="de">' + sentenceHTML(ex.q, function (i) { return '<span class="gap" data-g="' + i + '"> </span>'; }) +
      (ex.h ? ' <span class="hint">(' + esc(ex.h) + ')</span>' : '') + '</div>' +
      '<div class="options answers' + (short ? ' two' : '') + '" role="group" aria-label="' + tr('Antworten') + '">' +
      opts.map(function (o, i) {
        return '<button class="opt" lang="de" aria-pressed="false" data-i="' + i + '"><kbd>' + (i + 1) + '</kbd><span>' + esc(o.text) + '</span></button>';
      }).join('') + '</div>';
    var sel = -1;
    var btns = wrap.querySelectorAll('.opt');
    function choose(i) {
      if (L.answered) return;
      sel = i;
      btns.forEach(function (b, j) { b.setAttribute('aria-pressed', j === i ? 'true' : 'false'); });
      var parts = opts[i].text.split(' / ');
      wrap.querySelectorAll('.gap').forEach(function (g, gi) {
        g.textContent = nGaps > 1 ? (parts[gi] || parts[parts.length - 1]) : opts[i].text;
        g.classList.add('filled');
      });
      G.sound.tap();
      updateCheck();
    }
    btns.forEach(function (b, i) { b.onclick = function () { choose(i); }; });
    return {
      el: wrap,
      ready: function () { return sel >= 0; },
      picked: function () { return sel >= 0 ? opts[sel].text : null; },
      grade: function () { return { ok: opts[sel].ok }; },
      reveal: function () {
        btns.forEach(function (b, j) {
          b.disabled = true;
          if (opts[j].ok) b.classList.add('ok');
          else if (j === sel) b.classList.add('bad');
        });
      },
      key: function (k) {
        var n = parseInt(k, 10);
        if (n >= 1 && n <= opts.length) { choose(n - 1); return true; }
        return false;
      }
    };
  }

  function viewInput(wrap, head, ex) {
    var answers = arr(ex.a);
    var longest = answers.reduce(function (m, a) { return Math.max(m, a.length); }, 4);
    wrap.innerHTML = head +
      '<div class="sentence" lang="de">' + sentenceHTML(ex.q, function () {
        return '<input class="gap-input" type="text" lang="de" aria-label="' + tr('Antwort') + '" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="done" style="width:' + (longest + 2.5) + 'ch">';
      }) + (ex.h ? ' <span class="hint">(' + esc(ex.h) + ')</span>' : '') + '</div>' +
      '<div class="keys" aria-label="' + tr('Sonderzeichen') + '">' +
      UMLAUTS.map(function (c) { return '<button type="button" tabindex="-1" data-k="' + c + '">' + c + '</button>'; }).join('') +
      '</div>';
    var inp = wrap.querySelector('.gap-input');
    inp.addEventListener('input', updateCheck);
    inp.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); if (L.answered) next(); else check(); }
    });
    function insert(ch) {
      if (L.answered) return;
      var s = inp.selectionStart != null ? inp.selectionStart : inp.value.length;
      var en = inp.selectionEnd != null ? inp.selectionEnd : inp.value.length;
      inp.value = inp.value.slice(0, s) + ch + inp.value.slice(en);
      inp.focus();
      inp.setSelectionRange(s + 1, s + 1);
      updateCheck();
    }
    wrap.querySelectorAll('.keys button').forEach(function (b) {
      b.addEventListener('mousedown', function (e) { e.preventDefault(); });
      b.onclick = function () { insert(b.dataset.k); };
    });
    return {
      el: wrap,
      insert: insert,
      focus: function () { if (window.matchMedia('(hover: hover)').matches) inp.focus({ preventScroll: true }); },
      ready: function () { return inp.value.trim().length > 0; },
      grade: function () {
        var v = norm(inp.value);
        for (var i = 0; i < answers.length; i++) if (v === norm(answers[i])) return { ok: true };
        for (i = 0; i < answers.length; i++) if (translit(v) === translit(norm(answers[i]))) {
          return { ok: true, note: tr('Schreibweise: {a}', { a: answers[i] }) };
        }
        return { ok: false };
      },
      reveal: function (ok) { inp.readOnly = true; inp.classList.add(ok ? 'ok' : 'bad'); },
      key: function () { return false; }
    };
  }

  function viewOrder(wrap, head, ex) {
    var target = ex.a.replace(/[.!?]$/, '').replace(/,/g, '');
    var words = target.split(' ').concat(ex.x || []);
    var tiles = shuffle(words.map(function (w, i) { return { w: w, i: i }; }));
    // avoid giving the solution away by chance
    if (tiles.map(function (t) { return t.w; }).join(' ') === target && tiles.length > 2) tiles.push(tiles.shift());
    wrap.innerHTML = head +
      '<div class="build" lang="de" aria-label="' + tr('Dein Satz') + '"></div>' +
      '<div class="bank answers" lang="de">' + tiles.map(function (t, k) {
        return '<button class="tile" data-k="' + k + '">' + esc(t.w) + '</button>';
      }).join('') + '</div>';
    var build = wrap.querySelector('.build');
    var bankBtns = wrap.querySelectorAll('.bank .tile');
    var chosen = [];
    var justDragged = false;
    var shown = [];
    function redraw() {
      build.innerHTML = '';
      chosen.forEach(function (k, pos) {
        var b = document.createElement('button');
        b.className = 'tile' + (shown.indexOf(k) < 0 ? ' enter' : '');
        b.textContent = tiles[k].w;
        b.onclick = function () {
          if (L.answered || justDragged) return;
          chosen.splice(pos, 1); G.sound.tap(); redraw();
        };
        enableDrag(b, k, pos);
        build.appendChild(b);
      });
      shown = chosen.slice();
      bankBtns.forEach(function (b, k) { b.classList.toggle('ghost', chosen.indexOf(k) >= 0); });
      updateCheck();
    }
    bankBtns.forEach(function (b, k) {
      b.onclick = function () {
        if (L.answered || justDragged || chosen.indexOf(k) >= 0) return;
        chosen.push(k); G.sound.tap(); redraw();
      };
      enableDrag(b, k, -1);
    });

    // ---- drag & drop: drag a tile into the sentence, reorder it, or drag it back out ----
    function enableDrag(el, k, fromPos) {
      el.addEventListener('pointerdown', function (e) {
        if (L.answered || e.button > 0 || (fromPos < 0 && chosen.indexOf(k) >= 0)) return;
        var x0 = e.clientX, y0 = e.clientY, drag = null;
        function move(ev) {
          if (!drag) {
            if (Math.abs(ev.clientX - x0) + Math.abs(ev.clientY - y0) < 6) return;
            drag = startDrag(el, ev);
            try { el.releasePointerCapture && el.releasePointerCapture(ev.pointerId); } catch (e2) {}
          }
          ev.preventDefault();
          drag.px = ev.clientX; drag.py = ev.clientY;
          if (!drag.raf) drag.raf = requestAnimationFrame(function () {
            drag.raf = 0;
            drag.ghost.style.transform = 'translate3d(' + (drag.px - drag.dx) + 'px,' + (drag.py - drag.dy) + 'px,0) scale(1.06)';
            if (Math.abs(drag.px - (drag.lx || 0)) + Math.abs(drag.py - (drag.ly || 0)) > 6) {
              drag.lx = drag.px; drag.ly = drag.py;
              placeSlot(drag, drag.px, drag.py);
            }
          });
        }
        function up(ev) {
          document.removeEventListener('pointermove', move);
          document.removeEventListener('pointerup', up);
          document.removeEventListener('pointercancel', up);
          if (!drag && ev.type === 'pointerup' && Math.abs(ev.clientX - x0) + Math.abs(ev.clientY - y0) >= 8) {
            // fast flick without intermediate move events
            drag = startDrag(el, ev);
            placeSlot(drag, ev.clientX, ev.clientY);
          }
          if (!drag) return;
          if (drag.raf) { cancelAnimationFrame(drag.raf); drag.raf = 0; }
          if (ev.type === 'pointerup') placeSlot(drag, ev.clientX, ev.clientY);
          justDragged = true;
          setTimeout(function () { justDragged = false; }, 400);
          finishDrag(drag, k, fromPos, ev.type !== 'pointercancel');
        }
        document.addEventListener('pointermove', move, { passive: false });
        document.addEventListener('pointerup', up);
        document.addEventListener('pointercancel', up);
      });
    }
    // Sortable-list behaviour: a tile dragged from the sentence keeps its own spot as the placeholder,
    // so the other tiles never jump under the finger when the drag starts.
    function startDrag(el, ev) {
      var r = el.getBoundingClientRect();
      var ghost = el.cloneNode(true);
      ghost.className = 'tile tile-drag';
      ghost.style.width = r.width + 'px';
      ghost.style.transform = 'translate3d(' + r.left + 'px,' + r.top + 'px,0) scale(1.06)';
      document.body.appendChild(ghost);
      var fromBuild = el.parentNode === build, slot;
      if (fromBuild) { slot = el; el.classList.add('slot', 'placeholder'); }
      else {
        slot = document.createElement('span');
        slot.className = 'tile slot';
        slot.style.width = r.width + 'px';
        el.classList.add('dragging');
      }
      return { el: el, ghost: ghost, slot: slot, fromBuild: fromBuild, dx: ev.clientX - r.left, dy: ev.clientY - r.top, inside: fromBuild, index: 0 };
    }
    function placeSlot(d, x, y) {
      var br = build.getBoundingClientRect();
      d.inside = x > br.left - 24 && x < br.right + 24 && y > br.top - 24 && y < br.bottom + 24;
      build.classList.toggle('over', d.inside);
      if (d.fromBuild) d.slot.classList.toggle('leaving', !d.inside);
      if (!d.inside) { if (!d.fromBuild && d.slot.parentNode) d.slot.remove(); return; }
      var items = Array.prototype.filter.call(build.children, function (c) { return c !== d.slot; });
      var ox = br.left + build.clientLeft, oy = br.top + build.clientTop;
      var idx = items.length;
      for (var i = 0; i < items.length; i++) {
        var t = items[i], left = ox + t.offsetLeft, top = oy + t.offsetTop, bottom = top + t.offsetHeight;
        if (y < top || (y <= bottom && x < left + t.offsetWidth / 2)) { idx = i; break; }
      }
      d.index = idx;
      if (d.slot.parentNode === build && items[idx] === nextTile(d.slot)) return;
      // FLIP: remember where everything was, move the slot, then glide the others into place
      var before = items.map(function (t) { return [t.offsetLeft, t.offsetTop]; });
      build.insertBefore(d.slot, items[idx] || null);
      items.forEach(function (t, j) {
        var dx = before[j][0] - t.offsetLeft, dy = before[j][1] - t.offsetTop;
        if (!dx && !dy) return;
        t.style.transition = 'none';
        t.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
        t.offsetWidth;
        t.style.transition = 'transform .16s ease';
        t.style.transform = '';
      });
    }
    function nextTile(n) { var s = n.nextSibling; while (s && s.nodeType !== 1) s = s.nextSibling; return s; }
    function finishDrag(d, k, fromPos, commit) {
      d.ghost.remove();
      d.el.classList.remove('dragging', 'slot', 'placeholder', 'leaving');
      if (!d.fromBuild) d.slot.remove();
      build.classList.remove('over');
      if (!commit) { redraw(); return; }
      var next = chosen.slice();
      if (fromPos >= 0) next.splice(fromPos, 1);
      if (d.inside) next.splice(d.index, 0, k);
      else if (fromPos < 0) return;
      chosen = next;
      G.sound.tap();
      redraw();
    }
    return {
      el: wrap,
      ready: function () { return chosen.length > 0; },
      grade: function () {
        var s = norm(chosen.map(function (k) { return tiles[k].w; }).join(' '));
        var ok = [ex.a].concat(ex.alt || []).some(function (a) { return norm(a.replace(/,/g, '')) === s; });
        return { ok: ok };
      },
      reveal: function (ok) {
        build.classList.add(ok ? 'ok' : 'bad');
        build.querySelectorAll('.tile').forEach(function (b) { b.disabled = true; });
        bankBtns.forEach(function (b) { b.disabled = true; });
      },
      key: function (k) {
        if (k === 'Backspace' && chosen.length && !L.answered) { chosen.pop(); redraw(); return true; }
        return false;
      }
    };
  }

  function viewMatch(wrap, head, ex) {
    var left = shuffle(ex.pairs.map(function (p, i) { return { t: p[0], i: i }; }));
    var right = shuffle(ex.pairs.map(function (p, i) { return { t: p[1], i: i }; }));
    wrap.innerHTML = head +
      '<div class="match answers" lang="de">' +
        '<div class="col">' + left.map(function (x) { return '<button class="opt" aria-pressed="false" data-s="l" data-i="' + x.i + '">' + esc(x.t) + '</button>'; }).join('') + '</div>' +
        '<div class="col">' + right.map(function (x) { return '<button class="opt" aria-pressed="false" data-s="r" data-i="' + x.i + '">' + esc(x.t) + '</button>'; }).join('') + '</div>' +
      '</div>';
    var sel = { l: null, r: null }, done = 0, miss = 0;
    var view = {
      el: wrap, auto: true,
      ready: function () { return done === ex.pairs.length; },
      grade: function () { return { ok: miss === 0 }; },
      reveal: function () {},
      key: function () { return false; }
    };
    wrap.querySelectorAll('.opt').forEach(function (b) {
      b.onclick = function () {
        if (L.answered || b.classList.contains('gone')) return;
        var txt = b.textContent;
        if (S.state.settings.tts && /[A-Za-zÄÖÜäöüß]{2}/.test(txt) && !/[㐀-鿿]/.test(txt)) G.sound.speak(txt.replace(/[…]/g, ''));
        var side = b.dataset.s;
        if (sel[side]) sel[side].setAttribute('aria-pressed', 'false');
        sel[side] = b;
        b.setAttribute('aria-pressed', 'true');
        if (sel.l && sel.r) {
          var a = sel.l, c = sel.r;
          sel = { l: null, r: null };
          if (a.dataset.i === c.dataset.i) {
            G.sound.tap();
            [a, c].forEach(function (x) { x.setAttribute('aria-pressed', 'false'); x.classList.add('gone'); x.disabled = true; });
            done++;
            if (done === ex.pairs.length) setTimeout(function () {
              var r = view.grade();
              answer(r.ok, false);
            }, 250);
          } else {
            miss++;
            G.sound.bad();
            [a, c].forEach(function (x) {
              x.setAttribute('aria-pressed', 'false');
              x.classList.remove('shake'); void x.offsetWidth; x.classList.add('shake');
              clearTimeout(x._shakeT);
              x._shakeT = setTimeout(function () { x.classList.remove('shake'); }, 600);
            });
          }
        }
      };
    });
    return view;
  }

  // ---------- finish / quit ----------
  function finish() {
    var ms = Date.now() - L.t0;
    var unique = L.total;
    var perfect = Object.keys(L.wrongIds).length === 0;
    var xp = 10 + L.firstOK + (perfect ? 5 : 0);
    var before = L.unit ? S.unit(L.unit.id).lessons : 0;
    var xpBefore = S.todayXP(), goal = S.state.settings.goal;
    var acc = Math.round(100 * L.firstOK / unique);
    var res = S.finishLesson({ unitId: L.unit && L.unit.id, kind: L.kind, xp: xp, perfect: perfect, ms: ms, level: L.level, score: acc });
    var mastered = L.kind === 'unit' && before < G.need(L.unit) && before + 1 >= G.need(L.unit);
    var isTest = L.kind === 'test', passed = acc >= S.PASS;
    var mm = Math.floor(ms / 60000), ss = Math.floor(ms / 1000) % 60;
    G.sound.done();
    var foot = root.querySelector('.lesson-foot');
    foot.className = 'lesson-foot';
    root.querySelector('.combo').textContent = '';
    root.querySelector('.lesson-body').innerHTML =
      '<div class="done-wrap">' +
        '<div class="done-badge' + (isTest && !passed ? ' fail' : '') + '">' + ICON.trophy + '</div>' +
        '<h2' + (isTest && !passed ? ' class="fail"' : '') + '>' + (isTest ? (passed ? tr('{lv} bestanden!', { lv: L.level }) : tr('Noch nicht bestanden')) : tr(mastered ? 'Einheit gemeistert!' : perfect ? 'Fehlerfrei!' : 'Lektion geschafft!')) + '</h2>' +
        (isTest && !passed ? '<p class="need">' + tr('ab {p}%', { p: S.PASS }) + '</p>' : '') +
        '<div class="result-cards">' +
          '<div class="rc"><small>' + tr('XP') + '</small><b>' + ICON.bolt + xp + '</b></div>' +
          '<div class="rc acc"><small>' + tr('Genau') + '</small><b>' + ICON.target + acc + '%</b></div>' +
          '<div class="rc time"><small>' + tr('Zeit') + '</small><b>' + ICON.clock + mm + ':' + (ss < 10 ? '0' : '') + ss + '</b></div>' +
        '</div>' +
        '<div class="done-extra">' +
          (res.extended ? '<span class="streak-up">' + ICON.flame + tr(res.streak === 1 ? '{n} Tag' : '{n} Tage', { n: res.streak }) + '</span>' : '') +
          (xpBefore < goal && xpBefore + xp >= goal ? '<span class="goal-up">' + ICON.target + tr('Tagesziel erreicht') + '</span>' : '') +
        '</div>' +
        mistakesHTML(Object.keys(L.wrongIds)) +
      '</div>';
    var fk = foot.querySelector('.foot-keys'); if (fk) fk.remove();
    foot.querySelector('.foot-in').innerHTML = '<span></span><button class="btn" data-act="end">' + tr('Weiter') + '</button>';
    var b = foot.querySelector('[data-act="end"]');
    b.onclick = close;
    setTimeout(function () { b.focus({ preventScroll: true }); }, 50);
    G.ui.wireSpeak(root.querySelector('.done-wrap'));
    var tipBtn = root.querySelector('[data-act="tip"]'); if (tipBtn) tipBtn.hidden = true;
    L.finished = true;
    if (!isTest || passed) confetti(perfect || mastered || isTest ? 90 : 40);
    G.sound.haptic([20, 60, 20]);
  }

  function mistakesHTML(ids) {
    if (!ids.length) return '';
    return '<div class="mistakes"><h3>' + tr('Fehler') + '</h3>' + ids.map(function (id) {
      var ex = G.itemIndex[id].ex;
      return '<div class="mrow"><p lang="de" data-say="' + esc(fullSentence(ex)) + '">' + esc(answerText(ex)) + '</p>' + (ex.e ? '<small>' + ex.e + '</small>' : '') + '</div>';
    }).join('') + '</div>';
  }
  G.answerText = answerText;
  G.fullSentence = fullSentence;

  function confetti(n) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var box = document.createElement('div');
    box.className = 'confetti';
    var colors = ['#3b5bdb', '#18a058', '#f2a900', '#e03e4f', '#8b3fd9', '#ff7a1a'];
    for (var i = 0; i < n; i++) {
      var p = document.createElement('i');
      p.style.left = Math.random() * 100 + 'vw';
      p.style.background = colors[i % colors.length];
      p.style.animationDuration = (1.6 + Math.random() * 1.6) + 's';
      p.style.animationDelay = Math.random() * 0.4 + 's';
      p.style.setProperty('--dx', (Math.random() * 160 - 80) + 'px');
      p.style.setProperty('--r', (Math.random() * 900 - 450) + 'deg');
      box.appendChild(p);
    }
    document.body.appendChild(box);
    setTimeout(function () { box.remove(); }, 3800);
  }

  function askQuit() {
    if (!L) return;
    if (L.finished || (L.solved === 0 && !Object.keys(L.attempted).length)) return close();
    G.ui.confirm({
      title: tr('Lektion beenden?'),
      text: tr('Der Fortschritt dieser Lektion geht verloren.'),
      ok: tr('Beenden'),
      cancel: tr('Weiterlernen'),
      danger: true
    }).then(function (yes) { if (yes) close(); });
  }

  function close() {
    if (!L) return;
    var goHome = !!L.finished;
    L = null;
    document.body.classList.remove('in-lesson');
    G.sound.stop();
    root.hidden = true;
    root.style.height = root.style.top = ''; lastH = lastTop = 0; root.classList.remove('kb');
    root.innerHTML = '';
    document.body.style.overflow = '';
    if (history.state && history.state.lesson) { closingNav = true; pendingHome = goHome; history.back(); }
    else if (goHome) G.app.home();
    G.app.refresh();
  }

  var closingNav = false, pendingHome = false;
  window.addEventListener('popstate', function () {
    if (closingNav) {
      closingNav = false;
      if (pendingHome) { pendingHome = false; G.app.home(); }
      return;
    }
    if (L) {
      history.pushState({ lesson: 1 }, '');
      askQuit();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (!L || document.querySelector('.scrim')) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var inInput = e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA');
    if (e.key === 'Escape') { e.preventDefault(); askQuit(); return; }
    if ((e.key === 'h' || e.key === 'H') && !inInput && L.kind !== 'test') { e.preventDefault(); showTip(); return; }
    if (e.key === 'Enter') {
      if (inInput) return;
      if (L.finished) { e.preventDefault(); close(); }
      else if (L.answered) { e.preventDefault(); next(); }
      else if (L.view && !L.view.auto && L.view.ready()) { e.preventDefault(); check(); }
      return;
    }
    if (!inInput && !L.answered && L.view && L.view.key && L.view.key(e.key)) e.preventDefault();
  });

  G.lesson = {
    start: start,
    get active() { return !!L; },
    pickForUnit: pickForUnit,
    _norm: norm, _gradeTr: gradeTranslation, _cur: function () { return L && L.cur && !L.finished ? L.cur.id : null; }
  };
})();
