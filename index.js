const binarySearch = require('./algorithms/search/BinarySearch');
const selectionSort = require('./algorithms/sort/SelectionSort');
const insertionSort = require('./algorithms/sort/InsertionSort');
const shellSort = require('./algorithms/sort/ShellSort');

let h = 1;
while (h < 100 / 3) {
  console.log(h);
  h = h * 3 + 1;
}
console.log(h);
console.log('Break');
while (h > 0) {
  console.log(h);
  h = (h - 1) / 3;
}

module.exports = {
  binarySearch,
  selectionSort,
  insertionSort,
  shellSort,
};
