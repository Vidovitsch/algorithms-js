const { compare, swap } = require('./../../util');

/**
 * Helper method.
 *
 * Orders the queue by setting the value of 'k' lower in the tree
 * when one of the two children is greater.
 *
 * @param  {Integer} k index to check with his parent
 * @param  {Integer} n length of the queue
 */
function sink(arr, start, end, comparator) {
  let root = start;
	while (root * 2 + 1 <= end) {
  		const leftChild = root * 2 + 1;
  		const rightChild = leftChild + 1;
  		let parent = root;
  		if (compare(array[parent], array[leftChild], comparator) === -1)	parent = leftChild;
  		if (rightChild <= end && compare(array[parent], array[rightChild], comparator) === -1)	parent = rightChild;
  		if (parent === root) return;
  		swap(array, root, parent);
  		root = parent;
  }
}

exports.heapSort = (arr, comparator = null) => {

};

module.exports = (arr, comparator) => {
  const n = arr.length;
  let start = Math.floor((n - 2) / 2);
  let end = n - 1;
	while (start >= 0) sink(arr, start--, end, comparator);
  while (end > 0) {
		swap(arr, end--, 0);
		sink(arr, 0, end, comparator);
	}
}
