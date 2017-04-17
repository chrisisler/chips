var _concat = require('./_concat');
var _reduce = require('./_reduce');
var _isIn = require('./_isIn');

/**
 * Remove the duplicate values from the given list.
 *
 * @example uniq([ 1, 2, 3, 3, 4 ]); //=> [ 1, 2, 3, 4 ]
 *
 * @param {Array} list
 * @returns {Array} - List of the non-duplicate values in `list`.
 */
module.exports = _reduce(function(accumList, x) {
    return _isIn(accumList, x) ? accumList : _concat(accumList, [ x ]);
}, []);
