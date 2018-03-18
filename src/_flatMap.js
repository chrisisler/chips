var _curry2 = require('./util/_curry2');
var _map = require('./_map');
var _flattenOnce = require('./_flattenOnce');
var _pipe = require('./_pipe');

/**
 * Returns the recursively flattened result of applying a function to a list.
 * Allows to return multiple values from a function `fn`.
 *
 * @example C.flatMap(x => [ x, ln(x) ], [ 1, e ]); //=> [ 1, 0, e, 1 ]
 * @example C.flatMap(x => [ x, x * x ], [ 3, 4 ]); //=> [ 3, 9, 4, 16 ]
 *
 * @param {Function(*, Number|String) -> *} fn - Applied per value in `values`.
 * @param {Array[*]} values - A list of values of any type.
 * @returns {Array[*]} - The equivalent of: `values.map(fn).pick()`
 */
module.exports = _curry2(function _flatMap(fn, values) {
    return _pipe(_map, _flattenOnce)(fn, values);
});
