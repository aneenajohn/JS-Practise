/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
    }
};


const f = createHelloWorld();
f(); // "Hello World"

var createCounter = function(n) {
    return function() {
        return n+=1;
    }
}

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());