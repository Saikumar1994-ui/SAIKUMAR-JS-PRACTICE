let numbers = [2, 3, 55, 6, 7, 8, 99, 22, 43, 55];
let res = numbers.findIndex(myFunction);
function myFunction(val) {
  return val > 10;
}
console.log(res); // 2

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.findIndex((element) => element > 10);

// console.log(found);
// expected output: 1
