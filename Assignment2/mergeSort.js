'use strict';

function mergeSort(array) {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

const merge = (leftArray, rightArray) => {
  const mergedCollection = [];

  while (leftArray.length > 0 && rightArray.length > 0) {
    const arrayWithMin = leftArray[0] < rightArray[0] ? leftArray : rightArray;
    const mergeElement = arrayWithMin.shift();
    mergedCollection.push(mergeElement);
  }

  return mergedCollection.concat(leftArray, rightArray);
};

console.log(mergeSort([4, 1, -15, 0, 24, 5, -344])); // [-344, -15, 0, 1,   4, 5,24]
console.log(mergeSort([4, -7, -15, 0, 24, 55, -4])); // [-15, -7, -4, 0, 4, 24, 55]

console.log(mergeSort([])); // []
