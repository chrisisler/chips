var _curry3 = require('./util/_curry3');
var _slice = require('./util/_slice');

/**
 * Return the given list with the elements at the two indexes swapped.
 *
 * @example C.swapIndex(0, 2, [ 'a', 'b', 'c' ]); //=> [ 'c', 'b', 'a' ]
 *
 * @param {Number} index1 - An index in the given `values`.
 * @param {Number} index2 - An index in the given `values`.
 * @param {Array[*]} values - A list of values of any type.
 * @returns {Array[*]}
 */
module.exports = _curry3(function _swapIndex(index1, index2, values) {
    var listCopy = _slice(values);
    var elem1 = listCopy[index1];
    var elem2 = listCopy[index2];

    listCopy[index1] = elem2;
    listCopy[index2] = elem1;

    return listCopy;
});
