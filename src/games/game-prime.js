import { cons } from '@hexlet/pairs';
import decorate from '../modules/decorate';
import randNum from '../modules/random-number';

export default () => {
  const intro = `Answer ${decorate('"yes"')} if given number is prime. Otherwise answer ${decorate('"no"')}.\n`;

  let questExpression = '';

  const isPrime = (number1) => {
    questExpression = number1;
    for (let i = 2; i < number1; i += 1) {
      if (number1 % i === 0) return 'no';
    }
    return 'yes';
  };
  const result = isPrime(randNum());

  return cons(intro, cons(questExpression, result));
};
