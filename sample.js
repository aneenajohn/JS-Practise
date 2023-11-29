// Functional Programming

// Often uses pipe and compose = higher order function(HOF)

// DOCS: A HOF is any function that either takes a function as an argument, or returns a function or both.


// Starting with unary funcs:
const add2 = (n) => (n+2);
const subtract1 = (n) => (n-1);
const multiplyBy5 = (n) => (n*5);

// NOTE: Here the functions get executed from inside to outside (ie) Right to Left
// NOTE: This is not function composition, this is nested functions.
const res = multiplyBy5(subtract1(add2(4)))
console.log({res});

// Here's how compose function works:
// NOTE: Libraries like Ramda.js and Lodash both have their own built-in compose and pipe functions. And lodash calls pipe as "flow".

// Let's make our own compose and pipe.

// COMPOSE:
// to get the compose order from right to left as we see with nested func calls in the above, we need reduceRight
const compose = (...funcs) => (val) => funcs.reduceRight((prev, func) => func(prev), val);
const composedRes = compose(multiplyBy5, subtract1, add2)(4);
console.log({composedRes});

// PIPE:
const pipe = (...funcs) => (val) => funcs.reduce((prev, func) => func(prev), val);
const pipedRes = pipe(multiplyBy5, subtract1, add2)(4);
console.log({pipedRes});