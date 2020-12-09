const { input } = require('./constants/constants');

const run = (array) => {
  let validCount = 0;
  array.forEach((policy) => {
    const count = policy.split(' ')[0];
    const countNums = count.split('-');
    const letter = policy.split(':')[0][policy.split(':')[0].length - 1];
    const password = policy.split(': ')[1];
    let letterCount = 0;
    password && password.split('').map(passLetter => passLetter === letter && letterCount++)
    letterCount >= countNums[0] && letterCount <= countNums[1] && validCount++
  });
  return validCount;
};

console.log(run(input));
