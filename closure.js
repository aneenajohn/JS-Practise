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