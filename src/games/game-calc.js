// import { isEven, randNum } from '..';
import { cons } from '@hexlet/pairs';

const randNum = (mltplr = 100, shifter = 0) => Math.floor(Math.random() * mltplr + shifter);
export default () => {
  const intro = 'What is the result of the expression?\n';
  const number1 = randNum();
  const number2 = randNum();

  let result = 0;
  let questExpression = '';
  if (randNum(3) === 0) {
    result = number1 + number2;
    questExpression = `${number1} + ${number2}`;
  } else if (randNum(3) === 1) {
    result = number1 - number2;
    questExpression = `${number1} - ${number2}`;
  } else {
    result = number1 * number2;
    questExpression = `${number1} * ${number2}`;
  }
  return cons(intro, cons(questExpression, result));
};
