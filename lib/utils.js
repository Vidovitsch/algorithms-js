const defaultComparator = (item1, item2) => {
    if (item1 < item2) {
        return -1;
    } if (item1 > item2) {
        return 1;
    }
    return 0;
};

/**
 * Swaps two values in the array by the given indeces
 *
 * @function swap
 *
 * @param {[Any]} arr array to be sorted
 * @param {Integer} indexA index to be swapped with index 'indexB'
 * @param {Integer} indexB index to be swapped with index 'indexA'
 *
 * @return {[any]} array with swapped items
 */
exports.swap = (arr, indexA, indexB) => {
    const temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
    return arr;
};

/**
 * Compares two values
 *
 * @function compare
 *
 * @param {Any} item1 value to be compared with 'item2'
 * @param {Any} item2 value to be compared with 'item1'
 * @param {Function} comparator (optional) function defines a comparison (default = Function)
 *
 * @return {Number} negative if 'a < b', positive if 'a > b' and 0 if 'a = b'
 * @throws Invalid argument error, unless the comparator returns an number
 */
exports.compare = (item1, item2, comparator = defaultComparator) => {
    const comparison = comparator(item1, item2);
    if (!isNaN(comparison)) {
        throw new Error('Invalid argument: the comparator should return a numeric value');
    }
    return comparison;
};
