/*
Prototypal Inheritance:

    Why?
        - Prevent code duplication.
            - If there is a bug in the talk function as below, we dont just have to fix it in one place , we  have to fix that in multiple objects as in me/you/his/her object as in n number of objects where the talk function is repeated.
            - Changes in multiple places -- makes it a bad system.
    How?
        - In JS, you might have heard inheritance  is done through Objects or more specifically via prototypes.
        - The one example below based on Class uses objects and prototypes underneath -- Something to be called as Syntactic sugar.
        - By using functions
        - By using pure objects
*/

const me = {
  talk() {
    return 'Talking';
  },
};

const you = {
  talk() {
    return 'Talking';
  },
};

console.log('From objects');
console.log(me.talk());
console.log(you.talk());

/*
How to fix this? 
    - Using class, objects, function

Using class:
    - Class based inheritance -- creates a template where you can inherit from.
*/

class Person {
  talk() {
    return 'Talking';
  }
}

const meFromPersonClass = new Person();
const youFromPersonClass = new Person();

console.log('From class: ');
console.log(meFromPersonClass.talk());
console.log(youFromPersonClass.talk());

console.log(me);

console.log(Person);

console.log('meFromPersonClass.__proto__: ', meFromPersonClass.__proto__);

console.log('Person.prototype', Person.prototype);

console.log(
  'meFromPersonClass.__proto__ === Person.prototype',
  Person.prototype === meFromPersonClass.__proto__
);

meFromPersonClass.age = 18;
/* 
    So how will you update when you have to do any fixes on talk method.
*/

Person.prototype.talk = function () {
  return 'New and improved talking';
};

console.log('Talk post update:');

console.log(meFromPersonClass.talk());
console.log(youFromPersonClass.talk());

meFromPersonClass.__proto__.talk = function () {
  return 'talk updated';
};

console.log('Check for talk method post update: ');
console.log(meFromPersonClass.talk());
console.log(youFromPersonClass.talk());
console.log(Person.prototype.talk());

class SuperHuman extends Person {
  fly() {
    return 'Flying';
  }
}

const batman = new SuperHuman();

console.log('Instance of SuperHuman inherited from Person');
console.log(batman.fly());
console.log(batman.talk());

/* 
With constructor functions:
    - Inherit with this operator
    - Inherit with prototype
*/

function PersonFnc() {}

PersonFnc.prototype.talk = function () {
  return 'talking from PersonFnc';
};

const meFromFnc = new PersonFnc();
const youFromFnc = new PersonFnc();

console.log('Inheritance with functional prototype');
console.log(meFromFnc);
console.log(youFromFnc);

function PersonFncWithThis() {
  this.age = 12;
  this.talk = function () {
    return 'Talking from PersonFncWithThis';
  };
}

/*
So when you can add a method on func using this operator then why do we even need to do this on Prototype, You may ask ??
    - Anything that you add on this operator in a constructor func including a function wont be regarded as a method but as property(ie treated as string/ bool  -- so this property gets copied to each and every one of its instances.
    - The function itself gets copied to its child instances as one of its prop, whereas in case we add on the prototype it gets added as a method.
    - So when you want to modify something on this method you have to update all its instance hence, its not even inheritance anymore.
*/

console.log('Inheritance with func using this');
const me2 = new PersonFncWithThis();
const you2 = new PersonFncWithThis();

me2.talk = function () {
  return 'Updated talk on me2';
};

console.log('New instance with this operator');
console.log(me2.talk());
console.log(you2.talk());

PersonFncWithThis.age = 40;

console.log('Age in PersonFncWithThis', PersonFncWithThis.age);
console.log('Age in me2 instance of PersonFncWithThis', me2.age);

// NOTE: So if we observe here the talk prop is also treated same as my age prop which holds a number

/*
    - So it pretty common to add all the props to the this object inside the constructor and the methods to the prototype of the constructor func

    - It give the clear separation of Props(things I have) vs Methods(Things I do)
*/

function Human(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Human.prototype.run = function () {
  return 'Running';
};

Human.prototype.talk = function () {
  return 'Talking';
};

Human.prototype.walk = function () {
  return 'Walking';
};

// By using pure objects

const PersonObj = {
  talk() {
    return 'talking';
  },
};

const meFromPersonObj = Object.create(PersonObj);

console.log(meFromPersonObj.talk());

const he = {};

Object.setPrototypeOf(he, PersonObj); // First param is the one where you want the object to be inherited to, Second param is the one --> where to inherit from
