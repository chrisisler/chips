var _tail = require('./_tail');
var _reduce = require('./_reduce');

/**
 * A variadic function that composes the supplied functions in the order given.
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
