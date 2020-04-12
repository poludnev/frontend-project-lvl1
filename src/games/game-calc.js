import { cons } from '@hexlet/pairs';
import { randNum } from '../utils/funcs';
import brainGameNew from '..';

const calcGame = () => {
  const intro = 'What is the result of the expression?';
  const operationsList = ['*', '+', '-'];
  const number1 = randNum();
  const number2 = randNum();
  const operator = operationsList[randNum(0, operationsList.length)];
  const question = `${number1} ${operator} ${number2}`;
  let answer;
  switch (operator) {
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
      answer = 'error';
  }
  return cons(intro, cons(question, answer.toString()));
// во всех играх возвращается одинаковая строка для передачи в движок.
// не во всех есть необходимость к привдению правильного ответа к строке
// но это "стандартизирует" интерфейс для обращения к движку, по крайней мере мне так кажется.
};

export default () => brainGameNew(calcGame);
