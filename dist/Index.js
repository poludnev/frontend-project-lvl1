"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stGreet = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stGreet = () => {
  const userName = _readlineSync.default.question('May I have your name? ');

  console.log('Hello, ' + userName);
};

exports.stGreet = stGreet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbmRleC5qcyJdLCJuYW1lcyI6WyJzdEdyZWV0IiwidXNlck5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUdPLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBQzVCLFFBQU1DLFFBQVEsR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0Isd0JBQXRCLENBQWpCOztBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFZSixRQUF4QjtBQUNBLENBSE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5cbmV4cG9ydCBjb25zdCBzdEdyZWV0ID0gKCkgPT4ge1xuXHRjb25zdCB1c2VyTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuXHRjb25zb2xlLmxvZygnSGVsbG8sICcgKyB1c2VyTmFtZSk7XG59O1xuXG4iXX0=