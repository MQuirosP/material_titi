import { cienciasSem1Eval2Module } from '../../subjects/ciencias/sem1_eval2/content.js';
import { cienciasSem2Eval1Module } from '../../subjects/ciencias/sem2_eval1/content.js';
import { cienciasSem2Eval2Module } from '../../subjects/ciencias/sem2_eval2/content.js';
import { espanolSem2Eval1Module } from '../../subjects/espanol/sem2_eval1/content.js';
import { matematicasSem1Eval2Module } from '../../subjects/matematicas/sem1_eval2/content.js';
import { inglesSem2Eval1Module } from '../../subjects/ingles/sem2_eval1/content.js';

const registry = [
  cienciasSem1Eval2Module,
  cienciasSem2Eval1Module,
  cienciasSem2Eval2Module,
  espanolSem2Eval1Module,
  matematicasSem1Eval2Module,
  inglesSem2Eval1Module
];

export function getSubjectModule(subject, sem, evalNum) {
  const normSubject = String(subject || 'matematicas').toLowerCase();
  let normSem = String(sem || '2');
  let normEval = String(evalNum || '1');

  if (normSubject === 'ciencias' && normSem === '1' && normEval === '1') {
    normEval = '2';
  }

  const match = registry.find(m => m.subject === normSubject && m.sem === normSem && m.eval === normEval);
  if (match) return match;

  // Fallback por materia si no encuentra combinación exacta
  return registry.find(m => m.subject === normSubject) || matematicasSem1Eval2Module;
}
