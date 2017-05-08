# Chips
Chips is a JS library facilitating declarative logic by providing composable, higher-order functions.

[![Build Status](https://travis-ci.org/chrisisler/chips.svg?branch=master)](https://travis-ci.org/chrisisler/chips)

* Combine functions with `C.pipe` and `C.map` to build custom functions.
* Curry your own functions with `C.curry`
* Work with immutable data - each Chips function operates on a _copy_ of the supplied data.
* Each Chips function is [curried](https://www.sitepoint.com/currying-in-functional-javascript/).

## API Documentation
There are examples for every function [available here in API.md](https://github.com/chrisisler/chips/blob/master/API.md).

## Install
```bash
git clone git@github.com:chrisisler/chips && cd chips && yarn
# or
yarn add chips
```
Then in a JS file:
```javascript
const C = require('chips');
```

## Roadmap
- Wrap all lines to 80

### Thank you Ramda
Reading Ramda source has taught me many tricks, so thanks to every contributor there.
