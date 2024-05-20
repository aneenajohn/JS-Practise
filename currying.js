const buildSandwich = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1} ${ingredient2} ${ingredient3}`;
    };
  };
};

console.log(buildSandwich('butter')('lettuce')('cucumber'));

const sandy = (ingredient1) => (ingredient2) => (ingredient3) =>
  `${ingredient1} ${ingredient2} ${ingredient3}`;

console.log(sandy('bread')('tomato')('carrot'));

const multiply = (x, y) => x * y;

const curriedMultiply = (x) => (y) => x * y;

console.log(multiply(2, 3));
console.log(curriedMultiply(2)(3));

const timesTen = curriedMultiply(10);

const count = timesTen(8);

console.log(count);
