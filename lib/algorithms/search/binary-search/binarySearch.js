const { compare } = require('./../../../utils');

/**
 * Searches and returns the index of the given element.
 * Returns -1 if the element doesn't exist within the array.
 *
 * Time complexity (worst): O(log(n))
 * Time complexity (average): Θ(log(n))
 * Time complexity (best): Ω(1)
 *
 * Space complexity (worst): O(1)
 *
 * @function binarySearch
 *
 * @param {[Any]} arr sorted Array (unsorted arrays give a undefined result)
 * @param {Any} elem element to perform the search on
 * @param {Function} comparator (optional) function that defines a comparison (default = null)
 *
 * @return {Integer} index corresponding with the given element, or -1 if element isn't found
 */
module.exports = (arr, elem, comparator = undefined) => {
    let min = 0;
    let max = arr.length - 1;
    let i;
    while (min <= max) {
        i = Math.floor((min + max) / 2);
        const comparison = compare(arr[i], elem, comparator);
        if (comparison === 0) {
            // Element is the same as the item in the array
            return i;
        } if (comparison < 0) {
            // Element is larger than the item in the array
            min = i + 1;
        } else {
            // Element is smaller than the item in the array
            max = i - 1;
        }
    }
    return -1;
};
