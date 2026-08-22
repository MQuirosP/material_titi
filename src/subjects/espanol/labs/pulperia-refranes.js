// =====================================================
// SÚPER LABORATORIO: LA PULPERÍA DE REFRANES Y BOMBAS TICAS
// Juegos interactivos de pareo, adivinanzas y rimas tradicionales
// =====================================================

import { playSound, playTickWithThrottle } from '../../../shared/modules/audio.js';
import { setUserHasUsedLab } from '../../../shared/state/store.js';
import { updateBadges } from '../../../shared/modules/flashcards.js';

const refranesGameData = [
  {
    id: 1,
    refran: "En boca cerrada no entran moscas.",
    meaning: "Es mejor ser prudente y callar para evitar meterse en problemas.",
    clue: "Evita hablar de más."
  },
  {
    id: 2,
    refran: "Coyol partido, coyol comido.",
    meaning: "Todo el dinero que se recibe se gasta inmediatamente sin ahorrar.",
    clue: "Vivir al día sin guardar."
  },
  {
    id: 3,
    refran: "Al mal tiempo, buena cara.",
    meaning: "Estar tranquilo y mantener actitud optimista ante las dificultades.",
    clue: "Positivismo ante las adversidades."
  },
  {
    id: 4,
    refran: "Al perro flaco se le pegan las pulgas.",
    meaning: "Al más indefenso suelen afligirle todas las desgracias juntas.",
    clue: "Problemas acumulados al vulnerable."
  },
  {
    id: 5,
    refran: "A buen hambre, no hay pan duro.",
    meaning: "Cuando hay necesidad real, no nos fijamos en lujos ni detalles.",
    clue: "Apreciar lo que se tiene."
  },
  {
    id: 6,
    refran: "Al que madruga, Dios lo ayuda.",
    meaning: "Las cosas salen mejor cuando nos esforzamos y empezamos temprano.",
    clue: "Premio al esfuerzo y disciplina."
  }
];

const adivinanzasData = [
  {
    riddle: "Tengo hojas pero no soy árbol, tengo lomo pero no soy animal. Si me abres te cuento mil secretos. ¿Quién soy?",
    hints: ["Pista 1: Lo llevas en tu bulto escolar.", "Pista 2: Tiene páginas, portada y glosario."],
    solution: "El Libro 📖",
    icon: "📚"
  },
  {
    riddle: "Vuelo de noche, duermo de día y nunca verás plumas en el ala mía. ¿Quién soy?",
    hints: ["Pista 1: Es un mamífero volador.", "Pista 2: Aparece en una fábula famosa de Esopo."],
    solution: "El Murciélago 🦇",
    icon: "🦇"
  },
  {
    riddle: "Chiquito como un ratón y cuida la casa como un león. ¿Quién soy?",
    hints: ["Pista 1: Es de metal y se mete en la cerradura.", "Pista 2: Abre la puerta de la pulpería."],
    solution: "El Candado o la Llave 🗝️",
    icon: "🔐"
  }
];

const bombasData = [
  {
    intro: "¡Bomba!",
    verso1: "La naranja nació verde y el tiempo la maduró,",
    verso2: "mi corazón nació libre y el tuyo...",
    rhymes: ["lo aprisionó.", "se durmió.", "lo regaló."],
    correctRhyme: "lo aprisionó.",
    celebration: "¡Uyuyuy bajura! ¡Hermosa bomba guanacasteca!"
  },
  {
    intro: "¡Bomba!",
    verso1: "De la peña nace el agua, del agua nacen los ríos,",
    verso2: "y de tus ojitos bellos nacen los...",
    rhymes: ["suspiros míos.", "refranes tíos.", "vientos fríos."],
    correctRhyme: "suspiros míos.",
    celebration: "¡Bomba! ¡Pura tradición de nuestra tierra!"
  }
];

let currentAdivinanzaIdx = 0;
let currentBombaIdx = 0;
let selectedRefran = null;
let refranesMatched = 0;
let shuffledMeanings = [];

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // Evitar que coincida en la misma posición que el orden original
  let identicalCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === array[i].id) identicalCount++;
  }
  if (identicalCount > 1 && arr.length > 2) {
    const temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }
  return arr;
}

export function resetRefranesGame() {
  playSound('tab_click');
  selectedRefran = null;
  refranesMatched = 0;
  shuffledMeanings = shuffleArray(refranesGameData);
  renderRefranesGame();
}

export function initPulperiaRefranes() {
  shuffledMeanings = shuffleArray(refranesGameData);
  renderRefranesGame();
  renderAdivinanza();
  renderBomba();
}

