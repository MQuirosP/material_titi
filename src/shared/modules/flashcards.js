import { studiedCards, quizState, userHasUsedLab } from '../state/store.js';

const TOTAL_CARDS = 6; // actualizar si se agregan más flashcards

/** Voltea/des-voltea una tarjeta y registra que fue estudiada */
export function toggleCard(cardElement, cardId) {
  cardElement.classList.toggle('flipped');
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
