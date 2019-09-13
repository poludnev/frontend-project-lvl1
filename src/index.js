import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (game) => {
  const attemptsLimit = 3;
  console.log('Welcome to the Brain Games!');
  console.log(car(game()));
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < attemptsLimit; i += 1) {
    const gameCall = game();
    console.log(`Question: ${car(cdr(gameCall))}`);
    const answer = readlineSync.question('Your answer: ');
    const result = cdr(cdr(gameCall));
    if (answer !== result.toString()) {
      console.log(`\x1b[31m'${answer}'\x1b[0m is wrong answer, correct answer was \x1b[31m'${result}'\x1b[0m.`);
      console.log(`Let\x1b[31m's try again, ${name}!\x1b[0m`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
