import '../shared/css/base.css';

/** Reproduce un sonido triunfal ("¡Hurra!" / Fanfarria + Ovación) usando Web Audio API */
function playHooraySound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  
  try {
    const ctx = new AudioContext();
    const now = ctx.currentTime;
    
    // 1. Acorde triunfal (Do mayor brillante y ascendente)
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25]; // C4, E4, G4, C5, E5
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle'; // Onda triangular para simular un sonido de viento/bronces cálido
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.01, now + 0.5); // Leve vibrato/subida
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 0.12 + (idx * 0.04)); // Entrada escalonada
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.85);
    });
    
    // 2. Simulación de ovación/hurra (ruido blanco filtrado)
    const duration = 0.95;
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.Q.value = 1.3;
    // El filtro barre hacia arriba y abajo simulando el clamor de un "¡Hurra!"
    filter.frequency.setValueAtTime(550, now);
    filter.frequency.exponentialRampToValueAtTime(1150, now + 0.25);
    filter.frequency.exponentialRampToValueAtTime(450, now + duration);
    
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0, now);
    noiseGain.gain.linearRampToValueAtTime(0.07, now + 0.18);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    
    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    
    noise.start(now);
    noise.stop(now + duration);
  } catch (e) {
    console.warn("AudioContext bloqueado o no soportado:", e);
  }
}

// Interceptar clics en los enlaces de materias para reproducir el sonido antes de navegar
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('a[href*="practica"]');
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const destination = card.getAttribute('href');
      playHooraySound();
      
      // Esperar un momento breve para que suene el inicio de la fanfarria antes de cambiar de página
      setTimeout(() => {
        window.location.href = destination;
      }, 350);
    });
  });
});
