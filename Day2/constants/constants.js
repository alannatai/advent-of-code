const fs = require('fs');

const input = fs.readFileSync('./constants/input.txt').toString().split('\n');
// const input = [];

// array.forEach((item) => {
//   const dict = {};
//   const key = item.split(':')[0];
//   const value = item.split(': ')[1];
//   dict[key] = value;
//   input.push(dict);
// });

module.exports = { input };
