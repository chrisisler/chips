var assert = require('assert');
var C = require('../index');

describe('disJoin', function() {
    var getEvens = function(x) { return x % 2 === 0; };
    var getOdds = function(x) { return x % 2 === 1; };
    var getFives = function(x) { return x === 5; };

    it('returns a list of lists containing values from input which satisfy the equal-indexed function', function() {
        assert.deepEqual(
            C.disJoin([ getEvens, getOdds ], [ 1, 2, 3, 4, 5 ]),
            [
                [ 2, 4 ],
                [ 1, 3, 5 ]
            ]
        );
        assert.deepEqual(
            C.disJoin([ getFives ], [ 1, 3, 5, 5 ]),
            [
                [ 5, 5 ]
            ]
        );
        assert.deepEqual(
            C.disJoin([ getOdds, getEvens, getFives ], [ 1, 3, 5, 5, 2 ]),
            [
                [ 1, 3, 5, 5 ],
                [ 2 ],
                [ 5, 5 ]
            ]
        );
        assert.deepEqual(C.disJoin([], [ 'doesnt matter whats in here' ]), [ ]);
    });
    it('is curried', function() {
        assert.strictEqual(typeof C.disJoin, 'function');
        assert.strictEqual(typeof C.disJoin([]), 'function');
        assert.strictEqual(typeof C.disJoin([ getEvens ]), 'function');

        assert.deepEqual(
            C.disJoin([ getEvens, getOdds ])([ 1, 2, 3, 4, 5 ]),
            [
                [ 2, 4 ],
                [ 1, 3, 5 ]
            ]
        );
    });
});
