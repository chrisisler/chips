var assert = require('assert');
var C = require('../index');

describe('isIn', function() {
    var nums = [ 1, 2, 3 ];

    it('returns true if `x` is in `xs` and false otherwise', function() {
        assert.strictEqual(C.isIn(nums, 3), true);
        assert.strictEqual(C.isIn(nums, 6), false);
    });

    it('is curried', function() {
        assert.strictEqual(typeof C.isIn(nums), 'function');

        assert.strictEqual(C.isIn(nums)(3), true);
        assert.strictEqual(C.isIn(nums)(6), false);
    });
});
