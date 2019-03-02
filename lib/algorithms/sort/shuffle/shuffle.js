const { swap } = require('./../../../utils');

/**
 * Shuffles the items of an array using
 * the Fisher–Yates shuffle algorithm.
 *
 * Time complexity (worst): O(n)
 * Time complexity (avgerage): Θ(n)
 * Time complexity (best): Ω(n)
 *
 * Space complexity (worst): O(1)
 *
 * @function shuffle
 *
 * @param {[Any]} arr array of items
 */
module.exports = (arr) => {
    for (let i = arr.length - 1; i > 0; i -= 1) {
        swap(arr, i, Math.floor(Math.random() * (i + 1)));
    }
};
