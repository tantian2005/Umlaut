/* Compact exercise format, one exercise per line:
     c <sentence with ___> | <correct> | <wrong> | <wrong> | <wrong> # <explanation>
     i <sentence with ___> | <answer>;<other accepted answer> | <hint> # <explanation>
     o <Chinese meaning> | <German sentence> | <alternative order>;<…> # <explanation>
     m <prompt> | left=right;left=right;… # <explanation>
   An optional {prompt} right after the type letter replaces the default instruction.
   Lines starting with // are comments. */
(function () {
  'use strict';
  window.G = window.G || {};
  var U = window.GRAMMATIK_UNITS = window.GRAMMATIK_UNITS || [];
  var X = window.GRAMMATIK_EXTEND = window.GRAMMATIK_EXTEND || [];

  function parse(text) {
    var out = [];
    text.split('\n').forEach(function (raw) {
      var line = raw.trim();
      if (!line || line.indexOf('//') === 0) return;
      var t = line.charAt(0), rest = line.slice(2).trim(), e = '', p = null;
      var k = rest.search(/ #( |$)/);
      if (k >= 0) { e = rest.slice(k + 2).trim(); rest = rest.slice(0, k); }
      if (rest.charAt(0) === '{') {
        var close = rest.indexOf('}');
        p = rest.slice(1, close).trim();
        rest = rest.slice(close + 1).trim();
      }
      var f = rest.split(' | ').map(function (s) { return s.trim(); });
      var ex;
      if (t === 'c') ex = { t: 'c', q: f[0], o: f.slice(1) };
      else if (t === 'i') {
        var a = f[1].split(';').map(function (s) { return s.trim(); });
        ex = { t: 'i', q: f[0], a: a.length > 1 ? a : a[0], h: f[2] || null };
      }
      else if (t === 'o') {
        ex = { t: 'o', zh: f[0], a: f[1] };
        if (f[2]) ex.alt = f[2].split(';').map(function (s) { return s.trim(); });
      }
      else if (t === 'm') {
        ex = { t: 'm', p: p || f[0], pairs: f[1].split(';').map(function (s) {
          var j = s.indexOf('=');
          return [s.slice(0, j).trim(), s.slice(j + 1).trim()];
        }) };
        p = null;
      }
      else throw new Error('Unknown exercise line: ' + line);
      if (p) ex.p = p;
      ex.e = e;
      out.push(ex);
    });
    return out;
  }

  G.dsl = {
    parse: parse,
    unit: function (u, text) { if (text) u.ex = parse(text); U.push(u); },
    extend: function (id, text) { X.push({ id: id, ex: parse(text) }); },
    ex: function (de, zh) { return '<div class="ex"><p lang="de">' + de + '</p>' + (zh ? '<p class="zh">' + zh + '</p>' : '') + '</div>'; }
  };
})();
