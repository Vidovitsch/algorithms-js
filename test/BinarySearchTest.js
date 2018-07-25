const { assert } = require('chai');
const { binarySearch } = require('../index');

/* eslint-disable no-undef */
describe('BinarySearch', () => {
  it('binary search should return the index of the corresponding element (for odd and even array lengths)', () => {
    // Odd length
    const i = 3;
    let arr = [-10, -5, 0, 5, 10];
    let elem = arr[i];
    assert.equal(binarySearch(arr, elem), i);

    // Even length
    arr = [-10, -5, 0, 5, 10, 20];
    elem = arr[i];
    assert.equal(binarySearch(arr, elem), i);
  });

  it('binary search should return -1 if the element does not exist in the array', () => {
    const elem = 15;
    const i = -1;

    // Odd length
    let arr = [-10, -5, 0, 5, 10];
    assert.equal(binarySearch(arr, elem), i);

    // Even length
    arr = [-10, -5, 0, 5, 10, 20];
    assert.equal(binarySearch(arr, elem), i);
  });
});
/* eslint-enable no-undef */
