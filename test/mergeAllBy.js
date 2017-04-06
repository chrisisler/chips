var assert = require('assert');
var C = require('../index');

describe('mergeAllBy', function() {
    var objs = [ { a: 1, c: 3, d: 4 }, { b: 2, c: 3, d: 7 }, { e: 5, c: 3, d: 0 } ];
    var sum = C.accum(function(sum, x) { return sum + x; });

    var expected = { a: 1, b: 2, c: 3, d: 11, e: 5 };

    it('returns the result of merging a list of objects, where a function resolves non-same value conflicts', function() {
        assert.deepEqual(C.mergeAllBy(sum, objs), expected);
    });

    it('is curried', function() {
        assert.strictEqual(typeof C.mergeAllBy(sum), 'function');
        assert.deepEqual(C.mergeAllBy(sum)(objs), expected);
    });
});
