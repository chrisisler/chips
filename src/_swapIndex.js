var _curry3 = require('./_curry3');
var _slice = require('./util/_slice');

/**
 * Return the given list with the elements at the two indexes swapped.
 *
 * @example swapIndex(0, 2, [ 'a', 'b', 'c' ]); //=> [ 'c', 'b', 'a' ]
 *
 * @param {Number} index1
 * @param {Number} index2
 * @param {Array} list
 * @returns {Array}
 */
module.exports = _curry3(function _swapIndex(index1, index2, list) {
    var listCopy = _slice(list);
    var elem1 = listCopy[index1];
    var elem2 = listCopy[index2];

    listCopy[index1] = elem2;
    listCopy[index2] = elem1;

    return listCopy;
});
