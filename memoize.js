
const myMemoize = (fnc, context) => {
    const res= {}
    return function(...args) {
        console.log("COntext: ", context);
        console.log("args: ", args);
        console.log("JSON.stringify(args): ", JSON.stringify(args));
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache] = fnc.call(context || this, ...args);
            // res[argsCache] = fnc(...args)
        }
        console.log("Res: ", res);
        return res[argsCache];
    }
}

// Sample res obj
// {
//    [450,234]: 105300
// }

const clumsyProduct = (num1, num2) => {
    for(var i=0; i<= 99999999; i++) {}
    return num1* num2
}

const obj ={
    num1: 100,
    num2: 100
}

const memoizedClumsyProduct = myMemoize(clumsyProduct);

// NOTE: Without caching
// console.time("First call");
// console.log(clumsyProduct(450,234));
// console.timeEnd("First call");

// console.time("Second call");
// console.log(clumsyProduct(450,234));
// console.timeEnd("Second call");


// NOTE: With caching
console.time("First call");
console.log(memoizedClumsyProduct(450,234));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizedClumsyProduct(450,234));
console.timeEnd("Second call");

console.time("Third call");
console.log(memoizedClumsyProduct(123,123));
console.timeEnd("Third call");