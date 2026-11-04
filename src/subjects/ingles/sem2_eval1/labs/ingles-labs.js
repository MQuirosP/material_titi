// ============================================================================
// RÍOINGLÉS — II SEMESTRE (1ª EVALUACIÓN)
// SÚPER LABORATORIOS INTERACTIVOS DE INGLÉS (Unit 3: Connecting Electronically)
// Escuela Riojalandia · 5º Grado
// ============================================================================

import { playSound, playTickWithThrottle, speakEnglishText } from '../../../../shared/modules/audio.js';
import { updateBadges } from '../../../../shared/modules/flashcards.js';
import { setUserHasUsedLab } from '../../../../shared/state/store.js';
import { analyzeSentenceWithAI } from '../../../../shared/services/gemini.js';

// ── 1. TECH STORE CHALLENGE ──────────────────────────────────────────────────
const TECH_PRODUCTS = [
  { id: 'laptop', name: 'Laptop', price: 1000, icon: '💻', desc: 'Powerful computer for work and homework.' },
  { id: 'smart-tv', name: 'Smart TV', price: 800, icon: '📺', desc: 'Large television to watch videos.' },
  { id: 'camera', name: 'Digital Camera', price: 500, icon: '📷', desc: 'Camera to take clear pictures.' },
  { id: 'phone', name: 'Smartphone', price: 300, icon: '📱', desc: 'Mobile phone for calls and messaging.' },
  { id: 'earpods', name: 'EarPods', price: 50, icon: '🎧', desc: 'Wireless earphones for music.' },
  { id: 'controller', name: 'Game Controller', price: 20, icon: '🎮', desc: 'Remote for PlayStation / Wii.' }
];

let storeState = {
  prod1Idx: 0,
  prod2Idx: 4,
  userChoice: null,
  feedback: null
};

export function initTechStoreLab() {
  const container = document.getElementById('lab-tech-store-challenge');
  if (!container) return;
  renderTechStoreUI(container);
}

