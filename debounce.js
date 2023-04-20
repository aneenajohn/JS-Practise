

function debounce(cb, delay) {
    return function(...args){
        let timer;
        if(timer) clearTimeout(timer);
        setTimeout(()=>{
            cb(...args);
        },delay)
    }
}


const inputRef = document.querySelector("#input");

// inputRef.addEventListener('change', (e) => {
//     console.log(e.target.value);
// })

inputRef.addEventListener('change', debounce((e) => {
    console.log(e.target.value);
},1000))

// console.log("input", inputRef);