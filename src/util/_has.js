var _curry2 = require('../curry/_curry2');

/**
 * Returns true if obj has own prop.
 *
 * @param {String} prop - A key of obj.
 * @param {Object} obj
 * @returns {Boolean}
 */
module.exports = _curry2(function _has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
});
