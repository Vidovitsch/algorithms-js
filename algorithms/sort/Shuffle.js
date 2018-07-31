const swap = require('./../../util/Swap');

/**
 * Shuffles the array using the Durstenfeld shuffle (modern version of the Fisher-Yates shuffle).
 *
 * Time complexity (worst): O(n)
 *
 * @param  {Any[]} arr        array to be shuffled
 */
module.exports = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, i, Math.floor(Math.random() * (i + 1)));
  }
};
