const compare = require('./../../util/Compare');
const swap = require('./../../util/Swap');

/**
 * Orders an array by value or by the rules defined in a given custom comparator function.
 * The shell sort uses increments of '3 * x + 1'.
 *
 * Time complexity (worst): O(n(log(n))^2)
 *
 * @param  {Any[]} arr        array to be sorted
 * @param  {Function} comparator (optional) custom comparator that defines the sorting
 */
module.exports = (arr, comparator) => {
  let h = 1;
  while (h < arr.length / 3) {
    h = h * 3 + 1;
  }
  while (h > 0) {
    for (let i = h; i < arr.length; i++) {
      const temp = arr[i];
      for (var j = i - 1; j >= 0 && compare(arr[j], temp, comparator) === 1; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = temp;
    }
    h = (h - 1) / 3;
  }
};
