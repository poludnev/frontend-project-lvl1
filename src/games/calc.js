import { cons } from '@hexlet/pairs';
import { randNum } from '../utils';
import runGame from '..';

const intro = 'What is the result of the expression?';

const generateCalcGameRoundData = () => {
  const operations = ['*', '+', '-'];
  const number1 = randNum();
  const number2 = randNum();
  const operation = operations[randNum(0, operations.length - 1)];
  const question = `${number1} ${operation} ${number2}`;
  let answer;
  switch (operation) {
    case '+':
      answer = number1 + number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    default:
      return null;
  }
  return cons(question, answer.toString());
};

export default () => runGame(intro, generateCalcGameRoundData);
