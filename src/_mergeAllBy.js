var _curry2 = require('./util/_curry2');
var _map = require('./_map');
var _prop = require('./_prop');
var _uniq = require('./_uniq');
var _filter = require('./_filter');
var _pipe = require('./_pipe');

// NOTE: Double-slash comments are used here so this functions docs/comments
// are not parsed and included by the scripts/generateAPIDocs script.
//
// Private helper function for mapping over a list and removing falsy values.
//
// @example trueMap(x => x.val, [ { val: false }, { val: null }, { val: 3 } ]); // => [ false, 3 ]
//
// @private
// @param {Function(*) -> *} - A function to apply to each value in the array.
// @param {Array[*]} - A list of values to map and then filter.
// @returns {Array[*]} - The mapped result of the given list with all undefined values removed.
var trueMap = _pipe(_map, _filter(function(x) { return x != undefined; }));

/**
 * The same as Object.assign except when a objects with the same key and with
 * non-same values for that key appear, a list of those values is applied to
 * the supplied `resolver` to produce a value for that key. Order not guaranteed.
 *
 * @example C.mergeAllBy(C.accum((a, b) => a + b), [{x: 1, z:5}, {y: 2, z: 6}]); //=> {x: 1, y: 2, z: 11}
 *
 * @param {Function([*], String) -> *} resolver - If > 1 objs have uniq values per key, this is applied to those values and the key.
 * @param {Array[Object]} objs - A list of objects.
 * @returns {Object} - The result of merging all key-value pairs of each object.
 */
module.exports = _curry2(function _mergeAllBy(resolver, objs) {
    var out = {};
    _map(_map(function(val, key) {
        var uniqConflictedVals = _uniq(trueMap(_prop(key), objs));
        out[key] = uniqConflictedVals.length === 1 ? val : resolver(uniqConflictedVals, key);
    }), objs);
    return out;
});
