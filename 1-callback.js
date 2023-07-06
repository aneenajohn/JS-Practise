console.log("Statement1");

// setTimeout(() => {
//     console.log("After 1sec timeout")
// }, 1000);
let name ="Aneena"
let city ="New York"
let subcribedTo ="Amazon Prime"

function introduce(name,city,cb) {
    setTimeout(() => {
        console.log(`this is ${name}`)
        cb(city)
    }, 1000);
}

function personFrom(city) {
    setTimeout(() => {
        console.log(`Based out of ${city}`)
    }, 1000)
}

const importantAction = introduce(name,city,personFrom);

function getSubcriptionInfo(subcribedTo, cb) {
    setTimeout(() => {
        // console.log(`Subcribed to ${subcribedTo}`)
        cb(`Subcribed to ${subcribedTo}`)
    },1000)
}

function currentlyWatching(movieName, cb) {
    setTimeout(() => {
        cb(movieName)
    }, 3000)
}

function getSubcriptionEndInfo(day, month, cb) {
    setTimeout(() => {
        cb(`Subcription ends by ${month}, ${day}`)
    },2000)
}

// const message = getSubcriptionInfo(subcribedTo);
const message = getSubcriptionInfo(subcribedTo, function(message){
    console.log(message);
    currentlyWatching("Young Sheldon", function(movie) {
        console.log(`CUrrently watching ${movie}`)
        getSubcriptionEndInfo(23, "July", function(data) {
            console.log(data);
        })
    })
})

// console.log("Msg: ", message);

console.log("Statement2");