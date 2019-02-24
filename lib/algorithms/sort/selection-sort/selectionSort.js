const { compare, swap } = require('./../../../utils');


/**
 * Sorting an array using the common selection sort algorithm.
 *
 * Time complexity (worst): O(n ^ 2)
 * Time complexity (avgerage): Θ(n ^ 2)
 * Time complexity (best): Ω(n ^ 2)
 *
 * Space complexity (worst): O(n)
 *
 * @function selectionSort
 *
 * @param {[Any]} arr array of items
 * @param {Function} comparator (optional) function that defines a comparison (default = null)
 */
module.exports = (arr, comparator = null) => {
    for (let i = 0; i < arr.length; i += 1) {
        let min = i;
        for (let j = i + 1; j < arr.length; j += 1) {
            if (compare(arr[j], arr[min], comparator) < 0) {
                min = j;
            }
        }
        swap(arr, i, min);
    }
};
