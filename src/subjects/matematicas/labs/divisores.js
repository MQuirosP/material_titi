import { playTickWithThrottle } from '../../../shared/modules/audio.js';

/** Laboratorio de Divisores — Fábrica de Divisores */
export function updateDivisoresLab() {
  playTickWithThrottle();
  const num     = parseInt(document.getElementById('lab-div-num').value);
  const divisor = parseInt(document.getElementById('lab-div-test').value);

  document.getElementById('lab-div-num-val').innerText  = num;
  document.getElementById('lab-div-test-val').innerText = divisor;

  // Calcular divisores reales del número
  const realDivisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) realDivisors.push(i);
  }
  document.getElementById('lab-div-list-txt').innerText = realDivisors.join(', ');

  const quotient  = Math.floor(num / divisor);
  const remainder = num % divisor;

  // Texto de estado
  const statusText = document.getElementById('lab-div-status-text');
  if (statusText) {
    if (remainder === 0) {
      statusText.className = 'text-sm font-bold mb-4 text-emerald-600 bg-emerald-50 p-2 rounded-xl border border-emerald-100 inline-block';
      statusText.innerText = `✓ ¡${divisor} sí es divisor de ${num}! Se formaron ${quotient} grupos perfectos de ${divisor} sin sobrar nada.`;
    } else {
      statusText.className = 'text-sm font-bold mb-4 text-amber-600 bg-amber-50 p-2 rounded-xl border border-amber-100 inline-block';
      statusText.innerText = `✗ ${divisor} no es divisor exacto. Formamos ${quotient} grupos de ${divisor}, pero sobran ${remainder} (residuo).`;
    }
  }

  // Dibujar grupos
  const groupsContainer = document.getElementById('lab-div-groups-container');
  if (groupsContainer) {
    groupsContainer.innerHTML = '';
    for (let g = 1; g <= quotient; g++) {
      const groupDiv = document.createElement('div');
      groupDiv.className = 'bg-white border-2 border-emerald-200 rounded-xl p-3 flex flex-col items-center shadow-sm';

      let dotsHtml = '<div class="flex flex-wrap gap-1 justify-center">';
      for (let d = 1; d <= divisor; d++) {
        dotsHtml += `<span class="w-3.5 h-3.5 bg-emerald-500 rounded-full animate-bounce" style="animation-delay: ${d * 0.1}s"></span>`;
      }
      dotsHtml += '</div>';

      groupDiv.innerHTML = `<span class="text-[10px] font-bold text-emerald-600 mb-1.5 uppercase">Grupo ${g}</span>${dotsHtml}`;
      groupsContainer.appendChild(groupDiv);
    }
    if (quotient === 0) {
      groupsContainer.innerHTML = '<div class="col-span-full flex items-center justify-center text-xs text-slate-400 italic">No alcanza para formar ningún grupo completo.</div>';
    }
  }

  // Dibujar sobrantes
  const leftoversContainer = document.getElementById('lab-div-leftovers');
  if (leftoversContainer) {
    leftoversContainer.innerHTML = '';
    for (let r = 1; r <= remainder; r++) {
      const dot = document.createElement('span');
      dot.className = 'w-4 h-4 bg-red-500 rounded-full shadow-sm animate-pulse';
      leftoversContainer.appendChild(dot);
    }
    if (remainder === 0) {
      leftoversContainer.innerHTML = '<span class="text-xs text-emerald-600 italic">¡Residuo Cero! Todo agrupado perfectamente.</span>';
    }
  }
}
