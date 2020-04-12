import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { getDecoratedString, decorate } from './utils/funcs';

export default (game) => {
  const attemptsLimit = 3;
  console.log('Welcome to the Brain Games!');
  const intro = car(game());

  const decorStyle = [
    { word: '"yes"', style: 'red' },
    { word: '"no".', style: 'red' },
  ];
  const decoratedIntro = getDecoratedString(intro, decorStyle);

  console.log(`${decoratedIntro}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < attemptsLimit; i += 1) {
    const gameCall = game();
    const question = car(cdr(gameCall));
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const result = cdr(cdr(gameCall));
    if (answer !== result) {
      console.log(`${decorate(['\'', answer, '\''], 'red')} is wrong answer, correct answer was ${decorate(['\'', result, '\''], 'red')}.`);
      console.log(`Let${decorate(['\'s try again,'], 'red')} ${decorate([name, '!'], 'red')}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
