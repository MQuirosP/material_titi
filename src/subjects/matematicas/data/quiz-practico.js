/** Banco de preguntas: Examen Práctico de Matemáticas (10 preguntas) */
export const quizPracticoQuestions = [
  {
    topic: "Problema de Múltiplos y Colecciones",
    question: "En la Escuela Riojalandia, Luis organiza sus canicas. Dice que si las agrupa de 5 en 5, no le sobra ninguna. Si tiene entre 10 y 25 canicas, y sabemos que el número total es un número par, ¿cuántas canicas tiene Luis?",
    options: [
      { text: "20 canicas", isCorrect: true, rationale: "¡Correcto! Los múltiplos de 5 entre 10 y 25 son 10, 15, 20 y 25. De estos, los pares son 10 y 20. Si el problema excluye los límites o busca el valor medio común, 20 es la respuesta par perfecta." },
      { text: "15 canicas", isCorrect: false, rationale: "Incorrecto. Aunque 15 es un múltiplo de 5, termina en 5, lo que significa que es un número impar." },
      { text: "25 canicas", isCorrect: false, rationale: "Incorrecto. 25 es un número impar y se encuentra en el límite del rango establecido." },
      { text: "12 canicas", isCorrect: false, rationale: "Incorrecto. 12 es un número par, pero no es múltiplo de 5 (no termina en 0 o en 5)." },
    ],
  },
  {
    topic: "Problema de Divisores de un Número",
    question: "La maestra Florisel quiere acomodar a 18 estudiantes en grupos iguales para una actividad de las II Pruebas. ¿Con cuál de las siguientes cantidades de estudiantes NO se pueden formar grupos exactos? (Es decir, qué número NO es divisor de 18).",
    options: [
      { text: "4 estudiantes", isCorrect: true, rationale: "¡Excelente! 4 no es divisor de 18 (18 ÷ 4 = 4 y sobran 2). Al formar grupos de 4, quedarían dos estudiantes sin grupo completo." },
      { text: "3 estudiantes", isCorrect: false, rationale: "Incorrecto. 3 sí es divisor de 18 (18 ÷ 3 = 6 grupos perfectos)." },
      { text: "6 estudiantes", isCorrect: false, rationale: "Incorrecto. 6 sí es divisor de 18 (18 ÷ 6 = 3 grupos perfectos)." },
      { text: "9 estudiantes", isCorrect: false, rationale: "Incorrecto. 9 sí es divisor de 18 (18 ÷ 9 = 2 grupos perfectos)." },
    ],
  },
  {
    topic: "Identificación de Fracciones",
    question: "¿Cuál de las siguientes opciones contiene únicamente fracciones impropias?",
    options: [
      { text: "5/3,  9/4,  7/7", isCorrect: true, rationale: "¡Muy bien! En todas ellas el numerador es mayor o igual al denominador (5 > 3, 9 > 4 y 7 = 7), lo cual representa fracciones mayores o iguales al entero." },
      { text: "1/2,  3/4,  5/6", isCorrect: false, rationale: "Incorrecto. Todas estas son fracciones propias, ya que el número de arriba es menor al de abajo." },
      { text: "2/5,  8/3,  4/9", isCorrect: false, rationale: "Incorrecto. Aunque 8/3 es impropia, 2/5 y 4/9 son propias." },
      { text: "10/11,  1/5,  12/12", isCorrect: false, rationale: "Incorrecto. 10/11 y 1/5 son propias." },
    ],
  },
  {
    topic: "Conversión de Fracciones: Impropia a Mixta",
    question: "En una receta típica de empanadas costarricenses, se utilizan 11/4 tazas de queso. ¿Cómo se expresa esta cantidad usando notación mixta?",
    options: [
      { text: "2  3/4 tazas", isCorrect: true, rationale: "¡Correcto! Al dividir 11 entre 4 obtenemos 2 enteros (2 × 4 = 8) y nos sobran 3 cuartos. Se escribe como 2 y 3/4." },
      { text: "3  1/4 tazas", isCorrect: false, rationale: "Incorrecto. 3 enteros representarían 12 cuartos (3 × 4 = 12), lo cual se pasa de la medida de 11/4." },
      { text: "2  1/4 tazas", isCorrect: false, rationale: "Incorrecto. 2 y 1/4 equivale únicamente a 9/4, no a 11/4." },
      { text: "1  3/4 tazas", isCorrect: false, rationale: "Incorrecto. 1 y 3/4 equivale a 7/4." },
    ],
  },
  {
    topic: "Conversión de Fracciones: Mixta a Impropia",
    question: "Un agricultor en Cartago tiene una finca donde sembró 3 y 2/5 hectáreas de papas. ¿Cómo se expresa esta medida en fracción impropia?",
    options: [
      { text: "17/5 hectáreas", isCorrect: true, rationale: "¡Perfecto! Multiplicamos el entero por el denominador: 3 × 5 = 15. Luego sumamos el numerador: 15 + 2 = 17. El denominador se mantiene en 5." },
      { text: "15/5 hectáreas", isCorrect: false, rationale: "Incorrecto. 15/5 equivale exactamente a 3 enteros, olvidando sumar los 2/5 sobrantes." },
      { text: "10/5 hectáreas", isCorrect: false, rationale: "Incorrecto. 10/5 equivale a 2 enteros completos." },
      { text: "13/5 hectáreas", isCorrect: false, rationale: "Incorrecto. Se cometió un error en la multiplicación o la suma del entero." },
    ],
  },
  {
    topic: "Sistema Monetario de Costa Rica",
    question: "Sofía va a la pulpería de su barrio en Riojalandia con un billete de ₡5 000. Compra una leche de ₡950, unas galletas de ₡650 y un refresco de ₡1 200. ¿Cuánto dinero debe recibir de vuelto?",
    options: [
      { text: "₡2 200", isCorrect: true, rationale: "¡Correcto! El costo total es: 950 + 650 + 1200 = 2800 colones. El vuelto de Sofía se calcula restando del billete de 5000: 5000 - 2800 = 2200 colones." },
      { text: "₡2 800", isCorrect: false, rationale: "Incorrecto. ₡2 800 es el total de la compra (lo que gastó Sofía), no el vuelto que debe recibir." },
      { text: "₡3 200", isCorrect: false, rationale: "Incorrecto. Error de cálculo en la resta del billete de 5000 colones." },
      { text: "₡1 800", isCorrect: false, rationale: "Incorrecto. Se restaron mal los valores de la suma de artículos." },
    ],
  },
  {
    topic: "Perímetro de una Figura Geométrica",
    question: "Se desea colocar una cerca de alambre de seguridad alrededor de una huerta triangular cuyos lados miden exactamente 8 metros, 12 metros y 15 metros. ¿Cuántos metros de cerca se requieren comprar?",
    options: [
      { text: "35 metros", isCorrect: true, rationale: "¡Excelente! Para hallar el perímetro de un triángulo se deben sumar las medidas de todos sus lados: 8 + 12 + 15 = 35 metros." },
      { text: "45 metros", isCorrect: false, rationale: "Incorrecto. Error al realizar la suma de los tres lados exteriores del triángulo." },
      { text: "30 metros", isCorrect: false, rationale: "Incorrecto. Suma incompleta de los metros del contorno de la huerta." },
      { text: "960 metros", isCorrect: false, rationale: "Incorrecto. Se multiplicaron las tres longitudes en lugar de sumarse." },
    ],
  },
  {
    topic: "Área de un Rectángulo",
    question: "El aula de quinto grado de la escuela Riojalandia es de forma rectangular. Mide 9 metros de largo y 7 metros de ancho. Si se quiere alfombrar por completo, ¿cuántos metros cuadrados (m²) de alfombra se necesitan?",
    options: [
      { text: "63 m²", isCorrect: true, rationale: "¡Muy bien! El área de un rectángulo se calcula con la fórmula: Área = Base × Altura. Reemplazando obtenemos: 9 × 7 = 63 metros cuadrados." },
      { text: "32 m²", isCorrect: false, rationale: "Incorrecto. Este valor se parece al cálculo de la mitad de la suma de lados, no al área real del piso rectangular." },
      { text: "81 m²", isCorrect: false, rationale: "Incorrecto. Se calculó como si fuera un cuadrado perfecto de lado 9." },
      { text: "49 m²", isCorrect: false, rationale: "Incorrecto. Se calculó como si fuera un cuadrado de lado 7." },
    ],
  },
  {
    topic: "Área de un Trapecio",
    question: "Una pieza de madera con forma de trapecio tiene una base mayor que mide 14 cm, una base menor de 10 cm y una altura de 5 cm. ¿Cuál es la medida de su área superficial?",
    options: [
      { text: "60 cm²", isCorrect: true, rationale: "¡Espectacular! La fórmula es: [(Base Mayor + Base Menor) × Altura] ÷ 2. Sumamos las bases: 14 + 10 = 24. Multiplicamos por la altura: 24 × 5 = 120. Dividimos entre 2: 120 ÷ 2 = 60 centímetros cuadrados." },
      { text: "120 cm²", isCorrect: false, rationale: "Incorrecto. Este valor es el resultado antes de la división final entre 2 que exige la fórmula del trapecio." },
      { text: "29 cm²", isCorrect: false, rationale: "Incorrecto. Se sumaron las medidas en lugar de aplicar la estructura de la fórmula." },
      { text: "70 cm²", isCorrect: false, rationale: "Incorrecto. Se multiplicaron bases sin promediar adecuadamente." },
    ],
  },
  {
    topic: "Problema Desafío Combinado",
    question: "Un terreno cuadrado tiene un perímetro total de 40 metros. ¿Cuál es el área de ese mismo terreno expresada en metros cuadrados (m²)?",
    options: [
      { text: "100 m²", isCorrect: true, rationale: "¡Genial! Como es un cuadrado de perímetro 40 m, cada uno de sus 4 lados iguales mide 40 ÷ 4 = 10 metros. El área es el lado multiplicado por sí mismo: 10 × 10 = 100 metros cuadrados." },
      { text: "40 m²", isCorrect: false, rationale: "Incorrecto. Se confundió numéricamente la cantidad de perímetro con la de área." },
      { text: "160 m²", isCorrect: false, rationale: "Incorrecto. Se calculó el perímetro multiplicado por cuatro, lo cual es incorrecto." },
      { text: "16 m²", isCorrect: false, rationale: "Incorrecto. Cálculo erróneo de la medida del lado del terreno cuadrado." },
    ],
  },
];
