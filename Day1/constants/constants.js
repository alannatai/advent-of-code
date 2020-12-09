const fs = require('fs');

const input = fs
  .readFileSync('./constants/input.txt')
  .toString()
  .split('\n')
  .map((num) => parseInt(num));

module.exports = { input };
