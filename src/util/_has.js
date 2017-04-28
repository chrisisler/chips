var _curry2 = require('./_curry2');

/**
 * Returns true if `obj` contains `prop` as its own property.
 *
 * @example _has('id', { name: 'sam' }); //=> false
 * @example _has('age', { name: 'sonic', age: Infinity }); //=> true
 *
 * @param {String} prop - A key of the given obj.
 * @param {Object} obj - An object.
 * @returns {Boolean} - True if `obj` has a key called `prop`.
 */
module.exports = _curry2(function _has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
});
