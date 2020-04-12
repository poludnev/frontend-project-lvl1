import { cons } from '@hexlet/pairs';
import { randNum } from '../utils/funcs';
import brainGameNew from '..';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const primeGame = () => {
  const intro = 'Answer "yes" if number is prime, otherwise answer "no".';

  const question = randNum();
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(intro, cons(question, answer.toString()));
};
export default () => brainGameNew(primeGame);
