const { assert } = require('chai');

const binarySearch = require('./binarySearch');

/* eslint-disable no-undef */
describe('BinarySearch', () => {
    it('binary search should throw an error when the custom comparator doesn\'t return a number', () => {
        // Define different comparators
        function zeroComp() { return 0; }
        function negativeComp() { return -1; }
        function positiveComp() { return 1; }
        function wrongComp1() { return 'wrong1'; }
        function wrongComp2() { return { wrong2: 'wrong' }; }

        // Define array
        const arr = [1, 4, 13, 40, 121, 364];

        // No error
        binarySearch(arr, 13, zeroComp);
        binarySearch(arr, 40, negativeComp);
        binarySearch(arr, 121, positiveComp);
        binarySearch(arr, 364);

        // Asserts: Error
        assert.throws(() => { binarySearch(arr, 1, wrongComp1); }, Error);
        assert.throws(() => { binarySearch(arr, 4, wrongComp2); }, Error);
    });

    it('binary search should, with a comparator, find a element in an array', () => {
        const i = 4;

        // Define valid comparator
        function comparator(a, b) {
            if (a.value < b.value) { return -1; }
            if (a.value > b.value) { return 1; }
            return 0;
        }

        // Create custom object
        function Node(value) {
            this.value = value;
        }

        // Define array
        arr = [new Node(-22), new Node(-5), new Node(5), new Node(37), new Node(108)];

        // Assert #1
        assert.equal(binarySearch(arr, new Node(108), comparator), i);
    });

    it('binary search should, without a comparator, return the index of the corresponding element (for odd and even array lengths)', () => {
        const i = 3;

        // Odd length
        let arr = [-10, -5, 0, 5, 10];
        let elem = arr[i];

        // Assert #1 (for odd length)
        assert.equal(binarySearch(arr, elem), i);

        // Even length
        arr = [-10, -5, 0, 5, 10, 20];
        elem = arr[i];

        // Assert #2 (for even lenth)
        assert.equal(binarySearch(arr, elem), i);
    });

    it('binary search should return -1 if the element does not exist in the array (for odd and even array lengths)', () => {
        const elem = 15;
        const i = -1;

        // Odd length
        let arr = [-10, -5, 0, 5, 10];

        // Asser #1 (for odd length)
        assert.equal(binarySearch(arr, elem), i);

        // Even length
        arr = [-10, -5, 0, 5, 10, 20];

        // Assert #2 (for even length)
        assert.equal(binarySearch(arr, elem), i);
    });
});
/* eslint-enable no-undef */
