import { cons } from '@hexlet/pairs';
import { randNum } from '../funcs';
import runGame from '..';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};
const intro = 'Answer "yes" if number is prime, otherwise answer "no".';
const checkIfPrimeGame = () => {
  const question = randNum();
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};
export default () => runGame(intro, checkIfPrimeGame);
