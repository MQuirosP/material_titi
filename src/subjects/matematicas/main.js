// =====================================================
// RIOMATE — MATEMÁTICAS, CIENCIAS & ESPAÑOL 5° GRADO
// Entry point: importa shared + labs + datos
// =====================================================
import '../../shared/css/base.css';
import '../../shared/css/flashcards.css';

import { switchTab, switchLabSubTab, onLabInit } from '../../shared/modules/tabs.js';
import { toggleCard, updateTheoryProgress, updateBadges } from '../../shared/modules/flashcards.js';
import { startQuiz, renderQuestion, selectOption, nextQuestion, resetQuiz, updateQuizIntroTexts, setQuizContext } from '../../shared/modules/quiz.js';
import { playSound } from '../../shared/modules/audio.js';

import { updateMultiplesLab }               from './labs/multiplos.js';
import { updateDivisoresLab }               from './labs/divisores.js';
import { updateFraccionesLab }              from './labs/fracciones.js';
import { changePulperíaQty, calculatePulpería } from './labs/pulperia.js';
import { onLabFigureChange, onLabSliderInput }   from './labs/geometria.js';

// Ciencias Imports
import { quizTeoricoCiencias }  from '../ciencias/data/quiz-teorico.js';
import { quizPracticoCiencias } from '../ciencias/data/quiz-practico.js';
import { quizTeoricoCienciasSem1Eval2 } from '../ciencias/sem1_eval2/data/quiz-teorico.js';
import { quizTeoricoCienciasSem2Eval1 } from '../ciencias/sem2_eval1/data/quiz-teorico.js';
import { quizPracticoCienciasSem2Eval1 } from '../ciencias/sem2_eval1/data/quiz-practico.js';
import { initFiltroRenal, stopFiltroRenal } from '../ciencias/sem1_eval2/labs/filtro-renal.js';
import { initDecisionesMedicas, chooseMedicalTool } from '../ciencias/sem1_eval2/labs/decisiones-medicas.js';
import { initFotosintesisLab, stopFotosintesisLab, initCadenasLab, initRelacionesLab, initCompostLab } from '../ciencias/sem2_eval1/labs/ciencias-labs.js';

// Exponer handler de decisiones médicas para I Semestre
if (typeof window !== 'undefined') {
  window.chooseMedicalTool = chooseMedicalTool;
}

// Español Imports
import { quizTeoricoEspanol }   from '../espanol/data/quiz-teorico.js';
import { quizPracticoEspanol }  from '../espanol/data/quiz-practico.js';
import { initDetectorOraciones, selectSampleSentence, nextSampleSentence, prevSampleSentence, goToSampleSentence, analyzeCustomInput, answerChallengeDetector, resetChallengeDetector } from '../espanol/labs/detector-oraciones.js';
import { initTallerLibro, selectBookPart, switchCardGeneratorTab } from '../espanol/labs/taller-libro.js';
import { initPulperiaRefranes, selectRefranToMatch, selectMeaningToMatch, resetRefranesGame, revealHint, revealAdivinanzaSolution, nextAdivinanza, checkBombaRhyme, nextBomba } from '../espanol/labs/pulperia-refranes.js';

import { quizTeoricoQuestions }  from './data/quiz-teorico.js';
import { quizPracticoQuestions } from './data/quiz-practico.js';
import { quizState, activeSubject, setActiveSubject, syncStudiedCardsSet } from '../../shared/state/store.js';

let currentSem = '2';
let currentEval = '1';

// ── Cargar preguntas iniciales (Matemáticas por defecto) ───────────────────
quizState.teorico.questions  = quizTeoricoQuestions;
quizState.practico.questions = quizPracticoQuestions;

// ── Registrar labs para inicialización al abrir la pestaña ───────────────
onLabInit(() => {
  if (activeSubject === 'ciencias') {
    if (currentSem === '1' && currentEval === '2') {
      stopFotosintesisLab();
      initFiltroRenal();
      initDecisionesMedicas();
    } else {
      stopFiltroRenal();
      initFotosintesisLab();
      initCadenasLab();
      initRelacionesLab();
      initCompostLab();
    }
  } else if (activeSubject === 'espanol') {
    stopFiltroRenal();
    stopFotosintesisLab();
    initDetectorOraciones();
    initTallerLibro();
    initPulperiaRefranes();
  } else {
    stopFiltroRenal();
    stopFotosintesisLab();
    updateMultiplesLab();
    updateDivisoresLab();
    updateFraccionesLab();
    calculatePulpería();
    onLabFigureChange();
  }
});

function hideElement(el) {
  if (!el) return;
  el.style.display = 'none';
}

function showElement(el, displayClass = 'block') {
  if (!el) return;
  el.style.display = displayClass;
}

import { getSubjectModule } from '../../shared/modules/subjectRegistry.js';

