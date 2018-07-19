/**
 * Searches and returns the index of the given element.
 * Returns -1 if the element doesn't exist within the array.
 *
 * Time complexity (worst/average): O(log(n))
 * Space complexity (worst): O(1)
 *
 * @param  {Array} arr  sorted Array (unsorted arrays give a undefined result)
 * @param  {Any} elem element to perform the search on
 * @return {Integer}      index corresponding with the given element, or -1 if element isn't found
 */
module.exports = (arr, elem) => {
  let min = 0;
  let max = arr.length - 1;
  let guess;
  while (min <= max) {
    guess = Math.floor((max + min) / 2);
    if (arr[guess] === elem) return guess;
    if (arr[guess] < elem) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return -1;
};
