import { cons } from '@hexlet/pairs';
import { randNum } from '../utils/funcs';
import brainGameNew from '..';

const isEven = (num) => (num % 2 === 0);

const intro = 'Answer "yes" if number is even, otherwise answer "no".';

const evenGame = () => {
  const question = randNum();
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(intro, cons(question, answer.toString()));
};
export default () => brainGameNew(evenGame);
