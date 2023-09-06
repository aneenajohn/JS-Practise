let arr = [1,2,3,4];

let obj = {
    foo: "bar",
}

function fun() {
    
}

Function.prototype.myBind = function() {
    console.log("jahskasal");
}

fun.myBind();

Array.prototype.myTest = function() {
    console.log("Array prototype")
}

arr.myTest();

function sum() {

}

// sum.prototype.myBind();
sum.myBind();
sum.__proto__.myBind();


