/**
 * Compares value 'a' to value 'b'
 *
 * @param  {Any}  a          Value to be compared with 'b'
 * @param  {Any}  b          Value to be compared with 'a'
 * @param  {Function}  comparator (optional) custom comparator that defines the sorting/searching
 * @return {Integer}            -1 if 'a < b', 1 if 'a > b' and 0 if 'a = b'
 * @throws Invalid Argument error, unless the comparator return -1, 1, or 0
 */
module.exports = (a, b, comparator) => {
  if (comparator) {
    const result = comparator(a, b);
    if (result !== 1 && result !== -1 && result !== 0) {
      throw new Error('Invalid Argument: the comparator function should return -1 (a < b), 0 (a = b) or 1 (a > b)');
    }
    return result;
  }
  return a < b ? -1 : (a > b ? 1 : 0);
}
