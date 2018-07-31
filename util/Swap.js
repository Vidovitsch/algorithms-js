/**
 * Swaps two values in the array by the given indeces.
 *
 * @param  {Any[]} arr array to be sorted
 * @param  {Integer} indexA   index to be swapped with index 'indexB'
 * @param  {Integer} indexB   index to be swapped with index 'indexA'
 */
module.exports = (arr, indexA, indexB) => {
  const temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};
