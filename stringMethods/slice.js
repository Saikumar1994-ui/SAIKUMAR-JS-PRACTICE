let fruits = "banana, mango, orenge, kiwi";
let frts = fruits.slice(8, 13);
console.log(frts); // mango

let frts1 = fruits.slice(15, 21);
console.log(frts1); // orenge

let person = "javascript";
let pson = person.slice(0);
console.log(pson); //javascript

//This example slices out a portion of a string from position -12 to position -6:

let str = "Apple, Banana, Kiwi";
let str1 = str.slice(-12, -6);
console.log(str1); // Returns Banana
