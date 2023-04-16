

const arr = [
    [1,2],
    [3,4,5],
    [6,[7,8,9],10],
    [11,12]
]

console.log(arr);


const flattenedArr = arr.flat();
console.log("flattenedArr: ", flattenedArr);

const flattenedArr2Level = arr.flat(2);
console.log("Two level flattenedArr: ", flattenedArr2Level);

const flattenedArr1 = [].concat(...arr);
console.log("FlattenedArr2: ", flattenedArr1);

let customFlat = [];
const customFlattend = arr.map((item) => {
    return (
        // let flat = [...]
        // customFlat.concat(...item)
        // console.log(...item);
        customFlat.push(...item)
    )
})

console.log("customFlattend: ", customFlat);

let level2 = []
customFlat.map((item) =>  {
    if(Array.isArray(item)) {
        level2.push(...item)
    } else {
        level2.push(item);
    }
    return level2;
})

console.log("Level 2: ", level2);



const arr1 = [
    1,2,
    [3,4,5],
    [6,[7,8,9, [91, 92]],10],
    [11,12]
]


console.log("1 level flattening");
const myFlatArr = (arr) =>  {
    let flattenedArr = []
    arr.map((item) =>  {
        if(Array.isArray(item)) {
            flattenedArr.push(...item)
        } else {
            flattenedArr.push(item);
        }
    })
    return flattenedArr;
}

const arr1Flattened = myFlatArr(arr1);

console.log("arr1Flattened: ", arr1Flattened);

console.log("arr1: ", arr1);

const myFlatArrNLevel = (arr,n) => {
    let flattenedArr = [];
    let depth = n;
    while (depth > 0){
        if(depth === n) {
            arr.map((item) => {
                if(Array.isArray(item)){
                    flattenedArr = [...flattenedArr, ...item]
                }else{
                    flattenedArr = [...flattenedArr, item]
                }
            })
        } else {
            let flattendArrLength = flattenedArr.length;
            flattenedArr.map((item) => {
                if(Array.isArray(item)){
                    flattenedArr = [...flattenedArr, ...item]
                }else{
                    flattenedArr = [...flattenedArr, item]
                }
            })
            flattenedArr = flattenedArr.slice(flattendArrLength)
        }
        depth--;
    }
    return flattenedArr;
}


console.log("myFlatArrNLevel: ", myFlatArrNLevel(arr1,3));