function renderTechStoreUI(container) {
  const p1 = TECH_PRODUCTS[storeState.prod1Idx];
  const p2 = TECH_PRODUCTS[storeState.prod2Idx];
  const isP1Cheaper = p1.price < p2.price;

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 animate-fadeIn">
      <!-- Columna Izquierda: Comparador de Productos -->
      <div class="md:col-span-7 space-y-4">
        <div class="bg-white p-5 rounded-3xl border-2 border-indigo-200 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-bold px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full font-fun">
              🛒 Compare Products & Prices
            </span>
            <button onclick="window.speakEnglishText('At the tech store! How much is it?')" 
                    class="text-xs font-bold px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-900 rounded-xl flex items-center gap-1.5 transition-all">
              <span>🔊 Listen</span>
            </button>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <!-- Producto 1 -->
            <div class="p-4 rounded-2xl border-2 border-slate-200 bg-slate-50 text-center relative hover:border-indigo-300 transition-all">
              <span class="text-4xl block mb-1">${p1.icon}</span>
              <h4 class="font-bold text-slate-900 text-sm font-fun">${p1.name}</h4>
              <p class="text-lg font-bold text-emerald-600 font-fun mt-1">$${p1.price}</p>
              <button onclick="window.speakEnglishText('The ${p1.name} costs ${p1.price} dollars.')" 
                      class="mt-2 text-[11px] font-bold px-2.5 py-1 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-indigo-50 flex items-center justify-center gap-1 mx-auto">
                <span>🔊 $${p1.price}</span>
              </button>
            </div>

            <!-- Producto 2 -->
            <div class="p-4 rounded-2xl border-2 border-slate-200 bg-slate-50 text-center relative hover:border-indigo-300 transition-all">
              <span class="text-4xl block mb-1">${p2.icon}</span>
              <h4 class="font-bold text-slate-900 text-sm font-fun">${p2.name}</h4>
              <p class="text-lg font-bold text-emerald-600 font-fun mt-1">$${p2.price}</p>
              <button onclick="window.speakEnglishText('The ${p2.name} costs ${p2.price} dollars.')" 
                      class="mt-2 text-[11px] font-bold px-2.5 py-1 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-indigo-50 flex items-center justify-center gap-1 mx-auto">
                <span>🔊 $${p2.price}</span>
              </button>
            </div>
          </div>

          <!-- Selector de cambio de productos -->
          <div class="mt-4 flex justify-between gap-2">
            <button onclick="window.cycleTechProducts()" 
                    class="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2 px-3 rounded-xl text-xs font-fun transition-all border border-slate-300">
              🔄 Cambiar Productos
            </button>
          </div>
        </div>

        <!-- Diálogo del Vendedor -->
        <div class="bg-indigo-900 text-white p-4 sm:p-5 rounded-3xl shadow-sm border border-indigo-700">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-3xl">🧑‍💼</span>
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-300 font-fun">Tech Store Clerk</span>
              <h4 class="font-bold text-sm sm:text-base font-fun">"How can I help you?"</h4>
            </div>
            <button onclick="window.speakEnglishText('Hello! How can I help you today?')" 
                    class="ml-auto text-xs bg-indigo-800 hover:bg-indigo-700 text-indigo-200 px-3 py-1.5 rounded-xl border border-indigo-600 flex items-center gap-1">
              <span>🔊</span>
            </button>
          </div>
          <p class="text-xs text-indigo-200 italic mt-1">
            "I need a ${p1.name.toLowerCase()} because I use it to study."
          </p>
        </div>
      </div>

      <!-- Columna Derecha: Pregunta de Comparación -->
      <div class="md:col-span-5 space-y-4">
        <div class="bg-white p-5 rounded-3xl border-2 border-indigo-200 shadow-sm">
          <h4 class="font-bold text-slate-900 text-sm font-fun mb-3">
            ❓ Complete the comparative sentence:
          </h4>
          <p class="text-sm font-bold text-indigo-950 p-3 bg-indigo-50 rounded-2xl border border-indigo-100 mb-4 text-center font-fun">
            "The ${p1.name} is ________ the ${p2.name}."
          </p>

          <div class="space-y-2.5">
            <button onclick="window.checkStoreComparison('cheaper')" 
                    class="w-full p-3.5 rounded-2xl border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/50 active:scale-98 transition-all font-fun text-xs sm:text-sm font-bold text-slate-800 flex justify-between items-center bg-white shadow-sm">
              <span>cheaper than ($${p1.price} vs $${p2.price})</span>
              <span class="text-base">🏷️</span>
            </button>

            <button onclick="window.checkStoreComparison('expensive')" 
                    class="w-full p-3.5 rounded-2xl border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/50 active:scale-98 transition-all font-fun text-xs sm:text-sm font-bold text-slate-800 flex justify-between items-center bg-white shadow-sm">
              <span>more expensive than ($${p1.price} vs $${p2.price})</span>
              <span class="text-base">💎</span>
            </button>
          </div>

          <!-- Card de resultado -->
          <div id="store-feedback-card" class="mt-4 hidden"></div>
        </div>
      </div>
    </div>
  `;
}

window.cycleTechProducts = function() {
  playTickWithThrottle();
  storeState.prod1Idx = (storeState.prod1Idx + 1) % TECH_PRODUCTS.length;
  storeState.prod2Idx = (storeState.prod1Idx + 3) % TECH_PRODUCTS.length;
  if (storeState.prod1Idx === storeState.prod2Idx) {
    storeState.prod2Idx = (storeState.prod2Idx + 1) % TECH_PRODUCTS.length;
  }
  const container = document.getElementById('lab-tech-store-challenge');
  if (container) renderTechStoreUI(container);
};

window.checkStoreComparison = function(choice) {
  const p1 = TECH_PRODUCTS[storeState.prod1Idx];
  const p2 = TECH_PRODUCTS[storeState.prod2Idx];
  const isCorrect = (choice === 'cheaper' && p1.price < p2.price) || (choice === 'expensive' && p1.price > p2.price);
  
  playSound(isCorrect ? 'correct' : 'incorrect');
  setUserHasUsedLab(true);
  updateBadges();

  const correctTerm = p1.price < p2.price ? 'cheaper than' : 'more expensive than';
  const sentence = `The ${p1.name} is ${correctTerm} the ${p2.name}.`;

  const fbCard = document.getElementById('store-feedback-card');
  if (fbCard) {
    fbCard.className = `mt-4 p-4 rounded-2xl border-2 ${isCorrect ? 'border-emerald-300 bg-emerald-50 text-emerald-950' : 'border-rose-300 bg-rose-50 text-rose-950'} animate-fadeIn`;
    fbCard.innerHTML = `
      <div class="flex items-center justify-between gap-2 mb-2">
        <h5 class="font-bold text-xs sm:text-sm font-fun flex items-center gap-2">
          <span>${isCorrect ? '🎉 ¡Correcto!' : '💡 Inténtalo de nuevo'}</span>
        </h5>
        <button onclick="window.speakEnglishText('${sentence.replace(/'/g, "\\'")}')" 
                class="text-xs font-bold px-2.5 py-1 bg-white rounded-lg border border-black/10 text-slate-800 flex items-center gap-1 shadow-sm">
          <span>🔊 Pronunciar</span>
        </button>
      </div>
      <p class="text-xs leading-relaxed font-medium">
        "${sentence}" ($${p1.price} ${p1.price < p2.price ? '<' : '>'} $${p2.price}).
      </p>
    `;
  }
};


// ── 2. WORD BUILDER (PREFIXES & SUFFIXES) ────────────────────────────────────
const WORD_BUILDER_DATA = [
  { prefix: 'un-', root: 'plug', suffix: '', full: 'unplug', def: 'Desconectar un cable de la electricidad.', ex: 'I unplug my tablet when it is charged.' },
  { prefix: 're-', root: 'use', suffix: '', full: 'reuse', def: 'Usar algo de nuevo (again).', ex: 'We reuse old devices carefully.' },
  { prefix: 'pre-', root: 'paid', suffix: '', full: 'prepaid', def: 'Pagado por adelantado (before).', ex: 'My mom bought a prepaid SIM card.' },
  { prefix: 'micro-', root: 'scope', suffix: '', full: 'microscope', def: 'Instrumento para ver cosas diminutas.', ex: 'We see small things with a microscope.' },
  { prefix: '', root: 'help', suffix: '-ful', full: 'helpful', def: 'Lleno de ayuda (full of help).', ex: 'The tech clerk is very helpful.' },
  { prefix: '', root: 'use', suffix: '-less', full: 'useless', def: 'Sin utilidad (without use).', ex: 'A broken screen is useless.' },
  { prefix: '', root: 'quiet', suffix: '-ly', full: 'quietly', def: 'De manera silenciosa (how it happens).', ex: 'Please listen to music quietly.' },
  { prefix: '', root: 'wash', suffix: '-able', full: 'washable', def: 'Capaz de lavarse (capable of).', ex: 'This phone cover is washable.' }
];

let wbIndex = 0;

export function initWordBuilderLab() {
  const container = document.getElementById('lab-word-builder');
  if (!container) return;
  renderWordBuilderUI(container);
}

function renderWordBuilderUI(container) {
  const item = WORD_BUILDER_DATA[wbIndex];
  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 animate-fadeIn">
      <!-- Columna Izquierda: Bloques de construcción -->
      <div class="md:col-span-7 bg-white p-5 rounded-3xl border-2 border-purple-200 shadow-sm space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold px-3 py-1 bg-purple-100 text-purple-900 rounded-full font-fun">
            🧩 Prefixes & Suffixes Builder (${wbIndex + 1}/${WORD_BUILDER_DATA.length})
          </span>
          <button onclick="window.speakEnglishText('${item.full}')" 
                  class="text-xs font-bold px-3 py-1.5 bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-900 rounded-xl flex items-center gap-1">
            <span>🔊 Listen</span>
          </button>
        </div>

        <div class="p-6 rounded-2xl bg-purple-50/70 border border-purple-200 text-center space-y-3">
          <span class="text-xs font-bold text-purple-800 uppercase tracking-wider block font-fun">Word Combination:</span>
          
          <div class="flex items-center justify-center gap-2 flex-wrap text-lg sm:text-xl font-bold font-fun">
            ${item.prefix ? `<span class="px-3 py-1.5 bg-purple-600 text-white rounded-xl shadow-sm">${item.prefix}</span>` : ''}
            <span class="px-4 py-1.5 bg-white border-2 border-purple-300 text-purple-950 rounded-xl shadow-inner">${item.root}</span>
            ${item.suffix ? `<span class="px-3 py-1.5 bg-indigo-600 text-white rounded-xl shadow-sm">${item.suffix}</span>` : ''}
            <span class="text-slate-400">=</span>
            <span class="px-4 py-1.5 bg-emerald-500 text-white rounded-xl shadow-md">${item.full}</span>
          </div>
        </div>

        <!-- Controles de navegación -->
        <div class="flex items-center justify-between pt-2">
          <button onclick="window.prevWordBuilder()" 
                  class="px-4 py-2 rounded-xl border border-purple-200 bg-purple-50 hover:bg-purple-100 text-xs font-bold font-fun text-purple-900">
            ◀ Anterior
          </button>
          <span class="text-xs font-bold text-slate-500 font-fun">Palabra ${wbIndex + 1} de ${WORD_BUILDER_DATA.length}</span>
          <button onclick="window.nextWordBuilder()" 
                  class="px-4 py-2 rounded-xl border border-purple-200 bg-purple-50 hover:bg-purple-100 text-xs font-bold font-fun text-purple-900">
            Siguiente ▶
          </button>
        </div>
      </div>

      <!-- Columna Derecha: Significado & Ejemplo -->
      <div class="md:col-span-5 bg-white p-5 rounded-3xl border-2 border-purple-200 shadow-sm space-y-4">
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <h4 class="font-bold text-slate-900 text-sm font-fun flex items-center gap-2">
            <span>🔍 Linguistic Analysis:</span>
          </h4>
          <span class="text-xs font-bold px-2.5 py-0.5 rounded-full ${item.prefix ? 'bg-purple-100 text-purple-800' : 'bg-indigo-100 text-indigo-800'} font-fun">
            ${item.prefix ? 'Prefix ' + item.prefix : 'Suffix ' + item.suffix}
          </span>
        </div>

        <div class="space-y-3">
          <div>
            <span class="text-xs font-bold text-slate-400 font-fun block">DEFINITION / SIGNIFICADO:</span>
            <p class="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">${item.def}</p>
          </div>

          <div class="p-3.5 rounded-2xl bg-purple-50 border border-purple-100">
            <span class="text-xs font-bold text-purple-900 font-fun block mb-1">EXAMPLE IN A SENTENCE:</span>
            <p class="text-xs sm:text-sm text-slate-800 italic font-fun">"${item.ex}"</p>
            <button onclick="window.speakEnglishText('${item.ex.replace(/'/g, "\\'")}')" 
                    class="mt-2 text-[11px] font-bold px-2.5 py-1 bg-white border border-purple-200 rounded-lg text-purple-900 hover:bg-purple-100 flex items-center gap-1">
              <span>🔊 Listen Sentence</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

window.nextWordBuilder = function() {
  playTickWithThrottle();
  wbIndex = (wbIndex + 1) % WORD_BUILDER_DATA.length;
  setUserHasUsedLab(true);
  updateBadges();
  const container = document.getElementById('lab-word-builder');
  if (container) renderWordBuilderUI(container);
};

window.prevWordBuilder = function() {
  playTickWithThrottle();
  wbIndex = (wbIndex - 1 + WORD_BUILDER_DATA.length) % WORD_BUILDER_DATA.length;
  const container = document.getElementById('lab-word-builder');
  if (container) renderWordBuilderUI(container);
};


// ── 3. DEVICE CARE & SEQUENCE RULES ──────────────────────────────────────────
const CARE_CARDS = [
  { id: 1, text: "I clean my device with a soft cloth.", isGood: true, reason: "¡Correcto! Limpiar con un paño suave cuida la pantalla (Good use)." },
  { id: 2, text: "I watch videos on my phone all night.", isGood: false, reason: "¡Correcto! Trasnochar viendo videos daña tus ojos y salud (Bad use)." },
  { id: 3, text: "I use a case to protect my tablet.", isGood: true, reason: "¡Excelente! Una funda protectora evita roturas por caídas (Good use)." },
  { id: 4, text: "She uses the speaker very loudly at school.", isGood: false, reason: "¡Muy bien! Usar parlantes con volumen alto molesta a otros (Bad use)." }
];

let careIndex = 0;

export function initDeviceCareLab() {
  const container = document.getElementById('lab-device-care');
  if (!container) return;
  renderDeviceCareUI(container);
}

function renderDeviceCareUI(container) {
  const card = CARE_CARDS[careIndex];

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 animate-fadeIn">
      <!-- Columna Izquierda: Clasificador Good vs Bad Use -->
      <div class="md:col-span-6 bg-white p-5 rounded-3xl border-2 border-emerald-200 shadow-sm space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full font-fun">
            ⚡ Good Use vs Bad Use (${careIndex + 1}/${CARE_CARDS.length})
          </span>
          <button onclick="window.speakEnglishText('${card.text.replace(/'/g, "\\'")}')" 
                  class="text-xs font-bold px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 rounded-xl flex items-center gap-1">
            <span>🔊 Pronounce</span>
          </button>
        </div>

        <div class="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-center">
          <p class="text-base sm:text-lg font-bold text-slate-900 leading-snug font-fun">
            "${card.text}"
          </p>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <button onclick="window.checkCareChoice(true)" 
                  class="p-3.5 rounded-2xl border-2 border-emerald-300 bg-emerald-50 hover:bg-emerald-100 active:scale-98 transition-all font-fun text-xs sm:text-sm font-bold text-emerald-900 flex items-center justify-center gap-2">
            <span>👍 Good Use</span>
          </button>
          <button onclick="window.checkCareChoice(false)" 
                  class="p-3.5 rounded-2xl border-2 border-rose-300 bg-rose-50 hover:bg-rose-100 active:scale-98 transition-all font-fun text-xs sm:text-sm font-bold text-rose-900 flex items-center justify-center gap-2">
            <span>👎 Bad Use</span>
          </button>
        </div>

        <div id="care-feedback" class="hidden"></div>
      </div>

      <!-- Columna Derecha: Conectores de Secuencia -->
      <div class="md:col-span-6 bg-white p-5 rounded-3xl border-2 border-emerald-200 shadow-sm space-y-4">
        <h4 class="font-bold text-slate-900 text-sm font-fun flex items-center gap-2">
          <span>🔄 Sequence Connectors Routine:</span>
        </h4>
        
        <div class="space-y-2 text-xs sm:text-sm font-fun">
          <div class="p-3 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-2">
            <span class="font-bold px-2 py-0.5 bg-amber-500 text-white rounded-lg text-xs">First</span>
            <span class="text-slate-800">I turn off my smartphone.</span>
          </div>
          <div class="p-3 rounded-2xl bg-blue-50 border border-blue-200 flex items-center gap-2">
            <span class="font-bold px-2 py-0.5 bg-blue-500 text-white rounded-lg text-xs">Next</span>
            <span class="text-slate-800">I clean the screen with a dry cloth.</span>
          </div>
          <div class="p-3 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center gap-2">
            <span class="font-bold px-2 py-0.5 bg-indigo-500 text-white rounded-lg text-xs">Then</span>
            <span class="text-slate-800">I put it inside a protective case.</span>
          </div>
          <div class="p-3 rounded-2xl bg-purple-50 border border-purple-200 flex items-center gap-2">
            <span class="font-bold px-2 py-0.5 bg-purple-500 text-white rounded-lg text-xs">Finally</span>
            <span class="text-slate-800">I charge it safely on the desk.</span>
          </div>
        </div>

        <button onclick="window.speakEnglishText('First, I turn off my smartphone. Next, I clean the screen. Then, I put it inside a protective case. Finally, I charge it safely.')" 
                class="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl font-fun transition-all shadow-sm flex items-center justify-center gap-2">
          <span>🔊 Escuchar Rutina Completa</span>
        </button>
      </div>
    </div>
  `;
}

