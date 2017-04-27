var _curry3 = require('./util/_curry3');
var _assign = require('./util/_assign');

/**
 * Returns a new object by applying the given function to the specified property.
 *
 * @example C.alterProp('name', toUpper, { name: 'rufus' }); //=> { name: 'RUFUS' }
 * @example C.alterProp('id', x => x * 2, { id: 201 }); //=> { id: 402 }
 *
 * @param {String} prop - Property of object to alter.
 * @param {Function(*) -> *} fn - Applied to obj[prop].
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
