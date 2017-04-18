var _has = require('./_has');
var _is = require('./_is');

// This is the Mozilla Developer Network Object.assign polyfill
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

/**
 * Copies the values of all enumerable own props from each supplied source
 * object to a target object. Returns a clone of the target obj with
 * later sources' props overwriting earlier props.
 *
 * @example assign({}, { id: 3872 }, { foo: 'bar' }); //=> { id: 3872, foo: 'bar' }
 * @example assign({ name: 'knuckles' }, { name: 'tails' }); //=> { name: tails }
 *
 * @param {Object} target - Obj to assign new values to (and clone).
 * @returns {Object}
 */
module.exports = _is('Function', Object.assign) ? Object.assign : function _assign(target) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    var result = Object(target);
    var index = 1;
    var len = arguments.length;
    while (index < len) {
        var next = arguments[index];
        if (next != null) {
            for (var prop in next) {
                if (_has(prop, next)) {
                    result[prop] = next[prop];
                }
            }
        }
        index += 1;
    }
    return result;
};
