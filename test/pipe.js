var assert = require('assert');
var C = require('../index');

describe('pipe', function() {
    var add1 = function(x) { return x + 1; };
    var add2 = C.pipe(add1, add1);

    it('Returns a new function', function() {
        assert.strictEqual(typeof add2, 'function');
        assert.strictEqual(typeof C.pipe(), 'function');
    });

    it('does not explicitly take arguments', function() {
        assert.strictEqual(C.pipe.length, 0);
    });

    it('comprises functions in the order supplied', function() {
        assert.strictEqual(add2(3), 5);
    });
});
