
// Q1

// Promises & Callbacks

console.log("Start");


function logName(msg, cb) {
    setTimeout(() => {
        cb(`this is ${msg}`);
    }, 1000)
}

function logCity(msg, cb) {
    setTimeout(() => {
        cb(`Based out of ${msg}`)
    },1000)
}

function logInterests(msg, cb) {
    setTimeout(() => {
        cb(`Loves to eplore ${msg}`)
    }, 1000)
}
logName("Aneena", (msg) => {
    console.log(msg)
    logCity("Chennai" , (msg) => {
        console.log(msg);
        logInterests("the world", (msg) => {
            console.log(msg);
        })
    })
});

console.log("Stop");