/** Banco de preguntas: Examen Teórico de Matemáticas (20 preguntas) */
export const quizTeoricoQuestions = [
  {
    topic: "Propiedades de los Múltiplos",
    question: "¿Qué es en realidad un múltiplo de un número natural en matemáticas?",
    options: [
      { text: "Es el resultado de multiplicar ese número por cualquier número entero natural.", isCorrect: true, rationale: "¡Excelente! Los múltiplos son, literalmente, los productos que se obtienen al multiplicar un número por la serie de números naturales (0, 1, 2, 3...)." },
      { text: "Es un número que divide exactamente al número original de manera que el residuo es cero.", isCorrect: false, rationale: "¡Cuidado! Esta es la definición de un divisor, no de un múltiplo. Los múltiplos se obtienen multiplicando, no dividiendo." },
      { text: "Es el número que resulta de restarle 2 al número principal.", isCorrect: false, rationale: "Incorrecto. Restar números no produce múltiplos; los múltiplos aumentan de forma multiplicativa a partir del número original." },
      { text: "Es la mitad exacta de ese número.", isCorrect: false, rationale: "Incorrecto. Dividir entre 2 daría una fracción o la mitad, mientras que un múltiplo de un entero suele ser un número mayor o igual al original (excepto con el cero)." },
    ],
  },
  {
    topic: "Identificación de Números Pares",
    question: "¿En qué dígitos debe terminar un número natural para considerarse un número par?",
    options: [
      { text: "Debe terminar en 1, 3, 5, 7 o 9.", isCorrect: false, rationale: "¡Al revés! Los números que terminan en estos dígitos impares son precisamente los números impares." },
      { text: "Debe terminar únicamente en el número cero.", isCorrect: false, rationale: "Aunque los que terminan en cero sí son pares, esta respuesta excluye los números que terminan en 2, 4, 6 u 8, que también son pares." },
      { text: "Debe terminar en 0, 2, 4, 6 u 8.", isCorrect: true, rationale: "¡Correcto! Cualquier número natural que finalice en alguno de estos cinco dígitos pares es divisible exactamente entre 2, por lo tanto es par." },
      { text: "Cualquier número es par si termina en una letra.", isCorrect: false, rationale: "Incorrecto. Los números naturales en matemática básica se componen únicamente de dígitos decimales." },
    ],
  },
  {
    topic: "Propiedades de los Divisores",
    question: "En la teoría de la divisibilidad, ¿cuál de las siguientes afirmaciones es una regla de oro de los divisores?",
    options: [
      { text: "El número 1 es divisor de absolutamente TODOS los números naturales.", isCorrect: true, rationale: "¡Exactamente! Cualquier número natural se puede dividir de forma exacta entre 1, dando como resultado el mismo número." },
      { text: "Los divisores de un número son infinitos.", isCorrect: false, rationale: "¡Falso! Al contrario de los múltiplos que son infinitos, los divisores de cualquier número son una cantidad finita (limitada)." },
      { text: "Ningún número puede ser nunca divisor de sí mismo.", isCorrect: false, rationale: "Al contrario, todo número natural (distinto de cero) es divisor de sí mismo, ya que cualquier número dividido por sí mismo da exactamente 1." },
      { text: "El número cero es divisor de todos los números.", isCorrect: false, rationale: "Incorrecto. La división por cero es una operación que no está definida en la matemática." },
    ],
  },
  {
    topic: "Concepto de Fracciones",
    question: "¿Cuál es la característica principal que define teóricamente a una fracción impropia?",
    options: [
      { text: "El numerador (el de arriba) es menor que el de abajo.", isCorrect: false, rationale: "No. Esa es la definición de una fracción propia, la cual representa menos de una unidad entera." },
      { text: "Tiene una parte entera acompañada de una fracción propia.", isCorrect: false, rationale: "No. Esta es la estructura que define a una fracción expresada en notación mixta, no en formato de fracción impropia directa." },
      { text: "El numerador (arriba) es mayor o igual que el de abajo.", isCorrect: true, rationale: "¡Excelente! Al ser el numerador mayor o igual al denominador, significa que la fracción representa una cantidad mayor o igual que un entero completo." },
      { text: "El número de abajo es siempre igual a 10.", isCorrect: false, rationale: "Incorrecto. Eso definiría una fracción decimal, no una fracción impropia." },
    ],
  },
  {
    topic: "Relación de Fracciones",
    question: "Teóricamente, ¿qué representa una fracción expresada en notación mixta?",
    options: [
      { text: "La suma de una parte entera y una parte fraccionaria propia.", isCorrect: true, rationale: "¡Perfecto! Un número mixto representa la combinación exacta de objetos completos (enteros) más una porción sobrante (fracción propia)." },
      { text: "La multiplicación de dos fracciones impropias diferentes.", isCorrect: false, rationale: "Incorrecto. Un número mixto representa una suma implícita, no una multiplicación de dos fracciones." },
      { text: "Una fracción en donde el denominador es cero.", isCorrect: false, rationale: "Incorrecto. Ninguna fracción matemática válida puede tener un denominador igual a cero." },
      { text: "La suma de tres números impares.", isCorrect: false, rationale: "No tiene relación con el concepto matemático de números mixtos." },
    ],
  },
  {
    topic: "Teoría de la Geometría",
    question: "¿Cuál es la diferencia teórica fundamental entre el perímetro y el área de una figura geométrica plana?",
    options: [
      { text: "El perímetro es el contorno (borde) de la figura, mientras que el área mide la superficie interior de la misma.", isCorrect: true, rationale: "¡Brillante! El perímetro se refiere a la longitud exterior de la frontera (borde de la figura) y el área mide cuánto espacio plano cubre en su interior." },
      { text: "El perímetro es para triángulos y el área es exclusiva para los cuadriláteros.", isCorrect: false, rationale: "Incorrecto. Todas las figuras geométricas planas cerradas poseen tanto perímetro como área." },
      { text: "El perímetro se mide en centímetros cuadrados (cm²) y el área en centímetros simples (cm).", isCorrect: false, rationale: "¡Al revés! El perímetro se mide en unidades lineales simples (cm, m) porque es una longitud, y el área en unidades cuadradas (cm², m²)." },
      { text: "No existe ninguna diferencia; ambos representan el mismo cálculo.", isCorrect: false, rationale: "Falso. Son conceptos totalmente diferentes tanto en dimensión física como en significado de uso cotidiano." },
    ],
  },
  {
    topic: "Fórmula del Triángulo",
    question: "En la fórmula del área del triángulo, Área = (Base × Altura) ÷ 2, ¿por qué se debe dividir el resultado entre 2?",
    options: [
      { text: "Porque cualquier triángulo representa teóricamente la mitad exacta de un paralelogramo o rectángulo de igual base y altura.", isCorrect: true, rationale: "¡Excelente razonamiento! Si tomas un rectángulo o paralelogramo y trazas una diagonal, obtienes dos triángulos idénticos; de ahí que su área sea la mitad." },
      { text: "Porque la maestra Florisel lo determinó así en las guías escolares de la escuela.", isCorrect: false, rationale: "Aunque la maestra lo enseña así, la fórmula se debe a una deducción y demostración geométrica formal." },
      { text: "Porque todos los triángulos tienen exactamente 2 lados que miden igual.", isCorrect: false, rationale: "Incorrecto. Hay triángulos escalenos cuyos tres lados miden completamente diferente, y su fórmula de área sigue siendo la misma." },
      { text: "Porque el número 2 representa la base del triángulo.", isCorrect: false, rationale: "Incorrecto. El número 2 es una constante en la fórmula que representa una división por la mitad." },
    ],
  },
  {
    topic: "Fórmula del Trapecio",
    question: "¿Qué papel juegan la 'Base mayor' (B) y la 'Base menor' (b) en la fórmula de área del trapecio?",
    options: [
      { text: "Se deben restar una de la otra antes de hacer cualquier multiplicación.", isCorrect: false, rationale: "No. En la fórmula, las bases se deben sumar, no restar." },
      { text: "Se deben sumar, representando la suma de los dos lados paralelos de diferente medida del trapecio.", isCorrect: true, rationale: "¡Correcto! El trapecio tiene dos lados que corren paralelos con diferentes longitudes. La fórmula suma estas dos bases antes de multiplicar por la altura y dividir entre dos." },
      { text: "Se deben multiplicar entre sí para obtener el perímetro.", isCorrect: false, rationale: "Incorrecto. El perímetro se obtiene sumando los cuatro lados exteriores del trapecio." },
      { text: "No se usan para calcular el área, solo para la inclinación.", isCorrect: false, rationale: "Falso. Las dos bases son indispensables para el cálculo de su área plana." },
    ],
  },
  {
    topic: "Fórmulas de Cuadriláteros",
    question: "¿Cuál de las siguientes figuras geométricas utiliza exactamente la misma fórmula de área (Base × Altura) que un rectángulo común?",
    options: [
      { text: "El triángulo.", isCorrect: false, rationale: "Incorrecto. El triángulo requiere dividir entre 2, por lo que su fórmula es base por altura entre dos." },
      { text: "El paralelogramo (romboide).", isCorrect: true, rationale: "¡Muy bien! Un paralelogramo se puede reorganizar recortando un triángulo de un extremo y pegándolo en el otro, formando un rectángulo perfecto. Por eso su área es Base × Altura." },
      { text: "El trapecio.", isCorrect: false, rationale: "Incorrecto. El trapecio requiere promediar sus bases mayor y menor antes de multiplicarlo por su altura." },
      { text: "Cualquier círculo plano.", isCorrect: false, rationale: "Falso. El círculo usa la fórmula π × r²." },
    ],
  },
  {
    topic: "Problemas Combinados de Geometría",
    question: "Si conocemos el perímetro de un cuadrado, ¿cuál es el paso teórico necesario para poder calcular su área?",
    options: [
      { text: "Dividir el perímetro entre 4 para hallar la longitud de un lado, y luego multiplicar ese lado por sí mismo.", isCorrect: true, rationale: "¡Espectacular! Un cuadrado tiene 4 lados iguales. Al dividir el perímetro entre 4 obtienes la medida de un solo lado. Luego, aplicas la fórmula del área: Lado × Lado." },
      { text: "Sumar el perímetro con el número de esquinas del cuadrado.", isCorrect: false, rationale: "Incorrecto. Sumar elementos geométricos arbitrarios de distintas unidades no tiene sentido." },
      { text: "Multiplicar el perímetro por sí mismo directamente.", isCorrect: false, rationale: "Incorrecto. Obtendrás un valor erróneo mucho mayor que el área real." },
      { text: "No se puede calcular el área a partir del perímetro.", isCorrect: false, rationale: "Incorrecto. Sí se puede gracias a las relaciones de la geometría regular." },
    ],
  },
  {
    topic: "Infinitud de Múltiplos",
    question: "¿Cuántos múltiplos tiene un número natural que es diferente de cero?",
    options: [
      { text: "Tiene exactamente 10 múltiplos (los de su tabla).", isCorrect: false, rationale: "¡No! Las tablas de multiplicar que vemos en la escuela solo llegan a 10 por espacio, pero la matemática continúa infinitamente." },
      { text: "Tiene una cantidad finita de múltiplos.", isCorrect: false, rationale: "Incorrecto. Los que tienen una cantidad limitada o finita son los divisores, no los múltiplos." },
      { text: "Tiene infinitos múltiplos porque la serie de números naturales no tiene fin.", isCorrect: true, rationale: "¡Excelente! Como los números naturales son infinitos (1, 2, 3, 4, 5...), podés seguir multiplicando el número original para siempre." },
      { text: "Depende de si el número es par o impar.", isCorrect: false, rationale: "Incorrecto. Tanto pares como impares tienen infinitos múltiplos." },
    ],
  },
  {
    topic: "El Elemento Neutro",
    question: "Al multiplicar cualquier número entero por el número 1, ¿qué resultado se obtiene?",
    options: [
      { text: "Se obtiene el mismo número original.", isCorrect: true, rationale: "¡Muy bien! El número 1 es el elemento neutro de la multiplicación; multiplicar cualquier cantidad por 1 no la modifica en absoluto." },
      { text: "El resultado siempre es igual a 1.", isCorrect: false, rationale: "Incorrecto. Por ejemplo, 5 × 1 = 5, no da 1." },
      { text: "El resultado siempre es igual a cero.", isCorrect: false, rationale: "Incorrecto. El que da siempre cero al multiplicar es el propio cero (5 × 0 = 0)." },
      { text: "Se obtiene el doble del número.", isCorrect: false, rationale: "Incorrecto. El doble se obtiene multiplicando por 2." },
    ],
  },
  {
    topic: "Divisores del Cero",
    question: "¿Por qué teóricamente el número cero no puede ser divisor de ningún número natural?",
    options: [
      { text: "La división entre cero matemáticamente no está definida.", isCorrect: true, rationale: "¡Brillante! No es posible repartir una cantidad en 'cero partes', por lo que la división por cero no tiene sentido matemático." },
      { text: "Porque el cero es menor que el número 1.", isCorrect: false, rationale: "Aunque es menor, esa no es la razón teórica por la cual la división no está permitida." },
      { text: "Porque el cero solo divide a números pares.", isCorrect: false, rationale: "Falso. El cero no puede dividir a ningún número, ni siquiera a los pares." },
      { text: "Porque el cero solo es un múltiplo.", isCorrect: false, rationale: "Incorrecto. Esa afirmación no justifica por qué no puede ser divisor." },
    ],
  },
  {
    topic: "Definición de Divisores",
    question: "¿Qué significa realmente que un número A sea divisor exacto de otro número B?",
    options: [
      { text: "Significa que al multiplicar A por B el resultado es impar.", isCorrect: false, rationale: "No tiene ninguna relación con que el resultado sea par o impar." },
      { text: "Significa que la división de B entre A nos da como residuo o sobrante cero.", isCorrect: true, rationale: "¡Perfecto! Ser divisor exacto significa que el número entra una cantidad exacta de veces en el otro sin que sobre absolutamente nada." },
      { text: "Significa que A es mayor que B.", isCorrect: false, rationale: "Incorrecto. De hecho, los divisores de un número natural son menores o iguales al número." },
      { text: "Significa que la suma de ambos es un número par.", isCorrect: false, rationale: "Falso. La suma de dos números puede ser par o impar independientemente de la divisibilidad." },
    ],
  },
  {
    topic: "Fracciones Propias",
    question: "¿Cuál es una característica fundamental de las fracciones propias respecto a la unidad?",
    options: [
      { text: "Representan una cantidad que es menor que un entero completo (menos que 1).", isCorrect: true, rationale: "¡Excelente! En una fracción propia, el numerador es menor que el de abajo (como 3/4), por lo que no llega a completar una unidad entera." },
      { text: "Representan exactamente dos unidades completas.", isCorrect: false, rationale: "Incorrecto. Eso sería una fracción equivalente a un entero específico." },
      { text: "Representan más de una unidad entera.", isCorrect: false, rationale: "Incorrecto. Las que representan más de un entero son las fracciones impropias." },
      { text: "Tienen un número entero grande a la par.", isCorrect: false, rationale: "Incorrecto. Esas son las fracciones mixtas." },
    ],
  },
  {
    topic: "Representación de la Unidad",
    question: "Si el numerador y el denominador de una fracción son exactamente iguales (ejemplo: 6/6), ¿qué representa esa fracción?",
    options: [
      { text: "Representa exactamente una unidad entera (el número 1).", isCorrect: true, rationale: "¡Exacto! Si dividís un chocolate en 6 partes iguales y te comés las 6 partes, te estás comiendo todo el chocolate entero." },
      { text: "Representa una fracción propia común.", isCorrect: false, rationale: "Incorrecto. Las propias siempre son menores que la unidad." },
      { text: "Representa el número cero.", isCorrect: false, rationale: "Incorrecto. Para que represente cero, el numerador tendría que ser cero y el denominador diferente de cero." },
      { text: "Representa una cantidad infinita.", isCorrect: false, rationale: "Incorrecto. 6/6 es una cantidad finita y exacta: el entero 1." },
    ],
  },
  {
    topic: "Definición de la Altura",
    question: "En geometría, ¿qué es teóricamente la altura de un triángulo?",
    options: [
      { text: "Es la longitud de cualquiera de sus lados inclinados.", isCorrect: false, rationale: "Incorrecto. Los lados inclinados de un triángulo no representan su altura real." },
      { text: "Es el segmento perpendicular que va desde un vértice hasta la base opuesta (o su prolongación).", isCorrect: true, rationale: "¡Brillante! La altura debe formar siempre un ángulo recto (90 grados) con la base, midiendo la distancia vertical más corta." },
      { text: "Es la medida de la línea del perímetro.", isCorrect: false, rationale: "Falso. El perímetro mide el borde total de la figura." },
      { text: "Es la suma de sus tres ángulos internos.", isCorrect: false, rationale: "Incorrecto. La suma de ángulos internos es siempre 180 grados, no la altura." },
    ],
  },
  {
    topic: "Unidades de Medida de Perímetro",
    question: "¿En qué tipo de unidades se debe expresar siempre la medida de un perímetro?",
    options: [
      { text: "En unidades cuadradas como metros cuadrados o centímetros cuadrados.", isCorrect: false, rationale: "Falso. Las unidades cuadradas se utilizan para el Área, que mide la superficie interna plana." },
      { text: "En unidades de peso como kilogramos o gramos.", isCorrect: false, rationale: "No. El perímetro mide distancias de longitud." },
      { text: "En unidades lineales simples como centímetros (cm) o metros (m).", isCorrect: true, rationale: "¡Perfecto! Como el perímetro es la medida de una línea de contorno de una sola dimensión, se expresa en unidades lineales simples." },
      { text: "En unidades de volumen como litros.", isCorrect: false, rationale: "Falso. Los litros miden volumen, no longitud." },
    ],
  },
  {
    topic: "Altura del Trapecio",
    question: "En un trapecio, ¿cuál línea representa teóricamente su altura?",
    options: [
      { text: "Cualquiera de los lados inclinados del trapecio.", isCorrect: false, rationale: "Incorrecto. Los lados inclinados no miden la distancia vertical." },
      { text: "La línea recta perpendicular que une a las dos bases paralelas.", isCorrect: true, rationale: "¡Excelente! La altura del trapecio es la distancia vertical recta que separa la base mayor de la base menor." },
      { text: "La suma de la base mayor y la base menor.", isCorrect: false, rationale: "Incorrecto. Eso es parte de la suma de las bases de la fórmula del área." },
      { text: "La medida del contorno.", isCorrect: false, rationale: "Falso. El contorno es el perímetro, no la altura." },
    ],
  },
  {
    topic: "Números Impares",
    question: "¿Cómo se define un número impar desde un punto de vista aritmético?",
    options: [
      { text: "Es un número que al dividirse entre 2 deja como residuo o sobrante exactamente 1.", isCorrect: true, rationale: "¡Espectacular! Si dividís un número impar entre 2, se forman parejas y siempre te va a quedar una unidad suelta (un residuo de 1)." },
      { text: "Es un número que solo se puede multiplicar por 3.", isCorrect: false, rationale: "Incorrecto. Los impares se pueden multiplicar por cualquier número." },
      { text: "Es un número que divide exactamente al número cero.", isCorrect: false, rationale: "Incorrecto. El número cero es divisible por cualquier número excepto por sí mismo (0 ÷ n = 0 para n ≠ 0)." },
      { text: "Es un número menor que 10.", isCorrect: false, rationale: "Incorrecto. Hay números impares gigantescos como 1 001 o 9 999." },
    ],
  },
];
