/**
 * Returns the string representation of any object.
 *
 * @example _toStr('foo'); //=> '[object String]'
 * @example _toStr([ 1 ]); //=> '[object Array]'
 * @example _toStr(1); //=> '[object Number]'
 *
 * @param {*} x - Any value.
 * @returns {String} - String containing the type of the given param.
 */
module.exports = function _toStr(x) {
    return Object.prototype.toString.call(x);
};
