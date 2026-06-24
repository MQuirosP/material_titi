// =====================================================
// RIOMATE — MATEMÁTICAS & CIENCIAS 5° GRADO
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

// Ciencias Imports
import { quizTeoricoCiencias }  from '../ciencias/data/quiz-teorico.js';
import { quizPracticoCiencias } from '../ciencias/data/quiz-practico.js';
import { initFiltroRenal, stopFiltroRenal } from '../ciencias/labs/filtro-renal.js';
import { initDecisionesMedicas, chooseMedicalTool } from '../ciencias/labs/decisiones-medicas.js';

import { quizTeoricoQuestions }  from './data/quiz-teorico.js';
import { quizPracticoQuestions } from './data/quiz-practico.js';
import { quizState, activeSubject, setActiveSubject, syncStudiedCardsSet } from '../../shared/state/store.js';

// ── Cargar preguntas iniciales (Matemáticas por defecto) ───────────────────
quizState.teorico.questions  = quizTeoricoQuestions;
quizState.practico.questions = quizPracticoQuestions;

// ── Registrar labs para inicialización al abrir la pestaña ───────────────
onLabInit(() => {
  if (activeSubject === 'ciencias') {
    initFiltroRenal();
    initDecisionesMedicas();
  } else {
    stopFiltroRenal();
    updateMultiplesLab();
    updateDivisoresLab();
    updateFraccionesLab();
    calculatePulpería();
    onLabFigureChange();
  }
});

