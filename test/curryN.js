var assert = require('assert');
var C = require('../index');

function toStr(x) {
    return Object.prototype.toString.call(x);
}

describe('curryN', function() {
    it('curries two', function() {
        var add2 = function(a, b) { return a + b; };
        var curriedAdd2 = C.curryN(2, add2);

        assert.strictEqual(typeof curriedAdd2, 'function');
        assert.strictEqual(typeof curriedAdd2(1), 'function');

        assert.strictEqual(curriedAdd2(1)(2), 3);
        assert.strictEqual(curriedAdd2(1, 2), 3);
    });

    it('curries three', function() {
        var add3 = function(a, b, c) { return a + b + c; };
        var curriedAdd3 = C.curryN(3, add3);

        assert.strictEqual(typeof curriedAdd3, 'function');
        assert.strictEqual(typeof curriedAdd3(1)(2), 'function');
        assert.strictEqual(typeof curriedAdd3(1, 2), 'function');

        assert.strictEqual(curriedAdd3(1)(2)(3), 6);
        assert.strictEqual(curriedAdd3(1, 2, 3), 6);

        assert.strictEqual(curriedAdd3(1, 2)(3), 6);
        assert.strictEqual(curriedAdd3(1)(2, 3), 6);
    });

    it('curries four', function() {
        var add4 = function(a, b, c, d) { return a + b + c + d; };
        var curriedAdd4 = C.curryN(4, add4);

        assert.strictEqual(typeof curriedAdd4, 'function');
        assert.strictEqual(typeof curriedAdd4(1)(2)(3), 'function');
        assert.strictEqual(typeof curriedAdd4(1, 2)(3), 'function');
        assert.strictEqual(typeof curriedAdd4(1)(2, 3), 'function');
        assert.strictEqual(typeof curriedAdd4(1, 2, 3), 'function');

        assert.strictEqual(curriedAdd4(1)(2)(3)(4), 10);
        assert.strictEqual(curriedAdd4(1, 2)(3, 4), 10);
        assert.strictEqual(curriedAdd4(1, 2, 3, 4), 10);

        assert.strictEqual(curriedAdd4(1, 2)(3)(4), 10);
        assert.strictEqual(curriedAdd4(1)(2, 3)(4), 10);
        assert.strictEqual(curriedAdd4(1)(2)(3, 4), 10);

        assert.strictEqual(curriedAdd4(1, 2, 3)(4), 10);
        assert.strictEqual(curriedAdd4(1)(2, 3, 4), 10);
    });

    it('curries five', function() {
        var add5 = function(a, b, c, d, e) { return a + b + c + d + e; };
        var curriedAdd5 = C.curryN(5, add5);

        assert.strictEqual(typeof curriedAdd5(1)(2)(3)(4), 'function');
        assert.strictEqual(typeof curriedAdd5(1, 2)(3, 4), 'function');
        assert.strictEqual(typeof curriedAdd5(1, 2, 3, 4), 'function');

        assert.strictEqual(typeof curriedAdd5(1, 2)(3)(4), 'function');
        assert.strictEqual(typeof curriedAdd5(1)(2, 3)(4), 'function');
        assert.strictEqual(typeof curriedAdd5(1)(2)(3, 4), 'function');

        assert.strictEqual(typeof curriedAdd5(1, 2, 3)(4), 'function');
        assert.strictEqual(typeof curriedAdd5(1)(2, 3, 4), 'function');

        assert.strictEqual(curriedAdd5(1)(2)(3)(4)(5), 15);
        assert.strictEqual(curriedAdd5(1, 2)(3)(4, 5), 15);
        assert.strictEqual(curriedAdd5(1, 2, 3, 4, 5), 15);

        assert.strictEqual(curriedAdd5(1, 2)(3)(4)(5), 15);
        assert.strictEqual(curriedAdd5(1)(2, 3)(4)(5), 15);
        assert.strictEqual(curriedAdd5(1)(2)(3, 4)(5), 15);
        assert.strictEqual(curriedAdd5(1)(2)(3)(4, 5), 15);

        assert.strictEqual(curriedAdd5(1, 2, 3)(4)(5), 15);
        assert.strictEqual(curriedAdd5(1)(2, 3, 4)(5), 15);
        assert.strictEqual(curriedAdd5(1)(2)(3, 4, 5), 15);

        assert.strictEqual(curriedAdd5(1, 2, 3, 4)(5), 15);
        assert.strictEqual(curriedAdd5(1)(2, 3, 4, 5), 15);

        assert.strictEqual(curriedAdd5(1, 2)(3, 4)(5), 15);
        assert.strictEqual(curriedAdd5(1)(2, 3)(4, 5), 15);

        assert.strictEqual(curriedAdd5(1, 2)(3, 4, 5), 15);
        assert.strictEqual(curriedAdd5(1, 2, 3)(4, 5), 15);

        assert.strictEqual(curriedAdd5(1, 2, 3, 4)(5), 15);
        assert.strictEqual(curriedAdd5(1)(2, 3, 4, 5), 15);
    });

    it('does not curry more than five: throws instead', function() {
        assert.throws(
            function() { C.curryN(6, function() {}) },
            Error
        );
    });

    it('throws when not given two arguements', function() {
        assert.throws(
            function() { C.curryN('foo'); },
            Error
        );
        assert.throws(
            function() { C.curryN(); },
            Error
        );
    });
});
