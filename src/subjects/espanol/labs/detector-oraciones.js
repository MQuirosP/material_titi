// =====================================================
// SÚPER LABORATORIO: EL DETECTIVE DE ORACIONES
// Analizador dinámico de intenciones del hablante y reto interactivo
// =====================================================

import { playSound, playTickWithThrottle } from '../../../shared/modules/audio.js';
import { setUserHasUsedLab } from '../../../shared/state/store.js';
import { updateBadges } from '../../../shared/modules/flashcards.js';
import { analyzeSentenceWithAI } from '../../../shared/services/gemini.js';

const sampleSentences = [
  {
    text: "¡Ojalá saquemos una nota excelente en el examen de español!",
    type: "Desiderativa",
    clue: "La palabra 'Ojalá' y el anhelo del hablante expresan un deseo ferviente.",
    icon: "🌟",
    color: "bg-amber-100 border-amber-300 text-amber-800",
    badge: "Deseo / Anhelo"
  },
  {
    text: "Tal vez visitemos el Parque Nacional Manuel Antonio el próximo mes.",
    type: "Dubitativa",
    clue: "La expresión 'Tal vez' indica incertidumbre y posibilidad, no un hecho seguro.",
    icon: "🤔",
    color: "bg-purple-100 border-purple-300 text-purple-800",
    badge: "Duda / Posibilidad"
  },
  {
    text: "¿Cuál es la capital de la provincia de Guanacaste?",
    type: "Interrogativa",
    clue: "Los signos de interrogación '¿ ?' y la fórmula de pregunta buscan obtener información.",
    icon: "❓",
    color: "bg-blue-100 border-blue-300 text-blue-800",
    badge: "Pregunta / Indagación"
  },
  {
    text: "¡Qué hermosa vista tiene el volcán Arenal al atardecer!",
    type: "Exclamativa",
    clue: "Los signos '¡ !' transmiten una emoción viva de asombro y admiración.",
    icon: "🎉",
    color: "bg-rose-100 border-rose-300 text-rose-800",
    badge: "Emoción / Asombro"
  },
  {
    text: "Por favor, abran el libro de lecturas en la página veinticuatro.",
    type: "Imperativa / Exhortativa",
    clue: "Expresa una instrucción, orden o ruego cordial para realizar una acción.",
    icon: "📢",
    color: "bg-emerald-100 border-emerald-300 text-emerald-800",
    badge: "Orden / Ruego"
  },
  {
    text: "La Escuela Riojalandia fue fundada para educar a la niñez costarricense.",
    type: "Enunciativa Afirmativa",
    clue: "Comunica un hecho real con certeza objetiva afirmándolo con claridad.",
    icon: "✅",
    color: "bg-teal-100 border-teal-300 text-teal-800",
    badge: "Afirmación de Hecho"
  },
  {
    text: "Nosotros nunca botamos basura en los ríos ni en los parques jamás.",
    type: "Enunciativa Negativa",
    clue: "Comunica un hecho real negándolo mediante adverbios como 'nunca' y 'jamás'.",
    icon: "🚫",
    color: "bg-slate-100 border-slate-300 text-slate-800",
    badge: "Negación de Hecho"
  }
];

let challengeIndex = 0;
let challengeScore = 0;
const challengeList = [
  {
    text: "Quizás llueva fuerte en la tarde.",
    correctType: "Dubitativa",
    options: ["Dubitativa", "Desiderativa", "Imperativa", "Enunciativa"],
    rationale: "'Quizás' expresa duda y posibilidad sobre el clima."
  },
  {
    text: "¡Guarden todos los útiles en la mochila de inmediato!",
    correctType: "Imperativa",
    options: ["Imperativa", "Exclamativa", "Dubitativa", "Interrogativa"],
    rationale: "Es un mandato directo y orden clara del emisor."
  },
  {
    text: "Espero que todos los estudiantes pasen de grado con honores.",
    correctType: "Desiderativa",
    options: ["Desiderativa", "Enunciativa", "Dubitativa", "Imperativa"],
    rationale: "'Espero que' manifiesta un anhelo y deseo sincero."
  },
  {
    text: "El café costarricense es reconocido mundialmente por su aroma.",
    correctType: "Enunciativa",
    options: ["Enunciativa", "Exclamativa", "Desiderativa", "Dubitativa"],
    rationale: "Informa un hecho real objetivo de forma afirmativa."
  },
  {
    text: "¿Quién descubrió el funcionamiento del sistema circulatorio?",
    correctType: "Interrogativa",
    options: ["Interrogativa", "Dubitativa", "Imperativa", "Exclamativa"],
    rationale: "Formula una pregunta directa para consultar un dato."
  }
];

