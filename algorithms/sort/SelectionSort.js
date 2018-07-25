/**
 * Swaps two values in the array by the given indeces.
 *
 * @param  {Any[]} arr array to be sorted
 * @param  {Integer} a   index to be swapped with index 'b'
 * @param  {Integer} b   index to be swapped with index 'a'
 */
function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

/**
 * Checks if the value of 'a' is smaller than 'b'.
 *
 * @param  {Any}  a          Value to be compared with 'b'
 * @param  {Any}  b          Value to be compared with 'a'
 * @param  {Function}  comparator (optional) custom comparator that defines the sorting
 * @return {Boolean}            true if 'a' is smaller than 'b', otherwise false
 * @throws Invalid Argument error, unless the comparator return -1, 1, or 0
 */
function isLess(a, b, comparator) {
  if (comparator) {
    const result = comparator(a, b);
    if (result !== 1 && result !== -1 && result !== 0) {
      throw new Error('Invalid Argument: the comparator function should return -1 (a < b), 0 (a = b) or 1 (a > b)');
    }
    return result === -1 ? true : false;
  }
  return a < b;
}

/**
 * Orders an array by value or by the rules defined in a given custom comparator function.
 *
 * Time complexity (worst): O(n * n)
 * @param  {Any[]} arr        array to be sorted
 * @param  {Function} comparator (optional) custom comparator that defines the sorting
 */
module.exports = (arr, comparator) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (isLess(arr[j], arr[min], comparator)) {
        min = j;
      }
    }
    swap(arr, i, min);
  }
};
