# Chips
Chips is a functional JS library promoting succinct and immutable code.

Chips delivers powerful abstractions making it effortless to write declarative logic that is simple to understand and painless to maintain.
* Compose methods to build custom modular functions.
* Each function is [curried](https://www.sitepoint.com/currying-in-functional-javascript/) to provide a flexible API.
* Data is never mutated, a copy is always returned.

## Install
```bash
git clone git@github.com:chrisisler/chips && npm i
# or
npm i chips
```

## Process
1. Make a branch for the new function(s)
2. Add each function to ./src: `src/_newFunc.js`, add unit tests: `test/newFunc.js`, and update the requires in `index.js` (in alphabetical order). Ensure each exported file in `src/_*.js` contains an @example, @param(s), and an @returns in the comments.
3. Run the test suite: `npm test`, and the linter: `npm run lint`.

## Roadmap
* Update "Process" section of this readme.md
* Each exported file in `src/_*.js` *must* have a @example, @param(s), and @returns in the comments.

## API
#### `C.accum(fn, lengthable)`
In this library, `accum` is a shorthand for `reduce` where an accumulator value is _not_ supplied but taken from `lengthable[0]`.
```javascript
C.accum((sum, n) => sum + n, [ 1, 2, 3 ]); //=> 6
const map = (fn, array) => C.accum((arr, x) => C.concat(arr, [ fn(x) ]), array);
```

#### `C.allPass(predicates, value)`
Returns true if `value` returns true when applied to each function in `predicates`.
```javascript
C.allPass([ isNumber, isPrime ], 71); //=> true
C.allPass([ x => x.age > 30, x => !!x.isNice ], { age: 42, isNice: false }); //=> false
```

#### `C.alterProp(prop, fn, obj)`
Returns a new object by applying `fn` to `obj` on the specified property, `prop`.
```javascript
C.alterProp('name', toUpper, { name: 'sam', id: 7 }); //=> { name: 'SAM', id: 7 }
```

#### `C.concat(a, b)`
Returns the result of concatenating two strings or two arrays.
```javascript
C.concat('foo', 'bar'); //=> 'foobar'
C.concat([ 1, 2 ], [ 3, 4 ]); //=> [ 1, 2, 3, 4 ]
```

#### `C.curry(fn)`
Returns the curried equivalent of the given function, `fn`.
```javascript
const add2 = C.curry((a, b) => a + b);
add2(3, 4); //=> 7
add2(3)(4); //=> 7
const add5 = C.curry((a, b, c, d, e) => a + b + c + d + e);
add5(2)(2)(2)(2)(2); //=> 10
```

#### `C.filter(predicate, filterable)`
Returns the provided data structure `filterable` except only with its elements that pass the true/false test provided by the `predicate` function.
```javascript
C.filter(isEven, [ 1, 2, 3, 4 ]); //=> [ 2, 4 ]
C.filter(isEven, { a: 1, b: 2 }); //=> { b: 2 }
C.filter(isUpper, 'FooBar'); //=> 'FB'
```
#### `C.flatMap(fn, list)`
Returns the flattened result of applying a function to a list.
```javascript
C.flatMap(x => [ x, x * x ], [ 3, 4 ]); //=> [ 3, 9, 4, 16 ]
```

#### `C.flatten(list)`
Returns a copy of the given list flattened to one-dimension (with picked out sub-lists).
```javascript
C.flatten([ 1, [ 2, [], [ 3 ] ] ]); //=> [ 1, 2, 3 ]
```

###`C.isIn(list, value)`
Returns true if value is in the list and false otherwise.
```javascript
C.isIn([ 1, 2, 3 ], 5); //=> false
C.isIn([ 1, 2, 3 ], 1); //=> true
```

#### `C.majority(predicates, values)`
Returns true _if at least half_ of the elements in `values` satisfy (return true for) _every_ function in `predicates`.
```javascript
C.majority([ isOdd, equalsThree ], [ 3, 3, 2 ]); //=> true
C.majority([ endsWithBar, isString ], [ 'FooBar', 42, 'MyBar' ]); //=> false
```

#### `C.map(fn, mappable)`
Returns the result of applying a function to a data structure.
```javascript
C.map(x => x + 1, [ 1, 2, 3 ]); //=> [ 2, 3, 4]
C.map(x => x * 2, { age: 20 }); //=> { age: 40 }
C.map(x => x * 2, y => y + 1)(3); //=> 7
C.map(toUpper, 'foo'); //=> 'FOO'
```

#### `C.mergeAllBy(resolveFn, objects)`
Equivalent to `Object.assign` but when a key has multiple non-same values, `resolveFn` is applied to an array of those values to produce a resulting value.
```javascript
C.mergeAllBy(vals => Math.min(...vals), [ { x: 10, y: 25 }, { x: 11, y: 60 } ]); //=> { x: 10, y: 25 }
```

#### `C.nPass(N, predicate, filterable)`
Returns true if `N` elements in `filterable` satisfy the `predicate` function.
```javascript
C.nPass(3, isOdd, [ 1, 2, 3, 4, 5 ]); //=> true
C.nPass(3, isEven, [ 1, 2, 3, 4, 5 ]); //=> false
```

#### `C.pipe(func1, func2, func3, …, funcN)`
Composes the supplied functions in the order they are given. Returns a function of arity = `func1.length`.
```javascript
C.pipe(x => x * 2, y => y - 1, z => z / 2)(5); //=> 12
const getAdultsOver30 = C.pipe(C.filter(x => x.age > 30), C.map(x => x.name));
getAdultsOver30([ { name: 'karen', age: 32 }, { name: 'joe', age: 9 } ]); //=> 'karen'
```

#### `C.prop(key, obj)`
Returns obj[key];
```javascript
C.prop('id', { foo: 'bar', id: 41983 }); //=> 41983
C.map(C.prop('name'), [ { name: 'damien', name: 'aubrey' } ]); //=> [ 'damien', 'aubrey' ]
```

#### `C.reduce(reducingFn, accumulator, lengthable)`
Applies an iterator function, `reducingFn` against an `accumulator` and each element in the data structure `lengthable` (from left-to-right) to produce a single output.
```javascript
C.reduce((sum, x) => sum + x, 0, [ 1, 2, 3]); //=> 6
const _flat = (arr, x) => Array.isArray(x) ? C.flatten(C.concat(arr, x)) : C.concat(arr, [ x ]);
C.reduce(_flat, [], [[ 1, [ 2 ] ], [ 3, [] ]]); //=> [ 1, 2, 3 ] // This is C.flatten
```

#### `C.reduceWhile(predicate, reducingFn, accumulator, lengthable)`
Applies an iterator function, `reducingFn` against an `accumulator` and each element in the data structure `lengthable` (from left-to-right) while `predicate(accum, lengthable[i])` returns true to produce a single output.
```javascript
const lessThan3 = (acc, n) => (acc + n) < 3;
C.reduceWhile(lessThan3, (x, y) => x + y, 0, [ 1, 2, 3, 4 ]); //=> 3
```

#### `C.swapIndex(index1, index2, list)`
Returns a copy of the given list with the elements at the specified indexes swapped.
```javascript
C.swapIndex(0, 2, [ 'a', 'b', 'c' ]); //=> [ 'c', 'b', 'a' ]
```

#### `C.tail(list)`
Returns a copy of the given list containing every element except the zeroth.
```javascript
C.tail([ 1, 2, 3 ]); //=> [ 2, 3 ]
```

###`C.uniq(list)`
Returns a list containing all non-same values.
```javascript
C.uniq([ 2, 2, 4, 5 ]); //=> [ 2, 4, 5 ]
```

#### `C.values(obj)`
Returns a list of the own values of the given object (order not guaranteed).
```javascript
C.values({ name: 'bob', age: 44 }); //=> [ 'bob', 44 ]
```

#### `C.zipBy(fn, xs, ys)`
Applies the function `fn` to each equal-indexed element in the given lists, `xs` and `ys`.
Returns `[ fn(xs[0], ys[0]), ..., fn(xs[i], ys[i]) ]`.
Truncates to the list of shorter length.
```javascript
C.zipBy((x, y) => x * y, [ 1, 2, 3 ], [ 7, 8, 9 ]); //=> [ 7, 16, 27 ]
C.zipBy(null, [ 1, 2, 3 ], [ 7, 8, 9 ]); //=> [ 1, 7, 2, 8, 3, 0 ]
```

#### `C.zipObjBy(fn, keys, vals)`
Returns a new object by zipping a list of `keys` By a function `fn` applied to a list of `values`.
```javascript
C.zipObjBy(x => x / 2, [ 'k1', 'k2' ], [ 4, 6 ]); // => { k1: 2, k2: 3}
```

### Thank you Ramda
Reading Ramda source has taught me many tricks, so thanks to every contributor there.
