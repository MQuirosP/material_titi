---
name: riomate-debug-checklist
description: Lista de verificación para diagnosticar y corregir errores comunes en RíoMate. Usar cuando algo no funciona correctamente en la app.
---

# Skill: Lista de Diagnóstico y Depuración en RíoMate

## Checklist Obligatorio

1. **Notación Matemática Limpia:** Cero caracteres `$` y cero comandos LaTeX (`\frac`, `\times`, `\div`, `\approx`, `\Delta`).
2. **Botones de Opciones del Quiz:**
   - `.circle-icon` **DEBE tener `shrink-0 w-6 h-6`** para no deformarse en móvil.
   - Texto de opción con `flex-1` y separación `gap-3.5`.
3. **Selección de Laboratorios (Radio Button Cards):**
   - Tarjetas con `shrink-0 w-5 h-5` en el círculo de selección.
   - Activación inmediata al tocar con `playTickWithThrottle()`.
4. **Campos de Entrada en Móvil:**
   - Contenedor con `flex flex-col sm:flex-row gap-2.5` y `min-h-[48px]`.
5. **Integración con Gemini IA:**
   - Modelo configurado como `gemini-flash-lite-latest`.
   - Límite de `maxOutputTokens: 90`.
   - Caché en memoria activo para 0 consumo en repeticiones.
   - Fallback funcional al motor local.
6. **Mapeo de Docentes:**
   - Matemáticas y Ciencias → Maestra Florisel Olmazo López.
   - Español y Estudios Sociales → Maestra Licda. Maureen Vargas Solano.
7. **Responsive Móvil:** Probar siempre a **360×800 px (Galaxy S20)** con cero scroll horizontal.
8. **Compilación:** `npm run build` sin errores.
