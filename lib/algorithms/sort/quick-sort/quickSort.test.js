const { assert } = require('chai');
const quickSort = require('./quickSort');

/* eslint-disable no-undef */
describe('QuickSort', () => {
    it('quick sort should throw an error when the custom comparator doesn\'t return a number', () => {
        // Define different comparators
        function zeroComp() { return 0; }
        function negativeComp() { return -1; }
        function positiveComp() { return 1; }
        function wrongComp1() { return 'wrong1'; }
        function wrongComp2() { return { wrong2: 'wrong' }; }

        // Define array
        const arr = [1, 4, 13, 40, 121, 364];

        // No error
        quickSort(arr, zeroComp);
        quickSort(arr, negativeComp);
        quickSort(arr, positiveComp);
        quickSort(arr);

        // Asserts: Error
        assert.throws(() => { quickSort(arr, wrongComp1); }, Error);
        assert.throws(() => { quickSort(arr, wrongComp2); }, Error);
    });

    it('quick sort sort should, with a comparator, sort an array in a defined order', () => {
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

        arr = [new Node(5), new Node(-5), new Node(-22), new Node(108), new Node(37)];

        // Sort array
        quickSort(arr, comparator);

        // Assert #1
        expected = [new Node(-22), new Node(-5), new Node(5), new Node(37), new Node(108)];
        arr.forEach((node, i) => {
            assert.equal(node.value, expected[i].value);
        });
    });

    it('quick sort should, without a comparator, sort an array in ascending order', () => {
        // Sort using real numbers
        let arr = [12, 0, -23, 4, 6, 14, 102, -5];

        // Sort array
        quickSort(arr);

        // Assert #1
        let expected = [-23, -5, 0, 4, 6, 12, 14, 102];
        arr.forEach((num, i) => {
            assert.equal(num, expected[i]);
        });

        // Sort using alphabetic characters
        arr = ['Array', 'Queue', '3LinkedList', 'bag'];

        // Sort array
        quickSort(arr);

        // Assert #2
        expected = ['3LinkedList', 'Array', 'Queue', 'bag'];
        arr.forEach((num, i) => {
            assert.equal(num, expected[i]);
        });
    });
});
/* eslint-enable no-undef */
