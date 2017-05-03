var _tail = require('./_tail');
var _reduce = require('./_reduce');

/**
 * Pipe takes the output of the first function, and feeds that result as the input to the next function.
 *
 * A variadic (N-ary) function that composes the supplied functions in the order given.
 *
 * C.pipe receives N functions as arguments: f1, f2, f3, ..., fN (where N is any number).
 * f1(A -> B), f2(B -> C), f3(C -> D), ..., fN(Y -> Z)
 * Then C.pipe(f1, f2, f3, ..., fN) pipes each function, receiving A and outputting Z.
 *
 * @example var adultsOver30 = C.pipe(C.filter(a => a.age > 30), C.map(a => a.name));
 * @example adultsOver30([{name: 'karen', age: 32}, {name: 'mike', age: 26}]); //=> 'karen'
 *
 * @param {Arguments} fns - The functions to compose.
 * @returns {Function}
 */
module.exports = function _pipe() {
    var fns = arguments;
    return function() {
        return _reduce(function(accumResult, fn) {
            return fn(accumResult);
        }, fns[0].apply(this, arguments), _tail(fns));
    };
};
