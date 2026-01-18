console.log('Testing Prototypal Inheritance without classes');
const person1 = {
    talk() {
        return "Talking";
    }
}

const person2 = {
    talk() {
        return "Talking";
    }
}
console.log(person1.talk()); 
console.log(person2.talk());

// Problems here:
// 1. Code duplication: talk method is duplicated in both objects
// 2. Maintenance: If we want to change the talk method, we have to change it in multiple places

// Solution: Prototypal Inheritance using Object.create
class Person {
    talk() {
        return "Talking from class Person";
    }
}

const you = new Person();
const me = new Person();

console.log('me:', me);
//DOCS: Here me is an instance of Person class and has access to talk method via prototype chain, talk is not an own property of me

console.log(you.talk());
console.log(me.talk());

// Update the talk class
Person.prototype.talk = function() {
    return 'New and improved talking';
}
console.log(you.talk());
console.log(me.talk());
console.log('Updated talk method for both instances');
console.log(Person.prototype === me.__proto__);
// Benefits:
// We solved the original problem of code duplication and maintenance
// 1. Code Reusability: talk method is defined only once in the Person class
// 2. Maintenance: If we want to change the talk method, we only have to change it in one place

// Note: In JavaScript, classes are syntactical sugar over prototypal inheritance underneath they still use object prototypes and function constructors
// Under the hood, JavaScript uses prototypes to achieve inheritance
// When we create an instance of a class, it sets up the prototype chain automatically
// This allows instances to inherit methods and properties from the class prototype

function Person1() {}
Person1.prototype.talk = function() {
    return "Talking";
}

const him = new Person1();
console.log(him.talk());
//DOCS: Here him is an instance of Person1 function constructor and has access to talk method via prototype chain, talk is not an own property of him


const Person2 = {};
Person2.talk = function() {
    return "Talking from Person2 object";
}

const her = Object.create(Person2);
console.log(her.talk());


const them = Object.setPrototypeOf({}, Person2);
console.log(them.talk());
//DOCS: Here her and them are objects created using Object.create and Object.setPrototypeOf respectively, they have access to talk method via prototype chain, talk is not an own property of her or them

const their = {};
Object.setPrototypeOf(their, Person2);