let currentSampleIdx = 0;

export function initDetectorOraciones() {
  renderSampleCarousel();
  selectSampleSentence(0, false); // Seleccionar primero sin sonido intrusivo inicial
  renderChallenge();
}

export function renderSampleCarousel() {
  const container = document.getElementById('detector-samples-container');
  if (!container) return;

  const s = sampleSentences[currentSampleIdx];
  const total = sampleSentences.length;

  container.innerHTML = `
    <div class="bg-white rounded-3xl p-4 sm:p-5 border-2 border-amber-300 shadow-sm relative transition-all duration-300">
      <!-- Cabecera del Carrusel con badge e indicador de paso -->
      <div class="flex items-center justify-between gap-2 mb-3">
        <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${s.color} font-fun">
          <span>${s.icon}</span>
          <span>${s.badge}</span>
        </span>
        <span class="text-xs font-bold text-slate-600 font-fun bg-amber-100/60 border border-amber-200 px-2.5 py-1 rounded-full">
          Oración ${currentSampleIdx + 1} de ${total}
        </span>
      </div>

      <!-- Oración destacada del carrusel -->
      <div class="my-3 p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-center">
        <p class="text-base sm:text-lg font-bold text-slate-900 leading-snug font-fun">
          "${s.text}"
        </p>
      </div>

      <!-- Botón de Análisis Directo -->
      <div class="mb-4 text-center">
        <button onclick="window.selectSampleSentence(${currentSampleIdx})" class="w-full bg-amber-100 hover:bg-amber-200 active:scale-98 text-amber-950 font-bold py-2.5 px-3 rounded-2xl text-xs font-fun transition-all border border-amber-300 shadow-sm flex items-center justify-center gap-2 min-h-[44px]">
          <span>🔍 Ver Análisis de este Ejemplo</span>
        </button>
      </div>

      <!-- Controles del Carrusel (< Anterior / Siguiente > y Dots) -->
      <div class="flex items-center justify-between pt-3 border-t border-slate-100 gap-2">
        <button onclick="window.prevSampleSentence()" aria-label="Oración anterior" class="shrink-0 h-11 px-3 sm:px-4 rounded-2xl border border-amber-300 bg-amber-50 hover:bg-amber-100 active:scale-95 text-xs font-bold text-amber-950 transition-all font-fun flex items-center justify-center gap-1.5 shadow-sm min-w-[44px]">
          <span class="text-base font-bold">◀</span>
          <span class="hidden sm:inline">Anterior</span>
        </button>

        <!-- Indicadores Dots -->
        <div class="flex items-center justify-center gap-1.5 px-1 flex-1">
          ${sampleSentences.map((_, i) => `
            <button onclick="window.goToSampleSentence(${i})" aria-label="Ir a oración ${i+1}" class="h-2.5 rounded-full transition-all ${i === currentSampleIdx ? 'bg-amber-600 w-5' : 'bg-slate-200 hover:bg-amber-300 w-2'}"></button>
          `).join('')}
        </div>

        <button onclick="window.nextSampleSentence()" aria-label="Oración siguiente" class="shrink-0 h-11 px-3 sm:px-4 rounded-2xl border border-amber-300 bg-amber-50 hover:bg-amber-100 active:scale-95 text-xs font-bold text-amber-950 transition-all font-fun flex items-center justify-center gap-1.5 shadow-sm min-w-[44px]">
          <span class="hidden sm:inline">Siguiente</span>
          <span class="text-base font-bold">▶</span>
        </button>
      </div>
    </div>
  `;
}

export function nextSampleSentence() {
  playTickWithThrottle();
  currentSampleIdx = (currentSampleIdx + 1) % sampleSentences.length;
  renderSampleCarousel();
  selectSampleSentence(currentSampleIdx);
}

export function prevSampleSentence() {
  playTickWithThrottle();
  currentSampleIdx = (currentSampleIdx - 1 + sampleSentences.length) % sampleSentences.length;
  renderSampleCarousel();
  selectSampleSentence(currentSampleIdx);
}

export function goToSampleSentence(idx) {
  playTickWithThrottle();
  currentSampleIdx = idx;
  renderSampleCarousel();
  selectSampleSentence(currentSampleIdx);
}

