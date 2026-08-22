---
name: riomate-new-lab
description: Crea un nuevo laboratorio interactivo dentro de la sección de Laboratorios de RíoMate. Usar cuando el usuario pide agregar un simulador, mini-juego o experimento nuevo.
---

# Skill: Nuevo Laboratorio Interactivo en RíoMate

## Cuándo usar este skill
- "Agrega un laboratorio de [tema]"
- "Crea un simulador de [concepto]"
- "Quiero un experimento interactivo de [materia]"

## Estructura Estándar de un Laboratorio (Layout de 2 Columnas)
Todo laboratorio se organiza en un grid responsive de 2 columnas (`grid grid-cols-1 md:grid-cols-12 gap-8`):
1. **Columna Izquierda (`md:col-span-6`):** Controles interactivos, selección de muestras mediante **Radio Button Cards** o sliders SVG.
2. **Columna Derecha (`md:col-span-6`):** Tarjeta de resultado en vivo, análisis lingüístico/matemático y reto interactivo de preguntas.

### Patrón Oficial de Selección: Radio Button Cards
Para permitir seleccionar opciones de muestra, usar siempre:
```html
<div onclick="selectSample({idx})" class="cursor-pointer p-3.5 rounded-2xl border-2 transition-all duration-200 flex items-start gap-3 text-left {isSelected ? 'border-amber-500 bg-amber-50/90 shadow-sm' : 'border-slate-200 bg-white hover:border-amber-300 hover:bg-amber-50/30'}">
  <div class="mt-0.5 shrink-0 w-5 h-5 rounded-full border-2 {isSelected ? 'border-amber-600 bg-amber-600' : 'border-slate-300 bg-white'} flex items-center justify-center transition-all">
    {isSelected ? '<div class="w-2 h-2 rounded-full bg-white"></div>' : ''}
  </div>
  <div class="flex-1 min-w-0">
    <div class="flex items-center gap-2 mb-1">
      <span class="text-base">{icon}</span>
      <span class="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full {badgeColor} font-fun">{badge}</span>
    </div>
    <p class="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">"{text}"</p>
  </div>
</div>
```

### Patrón Oficial de Input + Botón en Móvil
```html
<div class="flex flex-col sm:flex-row gap-2.5">
  <input type="text" class="w-full sm:flex-1 px-4 py-3 min-h-[48px] rounded-2xl border border-amber-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white shadow-inner">
  <button class="w-full sm:w-auto shrink-0 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-bold px-6 py-3 min-h-[48px] rounded-2xl text-sm font-fun shadow-md transition-all flex items-center justify-center gap-2">
    <span>Analizar</span> <span>🔍</span>
  </button>
</div>
```

### Integración de Gemini IA (Mínimo Consumo)
- Usar el módulo `src/shared/services/gemini.js` con el modelo `gemini-flash-lite-latest`.
- Limitar a `maxOutputTokens: 90`.
- Cachear resultados en memoria con `Map`.
- Si la conexión falla, fallback instantáneo al motor local.

### Audio y Estado
- Ejecutar `playTickWithThrottle()` en selecciones táctiles.
- Llamar a `setUserHasUsedLab(true)` y `updateBadges()` tras interactuar.
