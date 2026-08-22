// =====================================================
// RIOMATE — MATEMÁTICAS, CIENCIAS & ESPAÑOL 5° GRADO
// Entry point: importa shared + labs + datos
// =====================================================
import '../../shared/css/base.css';
import '../../shared/css/flashcards.css';

import { switchTab, switchLabSubTab, onLabInit } from '../../shared/modules/tabs.js';
import { toggleCard, updateTheoryProgress, updateBadges } from '../../shared/modules/flashcards.js';
import { startQuiz, renderQuestion, selectOption, nextQuestion, resetQuiz, updateQuizIntroTexts } from '../../shared/modules/quiz.js';
import { playSound } from '../../shared/modules/audio.js';

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

// Español Imports
import { quizTeoricoEspanol }   from '../espanol/data/quiz-teorico.js';
import { quizPracticoEspanol }  from '../espanol/data/quiz-practico.js';
import { initDetectorOraciones, selectSampleSentence, analyzeCustomInput, answerChallengeDetector, resetChallengeDetector } from '../espanol/labs/detector-oraciones.js';
import { initTallerLibro, selectBookPart, switchCardGeneratorTab } from '../espanol/labs/taller-libro.js';
import { initPulperiaRefranes, selectRefranToMatch, selectMeaningToMatch, resetRefranesGame, revealHint, revealAdivinanzaSolution, nextAdivinanza, checkBombaRhyme, nextBomba } from '../espanol/labs/pulperia-refranes.js';

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
  } else if (activeSubject === 'espanol') {
    stopFiltroRenal();
    initDetectorOraciones();
    initTallerLibro();
    initPulperiaRefranes();
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
  const teacherName = document.getElementById('teacher-name');
  const semesterBadge = document.getElementById('semester-badge');
  const progressTitle = document.getElementById('progress-title');
  const badgesTitle = document.getElementById('badges-title');
  const badgeFormulas = document.getElementById('badge-formulas');
  
  // Elementos de Contenido
  const welcomeMath = document.getElementById('welcome-math');
  const welcomeScience = document.getElementById('welcome-science');
  const welcomeSpanish = document.getElementById('welcome-espanol');
  
  const temarioMath = document.getElementById('temario-math');
  const temarioScience = document.getElementById('temario-science');
  const temarioSpanish = document.getElementById('temario-espanol');
  
  const theoryMath = document.getElementById('theory-math');
  const theoryScience = document.getElementById('theory-science');
  const theorySpanish = document.getElementById('theory-espanol');
  
  const subtabsMath = document.getElementById('subtabs-math');
  const subtabsScience = document.getElementById('subtabs-science');
  const subtabsSpanish = document.getElementById('subtabs-espanol');
  
  const labContentsMath = document.getElementById('lab-contents-math');
  const labContentsScience = document.getElementById('lab-contents-science');
  const labContentsSpanish = document.getElementById('lab-contents-espanol');

  const favicon = document.getElementById('favicon');

  // Ocultar todos por defecto
  [welcomeMath, welcomeScience, welcomeSpanish].forEach(el => el && el.classList.replace('block', 'hidden'));
  [temarioMath, temarioScience, temarioSpanish, theoryMath, theoryScience, theorySpanish].forEach(el => el && el.classList.replace('grid', 'hidden'));
  [subtabsMath, subtabsScience, subtabsSpanish].forEach(el => el && el.classList.replace('flex', 'hidden'));
  [labContentsMath, labContentsScience, labContentsSpanish].forEach(el => el && el.classList.replace('block', 'hidden'));

  if (subject === 'ciencias') {
    // 1. Cambiar Estilos / Temas
    body.className = "bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 min-h-screen text-slate-800 pb-12 transition-all duration-500";
    document.title = "RíoCiencias 5° — Ciencias (Escuela Riojalandia)";
    if (favicon) favicon.href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧪</text></svg>";

    if (title) title.textContent = "RíoCiencias 5º";
    if (subtitle) subtitle.textContent = "Escuela Riojalandia · II Pruebas de Ciencias · Secciones 5-1 y 5-2";
    if (examDate) examDate.textContent = "Viernes 26 de Junio, 2026";
    if (teacherName) teacherName.textContent = "👩‍🏫 Maestra: Florisel Olmazo López";
    if (semesterBadge) semesterBadge.textContent = "Primer Semestre 2026";
    if (progressTitle) progressTitle.textContent = "Tu Progreso de Ciencias";
    if (badgesTitle) badgesTitle.textContent = "Tus Medallas RíoCiencias";
    
    if (badgeFormulas) {
      badgeFormulas.setAttribute('title', 'Médica Estrella (Usa los laboratorios de ciencias)');
      badgeFormulas.textContent = '🧬';
    }

    // 2. Visibilidad
    if (welcomeScience) welcomeScience.classList.replace('hidden', 'block');
    if (temarioScience) temarioScience.classList.replace('hidden', 'grid');
    if (theoryScience) theoryScience.classList.replace('hidden', 'grid');
    if (subtabsScience) subtabsScience.classList.replace('hidden', 'flex');
    if (labContentsScience) labContentsScience.classList.replace('hidden', 'block');

    quizState.teorico.questions = quizTeoricoCiencias;
    quizState.practico.questions = quizPracticoCiencias;

    switchLabSubTab('filtro-renal');
  } else if (subject === 'espanol') {
    // 1. Cambiar Estilos / Temas
    body.className = "bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 min-h-screen text-slate-800 pb-12 transition-all duration-500";
    document.title = "RíoEspañol 5° — Español (Escuela Riojalandia)";
    if (favicon) favicon.href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📚</text></svg>";

    if (title) title.textContent = "RíoEspañol 5º";
    if (subtitle) subtitle.textContent = "Escuela Riojalandia · I Prueba de Español · II Semestre · Secciones 5-1 y 5-2";
    if (examDate) examDate.textContent = "Lunes 24 de Agosto, 2026";
    if (teacherName) teacherName.textContent = "👩‍🏫 Maestra: Licda. Maureen Vargas Solano";
    if (semesterBadge) semesterBadge.textContent = "Segundo Semestre 2026";
    if (progressTitle) progressTitle.textContent = "Tu Progreso de Español";
    if (badgesTitle) badgesTitle.textContent = "Tus Medallas RíoEspañol";
    
    if (badgeFormulas) {
      badgeFormulas.setAttribute('title', 'Detective de las Letras (Usa los laboratorios de español)');
      badgeFormulas.textContent = '📖';
    }

    // 2. Visibilidad
    if (welcomeSpanish) welcomeSpanish.classList.replace('hidden', 'block');
    if (temarioSpanish) temarioSpanish.classList.replace('hidden', 'grid');
    if (theorySpanish) theorySpanish.classList.replace('hidden', 'grid');
    if (subtabsSpanish) subtabsSpanish.classList.replace('hidden', 'flex');
    if (labContentsSpanish) labContentsSpanish.classList.replace('hidden', 'block');

    quizState.teorico.questions = quizTeoricoEspanol;
    quizState.practico.questions = quizPracticoEspanol;

    switchLabSubTab('detector-oraciones');
  } else {
    // 1. Cambiar Estilos / Temas
    body.className = "bg-gradient-to-br from-indigo-50 via-teal-50 to-amber-50 min-h-screen text-slate-800 pb-12 transition-all duration-500";
    document.title = "RíoMate 5° — Matemáticas (Escuela Riojalandia)";
    if (favicon) favicon.href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧮</text></svg>";

    if (title) title.textContent = "RíoMate 5º";
    if (subtitle) subtitle.textContent = "Escuela Riojalandia · II Pruebas de Matemáticas · Secciones 5-1 y 5-2";
    if (examDate) examDate.textContent = "Miércoles 24 de Junio, 2026";
    if (teacherName) teacherName.textContent = "👩‍🏫 Maestra: Florisel Olmazo López";
    if (semesterBadge) semesterBadge.textContent = "Primer Semestre 2026";
    if (progressTitle) progressTitle.textContent = "Tu Progreso de Estudio";
    if (badgesTitle) badgesTitle.textContent = "Tus Medallas RíoMate";

    if (badgeFormulas) {
      badgeFormulas.setAttribute('title', 'Maestra Geómetra (Usa el laboratorio de fórmulas)');
      badgeFormulas.textContent = '📐';
    }

    // 2. Visibilidad
    if (welcomeMath) welcomeMath.classList.replace('hidden', 'block');
    if (temarioMath) temarioMath.classList.replace('hidden', 'grid');
    if (theoryMath) theoryMath.classList.replace('hidden', 'grid');
    if (subtabsMath) subtabsMath.classList.replace('hidden', 'flex');
    if (labContentsMath) labContentsMath.classList.replace('hidden', 'block');

    quizState.teorico.questions = quizTeoricoQuestions;
    quizState.practico.questions = quizPracticoQuestions;

    switchLabSubTab('multiplos');
  }

  // 3. Resetear exámenes e ir al inicio
  resetQuiz('teorico');
  resetQuiz('practico');
  switchTab('inicio');

  // 4. Actualizar barra de progreso e insignias con la nueva materia
  updateTheoryProgress();
  updateBadges();
  updateQuizIntroTexts(subject);
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
  selectSampleSentence,
  analyzeCustomInput,
  answerChallengeDetector,
  resetChallengeDetector,
  selectBookPart,
  switchCardGeneratorTab,
  selectRefranToMatch,
  selectMeaningToMatch,
  resetRefranesGame,
  revealHint,
  revealAdivinanzaSolution,
  nextAdivinanza,
  checkBombaRhyme,
  nextBomba,
});

// ── Inicializar al cargar la página ──────────────────────────────────────
window.addEventListener('load', () => {
  // Asegurar que el body tenga el ID
  document.body.id = 'main-body';
  
  // Interceptar el clic de "Menú Principal" para reproducir sonido de salida
  const exitLink = document.querySelector('a[href="../"]');
  if (exitLink) {
    exitLink.addEventListener('click', (e) => {
      e.preventDefault();
      playSound('tab_click');
      setTimeout(() => {
        window.location.href = exitLink.getAttribute('href');
      }, 150);
    });
  }

  // Revisar si viene parámetro ?subject=ciencias o ?materia=ciencias
  const urlParams = new URLSearchParams(window.location.search);
  const subjectParam = urlParams.get('subject') || urlParams.get('materia');
  if (subjectParam === 'ciencias') {
    switchSubject('ciencias');
  } else if (subjectParam === 'espanol') {
    switchSubject('espanol');
  } else {
    updateTheoryProgress();
    updateBadges();
    updateQuizIntroTexts('matematicas');
  }
});
