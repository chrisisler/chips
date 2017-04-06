var _curry2 = require('./_curry2');
var _tail = require('./_tail');
var _reduce = require('./_reduce');

/**
 * This function is a shortcut for `reduce` where an initial accumulator is taken from lengthable[0].
 *
 * @example accum((acc, x) => acc + x, [ 1, 2, 3 ]); //=> 6
 *
 * @param {Function} fn - Applied to an accumulator and each value in `lengthable`.
 * @param {Array|Arguments|String} lengthable - The data structure to reduce.
 * @returns {Array|String}
 */
module.exports = _curry2(function _accum(fn, lengthable) {
    return _reduce(fn, lengthable[0], _tail(lengthable));
});