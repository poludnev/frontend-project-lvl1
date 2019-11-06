// import { isEven, randNum } from '..';
import { cons } from '@hexlet/pairs';
/*
import {
  l, map, toString as String1, tail, head,
} from 'hexlet-pairs-data';
*/
import randNum from '../modules/random-number';

export default () => {
  const intro = 'What is the result of the expression?\n';

  /*
  const number1 = randNum();
  const number2 = randNum();
  const operationsList = ['*', '+', '-'];
  const operator = operationsList[randNum(operationsList.length)];
  const questExpression = `${number1} ${operator} ${number2}`;
  const result  = eval(questExpression);
*/
  const operationsList = ['*', '+', '-'];
  const questExpression = `${randNum()} ${operationsList[randNum(operationsList.length)]} ${randNum()}`;
  const result = eval(questExpression);


  /*
switch (randNum(3)) {
case 0:
result = number1 + number2;
questExpression = `${number1} + ${number2}`;
break;
case 1:
result = number1 - number2;
questExpression = `${number1} - ${number2}`;
break;
default:
result = number1 + number2;
questExpression = `${number1} * ${number2}`;
};
*/


  return cons(intro, cons(questExpression, result));
};
