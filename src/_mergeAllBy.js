var _curry2 = require('./_curry2');
var _map = require('./_map');
var _prop = require('./_prop');
var _uniq = require('./_uniq');
var _filter = require('./_filter');
var _pipe = require('./_pipe');

/**
 * Private helper function.
 * @private
 * @param {Function} - A function to apply to each value in the array.
 * @param {Array} - A list of values to map and then filter.
 * @returns {Array} - The mapped result of the given list with all undefined values removed.
 */
var trueMap = _pipe(_map, _filter(function(x) { return x != undefined; }));

/**
 * The same as Object.assign except when a objects with the same key and with
 * non-same values for that key appear, a list of those values is applied to
 * the supplied `resolveFn` to produce a value for that key. Order not guaranteed.
 *
 * @example mergeAllBy(C.accum((a, b) => a + b), [{x: 1, z:5}, {y: 2, z: 6}]); //=> {x: 1, y: 2, z: 11}
 *
 * @param {Function} resolveFn - If multiple objs have non-same values for the
 *                same key, this function is applied to a list of those values.
 * @param {Array[Object]} objs - An array of objects.
 * @returns {Object} - The result of merging all key-value pairs of each object.
 */
module.exports = _curry2(function _mergeAllBy(resolveFn, objs) {
    var result = {};
    _map(_map(function(val, key) {
        var uniqConflictedVals = _uniq(trueMap(_prop(key), objs));
        result[key] = uniqConflictedVals.length === 1 ? val : resolveFn(uniqConflictedVals);
    }), objs);
    return result;
});
