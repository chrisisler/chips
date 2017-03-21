var _curry3 = require('./_curry3');

/**
 * Applies an iterator function, `reducer`, against an accumulator and each value
 * in the data structure (from left-to-right) to produce a single value.
 *
 * `Reducable` must have a .length property.
 *
 * @example reduce((acc, x) => acc + x, 0, [ 1, 2, 3 ]); //=> 6
 * @example reduce((acc, x) => acc - x, 0, { a: 1, b: 2 }); //=> -3
 *
 * @param {Function} reducer - Applied to each value in `reducable`.
 * @param {a} accumulator - Accumulated value previously returned from `reducer`.
 * @param {Array(Like)|String} reducable - The data structure to reduce.
 * @returns {a} - Value that results from the reduction.
 */
module.exports = _curry3(function _reduce(reducer, accumulator, reducable) {
    var index = 0;
    var len = reducable.length;
    while (index < len) {
        accumulator = reducer(accumulator, reducable[index]);
        index += 1;
    }
    return accumulator;
});
