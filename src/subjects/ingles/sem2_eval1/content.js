/**
 * Módulo de Contenido: Inglés · II Semestre 2026 · 1ª Evaluación
 * Unit 3: Connecting Electronically
 * Escuela Riojalandia (Secciones 5-1 y 5-2)
 */

export const inglesSem2Eval1Module = {
  id: 'ingles-sem2-eval1',
  subject: 'ingles',
  sem: '2',
  eval: '1',
  title: 'RíoInglés 5º',
  subtitle: 'Escuela Riojalandia · Unit 3: Connecting Electronically · II Semestre · Secciones 5-1 y 5-2',
  examDate: 'II Semestre 2026',
  teacher: '🇬🇧 Materia Especial: Inglés 5º Grado',
  semesterBadge: 'II Semestre 2026 · Unit 3',
  themeClass: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen text-slate-800 pb-12 transition-all duration-500',
  favicon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>',
  badgeFormulaTitle: 'Tech Master 5º (Usa los laboratorios de inglés)',
  badgeFormulaIcon: '💻',

  welcomeHTML: `
    <p class="text-slate-600 leading-relaxed text-lg mb-6">
      Welcome to your English study partner! Here you will practice vocabulary of electronic devices, price comparisons in the Tech Store, prefixes and suffixes, persuasive ads, and device care rules with native English pronunciation.
    </p>
    <div class="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 flex gap-4 items-start">
      <span class="text-2xl mt-1">💡</span>
      <div>
        <h4 class="font-bold text-indigo-900 font-fun">¿Cómo usar RíoInglés?</h4>
        <p class="text-sm text-indigo-800 leading-relaxed mt-1">
          Presiona el botón de altavoz 🔊 en cada tarjeta para escuchar la **pronunciación nativa en inglés**. Explora las 5 pestañas de teoría, practica en los 4 minijuegos interactivos de laboratorio y ponte a prueba en el examen.
        </p>
      </div>
    </div>
  `,

  temarioHTML: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="p-4 rounded-2xl bg-blue-50 border border-blue-100">
        <span class="text-xs font-bold text-blue-800 bg-blue-100 px-2.5 py-1 rounded-full uppercase font-fun">Tema 1</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base font-fun">💻 Electronic Devices & Uses</h4>
        <p class="text-xs text-slate-600 mt-1">Laptop, Alexa, Webcam, Smartphone, EarPods, Tablet, Digital Camera, There is/are and purpose (to send e-mails).</p>
      </div>
      <div class="p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
        <span class="text-xs font-bold text-indigo-800 bg-indigo-100 px-2.5 py-1 rounded-full uppercase font-fun">Tema 2</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base font-fun">🏷️ Tech Store & Comparisons</h4>
        <p class="text-xs text-slate-600 mt-1">How much is it?, numbers 20-1000, comparative adjectives (cheaper than / more expensive than).</p>
      </div>
      <div class="p-4 rounded-2xl bg-purple-50 border border-purple-100">
        <span class="text-xs font-bold text-purple-800 bg-purple-100 px-2.5 py-1 rounded-full uppercase font-fun">Tema 3</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base font-fun">🧩 Prefixes & Suffixes</h4>
        <p class="text-xs text-slate-600 mt-1">Prefixes (re-, un-, pre-, micro-) and Suffixes (-ful, -less, -ly, -able, -tion) attached to root words.</p>
      </div>
      <div class="p-4 rounded-2xl bg-sky-50 border border-sky-100">
        <span class="text-xs font-bold text-sky-800 bg-sky-100 px-2.5 py-1 rounded-full uppercase font-fun">Tema 4</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base font-fun">📢 Tech Advertisements</h4>
        <p class="text-xs text-slate-600 mt-1">Persuasive sentences (Buy it now!, Free delivery!) and tech adjectives (fast, cheap, modern, light).</p>
      </div>
      <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
        <span class="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full uppercase font-fun">Tema 5</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base font-fun">🛡️ Device Care & Sequence</h4>
        <p class="text-xs text-slate-600 mt-1">Good vs Bad use rules, imperatives (don't overcharge, use a case) and sequence connectors (First, Next, Then, Finally).</p>
      </div>
    </div>
  `,

  subtabsHTML: `
    <button onclick="switchLabSubTab('tech-store-challenge')" id="subtab-tech-store-challenge" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 bg-indigo-600 text-white shadow-sm font-fun">
      🛒 Tech Store Challenge
    </button>
    <button onclick="switchLabSubTab('word-builder')" id="subtab-word-builder" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 text-slate-600 hover:bg-slate-200 font-fun">
      🧩 Word Builder
    </button>
    <button onclick="switchLabSubTab('device-care')" id="subtab-device-care" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 text-slate-600 hover:bg-slate-200 font-fun">
      ⚡ Device Care & Sequence
    </button>
    <button onclick="switchLabSubTab('ad-creator')" id="subtab-ad-creator" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 text-slate-600 hover:bg-slate-200 font-fun">
      📢 Ad Creator & IA
    </button>
  `,

  defaultLabSubTab: 'tech-store-challenge'
};
