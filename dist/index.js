"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _pairs = require("@hexlet/pairs");

var _gameEven = _interopRequireDefault(require("./games/game-even"));

var _gameCalc = _interopRequireDefault(require("./games/game-calc"));

var _gameGcd = _interopRequireDefault(require("./games/game-gcd"));

var _gameProgress = _interopRequireDefault(require("./games/game-progress"));

var _gamePrime = _interopRequireDefault(require("./games/game-prime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// game selector
const selectGameType = gameShortName => {
  if (gameShortName === 'even') return (0, _gameEven.default)();
  if (gameShortName === 'calc') return (0, _gameCalc.default)();
  if (gameShortName === 'gcd') return (0, _gameGcd.default)();
  if (gameShortName === 'progression') return (0, _gameProgress.default)();
  if (gameShortName === 'prime') return (0, _gamePrime.default)();
  return null;
}; // game selector end


var _default = gameShortName => {
  const attemptsLimit = 3;
  console.log('Welcome to the Brain Games!');
  console.log((0, _pairs.car)(selectGameType(gameShortName)));

  const name = _readlineSync.default.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  for (let i = 0; i < attemptsLimit; i += 1) {
    const res = (0, _pairs.cdr)(selectGameType(gameShortName));
    console.log(`Question: ${(0, _pairs.car)(res)}`);

    const answer = _readlineSync.default.question('Your answer: ');

    if (answer !== (0, _pairs.cdr)(res).toString()) {
      console.log(`\x1b[31m'${answer}'\x1b[0m is wrong answer, correct answer was \x1b[31m'${(0, _pairs.cdr)(res)}'\x1b[0m. \nLet\x1b[31m's try again, ${name}!\x1b[0m`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzZWxlY3RHYW1lVHlwZSIsImdhbWVTaG9ydE5hbWUiLCJhdHRlbXB0c0xpbWl0IiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsImkiLCJyZXMiLCJhbnN3ZXIiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7QUFDQSxNQUFNQSxjQUFjLEdBQUlDLGFBQUQsSUFBbUI7QUFDeEMsTUFBSUEsYUFBYSxLQUFLLE1BQXRCLEVBQThCLE9BQU8sd0JBQVA7QUFDOUIsTUFBSUEsYUFBYSxLQUFLLE1BQXRCLEVBQThCLE9BQU8sd0JBQVA7QUFDOUIsTUFBSUEsYUFBYSxLQUFLLEtBQXRCLEVBQTZCLE9BQU8sdUJBQVA7QUFDN0IsTUFBSUEsYUFBYSxLQUFLLGFBQXRCLEVBQXFDLE9BQU8sNEJBQVA7QUFDckMsTUFBSUEsYUFBYSxLQUFLLE9BQXRCLEVBQStCLE9BQU8seUJBQVA7QUFDL0IsU0FBTyxJQUFQO0FBQ0QsQ0FQRCxDLENBUUE7OztlQUdnQkEsYUFBRCxJQUFtQjtBQUNoQyxRQUFNQyxhQUFhLEdBQUcsQ0FBdEI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFDQUQsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQUlKLGNBQWMsQ0FBQ0MsYUFBRCxDQUFsQixDQUFaOztBQUNBLFFBQU1JLElBQUksR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0Isd0JBQXRCLENBQWI7O0FBQ0FKLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFVBQVNDLElBQUssR0FBM0I7O0FBQ0EsT0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixhQUFwQixFQUFtQ00sQ0FBQyxJQUFJLENBQXhDLEVBQTJDO0FBQ3pDLFVBQU1DLEdBQUcsR0FBRyxnQkFBSVQsY0FBYyxDQUFDQyxhQUFELENBQWxCLENBQVo7QUFDQUUsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsYUFBWSxnQkFBSUssR0FBSixDQUFTLEVBQWxDOztBQUNBLFVBQU1DLE1BQU0sR0FBR0osc0JBQWFDLFFBQWIsQ0FBc0IsZUFBdEIsQ0FBZjs7QUFDQSxRQUFJRyxNQUFNLEtBQUssZ0JBQUlELEdBQUosRUFBU0UsUUFBVCxFQUFmLEVBQW9DO0FBQ2xDUixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxZQUFXTSxNQUFPLHlEQUF3RCxnQkFBSUQsR0FBSixDQUFTLHdDQUF1Q0osSUFBSyxVQUE1STtBQUNBO0FBQ0Q7O0FBQ0RGLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDRDs7QUFDREQsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsb0JBQW1CQyxJQUFLLEdBQXJDO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5pbXBvcnQgeyBjYXIsIGNkciB9IGZyb20gJ0BoZXhsZXQvcGFpcnMnO1xuaW1wb3J0IGlzRXZlbkdhbWUgZnJvbSAnLi9nYW1lcy9nYW1lLWV2ZW4nO1xuaW1wb3J0IGNhbGNHYW1lIGZyb20gJy4vZ2FtZXMvZ2FtZS1jYWxjJztcbmltcG9ydCBnY2RHYW1lIGZyb20gJy4vZ2FtZXMvZ2FtZS1nY2QnO1xuaW1wb3J0IHByb2dyZXNzaW9uR2FtZSBmcm9tICcuL2dhbWVzL2dhbWUtcHJvZ3Jlc3MnO1xuaW1wb3J0IHByaW1lR2FtZSBmcm9tICcuL2dhbWVzL2dhbWUtcHJpbWUnO1xuXG4vLyBnYW1lIHNlbGVjdG9yXG5jb25zdCBzZWxlY3RHYW1lVHlwZSA9IChnYW1lU2hvcnROYW1lKSA9PiB7XG4gIGlmIChnYW1lU2hvcnROYW1lID09PSAnZXZlbicpIHJldHVybiBpc0V2ZW5HYW1lKCk7XG4gIGlmIChnYW1lU2hvcnROYW1lID09PSAnY2FsYycpIHJldHVybiBjYWxjR2FtZSgpO1xuICBpZiAoZ2FtZVNob3J0TmFtZSA9PT0gJ2djZCcpIHJldHVybiBnY2RHYW1lKCk7XG4gIGlmIChnYW1lU2hvcnROYW1lID09PSAncHJvZ3Jlc3Npb24nKSByZXR1cm4gcHJvZ3Jlc3Npb25HYW1lKCk7XG4gIGlmIChnYW1lU2hvcnROYW1lID09PSAncHJpbWUnKSByZXR1cm4gcHJpbWVHYW1lKCk7XG4gIHJldHVybiBudWxsO1xufTtcbi8vIGdhbWUgc2VsZWN0b3IgZW5kXG5cblxuZXhwb3J0IGRlZmF1bHQgKGdhbWVTaG9ydE5hbWUpID0+IHtcbiAgY29uc3QgYXR0ZW1wdHNMaW1pdCA9IDM7XG4gIGNvbnNvbGUubG9nKCdXZWxjb21lIHRvIHRoZSBCcmFpbiBHYW1lcyEnKTtcbiAgY29uc29sZS5sb2coY2FyKHNlbGVjdEdhbWVUeXBlKGdhbWVTaG9ydE5hbWUpKSk7XG4gIGNvbnN0IG5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ01heSBJIGhhdmUgeW91ciBuYW1lPyAnKTtcbiAgY29uc29sZS5sb2coYEhlbGxvLCAke25hbWV9IWApO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dGVtcHRzTGltaXQ7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJlcyA9IGNkcihzZWxlY3RHYW1lVHlwZShnYW1lU2hvcnROYW1lKSk7XG4gICAgY29uc29sZS5sb2coYFF1ZXN0aW9uOiAke2NhcihyZXMpfWApO1xuICAgIGNvbnN0IGFuc3dlciA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignWW91ciBhbnN3ZXI6ICcpO1xuICAgIGlmIChhbnN3ZXIgIT09IGNkcihyZXMpLnRvU3RyaW5nKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBcXHgxYlszMW0nJHthbnN3ZXJ9J1xceDFiWzBtIGlzIHdyb25nIGFuc3dlciwgY29ycmVjdCBhbnN3ZXIgd2FzIFxceDFiWzMxbScke2NkcihyZXMpfSdcXHgxYlswbS4gXFxuTGV0XFx4MWJbMzFtJ3MgdHJ5IGFnYWluLCAke25hbWV9IVxceDFiWzBtYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdDb3JyZWN0IScpO1xuICB9XG4gIGNvbnNvbGUubG9nKGBDb25ncmF0dWxhdGlvbnMsICR7bmFtZX0hYCk7XG59O1xuIl19