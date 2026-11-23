/* Exam vocabulary: parses the word list, generates inflected forms and finds key words in sentences */
(function () {
  'use strict';
  var NOUN_END = ['', 'e', 'en', 'n', 's', 'es', 'er', 'ern', 'nen'];
  var ADJ_END = ['', 'e', 'en', 'er', 'es', 'em'];
  var INSEP = /^(be|ge|er|ver|zer|ent|emp|miss|über|unter|wider|hinter)/;

  var list = [], byId = {}, nounMap = {}, otherMap = {};

  function addNoun(form, entry) { if (form && !nounMap[form]) nounMap[form] = entry; }
  function addOther(form, entry) { if (form && form.length > 2 && !otherMap[form]) otherMap[form] = entry; }

  function build(text) {
    text.split('\n').forEach(function (line) {
      line = line.trim();
      if (!line || line.indexOf('//') === 0) return;
      var f = line.split('|');
      var lemma = f[0].trim(), type = (f[3] || 'x').trim();
      if (byId[lemma]) return;
      var entry = { id: lemma, de: lemma.replace('·', ''), zh: (f[1] || '').trim(), lv: (f[2] || 'B1').trim(), type: type };
      var extra = (f[4] || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
      byId[lemma] = entry;
      list.push(entry);

      if (type === 'n') {
        var noun = lemma.replace(/^(der|die|das)\s+/, '');
        NOUN_END.forEach(function (e) { addNoun(noun + e, entry); });
        extra.forEach(function (x) { addNoun(x, entry); });
      } else if (type === 'v') {
        var words = lemma.split(' ');
        var verb = words[words.length - 1];
        var parts = verb.split('·');
        var prefix = parts.length > 1 ? parts[0] : '';
        var base = parts.length > 1 ? parts[1] : parts[0];
        var inf = prefix + base;
        var stem = /en$/.test(base) ? base.slice(0, -2) : base.slice(0, -1);
        var forms = [inf, stem + 'e', stem + 'st', stem + 't', stem + 'en', stem + 'et',
          stem + 'te', stem + 'test', stem + 'ten', stem + 'tet', stem + 'ete', stem + 'eten',
          inf + 'd', inf + 'de', inf + 'den', inf + 'der', inf + 'des'];
        if (prefix) forms.push(prefix + 'zu' + base);
        var ge = (INSEP.test(base) || /ieren$/.test(base)) ? '' : 'ge';
        [prefix + ge + stem + 't', prefix + ge + stem + 'et'].forEach(function (p) {
          ADJ_END.forEach(function (e) { forms.push(p + e); });
        });
        extra.forEach(function (x) { forms.push(x); ADJ_END.forEach(function (e) { if (e) forms.push(x + e); }); });
        forms.forEach(function (x) { addOther(x.toLowerCase(), entry); });
      } else if (type === 'a') {
        var a = lemma.toLowerCase();
        ADJ_END.forEach(function (e) {
          addOther(a + e, entry);
          addOther(a + 'er' + e, entry);
          if (e) { addOther(a + 'st' + e, entry); addOther(a + 'est' + e, entry); }
        });
        extra.forEach(function (x) { addOther(x.toLowerCase(), entry); });
      } else {
        extra.forEach(function (x) { addNoun(x, entry); });
      }
    });
  }

  function find(text) {
    var seen = {}, out = [];
    String(text || '').split(/[^A-Za-zÄÖÜäöüß]+/).forEach(function (t) {
      if (t.length < 3) return;
      var e = nounMap[t] || otherMap[t.toLowerCase()];
      if (e && !seen[e.id]) { seen[e.id] = true; out.push(e); }
    });
    return out;
  }

  build(window.GRAMMATIK_WORDS || '');

  var cache = {};
  G.vocab = {
    list: list,
    get: function (id) { return byId[id]; },
    find: find,
    // key words of one exercise (from its correct sentence)
    of: function (itemId) {
      if (cache[itemId]) return cache[itemId];
      var ex = G.itemIndex[itemId] && G.itemIndex[itemId].ex;
      if (!ex) return [];
      var text = ex.t === 'm' ? ex.pairs.map(function (p) { return p.join(' '); }).join(' ') : G.fullSentence(ex);
      return (cache[itemId] = find(text));
    }
  };
})();
