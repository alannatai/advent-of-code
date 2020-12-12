const { input } = require('./constants/constants');
const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

const run = (array, rightNum, downNum) => {
  const repeats = (array.length * (rightNum + 1)) / array[0].length;
  const newArray = array.map((row) => row.repeat(repeats));
  let trees = 0;
  let pointer = 0;
  for (let i = 0; i < newArray.length; i += downNum) {
    const row = newArray[i];
    if (row.charAt(pointer) === '#') {
      trees += 1;
    }
    pointer += rightNum;
  }
  return trees;
};

console.log(run(input, 3, 1));

const runPt2 = (array, slopes) => {
  let product = 1;
  slopes.map(slope => {
    product *= run(array, slope[0], slope[1])
  })
  return product;
};

console.log(runPt2(input, slopes));
