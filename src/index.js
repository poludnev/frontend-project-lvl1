import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import isEvenGame from './games/game-even';
import calcGame from './games/game-calc';
import gcdGame from './games/game-gcd';
import progressionGame from './games/game-progress';
import primeGame from './games/game-prime';

// game selector
const selectGameType = (gameShortName) => {
  if (gameShortName === 'even') return isEvenGame();
  if (gameShortName === 'calc') return calcGame();
  if (gameShortName === 'gcd') return gcdGame();
  if (gameShortName === 'progression') return progressionGame();
  if (gameShortName === 'prime') return primeGame();
  return null;
};
// game selector end


export default (gameShortName) => {
  const attemptsLimit = 3;
  console.log('Welcome to the Brain Games!');
  console.log(car(selectGameType(gameShortName)));
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < attemptsLimit; i += 1) {
    const res = cdr(selectGameType(gameShortName));
    console.log(`Question: ${car(res)}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== cdr(res).toString()) {
      console.log(`\x1b[31m'${answer}'\x1b[0m is wrong answer, correct answer was \x1b[31m'${cdr(res)}'\x1b[0m. \nLet\x1b[31m's try again, ${name}!\x1b[0m`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
