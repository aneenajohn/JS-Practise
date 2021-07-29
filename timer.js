// 1) Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
// Use only nested setTimeOut method.


// Not the right way,since you are not using nested Timeout
function timer(start,end){
    for(let i=start;i<=end; i++){
        setTimeout(() => {
            console.log(i);
        },i*1000)
    }
}

// timer(1,5);

// RIGHT WAY
function printNumbers(from, to){
    let current = from;
    setTimeout(function print(){
        console.log(current);
        if(current < to){
            setTimeout(print,1000);
        }
        current++;
    },1000)
}

printNumbers(1,5);



// for (let i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, i* 1000);
//   }