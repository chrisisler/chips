var _curry2 = require('./util/_curry2');

/**
 * Returns `obj[key]`.
 *
 * @example C.prop('name', { name: 'karen', age: 32 }); //=> 'karen'
 *
 * @param {String} key - A prop of `obj`.
 * @param {Object} obj
 * @returns {*}
 */
module.exports = _curry2(function _prop(key, obj) {
    return obj[key];
});
