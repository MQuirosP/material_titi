// =====================================================
// BANCO DE PREGUNTAS: QUIZ PRÁCTICO Y DE EJERCICIOS (5° GRADO)
// Ejercicios aplicados del material fotográfico de estudio oficial:
// Casos de lectura, Fábula de Esopo, Leyenda de La Tule Vieja,
// Análisis de oraciones, Fichas de cita textual y Refranes costarricenses.
// =====================================================

export const quizPracticoEspanol = [
  // --- CASOS DE COMPRENSIÓN LECTORA Y FORMATOS ---
  {
    topic: "Práctica de Comprensión",
    question: "Lee el siguiente fragmento: 'El colibrí es una de las aves más pequeñas del mundo. Sus alas baten hasta 80 veces por segundo, lo que le permite mantenerse suspendido en el aire y alimentarse del néctar de las flores'. ¿Cuál es la idea principal?",
    options: [
      { text: "El colibrí es un ave diminuta cuyas alas le permiten suspenderse para alimentarse.", isCorrect: true, rationale: "¡Correcto! Resume el núcleo del texto: la característica esencial del colibrí y su vuelo." },
      { text: "Las flores tienen néctar delicioso en los jardines.", isCorrect: false, rationale: "Es un detalle secundario sobre su alimentación." },
      { text: "El número 80 es un múltiplo par.", isCorrect: false, rationale: "Eso es un dato numérico matemático secundario dentro de la lectura." },
      { text: "Todas las aves del mundo comen exactamente lo mismo.", isCorrect: false, rationale: "El texto solo habla del colibrí." }
    ]
  },
  {
    topic: "Formatos de Texto",
    question: "En la biblioteca de la escuela te entregan: 1) Un cuento de Carmen Lyra, 2) Una gráfica de barras con las ventas de frutas de la soda, y 3) Un folleto con fotos y tablas de parques nacionales. ¿A qué formato corresponde cada uno?",
    options: [
      { text: "1) Continuo, 2) Discontinuo, 3) Mixto.", isCorrect: true, rationale: "¡Exacto! El cuento es prosa lineal (continuo), la gráfica es visual (discontinuo) y el folleto combina ambos (mixto)." },
      { text: "1) Discontinuo, 2) Continuo, 3) Monótono.", isCorrect: false, rationale: "El cuento es continuo y la gráfica es discontinua." },
      { text: "1) Ficha textual, 2) Adivinanza, 3) Bomba.", isCorrect: false, rationale: "Son formatos textuales, no géneros folclóricos." },
      { text: "Los tres son exactamente textos continuos.", isCorrect: false, rationale: "Poseen estructuras visuales y organizativas distintas." }
    ]
  },

  // --- ANÁLISIS DE LA FÁBULA DE ESOPO ("El murciélago y las comadrejas") ---
  {
    topic: "Análisis de Fábulas",
    question: "En la fábula de Esopo, un murciélago cae en el nido de una comadreja que odia a las aves. El murciélago le dice que él es un ratón y se salva. Luego cae en otra que odia a los ratones, y dice que es un ave. ¿Qué valor o moraleja práctica demuestra el murciélago?",
    options: [
      { text: "La inteligencia y la prudencia para adaptarse a las circunstancias salvan la vida ante el peligro.", isCorrect: true, rationale: "¡Excelente! La moraleja de Esopo resalta que la astucia e ingenio permiten superar situaciones difíciles." },
      { text: "Que los ratones y las aves deben pelear siempre en el bosque.", isCorrect: false, rationale: "La fábula busca transmitir una lección de supervivencia e inteligencia, no de conflicto." },
      { text: "Que las comadrejas son animales herbívoros.", isCorrect: false, rationale: "En la fábula representan peligros a superar mediante la razón." },
      { text: "Que los murciélagos deben salir únicamente de día.", isCorrect: false, rationale: "El murciélago usó su ingenio verbal para no ser devorado." }
    ]
  },
  {
    topic: "Análisis de Fábulas",
    question: "¿Por qué el relato de 'El murciélago y las comadrejas' es catalogado formalmente como una fábula y no como un cuento histórico?",
    options: [
      { text: "Porque sus personajes son animales con virtudes humanas que dejan una moraleja pedagógica explícita.", isCorrect: true, rationale: "¡Muy bien! Cumple con la personificación de animales y el propósito moralizante propio de la fábula." },
      { text: "Porque está escrito en inglés y traducido con diccionario bilingüe.", isCorrect: false, rationale: "El idioma no define el género literario." },
      { text: "Porque no tiene ningún personaje y solo describe paisajes.", isCorrect: false, rationale: "Presenta personajes animales activos en interacción dramática." },
      { text: "Porque contiene una lista de compras de pulpería.", isCorrect: false, rationale: "Es una pieza narrativa de la literatura clásica universal." }
    ]
  },

  // --- ANÁLISIS DE LEYENDAS COSTARRICENSES ("La Tule Vieja") ---
  {
    topic: "Leyendas Costarricenses",
    question: "En la tradición oral costarricense, 'La Tule Vieja' es un personaje que vaga llorando por los ríos con un sombrero de tule y patas de gavilán. ¿Qué elemento característico de la leyenda popular cumple este relato?",
    options: [
      { text: "Es una creencia tradicional transmitida oralmente que advierte sobre la desobediencia mediante elementos sobrenaturales.", isCorrect: true, rationale: "¡Brillante! Las leyendas ticas como La Tule Vieja combinan folclore, misterio y advertencias comunitarias." },
      { text: "Es un artículo científico publicado en una revista médica de trasplantes.", isCorrect: false, rationale: "Es una leyenda tradicional folclórica, no un estudio médico." },
      { text: "Es una bomba guanacasteca que rima en cuatro versos.", isCorrect: false, rationale: "Es una leyenda narrativa en prosa, no un cuarteto folclórico." },
      { text: "Es una ficha de cita textual escrita por Don Pepe Figueres.", isCorrect: false, rationale: "Don Pepe fue un líder político; La Tule Vieja es una figura mítica popular." }
    ]
  },

  // --- PRÁCTICA DE ORACIONES: ACTITUD DEL HABLANTE ---
  {
    topic: "Clasificación de Oraciones",
    question: "Clasifica la oración: '¡Qué impresionante estuvo la obra de teatro en el auditorio!'",
    options: [
      { text: "Exclamativa", isCorrect: true, rationale: "¡Correcto! Manifiesta asombro y emoción viva, reforzada por los signos de exclamación (¡!)." },
      { text: "Dubitativa", isCorrect: false, rationale: "No expresa duda; expresa entusiasmo seguro." },
      { text: "Desiderativa", isCorrect: false, rationale: "No expresa un anhelo futuro con 'ojalá'." },
      { text: "Enunciativa negativa", isCorrect: false, rationale: "No niega ningún suceso." }
    ]
  },
  {
    topic: "Clasificación de Oraciones",
    question: "Clasifica la oración: 'Jamás volveré a dejar la tarea para el último día.'",
    options: [
      { text: "Enunciativa Negativa", isCorrect: true, rationale: "¡Exacto! El término 'Jamás' niega categóricamente la realización de la acción." },
      { text: "Interrogativa", isCorrect: false, rationale: "No plantea ninguna pregunta." },
      { text: "Imperativa", isCorrect: false, rationale: "Es una afirmación negativa de compromiso personal." },
      { text: "Dubitativa", isCorrect: false, rationale: "No duda, afirma con certeza la negación." }
    ]
  },
  {
    topic: "Clasificación de Oraciones",
    question: "Clasifica la oración: '¿A qué hora empieza el recreo en la Escuela Riojalandia?'",
    options: [
      { text: "Interrogativa", isCorrect: true, rationale: "¡Muy bien! Formula una pregunta directa delimitada por signos de interrogación (¿?)." },
      { text: "Exclamativa", isCorrect: false, rationale: "No expresa asombro, sino una solicitud de información." },
      { text: "Desiderativa", isCorrect: false, rationale: "No expresa un deseo con 'ojalá'." },
      { text: "Imperativa", isCorrect: false, rationale: "No es una orden, es una pregunta." }
    ]
  },
  {
    topic: "Clasificación de Oraciones",
    question: "Clasifica la oración: 'Ojalá mañana no llueva durante el desfile del 15 de setiembre.'",
    options: [
      { text: "Desiderativa", isCorrect: true, rationale: "¡Excelente! La palabra 'Ojalá' indica claramente un deseo ferviente del emisor." },
      { text: "Dubitativa", isCorrect: false, rationale: "Aunque hay incertidumbre meteorológica, la intención primaria es el deseo ('Ojalá')." },
      { text: "Imperativa", isCorrect: false, rationale: "No se le puede dar una orden a la lluvia." },
      { text: "Enunciativa afirmativa", isCorrect: false, rationale: "Comunica un anhelo del hablante." }
    ]
  },
  {
    topic: "Clasificación de Oraciones",
    question: "Clasifica la oración: 'Tal vez consigamos las entradas para el partido de fútbol el sábado.'",
    options: [
      { text: "Dubitativa", isCorrect: true, rationale: "¡Perfecto! El adverbio 'Tal vez' señala duda y probabilidad de que ocurra la acción." },
      { text: "Imperativa", isCorrect: false, rationale: "No transmite una instrucción u orden." },
      { text: "Exclamativa", isCorrect: false, rationale: "Su matiz primordial es la posibilidad incierta." },
      { text: "Enunciativa negativa", isCorrect: false, rationale: "No usa adverbios de negación." }
    ]
  },
  {
    topic: "Clasificación de Oraciones",
    question: "Clasifica la oración: 'Abran sus cuadernos de español y escriban la fecha de hoy.'",
    options: [
      { text: "Imperativa / Exhortativa", isCorrect: true, rationale: "¡Correcto! Comunica una orden o instrucción directa para guiar la conducta de los alumnos." },
      { text: "Desiderativa", isCorrect: false, rationale: "No expresa un anhelo con 'ojalá'." },
      { text: "Dubitativa", isCorrect: false, rationale: "Es una instrucción precisa y sin dudas." },
      { text: "Interrogativa", isCorrect: false, rationale: "No pregunta nada." }
    ]
  },
  {
    topic: "Clasificación de Oraciones",
    question: "Clasifica la oración: 'Los volcanes de Costa Rica atraen a miles de turistas cada año.'",
    options: [
      { text: "Enunciativa Afirmativa", isCorrect: true, rationale: "¡Muy bien! Informa un hecho objetivo de la realidad dándolo por cierto y confirmado." },
      { text: "Dubitativa", isCorrect: false, rationale: "No expresa duda ni usa 'tal vez'." },
      { text: "Exclamativa", isCorrect: false, rationale: "No tiene marcas de asombro enfático." },
      { text: "Imperativa", isCorrect: false, rationale: "No da ninguna orden al lector." }
    ]
  },

  // --- PRÁCTICA DE PARTES DEL LIBRO Y BIBLIOTECA ---
  {
    topic: "Partes del Libro",
    question: "Estás en la biblioteca y necesitas saber rápidamente en qué página está el capítulo 'Los Géneros Literarios'. ¿Qué parte interna del libro debes consultar?",
    options: [
      { text: "El índice", isCorrect: true, rationale: "¡Exacto! El índice lista los capítulos ordenados con su correspondiente número de página." },
      { text: "La contraportada", isCorrect: false, rationale: "La contraportada tiene una sinopsis general, no el desglose de páginas." },
      { text: "El glosario", isCorrect: false, rationale: "El glosario explica términos difíciles al final del libro." },
      { text: "El lomo", isCorrect: false, rationale: "El lomo solo muestra el título y autor en el estante." }
    ]
  },
  {
    topic: "Partes del Libro",
    question: "Al leer una novela encuentras la palabra técnica 'antropomorfo' y no sabes qué significa. Si buscas dentro del mismo libro, ¿dónde estará su definición?",
    options: [
      { text: "En el glosario al final del libro.", isCorrect: true, rationale: "¡Excelente! El glosario recopila y define el vocabulario especializado utilizado en la obra." },
      { text: "En la portada exterior.", isCorrect: false, rationale: "La portada solo contiene título, autor y editorial." },
      { text: "En el código de barras de la contraportada.", isCorrect: false, rationale: "El código de barras contiene el ISBN comercial." },
      { text: "En el prólogo del autor.", isCorrect: false, rationale: "El prólogo presenta la obra, no define palabras término por término." }
    ]
  },
  {
    topic: "Partes del Libro",
    question: "Quieres recomendarle un libro a tu mejor amiga leyéndole un resumen corto del argumento sin revelarle el final. ¿De dónde puedes leer esa reseña?",
    options: [
      { text: "De la sinopsis ubicada en la contraportada.", isCorrect: true, rationale: "¡Correcto! La contraportada ofrece un resumen motivador de la trama para atraer lectores." },
      { text: "Del índice de números de página.", isCorrect: false, rationale: "El índice solo muestra títulos de capítulos y números." },
      { text: "De la bibliografía de fuentes de consulta.", isCorrect: false, rationale: "La bibliografía lista libros y autores citados." },
      { text: "Del lomo del libro.", isCorrect: false, rationale: "El lomo no tiene espacio para sinopsis completas." }
    ]
  },
  {
    topic: "Partes del Libro",
    question: "¿En qué parte exterior del libro se apoyan los bibliotecarios para identificar rápidamente un libro cuando está ordenado verticalmente en un estante?",
    options: [
      { text: "En el lomo", isCorrect: true, rationale: "¡Muy bien! El lomo es el canto visible que exhibe el título y el apellido del autor en los estantes." },
      { text: "En el glosario", isCorrect: false, rationale: "El glosario está oculto dentro de las páginas interiores." },
      { text: "En el prólogo", isCorrect: false, rationale: "El prólogo es una sección interna." },
      { text: "En la hoja de dedicatoria", isCorrect: false, rationale: "Es una página interior no visible desde fuera." }
    ]
  },

  // --- SELECCIÓN DE DICCIONARIOS ADECUADOS ---
  {
    topic: "Uso de Diccionarios",
    question: "Estás redactando una redacción y ya escribiste la palabra 'hermoso' tres veces. Para no repetirla, ¿qué diccionario debes utilizar?",
    options: [
      { text: "Diccionario de sinónimos y antónimos (para cambiarla por 'bello', 'precioso' o 'lindo').", isCorrect: true, rationale: "¡Brillante! Este diccionario te provee palabras equivalentes para enriquecer tu estilo." },
      { text: "Diccionario bilingüe español-inglés.", isCorrect: false, rationale: "Ese te daría la traducción 'beautiful', pero tu redacción es en español." },
      { text: "Diccionario etimológico de raíces griegas.", isCorrect: false, rationale: "Ese explicaría el origen antiguo de la palabra, no sustitutos inmediatos." },
      { text: "Directorio de teléfonos de emergencias.", isCorrect: false, rationale: "Eso no es un recurso léxico." }
    ]
  },
  {
    topic: "Uso de Diccionarios",
    question: "La maestra de español te pide investigar de qué palabra en latín proviene la palabra 'escuela'. ¿Cuál es el diccionario específico para esta tarea?",
    options: [
      { text: "Diccionario etimológico", isCorrect: true, rationale: "¡Exacto! El diccionario etimológico estudia la historia, origen y raíces de las palabras." },
      { text: "Diccionario de antónimos", isCorrect: false, rationale: "Ese daría términos contrarios." },
      { text: "Diccionario geográfico escolar", isCorrect: false, rationale: "Ese describe ríos, montañas y provincias." },
      { text: "Índice de materias de ciencias", isCorrect: false, rationale: "Ese organiza temas de ciencias naturales." }
    ]
  },
  {
    topic: "Uso de Diccionarios",
    question: "Un estudiante necesita comprender qué es la fotosíntesis con esquemas, datos históricos y explicaciones científicas completas. Debe consultar:",
    options: [
      { text: "Una enciclopedia o diccionario enciclopédico.", isCorrect: true, rationale: "¡Correcto! Las enciclopedias ofrecen información amplia, detallada e ilustrada sobre cualquier tema del saber." },
      { text: "Un trabalenguas de la tradición oral.", isCorrect: false, rationale: "El trabalenguas es un juego de pronunciación." },
      { text: "Una ficha de cita textual de Don Pepe Figueres.", isCorrect: false, rationale: "Esa ficha registra historia política costarricense." },
      { text: "El lomo de un libro de matemáticas.", isCorrect: false, rationale: "El lomo solo rotula el libro." }
    ]
  },

  // --- FICHAS DE ESTUDIO: APLICACIÓN PRÁCTICA ---
  {
    topic: "Fichas de Estudio",
    question: "Observa la siguiente anotación de estudio: Lyra, Carmen. (1920). Cuentos de mi Tía Panchita: '—¡Upe! gritó Tío Conejo asomando las orejas'. (pág. 32). ¿Qué tipo de ficha es y por qué?",
    options: [
      { text: "Ficha de Cita Textual, porque copia fielmente las palabras entre comillas e indica la página exacta.", isCorrect: true, rationale: "¡Excelente! Cumple con la regla obligatoria: texto entre comillas (' ') y número de página de referencia." },
      { text: "Ficha de Síntesis, porque Carmen Lyra cambió las palabras del cuento.", isCorrect: false, rationale: "Es una copia textual directa entre comillas." },
      { text: "Ficha de Comentario, porque el estudiante da su opinión personal sobre Tío Conejo.", isCorrect: false, rationale: "No contiene opiniones, sino el texto literal original." },
      { text: "Ficha Biográfica de Don Pepe Figueres.", isCorrect: false, rationale: "Trata sobre un pasaje literario de Carmen Lyra." }
    ]
  },
  {
    topic: "Fichas de Estudio",
    question: "Si redactas una ficha donde explicas con tus propias palabras lo que comprendiste de un tema científico sin copiar ninguna oración del libro, has elaborado una:",
    options: [
      { text: "Ficha de Síntesis", isCorrect: true, rationale: "¡Muy bien! La síntesis utiliza el vocabulario y la interpretación propia del estudiante." },
      { text: "Ficha de Cita Textual", isCorrect: false, rationale: "La cita textual exige copiar idéntico con comillas." },
      { text: "Bomba guanacasteca", isCorrect: false, rationale: "Es una técnica de estudio, no un verso folclórico." },
      { text: "Portada de revista", isCorrect: false, rationale: "Es un instrumento de registro conceptual." }
    ]
  },
  {
    topic: "Fichas de Estudio",
    question: "En una ficha biográfica sobre Don José Figueres Ferrer, ¿cuál de los siguientes datos es históricamente correcto registrar?",
    options: [
      { text: "Fue Presidente de la República, abolió el ejército en 1948 e impulsó la creación del ICE y el voto femenino.", isCorrect: true, rationale: "¡Regla cívica fundamental! Resume los hitos más trascendentales de la vida cívica de Don Pepe." },
      { text: "Fue el autor de las fábulas de la liebre y la tortuga en la antigua Grecia.", isCorrect: false, rationale: "Ese fue el fabulista griego Esopo." },
      { text: "Escribió el diccionario de la lengua española en España.", isCorrect: false, rationale: "Eso lo realiza la Real Academia Española." },
      { text: "Descubrió las vacunas contra la viruela y la polio.", isCorrect: false, rationale: "Esos fueron Edward Jenner y Jonas Salk en ciencias." }
    ]
  },

  // --- REFRANES Y DICHOS COSTARRICENSES APLICADOS ---
  {
    topic: "Refranes Costarricenses",
    question: "Juan recibió un regalo de cumpleaños que no era del color que más le gustaba, pero su abuelita le recordó con cariño: 'A caballo regalado no se le mira el colmillo'. ¿Qué le quiso enseñar?",
    options: [
      { text: "Que se debe agradecer y valorar un obsequio recibido sin ponerle defectos ni quejas.", isCorrect: true, rationale: "¡Correcto! Enseña gratitud y cortesía ante cualquier detalle o regalo." },
      { text: "Que todos los caballos deben ser revisados por el veterinario.", isCorrect: false, rationale: "Es una interpretación literal errónea." },
      { text: "Que tiene que cambiar de regalo de inmediato.", isCorrect: false, rationale: "El refrán desaconseja criticar lo que se recibe gratuitamente." },
      { text: "Que debe comprar un caballo en una feria ganadera.", isCorrect: false, rationale: "Los refranes se interpretan figuradamente." }
    ]
  },
  {
    topic: "Refranes Costarricenses",
    question: "María tiene un examen difícil mañana y en vez de desanimarse o quejarse, sonríe y se pone a repasar con alegría diciendo: 'Al mal tiempo, buena cara'. Esto significa que:",
    options: [
      { text: "Frente a las dificultades o problemas se debe mantener una actitud positiva y optimista.", isCorrect: true, rationale: "¡Excelente! Exhorta a la resiliencia y buen ánimo ante los desafíos." },
      { text: "Que si está lloviendo hay que salir a mojarse sin paraguas.", isCorrect: false, rationale: "No refiere al clima real, sino al optimismo emocional." },
      { text: "Que no hace falta estudiar para los exámenes.", isCorrect: false, rationale: "Al contrario, anima a superar el reto con entusiasmo." },
      { text: "Que hay que maquillarse cuando haya tormenta.", isCorrect: false, rationale: "Es una metáfora de fortaleza mental." }
    ]
  },
  {
    topic: "Refranes Costarricenses",
    question: "Un agricultor decide asegurar la venta de su cosecha pequeña hoy mismo en vez de esperar una promesa incierta de vender el doble el próximo mes. El refrán que respalda su decisión es:",
    options: [
      { text: "'Más vale pájaro en mano que cien volando.'", isCorrect: true, rationale: "¡Exacto! Vale más tener una ganancia segura y tangible que arriesgarlo todo por promesas dudosas." },
      { text: "'El que con lobos anda, a aullar aprende.'", isCorrect: false, rationale: "Ese refrán advierte sobre la influencia de las malas compañías." },
      { text: "'Camarón que se duerme se lo lleva la corriente.'", isCorrect: false, rationale: "Ese advierte sobre la pereza o descuido." },
      { text: "'En boca cerrada no entran moscas.'", isCorrect: false, rationale: "Ese aconseja prudencia al hablar." }
    ]
  },
  {
    topic: "Refranes Costarricenses",
    question: "Si un compañero de clase empieza a juntarse con amigos que no hacen las tareas ni prestan atención y al poco tiempo él también deja de estudiar, el refrán que explica esta situación es:",
    options: [
      { text: "'El que con lobos anda, a aullar aprende.'", isCorrect: true, rationale: "¡Muy bien! Advierte que las costumbres y conductas del entorno cercano terminan imitándose." },
      { text: "'Coyol partido, coyol comido.'", isCorrect: false, rationale: "Ese alude al gasto impulsivo de dinero." },
      { text: "'Al mal tiempo buena cara.'", isCorrect: false, rationale: "Ese fomenta el optimismo ante la adversidad." },
      { text: "'A caballo regalado no se le mira el colmillo.'", isCorrect: false, rationale: "Ese aconseja agradecer los obsequios." }
    ]
  },
  {
    topic: "Dichos Costarricenses",
    question: "En Costa Rica, cuando decimos que un estudiante 'se puso las pilas' para el examen de español, significa que:",
    options: [
      { text: "Se esforzó con gran energía, dedicación y entusiasmo para estudiar.", isCorrect: true, rationale: "¡Pura vida! 'Ponerse las pilas' es una expresión típica que denota reactivación, esfuerzo y compromiso." },
      { text: "Compró baterías alcalinas en la pulpería.", isCorrect: false, rationale: "Es una frase en sentido figurado costarricense." },
      { text: "Tuvo un accidente con un aparato eléctrico.", isCorrect: false, rationale: "No alude a electricidad física." },
      { text: "Llegó tarde a la escuela.", isCorrect: false, rationale: "Significa todo lo contrario: actitud proactiva." }
    ]
  },
  {
    topic: "Dichos Costarricenses",
    question: "Si en una conversación alguien comete una equivocación vergonzosa o imprudente, en Costa Rica se dice popularmente que esa persona:",
    options: [
      { text: "'Metió la pata.'", isCorrect: true, rationale: "¡Correcto! 'Meter la pata' expresa coloquialmente cometer un error o imprudencia." },
      { text: "'La sacó del estadio.'", isCorrect: false, rationale: "'La sacó del estadio' significa realizar algo sobresaliente y genial." },
      { text: "'Está en la luna.'", isCorrect: false, rationale: "'Estar en la luna' alude a estar distraído." },
      { text: "'Habla hasta por los codos.'", isCorrect: false, rationale: "Eso significa hablar en exceso." }
    ]
  },
  {
    topic: "Dichos Costarricenses",
    question: "Cuando un objeto en una tienda tiene un precio sumamente elevado y exagerado, el dicho tico tradicional dice que:",
    options: [
      { text: "'Cuesta un ojo de la cara.'", isCorrect: true, rationale: "¡Exacto! Expresa que algo resulta sumamente costoso o difícil de pagar." },
      { text: "'Es pan comido.'", isCorrect: false, rationale: "'Pan comido' significa que es facilísimo." },
      { text: "'Tiró la toalla.'", isCorrect: false, rationale: "'Tirar la toalla' significa rendirse." },
      { text: "'Se durmió en los laureles.'", isCorrect: false, rationale: "Eso alude a confiarse en el éxito pasado." }
    ]
  },

  // --- BOMBAS GUANACASTECAS: MÉTRICA Y RIMA ---
  {
    topic: "Bombas Guanacastecas",
    question: "Completa la tradicional bomba folclórica: 'El amor de las mujeres / es como el café caliente, / cuando se enfría un poquito...'",
    options: [
      { text: "'ni el diablo le hinca el diente!'", isCorrect: true, rationale: "¡Uyuyuy bajura! Rima perfectamente con 'caliente' en la métrica tradicional guanacasteca." },
      { text: "'le ponemos más azúcar!'", isCorrect: false, rationale: "No rima con la estructura tradicional del verso." },
      { text: "'lo guardamos en la refrigeradora!'", isCorrect: false, rationale: "Rompe la métrica y la rima poética." },
      { text: "'vamos a comprar otro a la pulpería!'", isCorrect: false, rationale: "No rima con 'caliente'." }
    ]
  },
  {
    topic: "Bombas Guanacastecas",
    question: "Completa la copla tradicional: 'Ayer pasé por tu casa / y me tiraste un limón, / el limón cayó en el suelo...'",
    options: [
      { text: "'y el jugo en mi corazón!'", isCorrect: true, rationale: "¡Bomba! Rima consonantemente limón con corazón, expresando galantería y picardía criolla." },
      { text: "'y se lo comió mi perro!'", isCorrect: false, rationale: "No mantiene la rima poética en 'ón'." },
      { text: "'y me tuve que ir corriendo!'", isCorrect: false, rationale: "No rima con 'limón'." },
      { text: "'y me compré una naranja!'", isCorrect: false, rationale: "No respeta la consonancia tradicional." }
    ]
  },

  // --- ADIVINANZAS Y RETOS DE LENGUAJE ---
  {
    topic: "Adivinanzas Populares",
    question: "Adivina el acertijo: 'Tengo hojas y no soy árbol, tengo lomo y no soy caballo, te cuento mil aventuras aunque jamás hablo. ¿Quién soy?'",
    options: [
      { text: "El libro", isCorrect: true, rationale: "¡Brillante! Las hojas de papel, el lomo de encuadernación y las historias escritas describen poéticamente al libro." },
      { text: "Un árbol de guanacaste", isCorrect: false, rationale: "El árbol no tiene lomo ni historias escritas." },
      { text: "Una bicicleta", isCorrect: false, rationale: "No tiene hojas ni cuenta aventuras escritas." },
      { text: "Un caballo de carreras", isCorrect: false, rationale: "El caballo no tiene hojas de papel." }
    ]
  },
  {
    topic: "Adivinanzas Populares",
    question: "Adivina el acertijo: 'Habla y no tiene boca, oye y no tiene oído, es chiquito y hace ruido, muchas veces se equivoca. ¿Quién soy?'",
    options: [
      { text: "El teléfono", isCorrect: true, rationale: "¡Exacto! Transmite la voz (habla), recibe sonidos (oye) y timbra (hace ruido)." },
      { text: "Una pulpería", isCorrect: false, rationale: "Una pulpería es un establecimiento comercial." },
      { text: "Un diccionario etimológico", isCorrect: false, rationale: "El diccionario es un libro impreso." },
      { text: "Un volcán activo", isCorrect: false, rationale: "El volcán no transmite conversaciones." }
    ]
  },
  {
    topic: "Trabalenguas",
    question: "Lee con atención: 'Tres tristes tigres tragaban trigo en un trigal'. ¿Qué fonema consonántico semejante se repite para desafiar la agilidad y dicción lingual?",
    options: [
      { text: "La combinación 'Tr' y el fonema 'T'.", isCorrect: true, rationale: "¡Correcto! La aliteración del grupo consonántico 'Tr' genera la dificultad articulatoria que ejercita la dicción." },
      { text: "La vocal 'U' y el sonido 'Z'.", isCorrect: false, rationale: "Esos sonidos no aparecen en el trabalenguas." },
      { text: "El número 3 escrito en colones.", isCorrect: false, rationale: "Es un reto fonético oral, no monetario." },
      { text: "Las comillas de la cita textual.", isCorrect: false, rationale: "Es un juego oral tradicional." }
    ]
  },
  {
    topic: "Estructura del Párrafo",
    question: "Observa este párrafo: 'El volcán Arenal es muy visitado. Los turistas disfrutan las aguas termales. Ayer comí gallopinto. La vista de la montaña es majestuosa'. ¿Qué error de coherencia presenta?",
    options: [
      { text: "Incluye una oración ajena al tema central ('Ayer comí gallopinto') que rompe la unidad y coherencia temática.", isCorrect: true, rationale: "¡Regla de redacción! Cada párrafo debe desarrollar una sola idea central coherente; oraciones no relacionadas deben eliminarse." },
      { text: "No tiene ningún error porque el gallopinto es comida típica.", isCorrect: false, rationale: "Aunque sea típico, rompe la coherencia temática sobre el volcán Arenal." },
      { text: "Debió escribirse en verso con rima obligatoria.", isCorrect: false, rationale: "Los párrafos expositivos se redactan en prosa." },
      { text: "Todas las palabras debían ir en mayúscula sostenida.", isCorrect: false, rationale: "Solo se usa mayúscula al inicio y en nombres propios." }
    ]
  }
];
