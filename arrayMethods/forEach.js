let numbers = [2, 11, 33, 45, 6, 7, 8, 99];
let text = "";
numbers.forEach(myFunction);

function myFunction(val, index, arr) {
  text += val + ",";
}
console.log(text); // 2, 11, 33, 45, 6, 7, 8, 99,

/*let numbers = [2, 11, 33, 45, 6, 7, 8, 99];
let sum = 0;

numbers.forEach(function addition(element) {
  sum = sum + element;
  console.log(sum); //2,13,46,91,97,104,112,211
});

console.log(sum);*/ // 211
