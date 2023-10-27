var counterFunc = (function () {
    let count = 0;
    function changeBy(val) {
      count += val;
    }
  
    return {
      increment: function() {
        changeBy(1)
      },
      decrement: function() {
        changeBy(-1)
      },
      value: function() {
        return count
      }
    }
  })()
  
  console.log(counterFunc.value());
  console.log(counterFunc.increment());
  console.log(counterFunc.increment());
  console.log(counterFunc.increment());
  console.log(counterFunc.value());
  console.log(counterFunc.decrement());
  console.log(counterFunc.decrement());
  console.log(counterFunc.value());


  function testCount() {
    let count = 0;

    function changeBy(val){
        count += val;
        return count;
    }

    return {
        increment: function() {
            changeBy(1)
        },
        decrement: function() {
            changeBy(-1)
        },
        value: function() {
            return count;
        }
    }
  }

  const counter = testCount();
  console.log(counter.value());
  console.log(counter.increment());
  console.log(counter.increment());
  console.log(counter.increment());
  console.log(counter.value());
  console.log(counter.decrement());
  console.log(counter.decrement());
  console.log(counter.value());

  function welcome(name) {
    var greetingInfo = function(message) {
      console.log(message + " " + name);
    }
    return greetingInfo;
  }

  const info = welcome("Aneena");
  info("Hello");
  info("Hi, Ms. ")