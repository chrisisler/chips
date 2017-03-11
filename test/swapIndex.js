var assert = require('assert');
var C = require('../index');

describe('swapIndex', function() {
    var list = [ 'a', 'b', 'c', 'd' ];
    var expected = [ 'c', 'b', 'a', 'd' ];

    it('returns a new list with the elements at the given indexes swapped', function() {
        assert.deepEqual(C.swapIndex(0, 2, list), expected);
        assert.deepEqual(C.swapIndex(0, 1, list), [ 'b', 'a', 'c', 'd' ]);
        assert.deepEqual(C.swapIndex(0, 0, list), list);
    });

    it('is curried', function() {
        assert.deepEqual(C.swapIndex(0)(2, list), expected);
        assert.deepEqual(C.swapIndex(0)(2)(list), expected);
        assert.deepEqual(C.swapIndex(0, 2)(list), expected);

        assert.deepEqual(typeof C.swapIndex(0)(2), 'function');
        assert.deepEqual(typeof C.swapIndex(0, 2), 'function');
    });
});
