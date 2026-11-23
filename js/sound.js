/* Sound effects (WebAudio) and German speech (speechSynthesis) */
(function () {
  'use strict';
  var ctx = null;
  function ac() {
    if (!ctx) {
      var C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      ctx = new C();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  function tone(freq, start, dur, type, vol) {
    var c = ac(); if (!c) return;
    var t = c.currentTime + start;
    var o = c.createOscillator(), g = c.createGain();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol || 0.18, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(c.destination);
    o.start(t); o.stop(t + dur + 0.02);
  }
  function enabled() { return G.store.state.settings.sound; }
  function haptic(pattern) {
    if (G.store.state.settings.haptic && navigator.vibrate && (!navigator.userActivation || navigator.userActivation.hasBeenActive)) { try { navigator.vibrate(pattern); } catch (e) {} }
  }

  var voice = null;
  function pickVoice() {
    if (!('speechSynthesis' in window)) return;
    var vs = speechSynthesis.getVoices().filter(function (v) { return /^de(-|_|$)/i.test(v.lang); });
    vs.sort(function (a, b) { return score(b) - score(a); });
    voice = vs[0] || null;
  }
  function score(v) {
    var s = 0;
    if (/de-DE/i.test(v.lang)) s += 4;
    if (/natural|neural|online|google/i.test(v.name)) s += 3;
    if (v.localService) s += 1;
    return s;
  }
  if ('speechSynthesis' in window) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }

  G.sound = {
    haptic: haptic,
    canVibrate: function () { return 'vibrate' in navigator; },
    ok: function () { haptic(15); if (!enabled()) return; tone(660, 0, 0.12, 'sine', 0.16); tone(990, 0.09, 0.22, 'sine', 0.16); },
    bad: function () { haptic([40, 50, 40]); if (!enabled()) return; tone(220, 0, 0.18, 'triangle', 0.2); tone(165, 0.12, 0.28, 'triangle', 0.2); },
    tap: function () { haptic(8); if (!enabled()) return; tone(520, 0, 0.05, 'sine', 0.06); },
    done: function () {
      if (!enabled()) return;
      [523, 659, 784, 1047].forEach(function (f, i) { tone(f, i * 0.11, 0.3, 'sine', 0.15); });
    },
    canSpeak: function () { return 'speechSynthesis' in window; },
    speak: function (text) {
      if (!('speechSynthesis' in window) || !text) return;
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'de-DE';
      if (voice) u.voice = voice;
      u.rate = 0.95;
      speechSynthesis.speak(u);
    }
  };
})();
