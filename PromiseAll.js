// Promise.all takes the array of promises and waits until all the promises are resolved and then returns the result once 

function showText(text) {
    return new Promise((res,reject) => {
        setTimeout(() => {
            res(text)
        },1000)
    })
}

// Success case
// Promise.all([showText("Hello"), Promise.resolve("Hi")]).then((res) => console.log(res))

// Failure
// Promise.all([showText("Hello"), Promise.resolve("Hi"), Promise.reject("Bye")]).then((res) => console.log(res))

function myPromiseAll(promises) {
    let result = []
    return new Promise((resolve, reject) => {
        promises.forEach((p,index) => {
            p.then(res => {
                // console.log("res: ", res);
                result.push(res)
                if(index === promises.length -1){
                    resolve(result)
                }
            }).catch((err) => reject(err))
        })
    })
}

myPromiseAll([showText("Hello"), Promise.resolve("Hi")]).then(res => console.log(res))

// myPromiseAll([showText("Hello"), Promise.resolve("Hi"), Promise.reject("Bye")])


