const compare = require('./../../util/Compare');

/**
 * Orders an array by value or by the rules defined in a given custom comparator function.
 *
 * Time complexity (worst): O(n^2)
 *
 * @param  {Any[]} arr        array to be sorted
 * @param  {Function} comparator (optional) custom comparator that defines the sorting
 */
module.exports = (arr, comparator) => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    for (var j = i - 1; j >= 0 && compare(arr[j], temp, comparator) === 1; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
};
