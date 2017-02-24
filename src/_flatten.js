var _is = require('./_is');
var _union = require('./_union');
var _curry1 = require('./curry/_curry1');

/**
 * Recursively flatten the given list.
 *
 * @example _flatten([ 1, [ 2, [ 3 ] ] ]); //=> [ 1, 2, 3 ]
 * @param {Array} list
 * @returns {Array} - A copy of the given list, flattened.
 */
module.exports = _curry1(function _flatten(list) {
    var len = list.length,
        result = [],
        index = 0;
    while (index < len) {
        if (_is('Array', list[index])) {
            result = _flatten(_union(result, list[index]));
        } else {
            result[index] = list[index];
        }
        index += 1;
    }
    return result;
});
