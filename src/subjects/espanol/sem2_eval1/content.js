/**
 * Módulo de Contenido: Español · Segundo Semestre 2026 · 1ª Evaluación
 * Maestra: Licda. Maureen Vargas Solano (Secciones 5-1 y 5-2)
 */

export const espanolSem2Eval1Module = {
  id: 'espanol-sem2-eval1',
  subject: 'espanol',
  sem: '2',
  eval: '1',
  title: 'RíoEspañol 5º',
  subtitle: 'Escuela Riojalandia · 1ª Evaluación de Español · II Semestre · Secciones 5-1 y 5-2',
  examDate: 'Lunes 24 de Agosto, 2026',
  teacher: '👩‍🏫 Maestra: Licda. Maureen Vargas Solano',
  semesterBadge: 'Segundo Semestre 2026 · 1ª Evaluación',
  themeClass: 'bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 min-h-screen text-slate-800 pb-12 transition-all duration-500',
  favicon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📚</text></svg>',
  badgeFormulaTitle: 'Detective de las Letras (Usa los laboratorios de español)',
  badgeFormulaIcon: '📖',

  welcomeHTML: `
    <p class="text-slate-600 leading-relaxed text-lg mb-6">
      Bienvenida a tu compañero de estudio de español. Aquí vas a repasar comprensión de lectura, géneros literarios, partes del libro, tipos de diccionarios, técnicas de estudio, fichas y la clasificación de oraciones por la intención del emisor de forma interactiva y amena.
    </p>
    <div class="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex gap-4 items-start">
      <span class="text-2xl mt-1">💡</span>
      <div>
        <h4 class="font-bold text-amber-900">¿Cómo usar RíoEspañol?</h4>
        <p class="text-sm text-amber-700 leading-relaxed mt-1">
          Explora las pestañas superiores. Lee las 10 tarjetas interactivas de teoría, experimenta en los laboratorios de oraciones, libros y refranes ticos, y luego pon a prueba tus conocimientos en los exámenes teórico y práctico.
        </p>
      </div>
    </div>
  `,

  temarioHTML: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="p-4 rounded-2xl bg-amber-50 border border-amber-100">
        <span class="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full uppercase font-fun">Tema 1</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Comprensión Lectora y Formatos</h4>
        <p class="text-xs text-slate-500 mt-1">Identificar ideas principales, secundarias, personajes y clasificar textos continuos, discontinuos y mixtos.</p>
      </div>
      <div class="p-4 rounded-2xl bg-rose-50 border border-rose-100">
        <span class="text-xs font-bold text-rose-800 bg-rose-100 px-2.5 py-1 rounded-full uppercase font-fun">Tema 2</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Géneros Literarios</h4>
        <p class="text-xs text-slate-500 mt-1">Diferenciar el cuento, fábula con moraleja, leyenda tradicional (La Tule Vieja), novela y obras dramáticas.</p>
      </div>
      <div class="p-4 rounded-2xl bg-orange-50 border border-orange-100">
        <span class="text-xs font-bold text-orange-800 bg-orange-100 px-2.5 py-1 rounded-full uppercase font-fun">Tema 3</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Tradición Popular y Lenguaje Figurado</h4>
        <p class="text-xs text-slate-500 mt-1">Adivinanzas, trabalenguas para dicción, bombas guanacastecas, refranes y dichos populares costarricenses.</p>
      </div>
      <div class="p-4 rounded-2xl bg-teal-50 border border-teal-100">
        <span class="text-xs font-bold text-teal-800 bg-teal-100 px-2.5 py-1 rounded-full uppercase font-fun">Tema 4</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Partes del Libro y Diccionarios</h4>
        <p class="text-xs text-slate-500 mt-1">Reconocer portada, contraportada, lomo, prólogo, índice, glosario y tipos de diccionarios especializados.</p>
      </div>
      <div class="p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
        <span class="text-xs font-bold text-indigo-800 bg-indigo-100 px-2.5 py-1 rounded-full uppercase font-fun">Tema 5</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Técnicas de Estudio y Fichas</h4>
        <p class="text-xs text-slate-500 mt-1">Resumen vs síntesis, mapas conceptuales jerárquicos y fichas de cita textual, resumen y biográficas.</p>
      </div>
      <div class="p-4 rounded-2xl bg-purple-50 border border-purple-100">
        <span class="text-xs font-bold text-purple-800 bg-purple-100 px-2.5 py-1 rounded-full uppercase font-fun">Tema 6</span>
        <h4 class="font-bold text-slate-800 mt-2 text-base">Clases de Oraciones e Intención</h4>
        <p class="text-xs text-slate-500 mt-1">Oraciones enunciativas (afirmativas/negativas), interrogativas, exclamativas, imperativas, dubitativas y desiderativas.</p>
      </div>
    </div>
  `,

  subtabsHTML: `
    <button onclick="switchLabSubTab('detector-oraciones')" id="subtab-detector-oraciones" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 bg-amber-600 text-white shadow-sm font-fun">
      🕵️ El Detective de Oraciones
    </button>
    <button onclick="switchLabSubTab('taller-libro')" id="subtab-taller-libro" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 text-slate-600 hover:bg-slate-200 font-fun">
      📖 Taller del Libro
    </button>
    <button onclick="switchLabSubTab('pulperia-refranes')" id="subtab-pulperia-refranes" class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 text-slate-600 hover:bg-slate-200 font-fun">
      🇨🇷 Pulpería de Refranes
    </button>
  `,

  defaultLabSubTab: 'detector-oraciones'
};
