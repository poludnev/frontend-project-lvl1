import { cons } from '@hexlet/pairs';
import randNum from '../modules/random-number';

const getGCD = (number1, number2) => {
  let result = 1;
  const questExpression = `${number1} ${number2}`;
  if (number1 > 0 && number2 > 0) {
    let mediateNumber1 = number1;
    let mediateNumber2 = number2;
    if (number1 < number2) { mediateNumber1 = number2; mediateNumber2 = number1; }
    for (let devisor = mediateNumber2; devisor >= 0; devisor -= 1) {
      if (mediateNumber1 % devisor === 0 && mediateNumber2 % devisor === 0) {
        result = devisor;
        return cons(questExpression, result);
      }
    }
  }
  return cons(questExpression, result);
};

export default () => {
  const intro = 'Find the greatest common divisor of given numbers.\n';
  return cons(intro, getGCD(randNum(), randNum()));
};
