var _curry3 = require('./util/_curry3');

/**
 * Applies an iterator function, `reducer`, against an accumulator and each value
 * in the data structure `accumulator` (from left-to-right) to produce a single value.
 *
 * @example C.reduce((acc, x) => acc + x, 0, [ 1, 2, 3 ]); //=> 6
 * @example C.reduce((acc, x) => acc - x, 0, C.values({ a: 1, b: 2 })); //=> -3
 *
 * @param {Function(a, *, Number) -> *} reducer - Applied to each value in `lengthable`.
 * @param {a} accumulator - Accumulated value previously returned from `reducer`.
 * @param {Array[*]|Arguments|String} lengthable - Data with a length property.
 * @returns {*} - Value that results from the reduction.
 */
module.exports = _curry3(function _reduce(reducer, accumulator, lengthable) {
    var index = 0;
    var len = lengthable.length;
    while (index < len) {
        accumulator = reducer(accumulator, lengthable[index], index);
        index += 1;
    }
    return accumulator;
});
