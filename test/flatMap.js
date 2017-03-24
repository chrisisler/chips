var assert = require('assert');
var C = require('../index');

describe('flatMap', function() {
    var plusOneTuple = function(x) { return [ x, x + 1 ]; };
    var nums = [ 1, 5 ];

    var expected = [ 1, 2, 5, 6 ];

    it('returns the flattened result of applying a function to an array', function() {
        assert.deepEqual(C.flatMap(plusOneTuple, nums), expected);
        assert.deepEqual(C.flatMap(plusOneTuple, []), []);
    });

    it('is curried', function() {
        assert.strictEqual(typeof C.flatMap(), 'function');
        assert.strictEqual(typeof C.flatMap(plusOneTuple), 'function');

        assert.deepEqual(C.flatMap(plusOneTuple)(nums), expected);
        assert.deepEqual(C.flatMap(plusOneTuple)([]), []);
    });
});
