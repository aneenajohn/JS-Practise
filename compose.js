// NOTE: What does compose do

function add5(a) {
    return a + 5;
}

function sub2(a) {
    return a - 2;
}

function mul5(a) {
    return a * 5;
}

// NOTE: Compose operates from 
const compose = (...fncs) => {
    return (args) => {
        return fncs.reduceRight((arg, fnc) => fnc(arg), args)
    }
}

var evaluateCompose = compose(add5, sub2, mul5)(5);
console.log("evaluateCompose", evaluateCompose);

const pipe = (...fncs) => {
    return (args) => {
        return fncs.reduce((arg,func) => func(arg), args)
    }
}

let evaluatePipe = pipe(add5, sub2, mul5)(5);
console.log("evaluatePipe", evaluatePipe);

// console.log(evaluate(5));


// function composition of any number of functions
// const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x); 
// const double = x => x * 2
// const square = x => x * x

// function composition
// var output_final = compose(square, double)(2);
// console.log(output_final);

// Reduce
const arr = [1,2,3,4,5];
const reducedRes = arr.reduce((accumulator, initialValue) => { return accumulator + initialValue}, 0);
console.log("reducedRes: ", reducedRes);