# Pure Vs Impure functions:

By defnition of a pure function:
 - The function always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program’s execution. It must only depend on its input arguments.
 - The function does not produce any observable side effects such as network requests, input and output devices, or data mutation.


A function’s pure if it’s free from side-effects and returns the same output, given the same input. Pure functions doesnt depend on from where/ when you call the function still it retruns the same output for the same input every time.

Side-effects include: 
   - Mutating input, 
   - HTTP calls,
   - Writing to disk(Changing the filesystem (fs)),
   - Printing to the screen(console loggers)
   - Querying the DOM
   - Math.random() or fetchibg the current time.
   
A pure function
     doesn’t depend on any external input, it doesn’t mutate any data and it doesn’t have any side effects.
    
You can safely clone, then mutate, your input. Just leave the original one untouched.
Spread syntax (… syntax) is the easiest way to shallowly clone objects.
JSON.parse(JSON.stringify(object)) is the easiest way to deeply clone objects. 

## Testability And Refactoring
Another reason to use pure functions where possible is testing and refactoring.

One of the major benefits of using pure functions is they are immediately testable. They will always produce the same result if you pass in the same arguments.

They also makes maintaining and refactoring code much easier. You can change a pure function and not have to worry about unintended side effects messing up the entire application and ending up in debugging hell.

## References:

- https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c
- https://www.freecodecamp.org/news/what-is-a-pure-function-in-javascript-acb887375dfe/

