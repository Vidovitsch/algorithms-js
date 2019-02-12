const { compare } = require('./../../util');

/**
 * Searches and returns the index of the given element.
 * Returns -1 if the element doesn't exist within the array.
 *
 * Time complexity: O(log(n))
 * Space complexity: O(1)
 *
 * @function binarySearch
 * @param  {[Any]} arr sorted Array (unsorted arrays give a undefined result)
 * @param  {Any} elem element to perform the search on
 * @param  {Function} comparator (optional) custom comparator that defines a comparison
 * @return  {Integer} index corresponding with the given element, or -1 if element isn't found
 */
exports.binarySearch = (arr, elem, comparator = null) => {
  let min = 0;
  let max = arr.length - 1;
  let i;
  while (min <= max) {
    i = Math.floor((min + max) / 2);
    const comparison = compare(arr[i], elem, comparator);
    if (comparison === 0) {
      // Element is the same as the item in the array
      return i;
    } else if (comparison < 0) {
      // Element is larger than the item in the array
      min = i + 1;
    } else {
      // Element is smaller than the item in the array
      max = i - 1;
    }
  }
  return -1;
};
