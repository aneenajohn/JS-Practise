// arr.reduce((prevValue, cuurentValue, currentIndex, arr) => {
//     const nextValue = prevValue + cuurentValue;
//     return nextValue;
// }, initialValue);

const arr = [1, 2, 3, 4, 5];

//Aggregator
const product = arr.reduce((prevValue, currentValue) => {
  return prevValue * currentValue;
}, 1);

console.log(product); // Output: 120

// Segregator

const decimals = [1.2, 2.5, 1.8, 4.1, 3.6, 6.9, 3.3, 2.4, 4.0, 6.5];

const groupedDecimals = decimals.reduce((acc, curr) => {
  const floored = Math.floor(curr);
  if (!acc[floored]) {
    acc[floored] = [];
  }
  acc[floored].push(curr);
  return acc;
}, {});

console.log(groupedDecimals);

// Run in sequence:
// Lets say we have an array of functions and a value, the value  has to be oassed through these functions in a pipe.

const upperCase = (str) => str.toUpperCase();
const addExclamation = (str) => `${str}!`;
const reverseString = (str) => str.split('').reverse().join('');

const functions = [upperCase, addExclamation, reverseString];
const initialValue = 'hello';

const result = functions.reduce((res, currentFnc) => {
  return currentFnc(res);
}, initialValue);

console.log(result); // Output: !OLLEH

// Promise in sequence:

// NOTE: Even though the promises are created immediately and start running concurrently, the logging of results happens sequentially using .reduce().
const asyncTask = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task completed in ${time}000 ms`);
    }, time * 1000);
  });
};

const tasks = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(5),
  asyncTask(2),
  asyncTask(4),
];

// DOCS: You create a list of these promises (tasks) — each starts running immediately upon creation.

// Then you pass them to asyncSeriesExecutor which uses .reduce() to chain them serially, ensuring that each task's result is logged only after the previous one finishes, even though they all started together.

const asyncSeriesExecutor = (promises) => {
  promises.reduce((prevPromise, currentPromise) => {
    return prevPromise.then((prevResult) => {
      return currentPromise.then((currentResult) => {
        console.log(currentResult);
        // return prevResult + currentResult;
      });
    });
  }, Promise.resolve());
};

// asyncSeriesExecutor(tasks);

// FIX:
// DOCS: Issue: Because all asyncTask(...) are already started before being passed to asyncSeriesExecutor, so the delays don't reflect the actual "real" wait times — just the logging is controlled sequentially.

// 🧪 If you want tasks to start one after the other, define them as functions:

const tasksFnc = [
  () => asyncTask(3),
  () => asyncTask(1),
  () => asyncTask(5),
  () => asyncTask(2),
  () => asyncTask(4),
];

// Now tasks are only triggered one after another. This is true serial execution.
const asyncSeriesExecutorFixed = (promiseFns) => {
  return promiseFns.reduce((prevPromise, currentFn) => {
    return prevPromise.then(() => {
      return currentFn().then((result) => {
        console.log(result);
      });
    });
  }, Promise.resolve());
};

asyncSeriesExecutorFixed(tasksFnc);

// Each iteration returns a new promise, and that becomes the prevPromise for the next iteration.
