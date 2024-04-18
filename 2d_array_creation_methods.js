// 1. Using nested loops - Basic
function create2DArray(m, n) {
  let arr = new Array(m);
  for (let i = 0; i < m; i++) {
    arr[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      arr[i][j] = 0; // or other initial values
    }
  }
  return arr;
}

console.log(create2DArray(3, 3));

// 2. Using Array.from()

function create2DArray2(m, n) {
  return Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
}

console.log(create2DArray(4, 5));

// 3.Using Array.fill() and map()
function create2DArray3(m, n) {
  return Array(m)
    .fill()
    .map(() => Array(n).fill(0));
}

console.log(create2DArray3(3, 4));

// 4. Using spread operator
function create2DArray4(m, n) {
  return [...Array(m)].map(() => Array(n).fill(0));
}
// DOCS: Pros: Concise, easy to understand Cons: Performance might be slightly inferior to other methods.

// check
