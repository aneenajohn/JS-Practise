
var aaa = "Appu";

function getUserName() {
    aaa = "Aneena"
    console.log(this.aaa);
}

// getUserName();

var bbb = "Captain Miller";

const getName = () => {
    console.log(this.bbb);
}

// getName();


const userData = {
    name: "John",
    aaa: "Xavier",
    getUserData: function() {
        console.log(this); // this -> userData this fnc getUserData is called with userData on left side so the this operator inside the function points to userData object;
        console.log(this.name, this.aaa);
        function print() {
            console.log(this);  // this -> window
            console.log(this.aaa);
        }

        print(); // this function is called without any left side object so it points to global window object;
    }
}

userData.getUserData();


// DOCS: Arrow function doesn't have their own this operator hence it goes and check in the lexical parent environment if that has the this operator
const userDataWithArrowFunc = {
    name: "John",
    aaa: "Xavier",
    getUserData: function() {
        console.log(this); // this => userDataWithArrowFunc
        console.log(this.name, this.aaa);
        print = () => {
            console.log(this);  // this => userDataWithArrowFunc
            console.log(this.aaa);
        }

        print(); // this function is called without any left side object so it points to global window object;
    }
}

userDataWithArrowFunc.getUserData();


const userDataWithArrowFunc_v2 = {
    name: "John",
    aaa: "Xavier",
    getUserData: () => {
        console.log(this); // this => window
        console.log(this.name, this.aaa);
        print = () => {
            console.log(this);  // this => window
            console.log(this.aaa);
        }

        print();
    }
}

userDataWithArrowFunc_v2.getUserData();