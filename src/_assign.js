var _curry1 = require('./curry/_curry1');
var _has = require('./_has');

// Based on Mozilla Developer Network Object.assign polyfill
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

/**
 * Copies the values of all enumerable own props from each supplied source
 * object to a target object. Returns a clone of the target obj with
 * later sources' props overwriting earlier props.
 *
 * @param {Object} target - Obj to assign new values to (and clone).
 * @returns {Object}
 */
module.exports = _curry1(function _assign(target) {
    if (typeof Object.assign === 'function') {
        return Object.assign.apply(this, arguments);
    }
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    var result = Object(target),
        index = 1,
        len = arguments.length;
    while (index < len) {
        var next = arguments[index];
        if (source != null) {
            for (var prop in next) {
                if (_has(prop, next)) {
                    result[prop] = next[prop];
                }
            }
        }
        index += 1;
    }
    return result;
});
