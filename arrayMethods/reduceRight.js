let numbers = [22, 11, 33, 44, 55, 66, 77, 88, 99];
let sum = numbers.reduceRight(myFunction, 100); // accept initial value

function myFunction(total, val) {
  return total + val;
}

console.log(sum); //495 & 595
