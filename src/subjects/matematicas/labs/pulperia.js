import { pulperíaCart, pulperíaPrices } from '../../../shared/state/store.js';
import { playTickWithThrottle } from '../../../shared/modules/audio.js';

/** Incrementa o decrementa la cantidad de un producto en el carrito */
export function changePulperíaQty(key, delta) {
  const oldQty = pulperíaCart[key];
  pulperíaCart[key] = Math.max(0, pulperíaCart[key] + delta);
  if (pulperíaCart[key] !== oldQty) {
    playTickWithThrottle();
  }
  const el = document.getElementById(`pul-qty-${key}`);
  if (el) el.innerText = pulperíaCart[key];
  calculatePulpería();
}

/** Calcula el total, verifica si el billete alcanza y despliega el vuelto visual */
export function calculatePulpería() {
  // Total de la compra
  const total = Object.keys(pulperíaCart).reduce((sum, k) => sum + (pulperíaCart[k] * pulperíaPrices[k]), 0);
  const pago  = parseInt(document.getElementById('pul-pago')?.value || 2000);

  document.getElementById('pul-ticket-total').innerText = `₡${total.toLocaleString('es-CR')}`;
  document.getElementById('pul-ticket-pago').innerText  = `₡${pago.toLocaleString('es-CR')}`;

  const alertaEl  = document.getElementById('pul-alerta-falta');
  const vueltoEl  = document.getElementById('pul-ticket-vuelto');
  const visualEl  = document.getElementById('pul-vuelto-visual');

  if (pago < total) {
    // Billete insuficiente
    alertaEl?.classList.remove('hidden');
    if (vueltoEl)  vueltoEl.innerText = '---';
    if (visualEl)  visualEl.innerHTML = '<span class="text-xs text-red-400 italic">Selecciona un billete mayor.</span>';
    return;
  }

  alertaEl?.classList.add('hidden');

  const vuelto = pago - total;
  if (vueltoEl) vueltoEl.innerText = `₡${vuelto.toLocaleString('es-CR')}`;

  if (!visualEl) return;
  visualEl.innerHTML = '';

  if (vuelto === 0) {
    visualEl.innerHTML = '<span class="text-xs text-emerald-600 font-bold italic">¡Pago exacto! No hay vuelto.</span>';
    return;
  }

  // Algoritmo greedy en denominaciones costarricenses
  const bills  = [
    { val: 10000, label: '₡10 000', color: 'bg-emerald-700', isBill: true },
    { val:  5000, label: '₡5 000',  color: 'bg-yellow-500',  isBill: true },
    { val:  2000, label: '₡2 000',  color: 'bg-blue-500',    isBill: true },
    { val:  1000, label: '₡1 000',  color: 'bg-red-500',     isBill: true },
    { val:   500, label: '₡500',    color: 'bg-amber-700',   isBill: false },
    { val:   100, label: '₡100',    color: 'bg-slate-400',   isBill: false },
    { val:    50, label: '₡50',     color: 'bg-slate-500',   isBill: false },
    { val:    25, label: '₡25',     color: 'bg-yellow-400',  isBill: false },
    { val:    10, label: '₡10',     color: 'bg-slate-300',   isBill: false },
    { val:     5, label: '₡5',      color: 'bg-yellow-200',  isBill: false },
  ];

  let remaining = vuelto;
  bills.forEach(({ val, label, color, isBill }) => {
    const count = Math.floor(remaining / val);
    if (count <= 0) return;
    remaining -= count * val;

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      if (isBill) {
        el.className = `${color} text-white text-[9px] font-extrabold px-3 py-2 rounded-lg shadow-md flex items-center justify-center -rotate-1 border border-white/20`;
        el.style.minWidth = '60px';
        el.style.minHeight = '28px';
      } else {
        el.className = `${color} text-white text-[8px] font-extrabold w-9 h-9 rounded-full shadow-md flex items-center justify-center border border-white/20 flex-shrink-0`;
      }
      el.innerText = label;
      visualEl.appendChild(el);
    }
  });
}
