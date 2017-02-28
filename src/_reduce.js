var _curry3 = require('./curry/_curry3');

/**
 * Applies an iterator function against a cumulative value and each value
 * of the data structure (from left-to-right) to reduce it to a single value.
 *
 * "Reducable" must be an array-like object with a .length property.
 *
 * @example reduce((acc, x) => acc + x, 0, [ 1, 2, 3 ]); //=> 6
 * @example reduce((acc, x) => acc - x, 0, { a: 1, b: 2 }); //=> -3
 *
 * @see Array.prototype.reduce and R.reduce
 * @param {Function} reducer - Applied to each value in <reducable>.
 * @param {*} accumulator - Accumulated value previously returned from <reducer>.
 * @param {*} reducable - The data structure to reduce.
 * @returns {*} - Value that results from the reduction.
 */
module.exports = _curry3(function _reduce(reducer, accumulator, reducable) {
    if (reducable.length === 0) {
        return accumulator;
    }
    var index = 0;
    var len = reducable.length;
    while (index < len) {
        accumulator = reducer(accumulator, reducable[index]);
        index += 1;
    }
    return accumulator;
});

