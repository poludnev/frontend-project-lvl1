import { cons } from '@hexlet/pairs';
import { randNum } from '../funcs';
import runGame from '..';

const makeArithmProgression = (start, step, length = 10) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result[i] = start + step * i;
  }
  return result;
};

const intro = 'What number is missing in the progression?';

const findHiddenProgresElementGame = () => {
  const progressStart = randNum();
  const progressStep = randNum();
  const progression = makeArithmProgression(progressStart, progressStep);
  const missingElementPosition = randNum(0, progression.length - 1);
  const answer = progression[missingElementPosition].toString();
  progression[missingElementPosition] = '..';
  const question = progression.join(' ');
  return cons(question, answer);
};
export default () => runGame(intro, findHiddenProgresElementGame);
