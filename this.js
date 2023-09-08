
var fname ="Ane"
function getUserName() {
    console.log(this);
}

getUserName() // DOCS: When this keyword is used in a function then the way by which you execute the function provides the context for this
// In this case, when there no left hand side operator while calling the function then this `this` points to the global window object.

let firstName = "Allan"

function getFirstName() {
    let lname = "Ram";
    console.log(this);
    console.log(this.firstName, this.fname, this.lname);
}

getFirstName();

window.getFirstName();


let userData = {
    name: "Aneena",
    getUserName: function() {
        console.log(`${this.name} just hopped in!`)
    }
}

userData.getUserName();

let userData2 = {
    name: "Aneena2",
    getUserName: function() {
        function print() {
            console.log(this);
            console.log(`${this.name} just hopped in!`) // when the print function gets invoked, there is no context provided to the print function hence `this` points to the window object
        }
        print()
    }
}

userData2.getUserName();

let userData3 = {
    name: "Aneena3",
    getUserName: function() {
        const print = () => {
            console.log(this);
            console.log(`${this.name} just hopped in!`) // Herein, when the print function gets invoked, it doesn't have any context however since this is an arrow function, `this` gets context from the lexical env which has userData3
        }
        print()
    }
}

userData3.getUserName();

// Constructor Functions:
function Person(name) {
    this.name = name;
}

const me = new Person("Aneena");
const you = new Person("Allan");
const student1 = new Person("Helan");

// console.log({me,you,student1})
console.log(typeof me);


Person.prototype.log = function() {
    console.log(this.name);
}

Person.prototype = {
    ...Person.prototype,
    breed: "human"
}

console.log({me,you,student1})

me.log();
you.log();
student1.log();


var count = 20;

function printCount() {
    count = 40;
    console.log("Count = ",this.count)
}

printCount();