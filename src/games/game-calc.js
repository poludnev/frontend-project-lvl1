import { cons } from '@hexlet/pairs';
import { randNum } from '../funcs';
import brainGameNew from '..';

const intro = 'What is the result of the expression?';

const calcGame = () => {
  const operationsList = ['*', '+', '-'];
  const number1 = randNum();
  const number2 = randNum();
  const operation = operationsList[randNum(0, operationsList.length - 1)];
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
      operationResult = null;
  }
  const answer = operationResult.toString();
  return cons(question, answer);
};

export default () => brainGameNew(intro, calcGame);
