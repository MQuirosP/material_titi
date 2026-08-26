/**
 * Módulo de Contenido: Matemáticas · Primer Semestre 2026 · 2ª Evaluación
 * Maestra: Florisel Olmazo López (Secciones 5-1 y 5-2)
 */

export const matematicasSem1Eval2Module = {
  id: 'matematicas-sem1-eval2',
  subject: 'matematicas',
  sem: '1',
  eval: '2',
  title: 'RíoMate 5º',
  subtitle: 'Escuela Riojalandia · 2ª Evaluación de Matemáticas · I Semestre · Secciones 5-1 y 5-2',
  examDate: 'Miércoles 24 de Junio, 2026',
  teacher: '👩‍🏫 Maestra: Florisel Olmazo López',
  semesterBadge: 'Primer Semestre 2026 · 2ª Evaluación',
  themeClass: 'bg-gradient-to-br from-indigo-50 via-teal-50 to-amber-50 min-h-screen text-slate-800 pb-12 transition-all duration-500',
  favicon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧮</text></svg>',
  badgeFormulaTitle: 'Maestra Geómetra (Usa el laboratorio de fórmulas)',
  badgeFormulaIcon: '📐',

  welcomeHTML: `
    <p class="text-slate-600 leading-relaxed text-lg mb-6">
      Bienvenida a tu compañero de estudio de matemáticas. Aquí vas a repasar toda la teoría del examen de forma divertida, visual e interactiva. No te limites a memorizar las respuestas: comprende los conceptos y practica con los números para ganarte esa nota máxima el miércoles.
    </p>
    <div class="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 flex gap-4 items-start">
      <span class="text-2xl mt-1">💡</span>
      <div>
        <h4 class="font-bold text-indigo-900">¿Cómo usar RíoMate?</h4>
        <p class="text-sm text-indigo-700 leading-relaxed mt-1">
          Explora las pestañas superiores. Lee las tarjetas interactivas de teoría, juega con las figuras geométricas en el laboratorio de fórmulas para ver cómo cambian sus áreas, y luego ponte a prueba en los exámenes de teoría y práctica.
        </p>
      </div>
    </div>
  `,

  temarioHTML: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
        <span class="text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-full uppercase font-fun">Tema 1</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Múltiplos, Pares e Impares</h4>
        <p class="text-xs text-slate-500 mt-1">Identificar múltiplos, determinar números pares e impares y resolver problemas de organización de colecciones.</p>
      </div>
      <div class="p-4 rounded-2xl bg-teal-50 border border-teal-100">
        <span class="text-xs font-bold text-teal-700 bg-teal-100 px-2.5 py-1 rounded-full uppercase font-fun">Tema 2</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Divisores de un Número</h4>
        <p class="text-xs text-slate-500 mt-1">Reconocer los números que dividen exactamente a un número natural sin dejar residuo.</p>
      </div>
      <div class="p-4 rounded-2xl bg-amber-50 border border-amber-100">
        <span class="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full uppercase font-fun">Tema 3 & 4</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Fracciones Impropias y Mixtas</h4>
        <p class="text-xs text-slate-500 mt-1">Identificar fracciones mayores que la unidad y convertirlas a mixtas y viceversa en contextos reales.</p>
      </div>
      <div class="p-4 rounded-2xl bg-rose-50 border border-rose-100">
        <span class="text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-1 rounded-full uppercase font-fun">Tema 5</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Sistema Monetario Nacional</h4>
        <p class="text-xs text-slate-500 mt-1">Resolver problemas prácticos de compras, sumando gastos en colones y calculando el vuelto necesario.</p>
      </div>
      <div class="p-4 rounded-2xl bg-purple-50 border border-purple-100">
        <span class="text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full uppercase font-fun">Tema 6</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Perímetro y Área por Fórmulas</h4>
        <p class="text-xs text-slate-500 mt-1">Aplicar fórmulas directas en triángulos, cuadrados, rectángulos, paralelogramos y trapecios.</p>
      </div>
      <div class="p-4 rounded-2xl bg-sky-50 border border-sky-100">
        <span class="text-xs font-bold text-sky-700 bg-sky-100 px-2.5 py-1 rounded-full uppercase font-fun">Tema 7</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Resolución de Problemas Geométricos</h4>
        <p class="text-xs text-slate-500 mt-1">Problemas complejos que involucran el cálculo de áreas y perímetros combinados de figuras planas.</p>
      </div>
    </div>
  `,

  subtabsHTML: `
    <button onclick="switchLabSubTab('multiplos')" id="subtab-multiplos" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 bg-teal-500 text-white shadow-sm font-fun">
      🔢 Múltiplos, Pares e Impares
    </button>
    <button onclick="switchLabSubTab('divisores')" id="subtab-divisores" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 text-slate-600 hover:bg-slate-200 font-fun">
      ✂️ Divisores
    </button>
    <button onclick="switchLabSubTab('fracciones')" id="subtab-fracciones" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 text-slate-600 hover:bg-slate-200 font-fun">
      🍕 Fracciones
    </button>
    <button onclick="switchLabSubTab('moneda')" id="subtab-moneda" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 text-slate-600 hover:bg-slate-200 font-fun">
      💵 Pulpería ₡
    </button>
    <button onclick="switchLabSubTab('geometria')" id="subtab-geometria" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 text-slate-600 hover:bg-slate-200 font-fun">
      📐 Geometría
    </button>
  `,

  defaultLabSubTab: 'multiplos'
};
