const { assert } = require('chai');
const { shuffle } = require('../index');

describe('Shuffle', () => {
  /**
   * Testing if a array has been shuffled is impossible.
   * In theory the output of the shuffle can be the same as the input.
   */
  it("shuffle should maintaint the same array length and values", () => {
    // Create sorted array
    const arr = [-15, -10, -5, 0, 5, 10, 15];
    const copy = [-15, -10, -5, 0, 5, 10, 15];

    // Shuffle sorted array
    shuffle(arr);

    // Assert #1 (check if length remained the same)
    assert.equal(arr.length, 7);

    // Assert #2 (check if shuffled array has same values)
    copy.forEach((num) => {
      const found = arr.find(x => x === num);
      assert.equal(found != undefined, true);
    });
  });
});
