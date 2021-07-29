
// To print anything
function A(toPrint){
    console.log(toPrint);
}


// * 1) CALLBACK ?
// TODO: A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed. 
A("Q1: Call Back?");

const arr=[1,2,3,4,5];

function modifyArray(arr,callback){
	arr.push(100);
	callback();
}

modifyArray(arr, function() {
	console.log(`the modified arr is ${arr}`)
})


//* Q2: Given a string, reverse each word in the sentence

A("Q2: Given a string, reverse each word in the sentence");

function reverseString(word){
    A(word.split("").reverse().join(""));
}

reverseString("welcome");

//* Q3: How to check if an object is an array or not?
A("Q3: How to check if an object is an array or not?");

A(Array.isArray(arr)); // returns true if the object is an array else false;
A(Array.isArray("asrte"));


const numArr = new Array([1,2,3,4,5]);
A(numArr);
A(Array.isArray(numArr));

//* Q4: How to empty an array in JavaScript?

A("Q4: How to empty an array in JavaScript?");
var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];

//* Method 1:
// arrayList =[];
// A(arrayList);

// ! this sets arrayList to a new empty(ie creates a new empty arr) & is reccomended only when dont have ref to this array anywhere else
// ! then the original array remains unchanged.

// var anotherArrayList = arrayList;  // Referenced arrayList by another variable
// arrayList = [];
// A(arrayList);
// console.log(anotherArrayList); // Output ['a', 'b', 'c', 'd', 'e', 'f']


//* Method 2:
// ! Except meth1 rest all mesthods modifies the original array itself.
// A(arrayList);
// arrayList.length =0;
// A(arrayList);

// var anotherArrayList = arrayList;  // Referenced arrayList by another variable
// arrayList.length = 0;
// A(arrayList);
// console.log(anotherArrayList); // Output ['a', 'b', 'c', 'd', 'e', 'f']

//* Method 3:
// var anotherArrayList = arrayList; 

// while(arrayList.length){
// 	arrayList.pop();
// }

// A(arrayList);
// A(anotherArrayList);


//* Method 4:

var anotherArrayList = arrayList; 

arrayList.splice(0,arrayList.length);

A(arrayList);
A(anotherArrayList);

// * Q5: How would you check if a number is an integer?
A("Q5: How would you check if a number is an integer?");

function isInt(num) {
	return num % 1 === 0;
}

A(isInt(5));
A(isInt(2.14));


// * Q6: Implement enqueue and dequeue using only two stacks

let stack1 =[];
let stack2 = [];

function enqueue(element){
	return stack1.push(element);
}

enqueue(10);
A(stack1);

enqueue(20);
A(stack1);

enqueue(30);
A(stack1);


function dequeue(stack){
	stack2 = stack.reverse();
	while(stack2.length){
		console.log(stack2.pop());
	}
	A(stack2);
}

dequeue(stack1);



// * console.log(mul(2)(3)(4)); // output : 24

