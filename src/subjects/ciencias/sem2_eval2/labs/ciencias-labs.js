// ============================================================================
// RIOCIENCIAS - II SEMESTRE (2ª EVALUACIÓN)
// SÚPER LABORATORIOS INTERACTIVOS DE ENERGÍA, MAGNETISMO Y ELECTROIMÁN
// Escuela Riojalandia · 5º Grado · Maestra Florisel Olmazo López
// ============================================================================
import { playSound, playTickWithThrottle } from '../../../../shared/modules/audio.js';

// ── 1. ESTADO DEL TRANSFORMADOR DE ENERGÍA ──────────────────────────────────
const energyPresets = {
  linterna: {
    id: 'linterna',
    title: 'Linterna Escolar con Pila',
    icon: '🔦',
    category: 'Vida Cotidiana',
    steps: [
      { name: 'Pila Alcalina', type: 'Energía Química', icon: '🔋', color: 'bg-amber-100 text-amber-900 border-amber-300', desc: 'Sustancias químicas reactivas en reposo dentro de la batería.' },
      { name: 'Circuito Conductor', type: 'Energía Eléctrica', icon: '⚡', color: 'bg-sky-100 text-sky-900 border-sky-300', desc: 'Flujo ordenado de electrones al cerrar el interruptor.' },
      { name: 'Bombillo LED', type: 'Energía Lumínica (+ Calor)', icon: '💡', color: 'bg-yellow-100 text-yellow-900 border-yellow-300', desc: 'Emisión de luz visible para iluminar y leve calor térmico.' }
    ],
    rule: 'La energía química acumulada en los reactivos de la pila se convierte en corriente eléctrica y finalmente en luz y calor.'
  },
  coopelesca: {
    id: 'coopelesca',
    title: 'Parque Solar Coopelesca (San Carlos)',
    icon: '☀️',
    category: 'Contexto Nacional 🇨🇷',
    steps: [
      { name: 'Radiación del Sol', type: 'Energía Solar / Lumínica', icon: '☀️', color: 'bg-yellow-100 text-yellow-900 border-yellow-300', desc: 'Rayos solares limpios e inagotables captados en San Carlos.' },
      { name: '19 Mil Paneles', type: 'Energía Eléctrica', icon: '⚡', color: 'bg-emerald-100 text-emerald-900 border-emerald-300', desc: 'Celdas fotovoltaicas de silicio que generan corriente continua.' },
      { name: '5 Mil Hogares', type: 'Luz, Fuerza y Bienestar', icon: '🏠', color: 'bg-indigo-100 text-indigo-900 border-indigo-300', desc: 'Electricidad limpia sin emitir gases de efecto invernadero (CO2).' }
    ],
    rule: 'Costa Rica aprovecha el Sol para abastecer familias san-carleñas sin quemar petróleo ni dañar el ambiente.'
  },
  alimentos: {
    id: 'alimentos',
    title: 'Gallo Pinto y Carrera Deportiva',
    icon: '🏃',
    category: 'Ser Humano',
    steps: [
      { name: 'Alimentos (Gallo Pinto)', type: 'Energía Química', icon: '🍚', color: 'bg-amber-100 text-amber-900 border-amber-300', desc: 'Nutrientes, azúcares y proteínas absorbidos en la digestión.' },
      { name: 'Músculos Activos', type: 'Energía Mecánica / Cinética', icon: '💪', color: 'bg-rose-100 text-rose-900 border-rose-300', desc: 'Contracción muscular que genera movimiento y desplazamiento.' },
      { name: 'Calor Corporal', type: 'Energía Térmica', icon: '🔥', color: 'bg-orange-100 text-orange-900 border-orange-300', desc: 'Sudor y regulación de los 37°C corporales del organismo.' }
    ],
    rule: 'La comida almacena energía química que nuestras células transforman en trabajo físico, movimiento y calor.'
  },
  montana: {
    id: 'montana',
    title: 'Montaña Rusa Escolar',
    icon: '🎢',
    category: 'Conservación Mecánica',
    steps: [
      { name: 'Cima Más Alta', type: 'Máxima Energía Potencial', icon: '⛰️', color: 'bg-purple-100 text-purple-900 border-purple-300', desc: 'Energía acumulada por altura en reposo antes del descenso.' },
      { name: 'Bajada Empinada', type: 'Energía Cinética Veloz', icon: '🚀', color: 'bg-teal-100 text-teal-900 border-teal-300', desc: 'La altura se transforma en velocidad y movimiento acelerado.' },
      { name: 'Frenos al Final', type: 'Energía Térmica y Sonora', icon: '🛑', color: 'bg-slate-100 text-slate-900 border-slate-300', desc: 'Fricción de las zapatas que disipa la energía como calor y ruido.' }
    ],
    rule: '¡La energía no desaparece! La energía potencial gravitatoria se convierte exactamente en energía cinética al descender.'
  },
  medicina: {
    id: 'medicina',
    title: 'Ultrasonido Médico (Ecografía)',
    icon: '🩺',
    category: 'Medicina y Salud',
    steps: [
      { name: 'Red Hospitalaria', type: 'Energía Eléctrica', icon: '⚡', color: 'bg-sky-100 text-sky-900 border-sky-300', desc: 'Alimentación eléctrica regulada en la sala de diagnóstico.' },
      { name: 'Transductor', type: 'Energía Sonora (Ultrasonido)', icon: '🔊', color: 'bg-teal-100 text-teal-900 border-teal-300', desc: 'Ondas acústicas de alta frecuencia inofensivas que rebotan en tejidos.' },
      { name: 'Monitor del Doctor', type: 'Energía Lumínica e Imagen', icon: '🖥️', color: 'bg-emerald-100 text-emerald-900 border-emerald-300', desc: 'Imagen visual en tiempo real para examinar al bebé o los órganos.' }
    ],
    rule: 'Las transformaciones salvan vidas: la electricidad se vuelve sonido y luego imagen diagnóstica sin cirugía invasiva.'
  }
};

