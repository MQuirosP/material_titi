// ================================================
// ESTADO GLOBAL DE RIOMATE
// Importar desde los módulos que lo necesiten.
// ================================================

/** IDs (1-N) de flashcards que el estudiante ha volteado al menos una vez */
export const studiedCards = new Set();

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
