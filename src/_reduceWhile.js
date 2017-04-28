var _curry = require('./_curry');

/**
 * Applies an iterator function against an accumulated value and each value
 * of the data structure `accumulator` (from left-to-right) while `predicate` returns true
 * to produce a final value.
 *
 * @example C.reduceWhile(sum => sum > 10, (sum, y) => sum + y, 0, [ 2, 4, 6, 8 ]); //=> 12
 *
 * @param {Function(*, *, Number) -> Boolean} predicate - Returns whether to continue accumulating or not.
 * @param {Function(*, *, Number) -> *} reducer - Applied per accumulated, current, and index values.
 * @param {*} accumulator - Initial accumulated value.
 * @param {Array[*]|Arguments|String} lengthable - The data structure to reduce.
 * @returns {*} - Value that results from the reduction.
 */
module.exports = _curry(function _reduceWhile(predicate, reducer, accumulator, lengthable) {
    var index = 0;
    var len = lengthable.length;
    while (index < len) {
        if (!predicate(accumulator, lengthable[index], index)) {
            break;
        }
        accumulator = reducer(accumulator, lengthable[index], index);
        index += 1;
    }
    return accumulator;
});
