var _concat = require('./_concat');
var _reduce = require('./_reduce');
var _isIn = require('./_isIn');

/**
 * Remove the duplicate values from the given list.
 *
 * @example C.uniq([ 1, 2, 3, 3, 3, 4 ]); //=> [ 1, 2, 3, 4 ]
 *
 * @param {Array[*]} values - A list of values of any type.
 * @returns {Array[*]} - List of the non-duplicate values in `values`.
 */
module.exports = function _uniq(values) {
    return _reduce(function(uniqValues, value) {
        return _isIn(uniqValues, value)
            ? uniqValues
            : _concat(uniqValues, [ value ]);
    }, [], values);
};
