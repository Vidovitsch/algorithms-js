const { compare, swap } = require('./../../../utils');

/**
 * Sorting an array using the shell sort algorithm.
 * The shell sort uses increments of '3 * x + 1'.
 *
 * Time complexity (worst): O(n (log(n)) ^ 2)
 * Time complexity (avgerage): Θ(n (log(n)) ^ 2)
 * Time complexity (best): Ω(n log(n))
 *
 * Space complexity (worst): O(1)
 *
 * @function shellSort
 *
 * @param {[Any]} arr array of items
 * @param {Function} comparator (optional) function that defines a comparison (default = null)
 */
module.exports = (arr, comparator = undefined) => {
    let h = 1;
    while (h < arr.length / 3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (let i = h; i < arr.length; i += 1) {
            for (let j = i; j >= h && compare(arr[j], arr[j - h], comparator) < 0; j -= h) {
                swap(arr, j, j - h);
            }
        }
        h = Math.floor(h / 3);
    }
};
