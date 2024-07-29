// Is this a Singleton pattern?
function Counter() {
  this.count = 0;

  this.increment = () => {
    return this.count++;
  };

  this.decrement = () => {
    return this.count--;
  };
}

let counter1 = new Counter();
let counter2 = new Counter();

console.log(counter1 === counter2);

const singleton = (function () {
  let instance;

  return {
    getInstance() {
      if (!instance) {
        instance = new Counter();
      }

      return instance;
    },
  };
})();

let counter3 = singleton.getInstance();
let counter4 = singleton.getInstance();

console.log(counter3 === counter4);

console.log(counter3.increment());
console.log(counter3.increment());
console.log(counter3.decrement());
console.log(counter3.increment());

this.subscriber2 = function () {};
this.asyncSubcriber = async function () {};

this.publish1 = function () {};
this.publish2 = function () {};
