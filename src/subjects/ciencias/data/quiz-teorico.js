/** Banco de preguntas: Examen Teórico de Ciencias (20 preguntas) */
export const quizTeoricoCiencias = [
    {
        topic: "Sistema Urinario",
        question: "¿Cuál es la función principal del sistema urinario en el cuerpo humano?",
        options: [
            { text: "Filtrar la sangre para eliminar desechos líquidos celulares en forma de orina.", isCorrect: true, rationale: "¡Correcto! Es el sistema encargado de filtrar impurezas líquidas en el plasma sanguíneo." },
            { text: "Llevar oxígeno a los músculos corporales activos.", isCorrect: false, rationale: "Incorrecto. Esa es la función del sistema circulatorio." },
            { text: "Digerir la comida de forma química en el estómago.", isCorrect: false, rationale: "Incorrecto. De eso se encarga el sistema digestivo." }
        ]
    },
    {
        topic: "Anatomía Renal",
        question: "¿Qué órganos se encargan de filtrar la sangre y formar la orina?",
        options: [
            { text: "Los riñones", isCorrect: true, rationale: "¡Exacto! Los dos riñones actúan como coladores que purifican la sangre." },
            { text: "Los pulmones", isCorrect: false, rationale: "Los pulmones procesan e intercambian gases, no filtran fluidos corporales líquidos." },
            { text: "Los uréteres", isCorrect: false, rationale: "Los uréteres son conductos que transportan el líquido ya formado, no purifican la sangre." }
        ]
    },
    {
        topic: "Conductos Urinarios",
        question: "¿Cuál es la función de los uréteres?",
        options: [
            { text: "Conducir la orina desde los riñones hacia la vejiga.", isCorrect: true, rationale: "¡Perfecto! Son dos tubos delgados que conectan ambos órganos." },
            { text: "Almacenar la orina temporalmente.", isCorrect: false, rationale: "La orina se acumula y almacena en la vejiga urinaria." },
            { text: "Eliminar el sudor sobrante de la piel.", isCorrect: false, rationale: "El sudor es expulsado mediante glándulas sudoríparas en la epidermis." }
        ]
    },
    {
        topic: "Almacenamiento de Orina",
        question: "¿Qué órgano muscular elástico tiene la función de acumular y almacenar la orina?",
        options: [
            { text: "La vejiga urinaria", isCorrect: true, rationale: "¡Excelente! Funciona como una bolsa que se expande conforme recibe fluidos." },
            { text: "La uretra", isCorrect: false, rationale: "La uretra descarga el líquido hacia el exterior, no lo retiene." },
            { text: "La nefrona", isCorrect: false, rationale: "La nefrona es la unidad microscópica de filtrado dentro del riñón." }
        ]
    },
    {
        topic: "Conducto de Salida",
        question: "¿Mediante qué conducto se expulsa finalmente la orina hacia el exterior?",
        options: [
            { text: "La uretra", isCorrect: true, rationale: "¡Correcto! Es el tramo terminal del sistema urinario." },
            { text: "La arteria renal", isCorrect: false, rationale: "Las arterias conducen sangre hacia el interior de los riñones." },
            { text: "El uréter", isCorrect: false, rationale: "Los uréteres están situados arriba de la vejiga." }
        ]
    },
    {
        topic: "Proceso de Excreción",
        question: "¿Cómo se define el proceso de excreción?",
        options: [
            { text: "La eliminación de toxinas y desechos metabólicos producidos por las células.", isCorrect: true, rationale: "¡Así es! Limpia el cuerpo para mantenerlo en correcto equilibrio químico." },
            { text: "La digestión y degradación de carbohidratos.", isCorrect: false, rationale: "Esa es la fase digestiva." },
            { text: "Inhalar oxígeno fresco del ambiente.", isCorrect: false, rationale: "Eso corresponde a la ventilación." }
        ]
    },
    {
        topic: "Excreción Cutánea",
        question: "Además de los riñones, ¿cuál órgano participa activamente en la excreción de sales mediante el sudor?",
        options: [
            { text: "La piel", isCorrect: true, rationale: "¡Muy bien! Las glándulas sudoríparas purifican expulsando toxinas diluidas en agua." },
            { text: "Los huesos", isCorrect: false, rationale: "Los huesos brindan soporte esquelético, no sudan." },
            { text: "El músculo esquelético", isCorrect: false, rationale: "El sistema muscular produce calor y movimiento corporal." }
        ]
    },
    {
        topic: "Interrelación de Sistemas",
        question: "¿Qué sistema entrega la sangre cargada de desechos a los riñones para su filtrado?",
        options: [
            { text: "El sistema circulatorio", isCorrect: true, rationale: "¡Exacto! El sistema circulatorio transporta el flujo por las arterias renales." },
            { text: "El sistema locomotor", isCorrect: false, rationale: "El sistema locomotor brinda estabilidad y movimiento muscular." },
            { text: "El sistema respiratorio", isCorrect: false, rationale: "El respiratorio oxigena la sangre, pero no la filtra de desechos líquidos." }
        ]
    },
    {
        topic: "Interrelación de Sistemas",
        question: "El sistema respiratorio colabora con la excreción eliminando de forma gaseosa:",
        options: [
            { text: "El dióxido de carbono.", isCorrect: true, rationale: "¡Perfecto! Es un desecho metabólico gaseoso eliminado al exhalar." },
            { text: "El oxígeno puro.", isCorrect: false, rationale: "El oxígeno se asimila; no se expulsa como residuo celular." },
            { text: "El nitrógeno.", isCorrect: false, rationale: "El nitrógeno del aire ingresa y sale sin transformarse en residuo celular." }
        ]
    },
    {
        topic: "Avances Médicos",
        question: "¿Cuál es el propósito principal de aplicar vacunas preventivas?",
        options: [
            { text: "Enseñar al sistema inmunológico a crear anticuerpos antes de contraer el virus o bacteria.", isCorrect: true, rationale: "¡Excelente! Preparan defensas biológicas previniendo brotes y contagios." },
            { text: "Sanar un dolor de muela inmediato.", isCorrect: false, rationale: "Ese es el rol de un analgésico." },
            { text: "Tomar radiografías del interior de los órganos.", isCorrect: false, rationale: "No. Eso es un método de diagnóstico por imagen." }
        ]
    },
    {
        topic: "Avances Médicos",
        question: "¿Para qué sirven específicamente los antibióticos?",
        options: [
            { text: "Para combatir infecciones de forma exclusiva ocasionadas por bacterias.", isCorrect: true, rationale: "¡Muy bien! Destruyen bacterias específicas. Recuerda que no actúan contra virus." },
            { text: "Para curar la gripe común y el resfriado.", isCorrect: false, rationale: "Falso. Los resfriados son de origen viral; los antibióticos no ejercen efecto sobre virus." },
            { text: "Para soldar quebraduras en los brazos.", isCorrect: false, rationale: "Las quebraduras sanan inmovilizando los huesos mediante yeso." }
        ]
    },
    {
        topic: "Tecnología Médica",
        question: "¿Qué avance tecnológico médico toma imágenes duras usando radiación electromagnética?",
        options: [
            { text: "Los Rayos X", isCorrect: true, rationale: "¡Exacto! Permiten ver el estado de los huesos sin necesidad de cirugía." },
            { text: "Los ultrasonidos pélvicos", isCorrect: false, rationale: "Los ultrasonidos emplean ondas sonoras de eco, no radiación de Rayos X." },
            { text: "Los trasplantes", isCorrect: false, rationale: "Consisten en cirugías de reemplazo orgánico." }
        ]
    },
    {
        topic: "Tecnología Médica",
        question: "¿En qué consiste un trasplante de órganos?",
        options: [
            { text: "En sustituir quirúrgicamente un órgano enfermo por uno totalmente sano de un donante compatible.", isCorrect: true, rationale: "¡Brillante! Es un avance quirúrgico complejo que salva vidas." },
            { text: "En aplicar vacunas en los centros escolares.", isCorrect: false, rationale: "Eso es vacunación preventiva básica." },
            { text: "En realizar un examen visual de la retina.", isCorrect: false, rationale: "Eso es un examen oftalmológico." }
        ]
    },
    {
        topic: "Implicaciones Éticas",
        question: "¿Qué busca garantizar la bioética en la experimentación con animales de laboratorio?",
        options: [
            { text: "Asegurar el trato humano, digno y prohibir causar sufrimiento o dolor innecesario.", isCorrect: true, rationale: "¡Perfecto! La ciencia avanza respetando la vida de los seres sensibles." },
            { text: "Disminuir los costos de los reactivos químicos.", isCorrect: false, rationale: "La ética vigila valores morales, no el ahorro de dinero." },
            { text: "Acelerar la comercialización rápida de cosméticos.", isCorrect: false, rationale: "La ética busca evaluar la seguridad con el menor daño posible." }
        ]
    },
    {
        topic: "Biodiversidad",
        question: "Qué define conceptualmente el término biodiversidad?",
        options: [
            { text: "La gran variedad y abundancia de distintas formas de vida en un territorio.", isCorrect: true, rationale: "¡Excelente! 'Bio' significa vida y 'diversidad' variedad." },
            { text: "El porcentaje de agua dulce en los glaciares.", isCorrect: false, rationale: "Eso pertenece a la hidrografía." },
            { text: "La clasificación mineral de los cristales terrestres.", isCorrect: false, rationale: "Eso corresponde a la geología." }
        ]
    },
    {
        topic: "Biodiversidad",
        question: "Clasificar a los animales según sus rasgos físicos observables:",
        options: [
            { text: "Permite identificarlos, comprender sus necesidades y planificar su conservación.", isCorrect: true, rationale: "¡Exacto! Ordenar las especies facilita proteger sus hábitats y estudiar su biología." },
            { text: "Ayuda a domesticar especies salvajes para zoológicos privados.", isCorrect: false, rationale: "La mayoría de las especies silvestres deben ser preservadas en libertad." },
            { text: "Permite teñir sus pelajes por estética comercial.", isCorrect: false, rationale: "La taxonomía estudia las características biológicas naturales." }
        ]
    },
    {
        topic: "Biodiversidad en Costa Rica",
        question: "Costa Rica es considerado un país megadiverso porque contiene cerca del:",
        options: [
            { text: "5 por ciento de la biodiversidad de todo el planeta.", isCorrect: true, rationale: "¡Excelente! A pesar de poseer un territorio pequeño, albergamos una inmensa riqueza natural." },
            { text: "50 por ciento del total de especies terrestres del mundo.", isCorrect: false, rationale: "Eso correspondería a la mitad del planeta, lo cual es geográficamente incorrecto." },
            { text: "1 por ciento de los insectos mundiales.", isCorrect: false, rationale: "Nuestras cifras de variedad biológica general son proporcionalmente muy superiores." }
        ]
    },
    {
        topic: "Cuidado Renal",
        question: "¿Qué hábito saludable limpia la sangre facilitando que el riñón funcione sin sobrecargarse?",
        options: [
            { text: "Mantener un consumo diario adecuado de agua potable limpia.", isCorrect: true, rationale: "¡Así es! El agua diluye solutos y previene infecciones urinarias y cálculos renales." },
            { text: "Beber refrescos carbonatados con alta concentración de azúcares.", isCorrect: false, rationale: "Las bebidas dulces sobrecargan de solutos el filtrado renal y dañan las nefronas." },
            { text: "Consumir alimentos con alto contenido de sodio.", isCorrect: false, rationale: "El exceso de sal provoca hipertensión y daña los capilares de filtrado." }
        ]
    },
    {
        topic: "Excreción de Desechos",
        question: "¿Qué tipo de residuos elimina el sistema urinario a través de la orina?",
        options: [
            { text: "Urea, excesos de sales y residuos de medicamentos filtrados.", isCorrect: true, rationale: "¡Correcto! Son desechos solubles transportados en la sangre." },
            { text: "Desechos sólidos no absorbidos del bolo alimenticio.", isCorrect: false, rationale: "Esos se descartan por el tracto digestivo en forma de heces." },
            { text: "Oxígeno de desecho de los alveolos.", isCorrect: false, rationale: "El oxígeno se absorbe; lo que se elimina es dióxido de carbono por los pulmones." }
        ]
    },
    {
        topic: "Conservación Biológica",
        question: "¿Qué medida gubernamental en Costa Rica protege la biodiversidad local de la extinción?",
        options: [
            { text: "La creación de Parques Nacionales y Áreas Silvestres Protegidas.", isCorrect: true, rationale: "¡Excelente! Más de una cuarta parte del país está bajo esquemas de conservación biológica." },
            { text: "Permitir la libre caza de aves coloridas.", isCorrect: false, rationale: "La cacería silvestre es ilegal y amenaza seriamente a las poblaciones autóctonas." },
            { text: "Pavimentar áreas boscosas sin análisis de impacto ecológico.", isCorrect: false, rationale: "La deforestación descontrolada fragmenta corredores biológicos y extingue especies." }
        ]
    }
];
