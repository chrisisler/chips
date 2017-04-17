var _is = require('./util/_is');
var _concat = require('./_concat');
var _reduce = require('./_reduce');

/**
 * Returns a copy of the given list flattened to one-dimension (plucked out sub-lists).
 *
 * @example _flatten([ 1, [ 2, [ 3 ] ] ]); //=> [ 1, 2, 3 ]
 *
 * @param {Array} xs
 * @returns {Array}
 */
module.exports = function _flatten(xs) {
    return _reduce(function(accumList, x) {
        return _is('Array', x) ? _flatten(_concat(accumList, x)) : _concat(accumList, [ x ]);
    }, [], xs);
};
