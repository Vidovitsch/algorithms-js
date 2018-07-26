const compare = require('./../../util/Compare');
const swap = require('./../../util/Swap');

/**
 * Orders an array by value or by the rules defined in a given custom comparator function.
 *
 * Time complexity (worst): O(n^2)
 * 
 * @param  {Any[]} arr        array to be sorted
 * @param  {Function} comparator (optional) custom comparator that defines the sorting
 */
module.exports = (arr, comparator) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (compare(arr[j], arr[min], comparator) === -1) {
        min = j;
      }
    }
    swap(arr, i, min);
  }
};
