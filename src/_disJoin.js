var _curry2 = require('./util/_curry2');
var _filter = require('./_filter');
var _map = require('./_map');

/**
 * Returns a list of lists where the sub-list at index `i` contains all values
 * from the given list `vals` which satisfy the equally-indexed predicate
 * function at that same index `i`.
 *
 * @example C.disJoin([getEvens, getOdds], [1, 2, 3, 4]); //=> [[2, 4], [1, 3]]
 *
 * @param {Array[Function(*) -> *]} disJoinerFns - List of predicate functions.
 * @param {Array[*]} vals - A list of values of any type.
 * @returns {Array[Array[*]]} - A list of lists of values of any type.
 */
module.exports = _curry2(function _disJoin(disJoinerFns, vals) {
    return _map(function(disJoinerFn) {
        return _filter(disJoinerFn, vals);
    }, vals);
    // var len = disJoinerFns.length;
    // var index = 0;
    // var result = [];
    // while (index < len) {
    //     result[result.length] = _filter(disJoinerFns[index], vals);
    //     index += 1;
    // }
    // return result;
});
