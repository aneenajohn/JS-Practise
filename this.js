
var fname ="Ane"
function getUserName() {
    console.log(this);
}

getUserName() // DOCS: When this keyword is used in a function then the way by which you execute the function provides the context for this

// In this case, when there no left hand side operator while calling the function then this `this` points to the global window object.

let firstName = "Yash"

function getFirstName() {
    let lname = "JKAK";
    console.log(this);
    console.log(this.firstName, this.fname, this.lname);
}

getFirstName();

window.getFirstName();

let lastName = "Yadav";

const getLastName = () => {
    console.log(this);
    console.log(this.lastName);
}

getLastName();

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
            console.log(`${this.name} just hopped in!`)
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
            console.log(`${this.name} just hopped in!`)
        }
        print()
    }
}

userData3.getUserName();