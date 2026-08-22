// =====================================================
// BANCO DE PREGUNTAS: QUIZ TEÓRICO DE ESPAÑOL (5° GRADO)
// Temas Oficiales: Comprensión lectora, Formatos textuales, Géneros literarios,
// Tradición oral, Partes del libro, Diccionarios, Técnicas de estudio, Fichas
// y Clasificación de oraciones por la intención del emisor.
// =====================================================

export const quizTeoricoEspanol = [
  // --- COMPRENSIÓN LECTORA Y ESTRUCTURA DEL TEXTO ---
  {
    topic: "Comprensión Lectora",
    question: "¿Qué es la idea principal en un texto?",
    options: [
      { text: "Es la información más importante que expresa el mensaje central del autor.", isCorrect: true, rationale: "¡Exacto! La idea principal resume el mensaje clave del texto; sin ella, el párrafo perdería su sentido central." },
      { text: "Son los ejemplos y comparaciones que adornan la lectura.", isCorrect: false, rationale: "Los ejemplos y detalles son ideas secundarias que complementan a la principal." },
      { text: "Es la primera palabra que aparece escrita en cada párrafo.", isCorrect: false, rationale: "La posición no define la idea principal; esta puede estar al inicio, en el centro o al final." },
      { text: "Es la lista de palabras difíciles que van en el glosario.", isCorrect: false, rationale: "El glosario reúne definiciones de términos difíciles, no la idea central del texto." }
    ]
  },
  {
    topic: "Comprensión Lectora",
    question: "¿Cuál es la función de las ideas secundarias en un párrafo?",
    options: [
      { text: "Ampliar, explicar, justificar y ejemplificar la idea principal.", isCorrect: true, rationale: "¡Correcto! Las ideas secundarias aportan detalles y argumentos que sustentan el mensaje principal." },
      { text: "Reemplazar por completo a la idea principal para que no haga falta leerla.", isCorrect: false, rationale: "Las ideas secundarias dependen de la idea principal y la complementan." },
      { text: "Indicar únicamente el número de página y la fecha de publicación.", isCorrect: false, rationale: "Esos son datos bibliográficos o editoriales." },
      { text: "Presentar siempre una moraleja con animales personificados.", isCorrect: false, rationale: "Esa es una característica de las fábulas, no de las ideas secundarias." }
    ]
  },
  {
    topic: "Estructura del Párrafo",
    question: "¿Qué elementos visuales y gramaticales delimitan formalmente a un párrafo?",
    options: [
      { text: "Inicia con sangría y letra mayúscula, y concluye con un punto y aparte.", isCorrect: true, rationale: "¡Excelente! La sangría inicial, la mayúscula y el punto y aparte son las marcas formales de un párrafo." },
      { text: "Inicia siempre con signos de interrogación y termina con dos puntos.", isCorrect: false, rationale: "Esos son signos de puntuación con funciones distintas." },
      { text: "Debe estar escrito obligatoriamente en verso con rima consonante.", isCorrect: false, rationale: "El verso es propio de la poesía; los párrafos se escriben en prosa." },
      { text: "Debe incluir comillas en todas sus oraciones sin excepción.", isCorrect: false, rationale: "Las comillas se reservan para citas textuales o palabras destacadas." }
    ]
  },

  // --- FORMATOS DE TEXTO ---
  {
    topic: "Formatos de Texto",
    question: "¿Qué caracteriza a los textos continuos?",
    options: [
      { text: "Están organizados en oraciones sucesivas que forman párrafos y capítulos en prosa lineal.", isCorrect: true, rationale: "¡Muy bien! Los textos continuos se leen secuencialmente de arriba a abajo, como novelas, cuentos, noticias y ensayos." },
      { text: "Presentan la información exclusivamente mediante gráficos de barras y mapas.", isCorrect: false, rationale: "Los gráficos y mapas corresponden a textos discontinuos." },
      { text: "Son textos infinitos que nunca tienen punto final.", isCorrect: false, rationale: "El término 'continuo' se refiere a su estructura hilada en párrafos, no a su extensión." },
      { text: "Son textos que solo contienen fórmulas matemáticas.", isCorrect: false, rationale: "Los textos continuos son de lectura en prosa." }
    ]
  },
  {
    topic: "Formatos de Texto",
    question: "Una infografía, un mapa de Costa Rica, un diagrama de flujo o una tabla de horarios son ejemplos de:",
    options: [
      { text: "Textos discontinuos", isCorrect: true, rationale: "¡Correcto! Los textos discontinuos organizan la información de manera visual y no lineal mediante cuadros, esquemas o mapas." },
      { text: "Textos continuos", isCorrect: false, rationale: "Los continuos usan párrafos seguidos en prosa." },
      { text: "Fábulas clásicas", isCorrect: false, rationale: "Las fábulas son relatos narrativos continuos de ficción." },
      { text: "Fichas de cita textual", isCorrect: false, rationale: "Las fichas son instrumentos de registro documental." }
    ]
  },
  {
    topic: "Formatos de Texto",
    question: "¿Cómo se define un texto mixto?",
    options: [
      { text: "Es aquel que combina párrafos en prosa con recursos gráficos, tablas o esquemas visuales.", isCorrect: true, rationale: "¡Exacto! Los textos mixtos integran elementos continuos (párrafos) y discontinuos (gráficos o tablas), como en revistas científicas o enciclopedias ilustradas." },
      { text: "Es un texto escrito en dos idiomas a la vez.", isCorrect: false, rationale: "Eso sería un texto bilingüe, no mixto en su formato." },
      { text: "Es un texto que mezcla poesía con canciones de cuna.", isCorrect: false, rationale: "El formato mixto refiere a la unión de prosa con componentes gráficos." },
      { text: "Es una carta que no tiene remitente ni destinatario.", isCorrect: false, rationale: "Esa es una carta anónima o incompleta." }
    ]
  },

  // --- GÉNEROS LITERARIOS ---
  {
    topic: "Géneros Literarios",
    question: "¿Cuál es la característica principal que diferencia a la fábula de otros relatos?",
    options: [
      { text: "Sus personajes suelen ser animales personificados y siempre concluye con una moraleja o enseñanza.", isCorrect: true, rationale: "¡Muy bien! Las fábulas personifican animales para transmitir una lección formativa clara al lector." },
      { text: "Es una novela de más de quinientas páginas dividida en muchos tomos.", isCorrect: false, rationale: "Las fábulas son narraciones breves y directas." },
      { text: "Narra únicamente hechos históricos reales sin elementos ficticios.", isCorrect: false, rationale: "La fábula utiliza la ficción alegórica para educar." },
      { text: "Es una composición de versos rimados que solo se baila con marimba.", isCorrect: false, rationale: "Esas son manifestaciones del folclore musical." }
    ]
  },
  {
    topic: "Géneros Literarios",
    question: "¿Qué es el cuento?",
    options: [
      { text: "Una narración breve de ficción con pocos personajes y un conflicto central que se resuelve al final.", isCorrect: true, rationale: "¡Excelente! El cuento se caracteriza por su brevedad, sencillez de trama y concentración dramática." },
      { text: "Un libro extenso con decenas de tramas entrelazadas y cientos de páginas.", isCorrect: false, rationale: "Esa es la descripción de una novela." },
      { text: "Una lista alfabética de palabras con sus significados.", isCorrect: false, rationale: "Eso es un diccionario o glosario." },
      { text: "Una noticia informativa sobre el estado del tiempo.", isCorrect: false, rationale: "La noticia es un texto periodístico no literario." }
    ]
  },
  {
    topic: "Géneros Literarios",
    question: "Un relato de tradición oral que combina hechos históricos y populares con elementos mágicos o misteriosos (como 'La Tule Vieja' o 'El Cadejos') es una:",
    options: [
      { text: "Leyenda", isCorrect: true, rationale: "¡Correcto! La leyenda mezcla la realidad popular y el folclore con elementos sobrenaturales transmitidos de generación en generación." },
      { text: "Noticia de periódico", isCorrect: false, rationale: "La noticia informa sucesos reales y objetivos de actualidad." },
      { text: "Ficha bibliográfica", isCorrect: false, rationale: "La ficha bibliográfica registra datos editoriales." },
      { text: "Adivinanza en rima", isCorrect: false, rationale: "La adivinanza es un acertijo con pistas." }
    ]
  },
  {
    topic: "Géneros Literarios",
    question: "¿Qué distingue a las obras del género dramático (teatro)?",
    options: [
      { text: "Están escritas en forma de diálogos entre personajes y acotaciones para ser representadas en un escenario.", isCorrect: true, rationale: "¡Brillante! El teatro se concibe para ser actuado frente a un público mediante parlamentos y directrices escénicas (acotaciones)." },
      { text: "Son textos sin diálogos que solo contienen definiciones científicas.", isCorrect: false, rationale: "Esos son textos expositivos o enciclopédicos." },
      { text: "Son relatos que nunca tienen desenlace ni actores.", isCorrect: false, rationale: "El drama culmina con una resolución de conflicto en escena." },
      { text: "Son poemas que solo se leen en silencio sin hablar.", isCorrect: false, rationale: "El teatro es esencialmente oral y escénico." }
    ]
  },

  // --- TRADICIÓN ORAL, FOLCLORE Y LENGUAJE FIGURADO ---
  {
    topic: "Tradición Popular",
    question: "¿Cuál es el propósito formativo principal de un trabalenguas?",
    options: [
      { text: "Ejercitar y mejorar la pronunciación, rapidez y dicción oral mediante combinaciones de sonidos similares.", isCorrect: true, rationale: "¡Exacto! El trabalenguas desafía la articulación de fonemas difíciles y entrena la agilidad lingüística." },
      { text: "Explicar el origen de las palabras en latín y griego.", isCorrect: false, rationale: "Esa es la función de los diccionarios etimológicos." },
      { text: "Enseñar a sumar números pares e impares.", isCorrect: false, rationale: "Eso corresponde a la materia de matemáticas." },
      { text: "Describir el resumen de un libro en una biblioteca.", isCorrect: false, rationale: "Eso es una ficha de resumen o sinopsis." }
    ]
  },
  {
    topic: "Tradición Popular",
    question: "¿Qué es una bomba guanacasteca en el folclore costarricense?",
    options: [
      { text: "Un cuarteto rimado de tono alegre, jocoso o romántico que se recita tradicionalmente durante bailes folclóricos.", isCorrect: true, rationale: "¡Pura vida! Las bombas son rimas pícaras y festivas que expresan la alegría de nuestra cultura guanacasteca." },
      { text: "Un artefacto de laboratorio para medir la presión arterial.", isCorrect: false, rationale: "Eso es un tensiómetro médico." },
      { text: "Un relato de terror que asusta a los niños por la noche.", isCorrect: false, rationale: "Esos son cuentos de espantos o leyendas tenebrosas." },
      { text: "Un resumen formal que se entrega al profesor de ciencias.", isCorrect: false, rationale: "Una bomba es una manifestación poética oral y folclórica." }
    ]
  },
  {
    topic: "Lenguaje Figurado",
    question: "¿Qué es un refrán?",
    options: [
      { text: "Una frase popular y tradicional que encierra una enseñanza moral o advertencia en sentido figurado.", isCorrect: true, rationale: "¡Muy bien! Los refranes sintetizan la sabiduría popular y no deben interpretarse de forma literal, sino figurada." },
      { text: "Una oración gramatical que siempre termina con signos de interrogación.", isCorrect: false, rationale: "Esas son oraciones interrogativas." },
      { text: "Un listado de precios de una pulpería.", isCorrect: false, rationale: "Eso es una factura o lista comercial." },
      { text: "El título de un capítulo en un índice de materias.", isCorrect: false, rationale: "Eso es una entrada de índice." }
    ]
  },
  {
    topic: "Lenguaje Figurado",
    question: "¿Cuál es el significado figurado del refrán 'En boca cerrada no entran moscas'?",
    options: [
      { text: "Es prudente callar y pensar antes de hablar para evitar meterse en problemas.", isCorrect: true, rationale: "¡Correcto! Enseña el valor de la discreción y la prudencia al comunicarse." },
      { text: "Que las personas deben comer con la boca tapada por higiene.", isCorrect: false, rationale: "Esa es una interpretación literal errónea." },
      { text: "Que los insectos prefieren las frutas dulces.", isCorrect: false, rationale: "No tiene que ver con biología, sino con conducta humana." },
      { text: "Que nunca debemos hablar con ningún compañero de clase.", isCorrect: false, rationale: "El refrán aconseja prudencia, no aislamiento total." }
    ]
  },
  {
    topic: "Lenguaje Figurado",
    question: "En Costa Rica, cuando una persona dice 'Coyol partido, coyol comido', se refiere a que:",
    options: [
      { text: "Gasta de inmediato el dinero o los recursos que recibe, sin ahorrar nada.", isCorrect: true, rationale: "¡Excelente! Refleja el hábito de consumir al instante lo que se gana sin prever el futuro." },
      { text: "Le encanta comer frutos secos todos los días.", isCorrect: false, rationale: "Los refranes se entienden en sentido metafórico, no culinario." },
      { text: "Tiene que sembrar palmeras de coyol en la escuela.", isCorrect: false, rationale: "Es un modismo sobre finanzas y hábitos personales." },
      { text: "Es una persona muy tímida que no habla con nadie.", isCorrect: false, rationale: "Alude al gasto inmediato de dinero." }
    ]
  },

  // --- ANATOMÍA DEL LIBRO: PARTES EXTERNAS ---
  {
    topic: "Partes del Libro",
    question: "¿Qué información fundamental contiene la portada de un libro?",
    options: [
      { text: "Título de la obra, nombre del autor, sello editorial y habitualmente una ilustración representativa.", isCorrect: true, rationale: "¡Exacto! La portada es la cara exterior principal que identifica y presenta formalmente el libro." },
      { text: "El número de teléfono de todos los lectores del país.", isCorrect: false, rationale: "La portada contiene datos oficiales de autoría y edición." },
      { text: "La lista completa de todos los sinónimos del idioma español.", isCorrect: false, rationale: "Eso corresponde a un diccionario de sinónimos." },
      { text: "El listado de notas de los estudiantes de la escuela.", isCorrect: false, rationale: "Eso es un registro de calificaciones escolares." }
    ]
  },
  {
    topic: "Partes del Libro",
    question: "¿Cuál es la función del lomo de un libro?",
    options: [
      { text: "Sujetar y unir todas las páginas del libro, mostrando título y autor para identificarlo en el estante.", isCorrect: true, rationale: "¡Correcto! El lomo es el canto que permite reconocer el libro cuando está colocado verticalmente en una biblioteca." },
      { text: "Servir como espejo para que el lector se peine antes de leer.", isCorrect: false, rationale: "El lomo tiene una función estructural y de identificación bibliotecaria." },
      { text: "Contener exclusivamente la lista de compras del autor.", isCorrect: false, rationale: "El lomo lleva los datos básicos de rotulación de la obra." },
      { text: "Proteger el libro contra el agua y la lluvia en el patio.", isCorrect: false, rationale: "El lomo une los cuadernillos de hojas." }
    ]
  },
  {
    topic: "Partes del Libro",
    question: "¿Qué elemento encontramos comúnmente en la contraportada de un libro?",
    options: [
      { text: "Una sinopsis o resumen general de la obra, comentarios críticos y el código de barras con ISBN.", isCorrect: true, rationale: "¡Muy bien! La contraportada ofrece al posible lector una vista previa del argumento para despertar su interés." },
      { text: "El texto completo de toda la novela en letras microscópicas.", isCorrect: false, rationale: "El contenido completo va en el cuerpo interior de la obra." },
      { text: "El índice general detallado con todos los números de página.", isCorrect: false, rationale: "El índice suele ubicarse en las páginas iniciales o finales del interior." },
      { text: "Una hoja en blanco donde el lector debe escribir su propio cuento.", isCorrect: false, rationale: "La contraportada forma parte de la cubierta exterior posterior." }
    ]
  },

  // --- ANATOMÍA DEL LIBRO: PARTES INTERNAS ---
  {
    topic: "Partes del Libro",
    question: "¿Qué es el prólogo de un libro?",
    options: [
      { text: "Un texto introductorio al inicio del libro que presenta la obra, sus objetivos o al propio autor.", isCorrect: true, rationale: "¡Excelente! El prólogo sitúa al lector y ofrece reflexiones previas sobre el contenido de la obra." },
      { text: "La última palabra del libro que dice 'Fin'.", isCorrect: false, rationale: "El prólogo se ubica al principio, antes del cuerpo principal." },
      { text: "El recibo de pago donde consta cuánto costó el libro en la librería.", isCorrect: false, rationale: "Eso es una factura comercial." },
      { text: "Un juego de acertijos para adivinar el final de la historia.", isCorrect: false, rationale: "El prólogo es una pieza ensayística o explicativa introductoria." }
    ]
  },
  {
    topic: "Partes del Libro",
    question: "¿Para qué sirve el índice en una obra bibliográfica?",
    options: [
      { text: "Para mostrar la lista ordenada de capítulos o temas y el número de página donde inicia cada uno.", isCorrect: true, rationale: "¡Correcto! El índice permite localizar rápidamente los contenidos sin tener que hojear todo el libro." },
      { text: "Para definir el significado de las palabras en otros idiomas.", isCorrect: false, rationale: "Eso lo realiza un diccionario bilingüe o glosario." },
      { text: "Para indicar cuántas faltas de ortografía cometió el escritor.", isCorrect: false, rationale: "El índice organiza estructuralmente los temas de la publicación." },
      { text: "Para escribir notas secretas entre los lectores.", isCorrect: false, rationale: "Es una tabla de contenido temática y paginada." }
    ]
  },
  {
    topic: "Partes del Libro",
    question: "¿Qué es el glosario y en qué parte del libro suele ubicarse?",
    options: [
      { text: "Es un pequeño diccionario al final del libro que define palabras técnicas o difíciles utilizadas en el texto.", isCorrect: true, rationale: "¡Exacto! El glosario aclara términos especializados o poco conocidos que aparecen en la obra." },
      { text: "Es el dibujo colorido que va en la portada del libro.", isCorrect: false, rationale: "Eso es la ilustración de cubierta." },
      { text: "Es la lista de agradecimientos a los familiares del autor.", isCorrect: false, rationale: "Esa es la dedicatoria o página de agradecimientos." },
      { text: "Es el lomo que une las hojas en la encuadernación.", isCorrect: false, rationale: "El glosario es una sección textual interna." }
    ]
  },
  {
    topic: "Partes del Libro",
    question: "¿Qué es la bibliografía de una obra?",
    options: [
      { text: "La lista organizada de libros, autores y documentos consultados para elaborar la investigación.", isCorrect: true, rationale: "¡Brillante! La bibliografía da crédito a las fuentes originales de información y permite profundizar el tema." },
      { text: "La biografía detallada de todos los estudiantes de la clase.", isCorrect: false, rationale: "La bibliografía cita fuentes documentales y libros de consulta." },
      { text: "El listado de erratas y manchas en las páginas.", isCorrect: false, rationale: "Es el registro riguroso de fuentes de consulta académica." },
      { text: "El precio sugerido de venta en colones.", isCorrect: false, rationale: "Eso es información de comercialización." }
    ]
  },

  // --- DICCIONARIOS Y FUENTES DE INFORMACIÓN ---
  {
    topic: "Diccionarios",
    question: "¿Qué tipo de diccionario debes consultar para encontrar palabras que signifiquen lo mismo o lo opuesto a un término?",
    options: [
      { text: "Diccionario de sinónimos y antónimos", isCorrect: true, rationale: "¡Excelente! Este diccionario ayuda a enriquecer la redacción evitando repeticiones innecesarias." },
      { text: "Diccionario bilingüe (ej. español-inglés)", isCorrect: false, rationale: "El bilingüe traduce términos entre dos idiomas distintos." },
      { text: "Diccionario etimológico", isCorrect: false, rationale: "El etimológico explica el origen histórico y evolución de las palabras." },
      { text: "Atlas geográfico escolar", isCorrect: false, rationale: "El atlas contiene mapas de países y regiones." }
    ]
  },
  {
    topic: "Diccionarios",
    question: "¿Qué función cumple un diccionario etimológico?",
    options: [
      { text: "Explica el origen histórico, las raíces griegas/latinas y la evolución de las palabras.", isCorrect: true, rationale: "¡Correcto! La etimología estudia de dónde provienen los vocablos y cómo se formaron a través de los siglos." },
      { text: "Traduce palabras del español al francés sin dar explicaciones.", isCorrect: false, rationale: "Eso lo realiza un diccionario bilingüe o multilingüe." },
      { text: "Contiene recetas de cocina típicas costarricenses.", isCorrect: false, rationale: "Eso es un recetario o libro gastronómico." },
      { text: "Ordena los números de teléfono de las instituciones públicas.", isCorrect: false, rationale: "Eso es un directorio telefónico institucional." }
    ]
  },
  {
    topic: "Diccionarios",
    question: "¿Para qué sirve un diccionario enciclopédico o enciclopedia temática?",
    options: [
      { text: "Ofrece información amplia, explicativa e ilustrada sobre conceptos, ciencia, historia y personajes ilustres.", isCorrect: true, rationale: "¡Muy bien! Las enciclopedias profundizan en conocimientos del saber humano con datos contextuales y gráficos." },
      { text: "Solo indica si una palabra se escribe con B o con V sin dar definiciones.", isCorrect: false, rationale: "Los diccionarios ortográficos o normativos son más concisos; la enciclopedia es exhaustiva y temática." },
      { text: "Es un folleto que contiene únicamente chistes y canciones infantiles.", isCorrect: false, rationale: "Una enciclopedia es una fuente académica de consulta." },
      { text: "Es un formulario de matrícula para la escuela.", isCorrect: false, rationale: "Es una obra de referencia educativa universal." }
    ]
  },

  // --- TÉCNICAS DE ESTUDIO: RESUMEN, SÍNTESIS Y MAPAS CONCEPTUALES ---
  {
    topic: "Técnicas de Estudio",
    question: "¿Cuál es la diferencia fundamental entre un resumen y una síntesis?",
    options: [
      { text: "El resumen condensa las ideas respetando las palabras del autor; la síntesis se redacta con palabras y análisis propios del estudiante.", isCorrect: true, rationale: "¡Regla de oro de examen! Resumen = fidelidad a las palabras del texto original; Síntesis = redacción personal explicativa." },
      { text: "El resumen siempre tiene mil páginas y la síntesis solo tres renglones.", isCorrect: false, rationale: "La diferencia radica en el lenguaje utilizado (palabras del autor vs palabras propias), no en un número fijo de hojas." },
      { text: "El resumen se hace dibujando y la síntesis cantando en voz alta.", isCorrect: false, rationale: "Ambas son técnicas formales de redacción y comprensión escrita." },
      { text: "No existe ninguna diferencia; son exactamente la misma palabra.", isCorrect: false, rationale: "Tienen enfoques metodológicos distintos en el estudio académico." }
    ]
  },
  {
    topic: "Técnicas de Estudio",
    question: "¿Cómo se organiza jerárquicamente un mapa conceptual?",
    options: [
      { text: "Los conceptos más generales e importantes van arriba, y los específicos abajo, unidos por líneas con palabras de enlace.", isCorrect: true, rationale: "¡Brillante! La estructura jerárquica vertical con conectores facilita la asimilación visual de relaciones conceptuales." },
      { text: "Se colocan todos los textos en desorden sin líneas ni jerarquías.", isCorrect: false, rationale: "Un mapa conceptual requiere jerarquía lógica y conectores claros." },
      { text: "Se escriben únicamente números pares dentro de círculos de colores.", isCorrect: false, rationale: "Contiene conceptos y proposiciones lingüísticas." },
      { text: "Es un plano de calles para llegar a la Escuela Riojalandia.", isCorrect: false, rationale: "Eso es un mapa geográfico o croquis vial." }
    ]
  },

  // --- FICHAS DE ESTUDIO Y REGISTRO ---
  {
    topic: "Fichas de Estudio",
    question: "¿Qué elementos son obligatorios e indispensables en una ficha de cita textual?",
    options: [
      { text: "Copiar el texto exactamente entre comillas (' '), e indicar el autor, título y número de página de referencia.", isCorrect: true, rationale: "¡Fundamental! La cita textual transcribe palabra por palabra entre comillas para respetar el derecho de autor e indicar su ubicación exacta." },
      { text: "Inventar un final diferente y no poner el nombre del autor.", isCorrect: false, rationale: "Eso alteraría el texto y cometería plagio." },
      { text: "Escribir con lápiz de color verde sin comillas ni números.", isCorrect: false, rationale: "Las normas de citación exigen comillas y referencia de página." },
      { text: "Pegar una fotografía del lector en la esquina superior.", isCorrect: false, rationale: "Los datos obligatorios son autor, obra, comillas y página." }
    ]
  },
  {
    topic: "Fichas de Estudio",
    question: "¿Qué contiene una ficha de comentario?",
    options: [
      { text: "Las opiniones personales, juicios críticos y reflexiones del estudiante sobre el texto leído.", isCorrect: true, rationale: "¡Exacto! La ficha de comentario plasma la valoración y el análisis propio del lector." },
      { text: "La copia literal sin comillas de todo un libro de la biblioteca.", isCorrect: false, rationale: "Eso sería una transcripción incompleta sin valor crítico." },
      { text: "El horario de clases de lunes a viernes de la escuela.", isCorrect: false, rationale: "Eso es un horario escolar." },
      { text: "Un comprobante de pago de la pulpería.", isCorrect: false, rationale: "Es una herramienta pedagógica de registro reflexivo." }
    ]
  },
  {
    topic: "Fichas de Estudio",
    question: "En una ficha biográfica sobre Don José Figueres Ferrer ('Don Pepe'), ¿cuál de los siguientes aportes históricos debe destacarse en 1948?",
    options: [
      { text: "La abolición del ejército de Costa Rica en el Cuartel Bellavista.", isCorrect: true, rationale: "¡Dato cívico clave! Don Pepe abolió el ejército el 1 de diciembre de 1948, transformando el cuartel en el Museo Nacional." },
      { text: "El descubrimiento de América en tres carabelas.", isCorrect: false, rationale: "Eso ocurrió en 1492 con Cristóbal Colón." },
      { text: "La redacción de las fábulas clásicas de Esopo en Grecia.", isCorrect: false, rationale: "Esopo vivió en la antigua Grecia." },
      { text: "La construcción del ferrocarril en la época colonial española.", isCorrect: false, rationale: "Eso corresponde a otros períodos de la historia patria." }
    ]
  },
  {
    topic: "Fichas de Estudio",
    question: "Además de la abolición del ejército, ¿cuáles instituciones y derechos fundamentales se asocian al legado de Don Pepe Figueres?",
    options: [
      { text: "La creación del Instituto Costarricense de Electricidad (ICE) y la consagración constitucional del voto femenino.", isCorrect: true, rationale: "¡Excelente! Don Pepe impulsó la electrificación nacional (ICE), el Banco Central y los plenos derechos cívicos a las mujeres costarricenses en 1949." },
      { text: "La invención de la imprenta de tipos móviles y el teléfono celular.", isCorrect: false, rationale: "Esos son inventos tecnológicos universales de otras épocas." },
      { text: "La construcción de las pirámides mayas en Centroamérica.", isCorrect: false, rationale: "Eso corresponde a las civilizaciones precolombinas." },
      { text: "La fundación del Sistema Monetario en euros europeos.", isCorrect: false, rationale: "Nuestra moneda es el colón costarricense." }
    ]
  },

  // --- CLASIFICACIÓN DE ORACIONES POR LA INTENCIÓN DEL EMISOR ---
  {
    topic: "Clases de Oraciones",
    question: "¿Qué expresa una oración enunciativa afirmativa?",
    options: [
      { text: "Informa sobre un hecho, suceso o idea dándolo por cierto y confirmado.", isCorrect: true, rationale: "¡Muy bien! Las enunciativas afirmativas comunican información certera (ej. 'Mañana tenemos examen de español.')." },
      { text: "Expresa una orden tajante o un mandato al oyente.", isCorrect: false, rationale: "Esas son oraciones imperativas." },
      { text: "Plantea una duda con palabras como 'tal vez'.", isCorrect: false, rationale: "Esas son oraciones dubitativas." },
      { text: "Formula una pregunta entre signos de interrogación.", isCorrect: false, rationale: "Esas son oraciones interrogativas." }
    ]
  },
  {
    topic: "Clases de Oraciones",
    question: "¿Cómo se reconoce una oración enunciativa negativa?",
    options: [
      { text: "Informa un hecho negándolo mediante palabras como 'no', 'nunca', 'jamás' o 'tampoco'.", isCorrect: true, rationale: "¡Correcto! Niega la realización de una acción (ej. 'No olvidé traer la ficha de estudio.')." },
      { text: "Lleva signos de admiración y gritos de sorpresa.", isCorrect: false, rationale: "Esas son oraciones exclamativas." },
      { text: "Expresa un ruego afectuoso a la maestra.", isCorrect: false, rationale: "Esas son oraciones exhortativas o imperativas." },
      { text: "Lleva palabras que expresan anhelos como 'ojalá'.", isCorrect: false, rationale: "Esas son oraciones desiderativas." }
    ]
  },
  {
    topic: "Clases de Oraciones",
    question: "La oración '¡Ojalá todos los estudiantes de 5º saquen una nota de 100!' se clasifica como:",
    options: [
      { text: "Desiderativa (expresa un deseo o anhelo).", isCorrect: true, rationale: "¡Excelente! La palabra 'Ojalá' y el contenido anhelante definen inequívocamente a la oración desiderativa." },
      { text: "Dubitativa (expresa una duda o incertidumbre).", isCorrect: false, rationale: "Las dubitativas usan términos de duda como 'quizá' o 'tal vez'." },
      { text: "Imperativa (da una orden estricta).", isCorrect: false, rationale: "No ordena nada; expresa un anhelo sincero." },
      { text: "Enunciativa negativa (niega una afirmación).", isCorrect: false, rationale: "No contiene adverbios de negación." }
    ]
  },
  {
    topic: "Clases de Oraciones",
    question: "La oración 'Quizás visitemos el volcán Poás durante las vacaciones' se clasifica como:",
    options: [
      { text: "Dubitativa (expresa duda, probabilidad o incertidumbre).", isCorrect: true, rationale: "¡Perfecto! Palabras como 'quizás', 'tal vez', 'acaso' o 'a lo mejor' marcan la actitud dubitativa." },
      { text: "Imperativa (da un mandato militar).", isCorrect: false, rationale: "No es una orden, sino una posibilidad incierta." },
      { text: "Exclamativa (grito de emoción sin verbo).", isCorrect: false, rationale: "Su rasgo central es la incertidumbre de la acción." },
      { text: "Desiderativa (deseo expreso con 'ojalá').", isCorrect: false, rationale: "Expresa probabilidad, no un deseo enfático con 'ojalá'." }
    ]
  },
  {
    topic: "Clases de Oraciones",
    question: "La oración 'Por favor, guarden silencio y abran el libro en la página 20' es:",
    options: [
      { text: "Imperativa o Exhortativa (transmite un ruego, orden o instrucción).", isCorrect: true, rationale: "¡Exacto! Las oraciones imperativas/exhortativas buscan influir en la conducta del oyente mediante instrucciones, ruegos u órdenes." },
      { text: "Dubitativa (no sabe qué página abrir).", isCorrect: false, rationale: "Da una indicación clara y directa." },
      { text: "Interrogativa directa (pregunta cuál libro abrir).", isCorrect: false, rationale: "No formula una consulta, sino una instrucción." },
      { text: "Enunciativa negativa (prohíbe abrir el libro).", isCorrect: false, rationale: "Solicita abrir el libro de forma afirmativa y respetuosa." }
    ]
  }
];