// Función para alternar materias
export function switchSubject(subject) {
  if (subject === activeSubject) return;

  // Parar loops de animación previos si existen
  stopFiltroRenal();

  setActiveSubject(subject);
  syncStudiedCardsSet(subject);

  const body = document.getElementById('main-body') || document.body;
  const title = document.getElementById('main-title');
  const subtitle = document.getElementById('main-subtitle');
  const examDate = document.getElementById('exam-date');
  const progressTitle = document.getElementById('progress-title');
  const badgesTitle = document.getElementById('badges-title');
  const badgeFormulas = document.getElementById('badge-formulas');
  
  // Elementos de Contenido
  const welcomeMath = document.getElementById('welcome-math');
  const welcomeScience = document.getElementById('welcome-science');
  const temarioMath = document.getElementById('temario-math');
  const temarioScience = document.getElementById('temario-science');
  
  const theoryMath = document.getElementById('theory-math');
  const theoryScience = document.getElementById('theory-science');
  const theoryCounter = document.getElementById('theory-counter');
  
  const subtabsMath = document.getElementById('subtabs-math');
  const subtabsScience = document.getElementById('subtabs-science');
  const labContentsMath = document.getElementById('lab-contents-math');
  const labContentsScience = document.getElementById('lab-contents-science');

  // Botones Pills
  const btnMath = document.getElementById('subject-btn-matematicas');
  const btnScience = document.getElementById('subject-btn-ciencias');

  if (subject === 'ciencias') {
    // 1. Cambiar Estilos / Temas
    body.className = "bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 min-h-screen text-slate-800 pb-12 transition-all duration-500";
    if (btnScience) btnScience.className = "px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center gap-2 bg-emerald-600 text-white shadow-md font-fun";
    if (btnMath) btnMath.className = "px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center gap-2 bg-white text-slate-700 hover:bg-indigo-50 border border-slate-200 font-fun";

    if (title) title.textContent = "RíoCiencias 5º";
    if (subtitle) subtitle.textContent = "Escuela Riojalandia · II Pruebas de Ciencias · Secciones 5-1 y 5-2";
    if (examDate) examDate.textContent = "Viernes 26 de Junio, 2026";
    if (progressTitle) progressTitle.textContent = "Tu Progreso de Ciencias";
    if (badgesTitle) badgesTitle.textContent = "Tus Medallas RíoCiencias";
    
    if (badgeFormulas) {
      badgeFormulas.setAttribute('title', 'Médica Estrella (Usa los laboratorios de ciencias)');
      badgeFormulas.textContent = '🧬';
    }

    // 2. Visibilidad de Contenido
    if (welcomeMath) welcomeMath.classList.replace('block', 'hidden');
    if (welcomeScience) welcomeScience.classList.replace('hidden', 'block');
    if (temarioMath) temarioMath.classList.replace('grid', 'hidden');
    if (temarioScience) temarioScience.classList.replace('hidden', 'grid');

    if (theoryMath) theoryMath.classList.replace('grid', 'hidden');
    if (theoryScience) theoryScience.classList.replace('hidden', 'grid');

    if (subtabsMath) subtabsMath.classList.replace('flex', 'hidden');
    if (subtabsScience) subtabsScience.classList.replace('hidden', 'flex');
    if (labContentsMath) labContentsMath.classList.replace('block', 'hidden');
    if (labContentsScience) labContentsScience.classList.replace('hidden', 'block');

    // Cargar preguntas de ciencias en el estado
    quizState.teorico.questions = quizTeoricoCiencias;
    quizState.practico.questions = quizPracticoCiencias;

    // Activar subtab por defecto de ciencias
    switchLabSubTab('filtro-renal');
  } else {
    // 1. Cambiar Estilos / Temas
    body.className = "bg-gradient-to-br from-indigo-50 via-teal-50 to-amber-50 min-h-screen text-slate-800 pb-12 transition-all duration-500";
    if (btnMath) btnMath.className = "px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center gap-2 bg-indigo-600 text-white shadow-md font-fun";
    if (btnScience) btnScience.className = "px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center gap-2 bg-white text-slate-700 hover:bg-emerald-50 border border-slate-200 font-fun";

    if (title) title.textContent = "RíoMate 5º";
    if (subtitle) subtitle.textContent = "Escuela Riojalandia · II Pruebas de Matemáticas · Secciones 5-1 y 5-2";
    if (examDate) examDate.textContent = "Miércoles 24 de Junio, 2026";
    if (progressTitle) progressTitle.textContent = "Tu Progreso de Estudio";
    if (badgesTitle) badgesTitle.textContent = "Tus Medallas RíoMate";

    if (badgeFormulas) {
      badgeFormulas.setAttribute('title', 'Maestra Geómetra (Usa el laboratorio de fórmulas)');
      badgeFormulas.textContent = '📐';
    }

    // 2. Visibilidad de Contenido
    if (welcomeMath) welcomeMath.classList.replace('hidden', 'block');
    if (welcomeScience) welcomeScience.classList.replace('block', 'hidden');
    if (temarioMath) temarioMath.classList.replace('hidden', 'grid');
    if (temarioScience) temarioScience.classList.replace('grid', 'hidden');

    if (theoryMath) theoryMath.classList.replace('hidden', 'grid');
    if (theoryScience) theoryScience.classList.replace('grid', 'hidden');

    if (subtabsMath) subtabsMath.classList.replace('hidden', 'flex');
    if (subtabsScience) subtabsScience.classList.replace('flex', 'hidden');
    if (labContentsMath) labContentsMath.classList.replace('hidden', 'block');
    if (labContentsScience) labContentsScience.classList.replace('block', 'hidden');

    // Cargar preguntas de matemáticas en el estado
    quizState.teorico.questions = quizTeoricoQuestions;
    quizState.practico.questions = quizPracticoQuestions;

    // Activar subtab por defecto de matemáticas
    switchLabSubTab('multiplos');
  }

  // 3. Resetear exámenes e ir al inicio
  resetQuiz('teorico');
  resetQuiz('practico');
  switchTab('inicio');

  // 4. Actualizar barra de progreso e insignias con la nueva materia
  updateTheoryProgress();
  updateBadges();
}

// ── Exponer funciones al HTML (puente: onclick="...") ─────────────────────
Object.assign(window, {
  switchTab,
  switchLabSubTab,
  switchSubject,
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
  chooseMedicalTool,
});

// ── Inicializar al cargar la página ──────────────────────────────────────
window.addEventListener('load', () => {
  // Asegurar que el body tenga el ID
  document.body.id = 'main-body';
  
  // Revisar si viene parámetro ?subject=ciencias o ?materia=ciencias
  const urlParams = new URLSearchParams(window.location.search);
  const subjectParam = urlParams.get('subject') || urlParams.get('materia');
  if (subjectParam === 'ciencias') {
    switchSubject('ciencias');
  } else {
    updateTheoryProgress();
    updateBadges();
  }
});
