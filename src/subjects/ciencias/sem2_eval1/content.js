/**
 * Módulo de Contenido: Ciencias · Segundo Semestre 2026 · 1ª Evaluación
 * Maestra: Florisel Olmazo López (Secciones 5-1 y 5-2)
 */

export const cienciasSem2Eval1Module = {
  id: 'ciencias-sem2-eval1',
  subject: 'ciencias',
  sem: '2',
  eval: '1',
  title: 'RíoCiencias 5º',
  subtitle: 'Escuela Riojalandia · 1ª Evaluación de Ciencias · II Semestre · Secciones 5-1 y 5-2',
  examDate: 'Jueves 27 de Agosto, 2026',
  teacher: '👩‍🏫 Maestra: Florisel Olmazo López',
  semesterBadge: 'Segundo Semestre 2026 · 1ª Evaluación',
  themeClass: 'bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 min-h-screen text-slate-800 pb-12 transition-all duration-500',
  favicon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧪</text></svg>',
  badgeFormulaTitle: 'Médica Estrella (Usa los laboratorios de ciencias)',
  badgeFormulaIcon: '🧬',

  welcomeHTML: `
    <p class="text-slate-600 leading-relaxed text-lg mb-6">
      Bienvenida a tu compañero de estudio de ciencias del II Semestre. Aquí vas a repasar las cadenas alimenticias, la fotosíntesis (luminosa, oscura, oxigénica y anoxigénica), las relaciones ecológicas (intra e interespecíficas) y la conservación con las 5 R de manera interactiva.
    </p>
    <div class="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex gap-4 items-start">
      <span class="text-2xl mt-1">💡</span>
      <div>
        <h4 class="font-bold text-emerald-900">¿Cómo usar RíoCiencias?</h4>
        <p class="text-sm text-emerald-700 leading-relaxed mt-1">
          Explora las pestañas superiores. Revisa las tarjetas interactivas de teoría, experimenta con el simulador de cloroplastos/fotosíntesis, construye cadenas alimenticias y pon a prueba tus conocimientos en los exámenes.
        </p>
      </div>
    </div>
  `,

  temarioHTML: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
        <span class="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full uppercase font-fun">Módulo 1</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Cadenas Alimenticias y Seres Vivos</h4>
        <p class="text-xs text-slate-500 mt-1">Autótrofos (productores), heterótrofos (herbívoros, carnívoros, omnívoros, descomponedores) y eslabones tróficos del flujo de energía.</p>
      </div>
      <div class="p-4 rounded-2xl bg-amber-50 border border-amber-100">
        <span class="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full uppercase font-fun">Módulo 2</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Fotosíntesis y Célula Vegetal</h4>
        <p class="text-xs text-slate-500 mt-1">Fórmula química (luz, agua, CO₂), Fases Luminosa y Oscura, Fotosíntesis Oxigénica vs Anoxigénica y organelos (cloroplastos, vacuola, membrana).</p>
      </div>
      <div class="p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
        <span class="text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-full uppercase font-fun">Módulo 3</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Relaciones Ecológicas</h4>
        <p class="text-xs text-slate-500 mt-1">Relaciones intraespecíficas (competencia, gregarias, sociedades) e interespecíficas (mutualismo, comensalismo, parasitismo con Matapalo, depredación con Rana Roja).</p>
      </div>
      <div class="p-4 rounded-2xl bg-teal-50 border border-teal-100">
        <span class="text-xs font-bold text-teal-700 bg-teal-100 px-2.5 py-1 rounded-full uppercase font-fun">Módulo 4</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Conservación y Estrategia 5 R</h4>
        <p class="text-xs text-slate-500 mt-1">Importancia de la flora y fauna, viveros, reforestación, compostaje orgánico con broza de café y la regla ambiental de las 5 R.</p>
      </div>
    </div>
  `,

  subtabsHTML: `
    <button onclick="switchLabSubTab('fotosintesis')" id="subtab-fotosintesis" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 bg-emerald-600 text-white shadow-sm font-fun">
      ☀️ Fotosíntesis y Célula
    </button>
    <button onclick="switchLabSubTab('cadenas')" id="subtab-cadenas" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 text-slate-600 hover:bg-slate-200 font-fun">
      🔗 Cadenas Tróficas
    </button>
    <button onclick="switchLabSubTab('relaciones')" id="subtab-relaciones" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 text-slate-600 hover:bg-slate-200 font-fun">
      🐜 Detective Ecológico
    </button>
    <button onclick="switchLabSubTab('compost-5r')" id="subtab-compost-5r" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 text-slate-600 hover:bg-slate-200 font-fun">
      ♻️ Taller Abono y 5 R
    </button>
  `,

  defaultLabSubTab: 'fotosintesis'
};
