
// TOPIC: Promises & Callbacks


// DOCS: Promises
// console.log("Start");


// function logName(msg, cb) {
//     setTimeout(() => {
//         cb(`this is ${msg}`);
//     }, 1000)
// }

// function logCity(msg, cb) {
//     setTimeout(() => {
//         cb(`Based out of ${msg}`)
//     },1000)
// }

// function logInterests(msg, cb) {
//     setTimeout(() => {
//         cb(`Loves to eplore ${msg}`)
//     }, 1000)
// }
// logName("Aneena", (msg) => {
//     console.log(msg)
//     logCity("Chennai" , (msg) => {
//         console.log(msg);
//         logInterests("the world", (msg) => {
//             console.log(msg);
//         })
//     })
// });

// console.log("Stop");


// DOCS: Promises

console.log("Promise Start");


// *Concept1: 

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = true;
//         if(result) resolve("Wohhooo, this is the response")
//         else reject(new Error("Ran into unexpected failure!"))
//     }, 2000)
// })

// myPromise
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err);
//     })


// *Concept2:

// const promise1 = Promise.resolve("Welcome to heaven!")
// console.log(promise1);

// promise1.then((res) => console.log(res)).catch((err) => console.error(err));

// const promise2 = Promise.reject("Unhandled error")
// console.log(promise2);

// promise2.then((res) => console.log(res)).catch((err) => console.error(err));

// console.log("Promise stop");


// DOCS: Rewriting callbacks into promises

console.log("Start");


function logName1(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`this is ${msg}`);
        }, 1000)
    })
}

function logCity1(msg) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Based out of ${msg}`)
        },1000)
    }) 
}

function logInterests1(msg) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Loves to eplore ${msg}`)
        }, 1000)
    }) 
}

// logName("Aneena", (msg) => {
//     console.log(msg)
//     logCity("Chennai" , (msg) => {
//         console.log(msg);
//         logInterests("the world", (msg) => {
//             console.log(msg);
//         })
//     })
// });

// *Concept1 - This gives the expected o/p like callbacks, however this also form a pyramid like structure => hence this can be solved by promise chaning.
logName1("Aneena").then((result) => {
    console.log(result);
    logCity1("Trichy").then((res) => {
        console.log(res);
        logInterests1("Travelling").then((res) => {
            console.log(res);
        })
    })
}).catch((err) => {
    console.error(new Error(err))
});


// *Concept2 - Promise Chaining
logName1("Aneena1").then((res) => {
    console.log(res)
    return logCity1("Trichy1")
}).then((res) => {
    console.log(res);
    return logInterests1("Travelling1")
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.err(new Error(err));
})


 console.log("Stop");



