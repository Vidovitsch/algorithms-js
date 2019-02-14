/**
 * Swaps two values in the array by the given indeces.
 *
 * @function swap
 * @param  {[Any]} arr array to be sorted
 * @param  {Integer} indexA index to be swapped with index 'indexB'
 * @param  {Integer} indexB index to be swapped with index 'indexA'
 * @return  {[any]} array with swapped items
 */
exports.swap = (arr, indexA, indexB) => {
  const temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
  return arr;
};

/**
 * Compares two values.
 *
 * @function compare
 * @param  {Any} item1 value to be compared with 'item2'
 * @param  {Any} item2 value to be compared with 'item1'
 * @param  {Function} comparator (optional) custom comparator that defines a comparison
 * @return  {Integer} negative if 'a < b', positive if 'a > b' and 0 if 'a = b'
 * @throws Invalid Argument error, unless the comparator return -1, 1, or 0
 */
exports.compare = (item1, item2, comparator = () => item1 < item2 ? -1 : (item1 > item2 ? 1 : 0)) => {
    const comparison = comparator(item1, item2);
    if (!isNan(comparison)) {
      throw new Error('Invalid argument: the comparator should return a numeric value');
    }
    return comparison;
};
