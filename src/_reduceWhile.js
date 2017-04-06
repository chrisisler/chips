var _curry = require('./_curry');

/**
 * Applies an iterator function against an accumulated value and each value
 * of the data structure (from left-to-right) while `predicate` returns true
 * to produce a final value.
 *
 * @param {Function} predicate - Determines whether to continue accumulating or not.
 * @param {Function} reducer - Applied to `accumulator` and each `lengthable[i]` to produce a result.
 * @param {a} accumulator - Accumulated value.
 * @param {Array|Arguments|String} lengthable - The data structure to reduce.
 * @returns {a} - Value that results from the reduction.
 */
module.exports = _curry(function _reduceWhile(predicate, reducer, accumulator, lengthable) {
    var index = 0;
    var len = lengthable.length;
    while (index < len) {
        if (!predicate(accumulator, lengthable[index])) {
            break;
        }
        accumulator = reducer(accumulator, lengthable[index]);
        index += 1;
    }
    return accumulator;
});
