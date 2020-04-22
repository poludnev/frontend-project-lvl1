import { cons } from '@hexlet/pairs';
import { randNum } from '../funcs';
import runGame from '..';

const intro = 'What is the result of the expression?';

const calcGame = () => {
  const operations = ['*', '+', '-'];
  const number1 = randNum();
  const number2 = randNum();
  const operation = operations[randNum(0, operations.length - 1)];
  const question = `${number1} ${operation} ${number2}`;
  let operationResult;
  switch (operation) {
    case '+':
      operationResult = number1 + number2;
      break;
    case '*':
      operationResult = number1 * number2;
      break;
    case '-':
      operationResult = number1 - number2;
      break;
    default:
      return null;
  }
  return cons(question, operationResult.toString());
};

export default () => runGame(intro, calcGame);
