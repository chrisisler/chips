var _has = require('./_has');

/**
 * @example _values({name: 'bob', age: 44, job: 'chef'}); //=> ['bob', 44, 'chef']
 * @param {Object} obj
 * @returns {Array} - List of own values from the given object.
 */
module.exports = function _values(obj) {
    var values = [];
    for (var prop in obj) {
        if (_has(prop, obj)) {
            values[values.length] = obj[prop];
        }
    }
    return values;
}
