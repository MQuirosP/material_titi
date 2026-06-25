/** Banco de preguntas: Examen Práctico de Ciencias (10 preguntas) */
export const quizPracticoCiencias = [
    {
        topic: "Cuidado Renal",
        question: "Un estudiante nota que está yendo muy pocas veces al baño y que su orina presenta un color amarillo muy oscuro. ¿Qué medida saludable debe adoptar?",
        options: [
            { text: "Incrementar de inmediato la ingesta de agua potable pura.", isCorrect: true, rationale: "¡Exacto! El color oscuro indica deshidratación; los riñones requieren agua para limpiar la sangre." },
            { text: "Consumir bebidas con alto contenido de sodio para retener líquidos.", isCorrect: false, rationale: "La sal sobrecarga las nefronas y dificulta el filtrado renal." },
            { text: "Aguantar las ganas de ir al baño por más tiempo.", isCorrect: false, rationale: "Retener orina propicia infecciones urinarias severas por acumulación bacteriana." }
        ]
    },
    {
        topic: "Hábito Alimenticio",
        question: "A la hora del almuerzo, una persona le añade sal de mesa en exceso a todos sus platillos. ¿Qué consecuencia puede tener a mediano plazo en sus riñones?",
        options: [
            { text: "Obliga a los riñones a realizar un esfuerzo excesivo para excretar sodio, dañando los capilares.", isCorrect: true, rationale: "¡Correcto! El exceso de sal causa hipertensión y estresa las vías urinarias." },
            { text: "Ensancha saludablemente los conductos uréteres.", isCorrect: false, rationale: "La sal no modifica constructivamente la anatomía de los conductos urinarios." },
            { text: "Anula por completo la producción de orina de manera permanente.", isCorrect: false, rationale: "No anula la producción de inmediato, pero provoca daños severos por sobreesfuerzo crónico." }
        ]
    },
    {
        topic: "Tratamiento de Infecciones",
        question: "Mateo tiene una fuerte gripe causada por un VIRUS. Un familiar le recomienda tomar un antibiótico fuerte que guardaron de una receta anterior. ¿Es correcta esta sugerencia?",
        options: [
            { text: "No, porque los antibióticos curan infecciones bacterianas y no tienen ningún efecto contra los virus.", isCorrect: true, rationale: "¡Brillante análisis! Tomar antibióticos ante virus es inútil y genera resistencia bacteriana." },
            { text: "Sí, los antibióticos curan gripes, resfriados y todo tipo de infección viral.", isCorrect: false, rationale: "Falso. La gripe viral sigue su curso natural; los antibióticos no actúan sobre virus." },
            { text: "Sí, siempre y cuando duplique la dosis recomendada.", isCorrect: false, rationale: "Duplicar dosis sin criterio médico puede provocar una intoxicación severa." }
        ]
    },
    {
        topic: "Elección Tecnológica",
        question: "La doctora del hospital necesita verificar con urgencia si la tía de Sofía tiene fracturado el tobillo tras un accidente. ¿Qué avance técnico es idóneo?",
        options: [
            { text: "Una radiografía digital mediante Rayos X.", isCorrect: true, rationale: "¡Así es! Los Rayos X revelarán instantáneamente el estado óseo del tobillo." },
            { text: "La aplicación preventiva de una dosis de vacuna.", isCorrect: false, rationale: "Las vacunas previenen contagios, no diagnostican ni reparan huesos rotos." },
            { text: "Programar un trasplante de ligamentos renales.", isCorrect: false, rationale: "Un trasplante es una cirugía mayor de reemplazo; no se asocia al tobillo." }
        ]
    },
    {
        topic: "Interrelación de Sistemas",
        question: "Durante su clase de Educación Física, Lucía corre rápido y nota que su respiración se acelera y su corazón late fuertemente. ¿Cómo explica esto la interrelación de sistemas?",
        options: [
            { text: "El sistema respiratorio captura más oxígeno y el circulatorio lo bombea con rapidez a los músculos activos.", isCorrect: true, rationale: "¡Perfecto! Los sistemas coordinan su actividad física para suplir la demanda de energía." },
            { text: "El sistema urinario incrementa la producción de orina para ganar fuerza muscular.", isCorrect: false, rationale: "El ritmo del corazón y la respiración responden al oxígeno, no a la excreción inmediata." },
            { text: "Los órganos operan de forma aislada sin comunicarse entre sí.", isCorrect: false, rationale: "Falso. Todos los sistemas del cuerpo operan de manera coordinada." }
        ]
    },
    {
        topic: "Bioética en Laboratorios",
        question: "Un laboratorio comercial de cosméticos desea probar un champú aplicándolo directamente en los ojos de conejos sin usar sedantes. ¿Qué principio ético se incumple?",
        options: [
            { text: "El principio de trato humanitario y minimización del dolor en seres sensibles.", isCorrect: true, rationale: "¡Así es! Las regulaciones modernas exigen erradicar la crueldad animal en la investigación." },
            { text: "El principio de rentabilidad química industrial.", isCorrect: false, rationale: "La rentabilidad económica no es un valor bioético de protección a la vida animal." },
            { text: "Ninguno, el ser humano tiene derecho a infligir dolor a cualquier especie para comerciar.", isCorrect: false, rationale: "La bioética moderna y las leyes prohíben causar sufrimiento de manera voluntaria a animales sensibles." }
        ]
    },
    {
        topic: "Impacto Ambiental",
        question: "Para construir una nueva plaza, una municipalidad decide talar todos los árboles y vegetación de una zona verde. ¿Cómo repercute esto en la biodiversidad silvestre local?",
        options: [
            { text: "Destruye microhábitats eliminando fuentes de alimento y refugio de aves, insectos y lagartijas.", isCorrect: true, rationale: "¡Excelente análisis! Destruir flora local erradica la fauna asociada que depende de ella." },
            { text: "Atrae nuevas especies exóticas que prefieren el cemento.", isCorrect: false, rationale: "El cemento estéril no atrae biodiversidad; reduce las poblaciones silvestres." },
            { text: "No genera impacto porque la fauna migrará a los techos escolares.", isCorrect: false, rationale: "Los techos escolares no ofrecen las condiciones ambientales ni el sustento natural necesario." }
        ]
    },
    {
        topic: "Hábitos Saludables",
        question: "Un niño evita pedir permiso para ir al sanitario durante las clases y se aguanta la orina por varias horas diariamente. ¿Qué riesgo de salud corre?",
        options: [
            { text: "Desarrollar dolorosas infecciones bacterianas en su vejiga por retención de orina.", isCorrect: true, rationale: "¡Correcto! El líquido retenido facilita que los microbios se multipliquen en la vejiga." },
            { text: "Fortalecer los riñones haciéndolos más eficientes.", isCorrect: false, rationale: "Retener orina estresa la musculatura urinaria y puede provocar reflujo urinario nocivo hacia los riñones." },
            { text: "Provocar que sus conductos uréteres se transformen en venas.", isCorrect: false, rationale: "Los órganos mantienen su anatomía y función; no cambian su tipo de tejido por retención." }
        ]
    },
    {
        topic: "Acciones de Salud Pública",
        question: "Para evitar brotes de sarampión, varicela o polio en la comunidad de Riojalandia, el personal de salud visita las escuelas para aplicar dosis inyectables. ¿Qué avance médico usan?",
        options: [
            { text: "Vacunas preventivas.", isCorrect: true, rationale: "¡Excelente! La vacunación masiva crea escudos de defensas comunitarias." },
            { text: "Antibióticos en pastillas.", isCorrect: false, rationale: "Los antibióticos curan bacterias activas; no previenen patologías virales de antemano." },
            { text: "Trasplantes profilácticos preventivos.", isCorrect: false, rationale: "Los trasplantes solo se realizan ante fallas crónicas e irreversibles de órganos." }
        ]
    },
    {
        topic: "Estudio Taxonómico",
        question: "Científicos hallan una nueva planta en las montañas de Cartago. Para catalogarla y clasificarla dentro de un grupo biológico oficial, ¿cuál es el primer paso metodológico?",
        options: [
            { text: "Examinar detalladamente sus estructuras físicas, tipo de hojas y método de fotosíntesis.", isCorrect: true, rationale: "¡Exacto! El estudio objetivo de rasgos anatómicos y biológicos permite clasificar los seres vivos." },
            { text: "Pintarla de colores vivos para que luzca decorativa.", isCorrect: false, rationale: "La taxonomía se fundamenta en la observación científica de rasgos reales, no en adornarlos." },
            { text: "Inventar un nombre fantasioso de forma inmediata.", isCorrect: false, rationale: "El nombre científico requiere de una clasificación rigurosa previa." }
        ]
    },
    {
        topic: "Identificación de Reinos",
        question: "Durante una caminata por el bosque de Escazú, Valeria encuentra un organismo sobre un tronco húmedo. Observa que no tiene hojas, no es verde, no se mueve y parece absorber nutrientes de la madera podrida. ¿En qué reino debe clasificarlo?",
        options: [
            { text: "En el Reino Fungi (los hongos).", isCorrect: true, rationale: "¡Excelente! Los hongos son heterótrofos por absorción, carecen de clorofila (por eso no son verdes) y crecen en lugares húmedos descomponiendo materia." },
            { text: "En el Reino Plantae (las plantas).", isCorrect: false, rationale: "Incorrecto. Las plantas son autótrofas, contienen clorofila verde para realizar fotosíntesis y poseen hojas o tallos estructurados." },
            { text: "En el Reino Animalia (los animales).", isCorrect: false, rationale: "Incorrecto. Los animales poseen digestión interna y capacidad de movimiento voluntario, rasgos de los que este organismo carece." }
        ]
    },
    {
        topic: "Clasificación de Plantas",
        question: "Un agricultor en Coronado tiene árboles de pino que producen piñas o conos de madera dura pero nunca dan flores ni frutos jugosos. ¿Cómo clasificaría estas plantas con semillas?",
        options: [
            { text: "Como Gimnospermas.", isCorrect: true, rationale: "¡Correcto! Las gimnospermas son plantas con semillas desnudas que se desarrollan en conos, sin flores vistosas ni frutos verdaderos." },
            { text: "Como Angiospermas.", isCorrect: false, rationale: "Incorrecto. Las angiospermas son las plantas que sí producen flores vistosas y frutos verdaderos que envuelven la semilla." },
            { text: "Como Musgos sin semillas.", isCorrect: false, rationale: "Incorrecto. Los musgos no tienen semillas ni raíces verdaderas y son de tamaño microscópico o muy pequeño." }
        ]
    },
    {
        topic: "Rasgos de Vertebrados",
        question: "Sofía está observando un animal en el Parque Nacional Manuel Antonio. Nota que el espécimen tiene la piel cubierta de escamas secas, respira por pulmones y es de sangre fría. ¿A qué clase de vertebrados pertenece?",
        options: [
            { text: "Reptiles", isCorrect: true, rationale: "¡Perfecto! Los reptiles son vertebrados terrestres de sangre fría con piel escamosa y seca, y respiración pulmonar activa." },
            { text: "Anfibios", isCorrect: false, rationale: "Incorrecto. Los anfibios tienen la piel húmeda y desnuda sin escamas, y en sus etapas iniciales respiran por branquias." },
            { text: "Mamíferos", isCorrect: false, rationale: "Incorrecto. Los mamíferos tienen el cuerpo cubierto de pelo y son de sangre caliente, no fría." }
        ]
    }
];
