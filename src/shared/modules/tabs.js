import { setActiveTab, setUserHasUsedLab, activeSubject } from '../state/store.js';
import { playSound } from './audio.js';
import { saveLabVisited } from './progressManager.js';
import { updateBadges } from './flashcards.js';

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
  playSound('tab_click');
  setActiveTab(tabId);

  // Actualizar estilos de los botones de pestaña
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove(
      'bg-indigo-600', 'bg-blue-600', 'bg-amber-500', 'text-white', '!text-white',
      'bg-emerald-600', 'bg-teal-600', 'bg-emerald-500', 'bg-amber-600', 'bg-orange-600', 'bg-rose-500',
      'bg-slate-50', 'border-transparent', 'shadow-sm'
    );
    btn.classList.add('text-slate-700', 'hover:bg-slate-100', 'bg-slate-50', 'border-slate-200');
  });

  const activeBtn = document.getElementById(`tab-${tabId}`);
  if (activeBtn) {
    activeBtn.classList.remove('text-slate-700', 'text-slate-600', 'hover:bg-slate-100', 'bg-slate-50', 'sm:bg-transparent', 'border-slate-200');
    activeBtn.classList.add('!text-white', 'shadow-sm', 'border-transparent');
    
    if (activeSubject === 'ciencias') {
      if (tabId === 'quiz-practico') {
        activeBtn.classList.add('bg-emerald-500');
      } else if (tabId === 'quiz-teorico') {
        activeBtn.classList.add('bg-teal-600');
      } else {
        activeBtn.classList.add('bg-emerald-600');
      }
    } else if (activeSubject === 'espanol') {
      if (tabId === 'quiz-practico') {
        activeBtn.classList.add('bg-rose-500');
      } else if (tabId === 'quiz-teorico') {
        activeBtn.classList.add('bg-orange-600');
      } else {
        activeBtn.classList.add('bg-amber-600');
      }
    } else {
      if (tabId === 'quiz-practico') {
        activeBtn.classList.add('bg-amber-500');
      } else if (tabId === 'quiz-teorico') {
        activeBtn.classList.add('bg-blue-600');
      } else {
        activeBtn.classList.add('bg-indigo-600');
      }
    }
  }

  // Ocultar todos los contenidos y mostrar el activo
  document.querySelectorAll('.tab-content').forEach(el => {
    el.classList.add('hidden');
    el.classList.remove('block');
    el.style.display = 'none';
  });
  const activeContent = document.getElementById(`content-${tabId}`);
  if (activeContent) {
    activeContent.classList.remove('hidden');
    activeContent.classList.add('block');
    activeContent.style.display = 'block';
  }

  // Si se abre laboratorio, marcar flag y ejecutar callbacks de labs
  if (tabId === 'laboratorio') {
    setUserHasUsedLab(true);
    saveLabVisited(activeSubject);
    updateBadges();
    labInitCallbacks.forEach(fn => fn());
  }
}

/** Cambia la sub-pestaña activa dentro del laboratorio */
export function switchLabSubTab(subTabId) {
  playSound('tab_click');
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
    let bgClass = 'bg-teal-500';
    if (activeSubject === 'ciencias') {
      bgClass = 'bg-emerald-600';
    } else if (activeSubject === 'espanol') {
      bgClass = 'bg-amber-600';
    }
    activeBtn.className = `subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${bgClass} text-white shadow-sm font-fun`;
  }
}
