let numbers = [22, 33, 4, 5, 7, 66];
let numbers1 = numbers.map(myFunction);

function myFunction(val) {
  return val + 2;
}
console.log(numbers1);
let numbers2 = numbers.map((x) => x * 3);
console.log(numbers2);
