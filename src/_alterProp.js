var _curry3 = require('./util/_curry3');
var _assign = require('./util/_assign');

/**
 * Returns a new object by applying the function `fn` over the specified `key`.
 *
 * @example C.alterProp('name', toUpper, {name: 'rufus'}); //=> {name: 'RUFUS'}
 * @example C.alterProp('id', x => x * 2, { id: 201 }); //=> { id: 402 }
 *
 * @param {String} key - The property of `obj` to alter.
 * @param {Function(*) -> *} fn - Applied to `obj[key]` to produce any value.
 * @param {Object} obj - An object.
 * @returns {Object} - `obj` with `fn` mapped over `obj[key]`.
 */
module.exports =  _curry3(function _alterProp(key, fn, obj) {
    if (Object.keys(obj).length === 0) {
        throw new Error('Cannot alter an empty object');
    }
    var updatedProp = {};
    updatedProp[key] = fn(obj[key], key);
    return _assign({}, obj, updatedProp);
});
