var _curry3 = require('./curry/_curry3');
var _assign = require('./util/_assign');

/**
 * Returns a new object by applying the given function to the specified property.
 *
 * @example _alterProp('name', toUpper, { name: 'rufus' }); //=> { name: 'RUFUS' }
 * @param {String} prop - Property of object to alter.
 * @param {Function} fn - Applied to obj[prop].
 * @param {Object} obj - Object to alter.
 * @returns {Object}
 */
module.exports =  _curry3(function _alterProp(prop, fn, obj) {
    if (Object.keys(obj).length === 0) {
        throw new Error('Cannot alter an empty object');
    }
    var updatedProp = {};
    updatedProp[prop] = fn(obj[prop]);
    return _assign({}, obj, updatedProp);
});
