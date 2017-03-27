var _concat = require('./_concat');
var _reduce = require('./_reduce');

/**
 * Remove the duplicate values from the given list.
 *
 * @param {Array} list
 * @returns {Array} - List of the non-duplicate values in `list`.
 */
module.exports = _reduce(function(accumList, x) {
    return accumList.includes(x) ? accumList : _concat(accumList, [ x ]);
}, []);
