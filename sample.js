// Infinite currying

function sumInfinite(a) {
    return function (b) {
        if(b) return sumInfinite(a+b);
        return (a)
    }
  }

  console.log(sumInfinite(1)(2)(3)());
  console.log(sumInfinite(1)(2)(3)(4)(5)());
  console.log(sumInfinite(1)(2)(3)(4)(5)(6)(7)(8)());