let currentEnergyPreset = 'linterna';

export function initTransformadorLab() {
  renderEnergyLab();
}

export function selectEnergyPreset(presetId) {
  if (!energyPresets[presetId]) return;
  playSound('tab_click');
  currentEnergyPreset = presetId;
  renderEnergyLab();
}

function renderEnergyLab() {
  const p = energyPresets[currentEnergyPreset];
  const titleEl = document.getElementById('energy-lab-title');
  const catEl = document.getElementById('energy-lab-cat');
  const stepsContainer = document.getElementById('energy-steps-container');
  const ruleEl = document.getElementById('energy-lab-rule');

  if (titleEl) titleEl.textContent = `${p.icon} ${p.title}`;
  if (catEl) catEl.textContent = p.category;
  if (ruleEl) ruleEl.textContent = p.rule;

  if (stepsContainer) {
    stepsContainer.innerHTML = p.steps.map((st, i) => `
      <div class="flex-1 bg-white p-4 rounded-2xl border-2 ${st.color} shadow-sm flex flex-col justify-between items-center text-center transition-all duration-300 hover:scale-[1.02]">
        <div class="flex items-center justify-between w-full mb-2">
          <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/5 font-fun">Paso ${i + 1}</span>
          <span class="text-2xl">${st.icon}</span>
        </div>
        <div class="my-2">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 font-fun">${st.type}</h4>
          <p class="text-sm sm:text-base font-bold text-slate-800 font-fun mt-0.5">${st.name}</p>
          <p class="text-[11px] text-slate-600 mt-1 leading-snug">${st.desc}</p>
        </div>
      </div>
      ${i < p.steps.length - 1 ? '<div class="hidden md:flex items-center justify-center text-slate-400 font-bold text-xl px-1">➡️</div>' : ''}
    `).join('');
  }

  // Actualizar botones de selector
  document.querySelectorAll('.preset-energy-btn').forEach(b => {
    const bId = b.getAttribute('data-preset');
    if (bId === currentEnergyPreset) {
      b.className = 'preset-energy-btn px-3 py-2 rounded-xl text-xs font-bold font-fun transition-all bg-emerald-600 text-white shadow-sm flex items-center gap-1.5';
    } else {
      b.className = 'preset-energy-btn px-3 py-2 rounded-xl text-xs font-bold font-fun transition-all bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1.5';
    }
  });
}

// ── 2. ESTADO DEL LABORATORIO MAGNÉTICO Y BRÚJULA ──────────────────────────
let magnetPoleLeft = 'N'; // 'N' | 'S'
let magnetPoleRight = 'S';
let secondMagnetFacing = 'N'; // 'N' | 'S'
let magneticFieldLinesVisible = true;
let compassAngle = 0; // Grados hacia el norte

