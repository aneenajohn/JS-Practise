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
// To get the compose order from left to right, we can use reduce function
const pipe = (...funcs) => (val) => funcs.reduce((prev, func) => func(prev), val);
const pipeRes = pipe(multiplyBy5, subtract1, add2)(4);
console.log({pipeRes});

const pipeRes2 = pipe(add2, subtract1, multiplyBy5)(4);
console.log({pipeRes2});

// DOCS: Pointer free style where you don't see a unary parameter being passed between each functions.

const divideBy = (divisor, num) => num /divisor;

const pipeRes3 = pipe(
    add2,
    subtract1,
    multiplyBy5,
    (x) => divideBy(5, x)
)(4);
console.log({pipeRes3})

// or We can create specialized function with currying to reframe divideBy;

const divBy = (divisor) => (num) => num /divisor;
const divBy5 = divBy(5);

const pipeRes4 = pipe(
    add2,
    subtract1,
    multiplyBy5,
    divBy5
)(4);
console.log({pipeRes4});

