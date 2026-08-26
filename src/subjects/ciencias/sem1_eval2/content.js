/**
 * Módulo de Contenido: Ciencias · Primer Semestre 2026 · 2ª Evaluación
 * Maestra: Florisel Olmazo López (Secciones 5-1 y 5-2)
 */

export const cienciasSem1Eval2Module = {
  id: 'ciencias-sem1-eval2',
  subject: 'ciencias',
  sem: '1',
  eval: '2',
  title: 'RíoCiencias 5º',
  subtitle: 'Escuela Riojalandia · 2ª Evaluación de Ciencias · I Semestre · Secciones 5-1 y 5-2',
  examDate: 'Viernes 26 de Junio, 2026',
  teacher: '👩‍🏫 Maestra: Florisel Olmazo López',
  semesterBadge: 'Primer Semestre 2026 · 2ª Evaluación',
  themeClass: 'bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 min-h-screen text-slate-800 pb-12 transition-all duration-500',
  favicon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧪</text></svg>',
  badgeFormulaTitle: 'Médica Estrella (Usa los laboratorios de ciencias)',
  badgeFormulaIcon: '🧬',

  welcomeHTML: `
    <p class="text-slate-600 leading-relaxed text-lg mb-6">
      Bienvenida a tu compañero de estudio de ciencias del I Semestre. Aquí vas a repasar el funcionamiento del sistema urinario, la excreción celular en la piel y pulmones, los avances tecnológicos de la medicina (Rayos X, vacunas, trasplantes) y la biodiversidad de Costa Rica.
    </p>
    <div class="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex gap-4 items-start">
      <span class="text-2xl mt-1">💡</span>
      <div>
        <h4 class="font-bold text-emerald-900">¿Cómo usar RíoCiencias?</h4>
        <p class="text-sm text-emerald-700 leading-relaxed mt-1">
          Explora las pestañas superiores. Revisa las tarjetas interactivas del sistema urinario y avances médicos, experimenta con el simulador de filtrado renal y toma decisiones clínicas en el laboratorio hospitalario.
        </p>
      </div>
    </div>
  `,

  temarioHTML: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
        <span class="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full uppercase font-fun">Módulo 1</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Sistema Urinario y Excreción Celular</h4>
        <p class="text-xs text-slate-500 mt-1">Anatomía renal (nefronas, cálices, uréteres, vejiga, uretra) y eliminación de toxinas por piel y pulmones.</p>
      </div>
      <div class="p-4 rounded-2xl bg-teal-50 border border-teal-100">
        <span class="text-xs font-bold text-teal-700 bg-teal-100 px-2.5 py-1 rounded-full uppercase font-fun">Módulo 2</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Avances Médicos y Tecnológicos</h4>
        <p class="text-xs text-slate-500 mt-1">Descubrimientos históricos (Jenner, Salk, Clorito Picado), Rayos X, Ultrasonido, Láser, Trasplantes y Bioética.</p>
      </div>
      <div class="p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
        <span class="text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-full uppercase font-fun">Módulo 3</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Biodiversidad y Reinos</h4>
        <p class="text-xs text-slate-500 mt-1">Clasificación de seres vivos en reinos biológicos y medidas de preservación en Costa Rica.</p>
      </div>
    </div>
  `,

  subtabsHTML: `
    <button onclick="switchLabSubTab('filtro-renal')" id="subtab-filtro-renal" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 bg-emerald-600 text-white shadow-sm font-fun">
      🔬 Filtro Renal
    </button>
    <button onclick="switchLabSubTab('decisiones-medicas')" id="subtab-decisiones-medicas" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 text-slate-600 hover:bg-slate-200 font-fun">
      📋 Decisiones Médicas
    </button>
  `,

  defaultLabSubTab: 'filtro-renal'
};
