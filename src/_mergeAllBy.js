var _curry2 = require('./util/_curry2');
var _map = require('./_map');
var _prop = require('./_prop');
var _uniq = require('./_uniq');
var _filter = require('./_filter');
var _pipe = require('./_pipe');

// NOTE: Double-slash comments are used here so this functions docs/comments
// are not parsed and included by the `scripts/generateAPIDocs` script.
//
// Private helper function for mapping over a list and removing falsy values.
//
// @example trueMap(x => x.y, [ {y: false}, {y: null}, {y: 3} ]); //=> [ 3 ]
//
// @private
// @param {Function(*) -> *} - A function to apply to each value in the array.
// @param {Array[*]} - A list of values to map and then filter.
// @returns {Array[*]} - The same as `list.map(fn).filter(Boolean);`
var trueMap = _pipe(_map, _filter(Boolean));

/**
 * The same as Object.assign except when multiple objects with the same key and
 * non-same values for that key are encountered, a list of those values is
 * applied to the supplied `resolver` function to produce a single value.
 *
 * @example var getTotal = C.accum((a,b) => a + b);
 * @example C.mergeAllBy(getTotal, [ { x: 1, z: 5 }, { y: 2, z: 6 } ]);
 * @example //=> {x: 1, y: 2, z: 11}
 *
 * @param {Function([*], String) -> *} resolver - If > 1 objs have uniq values
 *                   for any key, this is applied to those values and the key.
 * @param {Array[Object]} objs - A list of objects.
 * @returns {Object} - The result of merging all key-val pairs of each object.
 */
module.exports = _curry2(function _mergeAllBy(resolver, objs) {
    var out = {};
    _map(_map(function(val, key) {
        // Same as: `objs.map(o => o[key]).filter(Boolean).removeDuplicates();`
        var uniqConflictedVals = _uniq(trueMap(_prop(key), objs));
        out[key] = (uniqConflictedVals.length === 1)
            ? val
            : resolver(uniqConflictedVals, key);
    }), objs);
    return out;
});
