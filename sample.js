const myObj = {
    a : "1",
    b: 2,
    c : {d : 3, e : 4},
    d: [1,2,3,4],
    e: [{a: "hello", b:123}]
}

const myObjStr = JSON.stringify(myObj);

console.log("JSON.stringify Output:",myObjStr) // {“a”:”1”,”b”:2,”c”:{“d”:3,”e”:4},"d":[1,2,3,4],"e":[{"a":"hello","b":123}]}


function myStringifyFn(myObj){
    // impliment this function
    if(Array.isArray(myObj)) {
        const items = myObj.map(item => myStringifyFn(item))
        return '[' + items.join(",") + ']'
    }else if(typeof myObj === 'object') {
        const stringifiedObj = Object.keys(myObj).map((key) => {
            const value = myStringifyFn(myObj[key]);
            return '"' + key + '"' + ":" + value
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


// {“a”:”1”,”b”:2,”c”:{“d”:3,”e”:4},"d":[1,2,3,4],"e":[{"a":"hello","b":123}]}
function myStringify(obj) {
    if(Array.isArray(obj)) {
        const arrStr = obj.map((item) => myStringify(item)).join(",");
        return `[${arrStr}]`
    }else if(typeof obj === "string"){
        return `"${obj}"`
    }else if(typeof obj === "number"){
        return obj;
    }else if(typeof obj === "object" && obj !== null) {
        const keys = Object.keys(obj);
        const objStr = keys.map((key) => `"${key}":${myStringify(obj[key])}`).join(",");
        return `{${objStr}}`
    }else {
        return "null";
    }
}


console.log(myStringify(myObj))

let obj2 = {
    "a": 20,
    "b": "aa",
    "c": [1,2,3,4],
    "d": {
        "aa": 12,
        "bb": "abcde",
        "cc": [11,12,13,14],
        "dd": {
            "aaa": 1,
            "bbb": "asdf"
        }
    }
}

console.log("JSON Response 2: ", JSON.stringify(obj2))
console.log("Custom JSON:",myStringify(obj2))
