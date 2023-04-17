const arr1 = [
    1,2,
    [3,4,5],
    [6,[7,8,9, [91, 92]],10],
    [11,12]
]

// Optimised Flat, not fully working
function customFlat(arr,depth = 1) {
    let result = [];
    arr.forEach(element => {
        if(Array.isArray(element) && depth > 0) {
            result.push(...customFlat(element, depth -1))
        }else {
            result.push(element);
        }
    });

    return result;
}