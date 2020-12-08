const fs = require('fs');

const array = fs
  .readFileSync('./constants/input.txt')
  .toString()
  .split('\n')
  .map((num) => parseInt(num));

module.exports = { array };
