const { compare, swap } = require('./../../../util');

const sink = (arr, start, end, comparator) => {
    let root = start;
    while (root * 2 + 1 <= end) {
        const leftChild = root * 2 + 1;
        const rightChild = leftChild + 1;
        let parent = root;
        if (compare(arr[parent], arr[leftChild], comparator) < 0) {
            // Left child is larger than its parent
            parent = leftChild;
        }
        if (rightChild <= end && compare(arr[parent], arr[rightChild], comparator) < 0) {
            // Right child is larger than its parent
            parent = rightChild;
        }
        if (parent === root) {
            return;
        }
        swap(arr, root, parent);
        root = parent;
    }
};

/**
 * Max oriented heap sort.
 *
 * Time complexity (worst): O(n log(n))
 * Time complexity (avgerage): Θ(n log(n))
 * Time complexity (best): Ω(n log(n))
 *
 * Space complexity (worst): O(1)
 *
 * @function binarySearch
 * @param {[Any]} arr array of items
 * @param {Function} comparator (optional) function that defines a comparison (default = null)
 */
exports.heapSort = (arr, comparator = null) => {
    const n = arr.length;
    let start = Math.floor((n - 2) / 2);
    let end = n - 1;
    while (start >= 0) {
        sink(arr, start, end, comparator);
        start -= 1;
    }
    while (end > 0) {
        swap(arr, end, 0);
        end -= 1;
        sink(arr, 0, end, comparator);
    }
};
