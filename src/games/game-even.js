import { cons } from '@hexlet/pairs';
import decorate from '../modules/decorate';
import randNum from '../modules/random-number';

const isEven = (num) => (num % 2 === 0);
export default () => {
  const intro = `Answer ${decorate('"yes"')} \x1b[1mif\x1b[22m number even otherwise, answer ${decorate('"no"')}.\n`;
  const questNum = randNum();
  return cons(intro, cons(questNum, (isEven(questNum) ? 'yes' : 'no')));
};
