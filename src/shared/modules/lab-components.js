// =============================================================
// COMPONENTES DE LABORATORIO REUTILIZABLES — RíoMate
// Funciones de renderizado para labs: carrusel, card resultado,
// loading state. NO modificar clases sin autorización explícita.
// =============================================================

/**
 * Renderiza el estado de carga mientras se consulta Gemini IA.
 */
export function renderLabLoading(containerId) {
  const box = document.getElementById(containerId);
  if (!box) return;
  box.innerHTML = [
    '<div class="p-6 rounded-3xl border-2 border-amber-300 bg-amber-50/70 animate-pulse text-center">',
    '  <span class="text-3xl inline-block animate-bounce mb-2">✨</span>',
    '  <p class="text-sm font-bold text-amber-900 font-fun">Consultando con la IA de Google Gemini...</p>',
    '  <p class="text-xs text-slate-500 mt-1">Analizando la intención comunicativa de tu oración...</p>',
    '</div>'
  ].join('\n');
}

/**
 * Renderiza la card de resultado de análisis IA o local.
 * Patrón canónico Sección 3F de riomate.md.
 */
export function renderLabResultCard(containerId, opts) {
  const icon = opts.icon;
  const type = opts.type;
  const text = opts.text;
  const clue = opts.clue;
  const praise = opts.praise || '';
  const isAI = !!opts.isAI;
  const box = document.getElementById(containerId);
  if (!box) return;

  const badgeClass = isAI
    ? 'bg-indigo-100 text-indigo-900 border border-indigo-200 shadow-sm'
    : 'bg-slate-100 text-slate-700 border border-slate-200';
  const badgeLabel = isAI ? '✨ IA Gemini' : '🔍 Modo Local';

  const praiseHtml = praise
    ? '<div class="pt-2.5 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700 font-fun"><span class="text-sm">🌟</span><span>' + praise + '</span></div>'
    : '';

  box.innerHTML =
    '<div class="p-4 sm:p-6 rounded-3xl border-2 border-amber-300 bg-amber-50/70 animate-fadeIn">' +
      '<div class="flex items-start justify-between gap-2 mb-3">' +
        '<div class="flex items-center gap-2.5">' +
          '<span class="text-3xl shrink-0">' + icon + '</span>' +
          '<div>' +
            '<span class="text-[11px] font-bold uppercase tracking-wider text-amber-800 font-fun block">Resultado de tu Frase</span>' +
            '<h4 class="text-base sm:text-xl font-bold text-slate-900 font-fun leading-tight">' + type + '</h4>' +
          '</div>' +
        '</div>' +
        '<span class="shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full ' + badgeClass + ' font-fun flex items-center gap-1">' + badgeLabel + '</span>' +
      '</div>' +
      '<div class="p-3.5 rounded-2xl bg-white border border-amber-200 mb-3 shadow-inner">' +
        '<p class="text-sm sm:text-base text-slate-800 font-semibold italic text-center font-fun">"' + text + '"</p>' +
      '</div>' +
      '<div class="bg-white/95 p-4 rounded-2xl border border-amber-100 space-y-2 shadow-sm">' +
        '<div>' +
          '<p class="text-xs text-amber-900 uppercase font-bold tracking-wider font-fun flex items-center gap-1.5"><span>🔍</span> <span>Explicación Pedagógica:</span></p>' +
          '<p class="text-xs sm:text-sm text-slate-700 font-medium mt-1 leading-relaxed">' + clue + '</p>' +
        '</div>' +
        praiseHtml +
      '</div>' +
    '</div>';
}

/**
 * Renderiza la card de resultado para ejemplos del carrusel (sin badge IA).
 */
