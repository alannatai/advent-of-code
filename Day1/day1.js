const { input } = require('./constants/constants');

const run = (arr, total) => {
  const dict = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const remainder = total - num;
    dict[num] = remainder;
    if (dict[remainder]) {
      return dict[remainder] * remainder;
    }
  }
};

console.log(run(input, 2020));

const runPt2 = (arr, total) => {
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const remainder = total - num;
    const product = run(arr, remainder);
    if (product) {
      return product * num;
    }
  }
};

console.log(runPt2(input, 2020));
