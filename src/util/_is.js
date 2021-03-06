var _curry2 = require('./_curry2');

/**
 * Returns true if the given data is of the given type.
 *
 * @example _is('Function', () => {}); //=> true
 * @example _is('String', 3); //=> true
 * @example _is('number', 72); //=> false because `type` must be capital.
 *
 * @param {String} type - Like 'String', 'Array', etc. Must be capitalized.
 * @param {*} x - Any value.
 * @returns {Boolean} - True if `x` is of type `type`, false otherwise.
 */
module.exports = _curry2(function _is(type, x) {
    return Object.prototype.toString.call(x) === '[object ' + type + ']';
});
