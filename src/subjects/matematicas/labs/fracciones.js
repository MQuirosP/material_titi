import { playTickWithThrottle } from '../../../shared/modules/audio.js';

/** Laboratorio de Fracciones — Cortadora de Chocolates */
export function updateFraccionesLab() {
  playTickWithThrottle();
  const num = parseInt(document.getElementById('lab-frac-num').value);
  const den = parseInt(document.getElementById('lab-frac-den').value);

  document.getElementById('lab-frac-num-val').innerText = num;
  document.getElementById('lab-frac-den-val').innerText = den;

  // Clasificación de la fracción
  const typeTxt = document.getElementById('lab-frac-type-txt');
  if (typeTxt) {
    if (num < den) {
      typeTxt.innerText  = 'Fracción Propia (Menor que 1 entero)';
      typeTxt.className  = 'font-extrabold text-sm text-teal-600 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-lg inline-block';
    } else if (num === den) {
      typeTxt.innerText  = 'Fracción Impropia (Igual a 1 entero exacto)';
      typeTxt.className  = 'font-extrabold text-sm text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-lg inline-block';
    } else {
      typeTxt.innerText  = 'Fracción Impropia (Mayor que 1 entero)';
      typeTxt.className  = 'font-extrabold text-sm text-amber-600 bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-lg inline-block';
    }
  }

  // Dibujar barras de chocolate
  const container = document.getElementById('lab-frac-visual-container');
  if (container) {
    container.innerHTML = '';
    const totalBars = Math.ceil(num / den);
    let remaining   = num;

    for (let b = 1; b <= totalBars; b++) {
      const barWrapper = document.createElement('div');
      barWrapper.className = 'bg-white p-3 rounded-xl border border-slate-200 shadow-sm';

      const label = document.createElement('p');
      label.className = 'text-[10px] font-bold text-slate-500 uppercase mb-1.5';
      label.innerText = `Chocolate entero ${b}`;
      barWrapper.appendChild(label);

      const grid = document.createElement('div');
      grid.className = 'flex gap-1 h-10 w-full';

      for (let s = 1; s <= den; s++) {
        const slice = document.createElement('div');
        if (remaining > 0) {
          slice.className = 'flex-1 bg-amber-500 rounded-md border border-amber-600 flex items-center justify-center text-[10px] font-bold text-white transition-all';
          slice.innerText = '🍫';
          remaining--;
        } else {
          slice.className = 'flex-1 bg-slate-100 rounded-md border-2 border-dashed border-slate-300 transition-all';
        }
        grid.appendChild(slice);
      }
      barWrapper.appendChild(grid);
      container.appendChild(barWrapper);
    }
  }

  // Mostrar conversión a mixta
  const impropiaEl = document.getElementById('lab-frac-math-impropia');
  const mixtaEl    = document.getElementById('lab-frac-math-mixta');
  if (impropiaEl) impropiaEl.innerText = `${num}/${den}`;

  const wholePart    = Math.floor(num / den);
  const fractionPart = num % den;
  if (mixtaEl) {
    if (fractionPart === 0)      mixtaEl.innerText = `${wholePart} enteros`;
    else if (wholePart === 0)    mixtaEl.innerText = `${fractionPart}/${den}`;
    else                         mixtaEl.innerText = `${wholePart} y ${fractionPart}/${den}`;
  }
}
