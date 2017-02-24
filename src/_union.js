var _curry2 = require('./curry/_curry2');

/**
 * @example union([ 1, 2 ], [ 3, 4 ]); //=> [ 1, 2, 3, 4 ]
 * @param {Array} list1
 * @param {Array} list2
 * @returns Array
 */
module.exports = _curry2(function _union(list1, list2) {
    var len1 = list1.length,
        len2 = list2.length,
        result = [],
        index = 0;
    while (index < len1) {
        result[index] = list1[index];
        index += 1;
    }
    index = 0;

    while (index < len2) {
        result[len1 + index] = list2[index];
        index += 1;
    }
    return result;
});
