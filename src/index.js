import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { decorate } from './funcs';

export default (intro, callGame) => {
  const attemptsLimit = 3;
  console.log('Welcome to the Brain Games!');
  console.log(`${intro}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < attemptsLimit; i += 1) {
    const gameRoundData = callGame();
    const question = car(gameRoundData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(gameRoundData);
    if (userAnswer !== correctAnswer) {
      console.log(`"${decorate(userAnswer)}" is wrong answer, correct answer was "${decorate(correctAnswer)}"`);
      console.log(`Let's try again, ${decorate(name, 'yellow')}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
