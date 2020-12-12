const { input } = require('./constants/constants');

const getFormattedPolicies = (input) => {
  let policies = [];
  input.map((policy) => {
    const dict = {};
    const count = policy.split(' ')[0];
    dict.nums = count.split('-');
    dict.letter = policy.split(':')[0][policy.split(':')[0].length - 1];
    dict.password = policy.split(': ')[1];
    policies.push(dict);
  });
  return policies;
};

const run = (array) => {
  let validCount = 0;
  const policies = getFormattedPolicies(array);
  policies.map(({ password, nums, letter }) => {
    let letterCount = 0;
    password
      .split('')
      .map((passLetter) => passLetter === letter && letterCount++);
    letterCount >= nums[0] && letterCount <= nums[1] && validCount++;
  });
  return validCount;
};

console.log(run(input));

const runPt2 = (array) => {
  let validCount = 0;
  const policies = getFormattedPolicies(array);
  policies.map(({ password, nums, letter }) => {
    const lettersArray = password.split('');
    let matchCount = 0;
    if (lettersArray[parseInt(nums[0]) - 1] === letter) {
      matchCount++;
    }
    if (lettersArray[parseInt(nums[1]) - 1] === letter) {
      matchCount++;
    }
    matchCount === 1 && validCount++;
  });
  return validCount;
};

console.log(runPt2(input));
