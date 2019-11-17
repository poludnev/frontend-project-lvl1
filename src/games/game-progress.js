import { cons } from '@hexlet/pairs';
import randNum from '../modules/random-number';

export default () => {
  const intro = 'What number is missing in the progression?\n';
  let result = 0;
  let questExpression = '';

  const progressionLength = 10;
  const array1 = [];
  array1[0] = randNum();
  for (let i = 1; i < progressionLength; i += 1) {
    array1[i] = array1[i - 1] + 2;
  }

  const arrayMissPosition = randNum(progressionLength);
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === arrayMissPosition) { questExpression = `${questExpression} ..`; } else {
      questExpression = `${questExpression} ${array1[i]}`;
    }
  }
  result = array1[arrayMissPosition];
  return cons(intro, cons(questExpression, result));
};
