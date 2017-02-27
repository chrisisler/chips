var _is = require('./_is');
var _concat = require('./_concat');
var _reduce = require('./_reduce');

/**
 * Return a copy of the given list, recursively flattened (made into one-dimension).
 *
 * @example _flatten([ 1, [ 2, [ 3 ] ] ]); //=> [ 1, 2, 3 ]
 * @param {Array} list
 * @returns {Array}
 */
module.exports = function _flatten(list) {
    return _reduce(function(accumList, element) {
        if (_is('Array', element)) {
            return _flatten(_concat(accumList, element));
        }
        accumList[accumList.length] = element;
        return accumList;
    }, [], list);
};
