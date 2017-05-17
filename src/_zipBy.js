var _curry3 = require('./util/_curry3');
var _concat = require('./_concat');
var _accum = require('./_accum');

// A function which flattens a given list by one-dimension (non-recursively).
var flattenOnce = _accum(_concat);

/**
 * Returns a new list by applying the given function to each equally-indexed
 * element in the given lists, truncating to the list of shorter length.
 * If `fn` is falsy, each equal-index "pair" is inserted like:
 * `[ xValues[i], yValues[i] ]`, then the outputted list is flattened by
 * one-dimension before it is returned (concatenating the lists together like a
 * literal zipper).
 *
 * @example C.zipBy((x, y) => x + y, [ 1, 3, 5 ], [ 2, 4, 6 ]); //=> [3, 7, 11]
 * @example C.zipBy(null, [ 1, 3, 5 ], [ 2, 4, 6 ]); //=> [ 1, 2, 3, 4, 5 ,6 ]
 *
 * @param {Function(*, *) -> *} fn - Applied to each value in the given lists.
 * @param {Array[*]} xValues - A list of values of any type.
 * @param {Array[*]} yValues - A list of values of any type.
 * @returns {Array[*]} - A list of values of any type.
 */
module.exports = _curry3(function _zipBy(fn, xValues, yValues) {
    var doFlatZip = !fn;
    if (doFlatZip === true) {
        fn = function(x, y) { return [ x, y ]; };
    }
    var len = Math.min(xValues.length, yValues.length);
    var result = Array(len);
    var index = 0;
    while (index < len) {
        result[index] = fn(xValues[index], yValues[index]);
        index += 1;
    }
    return doFlatZip === true
        ? flattenOnce(result)
        : result;
});
