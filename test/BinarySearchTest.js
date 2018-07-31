const { assert } = require('chai');
const { binarySearch } = require('../index');

/* eslint-disable no-undef */
describe('BinarySearch', () => {
  it("binary search should throw an error when the custom comparator doesn't return -1, 1, or 0", () => {
    function zeroComp(a, b) { return 0; }
    function negativeComp(a, b) { return -1; }
    function positiveComp(a, b) { return 1; }
    function wrongNegativeComp(a, b) { return -2; }
    function wrongPositiveComp(a, b) { return 2; }

    // Create custom type
    function Node(value) {
      this.value = value;
    }
    arr = [1, 4, 13, 40, 121, 364];

    // No error
    binarySearch(arr, 13, zeroComp);
    binarySearch(arr, 40, negativeComp);
    binarySearch(arr, 121, positiveComp);

    // Error
    assert.throws(() => { selectionSort(arr, wrongNegativeComp); }, Error);
    assert.throws(() => { selectionSort(arr, wrongPositiveComp); }, Error);
  });

  it("binary search should, with a comparator, find a element in an array", () => {
    const i = 4;

    function comparator(a, b) {
      if (a.value < b.value) { return -1; }
      if (a.value > b.value) { return 1; }
      return 0;
    }
    // Create custom type
    function Node(value) {
      this.value = value;
    }
    arr = [new Node(-22), new Node(-5), new Node(5),  new Node(37), new Node(108)];

    // Assert #1
    assert.equal(binarySearch(arr, new Node(108), comparator), i);
  });

  it('binary search should, without a comparator, return the index of the corresponding element (for odd and even array lengths)', () => {
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
