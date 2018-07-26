const binarySearch = require('./algorithms/search/BinarySearch');
const selectionSort = require('./algorithms/sort/SelectionSort');
const insertionSort = require('./algorithms/sort/InsertionSort');
const shellSort = require('./algorithms/sort/ShellSort');
const shuffle = require('./algorithms/sort/Shuffle');

const arr = [15, -21, 0, 24, -102, 5, 123];
shuffle(arr);
console.log(arr);

module.exports = {
  binarySearch,
  selectionSort,
  insertionSort,
  shellSort,
  shuffle,
};
