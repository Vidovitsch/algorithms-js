const compare = require('./../../util/Compare');
const swap = require('./../../util/Swap');
const shuffle = require('./Shuffle');

function partition(arr, low, high, comparator) {
  let i = low + 1;
  let pivot = arr[low];
  for (let j = i; j <= high; j++) {
    if (compare(arr[j], pivot, comparator) === -1) {
      swap(arr, j, i++);
    }
  }
  swap(arr, low, i - 1);
  return i - 1;
}

function sort(arr, low, high, comparator) {
    if (high <= low) return;
    const pivotIndex = partition(arr, low, high, comparator);
    sort(arr, low, pivotIndex - 1, comparator);
    sort(arr, pivotIndex + 1, high, comparator);
}

module.exports = (arr, comparator) => {
  shuffle(arr);
  sort(arr, 0, arr.length - 1, comparator);
}
