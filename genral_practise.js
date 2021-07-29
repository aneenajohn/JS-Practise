// To print anything
function A(toPrint){
    console.log(toPrint);
}


//1) CALLBACK
//A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed. 

const arr=[1,2,3,4,5];

function modifyArray(arr,callback){
	arr.push(100);
	callback();
}

modifyArray(arr, function() {
	console.log(`the modified arr is ${arr}`)
})


// Q2: Given a string, reverse each word in the sentence

function reverseString(word){
    A(word.split("").reverse().join(""));
}

reverseString("welcome");

// Q3: How to check if an object is an array or not?

A(Array.isArray(arr)); // returns true if the object is an array else false;
A(Array.isArray("asrte"));