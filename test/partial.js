var assert = require('assert');
var C = require('../index');

describe('partial', function() {
    var add = function(a, b, c) { return a + b + c; };

    it('returns a partial application of the given function', function() {
        assert.strictEqual(typeof C.partial(add, [ 1, 2, 3 ]), 'function');
    });
    it('is curried', function() {
        assert.strictEqual(typeof C.partial(add)([ 1, 2, 3 ]), 'function');
        assert.strictEqual(typeof C.partial()(add)([ 1, 2, 3 ]), 'function');
        assert.strictEqual(typeof C.partial()(add), 'function');
        assert.strictEqual(typeof C.partial(), 'function');
    });
});
