var assert = require('assert');
var C = require('../index');

describe('flatten', function() {
    var nested = [ 1, [ 2, [ 3, [ 4, [ 5, [  ] ] ] ] ] ];
    var expected = [ 1, 2, 3, 4, 5 ];

    it('returns a flattened copy of the given list', function() {
        assert.deepEqual(C.flatten(
            [ [ [ [ -30 ], -20 ] ], 0 ]),
            [ -30, -20, 0 ]
        );
        assert.deepEqual(C.flatten(nested), expected);
    });

    it('correctly flattens empty nested lists', function() {
        assert.deepEqual(C.flatten([[]]), []);
        assert.deepEqual(C.flatten([[[], [[]]], []]), []);
    });
});
