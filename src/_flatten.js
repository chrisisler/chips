var _is = require('./util/_is');
var _concat = require('./_concat');
var _reduce = require('./_reduce');

/**
 * Returns a copy of `values` flattened to one-dimension (plucked out sub-lists).
 *
 * @example C.flatten([ 1, [ 2, [ 3 ] ] ]); //=> [ 1, 2, 3 ]
 *
 * @param {Array[*]} values - A list of values of any type, may contain lists.
 * @returns {Array[*]} - A list of values of any type except lists.
 */
module.exports = function _flatten(values) {
    return _reduce(function(flatList, value) {
        return _is('Array', value)
            ? _flatten(_concat(flatList, value))
            : _concat(flatList, [ value ]);
    }, [], values);
};
