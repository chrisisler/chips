var _curry2 = require('./util/_curry2');
var _tail = require('./_tail');
var _reduce = require('./_reduce');

/**
 * A shortcut for `reduce` where the initial accumulator value is taken from
 * `initial[0]`.
 *
 * @example C.accum((acc, x) => acc + x, [ 1, 2, 3 ]); //=> 6
 *
 * @param {Function(*, *, Number) -> *} fn - Applied to an accumulator and each
 *                                                       value in `initial`.
 * @param {Array[*]|Arguments|String} initial - The data to reduce.
 * @returns {Array[*]|String}
 */
module.exports = _curry2(function _accum(fn, initial) {
    return _reduce(fn, initial[0], _tail(initial));
});
