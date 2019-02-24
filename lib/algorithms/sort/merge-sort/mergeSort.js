const { compare } = require('./../../../utils');

const merge = (arr, copy, low, mid, high, comparator) => {
    for (let h = low; h <= high; h += 1) {
        copy[h] = arr[h];
    }
    let i = low;
    let j = mid + 1;
    for (let k = low; k <= high; k += 1) {
        if (i > mid) {
            arr[k] = copy[j];
            j += 1;
        } else if (j > high) {
            arr[k] = copy[i];
            i += 1;
        } else if (compare(copy[i], copy[j], comparator) < 0) {
            arr[k] = copy[i];
            i += 1;
        } else {
            arr[k] = copy[j];
            j += 1;
        }
    }
};

const sort = (arr, copy, low, high, comparator) => {
    if (high <= low) {
        return;
    }
    const mid = low + Math.floor((high - low) / 2);
    sort(arr, copy, low, mid, comparator);
    sort(arr, copy, mid + 1, high, comparator);

    // (Optimization) Merging unnecessary if the combination
    // of both sub-arrays are already in order
    if (compare(arr[mid], arr[mid + 1], comparator) < 0) {
        return;
    }
    merge(arr, copy, low, mid, high, comparator);
};

/**
 * Sorting an array using the common merge sort algorithm.
 *
 * Time complexity (worst): O(n log(n))
 * Time complexity (avgerage): Θ(n log(n))
 * Time complexity (best): Ω(n log(n))
 *
 * Space complexity (worst): O(n)
 *
 * @function insertionSort
 *
 * @param {[Any]} arr array of items
 * @param {Function} comparator (optional) function that defines a comparison (default = null)
 */
module.exports = (arr, comparator = undefined) => {
    sort(arr, new Array(arr.length), 0, arr.length - 1, comparator);
};
