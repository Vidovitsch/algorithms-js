const compare = require('./../../util/Compare');
const swap = require('./../../util/Swap');
const shuffle = require('./Shuffle');

/**
 * Partitions the subarray arr[low..high] so that arr[low..j-1] <= arr[j] <= arr[j+1..high]
 * and returns the index j.
 *
 * @param  {Any[]} arr            array to be sorted
 * @param  {Integer} low          lowest index of the sub-array to be partitioned
 * @param  {Integer} high         highest index of the sub-array to be partitioned
 * @param  {Function} comparator  (optional) custom comparator that defines the sorting
 * @return {Integer}              Index of the pivot
 */
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

/**
 * Orders an array by value or by the rules defined in a given custom comparator function.
 *
 * @param  {Any[]} arr        array to be sorted
 * @param  {Integer} low        lowest index for the partition
 * @param  {Integer} high       highest index for the partition
 * @param  {Function} comparator (optional) custom comparator that defines the sorting
 */
function sort(arr, low, high, comparator) {
    if (high <= low) return;
    const pivotIndex = partition(arr, low, high, comparator);
    sort(arr, low, pivotIndex - 1, comparator);
    sort(arr, pivotIndex + 1, high, comparator);
}

/**
 * Abstraction method of the quick sort.
 *
 * @param  {Any[]} arr        array to be sorted
 * @param  {Any[]} comparator (optional) custom comparator that defines the sorting
 */
module.exports = (arr, comparator) => {
  shuffle(arr);
  sort(arr, 0, arr.length - 1, comparator);
}
