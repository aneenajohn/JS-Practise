# Pure Vs Impure functions:

A function’s pure if it’s free from side-effects and returns the same output, given the same input.

Pure functions doesnt depend on from where/ when you call the function still it retruns the same output for the same input every time.

Side-effects include: 
   - Mutating input, 
   - HTTP calls,
   - Writing to disk(Changing the filesystem (fs)),
   - Printing to the screen(console loggers)
   - Querying the DOM.
   
You can safely clone, then mutate, your input. Just leave the original one untouched.
Spread syntax (… syntax) is the easiest way to shallowly clone objects.
JSON.parse(JSON.stringify(object)) is the easiest way to deeply clone objects. 
