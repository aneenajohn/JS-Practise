
// NOTE: SCOPE:
var aa = 20;
{
    var a = 10;
}

console.log("Var a, aa: ", a, aa);

let bb = 30;
{
    let b = 20;
}

const cc = 100;
{
    const c = 30
}
// console.log("const c: ", c); // NOTE:  ReferenceError: c is not defined
// console.log("let b: ", b , bb); // NOTE:  ReferenceError: b is not defined

// DOCS: Var has function scope whereas let and const have block scioping hence not available outside the block


// NOTE: Redeclaration
var a =50;

console.log("Redeclared var a: ", a);

// let  bb = 303;

// console.log("Redeclared let bb: ", bb); //NOTE: SyntaxError: Identifier 'bb' has already been declared

// DOCS: Var can be redeclared, let and const can be redeclared


// NOTE: Redefinition
a= 40;
bb = 5050;
// cc = 1000; // NOTE: TypeError: Assignment to constant variable.

// console.log("a,bb,cc", a,bb,cc);




// NOTE: Initialisation
var amp;
let camp;
// const d; // NOTE: SyntaxError: Missing initializer in const declaration