var _curry2 = require('./_curry2');
var _map = require('./_map');
var _flatten = require('./_flatten');
var _pipe = require('./_pipe');

/**
 * Returns the flattened result of applying a function to a list.
 *
 * @example flatMap(x => [ x, ln(x) ], [ 1, e ]); //=> [ 1, 0, e, 1 ]
 * @example flatMap(x => [ x, x * x ], [ 3, 4 ]); //=> [ 3, 9, 4, 16 ]
 *
 * @param {Function} fn
 * @param {Array} list
 * @returns {Array}
 */
module.exports = _curry2(function(fn, list) {
    return _pipe(_map, _flatten)(fn, list);
});
