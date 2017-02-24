var _curry1 = require('./curry/_curry1');

/**
 * Creates a new, curried function comprised of the supplied functions.
 *
 * Takes as arguments any number of functions, func1, func2, ..., funcN and
 * returns a curried function that, when supplied with data to operate on,
 * applies that data to each given function, in the order the functions are given.
 *
 * Note: The first supplied function, func1, can be any arity, the rest must be unary.
 *
 * @example
 *     var adultNamesOver30 = _pipe(filter(adult => adult.age > 30), map(adult => adult.name));
 *     adultNamesOver30([ { name: 'karen', age: 32 }, { name: 'mike', age: 26 }]); //=> 'karen'
 *
 * @returns {Function} - A new, curried function.
 */
module.exports = function _pipe() {
    var functions = arguments,
        numOfFuncs = functions.length,
        index = 0;
    return _curry1(function() {
        var rollingResult = functions[index].apply(this, arguments);
        index += 1;
        while (index < numOfFuncs) {
            rollingResult = functions[index].call(this, rollingResult);
            index += 1;
        }
        return rollingResult;
    });
}
