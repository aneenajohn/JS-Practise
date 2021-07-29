// Object() constructor
// The Object constructor creates an object wrapper for the given value.

const o = new Object();

// To print anything
function A(toPrint){
    console.log(toPrint);
}

A(o);

const p = new Object(undefined);
const q = new Object(null);

A(p);
A(q);


const obj = new Object("mannu");
A(obj);

const obj2 = new Object([1,2,3,4,5]);
A(obj2);

const obj3= {
    name:"Aneena",
    movieFreak:"Yes"
}

A(obj3);

const obj4 = new Object(obj3);
A(obj4);