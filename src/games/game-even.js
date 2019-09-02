import { cons } from '@hexlet/pairs';

const isEven = (num) => (num % 2 === 0);
const randNum = (mltplr = 100, shifter = 0) => Math.floor(Math.random() * mltplr + shifter);
export default () => {
  const intro = 'Answer \x1b[31m"yes"\x1b[0m \x1b[1mif\x1b[22m number even otherwise, answer \x1b[31m"no"\x1b[0m.\n';
  const questNum = randNum();
  return cons(intro, cons(questNum, (isEven(questNum) ? 'yes' : 'no')));
};
