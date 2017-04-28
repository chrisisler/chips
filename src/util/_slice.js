/**
 * Returns a copy of the given list.
 * Also used to transform arguments to an array.
 *
 * @example _slice([ 1, 2, 3 ]); //=> [ 1, 2, 3 ]
 * @example (function() { return slice(arguments); })('foo'); //=> [ 'foo' ]
 *
 * @param {Array[*]|Arguments} xs - A list of values.
 * @returns {Array[*]} - A copy of the given list of values.
 */
module.exports = function _slice(xs) {
    return Array.prototype.slice.call(xs);
};