const testMaterials = [
  { name: 'Clip de Hierro', element: 'Hierro (Fe)', isMagnetic: true, icon: '📎', rationale: '¡Atraído de golpe! El hierro es el metal ferromagnético por excelencia.' },
  { name: 'Moneda con Níquel', element: 'Níquel (Ni)', isMagnetic: true, icon: '🪙', rationale: '¡Atraída firmemente! El níquel reacciona fuertemente ante cualquier imán.' },
  { name: 'Tuerca de Cobalto', element: 'Cobalto (Co)', isMagnetic: true, icon: '⚙️', rationale: '¡Atraída al instante! El cobalto completa la tríada de metales ferromagnéticos (Fe, Ni, Co).' },
  { name: 'Bloque de Cedro', element: 'Madera Orgánica', isMagnetic: false, icon: '🪵', rationale: 'No reacciona. La madera es un material aislante vegetal sin propiedades magnéticas.' },
  { name: 'Tapa de Refresco', element: 'Plástico Polímero', isMagnetic: false, icon: '🥤', rationale: 'No reacciona. Los polímeros sintéticos carecen de átomos ferromagnéticos.' },
  { name: 'Lata de Jugo', element: 'Aluminio (Al)', isMagnetic: false, icon: '🥫', rationale: '¡No es atraído! El aluminio es un metal paramagnético que no se pega a los imanes comunes.' }
];

let selectedTestMaterial = null;

export function initMagnetismoLab() {
  renderMagnetismoUI();
}

export function flipMainMagnet() {
  playTickWithThrottle();
  const temp = magnetPoleLeft;
  magnetPoleLeft = magnetPoleRight;
  magnetPoleRight = temp;
  compassAngle = (magnetPoleRight === 'N') ? 180 : 0;
  renderMagnetismoUI();
}

export function setSecondMagnetPole(pole) {
  playSound('tab_click');
  secondMagnetFacing = pole;
  renderMagnetismoUI();
}

export function toggleFieldLines() {
  playSound('tab_click');
  magneticFieldLinesVisible = !magneticFieldLinesVisible;
  renderMagnetismoUI();
}

export function testMaterialOnMagnet(idx) {
  const item = testMaterials[idx];
  selectedTestMaterial = item;
  if (item.isMagnetic) {
    playSound('correct');
  } else {
    playSound('incorrect');
  }
  renderMagnetismoUI();
}

