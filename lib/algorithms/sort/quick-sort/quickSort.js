const { compare, swap } = require('./../../../utils');
const shuffle = require('./../shuffle/shuffle');

const partition = (arr, low, high, comparator) => {
    let i = low + 1;
    const pivot = arr[low];
    for (let j = i; j <= high; j += 1) {
        if (compare(arr[j], pivot, comparator) < 0) {
            swap(arr, j, i);
            i += 1;
        }
    }
    swap(arr, low, i - 1);
    return i - 1;
};

const sort = (arr, low, high, comparator) => {
    if (high <= low) return;
    const pivotIndex = partition(arr, low, high, comparator);
    sort(arr, low, pivotIndex - 1, comparator);
    sort(arr, pivotIndex + 1, high, comparator);
};

/**
 * Sorting an array using the common quick sort algorithm.
 *
 * Time complexity (worst): O(n ^ 2)
 * Time complexity (avgerage): Θ(n log(n))
 * Time complexity (best): Ω(n log(n))
 *
 * Space complexity (worst): O(log(n))
 *
 * @function quickSort
 *
 * @param {[Any]} arr array of items
 * @param {Function} comparator (optional) function that defines a comparison (default = null)
 */
module.exports = (arr, comparator = undefined) => {
    shuffle(arr);
    sort(arr, 0, arr.length - 1, comparator);
};
