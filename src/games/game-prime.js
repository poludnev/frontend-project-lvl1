import { cons } from '@hexlet/pairs';
// import decorate from '../modules/decorate';
import randNum from '../modules/random-number';
import brainGameNew from '..';

const primeGame = () => {
  const intro = {
    string: 'Answer "yes" if number is even, otherwise answer "no". \n',
    wordsToDecorate: [
      { word: '"yes"', style: 'red' },
      { word: '"no".', style: 'red' },
    ],
  };


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
export default () => brainGameNew(primeGame);
