// 1D Array creation methods:

// 1. Using array literals

const arr1 = [1, 2, 3];

// 2. Using the array constructor

const arr2 = new Array(1, 2, 3, 4, 5);

// DOCS: However, when using the Array constructor, it's important to note that if only one parameter is passed, it denotes the length of the array.
const arr3 = new Array(2); // You can use this Array constructor to create an array of a specified length. But it's important to note that the elements of the array created this way are empty slots, not undefined.
console.log({ arr3 }); // arr3 contains o/p: [empty × 2]
// { arr3: [ <2 empty items> ] }

// To create an array with a single element, in addition to the above method, you can also use the Array.of() method. When multiple parameters are present, Array.of and the Array constructor have the same effect.

// To avoid the issue of empty slots, you can combine this with the Array.fill() method to populate the array:
const arr4 = new Array(3).fill(0);
console.log(arr4); // o/p: [0, 0, 0]

// OR to create a single element array we could use Array.of() which has the same effect as Array constructor.

// 3. Array.of()
const arr5 = Array.of(2);
console.log({ arr5 }); //o/p: [2]

// 4. Using Array.from()
// DOCS: The Array.from() method can create a new array instance from an array-like or iterable object. It can also take a map function as a second argument to initialize array elements.

const arr6 = Array.from({ length: 3 }, () => 1);
console.log({ arr6 }); // o/p: { arr6: [ 1, 1, 1 ] }

// 5. Using Spread Operator and Array()

const arr7 = [...Array(3).fill(50)];
console.log({ arr7 }); // o/p: { arr7: [ 50, 50, 50 ] }
