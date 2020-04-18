import { cons } from '@hexlet/pairs';
import { randNum } from '../funcs';
import brainGameNew from '..';

const makeAProgression = (start, step, length = 10) => {
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
  const progression = makeAProgression(progressStart, progressStep);
  const progressMissPosition = randNum(0, progression.length - 1);
  const answer = progression[progressMissPosition].toString();
  progression[progressMissPosition] = '..';
  const question = progression.join(' ');
  return cons(question, answer);
};
export default () => brainGameNew(intro, findHiddenProgresElementGame);
