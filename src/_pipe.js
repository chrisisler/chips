var _tail = require('./_tail');
var _reduce = require('./_reduce');

/**
 * A variadic function that composes the supplied functions in the order given.
 *
 * @example
 *     var adultNamesOver30 = _pipe(filter(adult => adult.age > 30), map(adult => adult.name));
 *     adultNamesOver30([ { name: 'karen', age: 32 }, { name: 'mike', age: 26 }]); //=> 'karen'
 *
 * @returns {Function}
 */
module.exports = function _pipe() {
    var fns = arguments;
    return function() {
        return _reduce(function(accumResult, fn) {
            return fn.call(this, accumResult);
        }, fns[0].apply(this, arguments), _tail(fns));
    };
};
