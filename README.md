# Chips &nbsp; [![Build Status](https://travis-ci.org/chrisisler/chips.svg?branch=master)](https://travis-ci.org/chrisisler/chips)
A JS library facilitating declarative logic by providing composable, higher-order functions.

* Build custom functions with `C.pipe` and `C.map`.
* Curry your own functions with `C.curry`
* Work with immutable data - each Chips function returns a _copy_ of the input.
* Each Chips function is [curried](https://www.sitepoint.com/currying-in-functional-javascript/).

## Examples
[Here's documentation for every function.](https://github.com/chrisisler/chips/blob/master/API.md)
Here's a taste:
```javascript
const flattenOnce = (list) => C.accum(C.concat, list);
flattenOnce([ 1, [ 2 ], [ [ 3 ] ] ]); //=> [ 1, 2, [ 3 ] ]

const getEachSalary = (xValues) => C.map(x => x.salary, xValues);
const removeLastChar = C.pipe(C.filter(x => x !== 'h'), x => Number(x));
const isOver20 = (x) => x > 20;
const getSalariesOver20 = C.pipe(getEachSalary, removeLastChar, isOver20);
getSalariesOver20([{name: 'joe', salary: '15h'}, {name: 'kat', salary: '30h'}]); //=> 30

const pipe = (...fns) => (...args) => C.reduce((x, f) => f(x), fns[0](args), C.tail(fns));
```

## Install
```bash
git clone git@github.com:chrisisler/chips && cd chips && npm i
# or
npm i -S chips
```
Then in some file.js:
```javascript
const C = require('chips');
```

## Roadmap
- Nothing at the moment.

### Thank you Ramda
Reading Ramda source has taught me many tricks, so thanks to every contributor there.