export function selectSampleSentence(idx, withSound = true) {
  if (withSound) playTickWithThrottle();
  const s = sampleSentences[idx];
  if (!s) return;

  const resultBox = document.getElementById('detector-analysis-result');
  if (!resultBox) return;

  resultBox.innerHTML = `
    <div class="p-6 rounded-3xl border-2 border-amber-300 bg-amber-50/70 animate-fadeIn">
      <div class="flex items-center gap-3 mb-2">
        <span class="text-3xl">${s.icon}</span>
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-amber-700 font-fun">Resultado del Análisis Lingüístico</span>
          <h4 class="text-xl font-bold text-slate-900 font-fun">${s.type}</h4>
        </div>
      </div>
      <p class="text-base text-slate-700 font-medium italic mb-3 bg-white p-3 rounded-xl border border-amber-200">"${s.text}"</p>
      <div class="bg-white/90 p-4 rounded-2xl border border-amber-100">
        <p class="text-sm text-slate-600 leading-relaxed font-semibold">🔍 Pistas del Detective:</p>
        <p class="text-sm text-slate-700 mt-1">${s.clue}</p>
      </div>
    </div>
  `;

  // Marcar uso de laboratorio para medallas
  setUserHasUsedLab(true);
  updateBadges();
}

export async function analyzeCustomInput() {
  const input = document.getElementById('custom-sentence-input');
  if (!input || !input.value.trim()) return;

  const text = input.value.trim();
  playTickWithThrottle();

  const resultBox = document.getElementById('detector-analysis-result');
  if (resultBox) {
    resultBox.innerHTML = `
      <div class="p-6 rounded-3xl border-2 border-amber-300 bg-amber-50/70 animate-pulse text-center">
        <span class="text-3xl inline-block animate-bounce mb-2">✨</span>
        <p class="text-sm font-bold text-amber-900 font-fun">Consultando con la IA de Google Gemini...</p>
        <p class="text-xs text-slate-500 mt-1">Analizando la intención comunicativa de tu oración...</p>
      </div>
    `;
  }

  // 1. Intentar analizar con Gemini IA
  let aiResult = await analyzeSentenceWithAI(text);

  let type = aiResult?.tipo || "Enunciativa Afirmativa";
  let clue = aiResult?.explicacion || "Informa un hecho o idea como real y afirmativo.";
  let icon = aiResult?.icono || "✅";
  let praise = aiResult?.elogio || "¡Excelente redacción!";
  let isAI = !!aiResult;

  // 2. Si no hay IA o falló la conexión, usar el motor de patrones local
  if (!aiResult) {
    const lower = text.toLowerCase();
    if (text.includes("¿") || text.includes("?") || lower.startsWith("cómo") || lower.startsWith("cuándo") || lower.startsWith("por qué") || lower.startsWith("quién") || lower.startsWith("dónde")) {
      type = "Interrogativa";
      clue = "Presenta entonación o signos de interrogación formulando una consulta.";
      icon = "❓";
    } else if (text.includes("¡") || text.includes("!") || lower.startsWith("qué lindo") || lower.startsWith("qué bueno") || lower.startsWith("bravo")) {
      type = "Exclamativa";
      clue = "Presenta signos de exclamación y tono de asombro o emoción viva.";
      icon = "🎉";
    } else if (lower.includes("ojalá") || lower.includes("espero que") || lower.includes("deseo") || lower.includes("quiera dios")) {
      type = "Desiderativa";
      clue = "Expresa un anhelo o deseo del hablante mediante palabras como 'ojalá' o 'espero que'.";
      icon = "🌟";
    } else if (lower.includes("tal vez") || lower.includes("quizás") || lower.includes("quizá") || lower.includes("a lo mejor") || lower.includes("posiblemente") || lower.includes("acaso")) {
      type = "Dubitativa";
      clue = "Expresa duda o posibilidad mediante adverbios de incertidumbre.";
      icon = "🤔";
    } else if (lower.startsWith("haga") || lower.startsWith("haz") || lower.startsWith("vayan") || lower.startsWith("ve ") || lower.startsWith("guarden") || lower.startsWith("no corra") || lower.startsWith("silencio") || lower.includes("por favor,")) {
      type = "Imperativa / Exhortativa";
      clue = "Transmite una orden, ruego, instrucción o prohibición al receptor.";
      icon = "📢";
    } else if (lower.includes(" no ") || lower.startsWith("no ") || lower.includes("nunca") || lower.includes("jamás") || lower.includes("tampoco")) {
      type = "Enunciativa Negativa";
      clue = "Comunica un hecho negándolo mediante adverbios como 'no', 'nunca' o 'jamás'.";
      icon = "🚫";
    }
  }

  if (resultBox) {
    resultBox.innerHTML = `
      <div class="p-6 rounded-3xl border-2 border-amber-300 bg-amber-50/70 animate-fadeIn">
        <div class="flex items-center justify-between gap-3 mb-2">
          <div class="flex items-center gap-3">
            <span class="text-3xl">${icon}</span>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-amber-700 font-fun">Resultado de tu Oración</span>
              <h4 class="text-xl font-bold text-slate-900 font-fun">${type}</h4>
            </div>
          </div>
          <span class="text-[11px] font-bold px-3 py-1 rounded-full ${isAI ? 'bg-indigo-100 text-indigo-800 border border-indigo-200' : 'bg-amber-200 text-amber-900'} font-fun flex items-center gap-1">
            ${isAI ? '✨ IA Gemini' : '🔍 Analizador Local'}
          </span>
        </div>
        <p class="text-base text-slate-700 font-medium italic mb-3 bg-white p-3 rounded-xl border border-amber-200">"${text}"</p>
        <div class="bg-white/90 p-4 rounded-2xl border border-amber-100 space-y-2">
          <div>
            <p class="text-xs text-slate-500 uppercase font-bold tracking-wider font-fun">🔍 Explicación Pedagógica:</p>
            <p class="text-sm text-slate-700 font-medium mt-0.5">${clue}</p>
          </div>
          ${praise ? `
          <div class="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700 font-fun">
            <span>🌟</span>
            <span>${praise}</span>
          </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  playSound('tab_click');
  setUserHasUsedLab(true);
  updateBadges();
}

function renderChallenge() {
  const challengeBox = document.getElementById('detector-challenge-box');
  if (!challengeBox) return;

  if (challengeIndex >= challengeList.length) {
    challengeBox.innerHTML = `
      <div class="text-center py-6">
        <span class="text-5xl">🏆</span>
        <h4 class="text-2xl font-bold text-slate-900 mt-3 font-fun">¡Reto de Detective Completado!</h4>
        <p class="text-slate-600 mt-1">Puntuación: <strong class="text-amber-600 font-fun text-lg">${challengeScore} / ${challengeList.length} correctas</strong></p>
        <button onclick="window.resetChallengeDetector()" class="mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-2.5 rounded-2xl shadow transition-all font-fun text-sm">
          🔄 Volver a Jugar el Reto
        </button>
      </div>
    `;
    return;
  }

  const cur = challengeList[challengeIndex];
  challengeBox.innerHTML = `
    <div class="bg-white p-6 rounded-3xl border border-slate-200">
      <div class="flex justify-between items-center mb-3">
        <span class="text-xs font-bold bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-fun">Caso ${challengeIndex + 1} de ${challengeList.length}</span>
        <span class="text-xs font-semibold text-slate-500">Puntaje: ${challengeScore}</span>
      </div>
      <p class="text-lg font-bold text-slate-900 mb-4 bg-amber-50/50 p-4 rounded-2xl border border-amber-100 text-center font-fun">
        "${cur.text}"
      </p>
      <p class="text-xs font-bold uppercase text-slate-500 mb-2">Selecciona la actitud del emisor:</p>
      <div class="grid grid-cols-2 gap-2" id="challenge-options-grid">
        ${cur.options.map(opt => `
          <button onclick="window.answerChallengeDetector('${opt}')" class="p-3 bg-slate-50 hover:bg-amber-50 hover:border-amber-300 border border-slate-200 rounded-xl font-bold text-slate-800 text-sm transition-all font-fun">
            ${opt}
          </button>
        `).join('')}
      </div>
      <div id="challenge-feedback-slot" class="hidden mt-4 p-4 rounded-2xl text-sm font-semibold"></div>
    </div>
  `;
}

export function answerChallengeDetector(chosen) {
  const cur = challengeList[challengeIndex];
  const feedback = document.getElementById('challenge-feedback-slot');
  const buttons = document.querySelectorAll('#challenge-options-grid button');
  buttons.forEach(b => b.disabled = true);

  if (chosen === cur.correctType) {
    challengeScore++;
    playSound('correct');
    if (feedback) {
      feedback.className = "mt-4 p-4 rounded-2xl text-sm font-semibold bg-emerald-100 border border-emerald-300 text-emerald-900 block animate-fadeIn";
      feedback.innerHTML = `✅ <strong>¡Correcto!</strong> ${cur.rationale}`;
    }
  } else {
    playSound('incorrect');
    if (feedback) {
      feedback.className = "mt-4 p-4 rounded-2xl text-sm font-semibold bg-rose-100 border border-rose-300 text-rose-900 block animate-fadeIn";
      feedback.innerHTML = `❌ <strong>Incorrecto.</strong> La respuesta correcta es <em>${cur.correctType}</em>. ${cur.rationale}`;
    }
  }

  setTimeout(() => {
    challengeIndex++;
    renderChallenge();
  }, 2200);
}

export function resetChallengeDetector() {
  challengeIndex = 0;
  challengeScore = 0;
  playSound('tab_click');
  renderChallenge();
}
