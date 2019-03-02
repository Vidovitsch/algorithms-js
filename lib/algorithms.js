// Search algorithms
const binarySearch = require('./algorithms/search/binary-search/binarySearch');

// Sort algorithms
const heapSort = require('./algorithms/sort/heap-sort/heapSort');
const insertionSort = require('./algorithms/sort/insertion-sort/insertionSort');
const mergeSort = require('./algorithms/sort/merge-sort/mergeSort');
const quickSort = require('./algorithms/sort/quick-sort/quickSort');
const selectionSort = require('./algorithms/sort/selection-sort/selectionSort');
const shellSort = require('./algorithms/sort/shell-sort/shellSort');
const shuffle = require('./algorithms/sort/shuffle/shuffle');

module.exports = {
    search: {
        binarySearch,
    },
    sort: {
        heapSort,
        insertionSort,
        mergeSort,
        quickSort,
        selectionSort,
        shellSort,
        shuffle,
    },
};
