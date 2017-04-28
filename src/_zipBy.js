var _curry3 = require('./util/_curry3');
var _concat = require('./_concat');
var _accum = require('./_accum');

// Non-recursive flatten. Flattens a list by one-dimension.
var flattenOnce = _accum(_concat);

/**
 * Return a new list by applying the given function to each equally-positioned
 * element in the given lists. Truncating to the list of shorter length.
 * If `fn` is falsy, each equal-index "pair" is inserted like so: [xs[i], ys[i]],
 * then the outputted list is flattened by one dimension before it is returned.
 *
 * @example C.zipBy((x, y) => x + y, [ 1, 3, 5 ], [ 2, 4, 6 ]); //=> [ 3, 7, 11 ]
 * @example C.zipBy(null, [ 1, 3, 5 ], [ 2, 4, 6 ]); //=> [ 3, 7, 11 ]
 *
 * @param {Function(*, *) -> *} fn - Applied to each element in the given lists.
 * @param {Array[*]} xs - A list of values.
 * @param {Array[*]} ys - A list of values.
 * @returns {Array[*]}
 */
module.exports = _curry3(function _zipBy(fn, xs, ys) {
    var doFlatZip = !fn;
    if (doFlatZip === true) {
        fn = function(x, y) { return [ x, y ]; };
    }
    var len = Math.min(xs.length, ys.length);
    var result = Array(len);
    var index = 0;
    while (index < len) {
        result[index] = fn(xs[index], ys[index]);
        index += 1;
    }
    return doFlatZip === true ? flattenOnce(result) : result;
});
