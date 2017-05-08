var _curry3 = require('./util/_curry3');

/**
 * Applies an iterator function, `reducer`, against an accumulator and each val
 * in the data structure `accumulator` (from left-to-right) to produce one val.
 *
 * @example C.reduce((acc, x) => acc + x, 0, [ 1, 2, 3 ]); //=> 6
 * @example C.reduce((acc, x) => acc - x, 0, C.values({ a: 1, b: 2 })); //=> -3
 *
 * @param {Function(*, *, Number) -> *} reducer - Applied to `lengthable`.
 * @param {*} accumulator - Accumulated val previously returned from `reducer`.
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
