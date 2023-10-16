let nameObj = {
    fname: "aneena",
    lname: "john"
}

function printName() {
    console.log(this.fname + " " + this.lname);
}

const print = printName.bind(nameObj);
print();

Function.prototype.myBind = function(...args) {
    const obj = this
    return function() {
        obj.call(args[0])
    }
}

const print_v1 = printName.myBind(nameObj);
print_v1();


// Updating printName with args
function printName_v2(homeTown) {
    console.log(this.fname + " " + this.lname+ " " + homeTown);
}

const print_v2_bind = printName_v2.bind(nameObj, "Trichy");
print_v2_bind();

Function.prototype.myBind_v2 = function(...args) {
    const obj = this;
    const params = args.slice(1)
    return function () {
        obj.apply(args[0], [...params])
    }
}

const print_v2 = printName_v2.myBind_v2(nameObj, "Trichy");
print_v2();


// Updating printName with args passed to the returned function
function printName_v3(homeTown, state) {
    console.log(this.fname + " " + this.lname+ " " + homeTown+ " " + state);
}

const print_v3_bind = printName_v3.bind(nameObj, "Trichy");
print_v3_bind("TN");

Function.prototype.myBind_v3 = function(...args) {
    const obj = this;
    const params = args.slice(1);
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}

const print_v3 = printName_v3.myBind_v3(nameObj, "Trichy");
print_v3("TN");

// myBind_v3 is compatible with any no. of args from level1 and level2

function printName_v4(homeTown, state, country) {
    console.log(this.fname + " " + this.lname+ " " + homeTown+ " " + state + " " + country);
}

const print_n1 = printName_v4.myBind_v3(nameObj, "Trichy", "TN");
print_n1("India");

const print_n2 = printName_v4.myBind_v3(nameObj, "Trichy");
print_n2("TN", "India");

const print_n3 = printName_v4.myBind_v3(nameObj);
print_n3("Trichy","TN", "India");

