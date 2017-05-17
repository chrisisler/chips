var _curry3 = require('./util/_curry3');

/**
 * Consecutively applies a `reducer` function against an `accumulator` value
 * (an initial value to build upn) and each value in the data structure,
 * `lengthable` (anything with a `.length` property), to produce a result.
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
