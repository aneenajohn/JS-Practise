// Case1:

const add = (x, y) => x + y;

add(2, 4); // 6


let a = 10;
const addImpure = (b) => a+=b;
addImpure(5); // 15
addImpure(3); // 18

console.log(a); // 18

//NOTE: The function 'addImpure' modifies the external variable 'a', making it impure.
// And it produces different outputs when called with the same argument, depending on the state of 'a'.
// Output depends on from when and where the function is called.

const object = {
    name: 'Aneena'
}

const impureFunc = (key, value, obj) => {
    obj[key] = value;
    return obj;
}

const res = impureFunc('Place', 'Washington DC', object);

console.log({res, object});

// Fix1: Making the impure function a pure function
const obj2 = {
    name: 'Appu'
}

const impureToPure = (key, value, obj) => ({
    ...obj,
    [key]: value
})

const res2 = impureToPure('Place', 'NY', obj2);

console.log({obj2, res2});

//WARN: Using the spread operator ... creates a shallow copy of an object. Shallow copies aren’t safe from nested mutations.
const person = {
  name: 'Bobo',
  address: { street: 'Main Street', number: 123 }
};

const shallowPerson = { ...person };
shallowPerson.address.number = 456;

console.log(person.address.number); // Outputs: 456, original object is mutated

// Fix2: Creating a deep copy to avoid nested mutations
const deepCopy = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}

const person2 = {
  name: 'Coco',
  address: { street: 'Second Street', number: 789 }
};

const deepPerson = deepCopy(person2);
deepPerson.address.number = 101;

console.log(person2.address.number); // Outputs: 789, original object is not mutated