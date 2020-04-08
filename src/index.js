import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { getDecoratedString, decorate } from './modules/decorate';

export default (game) => {
  const attemptsLimit = 3;
  console.log('Welcome to the Brain Games!');
  console.log(getDecoratedString(car(game()))); // show new intro;
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < attemptsLimit; i += 1) {
    const gameCall = game();
    console.log(`Question: ${car(cdr(gameCall))}`);
    const answer = readlineSync.question('Your answer: ');
    const result = cdr(cdr(gameCall));
    if (answer !== result.toString()) {
      console.log(`${decorate(['\'', answer, '\''], 'red')} is wrong answer, correct answer was ${decorate(['\'', result, '\''], 'red')}.`);
      console.log(`Let${decorate(['\'s try again,'], 'red')} ${decorate([name, '!'], 'red')}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
