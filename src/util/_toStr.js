/**
 * @example toStr('foo'); //=> '[object String]'
 * @example toStr([ 1 ]); //=> '[object Array]'
 * @example toStr(1); //=> '[object Number]'
 *
 * @param {*} x - Anything.
 * @returns {String} - String containing the type of the given param.
 */
module.exports = function _toStr(x) {
    return Object.prototype.toString.call(x);
};
