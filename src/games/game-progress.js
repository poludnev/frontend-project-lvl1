import { cons } from '@hexlet/pairs';
import { randNum } from '../utils/funcs';
import brainGameNew from '..';


// я решил, что пора вынести прогрессию в отдельную функцию,
// применил формулу из замечания преподавателя, первый элемент задается стартовым значением
const makeAProgression = (start, step, length = 10) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result[i] = start + step * i;
  }
  return result;
};

// определение скрытого элемента через цикл убрал, т.к. это оказалось нечитабельно.
// спустя несколько месяцев перерыва мне понадобилось около 15 минут,
// чтобы понять, что там происходит.
const progressionGame = () => {
  const intro = 'What number is missing in the progression?';
  const progressionNumbers = makeAProgression(randNum(), randNum());
  const progressMissPosition = randNum(0, progressionNumbers.length - 1);
  const answer = progressionNumbers[progressMissPosition];
  progressionNumbers[progressMissPosition] = '..';
  const question = progressionNumbers.join(' ');
  return cons(intro, cons(question, answer.toString()));
};
export default () => brainGameNew(progressionGame);
