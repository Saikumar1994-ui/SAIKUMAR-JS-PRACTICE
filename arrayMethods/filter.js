let numbers = [22, 43, 56, 5, 7, 9, 11, 44, 65, 78, 2];
let over18 = numbers.filter(myFunction);

function myFunction(val) {
  return val > 18;
}
console.log(over18); // [ 22, 43, 56, 44, 65, 78 ]
