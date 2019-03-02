const { assert } = require('chai');
const insertionSort = require('./insertionSort');

/* eslint-disable no-undef */
describe('InsertionSort', () => {
    it('insertion sort should throw an error when the custom comparator doesn\'t return a number', () => {
        // Define different comparators
        function zeroComp() { return 0; }
        function negativeComp() { return -1; }
        function positiveComp() { return 1; }
        function wrongComp1() { return 'wrong1'; }
        function wrongComp2() { return { wrong2: 'wrong' }; }

        // Define array
        const arr = [1, 4, 13, 40, 121, 364];

        // No error
        insertionSort(arr, zeroComp);
        insertionSort(arr, negativeComp);
        insertionSort(arr, positiveComp);
        insertionSort(arr);

        // Asserts: Error
        assert.throws(() => { insertionSort(arr, wrongComp1); }, Error);
        assert.throws(() => { insertionSort(arr, wrongComp2); }, Error);
    });

    it('insertion sort sort should, with a comparator, sort an array in a defined order', () => {
        // Define custom comparator
        function comparator(a, b) {
            if (a.value < b.value) { return -1; }
            if (a.value > b.value) { return 1; }
            return 0;
        }

        // Create custom object
        function Node(value) {
            this.value = value;
        }

        const arr = [new Node(5), new Node(-5), new Node(-22), new Node(108), new Node(37)];

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
/* eslint-enable no-undef */
