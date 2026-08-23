---
name: riomate-new-lab
description: Crea un nuevo laboratorio interactivo dentro de la seccion de Laboratorios de RioMate. Usar cuando el usuario pide agregar un simulador, mini-juego o experimento nuevo.
---

# Skill: Nuevo Laboratorio Interactivo en RioMate

## Cuando usar este skill
- "Agrega un laboratorio de [tema]"
- "Crea un simulador de [concepto]"
- "Quiero un experimento interactivo de [materia]"

---

## PASO 0 - Revisar componentes reutilizables ANTES de escribir HTML

Antes de escribir cualquier HTML de laboratorio, revisar si alguno de estos modulos ya resuelve lo que necesitas:

### src/shared/modules/lab-components.js
Exporta 4 funciones. Usarlas solo si aplican al lab - no son obligatorias.

| Funcion | Cuando usarla |
|---|---|
| renderLabCarousel(containerId, items, idx, handlers) | Si el lab navega ejemplos de UNO en UNO con botones anterior/siguiente y dots |
| renderLabResultCard(containerId, opts) | Si el lab muestra resultado de analisis IA o local con badge IA/Local |
| renderSampleResultCard(containerId, opts) | Si el lab muestra analisis de ejemplos del carrusel (sin badge IA) |
| renderLabLoading(containerId) | Si el lab hace una llamada async (Gemini u otra) y necesita estado de carga |

Parametros de renderLabCarousel:
  - containerId: ID del div en HTML
  - items: Array con { text, type, icon, color, badge }
  - currentIdx: Indice activo (numero)
  - handlers: { onSelect, onPrev, onNext, onDot } - nombres de funciones en window.*

Parametros de renderLabResultCard:
  - icon, type, text, clue, praise (opcional), isAI (boolean)

Parametros de renderSampleResultCard:
  - icon, type, text, clue

### src/shared/services/gemini.js
Para analisis con IA. Importar analyzeSentenceWithAI(text).
Devuelve { tipo, icono, explicacion, elogio } o null si falla (fallback local automatico).

### src/shared/modules/audio.js
- playTickWithThrottle() en selecciones tactiles
- playSound('correct' | 'incorrect' | 'tab_click') en aciertos/fallos/cambios

### src/shared/modules/flashcards.js
- updateBadges() - siempre llamar tras interaccion del usuario
- setUserHasUsedLab(true) - marcar que el lab fue usado (desbloquea medallas)

---

## Estructura Estandar de un Laboratorio (Layout de 2 Columnas)

Todo laboratorio se organiza en un grid responsive:
  grid grid-cols-1 md:grid-cols-12 gap-8

1. Columna Izquierda (md:col-span-6): Controles interactivos, seleccion de muestras mediante Carrusel o Radio Button Cards.
2. Columna Derecha (md:col-span-6): Tarjeta de resultado en vivo y reto interactivo.

### Carrusel vs Radio Button Cards?
- Carrusel (renderLabCarousel): cuando se navegan ejemplos de uno en uno. Preferido para listas largas (5+).
- Radio Button Cards (ver Seccion 3B de riomate.md): cuando se muestran TODAS las opciones a la vez. Util para listas cortas (2-4 items).

### Patron Oficial de Input + Boton en Movil (Seccion 3C de riomate.md)
Ver el patron completo en riomate.md Seccion 3C. Regla clave: en movil apilados al 100%, en sm: alineados horizontalmente. min-h-[48px] siempre.

---

## Checklist antes de entregar el lab
1. npm run build sin errores.
2. Probar en 360x800px (Galaxy S20) - sin scroll horizontal, touch targets 44px minimo.
3. updateBadges() y setUserHasUsedLab(true) llamados tras cada interaccion.
4. Verificar que ningun componente de la Seccion 3 de riomate.md fue alterado.
