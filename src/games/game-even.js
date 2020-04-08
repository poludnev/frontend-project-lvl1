import { cons } from '@hexlet/pairs';
import randNum from '../modules/random-number';
import brainGameNew from '..';

const isEven = (num) => (num % 2 === 0);
const intro = {
  string: 'Answer "yes" if number is even, otherwise answer "no". \n',
  wordsToDecorate: [
    { word: '"yes"', style: 'red' },
    { word: '"no".', style: 'red' },
  ],
};
const evenGame = () => {
  const question = randNum();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(intro, cons(question, correctAnswer));
};
export default () => brainGameNew(evenGame);
