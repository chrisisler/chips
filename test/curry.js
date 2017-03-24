var assert = require('assert');
var C = require('../index');

describe('curry', function() {
    it('curries a function of arity one', function() {
        var identity = C.curry(function(x) { return x; });

        assert.strictEqual(typeof identity, 'function');
        assert.strictEqual(typeof identity(), 'function');
    });

    it('curries a function of arity two', function() {
        var add2 = function(a, b) { return a + b; };
        var curriedAdd2 = C.curry(add2);

        assert.strictEqual(typeof curriedAdd2, 'function');
        assert.strictEqual(typeof curriedAdd2(1), 'function');

        assert.strictEqual(curriedAdd2(1)(2), 3);
        assert.strictEqual(curriedAdd2(1, 2), 3);
    });

    it('curries a function of arity three', function() {
        var add3 = function(a, b, c) { return a + b + c; };
        var curriedAdd3 = C.curry(add3);

        assert.strictEqual(typeof curriedAdd3, 'function');
        assert.strictEqual(typeof curriedAdd3(1)(2), 'function');
        assert.strictEqual(typeof curriedAdd3(1, 2), 'function');

        assert.strictEqual(curriedAdd3(1)(2)(3), 6);
        assert.strictEqual(curriedAdd3(1, 2, 3), 6);

        assert.strictEqual(curriedAdd3(1, 2)(3), 6);
        assert.strictEqual(curriedAdd3(1)(2, 3), 6);
    });

    it('curries a function of arity four', function() {
        var add4 = function(a, b, c, d) { return a + b + c + d; };
        var curriedAdd4 = C.curry(add4);

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

    it('curries a function of arity five or more', function() {
        var curriedAdd5 = C.curry(function(a, b, c, d, e) { return a + b + c + d + e; });
        assert.strictEqual(typeof curriedAdd5, 'function');
        assert.strictEqual(typeof curriedAdd5(1)(2)(3)(4), 'function');
        assert.strictEqual(curriedAdd5(1)(2)(3)(4)(5), 15);

        var curriedAdd6 = C.curry(function(a, b, c, d, e, f) { return a + b + c + d + e + f; });
        assert.strictEqual(typeof curriedAdd6, 'function');
        assert.strictEqual(typeof curriedAdd6(1)(2)(3)(4)(5), 'function');
        assert.strictEqual(curriedAdd6(1)(2)(3)(4)(5)(6), 21);

        var curriedAdd7 = C.curry(function(a, b, c, d, e, f, g) { return a + b + c + d + e + f + g; });
        assert.strictEqual(typeof curriedAdd7, 'function');
        assert.strictEqual(typeof curriedAdd7(1)(2)(3)(4)(5)(6), 'function');
        assert.strictEqual(curriedAdd7(1)(2)(3)(4)(5)(6)(7), 28);

        // If someone writes a function requiring 8+ parameters... maybe rethink that decision.
    });
});
