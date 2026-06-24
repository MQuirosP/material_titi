import { playTickWithThrottle } from '../../../shared/modules/audio.js';

/** Laboratorio de Múltiplos, Pares e Impares */
export function updateMultiplesLab() {
  playTickWithThrottle();
  const base = parseInt(document.getElementById('lab-mult-base').value);
  document.getElementById('lab-mult-base-val').innerText = base;

  const highlightEvens = document.getElementById('lab-mult-even')?.checked;
  const highlightOdds  = document.getElementById('lab-mult-odd')?.checked;

  const grid = document.getElementById('lab-multiples-grid');
  if (!grid) return;
  grid.innerHTML = '';

  for (let i = 1; i <= 50; i++) {
    const isMultiple = i % base === 0;
    const isEven     = i % 2 === 0;
    const card       = document.createElement('div');

    let cls = 'h-11 flex items-center justify-center rounded-xl font-bold text-sm border transition-all duration-300 ';
    if (isMultiple) {
      cls += 'bg-amber-400 border-amber-500 text-slate-900 scale-105 shadow-md shadow-amber-200/50 ';
    } else {
      cls += 'bg-white border-slate-200 text-slate-700 ';
    }

    if (highlightEvens && isEven)       cls += 'ring-2 ring-blue-500 ring-offset-1 ';
    else if (highlightOdds && !isEven)  cls += 'ring-2 ring-rose-500 ring-offset-1 ';

    card.className = cls;
    card.innerHTML = `
      <div class="text-center">
        <p class="text-[13px]">${i}</p>
        ${isMultiple ? '<p class="text-[8px] uppercase tracking-tighter opacity-70">Mult</p>' : ''}
      </div>
    `;
    grid.appendChild(card);
  }
}
