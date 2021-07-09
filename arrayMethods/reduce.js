/*let numbers = [22, 2, 33, 4, 5, 6, 7, 88, 10];
let sum = numbers.reduce(myFunction);

function myFunction(total, val) {
  return total + val;
}

console.log(sum); // 177

let sum1 = numbers.reduce((total, val) => total + val);
console.log(sum1);*/ // 177

let numbers = [22, 2, 33, 4, 5, 6, 7, 88, 10];
let sum = numbers.reduce(myFunction, 100); //also taking initial value

function myFunction(total, val) {
  return total + val;
}

console.log(sum); // 177

let sum1 = numbers.reduce((total, val) => total + val);
console.log(sum1);
