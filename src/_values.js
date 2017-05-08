var _has = require('./util/_has');
var _reduce = require('./_reduce');

/**
 * Returns a list of the own properties of the given object.
 *
 * @example C.values({ name: 'bob', job: 'chef' }); //=> [ 'bob', 'chef' ]
 *
 * @param {Object} obj
 * @returns {Array[*]} - List of own values from the given object.
 */
module.exports = function _values(obj) {
    return _reduce(function(accumList, prop) {
        if (_has(prop, obj)) {
            accumList[accumList.length] = obj[prop];
        }
        return accumList;
    }, [], Object.keys(obj));
};
