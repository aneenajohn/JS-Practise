
console.log("a");
setTimeout(() => {console.log("set Timeout function called");}, 0)
Promise.resolve(() => console.log("Promise resolved")).then(res => res());
console.log("b");