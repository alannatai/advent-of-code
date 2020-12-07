const fs = require('fs');
const array = fs.readFileSync('input.txt').toString().split('\n').map(num => parseInt(num));

const run = (arr) => {
  let dict = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let remainder = 2020 - num;
    dict[num] = remainder
    if(dict[remainder]) {
      return dict[remainder] * remainder
    }
  }
};

console.log(array);
console.log(run(array));