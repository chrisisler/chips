var _curry2 = require('../curry/_curry2');

/**
 * @param {String} type - Like 'String', 'Array', etc. Must be capitalized.
 * @param {*} item
 * @returns {Boolean} - If item is type or not.
 */
module.exports = _curry2(function _is(type, item) {
    return Object.prototype.toString.call(item) === '[object ' + type + ']';
});