// Función universal para alternar materias, semestres y evaluaciones usando módulos jerárquicos
export function switchSubject(subject, sem = '2', evalNum = '1', force = false) {
  const targetSubject = String(subject || 'matematicas');
  let targetSem = String(sem || '2');
  let targetEval = String(evalNum || '1');

  // Normalización explícita: Ciencias I Semestre es 2ª Evaluación
  if (targetSubject === 'ciencias' && targetSem === '1' && targetEval === '1') {
    targetEval = '2';
  }

  if (!force && targetSubject === activeSubject && targetSem === currentSem && targetEval === currentEval) return;

  currentSem = targetSem;
  currentEval = targetEval;

  // Parar loops de animación previos
  stopFiltroRenal();
  stopFotosintesisLab();

  setActiveSubject(targetSubject);
  syncStudiedCardsSet(targetSubject);
  setQuizContext(targetSem, targetEval);

  // Obtener Módulo Jerárquico Activo
  const moduleData = getSubjectModule(targetSubject, targetSem, targetEval);

  const body = document.getElementById('main-body') || document.body;
  const title = document.getElementById('main-title');
  const subtitle = document.getElementById('main-subtitle');
  const examDate = document.getElementById('exam-date');
  const teacherName = document.getElementById('teacher-name');
  const semesterBadge = document.getElementById('semester-badge');
  const progressTitle = document.getElementById('progress-title');
  const badgesTitle = document.getElementById('badges-title');
  const badgeFormulas = document.getElementById('badge-formulas');
  const favicon = document.getElementById('favicon');

  // 1. Aplicar Metadatos y Estilos del Módulo
  body.className = moduleData.themeClass;
  document.title = `${moduleData.title} — ${targetSubject.charAt(0).toUpperCase() + targetSubject.slice(1)} (Escuela Riojalandia)`;
  if (favicon) favicon.href = moduleData.favicon;

  if (title) title.textContent = moduleData.title;
  if (subtitle) subtitle.textContent = moduleData.subtitle;
  if (examDate) examDate.textContent = moduleData.examDate;
  if (teacherName) teacherName.textContent = moduleData.teacher;
  if (semesterBadge) semesterBadge.textContent = moduleData.semesterBadge;

  if (progressTitle) progressTitle.textContent = targetSubject === 'matematicas' ? 'Tu Progreso de Estudio' : `Tu Progreso de ${targetSubject.charAt(0).toUpperCase() + targetSubject.slice(1)}`;
  if (badgesTitle) badgesTitle.textContent = `Tus Medallas ${moduleData.title}`;

  if (badgeFormulas) {
    badgeFormulas.setAttribute('title', moduleData.badgeFormulaTitle);
    badgeFormulas.textContent = moduleData.badgeFormulaIcon;
  }

  // 2. Inyección Dinámica de Contenedores Únicos (Bienvenida, Temario, Subtabs)
  const welcomeContainer = document.getElementById('welcome-container');
  if (welcomeContainer) welcomeContainer.innerHTML = moduleData.welcomeHTML;

  const temarioContainer = document.getElementById('temario-container');
  if (temarioContainer) temarioContainer.innerHTML = moduleData.temarioHTML;

  const subtabsContainer = document.getElementById('subtabs-container');
  if (subtabsContainer) subtabsContainer.innerHTML = moduleData.subtabsHTML;

  // 3. Conmutación Segregada de Tarjetas de Teoría y Contenidos de Laboratorio (data-subject)
  document.querySelectorAll('[data-subject]').forEach(el => {
    const elSubject = el.getAttribute('data-subject');
    const elSem = el.getAttribute('data-sem');
    const elEval = el.getAttribute('data-eval');
    const displayType = el.getAttribute('data-display') || 'block';

    const matchSubject = (elSubject === targetSubject);
    const matchSem = !elSem || (elSem === targetSem);
    const matchEval = !elEval || (elEval === targetEval);

    if (matchSubject && matchSem && matchEval) {
      el.style.display = displayType;
      el.classList.remove('hidden');
    } else {
      el.style.display = 'none';
      el.classList.add('hidden');
    }
  });

  // 4. Asignar Preguntas de Examen por Módulo Activo
  if (targetSubject === 'ciencias') {
    if (targetSem === '1' && targetEval === '2') {
      quizState.teorico.questions = quizTeoricoCienciasSem1Eval2;
      quizState.practico.questions = quizPracticoCiencias;
    } else {
      quizState.teorico.questions = quizTeoricoCienciasSem2Eval1;
      quizState.practico.questions = quizPracticoCienciasSem2Eval1;
    }
  } else if (targetSubject === 'espanol') {
    quizState.teorico.questions = quizTeoricoEspanol;
    quizState.practico.questions = quizPracticoEspanol;
  } else {
    quizState.teorico.questions = quizTeoricoQuestions;
    quizState.practico.questions = quizPracticoQuestions;
  }

  // Activar la sub-pestaña de laboratorio por defecto del módulo
  switchLabSubTab(moduleData.defaultLabSubTab);

  // Resetear exámenes
  resetQuiz('teorico');
  resetQuiz('practico');

  // Actualizar barra de progreso e insignias con la nueva materia
  updateTheoryProgress();
  updateBadges();
  updateQuizIntroTexts(targetSubject);
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
  nextSampleSentence,
  prevSampleSentence,
  goToSampleSentence,
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

// ── Inicialización Robustas de la Aplicación ────────────────────────────
function initApp() {
  const body = document.getElementById('main-body') || document.body;
  body.id = 'main-body';

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

  const urlParams = new URLSearchParams(window.location.search);
  const subjectParam = urlParams.get('subject') || urlParams.get('materia');
  let semParam = urlParams.get('sem') || urlParams.get('semestre') || '2';
  let evalParam = urlParams.get('eval') || urlParams.get('evaluacion');

  if (!evalParam) {
    evalParam = (semParam === '1') ? '2' : '1';
  }

  if (subjectParam === 'ciencias') {
    switchSubject('ciencias', semParam, evalParam, true);
  } else if (subjectParam === 'espanol') {
    switchSubject('espanol', semParam, evalParam, true);
  } else {
    switchSubject('matematicas', semParam, evalParam, true);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

