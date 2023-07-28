// DOCS: Version 1

var counter = (function () {
    var myCounter = 0;
    function changeBy(val) {
      myCounter += val;
    }
    return {
      increment: function () {
        console.log("Inc: ", myCounter);
        changeBy(1);
      },
      decrement: function () {
        console.log("Dec: ", myCounter);
        changeBy(-1);
      },
      value: function () {
        return myCounter;
      },
    };
  })();

console.log(counter.value());
// debugger;
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
counter.increment();
console.log(counter.value());


// DOCS: Version 2 - Not a closure

function counter2() {
  var myCounter = 0;
  function changeBy(val) {
    console.log("Before Val: ", val, myCounter)
    myCounter += val;
    console.log("After Val: ", val, myCounter)
  }

  return {
    increment: function() {
      changeBy(1)
    },
    decrement: function() {
      changeBy(-1)
    },
    value: function() {
      return myCounter;
    }
  }
}


  console.log(counter2().value());
  // debugger;
  counter2().increment();
  counter2().increment();
  console.log(counter2().value());
  counter2().decrement();
  console.log(counter2().value());
  counter2().increment();
  console.log(counter2().value());