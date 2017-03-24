var assert = require('assert');
var C = require('../index');

describe('map', function() {
    var timesTwo = function(x) { return x * 2; };
    var nums = [ 1, 2, 3 ];

    describe('returns the result of applying a function to some data', function() {
        it('works on lists', function() {
            assert.deepEqual(
                C.map(timesTwo, nums),
                [ 2, 4, 6 ]
            );
            assert.deepEqual(C.map(timesTwo, []), []);
        });

        it('works on objects', function() {
            var obj = { a: 1, b: 2, c: 3 };

            assert.deepEqual(
                C.map(timesTwo, obj),
                { a: 2, b: 4, c: 6 }
            );
            assert.deepEqual(C.map(timesTwo, {}), {});
        });

        it('works on strings', function() {
            var toUpper = function(x) { return x.toUpperCase(); };
            var str = 'foobar';

            assert.strictEqual(
                C.map(toUpper, str),
                'FOOBAR'
            );
            assert.deepEqual(C.map(toUpper, ''), '');
        });

        it('works on functions (pipes them)', function() {
            var plusOne = function(x) { return x + 1; };
            var timesTwoThenPlusOne = C.map(timesTwo, plusOne);

            assert.strictEqual(
                timesTwoThenPlusOne(3),
                7
            );
        });
    });

    it('works on numbers', function() {
        assert.strictEqual(C.map(timesTwo, 100), 200);
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
