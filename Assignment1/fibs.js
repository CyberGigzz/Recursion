'use strict';

const fibs = (count) => {
  const result = [];

  for (let i = 0; i < count; i++) {
    if (i === 0) {
      result.push(0);
    } else if (i === 1) {
      result.push(1);
    } else {
      const nextFib = result[i - 1] + result[i - 2];
      result.push(nextFib);
    }
  }

  return result;
};

console.log(fibs(4)); // [ 0, 1, 1, 2 ]
console.log(fibs(5)); // [ 0, 1, 1, 2, 3 ]
console.log(fibs(6)); // [ 0, 1, 1, 2, 3, 5 ]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibs(14)); // [ 0,   1,  1,  2,  3,  5,8,  13, 21, 34, 55, 89, 144, 233]