function renderRefranesGame() {
  const container = document.getElementById('refranes-match-game');
  if (!container) return;

  if (shuffledMeanings.length === 0) {
    shuffledMeanings = shuffleArray(refranesGameData);
  }

  container.innerHTML = `
    <div class="flex justify-between items-center mb-3">
      <span class="text-xs font-bold text-amber-800 uppercase font-fun">Toca un refrán y luego su significado moral desordenado:</span>
      <button onclick="window.resetRefranesGame()" class="px-3 py-1 bg-white hover:bg-amber-100 border border-amber-300 rounded-xl text-xs font-bold text-amber-900 transition-all font-fun shadow-sm">
        🔄 Barajar Pareo
      </button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p class="text-xs font-bold uppercase text-amber-800 mb-2 font-fun">1. Refranes Populares:</p>
        <div class="space-y-2">
          ${refranesGameData.map(r => `
            <button id="ref-btn-${r.id}" onclick="window.selectRefranToMatch(${r.id})" class="w-full text-left p-3 rounded-2xl border border-slate-200 bg-white hover:border-amber-400 hover:bg-amber-50 text-sm font-semibold text-slate-800 transition-all font-fun">
              "${r.refran}"
            </button>
          `).join('')}
        </div>
      </div>
      <div>
        <p class="text-xs font-bold uppercase text-indigo-800 mb-2 font-fun">2. Significados Morales (Aleatorios):</p>
        <div class="space-y-2">
          ${shuffledMeanings.map(m => `
            <button id="mean-btn-${m.id}" onclick="window.selectMeaningToMatch(${m.id})" class="w-full text-left p-3 rounded-2xl border border-slate-200 bg-white hover:border-indigo-400 hover:bg-indigo-50 text-xs font-medium text-slate-700 transition-all leading-snug">
              • ${m.meaning}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
    <div id="refranes-feedback-box" class="mt-4 hidden p-4 rounded-2xl font-fun text-sm text-center"></div>
  `;
}

export function selectRefranToMatch(id) {
  playTickWithThrottle();
  selectedRefran = id;

  refranesGameData.forEach(r => {
    const btn = document.getElementById(`ref-btn-${r.id}`);
    if (btn && !btn.disabled) {
      if (r.id === id) {
        btn.className = "w-full text-left p-3 rounded-2xl border-2 border-amber-500 bg-amber-100 text-sm font-bold text-amber-900 transition-all font-fun shadow-sm";
      } else {
        btn.className = "w-full text-left p-3 rounded-2xl border border-slate-200 bg-white hover:border-amber-400 hover:bg-amber-50 text-sm font-semibold text-slate-800 transition-all font-fun";
      }
    }
  });
}

export function selectMeaningToMatch(meaningId) {
  if (selectedRefran === null) {
    playSound('incorrect');
    const fb = document.getElementById('refranes-feedback-box');
    if (fb) {
      fb.className = "mt-4 p-3 rounded-2xl bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold block animate-fadeIn";
      fb.textContent = "👉 Primero toca un refrán de la columna izquierda y luego su significado.";
    }
    return;
  }

  const fb = document.getElementById('refranes-feedback-box');

  if (selectedRefran === meaningId) {
    playSound('correct');
    refranesMatched++;
    const refBtn = document.getElementById(`ref-btn-${selectedRefran}`);
    const meanBtn = document.getElementById(`mean-btn-${meaningId}`);

    if (refBtn) {
      refBtn.className = "w-full text-left p-3 rounded-2xl border border-emerald-300 bg-emerald-100 text-sm font-bold text-emerald-900 opacity-80 cursor-default";
      refBtn.disabled = true;
    }
    if (meanBtn) {
      meanBtn.className = "w-full text-left p-3 rounded-2xl border border-emerald-300 bg-emerald-100 text-xs font-semibold text-emerald-900 opacity-80 cursor-default";
      meanBtn.disabled = true;
    }

    if (fb) {
      fb.className = "mt-4 p-3 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold block animate-fadeIn";
      fb.textContent = "🌟 ¡Pareja acertada! Has conectado el refrán con su verdadera sabiduría popular.";
    }

    selectedRefran = null;
    setUserHasUsedLab(true);
    updateBadges();

    if (refranesMatched >= refranesGameData.length) {
      setTimeout(() => {
        playSound('score_excellent');
        if (fb) {
          fb.className = "mt-4 p-4 rounded-2xl bg-amber-200 border-2 border-amber-400 text-amber-950 text-sm font-bold block animate-fadeIn text-center";
          fb.innerHTML = "🎉 <strong>¡Felicidades!</strong> Completaste todos los refranes populares ticos.";
        }
      }, 500);
    }
  } else {
    playSound('incorrect');
    if (fb) {
      fb.className = "mt-4 p-3 rounded-2xl bg-rose-100 border border-rose-300 text-rose-900 text-xs font-bold block animate-fadeIn";
      fb.textContent = "❌ No coincide. Lee con atención la enseñanza moral e intenta de nuevo.";
    }
  }
}

function renderAdivinanza() {
  const container = document.getElementById('adivinanzas-slot');
  if (!container) return;

  const item = adivinanzasData[currentAdivinanzaIdx];
  container.innerHTML = `
    <div class="bg-amber-50/70 p-6 rounded-3xl border border-amber-200">
      <div class="flex justify-between items-center mb-3">
        <span class="text-xs font-bold bg-amber-200 text-amber-900 px-3 py-1 rounded-full font-fun">Adivinanza ${currentAdivinanzaIdx + 1} de ${adivinanzasData.length}</span>
        <span class="text-2xl">${item.icon}</span>
      </div>
      <p class="text-base font-bold text-slate-800 mb-4 italic leading-relaxed bg-white p-4 rounded-2xl border border-amber-100">
        "${item.riddle}"
      </p>
      <div class="flex flex-wrap gap-2 mb-4">
        <button onclick="window.revealHint(0)" class="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs font-fun transition-all">
          🔍 Ver Pista 1
        </button>
        <button onclick="window.revealHint(1)" class="px-3 py-1.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs font-fun transition-all">
          💡 Ver Pista 2
        </button>
        <button onclick="window.revealAdivinanzaSolution()" class="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs font-fun transition-all">
          ✨ Revelar Solución
        </button>
      </div>
      <div id="adivinanza-hint-box" class="hidden p-3 rounded-2xl bg-white border border-amber-200 text-xs font-semibold text-amber-900 mb-3"></div>
      <div id="adivinanza-solution-box" class="hidden p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-sm font-bold"></div>
      <div class="mt-4 flex justify-end">
        <button onclick="window.nextAdivinanza()" class="text-xs font-bold text-amber-800 hover:text-amber-950 font-fun">
          Siguiente Adivinanza ➡️
        </button>
      </div>
    </div>
  `;
}

export function revealHint(hintNum) {
  playTickWithThrottle();
  const item = adivinanzasData[currentAdivinanzaIdx];
  const box = document.getElementById('adivinanza-hint-box');
  if (box && item.hints[hintNum]) {
    box.className = "p-3 rounded-2xl bg-white border border-amber-200 text-xs font-semibold text-amber-900 mb-3 block animate-fadeIn";
    box.textContent = item.hints[hintNum];
  }
}

export function revealAdivinanzaSolution() {
  playSound('correct');
  const item = adivinanzasData[currentAdivinanzaIdx];
  const box = document.getElementById('adivinanza-solution-box');
  if (box) {
    box.className = "p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-sm font-bold block animate-fadeIn";
    box.innerHTML = `🎉 <strong>Respuesta:</strong> ¡Es ${item.solution}!`;
  }
  setUserHasUsedLab(true);
  updateBadges();
}

export function nextAdivinanza() {
  playSound('tab_click');
  currentAdivinanzaIdx = (currentAdivinanzaIdx + 1) % adivinanzasData.length;
  renderAdivinanza();
}

function renderBomba() {
  const container = document.getElementById('bombas-slot');
  if (!container) return;

  const b = bombasData[currentBombaIdx];
  container.innerHTML = `
    <div class="bg-rose-50/70 p-6 rounded-3xl border border-rose-200">
      <div class="flex items-center gap-2 mb-3">
        <span class="text-2xl">🎺</span>
        <span class="text-xs font-bold bg-rose-200 text-rose-900 px-3 py-1 rounded-full font-fun">Bomba Guanacasteca</span>
      </div>
      <p class="text-xl font-bold text-rose-700 font-fun mb-2">— ¡BOMBA!</p>
      <div class="bg-white p-4 rounded-2xl border border-rose-100 text-sm font-semibold text-slate-800 mb-4 leading-relaxed">
        <p>${b.verso1}</p>
        <p class="text-indigo-800">${b.verso2} <span id="bomba-missing-rhyme" class="underline text-rose-600 font-bold font-fun">¿...?</span></p>
      </div>
      <p class="text-xs font-bold uppercase text-slate-500 mb-2">Elige el final que rima correctamente:</p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2" id="bomba-rhymes-grid">
        ${b.rhymes.map(r => `
          <button onclick="window.checkBombaRhyme('${r}')" class="p-3 bg-white hover:bg-rose-50 hover:border-rose-400 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 transition-all font-fun">
            "${r}"
          </button>
        `).join('')}
      </div>
      <div id="bomba-feedback-box" class="hidden mt-4 p-4 rounded-2xl text-xs font-bold"></div>
      <div class="mt-4 flex justify-end">
        <button onclick="window.nextBomba()" class="text-xs font-bold text-rose-800 hover:text-rose-950 font-fun">
          Siguiente Bomba ➡️
        </button>
      </div>
    </div>
  `;
}

export function checkBombaRhyme(chosen) {
  const b = bombasData[currentBombaIdx];
  const fb = document.getElementById('bomba-feedback-box');
  const missing = document.getElementById('bomba-missing-rhyme');

  if (chosen === b.correctRhyme) {
    playSound('correct');
    if (missing) missing.textContent = chosen;
    if (fb) {
      fb.className = "mt-4 p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold block animate-fadeIn";
      fb.innerHTML = `🎊 <strong>¡Bomba acertada!</strong> ${b.celebration}`;
    }
    setUserHasUsedLab(true);
    updateBadges();
  } else {
    playSound('incorrect');
    if (fb) {
      fb.className = "mt-4 p-4 rounded-2xl bg-rose-100 border border-rose-300 text-rose-900 text-xs font-bold block animate-fadeIn";
      fb.textContent = "❌ No rima con la métrica tradicional. Prueba con otra opción.";
    }
  }
}

export function nextBomba() {
  playSound('tab_click');
  currentBombaIdx = (currentBombaIdx + 1) % bombasData.length;
  renderBomba();
}
