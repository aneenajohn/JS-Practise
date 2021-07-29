// 1) Reverse a string

const str1 = "Hello";
const str2 = "Reverse";

// function reverse(originalString) {
//     let reversedWord ="";
//     for (let i=0;i<originalString.length; i++){
//         // console.log(originalString[originalString.length-(i+1)]);  
//         let letter = originalString[originalString.length-(i+1)] 
//         reversedWord = reversedWord+letter;
//         // reversedWord = reversedWord.concat(letter); // both works
//         console.log({reversedWord}); 
//     }
//     console.log(`Final reveresed word ${reversedWord}`);
// }

// reverse(str1);
// reverse(str2)
// reverse("foo 𝌆 bar mañana mañana");
// reverse("Kutty $%# story");

// METHOD 2

function reverse2 (originalString){
    let reversedWord ="";
    for (let i=originalString.length-1; i>=0; i--){
        let letter = originalString[i];
        reversedWord = reversedWord + letter;
        console.log({reversedWord});
    }
    console.log(`Final reveresed word ${reversedWord}`);
    return reversedWord;
}

// reverse2(str1);
// reverse2(str2)
// reverse2("foo 𝌆 bar mañana mañana");
// reverse2("Kutty $%# story");

console.log(reverse2("foo 𝌆 bar mañana mañana"));
console.log(reverse2("Kutty $%# story"));


console.log("appu".split('').reverse().join(''))

// (TL;DR: 𝌆 is an astral symbol, and JavaScript exposes it as two separate code units.)
// → 'anãnam anañam'
// Wait, so now the tilde is applied to the `a` instead of the `n`? WAT.

let str3 = "How are you doing today?";
const split1 = str3.split(" ");
console.log("After split",split1);
let str4 = "How#are#you#doing#today?";
const split2 = str4.split("#")
console.log("After split",split2);
const split3 = str4.split("#",3);
console.log("After split",split3);

const newArr = ["How", "are", "you", "doing", "today?"];
console.log(newArr.reverse());
console.log("javascript".split("").reverse());

const strCopy = str3.split();
console.log(strCopy);


// Removing spaces from a string


const names = 'Harry Trump 0    ;    Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand '

console.log(names)

const re = /\s*(?:;|$)\s*/
// the pattern looks for zero or more spaces, just before or followed by a semicolon
// removes the spaces and the semicolon from the string

const nameList = names.split(re)

console.log(nameList)

// Array Join method
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
console.log(elements.join(""));
console.log(elements.join(", "));
console.log(elements.join(" + "));

// Reverse using JS methods
console.log("JavaScript".split("").reverse().join(""));


// 2) REPLACE STRING

// const str5 = "Welcome home"
// console.log(str5.replace("home","Anne"));

function strReplace(word,wordToReplace, newWord ){
    return word.replace(wordToReplace,newWord)
}
const str6 = "Welcome home, how it feels to be back home";
console.log(strReplace(str6,"home","AAAA"));
console.log(str6);


function strReplaceAll(word,wordToReplace, newWord ){
    return word.replaceAll(wordToReplace,newWord)
}
console.log(strReplaceAll(str6,"home","AAAA"));

// 3) CAPITALIZE
// 3.1) Capitalize first letter

const str7 = "javaScript";
console.log(`character at 4: ${str7.charAt(4)}`)
console.log(str7[0].toUpperCase());

function capitalizeString(word){
    // let capitalizedWord = word[0].toUpperCase() + word.slice(1);
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1,4);
    return capitalizedWord;
}

console.log(capitalizeString("aneenaJohn"));

// 3.1) Capitalize first letter of each word

const str8 = "How are you doing today?";
const arr= str8.split(" ");
console.log({arr});

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
console.log(arr);

const capitalizedSent = arr.join(" ");
console.log(`capitalized Sentence is ${capitalizedSent}`);
