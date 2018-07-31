const compare = require('./../../util/Compare');
const swap = require('./../../util/Swap');
const shuffle = require('./Shuffle');

function sort(arr, low, high, comparator) {
  if (high <= low) return;
  let lt = low
  let gt = high;
  let pivot = arr[low];
  let i = low + 1;
  while (i <= gt) {
      if (compare(arr[i], pivot, comparator) === -1) {
        swap(arr, lt++, i++);
      } else if (compare(arr[i], pivot, comparator) === 1) {
        swap(arr, i, gt--);
      } else {
        i++;
      }
  }
  sort(arr, low, lt - 1);
  sort(arr, gt + 1, high);
}

module.exports = (arr, comparator) => {
  shuffle(arr);
  sort(arr, 0, arr.length - 1, comparator);
}
