/*let numbers = [1, 22, 3, 44, 5, 66, 77, 8, 99];
let num = numbers.some(myFunction);

function myFunction(val) {
  return val < 18;
}
console.log(num);*/ // gives true

/*let numbers = [41, 22, 53, 44, 65, 66, 77, 78, 99];
let num = numbers.some(myFunction);

function myFunction(val) {
  return val < 18;
}
console.log(num);*/ // gives false

const numbers = [41, 22, 53, 44, 65, 66, 77, 78, 99];
const even = (element) => element % 2 === 0;
console.log(numbers.some(even));
