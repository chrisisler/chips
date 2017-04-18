var _curry2 = require('./_curry2');

/**
 * Returns obj[key].
 *
 * @example prop('age', { name: 'karen', age: 32 }); //=> 32
 * @example map(prop('id'), [{foo: 'bar', id: 327}, {foo: 'baz', id: 279}]); //=> [327, 279]
 *
 * @param {String} key - A prop of `obj`.
 * @param {Object} obj
 * @returns {*}
 */
module.exports = _curry2(function _prop(key, obj) {
    return obj[key]
});
