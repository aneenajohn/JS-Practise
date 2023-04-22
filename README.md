# Event Loop and the order of execution.
## The following flow can be visualized on https://www.jsv9000.app

`console.log("a");
setTimeout(() => {console.log("set Timeout function called");}, 0)
Promise.resolve(() => console.log("Promise resolved")).then(res => res());
console.log("b");`


JS runs the code line by line, once it sees a setTimeout it moves it to task Queue 
and if we have any promises it goes to Task Queue from call Stack.

Initially JS:
    - completes the task present in call stack
    - Once call stack is empty, event loop checks the microTask Queue
    - Microtask Queue has higher priority than Task Queue
    - Select the oldest Microtask from the Microtask Queue. Run it until the Call Stack is empty. Repeat until the Microtask Queue is empty.
    - Once micro task is empty JS checks for Task Queue.
    -  Select the oldest Task from the Task Queue. Run it until the Call Stack is empty