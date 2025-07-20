let aa = 20;
function outer() {
  let a = 10;

  function inner() {
    console.log(`a: ${a}, aa: ${aa}`);
  }
  return inner;
}

// outer()();

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(`count: ${count}`);
  };
}

const count1 = counter();
// count1();
// count1();

// console.log('Count2');
// const count2 = counter();
// count2();
// count2();
// count2();
// count2();

function CounterWithConstructorFunc() {
  let count = 0;

  this.incrementCounter = function () {
    count++;
    console.log(count);
  };

  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

// console.log('Count3');
const count3 = new CounterWithConstructorFunc();
// count3.incrementCounter();
// count3.incrementCounter();
// count3.incrementCounter();
// count3.decrementCounter();

// for (var i = 0; i < 5; i++) {
//   function print(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, [i * 1000]);
//   }
//   print(i);
// }

const myPromise = () => Promise.resolve('I have resolved');

function firstFunc() {
  myPromise().then((res) => console.log(res));
  console.log('second');
}

async function secondFunc() {
  const data = await myPromise();
  console.log(data);
  console.log('second 2');
}

// firstFunc();
// secondFunc();
/*
'second'
'I have resolved'
'I have resolved'
second 2
*/

const pro = new Promise((res, rej) => {
  let success = true;

  if (success) {
    setTimeout(() => {
      res('Done success');
    }, [3000]);
  } else {
    rej('Failed');
  }
});

// pro
//   .then((res) => console.log(res))
//   .catch((err) => console.log(`err: ${err}`))
//   .finally(() => console.log('Promise done succ'));

async function executePro() {
  try {
    const data = await pro;
    console.log(data);
    console.log('After');
  } catch (err) {
    console.log(`err: ${err}`);
  } finally {
    console.log('Finally');
  }
}

// executePro();

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// wait(1000)
//   .then(() => console.log('waited for 1 sec'))
//   .then(() => wait(2000))
//   .then(() => console.log('waited for 2 sec'));

function waitUpdated(ms) {
  return new Promise((res) => setTimeout(() => res(`Waited for ${ms} ms`), ms));
}

waitUpdated(1000)
  .then((msg) => {
    console.log(msg);
    return waitUpdated(2000);
  })
  .then((msg) => console.log(msg))
  .catch((error) => console.error(error));
