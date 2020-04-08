import { cons } from '@hexlet/pairs';
import randNum from '../modules/random-number';
import brainGameNew from '..';

const getGCD = (number1, number2) => {
  let result = 1;
  if (number1 > 0 && number2 > 0) {
    let mediateNumber1 = number1;
    let mediateNumber2 = number2;
    if (number1 < number2) { mediateNumber1 = number2; mediateNumber2 = number1; }
    for (let devisor = mediateNumber2; devisor >= 0; devisor -= 1) {
      if (mediateNumber1 % devisor === 0 && mediateNumber2 % devisor === 0) {
        result = devisor;
        return result;
      }
    }
  }
  return result;
};

const gcdGame = () => {
  const intro = 'Find the greatest common divisor of given numbers.\n';
  const number1 = randNum();
  const number2 = randNum();
  const questString = `${number1} ${number2}`;
  return cons(intro, cons(questString, getGCD(number1, number2)));
};

export default () => brainGameNew(gcdGame);
