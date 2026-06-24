// =====================================================
// RIOMATE — MATEMÁTICAS 5° GRADO
// Entry point: importa shared + labs + datos
// =====================================================
import '../../shared/css/base.css';
import '../../shared/css/flashcards.css';

import { switchTab, switchLabSubTab, onLabInit } from '../../shared/modules/tabs.js';
import { toggleCard, updateTheoryProgress, updateBadges } from '../../shared/modules/flashcards.js';
import { startQuiz, renderQuestion, selectOption, nextQuestion, resetQuiz } from '../../shared/modules/quiz.js';

import { updateMultiplesLab }               from './labs/multiplos.js';
import { updateDivisoresLab }               from './labs/divisores.js';
import { updateFraccionesLab }              from './labs/fracciones.js';
import { changePulperíaQty, calculatePulpería } from './labs/pulperia.js';
import { onLabFigureChange, onLabSliderInput }   from './labs/geometria.js';

import { quizTeoricoQuestions }  from './data/quiz-teorico.js';
import { quizPracticoQuestions } from './data/quiz-practico.js';
import { quizState }             from '../../shared/state/store.js';

// ── Cargar preguntas en el estado del quiz ────────────────────────────────
quizState.teorico.questions  = quizTeoricoQuestions;
quizState.practico.questions = quizPracticoQuestions;

// ── Registrar labs para inicialización al abrir la pestaña ───────────────
onLabInit(() => {
  updateMultiplesLab();
  updateDivisoresLab();
  updateFraccionesLab();
  calculatePulpería();
  onLabFigureChange();
});

// ── Exponer funciones al HTML (puente: onclick="...") ─────────────────────
Object.assign(window, {
  switchTab,
  switchLabSubTab,
  toggleCard,
  updateTheoryProgress,
  updateBadges,
  startQuiz,
  renderQuestion,
  selectOption,
  nextQuestion,
  resetQuiz,
  updateMultiplesLab,
  updateDivisoresLab,
  updateFraccionesLab,
  changePulperíaQty,
  calculatePulpería,
  onLabFigureChange,
  onLabSliderInput,
});

// ── Inicializar al cargar la página ──────────────────────────────────────
window.addEventListener('load', () => {
  updateTheoryProgress();
  updateBadges();
});
