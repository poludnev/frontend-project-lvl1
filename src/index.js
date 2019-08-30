import readlineSync from 'readline-sync';

export const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const randNum = (multiplier = 100, shifter = 0) => Math.floor(Math.random() * multiplier + shifter);
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const evenGame = () => {
  const num = randNum();
  console.log(`Question: ${num}`);
  return isEven(num);
};

const calcGame = () => {
  const num1 = randNum();
  const num2 = randNum();
  let result = 0;
  if (randNum(3) === 0) {
    result = num1 + num2;
    console.log(`Question: ${num1} + ${num2}`);
  } else if (randNum(3) === 1) {
    result = num1 - num2;
    console.log(`Question: ${num1} - ${num2}`);
  } else {
    result = num1 * num2;
    console.log(`Question: ${num1} * ${num2}`);
  }
  return result;
};


const gameSelect = (arg) => {
  if (arg === 'even') return evenGame();
  if (arg === 'calc') return calcGame();
  return null;
};

// engine
export const brainGame = (attemptLim = 3, task) => {
  const name = greeting();
  for (let i = 0; i < attemptLim; i += 1) {
    const gameType = gameSelect(task);
    // console.log(gameType);
    const answer = readlineSync.question('Your answer: ');
    console.log(typeof (answer));
    console.log(typeof (gameType));
    console.log(gameType.toString());
    if (answer !== gameType.toString()) {
      console.log(`\x1b[31m'${answer}'\x1b[0m is wrong answer, correct answer was \x1b[31m'${gameType}'\x1b[0m. \nLet\x1b[31m's try again, ${name}!\x1b[0m`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
// engine
