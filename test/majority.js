var assert = require('assert');
var C = require('../index');

describe('majority', function() {
    var ageOver30 = function(x) { return x.age > 30; };

    // OVER 30
    var reallyOld = { name: 'N/A', age: Infinity };
    var sam = { name: 'sam', age: 83 };
    var andy = { name: 'andy', age: 37 };

    // UNDER 30
    var ryan = { name: 'ryan', age: 22 };
    var dog = { name: 'doggo', age: 4 };

    it('returns true if the predicate function returns true for more than half of the values', function() {
        assert.strictEqual(C.majority(ageOver30, [ sam, andy ]), true);
        assert.strictEqual(C.majority(ageOver30, [ sam, sam, dog ]), true);

        assert.strictEqual(C.majority(ageOver30, [ andy, ryan, dog ]), false);
        assert.strictEqual(C.majority(ageOver30, [ reallyOld, ryan, dog ]), false);
    });

    it('is curried', function() {
        assert.strictEqual(typeof C.majority(ageOver30), 'function');

        assert.strictEqual(C.majority(ageOver30)([ sam, sam, dog ]), true);

        assert.strictEqual(C.majority(ageOver30)([ reallyOld, ryan, dog ]), false);
    });
});
