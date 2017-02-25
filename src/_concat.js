var _is = require('./_is');
var _curry2 = require('./curry/_curry2');
var _toStr = require('./_toStr');

/**
 * Merges the two given items (in the order they're supplied).
 *
 * @example concat([ 1, 2 ], [ 3, 4 ]); //=> [ 1, 2, 3, 4 ]
 * @example concat('dogs', ' and cats'); //=> 'dogs and cats'
 * @param {Array|String} a
 * @param {Array|String} b
 * @returns {Array|String}
 */
module.exports = _curry2(function _concat(a, b) {
    if (_toStr(a) !== _toStr(b)) {
        throw new TypeError('Cannot concat differing types')
    }
    if (_is('String', a)) {
        return a += b;
    }
    var lenA = a.length,
        lenB = b.length,
        result = [],
        index = 0;
    while (index < lenA) {
        result[index] = a[index];
        index += 1;
    }
    index = 0;

    while (index < lenB) {
        result[lenA + index] = b[index];
        index += 1;
    }
    return result;
});
