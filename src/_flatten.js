var _is = require('./util/_is');
var _concat = require('./_concat');
var _reduce = require('./_reduce');

/**
 * Returns a copy of the given list flattened to one-dimension (plucked out sub-lists).
 *
 * @example _flatten([ 1, [ 2, [ 3 ] ] ]); //=> [ 1, 2, 3 ]
 * @param {Array} list
 * @returns {Array}
 */
module.exports = function _flatten(list) {
    return _reduce(function(accumList, val) {
        return _is('Array', val) ? _flatten(_concat(accumList, val)) : _concat(accumList, [ val ]);
    }, [], list);
};
