var assert = require('assert');
var C = require('../index');

describe('tail', function() {
    var nums = [ 1, 2, 3 ];
    var expected = [ 2, 3 ];

    it('returns a new list containing all but the first (zeroth) element', function() {
        assert.deepEqual(C.tail(nums), expected);
    });

    it('returns an empty list if an empty list was given', function() {
        assert.deepEqual([], []);
    });
});
