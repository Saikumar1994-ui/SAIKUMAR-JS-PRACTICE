/*let numbers = [22, 33, 44, 55, 66, 77, 88, 99];
let num = numbers.every(myFunction);

function myFunction(total, val) {
  return total > 18;
}

console.log(num);*/ // return true

let numbers = [2, 33, 4, 55, 6, 77, 8, 99];
let num = numbers.every(myFunction);

function myFunction(total, val) {
  return total < 18;
}

console.log(num); // return false
