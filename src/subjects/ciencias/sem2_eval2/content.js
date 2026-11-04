/**
 * Módulo de Contenido: Ciencias · Segundo Semestre 2026 · 2ª Evaluación
 * Maestra: Florisel Olmazo López (Secciones 5-1 y 5-2)
 * Escuela Riojalandia
 */

export const cienciasSem2Eval2Module = {
  id: 'ciencias-sem2-eval2',
  subject: 'ciencias',
  sem: '2',
  eval: '2',
  title: 'RíoCiencias 5º',
  subtitle: 'Escuela Riojalandia · 2ª Evaluación de Ciencias · II Semestre · Secciones 5-1 y 5-2',
  examDate: 'Jueves 05 de Noviembre, 2026',
  teacher: '👩‍🏫 Maestra: Florisel Olmazo López',
  semesterBadge: 'Segundo Semestre 2026 · 2ª Evaluación',
  themeClass: 'bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 min-h-screen text-slate-800 pb-12 transition-all duration-500',
  favicon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>',
  badgeFormulaTitle: 'Científica Energética (Usa los laboratorios de energía y magnetismo)',
  badgeFormulaIcon: '🧲',

  welcomeHTML: `
    <p class="text-slate-600 leading-relaxed text-base sm:text-lg mb-6">
      ¡Bienvenida a tu entorno oficial de estudio para la <strong>2.ª Evaluación de Ciencias</strong> con la Niña Florisel Olmazo! Aquí vas a dominar las fuentes de energía (renovables y no renovables), la ley de conservación, las transformaciones energéticas en la vida diaria, el magnetismo, los polos, el campo magnético terrestre y la relación entre electricidad y electroimanes.
    </p>
    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex gap-4 items-start shadow-sm">
      <span class="text-2xl mt-1 shrink-0">💡</span>
      <div>
        <h4 class="font-bold text-emerald-950 text-sm sm:text-base font-fun">¿Cómo triunfar en tu examen de mañana?</h4>
        <p class="text-xs sm:text-sm text-emerald-800 leading-relaxed mt-1">
          Gira las tarjetas de <strong>Teoría</strong> para fijar los conceptos del cuaderno, experimenta con los 3 simuladores en <strong>Laboratorios</strong> (Transformaciones, Magnetismo y Electroimán), y practica los <strong>Exámenes Teórico y Práctico</strong> que incluyen las 10 preguntas clave de repaso dictadas por la maestra.
        </p>
      </div>
    </div>
  `,

  temarioHTML: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm">
        <span class="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full uppercase font-fun">Módulo 1</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base font-fun">Fuentes y Clases de Energía</h4>
        <p class="text-xs text-slate-600 mt-1 leading-relaxed">Concepto de energía (trabajo, movimiento, cambio). Formas de energía. Renovables vs. No Renovables. Contexto de Costa Rica y Parque Solar Coopelesca en San Carlos.</p>
      </div>
      <div class="p-4 rounded-2xl bg-amber-50 border border-amber-100 shadow-sm">
        <span class="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full uppercase font-fun">Módulo 2</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base font-fun">Transformaciones y Conservación</h4>
        <p class="text-xs text-slate-600 mt-1 leading-relaxed">Ley de conservación: "no se crea ni se destruye, solo se transforma". Cadenas de transformación cotidianas y beneficios humanos (tiempo, maquinaria pesada y medicina).</p>
      </div>
      <div class="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 shadow-sm">
        <span class="text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-full uppercase font-fun">Módulo 3</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base font-fun">Magnetismo y Campo Magnético</h4>
        <p class="text-xs text-slate-600 mt-1 leading-relaxed">Metales atraídos (hierro, níquel, cobalto). Imanes naturales (magnetita) y artificiales. Ley de polos (opuestos se atraen, iguales se repelen). Campo magnético, Tierra como imán y brújula.</p>
      </div>
      <div class="p-4 rounded-2xl bg-teal-50 border border-teal-100 shadow-sm">
        <span class="text-xs font-bold text-teal-700 bg-teal-100 px-2.5 py-1 rounded-full uppercase font-fun">Módulo 4</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base font-fun">Electricidad y Electroimán</h4>
        <p class="text-xs text-slate-600 mt-1 leading-relaxed">Estructura del átomo: protones (+), electrones (-), neutrones. Electricidad estática vs dinámica. Pregunta estrella: batería desconectada. Electroimán y usos cotidianos.</p>
      </div>
    </div>
  `,

  subtabsHTML: `
    <button onclick="switchLabSubTab('transformador')" id="subtab-transformador" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 bg-emerald-600 text-white shadow-sm font-fun">
      ⚡ Transformador de Energía
    </button>
    <button onclick="switchLabSubTab('magnetismo')" id="subtab-magnetismo" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 text-slate-600 hover:bg-slate-200 font-fun">
      🧲 Laboratorio Magnético y Brújula
    </button>
    <button onclick="switchLabSubTab('electroiman')" id="subtab-electroiman" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 text-slate-600 hover:bg-slate-200 font-fun">
      🔋 Circuito y Electroimán
    </button>
  `,

  defaultLabSubTab: 'transformador'
};
