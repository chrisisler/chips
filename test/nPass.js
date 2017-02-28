var assert = require('assert');
var C = require('../index');

describe('nPass', function() {
    var atLeastOne = function(x) { return x >= 1; };

    it('Returns true if the predicate returns true N times', function() {
        assert(C.nPass(1, atLeastOne, [ -1, 0, 1 ]));
        assert(C.nPass(2, atLeastOne, [ -1, 0, 1, 2 ]));
        assert(C.nPass(3, atLeastOne, { a: -1, b: 1, c: 2, d: 5 }));
    });

    it('is curried', function() {
        var nums = [ -1, 0, 1, 2 ];
        var twoPass = C.nPass(2);
        var twoValuesAreAtLeastOne = twoPass(atLeastOne);

        assert(twoPass(atLeastOne, nums));

        assert(twoValuesAreAtLeastOne(nums));
    });
});