export function renderSampleResultCard(containerId, opts) {
  const icon = opts.icon;
  const type = opts.type;
  const text = opts.text;
  const clue = opts.clue;
  const box = document.getElementById(containerId);
  if (!box) return;

  box.innerHTML =
    '<div class="p-4 sm:p-6 rounded-3xl border-2 border-amber-300 bg-amber-50/70 animate-fadeIn">' +
      '<div class="flex items-center gap-2.5 mb-3">' +
        '<span class="text-3xl shrink-0">' + icon + '</span>' +
        '<div>' +
          '<span class="text-[11px] font-bold uppercase tracking-wider text-amber-800 font-fun block">Resultado del Análisis Lingüístico</span>' +
          '<h4 class="text-base sm:text-xl font-bold text-slate-900 font-fun leading-tight">' + type + '</h4>' +
        '</div>' +
      '</div>' +
      '<div class="p-3.5 rounded-2xl bg-white border border-amber-200 mb-3 shadow-inner">' +
        '<p class="text-sm sm:text-base text-slate-800 font-semibold italic text-center font-fun">"' + text + '"</p>' +
      '</div>' +
      '<div class="bg-white/95 p-4 rounded-2xl border border-amber-100 space-y-2 shadow-sm">' +
        '<p class="text-xs text-amber-900 uppercase font-bold tracking-wider font-fun flex items-center gap-1.5"><span>🔍</span> <span>Pistas del Detective:</span></p>' +
        '<p class="text-xs sm:text-sm text-slate-700 font-medium mt-1 leading-relaxed">' + clue + '</p>' +
      '</div>' +
    '</div>';
}

/**
 * Renderiza el carrusel de ejemplos de laboratorio.
 * Patrón canónico Sección 3E de riomate.md.
 */
export function renderLabCarousel(containerId, items, currentIdx, handlers) {
  const onSelect = handlers.onSelect;
  const onPrev   = handlers.onPrev;
  const onNext   = handlers.onNext;
  const onDot    = handlers.onDot;

  const container = document.getElementById(containerId);
  if (!container) return;

  const s = items[currentIdx];
  const total = items.length;

  const dots = items.map(function(_, i) {
    const cls = i === currentIdx
      ? 'h-2.5 rounded-full transition-all bg-amber-600 w-5'
      : 'h-2.5 rounded-full transition-all bg-slate-200 hover:bg-amber-300 w-2';
    return '<button onclick="window.' + onDot + '(' + i + ')" aria-label="Ir a oración ' + (i + 1) + '" class="' + cls + '"></button>';
  }).join('');

  container.innerHTML =
    '<div class="bg-white rounded-3xl p-4 sm:p-5 border-2 border-amber-300 shadow-sm relative transition-all duration-300">' +
      '<div class="flex items-center justify-between gap-2 mb-3">' +
        '<span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ' + s.color + ' font-fun"><span>' + s.icon + '</span><span>' + s.badge + '</span></span>' +
        '<span class="text-xs font-bold text-slate-600 font-fun bg-amber-100/60 border border-amber-200 px-2.5 py-1 rounded-full">Oración ' + (currentIdx + 1) + ' de ' + total + '</span>' +
      '</div>' +
      '<div class="my-3 p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-center">' +
        '<p class="text-base sm:text-lg font-bold text-slate-900 leading-snug font-fun">"' + s.text + '"</p>' +
      '</div>' +
      '<div class="mb-4 text-center">' +
        '<button onclick="window.' + onSelect + '(' + currentIdx + ')" class="w-full bg-amber-100 hover:bg-amber-200 active:scale-98 text-amber-950 font-bold py-2.5 px-3 rounded-2xl text-xs font-fun transition-all border border-amber-300 shadow-sm flex items-center justify-center gap-2 min-h-[44px]">' +
          '<span>🔍 Ver Análisis Lingüístico de este Ejemplo</span>' +
        '</button>' +
      '</div>' +
      '<div class="flex items-center justify-between pt-3 border-t border-slate-100 gap-2">' +
        '<button onclick="window.' + onPrev + '()" aria-label="Anterior" class="shrink-0 h-11 px-3 sm:px-4 rounded-2xl border border-amber-300 bg-amber-50 hover:bg-amber-100 active:scale-95 text-xs font-bold text-amber-950 transition-all font-fun flex items-center justify-center gap-1.5 shadow-sm min-w-[44px]">' +
          '<span class="text-base font-bold">◀</span><span class="hidden sm:inline">Anterior</span>' +
        '</button>' +
        '<div class="flex items-center justify-center gap-1.5 px-1 flex-1">' + dots + '</div>' +
        '<button onclick="window.' + onNext + '()" aria-label="Siguiente" class="shrink-0 h-11 px-3 sm:px-4 rounded-2xl border border-amber-300 bg-amber-50 hover:bg-amber-100 active:scale-95 text-xs font-bold text-amber-950 transition-all font-fun flex items-center justify-center gap-1.5 shadow-sm min-w-[44px]">' +
          '<span class="hidden sm:inline">Siguiente</span><span class="text-base font-bold">▶</span>' +
        '</button>' +
      '</div>' +
    '</div>';
}
