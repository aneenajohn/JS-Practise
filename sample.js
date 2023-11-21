let obj1 = {
    a: 11,
    b: 22,
    c: 33
  };

  let obj2 = obj1;

  obj2.b = 222;

  obj1.a = 111;
  console.log({ obj1, obj2 });

  let obj3 = { ...obj1 };
  obj3.a = 123;

  console.log({ obj1, obj3 });

// When we use spread operator, nested arrays and objects are copied as reference to its original object
// Hence, it's not a deep copy, It's actually shallow copy only

let originalObject = {
    a: "aaaa",
    b: "bbbb",
    c: "cccc",
    d: {
      aa: "aa",
      bb: "bb"
    }
  };

  const deepClone = (obj) => {
    if(typeof obj !== "object" || obj === null) {
        return obj
    }

    let clonedObj = Array.isArray(obj) ? [] : {};

    for(let key in obj) {
        if(Object.hasOwn(obj, key)) {
            clonedObj[key] = deepClone(obj[key])
        }
    }

    return clonedObj
  }

  const deepCopy = deepClone(originalObject);

  deepCopy.b = "dog";
  deepCopy.d.aa = "aaa";

  console.log({ originalObject, deepCopy });
