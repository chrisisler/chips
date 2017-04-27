var _concat = require('./_concat');
var _reduce = require('./_reduce');
var _isIn = require('./_isIn');

/**
 * Remove the duplicate values from the given list.
 *
 * @example C.uniq([ 1, 2, 3, 3, 3, 4 ]); //=> [ 1, 2, 3, 4 ]
 *
 * @param {Array[*]} vals - A list of values.
 * @returns {Array[*]} - List of the non-duplicate values in `vals`.
 */
module.exports = function _uniq(vals) {
    return _reduce(function(uniqs, x) {
        return _isIn(uniqs, x) ? uniqs : _concat(uniqs, [ x ]);
    }, [], vals);
};
