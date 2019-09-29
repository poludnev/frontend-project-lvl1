import { cons } from '@hexlet/pairs';
import decorate from '../modules/decorate';
import randNum from '../modules/random-number';

const isEven = (num) => (num % 2 === 0);
export default () => {
  const intro = `Answer ${decorate('"yes"')} \x1b[1mif\x1b[22m number even otherwise, answer ${decorate('"no"')}.\n`;
  const question = randNum();
  return cons(intro, cons(question, (isEven(question) ? 'yes' : 'no')));
};
