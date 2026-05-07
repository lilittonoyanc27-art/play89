/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lesson, ExerciseType } from './types';

export const LLEVAR_LESSON: Lesson = {
  id: 'llevar-lesson',
  title: 'LLEVAR Բայը',
  description: 'Կրել, տանել, վերցնել',
  progress: 0,
  exercises: [
    { id: 'll1', type: ExerciseType.MULTIPLE_CHOICE, question: 'Yo ___ una camisa roja (Ես կարմիր շապիկ եմ հագել)', options: ['llevo', 'llevas', 'lleva'], answer: 'llevo', image: '👕' },
    { id: 'll2', type: ExerciseType.MULTIPLE_CHOICE, question: 'Gor ___ los libros (Գոռը տանում է գրքերը)', options: ['llevas', 'llevamos', 'lleva'], answer: 'lleva', image: '📚' },
    { id: 'll3', type: ExerciseType.MULTIPLE_CHOICE, question: 'Gayane ___ un sombrero (Գայանեն գլխարկ է կրում)', options: ['llevan', 'lleva', 'llevo'], answer: 'lleva', image: '👒' },
    { id: 'll4', type: ExerciseType.MULTIPLE_CHOICE, question: '¿Qué ___ tú hoy? (Ի՞նչ ես հագել այսօր)', options: ['llevas', 'llevo', 'lleva'], answer: 'llevas', image: '👗' },
    { id: 'll5', type: ExerciseType.MULTIPLE_CHOICE, question: 'Nosotros ___ comida al parque (Մենք ուտելիք ենք տանում այգի)', options: ['llevan', 'llevamos', 'llevo'], answer: 'llevamos', image: '🧺' },
    { id: 'll6', type: ExerciseType.MULTIPLE_CHOICE, question: 'Gor y Gayane ___ maletas (Գոռը և Գայանեն ճամպրուկներ են տանում)', options: ['llevan', 'llevamos', 'lleva'], answer: 'llevan', image: '🧳' },
    { id: 'll7', type: ExerciseType.MULTIPLE_CHOICE, question: 'Usted ___ gafas de sol (Դուք (հարգական) արևային ակնոց եք կրում)', options: ['lleva', 'llevas', 'llevo'], answer: 'lleva', image: '🕶️' },
    { id: 'll8', type: ExerciseType.MULTIPLE_CHOICE, question: '¿Quién ___ el agua? (Ո՞վ է տանում ջուրը)', options: ['llevo', 'llevas', 'lleva'], answer: 'lleva', image: '💧' },
    { id: 'll9', type: ExerciseType.MULTIPLE_CHOICE, question: 'Yo ___ a mi hermana al colegio (Ես քրոջս տանում եմ դպրոց)', options: ['llevo', 'llevas', 'lleva'], answer: 'llevo', image: '🏫' },
    { id: 'll10', type: ExerciseType.MULTIPLE_CHOICE, question: 'Tú siempre ___ buenas noticias (Դու միշտ լավ լուրեր ես բերում/տանում)', options: ['llevas', 'llevo', 'llevan'], answer: 'llevas', image: '🗞️' },
    { id: 'll11', type: ExerciseType.SENTENCE_BUILDER, question: 'Գոռը կրում է կապույտ տաբատ:', options: ['Gor', 'lleva', 'pantalones', 'azules.'], answer: 'Gor lleva pantalones azules.' },
    { id: 'll12', type: ExerciseType.SENTENCE_BUILDER, question: 'Գայանեն տանում է պայուսակը:', options: ['Gayane', 'lleva', 'la', 'mochila.'], answer: 'Gayane lleva la mochila.' },
    { id: 'll13', type: ExerciseType.SENTENCE_BUILDER, question: 'Մենք տանում ենք պիցցա:', options: ['Nosotros', 'llevamos', 'pizza.'], answer: 'Nosotros llevamos pizza.' },
    { id: 'll14', type: ExerciseType.SENTENCE_BUILDER, question: 'Ես ակնոց եմ կրում:', options: ['Yo', 'llevo', 'gafas.'], answer: 'Yo llevo gafas.' },
    { id: 'll15', type: ExerciseType.SENTENCE_BUILDER, question: 'Նրանք տանում են նվերները:', options: ['Ellos', 'llevan', 'los', 'regalos.'], answer: 'Ellos llevan los regalos.' },
    { id: 'll16', type: ExerciseType.MULTIPLE_CHOICE, question: 'Vosotros ___ muchas cosas (Դուք շատ բաներ եք տանում)', options: ['lleváis', 'llevamos', 'llevan'], answer: 'lleváis', image: '📦' },
    { id: 'll17', type: ExerciseType.MULTIPLE_CHOICE, question: 'Ustedes ___ el postre (Դուք (հոգնակի) տանում եք աղանդերը)', options: ['llevan', 'llevamos', 'lleváis'], answer: 'llevan', image: '🍰' },
    { id: 'll18', type: ExerciseType.MULTIPLE_CHOICE, question: '¿Vosotros ___ las llaves? (Դուք վերցրել եք բանալիները?)', options: ['lleváis', 'llevas', 'llevan'], answer: 'lleváis', image: '🔑' },
    { id: 'll19', type: ExerciseType.SENTENCE_BUILDER, question: 'Դուք (vosotros) կրում եք սպիտակ շապիկներ:', options: ['Vosotros', 'lleváis', 'camisetas', 'blancas.'], answer: 'Vosotros lleváis camisetas blancas.' },
    { id: 'll20', type: ExerciseType.SENTENCE_BUILDER, question: 'Պարոն, Դուք (usted) տանում եք գիրքը:', options: ['Usted', 'lleva', 'el', 'libro.'], answer: 'Usted lleva el libro.' },
  ]
};
