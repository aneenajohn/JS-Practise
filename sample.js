const myObj = {
    a : "1",
    b: 2,
    c : {d : 3, e : 4},
    d: [1,2,3,4],
    e: [{a: "hello", b:123}]
}

const myObjStr = JSON.stringify(myObj);

console.log("JSON.stringify Output:",myObjStr) // {“a”:”1”,”b”:2,”c”:{“d”:3,”e”:4}}


function myStringifyFn(myObj){
    // impliment this function
    if(Array.isArray(myObj)) {
        const items = myObj.map(item => myStringifyFn(item))
        return '[' + items.join(",") + ']'
    }else if(typeof myObj === 'object') {
        const stringifiedObj = Object.keys(myObj).map((key) => {
            const value = myStringifyFn(myObj[key]);
            return '"' + key+ '"'+":"+ value
        })
        return '{' + stringifiedObj.join(",") + '}';
    }else if(typeof myObj === 'string') {
        return '"' + myObj + '"'
    }else if(typeof myObj === 'number') {
        return myObj;
    }
}
const myObjStr2 = myStringifyFn(myObj);
console.log("myStringifyFn output: ", myObjStr2) // {“a”:”1”,”b”:2,”c”:{“d”:3,”e”:4}}

