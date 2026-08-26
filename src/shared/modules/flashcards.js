import { studiedCards, quizState, userHasUsedLab, setUserHasUsedLab, getTotalCardsForActiveSubject, activeSubject } from '../state/store.js';
import { saveStudiedCards, getStudiedCards, saveLabVisited, getLabVisited, getQuizProgress } from './progressManager.js';

function getLimit() {
  return getTotalCardsForActiveSubject();
}

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
  saveStudiedCards(activeSubject, Array.from(studiedCards));
  updateTheoryProgress();
  updateBadges();
}

/** Restaura el progreso de tarjetas guardadas en localStorage */
export function restoreSavedTheoryCards(subject) {
  const savedArr = getStudiedCards(subject);
  if (savedArr && Array.isArray(savedArr)) {
    savedArr.forEach(id => studiedCards.add(id));
  }
  if (getLabVisited(subject)) {
    setUserHasUsedLab(true);
  }
  updateTheoryProgress();
  updateBadges();
}

/** Actualiza la barra de progreso de teoría en la sección Inicio */
export function updateTheoryProgress() {
  const limit = getLimit();
  const pct = Math.round((studiedCards.size / limit) * 100);
  const bar = document.getElementById('progreso-teoria-bar');
  const txt = document.getElementById('progreso-teoria-porcentaje');
  const counter = document.getElementById('theory-counter');

  if (bar) bar.style.width = `${pct}%`;
  if (txt) txt.textContent = `${pct}%`;
  if (counter) counter.textContent = `${studiedCards.size} de ${limit} Tarjetas Estudiadas`;
}

/** Desbloquea las medallas según el progreso del estudiante */
export function updateBadges() {
  const limit = getLimit();

  // 1. Cargar progreso guardado de las tarjetas
  const savedCards = getStudiedCards(activeSubject);
  if (savedCards && Array.isArray(savedCards)) {
    savedCards.forEach(id => studiedCards.add(id));
  }

  // 🎓 Badge Teoría — todas las flashcards vistas
  const badgeTeoria = document.getElementById('badge-teoria');
  if (badgeTeoria && studiedCards.size >= limit) {
    badgeTeoria.classList.remove('opacity-30', 'grayscale');
    badgeTeoria.classList.add('shadow-md', 'scale-105');
  }

  // 📐 Badge Laboratorio — usó cualquier laboratorio
  const badgeFormulas = document.getElementById('badge-formulas');
  const isLabUsed = userHasUsedLab || getLabVisited(activeSubject);
  if (badgeFormulas && isLabUsed) {
    badgeFormulas.classList.remove('opacity-30', 'grayscale');
    badgeFormulas.classList.add('shadow-md', 'scale-105');
  }

  // 🧠 Badge Quiz Teórico — score ≥ 80 o guardado previo ≥ 80
  const badgeQuizT = document.getElementById('badge-quiz-t');
  const quizTSaved = getQuizProgress(activeSubject, '2_eval1', 'teorico') || getQuizProgress(activeSubject, '1_eval2', 'teorico');
  const gradeT = quizState.teorico.isCompleted 
    ? Math.round((quizState.teorico.score / quizState.teorico.questions.length) * 100)
    : (quizTSaved ? quizTSaved.grade : 0);

  if (badgeQuizT && gradeT >= 80) {
    badgeQuizT.classList.remove('opacity-30', 'grayscale');
    badgeQuizT.classList.add('shadow-md', 'scale-105');
  }

  // ⭐ Badge Quiz Práctico — score ≥ 80 o guardado previo ≥ 80
  const badgeQuizP = document.getElementById('badge-quiz-p');
  const quizPSaved = getQuizProgress(activeSubject, '2_eval1', 'practico') || getQuizProgress(activeSubject, '1_eval2', 'practico');
  const gradeP = quizState.practico.isCompleted 
    ? Math.round((quizState.practico.score / quizState.practico.questions.length) * 100)
    : (quizPSaved ? quizPSaved.grade : 0);

  if (badgeQuizP && gradeP >= 80) {
    badgeQuizP.classList.remove('opacity-30', 'grayscale');
    badgeQuizP.classList.add('shadow-md', 'scale-105');
  }
}
