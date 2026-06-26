// ================================================
// ESTADO GLOBAL DE RIOMATE Y RIOCIENCIAS
// Importar desde los módulos que lo necesiten.
// ================================================

/** Materia activa en el sistema: 'matematicas' o 'ciencias' */
export let activeSubject = 'matematicas';
export function setActiveSubject(val) { activeSubject = val; }

/** Sets para guardar progreso independiente de tarjetas estudiadas */
export const studiedCardsMath = new Set();
export const studiedCardsScience = new Set();

/** IDs (1-N) de flashcards que el estudiante ha volteado al menos una vez (apunta al set de la materia activa) */
export let studiedCards = studiedCardsMath;

export function getTotalCardsForActiveSubject() {
  return activeSubject === 'ciencias' ? 9 : 6;
}

/** Cambia la referencia del set estudiado según la materia activa */
export function syncStudiedCardsSet(subject) {
  if (subject === 'matematicas') {
    studiedCards = studiedCardsMath;
  } else {
    studiedCards = studiedCardsScience;
  }
}

/** true cuando el estudiante ha visitado la sección de laboratorios */
export let userHasUsedLab = false;
export function setUserHasUsedLab(val) { userHasUsedLab = val; }

/** Pestaña activa en este momento */
export let activeTab = 'inicio';
export function setActiveTab(val) { activeTab = val; }

/** Estado de los dos quizzes: teórico y práctico */
export const quizState = {
  teorico: {
    questions:   [],   // se inyecta desde main.js de cada materia
    currentIdx:  0,
    score:       0,
    answers:     [],
    isCompleted: false,
  },
  practico: {
    questions:   [],
    currentIdx:  0,
    score:       0,
    answers:     [],
    isCompleted: false,
  },
};

/** Carrito de la pulpería (cantidades por producto) */
export const pulperíaCart = {
  leche:    0,
  galleta:  0,
  tropical: 0,
  empanada: 0,
};

/** Precios unitarios en colones (₡) */
export const pulperíaPrices = {
  leche:    950,
  galleta:  650,
  tropical: 1200,
  empanada: 800,
};
