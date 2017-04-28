var assert = require('assert');
var C = require('../index');

describe('map', function() {
    var timesTwo = function(x) { return x * 2; };
    var nums = [ 1, 2, 3 ];

    describe('returns the result of applying a function to some data', function() {
        it('works on lists', function() {
            assert.deepEqual(C.map(timesTwo, nums), [ 2, 4, 6 ]);
            assert.deepEqual(C.map(timesTwo, []), []);
        });

        it('works on objects', function() {
            var obj = { a: 1, b: 2, c: 3 };

            assert.deepEqual(C.map(timesTwo, obj), { a: 2, b: 4, c: 6 });
            assert.deepEqual(C.map(timesTwo, {}), {});
        });

        it('works on strings', function() {
            var toUpper = function(x) { return x.toUpperCase(); };
            var str = 'foobar';

            assert.strictEqual(C.map(toUpper, str), 'FOOBAR');
            assert.deepEqual(C.map(toUpper, ''), '');
        });

        it('works on functions (pipes them)', function() {
            var plusOne = function(x) { return x + 1; };
            var timesTwoThenPlusOne = C.map(timesTwo, plusOne);

            assert.strictEqual(timesTwoThenPlusOne(3), 7);
        });
    });

    it('when mapping an object, passes each key to the function as a second argument', function() {
        C.map(function(val, key) {
            assert.strictEqual(typeof key, 'string');
        }, { foo: 'bar' });
    });
    it('when mapping a list, passes each index to the function as a second argument', function() {
        C.map(function(val, idx) {
            assert.strictEqual(typeof idx, 'number');
        }, [ 'x', 'y', 'z' ]);
    });
    it('when mapping a string, passes each index to the function as a second argument', function() {
        C.map(function(val, idx) {
            assert.strictEqual(typeof idx, 'number');
        }, 'uvw');
    });

    it('is curried', function() {
        var curriedTimesTwo = C.map(timesTwo);

        assert.deepEqual(
            curriedTimesTwo(nums),
            [ 2, 4, 6 ]
        );
        assert.strictEqual(typeof curriedTimesTwo, 'function');
    });
});
