// DOCS: Currying => It allows you to partially arguments and create more specialized functions.

const curriedAdd = (a) => (b) => (c) => {
    return (a+b+c);
}

console.log("Curried add:", curriedAdd(1)(2)(3));

function add2(a) {
    return function (b) {
        return function (c) {
            return (a+b+c);
        }
    }
}

// Specialized Func:
const add2Num = (a) => (b) => a+b;

const add5 = add2Num(5);
console.log("Add 5 res:",add5(2));

const add10 = add2Num(10);
console.log("Add 10 res:", add10(10));

console.log("Add2: ", add2(1)(2)(3));

// Log level:

const specializedLoggers = (logLevel) => (msg) => {
    console.log(`${logLevel} ${msg}`)
}

const infoLogger = specializedLoggers("INFO: ");
const errorLogger = specializedLoggers("ERROR: ");

infoLogger("This is from info log");
errorLogger("This is from error log")


// Infinite currying
function sumInfinite(a) {
    return function (b) {
        if(b) return sumInfinite(a+b);
        return (a)
    }
  }

  console.log(sumInfinite(1)(2)(3)());
  console.log(sumInfinite(1)(2)(3)(4)(5)());
  console.log(sumInfinite(1)(2)(3)(4)(5)(6)(7)(8)());

const infyCurry = (a) => (b) => {
    if(b) return infyCurry(a+b);
    return a;
}

console.log("infyCurry: ",infyCurry(1)(2)());

