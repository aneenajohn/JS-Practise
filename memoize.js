//? Create amemoize function

const add = (a, b) => a + b;
const memoizedAdd = memoizeOne(add);

memoizedAdd(1, 2); // 3 // Add function is called to return the value
memoizedAdd(1, 2); // 3 // Add function is not called, previous result is returned

memoizedAdd(2, 3); // 5 // Add function is called to return the value
memoizedAdd(2, 3); // 5 // Add function is not called, previous result is returned

// Memoize the func params => output
// 1. obj , 2. Map

const cacheMap = new Map();

function memoizeOne(fnc) {
  return function (...params) {
    console.log('Params:', params);
    console.log('Fnc:', fnc);
  };
}
