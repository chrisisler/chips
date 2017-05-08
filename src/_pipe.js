var _tail = require('./_tail');
var _reduce = require('./_reduce');

/**
 * A variadic (N-ary) function composing the supplied functions in order.
 * Pipe takes the output of the first function, and feeds that result as the
 * input to the next function.
 *
 * @example var getAgeOver30 = (a) => a.age > 30;
 * @example var getNames = (a) => a.name;
 * @example var namesOver30 = C.pipe(C.filter(getAgeOver30), C.map(getNames));
 * @example var adults = [ {name: 'karen', age: 32}, {name: 'mike', age: 26} ];
 * @example namesOver30(adults); //=> 'karen'
 *
 * @param {Arguments} fns - The functions to compose.
 * @returns {Function(*, *, ..., *) -> *} - Returned fn has arity of fns[0].
 */
module.exports = function _pipe() {
    var fns = arguments;
    return function() {
        return _reduce(function(accumResult, fn) {
            return fn(accumResult);
        }, fns[0].apply(this, arguments), _tail(fns));
    };
};
