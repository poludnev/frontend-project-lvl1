"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.evenGame = exports.greeting3 = exports.greeting = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const greeting = () => {
  const name = _readlineSync.default.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  return name;
}; // export default greeting;


exports.greeting = greeting;

const greeting3 = () => {
  console.log('Greeting3');
};

exports.greeting3 = greeting3;

const randNum = () => Math.floor(Math.random() * 100);

const isEven = num => num % 2 === 0 ? 'yes' : 'no';

let loopBreak = 1;
let answerCount = 0;
const attemptCount = 5;

const evenGame = name => {
  while (loopBreak <= attemptCount) {
    if (answerCount >= 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }

    const num = randNum();
    console.log(`Question: ${num}`);

    if (_readlineSync.default.question('Your answer: ') === isEven(num)) {
      answerCount += 1;
      console.log('Correct!');
    } else {
      console.log(`Wrong! You have ${attemptCount - loopBreak} attmpts`);
    }

    loopBreak += 1;
  }
};

exports.evenGame = evenGame;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJncmVldGluZyIsIm5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJncmVldGluZzMiLCJyYW5kTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaXNFdmVuIiwibnVtIiwibG9vcEJyZWFrIiwiYW5zd2VyQ291bnQiLCJhdHRlbXB0Q291bnQiLCJldmVuR2FtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRU8sTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFDNUIsUUFBTUMsSUFBSSxHQUFHQyxzQkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBYjs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsVUFBU0osSUFBSyxHQUEzQjtBQUNBLFNBQU9BLElBQVA7QUFDRCxDQUpNLEMsQ0FLUDs7Ozs7QUFFTyxNQUFNSyxTQUFTLEdBQUcsTUFBTTtBQUM3QkYsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNELENBRk07Ozs7QUFJUCxNQUFNRSxPQUFPLEdBQUcsTUFBTUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixHQUEzQixDQUF0Qjs7QUFFQSxNQUFNQyxNQUFNLEdBQUlDLEdBQUQsSUFBVUEsR0FBRyxHQUFHLENBQU4sS0FBWSxDQUFaLEdBQWdCLEtBQWhCLEdBQXdCLElBQWpEOztBQUVBLElBQUlDLFNBQVMsR0FBRyxDQUFoQjtBQUNBLElBQUlDLFdBQVcsR0FBRyxDQUFsQjtBQUNBLE1BQU1DLFlBQVksR0FBRyxDQUFyQjs7QUFFTyxNQUFNQyxRQUFRLEdBQUlmLElBQUQsSUFBVTtBQUNoQyxTQUFPWSxTQUFTLElBQUlFLFlBQXBCLEVBQWtDO0FBQ2hDLFFBQUlELFdBQVcsSUFBSSxDQUFuQixFQUFzQjtBQUNwQlYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsb0JBQW1CSixJQUFLLEdBQXJDO0FBQ0E7QUFDRDs7QUFDRCxVQUFNVyxHQUFHLEdBQUdMLE9BQU8sRUFBbkI7QUFFQUgsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsYUFBWU8sR0FBSSxFQUE3Qjs7QUFFQSxRQUFJVixzQkFBYUMsUUFBYixDQUFzQixlQUF0QixNQUEyQ1EsTUFBTSxDQUFDQyxHQUFELENBQXJELEVBQTREO0FBQzFERSxNQUFBQSxXQUFXLElBQUksQ0FBZjtBQUNBVixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0QsS0FIRCxNQUdPO0FBQ0xELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLG1CQUFrQlUsWUFBWSxHQUFHRixTQUFVLFVBQXhEO0FBQ0Q7O0FBRURBLElBQUFBLFNBQVMsSUFBSSxDQUFiO0FBQ0Q7QUFDRixDQW5CTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cbmV4cG9ydCBjb25zdCBncmVldGluZyA9ICgpID0+IHtcbiAgY29uc3QgbmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuICBjb25zb2xlLmxvZyhgSGVsbG8sICR7bmFtZX0hYCk7XG4gIHJldHVybiBuYW1lO1xufTtcbi8vIGV4cG9ydCBkZWZhdWx0IGdyZWV0aW5nO1xuXG5leHBvcnQgY29uc3QgZ3JlZXRpbmczID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygnR3JlZXRpbmczJyk7XG59O1xuXG5jb25zdCByYW5kTnVtID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcblxuY29uc3QgaXNFdmVuID0gKG51bSkgPT4gKG51bSAlIDIgPT09IDAgPyAneWVzJyA6ICdubycpO1xuXG5sZXQgbG9vcEJyZWFrID0gMTtcbmxldCBhbnN3ZXJDb3VudCA9IDA7XG5jb25zdCBhdHRlbXB0Q291bnQgPSA1O1xuXG5leHBvcnQgY29uc3QgZXZlbkdhbWUgPSAobmFtZSkgPT4ge1xuICB3aGlsZSAobG9vcEJyZWFrIDw9IGF0dGVtcHRDb3VudCkge1xuICAgIGlmIChhbnN3ZXJDb3VudCA+PSAzKSB7XG4gICAgICBjb25zb2xlLmxvZyhgQ29uZ3JhdHVsYXRpb25zLCAke25hbWV9IWApO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvbnN0IG51bSA9IHJhbmROdW0oKTtcblxuICAgIGNvbnNvbGUubG9nKGBRdWVzdGlvbjogJHtudW19YCk7XG5cbiAgICBpZiAocmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdZb3VyIGFuc3dlcjogJykgPT09IGlzRXZlbihudW0pKSB7XG4gICAgICBhbnN3ZXJDb3VudCArPSAxO1xuICAgICAgY29uc29sZS5sb2coJ0NvcnJlY3QhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGBXcm9uZyEgWW91IGhhdmUgJHthdHRlbXB0Q291bnQgLSBsb29wQnJlYWt9IGF0dG1wdHNgKTtcbiAgICB9XG5cbiAgICBsb29wQnJlYWsgKz0gMTtcbiAgfVxufTtcbiJdfQ==