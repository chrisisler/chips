var _curry = require('./_curry');

/**
 * Applies an iterator function against an accumulated value and each value
 * of the data structure (from left-to-right) while `predicate` returns true
 * to produce a final value.
 *
 * `Reducable` must have a .length property.
 *
 * @param {Function} predicate - Determines whether to continue accumulating or not.
 * @param {Function} reducer - Applied to `accumulator` and each `reducable[i]` to produce a result.
 * @param {*} accumulator - Accumulated value.
 * @param {*} reducable - The data structure to reduce.
 * @returns {*} - Value that results from the reduction.
 */
module.exports = _curry(function _reduceWhile(predicate, reducer, accumulator, reducable) {
    var index = 0;
    var len = reducable.length;
    while (index < len) {
        if (!predicate(accumulator, reducable[index])) {
            break;
        }
        accumulator = reducer(accumulator, reducable[index]);
        index += 1;
    }
    return accumulator;
});
