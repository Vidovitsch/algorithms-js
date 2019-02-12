const compare = require('./../../util/Compare');

/**
 * Merges two parts of the array in sorted order.
 *
 * @param  {Any[]} arr        array to be sorted
 * @param  {Any[]} copy       copy array to supplement the merge process
 * @param  {Integer} low        lowest index to be merged
 * @param  {Integer} mid        boundry index between first part and second part to be merged
 * @param  {Integer} high       largest index to be merged
 * @param  {Function} comparator (optional) custom comparator that defines the sorting
 */
function merge(arr, copy, low, mid, high, comparator) {
  for (let h = low; h <= high; h++) {
    copy[h] = arr[h];
  }

  let i = low;
  let j = mid + 1;
  for (let k = low; k <= high; k++) {
    if (i > mid) {
      arr[k] = copy[j++];
    } else if (j > high) {
      arr[k] = copy[i++];
    } else if (compare(copy[i], copy[j], comparator) == -1) {
      arr[k] = copy[i++];
    } else {
      arr[k] = copy[j++];
    }
  }
}

/**
 * Orders an array by value or by the rules defined in a given custom comparator function.
 *
 * Time complexity: O(n * log(n))
 *
 * @param  {Any[]} arr        array to be sorted
 * @param  {Any[]} copy       copy array to supplement the merge process
 * @param  {Integer} low        lowest index to be merged
 * @param  {Integer} high       largest index to be merged
 * @param  {Function} comparator (optional) custom comparator that defines the sorting
 */
function sort(arr, copy, low, high, comparator) {
  if (high <= low) return;
  let mid = low + Math.floor((high - low) / 2);
  sort(arr, copy, low, mid, comparator)
  sort(arr, copy, mid + 1, high, comparator);

 // (Optimization) Merging unnecessary if the combination
 // of both sub-arrays are already in order
 if (compare(arr[mid], arr[mid + 1], comparator) == -1) return;

  merge(arr, copy, low, mid, high, comparator);
}

/**
 * Abstraction method of the merge sort.
 *
 * @param  {Any[]} arr        array to be sorted
 * @param  {Any[]} comparator (optional) custom comparator that defines the sorting
 */
module.exports = (arr, comparator) => {
  sort(arr, new Array(arr.length), 0, arr.length - 1, comparator);
}
