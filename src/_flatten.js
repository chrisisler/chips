var _is = require('./util/_is');
var _concat = require('./_concat');
var _reduce = require('./_reduce');

/**
 * Returns a copy of the given list flattened to one-dimension (plucked out sub-lists).
 *
 * @example C.flatten([ 1, [ 2, [ 3 ] ] ]); //=> [ 1, 2, 3 ]
 *
 * @param {Array[*]} vals - A list of values.
 * @returns {Array[*]}
 */
module.exports = function _flatten(vals) {
    return _reduce(function(accumList, x) {
        return _is('Array', x) ? _flatten(_concat(accumList, x)) : _concat(accumList, [ x ]);
    }, [], vals);
};
