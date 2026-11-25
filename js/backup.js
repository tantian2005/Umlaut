/* Automatic backup to a local file (File System Access API: Chrome / Edge on desktop and Android).
   The chosen file handle is kept in IndexedDB; the progress JSON is rewritten every few minutes
   when something changed, after lessons and when the app goes to the background.
   Safari / iOS and Firefox do not allow silent file writes: there the feature stays hidden. */
(function () {
  'use strict';
  var S = G.store;
  var supported = 'showSaveFilePicker' in window && 'indexedDB' in window;
  var handle = null, perm = 'none', dirty = false, busy = false, listeners = [];
  var LAST = 'umlaut.backup.last', EVERY = 5 * 60 * 1000;

  function db(mode, fn) {
    return new Promise(function (res, rej) {
      var r = indexedDB.open('umlaut-backup', 1);
      r.onupgradeneeded = function () { r.result.createObjectStore('kv'); };
      r.onerror = function () { rej(r.error); };
      r.onsuccess = function () {
        var tx = r.result.transaction('kv', mode), st = tx.objectStore('kv'), q = fn(st);
        tx.oncomplete = function () { res(q && q.result); r.result.close(); };
        tx.onerror = function () { rej(tx.error); };
      };
    });
  }
  function emit() { listeners.forEach(function (f) { try { f(); } catch (e) {} }); }
  function last() { try { return +localStorage.getItem(LAST) || 0; } catch (e) { return 0; } }

  function write() {
    if (!handle || perm !== 'granted' || busy) return Promise.resolve(false);
    busy = true;
    return handle.createWritable().then(function (w) {
      return w.write(S.exportJSON()).then(function () { return w.close(); });
    }).then(function () {
      dirty = false; busy = false;
      try { localStorage.setItem(LAST, String(Date.now())); } catch (e) {}
      emit(); return true;
    }, function () { busy = false; perm = 'prompt'; emit(); return false; });
  }
  function choose() {
    return window.showSaveFilePicker({
      suggestedName: 'umlaut-backup.json',
      types: [{ description: 'JSON', accept: { 'application/json': ['.json'] } }]
    }).then(function (h) {
      handle = h; perm = 'granted';
      return db('readwrite', function (st) { return st.put(h, 'handle'); }).catch(function () {});
    }).then(write).catch(function () { return false; });
  }
  // after a restart the browser asks again; this must run from a tap
  function resume() {
    if (!handle) return choose();
    return handle.requestPermission({ mode: 'readwrite' }).then(function (p) {
      perm = p; emit(); return p === 'granted' ? write() : false;
    }).catch(function () { return false; });
  }
  function stop() {
    handle = null; perm = 'none';
    try { localStorage.removeItem(LAST); } catch (e) {}
    db('readwrite', function (st) { return st.delete('handle'); }).catch(function () {});
    emit();
  }

  if (supported) {
    db('readonly', function (st) { return st.get('handle'); }).then(function (h) {
      if (!h) return;
      handle = h;
      return h.queryPermission({ mode: 'readwrite' }).then(function (p) { perm = p; emit(); });
    }).catch(function () {});
    S.on(function () { dirty = true; });
    setInterval(function () { if (dirty) write(); }, EVERY);
    document.addEventListener('visibilitychange', function () { if (document.hidden && dirty) write(); });
  }
  // ask the browser not to evict localStorage under storage pressure
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(function () {});

  G.backup = {
    supported: supported,
    status: function () { return { on: !!handle, perm: perm, last: last(), name: handle && handle.name }; },
    choose: choose, resume: resume, stop: stop, now: write,
    onChange: function (f) { listeners.push(f); }
  };
})();
