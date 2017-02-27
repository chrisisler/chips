var _has = require('./_has');
var _reduce = require('./_reduce');
var _concat = require('./_concat');

/**
 * Returns a list of the own properties of the given object.
 *
 * @example _values({name: 'bob', age: 44, job: 'chef'}); //=> ['bob', 44, 'chef']
 * @param {Object} obj
 * @returns {Array} - List of own values from the given object.
 */
module.exports = function _values(obj) {
    return _reduce(function(accumList, prop) {
        if (_has(prop, obj)) {
            accumList[accumList.length] = obj[prop];
        }
        return accumList;
    }, [], Object.keys(obj));
};
