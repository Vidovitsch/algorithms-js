const compare = require('./../../util/Compare');

function merge(arr, copy, low, mid, high, comparator) {
  for (let h = low; h <= high; h++) {
    copy[h] = arr[h];
  }

  let i = low;
  let j = mid + 1;
  for (let k = low; k <= high; k++) {
    if (i > mid) {
      arr[k] = copy[j];
      j++;
    } else if (j > high) {
      arr[k] = copy[i];
      i++;
    } else if (compare(copy[i], copy[j], comparator) == -1) {
      arr[k] = copy[i];
      i++;
    } else {
      arr[k] = copy[j];
      j++;
    }
  }
}

function sort(arr, copy, low, high, comparator) {
  if (high <= low) return;
  let mid = low + Math.floor((high - low) / 2);
  sort(arr, copy, low, mid, comparator)
  sort(arr, copy, mid + 1, high, comparator);
  merge(arr, copy, low, mid, high, comparator);
}

module.exports = (arr, comparator) => {
  const copy = new Array(arr.length);
  sort(arr, copy, 0, arr.length - 1, comparator);
}
