import { cons } from '@hexlet/pairs';
import { randNum } from '../utils';
import runGame from '..';

const isEven = (num) => (num % 2 === 0);

const intro = 'Answer "yes" if number is even, otherwise answer "no".';

const generateEvenGameRoundData = () => {
  const question = randNum();
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};
export default () => runGame(intro, generateEvenGameRoundData);