window.checkCareChoice = function(userAns) {
  const card = CARE_CARDS[careIndex];
  const isCorrect = userAns === card.isGood;
  playSound(isCorrect ? 'correct' : 'incorrect');
  setUserHasUsedLab(true);
  updateBadges();

  const fb = document.getElementById('care-feedback');
  if (fb) {
    fb.className = `p-4 rounded-2xl border-2 ${isCorrect ? 'border-emerald-300 bg-emerald-50 text-emerald-950' : 'border-rose-300 bg-rose-50 text-rose-950'} animate-fadeIn`;
    fb.innerHTML = `
      <p class="text-xs font-bold font-fun">${isCorrect ? '🎉 ' + card.reason : '💡 Respuesta incorrecta. Revisa el tipo de uso.'}</p>
      <button onclick="window.nextCareCard()" class="mt-2 text-xs font-bold px-3 py-1 bg-white border border-slate-300 rounded-lg font-fun text-slate-800">
        Siguiente Frase ➡️
      </button>
    `;
    fb.classList.remove('hidden');
  }
};

window.nextCareCard = function() {
  playTickWithThrottle();
  careIndex = (careIndex + 1) % CARE_CARDS.length;
  const container = document.getElementById('lab-device-care');
  if (container) renderDeviceCareUI(container);
};


