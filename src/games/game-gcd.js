import { cons } from '@hexlet/pairs';
import { randNum } from '../funcs';
import runGame from '..';

const getGCD = (num1, num2) => {
  if (num1 % num2 === 0) return num2;
  return getGCD(num2, num1 % num2);
};

const intro = 'Find the greatest common divisor of given numbers.';

const findGcdGame = () => {
  const number1 = randNum();
  const number2 = randNum();
  const question = `${number1} ${number2}`;
  const answer = getGCD(number1, number2).toString();
  return cons(question, answer);
};

export default () => runGame(intro, findGcdGame);
