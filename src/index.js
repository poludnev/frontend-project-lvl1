import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { getDecoratedString, decorate } from './funcs';

export default (intro, game) => {
  const attemptsLimit = 3;
  console.log('Welcome to the Brain Games!');
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
    const question = car(gameCall);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const result = cdr(gameCall);
    if (answer !== result) {
      const subStr1 = decorate(['\'', answer, '\''], 'red');
      const subStr2 = decorate(['\'', result, '\''], 'red');
      console.log(`${subStr1} is wrong answer, correct answer was ${subStr2}`);
      const subStr3 = decorate(['\'s try again,'], 'red');
      const subStr4 = decorate([name, '!'], 'red');
      console.log(`Let${subStr3} ${subStr4}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
