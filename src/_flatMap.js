var _curry2 = require('./util/_curry2');
var _map = require('./_map');
var _flatten = require('./_flatten');
var _pipe = require('./_pipe');

/**
 * Returns the recursively flattened result of applying a function to a list.
 *
 * @example C.flatMap(x => [ x, ln(x) ], [ 1, e ]); //=> [ 1, 0, e, 1 ]
 * @example C.flatMap(x => [ x, x * x ], [ 3, 4 ]); //=> [ 3, 9, 4, 16 ]
 *
 * @param {Function(*, Number|String) -> *} fn
 * @param {Array[*]} vals
 * @returns {Array[*]}
 */
module.exports = _curry2(function _flatMap(fn, vals) {
    return _pipe(_map, _flatten)(fn, vals);
});
