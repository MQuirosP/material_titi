import { setActiveTab, setUserHasUsedLab } from '../state/store.js';

// Callbacks que los labs registran para inicializarse cuando se activa su tab
const labInitCallbacks = [];

/**
 * Registra una función que se ejecutará cuando se abra el tab 'laboratorio'.
 * Los labs llaman a esto desde su propio módulo.
 */
export function onLabInit(fn) {
  labInitCallbacks.push(fn);
}

/** Cambia la pestaña principal visible */
export function switchTab(tabId) {
  setActiveTab(tabId);

  // Actualizar estilos de los botones de pestaña
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('bg-indigo-600', 'bg-blue-600', 'bg-amber-500', 'text-white');
    btn.classList.add('text-slate-600', 'hover:bg-slate-100');
  });

  const activeBtn = document.getElementById(`tab-${tabId}`);
  if (activeBtn) {
    activeBtn.classList.remove('text-slate-600', 'hover:bg-slate-100');
    if (tabId === 'quiz-practico') {
      activeBtn.classList.add('bg-amber-500', 'text-white');
    } else if (tabId === 'quiz-teorico') {
      activeBtn.classList.add('bg-blue-600', 'text-white');
    } else {
      activeBtn.classList.add('bg-indigo-600', 'text-white');
    }
  }

  // Ocultar todos los contenidos y mostrar el activo
  document.querySelectorAll('.tab-content').forEach(el => {
    el.classList.add('hidden');
    el.classList.remove('block');
  });
  const activeContent = document.getElementById(`content-${tabId}`);
  if (activeContent) {
    activeContent.classList.remove('hidden');
    activeContent.classList.add('block');
  }

  // Si se abre laboratorio, marcar flag y ejecutar callbacks de labs
  if (tabId === 'laboratorio') {
    setUserHasUsedLab(true);
    labInitCallbacks.forEach(fn => fn());
  }
}

/** Cambia la sub-pestaña activa dentro del laboratorio */
export function switchLabSubTab(subTabId) {
  document.querySelectorAll('.lab-sub-content').forEach(el => {
    el.classList.add('hidden');
    el.classList.remove('block');
  });
  const target = document.getElementById(`lab-sub-content-${subTabId}`);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('block');
  }

  document.querySelectorAll('.subtab-btn').forEach(btn => {
    btn.className = 'subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 text-slate-600 hover:bg-slate-200';
  });
  const activeBtn = document.getElementById(`subtab-${subTabId}`);
  if (activeBtn) {
    activeBtn.className = 'subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 bg-teal-500 text-white shadow-sm';
  }
}
