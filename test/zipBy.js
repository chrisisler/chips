var assert = require('assert');
var C = require('../index');

describe('zipBy', function() {
    var a = [ 1, 2, 3 ];
    var b = [ 4, 5, 6 ];
    var fn = function(x, y) { return x + y; };
    var expected = [ 5, 7, 9 ];

    it('returns a new list by applying the function to each equally-indexed value', function() {
        assert.deepEqual(
            C.zipBy(fn, a, b),
            expected
        );
    });

    it('returns a list equal to the shorter length of the given lists', function() {
        assert.deepEqual(
            C.zipBy(fn, [ 1, 2, 3, 4 ], b),
            expected
        );
    });

    it('returns an empty list of either lists are empty', function() {
        assert.deepEqual(C.zipBy(fn, [], b), []);
        assert.deepEqual(C.zipBy(fn, a, []), []);
    });

    it('is curried', function() {
        assert.deepEqual(C.zipBy(fn)(a, b), expected);
        assert.deepEqual(C.zipBy(fn)(a)(b), expected);
        assert.deepEqual(C.zipBy(fn, a)(b), expected);

        assert.strictEqual(typeof C.zipBy(fn)(a), 'function');
        assert.strictEqual(typeof C.zipBy(fn, a), 'function');
    });
});
