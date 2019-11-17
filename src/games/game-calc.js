import { cons } from '@hexlet/pairs';
import randNum from '../modules/random-number';

export default () => {
  const intro = 'What is the result of the expression?\n';
  const operationsList = ['*', '+', '-'];
  const number1 = randNum();
  const number2 = randNum();
  let questExpression;
  let result = 0;
  switch (operationsList[randNum(operationsList.length)]) {
    case '+':
      questExpression = `${number1} + ${number2}`;
      result = number1 + number2;
      break;
    case '*':
      questExpression = `${number1} * ${number2}`;
      result = number1 * number2;
      break;
    default:
      questExpression = `${number1} - ${number2}`;
      result = number1 - number2;
  }
  return cons(intro, cons(questExpression, result));
};
