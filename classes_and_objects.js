// DOCS: 1. Getters and Setters
// The get syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.
// A getter must have exactly zero parameters.

/*
{ get prop() {...} }
{ get [expression]() {...} }
*/

const keyName = 'dynamicProp';

const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    return this.log[this.log.length - 1];
  },
  get secondElement() {
    return this.log[1];
  },
  get [keyName]() {
    return 'This is a computed property getter!';
  },
};

console.log(obj.latest);
console.log(obj.secondElement);
console.log(obj.dynamicProp);

// DOCS: Getters/Setters with classes

class getSetClass {
  _msg = 'hello';
  get msg() {
    return this._msg;
  }
  set msg(name) {
    this._msg = `hello ${name}`;
  }
}

const instance = new getSetClass();
console.log(instance.msg);

instance.msg = 'Aneena';

console.log(instance.msg);
