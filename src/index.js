import readlineSync from 'readline-sync';

export const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const randNum = (mltplr = 100, shifter = 0) => Math.floor(Math.random() * mltplr + shifter);
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

const gcdGame = () => {
  const num1 = randNum();
  const num2 = randNum();
  console.log(`Question: ${num1} ${num2}`);
  if (num1 === 0 || num2 === 0) return 1;
  let c1 = num1;
  let c2 = num2;
  if (num1 < num2) { c1 = num2; c2 = num1; }
  if (c1 % c2 === 0) return c2;
  for (let dev = c2; dev >= 0; dev -= 1) {
    if (c1 % dev === 0 && c2 % dev === 0) return dev;
  }
  return NaN;
};

const progressionGame = () => {
  const progressLim = 10;
  const progressstart = randNum();
  const array1 = [];
  array1[0] = progressstart;
  for (let i = 1; i < progressLim; i += 1) {
    array1[i] = array1[i - 1] + 2;
  }

  const arrayMissPosition = randNum(progressLim);
  let quest = '';
  for (let i = 0; i < progressLim; i += 1) {
    if (i === arrayMissPosition) { quest = `${quest} ..`; } else {
      quest = `${quest} ${array1[i]}`;
    }
  }
  console.log(`Question: ${quest}`);
  return array1[arrayMissPosition];
};

const gameSelect = (arg) => {
  if (arg === 'even') return evenGame();
  if (arg === 'calc') return calcGame();
  if (arg === 'gcd') return gcdGame();
  if (arg === 'progression') return progressionGame();
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
