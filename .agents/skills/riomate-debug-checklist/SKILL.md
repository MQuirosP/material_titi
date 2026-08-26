---
name: riomate-debug-checklist
description: Lista de verificación para diagnosticar y corregir errores comunes en RíoMate. Usar cuando algo no funciona correctamente en la app o tarjetas no aparecen.
---

# Skill: Lista de Diagnóstico y Depuración en RíoMate

## Checklist Obligatorio

1. **Balance Estricto de Etiquetas HTML (`<div>`):**
   - Si una sección o tarjetas de teoría no se muestran al cambiar de materia/semestre, verificar si un `<div>` no fue cerrado en el bloque anterior (haciendo que el bloque siguiente quede anidado como hijo de un contenedor oculto).
   - Verificar que no exista ningún `</div>` sobrante que haya cerrado la tarjeta contenedora blanca `.bg-white` antes de tiempo.

2. **Atributos de Segregación por Materia y Semestre:**
   - Todo bloque de teoría o laboratorio DEBE incluir sus atributos de filtrado: `data-subject="materia" data-sem="semestre" data-eval="evaluacion" data-display="grid|block|flex"`.

3. **Notación Matemática Limpia:** Cero caracteres `$` y cero comandos LaTeX (`\frac`, `\times`, `\div`, `\approx`, `\Delta`).

4. **Botones de Opciones del Quiz:**
   - `.circle-icon` **DEBE tener `shrink-0 w-6 h-6`** para no deformarse en móvil.
   - Texto de opción con `flex-1` y separación `gap-3.5`.

5. **Selección de Laboratorios (Radio Button Cards):**
   - Tarjetas con `shrink-0 w-5 h-5` en el círculo de selección.
   - Activación inmediata al tocar con `playTickWithThrottle()`.

6. **Campos de Entrada en Móvil:**
   - Contenedor con `flex flex-col sm:flex-row gap-2.5` y `min-h-[48px]`.

7. **Integración con Gemini IA:**
   - Modelo configurado como `gemini-flash-lite-latest`.
   - Límite de `maxOutputTokens: 90`.
   - Caché en memoria activo para 0 consumo en repeticiones.
   - Fallback funcional al motor local.

8. **Mapeo Oficial de Docentes:**
   - Matemáticas y Ciencias → Maestra Florisel Olmazo López.
   - Español y Estudios Sociales → Maestra Licda. Maureen Vargas Solano.

9. **Responsive Móvil:** Probar siempre a **360×800 px (Galaxy S20)** con cero scroll horizontal.

10. **Compilación:** `npm run build` sin errores.
