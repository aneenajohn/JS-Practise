// Q1
document.getElementById("wrapper").addEventListener("click", () => {
    console.log("wrapper")
})

document.getElementById("button").addEventListener("click", () => {
    console.log("button")
})

function logger(value) {
    console.log(value);
}


// Q2
const values = new Set();

values.add(1)
values.add(1)
values.add("a")
values.add("a")
values.add(undefined)
values.add(undefined)
values.add({isObject: true})
values.add({isObject: true})

logger(`values.size ${values.size}`);



// Q3

async function fetch() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("b")
        }, 200)
    })
}

async function sampleB() {
    setTimeout(() => {
        logger("a")
    },100);
    logger(await fetch());
    logger("c");
}

sampleB();