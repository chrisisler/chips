var _concat = require('./_concat');
var _reduce = require('./_reduce');
var _isIn = require('./_isIn');

/**
 * Remove the duplicate values from the given list.
 *
 * @example uniq([ 1, 2, 3, 3, 4 ]); //=> [ 1, 2, 3, 4 ]
 *
 * @param {Array} xs - A list of values.
 * @returns {Array} - List of the non-duplicate values in `xs`.
 */
module.exports = function _uniq(xs) {
    return _reduce(function(uniqs, x) {
        return _isIn(uniqs, x) ? uniqs : _concat(uniqs, [ x ]);
    }, [], xs);
};
