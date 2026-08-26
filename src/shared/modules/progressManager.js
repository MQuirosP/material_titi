/**
 * RíoMate - Gestor de Progreso Persistente (localStorage)
 * Permite guardar, recuperar y reiniciar el avance de exámenes y prácticas.
 */

const STORAGE_KEY = 'riomate_progress_v1';

/** Obtiene todo el objeto de progreso de localStorage */
function getStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.warn('Error leyendo localStorage en RíoMate:', e);
    return {};
  }
}

/** Guarda todo el objeto de progreso a localStorage */
function setStorage(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('Error guardando en localStorage en RíoMate:', e);
  }
}

/** Construye una clave única para subject + evalId + type */
function makeKey(subject, evalId, type) {
  return `${subject}_${evalId}_${type}`;
}

/**
 * Guarda el resultado de un examen
 * @param {string} subject - ej: 'ciencias', 'espanol', 'matematicas'
 * @param {string} evalId - ej: 'sem2_eval1'
 * @param {string} type - 'teorico' | 'practico'
 * @param {object} result - { score, total, grade, timestamp }
 */
export function saveQuizProgress(subject, evalId, type, result) {
  const data = getStorage();
  const key = makeKey(subject, evalId, type);
  data[key] = {
    ...result,
    timestamp: Date.now()
  };
  setStorage(data);
}

/**
 * Recupera el resultado guardado de un examen
 */
export function getQuizProgress(subject, evalId, type) {
  const data = getStorage();
  const key = makeKey(subject, evalId, type);
  return data[key] || null;
}

/**
 * Borra / reinicia el progreso de un examen específico
 */
export function clearQuizProgress(subject, evalId, type) {
  const data = getStorage();
  const key = makeKey(subject, evalId, type);
  delete data[key];
  setStorage(data);
}

/** Guarda el conjunto de IDs de tarjetas de teoría estudiadas */
export function saveStudiedCards(subject, cardsArray) {
  const data = getStorage();
  data[`cards_${subject}`] = cardsArray;
  setStorage(data);
}

/** Recupera el array de IDs de tarjetas estudiadas de la materia */
export function getStudiedCards(subject) {
  const data = getStorage();
  return data[`cards_${subject}`] || [];
}

/** Guarda si el usuario visitó el laboratorio */
export function saveLabVisited(subject) {
  const data = getStorage();
  data[`lab_${subject}`] = true;
  setStorage(data);
}

/** Recupera si el usuario visitó el laboratorio */
export function getLabVisited(subject) {
  const data = getStorage();
  return !!data[`lab_${subject}`];
}

/**
 * Borra TODO el progreso guardado en el navegador (Reiniciar Todo)
 */
export function clearAllProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn('Error borrando localStorage en RíoMate:', e);
  }
}
