var assert = require('assert');
var C = require('../index');

describe('majority', function() {
    var isEven = function(x) { return x % 2 === 0; };
    var isOdd = function(x) { return x % 2 === 1; };
    var atLeastFive = function(x) { return x >= 5; };
    var isNumber = function(x) { return C.is('Number', x); };

    var nums = [ 1, 3, 5, 7, 9 ];

    it('Returns true if all predicates are satisfied by at least half of the values', function() {
        assert.strictEqual(
            C.majority([ isNumber, atLeastFive ], nums),
            true
        );
        assert.strictEqual(
            C.majority([ isEven, isNumber ], [ 2, 4, 'foo', 7, 8 ]),
            true
        );
    });

    it('is curried', function() {
        var majorityOddAtLeastFive = C.majority([ isOdd, atLeastFive ]);
        assert.strictEqual(
            majorityOddAtLeastFive(nums),
            true
        );
        assert.strictEqual(typeof majorityOddAtLeastFive, 'function');
    });
});
