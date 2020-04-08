import { cons } from '@hexlet/pairs';
import randNum from '../modules/random-number';
import brainGameNew from '..';

const progressionGame = () => {
  const intro = 'What number is missing in the progression?\n';

  let result = 0;
  let questExpression = '';

  const progressionLength = 10;
  const progressionStep = randNum();
  const progressionNumbers = [];


  progressionNumbers[0] = randNum();
  for (let i = 1; i < progressionLength; i += 1) {
    progressionNumbers[i] = progressionNumbers[i - 1] + progressionStep;
  }

  const arrayMissPosition = randNum(progressionLength);
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === arrayMissPosition) { questExpression = `${questExpression} ..`; } else {
      questExpression = `${questExpression} ${progressionNumbers[i]}`;
    }
  }
  result = progressionNumbers[arrayMissPosition];
  return cons(intro, cons(questExpression, result));
};
export default () => brainGameNew(progressionGame);
