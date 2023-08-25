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

console.log(fibs(4));
console.log(fibs(5));
console.log(fibs(6));
console.log(fibs(8));
console.log(fibs(14));
