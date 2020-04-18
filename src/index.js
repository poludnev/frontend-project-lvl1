import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { decorateRed } from './funcs';

export default (intro, game) => {
  const attemptsLimit = 3;
  console.log('Welcome to the Brain Games!');
  console.log(`${intro}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < attemptsLimit; i += 1) {
    const gameCall = game();
    const question = car(gameCall);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(gameCall);
    if (userAnswer !== correctAnswer) {
      console.log(`"${decorateRed(userAnswer)}" is wrong answer, correct answer was "${decorateRed(correctAnswer)}"`);
      console.log(`Let's try again, ${decorateRed(name)}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
