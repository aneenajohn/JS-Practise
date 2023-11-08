const patternHtml = document.querySelector(".pattern");

// Q1 Print the below pattern:
// * * *
// * * *
// * * *
let pattern1 = ""
let rowsAndCol = 3;
for (let col = 0; col < rowsAndCol; col++) {
    for (let row = 0; row < rowsAndCol; row++) {
        pattern1 += "* "
    }
    // console.log("\n");
    pattern1 += "\n";
    console.log(pattern1 + "\n");
    patternHtml.innerHTML += pattern1 + "\n"
}
console.log("Q1: ")
console.log(pattern1);

// *
// * *
// * * *
console.log("Q2:")
let pattern2 =""
for (let col = 0; col < rowsAndCol; col++) {
    for (let row = 0; row < col + 1; row++) {
        pattern2 += "* ";
    }
    pattern2 += '\n';
    console.log(pattern2);
}
console.log("Pattern2: ")
console.log(pattern2);