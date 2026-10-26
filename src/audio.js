// High-tech UI Sound Synthesizer using Web Audio API (Zero external assets needed)

let audioCtx = null;
let isMuted = false;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function toggleMute() {
  isMuted = !isMuted;
  return isMuted;
}

export function getMuteState() {
  return isMuted;
}

// Subtle high-tech click
export function playClickSound() {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.04);
    
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  } catch (e) {
    // Audio context may be restricted before interaction
  }
}

// Soft glide tick when scrubbing frames
let lastTickTime = 0;
export function playScrubTick(frequency = 550) {
  if (isMuted) return;
  const now = performance.now();
  if (now - lastTickTime < 45) return; // throttle
  lastTickTime = now;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(frequency * 0.5, ctx.currentTime + 0.025);
    
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.025);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.025);
  } catch (e) {}
}

// Chapter transition chime
export function playChapterChime() {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = ctx.currentTime + idx * 0.06;
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);
      
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.05, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.3);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(startTime);
      osc.stop(startTime + 0.3);
    });
  } catch (e) {}
}

// Acoustic sound simulation (Traffic/Rain) with Low-Pass filter toggle
let noiseSource = null;
let noiseGain = null;
let acousticFilter = null;
let isAcousticPlaying = false;

export function toggleAcousticDemo(isWindowClosed) {
  const ctx = getAudioContext();
  if (!ctx) return false;

  if (!isAcousticPlaying) {
    // Generate pink noise / urban ambient generator
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
    }

    noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;

    acousticFilter = ctx.createBiquadFilter();
    acousticFilter.type = 'lowpass';

    noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.18, ctx.currentTime);

    noiseSource.connect(acousticFilter);
    acousticFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    noiseSource.start();
    isAcousticPlaying = true;
  }

  // Set filter cutoff based on window open vs closed
  if (acousticFilter && noiseGain) {
    if (isWindowClosed) {
      // Massive 44dB cutoff - heavy muffling of high frequencies
      acousticFilter.frequency.setTargetAtTime(280, ctx.currentTime, 0.25);
      noiseGain.gain.setTargetAtTime(0.04, ctx.currentTime, 0.25);
    } else {
      // Window Open - crisp raw outdoor noise
      acousticFilter.frequency.setTargetAtTime(8000, ctx.currentTime, 0.25);
      noiseGain.gain.setTargetAtTime(0.18, ctx.currentTime, 0.25);
    }
  }

  return isAcousticPlaying;
}

export function stopAcousticDemo() {
  if (noiseSource && isAcousticPlaying) {
    try {
      noiseSource.stop();
      noiseSource.disconnect();
    } catch (e) {}
    isAcousticPlaying = false;
    noiseSource = null;
  }
}

export const simulateAcousticGlass = toggleAcousticDemo;

