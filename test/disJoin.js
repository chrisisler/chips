var assert = require('assert');
var C = require('../index');

describe.only('disJoin', function() {
    var getEvens = function(x) { return x % 2 === 0; };
    var getOdds = function(x) { return x % 2 === 1; };

    it('returns a list of lists containing values from input which satisfy the equal-indexed function', function() {
        assert.deepEqual(
            C.disJoin([ getEvens, getOdds ], [ 1, 2, 3, 4, 5 ]),
            [
                [ 2, 4 ],
                [ 1, 3, 5 ]
            ]
        );
    });
    it('is curried', function() {
    });
});
