# Reduce

The `reduce` method is used to perform aggregation, segregation, or to run operations in sequence/series on an array.

## Syntax

arr.reduce(callbackFnc, initialValue)

- **callbackFnc**: A function that is called for each element in the array, taking four arguments:
    - **prevValue**: The accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
    - **currentValue**: The current element being processed in the array.
    - **currentIndex**: The index of the current element being processed in the array (optional).
    - **arr**: The array reduce was called upon (optional).

- **initialValue**: A value to use as the first argument to the first call of the callback function (optional). If it wasn't provided, it takes the first element of the array.