function renderMagnetismoUI() {
  const leftPoleEl = document.getElementById('magnet-pole-left');
  const rightPoleEl = document.getElementById('magnet-pole-right');
  const interactionFeedback = document.getElementById('magnet-interaction-feedback');
  const fieldCanvas = document.getElementById('magnetic-field-canvas');
  const compassNeedle = document.getElementById('compass-needle');
  const materialsContainer = document.getElementById('magnet-materials-container');
  const materialResultEl = document.getElementById('magnet-material-result');

  if (leftPoleEl && rightPoleEl) {
    leftPoleEl.textContent = magnetPoleLeft === 'N' ? 'N (Norte)' : 'S (Sur)';
    leftPoleEl.className = magnetPoleLeft === 'N' ? 'flex-1 bg-red-600 text-white font-bold text-center py-4 rounded-l-2xl font-fun flex flex-col justify-center items-center shadow-inner' : 'flex-1 bg-blue-600 text-white font-bold text-center py-4 rounded-l-2xl font-fun flex flex-col justify-center items-center shadow-inner';

    rightPoleEl.textContent = magnetPoleRight === 'N' ? 'N (Norte)' : 'S (Sur)';
    rightPoleEl.className = magnetPoleRight === 'N' ? 'flex-1 bg-red-600 text-white font-bold text-center py-4 rounded-r-2xl font-fun flex flex-col justify-center items-center shadow-inner' : 'flex-1 bg-blue-600 text-white font-bold text-center py-4 rounded-r-2xl font-fun flex flex-col justify-center items-center shadow-inner';
  }

  // Interacción entre polos (Polo derecho del imán 1 vs Segundo imán)
  if (interactionFeedback) {
    const polesMatch = (magnetPoleRight === secondMagnetFacing);
    if (polesMatch) {
      interactionFeedback.className = 'mt-3 p-3.5 rounded-2xl border-2 border-rose-300 bg-rose-50 text-rose-950 font-fun text-xs font-bold flex items-center gap-2 animate-fadeIn';
      interactionFeedback.innerHTML = `<span>🛑</span> <span>¡REPULSIÓN! Los polos son iguales (${magnetPoleRight} con ${secondMagnetFacing}). Se empujan hacia afuera (principio del tren Maglev y aros flotantes).</span>`;
    } else {
      interactionFeedback.className = 'mt-3 p-3.5 rounded-2xl border-2 border-emerald-300 bg-emerald-50 text-emerald-950 font-fun text-xs font-bold flex items-center gap-2 animate-fadeIn';
      interactionFeedback.innerHTML = `<span>🧲</span> <span>¡ATRACCIÓN MUTUA! Polos opuestos (${magnetPoleRight} con ${secondMagnetFacing}). Se atraen con máxima fuerza magnética.</span>`;
    }
  }

  // Brújula rotación
  if (compassNeedle) {
    compassNeedle.style.transform = `rotate(${compassAngle}deg)`;
  }

  // Líneas de campo visuales
  const fieldContainer = document.getElementById('field-lines-overlay');
  if (fieldContainer) {
    fieldContainer.style.opacity = magneticFieldLinesVisible ? '1' : '0.15';
  }

  // Lista de materiales
  if (materialsContainer) {
    materialsContainer.innerHTML = testMaterials.map((m, idx) => `
      <button onclick="window.testMaterialOnMagnet(${idx})" class="p-3 rounded-2xl border-2 transition-all font-fun text-center flex flex-col items-center justify-center min-h-[75px] ${selectedTestMaterial === m ? (m.isMagnetic ? 'border-emerald-500 bg-emerald-50' : 'border-rose-400 bg-rose-50') : 'border-slate-200 bg-white hover:border-amber-400 hover:bg-amber-50/40 active:scale-95 shadow-sm'}">
        <span class="text-2xl mb-1">${m.icon}</span>
        <span class="text-xs font-bold text-slate-800 leading-tight">${m.name}</span>
        <span class="text-[10px] text-slate-500">${m.element}</span>
      </button>
    `).join('');
  }

  // Resultado del material seleccionado
  if (materialResultEl) {
    if (selectedTestMaterial) {
      materialResultEl.className = selectedTestMaterial.isMagnetic ? 'mt-3 p-3.5 rounded-2xl border-2 border-emerald-300 bg-emerald-50 text-emerald-950 font-fun text-xs font-bold block animate-fadeIn' : 'mt-3 p-3.5 rounded-2xl border-2 border-slate-300 bg-slate-100 text-slate-800 font-fun text-xs font-bold block animate-fadeIn';
      materialResultEl.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="text-lg">${selectedTestMaterial.isMagnetic ? '✅' : '❌'}</span>
          <span>${selectedTestMaterial.rationale}</span>
        </div>
      `;
    } else {
      materialResultEl.className = 'hidden';
    }
  }
}

// ── 3. ESTADO DEL SIMULADOR DE CIRCUITO Y ELECTROIMÁN ────────────────────────
let circuitClosed = false;
let coilTurns = 30; // 10 a 60 vueltas

export function initElectroimanLab() {
  renderElectroimanUI();
}

export function toggleCircuitSwitch() {
  circuitClosed = !circuitClosed;
  if (circuitClosed) {
    playSound('correct');
  } else {
    playSound('tab_click');
  }
  renderElectroimanUI();
}

export function setCoilTurns(val) {
  playTickWithThrottle();
  coilTurns = parseInt(val, 10);
  renderElectroimanUI();
}

function renderElectroimanUI() {
  const switchBtn = document.getElementById('switch-circuit-btn');
  const statusBadge = document.getElementById('circuit-status-badge');
  const coilTurnsLabel = document.getElementById('coil-turns-label');
  const wireEffect = document.getElementById('wire-current-effect');
  const nailCore = document.getElementById('nail-magnetic-core');
  const clipsCounter = document.getElementById('clips-attracted-counter');
  const examQuestionCard = document.getElementById('circuit-exam-star-card');

  if (coilTurnsLabel) coilTurnsLabel.textContent = `${coilTurns} vueltas de alambre`;

  const clipsCount = circuitClosed ? Math.floor(coilTurns / 6) : 0;

  if (switchBtn) {
    if (circuitClosed) {
      switchBtn.className = 'w-full py-3.5 px-4 rounded-2xl font-bold font-fun text-sm shadow-md transition-all bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 min-h-[48px] active:scale-95';
      switchBtn.innerHTML = '<span>⚡ Interruptor CERRADO (Apagar)</span>';
    } else {
      switchBtn.className = 'w-full py-3.5 px-4 rounded-2xl font-bold font-fun text-sm shadow-md transition-all bg-slate-800 hover:bg-slate-900 text-white flex items-center justify-center gap-2 min-h-[48px] active:scale-95';
      switchBtn.innerHTML = '<span>🔌 Interruptor ABIERTO (Conectar Circuito)</span>';
    }
  }

  if (statusBadge) {
    if (circuitClosed) {
      statusBadge.className = 'inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-fun border border-emerald-300';
      statusBadge.innerHTML = '<span>🟢 Corriente Dinámica Activa</span>';
    } else {
      statusBadge.className = 'inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-fun border border-slate-200';
      statusBadge.innerHTML = '<span>⚪ Circuito Abierto (Sin Corriente)</span>';
    }
  }

  if (wireEffect) {
    wireEffect.style.opacity = circuitClosed ? '1' : '0.2';
  }

  if (nailCore) {
    if (circuitClosed) {
      nailCore.className = 'p-4 rounded-2xl border-4 border-amber-400 bg-amber-100/90 shadow-lg text-center transition-all animate-pulse';
    } else {
      nailCore.className = 'p-4 rounded-2xl border-2 border-slate-300 bg-slate-100 text-center transition-all';
    }
  }

  if (clipsCounter) {
    clipsCounter.innerHTML = `
      <div class="text-3xl font-bold font-fun ${circuitClosed ? 'text-emerald-700' : 'text-slate-400'}">${clipsCount}</div>
      <p class="text-xs font-bold uppercase tracking-wider text-slate-500 font-fun">Clips de Metal Atraídos</p>
      <div class="flex flex-wrap gap-1.5 justify-center mt-2 max-w-[200px] min-h-[30px]">
        ${Array.from({ length: clipsCount }).map(() => '<span class="text-lg">📎</span>').join('')}
        ${clipsCount === 0 ? '<span class="text-xs text-slate-400 italic">Los clips caen al suelo</span>' : ''}
      </div>
    `;
  }

  if (examQuestionCard) {
    if (circuitClosed) {
      examQuestionCard.innerHTML = `
        <div class="flex items-start gap-2.5">
          <span class="text-xl">🌟</span>
          <div>
            <h5 class="text-xs font-bold uppercase text-emerald-900 font-fun">Circuito Cerrado en Acción:</h5>
            <p class="text-xs text-emerald-800 leading-snug mt-0.5">
              Los electrones circulan continuamente a través del alambre de cobre. La corriente genera un campo magnético que magnetiza el clavo de hierro levantando ${clipsCount} clips. ¡Al apagarlo, se desmagnetiza al instante!
            </p>
          </div>
        </div>
      `;
      examQuestionCard.className = 'p-3.5 rounded-2xl border border-emerald-300 bg-emerald-50/80';
    } else {
      examQuestionCard.innerHTML = `
        <div class="flex items-start gap-2.5">
          <span class="text-xl">⭐</span>
          <div>
            <h5 class="text-xs font-bold uppercase text-amber-900 font-fun">Pregunta Estrella de la Maestra Florisel:</h5>
            <p class="text-xs text-amber-800 leading-snug mt-0.5">
              ¿Qué hay en la pila si el circuito está abierto? <strong>Hay cargas eléctricas guardadas</strong> (energía química acumulada en reposo), pero <strong>NO hay corriente eléctrica</strong> hasta que el circuito se cierre.
            </p>
          </div>
        </div>
      `;
      examQuestionCard.className = 'p-3.5 rounded-2xl border border-amber-300 bg-amber-50/80';
    }
  }
}

// ── EXPONER FUNCIONES AL ÁMBITO GLOBAL PARA ONCLICK ──────────────────────────
Object.assign(window, {
  selectEnergyPreset,
  flipMainMagnet,
  setSecondMagnetPole,
  toggleFieldLines,
  testMaterialOnMagnet,
  toggleCircuitSwitch,
  setCoilTurns
});