// ── 4. AD CREATOR & IA ASSISTANT ─────────────────────────────────────────────
let adState = {
  device: 'Smartphone',
  adj: 'modern',
  slogan: 'Buy it now!',
  discount: 'Free delivery!'
};

export function initAdCreatorLab() {
  const container = document.getElementById('lab-ad-creator');
  if (!container) return;
  renderAdCreatorUI(container);
}

function renderAdCreatorUI(container) {
  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 animate-fadeIn">
      <!-- Columna Izquierda: Controles del Anuncio -->
      <div class="md:col-span-6 bg-white p-5 rounded-3xl border-2 border-sky-200 shadow-sm space-y-4">
        <span class="text-xs font-bold px-3 py-1 bg-sky-100 text-sky-900 rounded-full font-fun">
          📢 Build your Tech Advertisement
        </span>

        <div class="space-y-3 text-xs sm:text-sm font-fun">
          <!-- Dispositivo -->
          <div>
            <label class="block font-bold text-slate-700 mb-1">Select Device:</label>
            <select id="ad-device" onchange="window.updateAdState()" 
                    class="w-full p-2.5 rounded-xl border border-sky-300 bg-sky-50 text-slate-800 font-semibold focus:outline-none">
              <option value="Smartphone">Smartphone 📱</option>
              <option value="Laptop">Laptop 💻</option>
              <option value="EarPods">EarPods 🎧</option>
              <option value="Digital Camera">Digital Camera 📷</option>
              <option value="Smart TV">Smart TV 📺</option>
            </select>
          </div>

          <!-- Adjetivo -->
          <div>
            <label class="block font-bold text-slate-700 mb-1">Select Adjective:</label>
            <select id="ad-adj" onchange="window.updateAdState()" 
                    class="w-full p-2.5 rounded-xl border border-sky-300 bg-sky-50 text-slate-800 font-semibold focus:outline-none">
              <option value="modern and fast">modern and fast 🚀</option>
              <option value="light and cheap">light and cheap 💡</option>
              <option value="great and original">great and original 🌟</option>
            </select>
          </div>

          <!-- Frase Persuasiva -->
          <div>
            <label class="block font-bold text-slate-700 mb-1">Persuasive Slogan:</label>
            <select id="ad-slogan" onchange="window.updateAdState()" 
                    class="w-full p-2.5 rounded-xl border border-sky-300 bg-sky-50 text-slate-800 font-semibold focus:outline-none">
              <option value="Buy it now!">Buy it now! 🛍️</option>
              <option value="Check it out at the store!">Check it out at the store! 🔍</option>
              <option value="It is a great choice!">It is a great choice! 👍</option>
            </select>
          </div>

          <!-- Promoción -->
          <div>
            <label class="block font-bold text-slate-700 mb-1">Special Offer:</label>
            <select id="ad-offer" onchange="window.updateAdState()" 
                    class="w-full p-2.5 rounded-xl border border-sky-300 bg-sky-50 text-slate-800 font-semibold focus:outline-none">
              <option value="Free delivery!">Free delivery! 📦</option>
              <option value="Contact us to get a discount!">Contact us to get a discount! 🏷️</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Columna Derecha: Poster Resultante & IA Gemini -->
      <div class="md:col-span-6 space-y-4">
        <!-- Poster Publicitario Visual -->
        <div class="p-6 rounded-3xl bg-gradient-to-br from-indigo-900 via-sky-900 to-purple-900 text-white shadow-lg border-2 border-sky-400 text-center space-y-3 relative overflow-hidden">
          <span class="text-xs font-bold tracking-widest text-sky-300 uppercase font-fun block">TECH ADVERTISEMENT</span>
          
          <h3 class="text-2xl font-bold font-fun text-yellow-300 tracking-wide" id="ad-poster-title">
            New ${adState.device}!
          </h3>

          <p class="text-sm font-medium text-sky-100 italic" id="ad-poster-desc">
            "Get this ${adState.adj} ${adState.device}. ${adState.slogan} ${adState.discount}"
          </p>

          <div class="pt-2 flex items-center justify-center gap-2">
            <button onclick="window.speakAdText()" 
                    class="px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-indigo-950 font-bold text-xs font-fun transition-all shadow-md flex items-center gap-1.5">
              <span>🔊 Listen Ad Pronunciation</span>
            </button>
            <button onclick="window.analyzeAdWithAI()" 
                    class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs font-fun transition-all shadow-md flex items-center gap-1.5">
              <span>✨ Analizar con IA</span>
            </button>
          </div>
        </div>

        <!-- Resultado de Análisis IA -->
        <div id="ad-ai-feedback" class="hidden"></div>
      </div>
    </div>
  `;
}

window.updateAdState = function() {
  playTickWithThrottle();
  adState.device = document.getElementById('ad-device').value;
  adState.adj = document.getElementById('ad-adj').value;
  adState.slogan = document.getElementById('ad-slogan').value;
  adState.discount = document.getElementById('ad-offer').value;

  const titleEl = document.getElementById('ad-poster-title');
  const descEl = document.getElementById('ad-poster-desc');
  if (titleEl) titleEl.innerText = `New ${adState.device}!`;
  if (descEl) descEl.innerText = `"Get this ${adState.adj} ${adState.device}. ${adState.slogan} ${adState.discount}"`;
};

window.speakAdText = function() {
  const fullAd = `New ${adState.device}! Get this ${adState.adj} ${adState.device}. ${adState.slogan} ${adState.discount}`;
  speakEnglishText(fullAd);
};

window.analyzeAdWithAI = async function() {
  playSound('tab_click');
  setUserHasUsedLab(true);
  updateBadges();

  const fullAd = `Get this ${adState.adj} ${adState.device}. ${adState.slogan} ${adState.discount}`;
  const fbDiv = document.getElementById('ad-ai-feedback');
  if (!fbDiv) return;

  fbDiv.className = 'p-4 rounded-2xl border-2 border-indigo-300 bg-indigo-50/90 text-indigo-950 animate-fadeIn';
  fbDiv.innerHTML = `
    <div class="flex items-center gap-2 font-fun text-xs font-bold text-indigo-900 mb-2">
      <span class="animate-spin">✨</span>
      <span>Analizando anuncio publicitario...</span>
    </div>
  `;
  fbDiv.classList.remove('hidden');

  try {
    const res = await analyzeSentenceWithAI(fullAd);
    if (res) {
      fbDiv.innerHTML = `
        <div class="flex items-start justify-between gap-2 mb-2">
          <div class="flex items-center gap-2">
            <span class="text-2xl">${res.icono || '📢'}</span>
            <div>
              <span class="text-[10px] font-bold text-indigo-800 uppercase tracking-wider font-fun block">Evaluación de Anuncio</span>
              <h5 class="font-bold text-sm text-slate-900 font-fun">${res.tipo || 'Tech Advertisement'}</h5>
            </div>
          </div>
          <span class="text-[10px] font-bold px-2 py-0.5 bg-indigo-200 text-indigo-900 rounded-full font-fun">✨ IA Gemini</span>
        </div>
        <p class="text-xs text-slate-800 font-medium leading-relaxed mt-1">${res.explicacion}</p>
        ${res.elogio ? `<p class="text-xs font-bold text-emerald-700 mt-2 flex items-center gap-1 font-fun">🌟 ${res.elogio}</p>` : ''}
      `;
    } else {
      throw new Error("Fallback local");
    }
  } catch (e) {
    fbDiv.innerHTML = `
      <div class="flex items-center gap-2 font-fun text-xs font-bold text-slate-900 mb-1">
        <span>📢 Excelente Anuncio Publicitario</span>
        <span class="text-[10px] font-bold px-2 py-0.5 bg-slate-200 text-slate-700 rounded-full font-fun">🔍 Modo Local</span>
      </div>
      <p class="text-xs text-slate-700 leading-relaxed font-medium">
        Tu anuncio combina de forma efectiva un adjetivo descriptivo ('${adState.adj}'), un dispositivo tecnológico ('${adState.device}') y frases persuasivas de alta frecuencia ('${adState.slogan}'). ¡Está listo para publicarse!
      </p>
    `;
  }
};
