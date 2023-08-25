'use strict';

const fibsRec = (count, a = 0, b = 1) =>
  count === 0 ? [] : [a, ...fibsRec(count - 1, b, a + b)];

console.log(fibsRec(4));
