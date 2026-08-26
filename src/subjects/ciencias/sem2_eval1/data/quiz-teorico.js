/**
 * Banco Oficial de Preguntas: Examen Teórico de Ciencias — II Semestre (1ª Evaluación)
 * Escuela Riojalandia · 5º Grado · Maestra Florisel Olmazo López
 * TEMAS: Célula Vegetal, Fotosíntesis, Cadena Trófica, Relaciones Ecológicas y Acciones Ambientales
 */
export const quizTeoricoCienciasSem2Eval1 = [
    {
        topic: "Obtención de Alimento",
        question: "¿Cómo se clasifican los organismos autótrofos en un ecosistema?",
        options: [
            { text: "Productores que elaboran su propio alimento mediante agua, dióxido de carbono y energía solar.", isCorrect: true, rationale: "¡Correcto! Los autótrofos (como las plantas y algas) constituyen el primer nivel trófico de la cadena alimenticia." },
            { text: "Consumidores que cazan a otros animales para alimentarse.", isCorrect: false, rationale: "Incorrecto. Esos son organismos heterótrofos carnívoros." },
            { text: "Descomponedores que se nutren únicamente de restos fósiles.", isCorrect: false, rationale: "Incorrecto. Los descomponedores consumen materia orgánica muerta." }
        ]
    },
    {
        topic: "Organismos Heterótrofos",
        question: "¿Qué caracteriza a los seres vivos heterótrofos?",
        options: [
            { text: "No pueden fabricar su propio alimento y deben nutrirse de otros seres vivos o sus restos.", isCorrect: true, rationale: "¡Exacto! Ocupan niveles superiores en la cadena alimenticia (ejemplos: león, vaca, ser humano, hongos)." },
            { text: "Absorben luz del Sol para transformar glucosa directamente en sus hojas.", isCorrect: false, rationale: "Eso corresponde únicamente a los autótrofos vegetales." },
            { text: "Viven exclusivamente fijos en el suelo sin necesidad de alimentarse.", isCorrect: false, rationale: "Todos los seres vivos heterótrofos requieren consumir nutrientes de otros organismos." }
        ]
    },
    {
        topic: "Consumidores Primarios",
        question: "¿Cómo se definen los herbívoros dentro de la cadena alimenticia?",
        options: [
            { text: "Son consumidores primarios que se alimentan de plantas, hojas, frutos y semillas.", isCorrect: true, rationale: "¡Excelente! Ejemplos del cuaderno: vaca, conejo, jirafa, caballo, venado y orugas." },
            { text: "Son consumidores terciarios que devoran a los depredadores más grandes.", isCorrect: false, rationale: "Incorrecto. Los carnívoros ocupan los niveles secundarios o terciarios." },
            { text: "Son bacterias microscópicas que descomponen troncos secos.", isCorrect: false, rationale: "Incorrecto. Esos son organismos descomponedores." }
        ]
    },
    {
        topic: "Consumidores Carnívoros",
        question: "¿Cuáles son ejemplos de carnívoros terrestres y marinos estudiados en clase?",
        options: [
            { text: "Marinos: tiburón y orca; Terrestres: león, águila, tigre, puma y zorro.", isCorrect: true, rationale: "¡Muy bien! Se alimentan de la carne de otros animales como consumidores secundarios o terciarios." },
            { text: "Marinos: algas y arrecifes; Terrestres: conejos y venados.", isCorrect: false, rationale: "Las algas son autótrofas y los conejos son herbívoros." },
            { text: "Marinos: hongos acuáticos; Terrestres: lombrices de tierra.", isCorrect: false, rationale: "Los hongos y lombrices son descomponedores." }
        ]
    },
    {
        topic: "Descomponedores",
        question: "¿Cuál es la función ecológica de los descomponedores en el suelo?",
        options: [
            { text: "Se alimentan de materia orgánica muerta y devuelven nutrientes y minerales al suelo.", isCorrect: true, rationale: "¡Brillante! Hongos, bacterias y lombrices reciclan la materia orgánica para las plantas." },
            { text: "Capturan dióxido de carbono directamente del Sol para fabricar flores.", isCorrect: false, rationale: "La fotosíntesis la realizan los productores vegetales." },
            { text: "Cazan herbívoros jóvenes en la selva para controlar su población.", isCorrect: false, rationale: "Esa es la función de los depredadores carnívoros." }
        ]
    },
    {
        topic: "Niveles Tróficos",
        question: "En la cadena trófica (Pasto → Conejo → Serpiente → Águila → Hongos), ¿qué papel cumple el conejo?",
        options: [
            { text: "Consumidor primario (herBívoro en el Eslabón 2).", isCorrect: true, rationale: "¡Perfecto! Se alimenta del productor (pasto) y transmite energía a la serpiente." },
            { text: "Productor en el Eslabón 1.", isCorrect: false, rationale: "El productor de esta cadena es el pasto." },
            { text: "Descomponedor en el Eslabón 5.", isCorrect: false, rationale: "Los descomponedores al final de la cadena son los hongos." }
        ]
    },
    {
        topic: "Ecuación de la Fotosíntesis",
        question: "¿Cuáles sustancias inorgánicas requiere la planta para realizar fotosíntesis?",
        options: [
            { text: "Luz solar, agua (H₂O) y dióxido de carbono (CO₂) captado con ayuda de la clorofila.", isCorrect: true, rationale: "¡Así es! Transforman estos reactivos en glucosa (alimento) y liberan oxígeno (O₂)." },
            { text: "Oxígeno puro, sal de mesa y carne fresca.", isCorrect: false, rationale: "Las plantas son autótrofas y no consumen carne ni sal refinada." },
            { text: "Petróleo, nitrógeno líquido y sombra constante.", isCorrect: false, rationale: "Las plantas requieren luz solar y dióxido de carbono ambiental." }
        ]
    },
    {
        topic: "Funciones Vegetales",
        question: "¿Qué órgano de la planta absorbe el agua y las sales minerales del suelo?",
        options: [
            { text: "Las raíces", isCorrect: true, rationale: "¡Correcto! Las raíces absorben el agua y nutrientes minerales necesarios para la savia bruta." },
            { text: "Las flores", isCorrect: false, rationale: "Las flores participan en la reproducción vegetal." },
            { text: "Los cloroplastos", isCorrect: false, rationale: "Los cloroplastos son organelos microscópicos situados en las hojas." }
        ]
    },
    {
        topic: "Fase Luminosa",
        question: "¿Qué ocurre específicamente durante la Fase Luminosa de la fotosíntesis?",
        options: [
            { text: "La clorofila atrapa luz solar, rompe moléculas de agua y libera oxígeno (O₂) al aire.", isCorrect: true, rationale: "¡Excelente! Ocurre con luz directa y almacena energía química para la siguiente fase." },
            { text: "La planta absorbe glucosa del suelo durante la noche.", isCorrect: false, rationale: "La glucosa es fabricada por la misma planta, no se absorbe del suelo." },
            { text: "Se detiene por completo la respiración vegetal.", isCorrect: false, rationale: "La respiración vegetal ocurre continuamente día y noche." }
        ]
    },
    {
        topic: "Fase Oscura",
        question: "¿En qué consiste la Fase Oscura de la fotosíntesis?",
        options: [
            { text: "Aprovecha la energía acumulada para fijar el dióxido de carbono (CO₂) y fabricar glucosa.", isCorrect: true, rationale: "¡Muy bien! No requiere luz solar directa en ese momento para sintetizar azúcares." },
            { text: "Expulsa de inmediato todo el nitrógeno del suelo en forma de vapor.", isCorrect: false, rationale: "Incorrecto. Su objetivo es la síntesis de alimento (glucosa)." },
            { text: "Destruye la clorofila para marchitar las hojas viejas.", isCorrect: false, rationale: "Incorrecto. La clorofila se conserva para el proceso fotosintético." }
        ]
    },
    {
        topic: "Tipos de Fotosíntesis",
        question: "¿Qué diferencia a la fotosíntesis anoxigénica de la fotosíntesis oxigénica?",
        options: [
            { text: "No libera oxígeno porque bacterias especializadas usan sustancias como sulfuro de hidrógeno en vez de agua.", isCorrect: true, rationale: "¡Brillante! Ocurre en bacterias púrpuras y verdes del azufre sin producción de O₂." },
            { text: "Ocurre únicamente en árboles de gran tamaño como el Guanacaste.", isCorrect: false, rationale: "Los árboles realizan fotosíntesis oxigénica liberando O₂." },
            { text: "Produce leche y carne para los seres heterótrofos.", isCorrect: false, rationale: "Ninguna fotosíntesis produce leche o carne." }
        ]
    },
    {
        topic: "Anatomía de la Célula Vegetal",
        question: "¿Qué función cumple la gran vacuola central en la célula vegetal?",
        options: [
            { text: "Almacena grandes reservas de agua y mantiene la firmeza (turgencia) celular.", isCorrect: true, rationale: "¡Exacto! Es una gran bolsa membranosa clave para la hidratación y soporte de la planta." },
            { text: "Captura la luz solar mediante pigmentos rojos.", isCorrect: false, rationale: "Esa función la cumplen los cloroplastos mediante la clorofila verde." },
            { text: "Permite la locomoción de la célula por el agua del suelo.", isCorrect: false, rationale: "Las células vegetales están fijas en tejidos estables." }
        ]
    },
    {
        topic: "El Nucléolo",
        question: "¿Cuál es la función del nucléolo en el interior del núcleo celular?",
        options: [
            { text: "Ensamblar el ARN ribosómico y sintetizar los ribosomas de la célula.", isCorrect: true, rationale: "¡Excelente! Es la fábrica especializada donde nacen los ribosomas dentro del núcleo." },
            { text: "Almacenar la savia elaborada para repartirla por el tallo.", isCorrect: false, rationale: "Eso lo realiza el tejido vascular flotante (floema)." },
            { text: "Destruir la membrana celular durante la fotosíntesis.", isCorrect: false, rationale: "El nucléolo se ubica en el centro del núcleo para sintetizar ribosomas." }
        ]
    },
    {
        topic: "Cloroplastos y Clorofila",
        question: "¿Por qué los cloroplastos son verdes y fundamentales para la vida terrestre?",
        options: [
            { text: "Contienen clorofila verde que absorbe fotones solares para la fotosíntesis y producción de O₂.", isCorrect: true, rationale: "¡Así es! Son los motores fotosintéticos de la biosfera." },
            { text: "Contienen queratina animal para proteger las raíces de las piedras.", isCorrect: false, rationale: "La queratina es una proteína de uñas y pelo animal, no fotosintética." },
            { text: "Almacenan grasa animal de reserva para la noche.", isCorrect: false, rationale: "Las plantas sintetizan carbohidratos como la glucosa y el almidón." }
        ]
    },
    {
        topic: "Pared Celular",
        question: "¿Qué compuesto químico rígido forma la pared exterior de la célula vegetal?",
        options: [
            { text: "Celulosa", isCorrect: true, rationale: "¡Correcto! La celulosa da soporte mecánico, resistencia y forma poligonal a la célula vegetal." },
            { text: "Hemoglobina roja", isCorrect: false, rationale: "La hemoglobina es la proteína del transporte de O₂ en sangre humana." },
            { text: "Glucógeno muscular", isCorrect: false, rationale: "El glucógeno es la reserva energética animal en hígado y músculos." }
        ]
    },
    {
        topic: "Mitocondrias Celulares",
        question: "¿Qué proceso vital realizan las mitocondrias dentro de la célula vegetal y animal?",
        options: [
            { text: "Respiración celular para quemar la glucosa y generar energía útil en forma de ATP.", isCorrect: true, rationale: "¡Muy bien! Son las centrales energéticas de las células eucariotas." },
            { text: "Absorción directa de nitrógeno desde el aire ambiente.", isCorrect: false, rationale: "Las mitocondrias queman la glucosa con oxígeno para generar ATP." },
            { text: "Fabricación de pigmentos morados para las flores.", isCorrect: false, rationale: "Los pigmentos florales se almacenan en cromoplastos o vacuolas." }
        ]
    },
    {
        topic: "Retículo Endoplasmático",
        question: "¿Cuál es la función principal del retículo endoplasmático en el citoplasma?",
        options: [
            { text: "Transportar proteínas y lípidos a través de una amplia red de canales membanosos.", isCorrect: true, rationale: "¡Exacto! Funciona como la autopista interna de transporte molecular." },
            { text: "Expulsar toda el agua de la célula hasta secarla.", isCorrect: false, rationale: "Mantiene un equilibrio hídrico junto con el citoplasma y la vacuola." },
            { text: "Destruir las enzimas del citoplasma.", isCorrect: false, rationale: "El retículo transporta y procesa moléculas esenciales." }
        ]
    },
    {
        topic: "Complejo de Golgi",
        question: "¿Por qué se compara al Aparato de Golgi con una oficina de empaque y correo?",
        options: [
            { text: "Modifica, empaqueta y distribuye moléculas producidas hacia su destino final.", isCorrect: true, rationale: "¡Perfecto! Empaqueta proteínas en vesículas para exportación o uso interno." },
            { text: "Fabrica la luz solar para encender la clorofila.", isCorrect: false, rationale: "La luz proviene del Sol; el Golgi empaqueta vesículas orgánicas." },
            { text: "Destruye el ADN celular todas las mañanas.", isCorrect: false, rationale: "El ADN se conserva protegido dentro del núcleo." }
        ]
    },
    {
        topic: "Competencia Intraespecífica",
        question: "¿Qué es la competencia intraespecífica en la naturaleza?",
        options: [
            { text: "La lucha activa entre individuos de la MISMA especie por recursos como alimento, territorio o pareja.", isCorrect: true, rationale: "¡Correcto! Ejemplo del examen: leones peleando por la jefatura de la manada." },
            { text: "La relación donde una abeja poliniza una flor de otra especie.", isCorrect: false, rationale: "Eso es mutualismo entre especies distintas." },
            { text: "La unión pacífica de animales de diferentes especies para migrar.", isCorrect: false, rationale: "La competencia intraespecífica ocurre estrictamente entre miembros de la misma especie." }
        ]
    },
    {
        topic: "Asociaciones Gregarias",
        question: "¿Cuál es el objetivo principal de las asociaciones gregarias en los animales?",
        options: [
            { text: "Agruparse temporal o permanentemente para defenderse, buscar alimento o migrar.", isCorrect: true, rationale: "¡Excelente! Ejemplos: bandadas de gavilanes volando en V, manadas de lobos y bancos de peces." },
            { text: "Establecer una reina única y dividirse en castas biológicas permanentes.", isCorrect: false, rationale: "Esa estructura rígida corresponde a las sociedades (como hormigas y abejas)." },
            { text: "Absorber la savia de árboles hospedantes hasta secarlos.", isCorrect: false, rationale: "Eso es parasitismo vegetal." }
        ]
    },
    {
        topic: "Sociedades de Insectos",
        question: "¿Por qué las hormigas y las abejas constituyen una Sociedad?",
        options: [
            { text: "Porque tienen comunidades organizadas con división del trabajo, jerarquía y castas (reina, obreras, soldados).", isCorrect: true, rationale: "¡Perfecto! Viven en colonias permanentes con comunicación y tareas especializadas." },
            { text: "Porque se unen de forma casual durante un par de minutos para cantar.", isCorrect: false, rationale: "No es casual; es una estructura social permanente e indispensable para su supervivencia." },
            { text: "Porque son organismos fotosintéticos autótrofos.", isCorrect: false, rationale: "Las hormigas y abejas son animales heterótrofos." }
        ]
    },
    {
        topic: "Mutualismo y Comensalismo",
        question: "¿Qué diferencia existe entre el Mutualismo (+/+) y el Comensalismo (+/0)?",
        options: [
            { text: "En el mutualismo AMBAS especies se benefician; en el comensalismo UNA se beneficia y la otra no sufre daño ni beneficio.", isCorrect: true, rationale: "¡Así es! Mutualismo: abeja y flor. Comensalismo: garza bueyera y ganado vacuno." },
            { text: "En el mutualismo una especie muere y en el comensalismo ambas mueren.", isCorrect: false, rationale: "Ambas son interacciones simbióticas pacíficas." },
            { text: "El mutualismo ocurre solo en el agua y el comensalismo en el desierto.", isCorrect: false, rationale: "Ambos tipos de relaciones ocurren en cualquier ecosistema." }
        ]
    },
    {
        topic: "Parasitismo",
        question: "¿Qué caracteriza la relación del Matapalo en los árboles según el examen?",
        options: [
            { text: "Parasitismo vegetal (+/-): la planta epífita se enreda en el árbol y le sustrae agua y nutrientes debilitándolo.", isCorrect: true, rationale: "¡Excelente análisis! El parásito se beneficia perjudicando a su hospedero." },
            { text: "Mutualismo perfecto (+/+): ayuda al árbol a fabricar flores gigantes.", isCorrect: false, rationale: "Incorrecto. El Matapalo perjudica al árbol hospedero." },
            { text: "Depredación marina (+/-): devora la madera con dientes afilados.", isCorrect: false, rationale: "El Matapalo es una planta parásita, no un animal depredador." }
        ]
    },
    {
        topic: "Depredación",
        question: "En el caso de la Rana Roja de Costa Rica, ¿cuál es su relación ecológica principal?",
        options: [
            { text: "Depredación (+/-): caza y consume hormigas y termitas como su alimento principal.", isCorrect: true, rationale: "¡Muy bien! La rana actúa como depredador activo sobre sus presas." },
            { text: "Comensalismo (+/0): vive dentro de las hormigas sin tocarlas.", isCorrect: false, rationale: "Incorrecto. Las consume activamente como presa." },
            { text: "Fotosíntesis anoxigénica.", isCorrect: false, rationale: "Las ranas son animales heterótrofos." }
        ]
    }
];
