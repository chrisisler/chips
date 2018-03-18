var _curry3 = require('./util/_curry3');
var _map = require('./_map');

/**
 * Applies a list of functions, `transformers` to a list of `values`, the
 * output of each transformer is applied to the second parameter, `fn`.
 *
 * ES6 equivalent: const via = (fns, fn, xs) => fn(...fns.map(f => f(xs)));
 *
 * @param {Array[Function]} transformers - Each applied to `values`.
 * @param {Function} fn - Applied to `fn(values)`.
 * @param {Array[*]} values - A list of values of any type.
 * @returns {*} - A value of any type. The result of calling `fn`
 */
module.exports = _curry3(function _via(transformers, fn, values) {
    return fn.apply(this, _map(function(t) {
        return t(values);
    }), transformers);
});
