var _curry2 = require('./_curry2');
var _tail = require('./_tail');
var _reduce = require('./_reduce');

/**
 * This function behaves the same as `reduce` except the initial `accumulator`
 * value is implicitly taken from `reducable[0]`.
 *
 * @param {Function} fn - Applied to an accumulator and each value in `reducable`.
 * @param {*} reducable
 * @returns {*}
 */
module.exports = _curry2(function _fold(fn, reducable) {
    return _reduce(fn, reducable[0], _tail(reducable));
});
