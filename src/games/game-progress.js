import { cons } from '@hexlet/pairs';

const randNum = (mltplr = 100, shifter = 0) => Math.floor(Math.random() * mltplr + shifter);
export default () => {
  const intro = 'What number is missing in the progression?\n';
  let result = 0;
  let questExpression = '';

  const progressLim = 10;
  const progressstart = randNum();
  const array1 = [];
  array1[0] = progressstart;
  for (let i = 1; i < progressLim; i += 1) {
    array1[i] = array1[i - 1] + 2;
  }

  const arrayMissPosition = randNum(progressLim);
  for (let i = 0; i < progressLim; i += 1) {
    if (i === arrayMissPosition) { questExpression = `${questExpression} ..`; } else {
      questExpression = `${questExpression} ${array1[i]}`;
    }
  }
  result = array1[arrayMissPosition];
  return cons(intro, cons(questExpression, result));
};
