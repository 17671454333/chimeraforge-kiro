/**
 * ChimeraForge Audio Alchemist — Polyphonic WebAudio Telemetry Synthesizer
 * Translates EARS AST complexity & PBT verification states into warm Dorian-mode chords.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.AudioAlchemist = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // D Dorian scale frequencies (Hz) for rich cyber-gothic harmonic chords
  const DORIAN_FREQS = [146.83, 164.81, 174.61, 196.00, 220.00, 246.94, 261.63, 293.66, 329.63, 349.23, 392.00, 440.00];

  function playTelemetryChord(astSummary) {
    if (typeof window === 'undefined') return { played: false, reason: 'headless' };
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return { played: false, reason: 'no-webaudio' };

    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.18, now + 0.06);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.45);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    const health = (astSummary && astSummary.specHealthScore) || 100;
    filter.frequency.setValueAtTime(health >= 80 ? 1450 : 620, now);
    filter.Q.setValueAtTime(3.2, now);

    masterGain.connect(filter);
    filter.connect(ctx.destination);

    // Pick consonant triad for high health, tense minor second/tritone for ambiguous specs
    const chordIndices = health >= 80 ? [0, 2, 4, 7, 9] : [0, 1, 3, 6];
    chordIndices.forEach((idx, i) => {
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();
      osc.type = i % 2 === 0 ? 'triangle' : 'sawtooth';
      const baseFreq = DORIAN_FREQS[idx % DORIAN_FREQS.length];
      osc.frequency.setValueAtTime(baseFreq, now + i * 0.055);

      noteGain.gain.setValueAtTime(0.001, now + i * 0.055);
      noteGain.gain.exponentialRampToValueAtTime(0.22 / chordIndices.length, now + i * 0.055 + 0.04);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.35);

      osc.connect(noteGain);
      noteGain.connect(masterGain);
      osc.start(now + i * 0.055);
      osc.stop(now + 1.42);
    });

    setTimeout(() => {
      if (ctx.state !== 'closed') ctx.close().catch(() => {});
    }, 1600);

    return { played: true, mode: health >= 80 ? 'D_DORIAN_HARMONIC' : 'TENSION_CLUSTER', filterHz: health >= 80 ? 1450 : 620 };
  }

  return { playTelemetryChord };
});
