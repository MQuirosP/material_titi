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

function playClickSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch (e) {}
}

export function switchSemester(semesterNum) {
  playClickSound();

  const btn1 = document.getElementById('btn-semestre-1');
  const btn2 = document.getElementById('btn-semestre-2');
  const c1 = document.getElementById('semester-1-container');
  const c2 = document.getElementById('semester-2-container');
  const semesterTitle = document.getElementById('portal-semester-title');
  const teacherName = document.getElementById('portal-teacher-name');

  if (semesterNum === 1) {
    if (btn1) btn1.className = "px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 font-fun flex items-center gap-2 bg-indigo-600 text-white shadow-sm";
    if (btn2) btn2.className = "px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 font-fun flex items-center gap-2 text-slate-600 hover:bg-slate-100";
    if (c1) c1.classList.remove('hidden');
    if (c2) c2.classList.add('hidden');
    if (semesterTitle) semesterTitle.textContent = "Primer Semestre 2026";
    if (teacherName) teacherName.textContent = "👩‍🏫 Maestra: Florisel Olmazo López (Matemáticas y Ciencias)";
  } else {
    if (btn2) btn2.className = "px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 font-fun flex items-center gap-2 bg-amber-600 text-white shadow-sm";
    if (btn1) btn1.className = "px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 font-fun flex items-center gap-2 text-slate-600 hover:bg-slate-100";
    if (c2) c2.classList.remove('hidden');
    if (c1) c1.classList.add('hidden');
    if (semesterTitle) semesterTitle.textContent = "Segundo Semestre 2026";
    if (teacherName) teacherName.textContent = "👩‍🏫 Maestra: Licda. Maureen Vargas Solano (Español y Sociales)";
  }
}

Object.assign(window, {
  switchSemester
});

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
