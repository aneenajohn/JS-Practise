const myObj = {
  dessert: 'Tres Leches',
  drink: 'Two and half men',
  starter: 'tippi tippi',
};

myObj.test = 'Blub';

Object.defineProperty(myObj, 'test2', {
  value: 'Blubbbb',
});

// console.log('From for each:');
// Object.keys(myObj).forEach((key) => {
//   console.log(key);
// });

// console.log('From map:');
// Object.keys(myObj).map((key) => console.log(key));
console.log('getOwnPropertyNames: ', Object.getOwnPropertyNames(myObj));

console.log('From for in loop:');
for (key in myObj) {
  console.log(key);
}

console.log('Printed all the properties of myObj');

const a = [1, 2, 3];
a.myFunction = () => {
  console.log('hello');
};

Object.defineProperty(a, 'myFunc2', {
  value: () => {
    console.log('myFunc2 below');
  },
  enumerable: true,
  configurable: true,
  writable: true,
});

Object.keys(a).forEach((key) => {
  console.log(key);
});

console.log('Printed all the properties of array object');

a.myFunc2();
