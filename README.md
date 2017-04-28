# Chips
Chips is a functional JS library promoting succinct and immutable code.

[![Build Status](https://travis-ci.org/chrisisler/chips.svg?branch=master)](https://travis-ci.org/chrisisler/chips)

Chips delivers powerful abstractions making it effortless to write declarative logic that is simple to understand and painless to maintain.
* Compose methods to build custom modular functions.
* Each function is [curried](https://www.sitepoint.com/currying-in-functional-javascript/) to provide a flexible API.
* Data is never mutated, a copy is always returned.

## API / Documentation
There are examples for every function [available here](https://github.com/chrisisler/chips/blob/master/API.md).

## Install
```bash
git clone git@github.com:chrisisler/chips && npm i
# or
npm i chips
```

## Development Process
1. Make a branch for the new function(s)
2. Write the unit test(s) first. These go in `test/newFunc.js`
3. Add the necessary `require` statement(s) in `./index.js` in *alphabetical* order
4. Implement the function. These go in `src/_newFunc.js`
5. Run the "check" script which will verify the comments, run the linter and tests, and then generate API docs if none of the previous steps fail.

## Roadmap
- [ ] Update version to 0.1 and update npm package on npm.

### Thank you Ramda
Reading Ramda source has taught me many tricks, so thanks to every contributor there.
