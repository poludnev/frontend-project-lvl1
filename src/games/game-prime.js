import { cons } from '@hexlet/pairs';

const randNum = (mltplr = 100, shifter = 0) => Math.floor(Math.random() * mltplr + shifter);
export default () => {
  const intro = 'Answer \x1b[31m"yes"\x1b[0m \x1b[1mif\x1b[22m given number is prime. Otherwise answer \x1b[31m"no"\x1b[0m.\n';

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
