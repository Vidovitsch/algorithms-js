const { compare } = require('./../../../utils');

/**
 * Sorting an array using the common insertion sort algorithm.
 *
 * Time complexity (worst): O(n^2)
 * Time complexity (avgerage): Θ(n^2)
 * Time complexity (best): Ω(n)
 *
 * Space complexity (worst): O(1)
 *
 * @function insertionSort
 *
 * @param {[Any]} arr array of items
 * @param {Function} comparator (optional) function that defines a comparison (default = null)
 */
module.exports = (arr, comparator = null) => {
    for (let i = 1; i < arr.length; i += 1) {
        const temp = arr[i];
        let j;
        for (j = i - 1; j >= 0 && compare(arr[j], temp, comparator) > 0; j -= 1) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
};
