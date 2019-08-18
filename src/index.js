import readlineSync from 'readline-sync';

export const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
// export default greeting;

export const greeting3 = () => {
  console.log('Greeting3');
};

const randNum = () => Math.floor(Math.random() * 100);

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

let loopBreak = 1;
let answerCount = 0;
const attemptCount = 5;

export const evenGame = (name) => {
  while (loopBreak <= attemptCount) {
    if (answerCount >= 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    const num = randNum();

    console.log(`Question: ${num}`);

    if (readlineSync.question('Your answer: ') === isEven(num)) {
      answerCount += 1;
      console.log('Correct!');
    } else {
      console.log(`Wrong! You have ${attemptCount - loopBreak} attmpts`);
    }

    loopBreak += 1;
  }
};
