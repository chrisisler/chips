var _curry2 = require('./curry/_curry2');
var _toStr = require('./_toStr');
var _is = require('./_is');
var _reduce = require('./_reduce');

/**
 * Merges the two given items (in the order they're supplied).
 *
 * @example concat([ 1, 2 ], [ 3, 4 ]); //=> [ 1, 2, 3, 4 ]
 * @example concat('dogs', ' and cats'); //=> 'dogs and cats'
 * @param {Array|String} a
 * @param {Array|String} b
 * @returns {Array|String} - The concatenated result.
 */
module.exports = _curry2(function _concat(a, b) {
    if (_toStr(a) !== _toStr(b)) {
        throw new TypeError('Both arguments must be of the same type.');
    }
    return _is('String', a)
        ? a + b
        : _is('Function', a.concat)
            ? a.concat(b)
            : _reduce(function(accumList, elem) {
                accumList[accumList.length] = elem;
                return accumList;
            }, a, b);
});
