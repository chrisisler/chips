var assert = require('assert');
var C = require('../index');

describe('alterProp', function() {
    var add1 = function(x) { return x + 1; };
    var square = function(x) { return x * x; };
    var toUpper = function(s) { return s.toUpperCase(); };

    var obj = { a: 1, b: 2 };

    it('returns a new object by applying the given function to the given prop', function() {
        assert.deepEqual(
            C.alterProp('b', add1, obj),
            { a: 1, b: 3 }
        );
        assert.deepEqual(
            C.alterProp('a', square, obj),
            { a: 1, b: 2 }
        );
        assert.deepEqual(
            C.alterProp('str', toUpper, { str: 'foo' }),
            { str: 'FOO' }
        );
        assert.deepEqual(
            C.alterProp('str', C.pipe(toUpper, add1), { str: 'foo' }),
            { str: 'FOO1' }
        );
    });

    it('is curried', function() {
        var alterName = C.alterProp('name');
        assert.deepEqual(
            alterName(toUpper, { name: 'sally' }),
            { name: 'SALLY' }
        );

        var alterNameToUpper = alterName(toUpper);
        assert.deepEqual(
            alterNameToUpper({ name: 'ken' }),
            { name: 'KEN' }
        );
    });

    it('throws when applied to an empty object', function() {
        assert.throws(
            function() { C.alterProp('x', add1, {}); },
            Error
        );
    });
});
