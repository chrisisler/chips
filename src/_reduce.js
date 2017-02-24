var _curry3 = require('./curry/_curry3');
var _values = require('./_values');

/**
 * Applies an iterator function against a cumulative value and each value
 * of the data structure (from left-to-right) to reduce it to a single value.
 *
 * @example reduce((acc, x) => acc + x, 0, [ 1, 2, 3 ]); //=> 6
 * @example reduce((acc, x) => acc - x, 0, { a: 1, b: 2 }); //=> -3
 * @see Array.prototype.reduce and R.reduce
 * @param {Function} fn - Applied to each mappable value in <filterable>.
 * @param {*} accumulator - Accumulated value previously returned from <fn>.
 * @param {Array|Object} filterable - The data structure to reduce.
 * @returns {*} - Value that results from the reduction.
 */
module.exports = _curry3(function _reduce(fn, accumulator, filterable) {
    function _reduceList(fn, accumulator, list) {
        var index = 0, len = list.length;
        while (index < len) {
            accumulator = fn(accumulator, list[index]);
            index += 1;
        }
        return accumulator;
    }

    if (Object.prototype.toString.call(filterable) === '[object Object]') {
        return _reduceList(fn, accumulator, _values(filterable));
    }
    return _reduceList(fn, accumulator, filterable);
});
