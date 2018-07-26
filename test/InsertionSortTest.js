const { assert } = require('chai');
const { insertionSort } = require('../index');

describe('InsertionSort', () => {
  it("insertion sort should throw an error when the custom comparator doesn't return -1, 1, or 0", () => {
    function zeroComp(a, b) { return 0; }
    function negativeComp(a, b) { return -1; }
    function positiveComp(a, b) { return 1; }
    function wrongNegativeComp(a, b) { return -2; }
    function wrongPositiveComp(a, b) { return 2; }

    // Create custom type
    function Node(value) {
      this.value = value;
    }
    arr = [new Node(5), new Node(-5), new Node(-22), new Node(108), new Node(37)];

    // No error
    insertionSort(arr, zeroComp);
    insertionSort(arr, negativeComp);
    insertionSort(arr, positiveComp);

    // Error
    assert.throws(() => { insertionSort(arr, wrongNegativeComp); }, Error);
    assert.throws(() => { insertionSort(arr, wrongPositiveComp); }, Error);
  });

  it("insertion sort sort should, with a comparator, sort an array in a defined order", () => {
    function comparator(a, b) {
      if (a.value < b.value) { return -1; }
      if (a.value > b.value) { return 1; }
      return 0;
    }
    // Create custom type
    function Node(value) {
      this.value = value;
    }
    arr = [new Node(5), new Node(-5), new Node(-22), new Node(108), new Node(37)];

    // Sort array
    insertionSort(arr, comparator);

    // Assert #1
    expected = [new Node(-22), new Node(-5), new Node(5), new Node(37), new Node(108)];
    arr.forEach((node, i) => {
      assert.equal(node.value, expected[i].value);
    });
  });

  it('insertion sort should, without a comparator, sort an array in ascending order', () => {
    // Sort using real numbers
    let arr = [12, 0, -23, 4, 6, 14, 102, -5];

    // Sort array
    insertionSort(arr);

    // Assert #1
    let expected = [-23, -5, 0, 4, 6, 12, 14, 102];
    arr.forEach((num, i) => {
      assert.equal(num, expected[i]);
    });

    // Sort using alphabetic characters
    arr = ['Array', 'Queue', '3LinkedList', 'bag'];

    // Sort array
    insertionSort(arr);

    // Assert #2
    expected = ['3LinkedList', 'Array', 'Queue', 'bag'];
    arr.forEach((num, i) => {
      assert.equal(num, expected[i]);
    });
  });
});
