var _curry2 = require('./util/_curry2');
var _toStr = require('./util/_toStr');
var _is = require('./util/_is');
var _reduce = require('./_reduce');

/**
 * Merges the two given items (in the order they're supplied).
 * Items provided must be of the same type (Array or String).
 *
 * @example C.concat([ 1, 2 ], [ 3, 4 ]); //=> [ 1, 2, 3, 4 ]
 * @example C.concat('dogs', ' and cats'); //=> 'dogs and cats'
 *
 * @type [Any] -> [Any] -> [Any]
 * @param {Array[*]|String} a
 * @param {Array[*]|String} b
 * @returns {Array[*]|String} - The concatenated result.
 */
module.exports = _curry2(function _concat(a, b) {
    if (_toStr(a) !== _toStr(b)) {
        throw new TypeError('Both arguments must be of the same type.');
    }
    if (_is('String', a)) {
        return a + b;
    } else if (_is('Function', a.concat)) {
        return a.concat(b);
    } else {
        return _reduce(function(accList, elem) {
            accList[accList.length] = elem;
            return accList;
        }, a, b);
    }
});
