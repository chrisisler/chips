var _is = require('./util/_is');
var _filter = require('./_filter');
var _curry3 = require('./_curry3');

/**
 * Applies the predicate function to every element the `filterable`.
 * Returns true if the predicate returns true N times.
 *
 * Supports the same "filterable" data types that _filter does (arr, obj, str).
 *
 * @example _nPass(3, x => x % 2 === 1, [ 1, 2, 3, 4, 5 ]); //=> true
 * @param {Number} N - Number of times the `predicate` must return true.
 * @param {Function} predicate - Produces a Boolean for each `filterable` element.
 * @param {*} filterable - A data type that can be looped over (any "mappable").
 * @returns {Boolean} - If `predicate` returned truthy N times.
 */
module.exports = _curry3(function _nPass(N, predicate, filterable) {
    var filtered = _filter(predicate, filterable);
    return _is('Object', filtered)
        ? Object.keys(filtered).length === N
        : filtered.length === N;
});
