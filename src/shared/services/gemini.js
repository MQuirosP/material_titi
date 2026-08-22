// =====================================================
// SERVICIO GEMINI IA (ULTRA-LIVIANO / MÍNIMO CONSUMO)
// Clasificador pedagógico de oraciones en tiempo real
// =====================================================

const DEFAULT_API_KEY = "AIzaSyBf-W7n2FgfvhSTygrvtUyhwjL5HwdhXog";
const MODEL_NAME = "gemini-flash-lite-latest";

// Cache en memoria para reutilizar análisis sin consumir cuota de la API
const analysisCache = new Map();

/**
 * Obtiene la clave de API activa (de localStorage o la clave predeterminada)
 */
export function getGeminiApiKey() {
  return localStorage.getItem('riomate_gemini_api_key') || DEFAULT_API_KEY;
}

/**
 * Permite actualizar la clave desde la interfaz
 */
export function setGeminiApiKey(key) {
  if (key && key.trim()) {
    localStorage.setItem('riomate_gemini_api_key', key.trim());
  } else {
    localStorage.removeItem('riomate_gemini_api_key');
  }
}

/**
 * Analiza una oración con Gemini consumiendo la mínima cantidad posible de tokens
 * @param {string} sentence - Frase escrita por el estudiante
 * @returns {Promise<{tipo: string, icono: string, explicacion: string, elogio: string, isAI: boolean}>}
 */
export async function analyzeSentenceWithAI(sentence) {
  const cleanText = sentence.trim();
  if (!cleanText) return null;

  // 1. Verificar si ya está en caché
  const cacheKey = cleanText.toLowerCase();
  if (analysisCache.has(cacheKey)) {
    return { ...analysisCache.get(cacheKey), isAI: true, fromCache: true };
  }

  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    return null; // Fallback al motor local
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${apiKey}`;

  // Prompt ultra-compacto diseñado para gastar menos de 80 tokens totales
  const prompt = `Analiza para un estudiante de 5° grado la oración: "${cleanText}".
Responde únicamente un JSON válido sin markdown con esta estructura:
{"tipo":"Enunciativa Afirmativa|Enunciativa Negativa|Interrogativa|Exclamativa|Imperativa|Dubitativa|Desiderativa","icono":"1 emoji","explicacion":"1 frase breve de por qué","elogio":"1 frase corta motivadora"}`;

  const payload = {
    contents: [
      {
        parts: [{ text: prompt }]
      }
    ],
    generationConfig: {
      temperature: 0.1,
      maxOutputTokens: 90,
      responseMimeType: "application/json"
    }
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout max

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn("Gemini API HTTP Error:", res.status);
      return null;
    }

    const data = await res.json();
    const textOutput = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!textOutput) return null;

    // Parsear respuesta JSON limpia
    const parsed = JSON.parse(textOutput.trim());
    const result = {
      tipo: parsed.tipo || "Enunciativa Afirmativa",
      icono: parsed.icono || "🌟",
      explicacion: parsed.explicacion || "Oración identificada correctamente.",
      elogio: parsed.elogio || "¡Excelente redacción!",
      isAI: true
    };

    // Guardar en caché para futuras consultas idénticas
    analysisCache.set(cacheKey, result);
    return result;
  } catch (err) {
    console.warn("Error consultando Gemini IA (usando analizador local):", err);
    return null;
  }
}
