"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const greeting = () => {
  const name = _readlineSync.default.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
};

var _default = greeting;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJncmVldGluZyIsIm5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFFBQU1DLElBQUksR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0Isd0JBQXRCLENBQWI7O0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFVBQVNKLElBQUssR0FBM0I7QUFDRCxDQUhEOztlQUllRCxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxuY29uc3QgZ3JlZXRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ01heSBJIGhhdmUgeW91ciBuYW1lPyAnKTtcbiAgY29uc29sZS5sb2coYEhlbGxvLCAke25hbWV9IWApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdyZWV0aW5nO1xuIl19