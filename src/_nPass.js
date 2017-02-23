var _filter = require('./_filter');
var _curry3 = require('./curry/_curry3');

/**
 * _nPass() executes the <predicate> function once for each element present
 * in the <functor>. Returns true if the predicate returns true <N> or more
 * times, and false otherwise.
 *
 * @sig Number -> (x -> Boolean) -> [x] -> Boolean
 * @example _nPass(3, x => x % 2 === 1, [ 1, 2, 3, 4, 5 ]); //=> true
 * @param {Number} N - Number of times the <predicate> must return true.
 * @param {Function} predicate - Produces a Boolean per <functor> element.
 * @param {x} functor - A data type that can be looped over (any "mappable").
 * @returns {Boolean}
 */
module.exports = _curry3(function _nPass(N, predicate, functor) {
    return _filter(predicate, functor).length === N;
});
