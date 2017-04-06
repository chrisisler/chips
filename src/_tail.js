var _is = require('./util/_is');

/**
 * Returns the given data containing every element or character except the zeroth.
 *
 * Note: Array.from translates array-like objects (arguments) to arrays.
 *
 * @param {Array|String} group
 * @returns {Array|String}
 */
module.exports = function _tail(group) {
    return _is('Arguments', group) || Array.isArray(group)
        ? Array.from(group).slice(1)
        : group.slice(1);
};
