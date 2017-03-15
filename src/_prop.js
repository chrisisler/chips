var _curry2 = require('./_curry2');

/**
 * Returns obj[key].
 *
 * @param {String} key - A prop of `obj`.
 * @param {Object} obj
 * @returns {*}
 */
module.exports = _curry2(function _prop(key, obj) {
    return obj[key];
});
