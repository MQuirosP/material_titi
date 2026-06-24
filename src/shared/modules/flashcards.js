import { studiedCards, quizState, userHasUsedLab } from '../state/store.js';

const TOTAL_CARDS = 6; // actualizar si se agregan más flashcards

/** Reproduce un sonido sintético de "whoosh" usando la Web Audio API para evitar dependencias de archivos */
function playSwissSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  
  try {
    const ctx = new AudioContext();
    const duration = 0.25;
    
    // Generar buffer de ruido blanco de 0.25 segundos
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;
    
    // Filtro paso banda con barrido de frecuencia para simular el giro de la carta
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.Q.value = 4;
    filter.frequency.setValueAtTime(1500, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(350, ctx.currentTime + duration);
    
    // Envolvente de volumen (Fade in rápido y Fade out suave)
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    
    noiseSource.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    
    noiseSource.start();
    noiseSource.stop(ctx.currentTime + duration);
  } catch (e) {
    console.warn("No se pudo iniciar el AudioContext:", e);
  }
}

/** Voltea/des-voltea una tarjeta y registra que fue estudiada */
export function toggleCard(cardElement, cardId) {
  cardElement.classList.toggle('flipped');
  playSwissSound();
  studiedCards.add(cardId);
  updateTheoryProgress();
  updateBadges();
}

/** Actualiza la barra de progreso de teoría en la sección Inicio */
export function updateTheoryProgress() {
  const pct = Math.round((studiedCards.size / TOTAL_CARDS) * 100);
  const bar = document.getElementById('progreso-teoria-bar');
  const txt = document.getElementById('progreso-teoria-porcentaje');
  const counter = document.getElementById('theory-counter');

  if (bar) bar.style.width = `${pct}%`;
  if (txt) txt.textContent = `${pct}%`;
  if (counter) counter.textContent = `${studiedCards.size} de ${TOTAL_CARDS} Tarjetas Estudiadas`;
}

/** Desbloquea las medallas según el progreso del estudiante */
export function updateBadges() {
  // 🎓 Badge Teoría — todas las flashcards vistas
  const badgeTeoria = document.getElementById('badge-teoria');
  if (badgeTeoria && studiedCards.size >= TOTAL_CARDS) {
    badgeTeoria.classList.remove('opacity-30', 'grayscale');
  }

  // 📐 Badge Laboratorio — usó cualquier laboratorio
  const badgeFormulas = document.getElementById('badge-formulas');
  if (badgeFormulas && userHasUsedLab) {
    badgeFormulas.classList.remove('opacity-30', 'grayscale');
  }

  // 🧠 Badge Quiz Teórico — score ≥ 80
  const badgeQuizT = document.getElementById('badge-quiz-t');
  if (badgeQuizT && quizState.teorico.isCompleted) {
    const grade = Math.round((quizState.teorico.score / quizState.teorico.questions.length) * 100);
    if (grade >= 80) badgeQuizT.classList.remove('opacity-30', 'grayscale');
  }

  // ⭐ Badge Quiz Práctico — score ≥ 80
  const badgeQuizP = document.getElementById('badge-quiz-p');
  if (badgeQuizP && quizState.practico.isCompleted) {
    const grade = Math.round((quizState.practico.score / quizState.practico.questions.length) * 100);
    if (grade >= 80) badgeQuizP.classList.remove('opacity-30', 'grayscale');
  }
}
