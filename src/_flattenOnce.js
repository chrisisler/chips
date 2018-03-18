var _concat = require('./_concat');
var _reduce = require('./_reduce');

/**
 * A function which flattens a given list by one-dimension (non-recursively).
 *
 * @example C.flattenOnce([ [ 1, [ 2 ], [ 3 ] ] ]); //=> [ 1, [ 2 ], [ 3 ] ]
 *
 * @param {Array[Any]} list - A list of values of any type.
 * @returns {Array[Any]} - `list`, with sub-arrays plucked out.
 */
module.exports = function _flattenOnce(list) {
    return _reduce(_concat, [], list);
};
