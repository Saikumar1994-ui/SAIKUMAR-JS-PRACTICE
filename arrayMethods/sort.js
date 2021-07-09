/*let numbers = [1, 9, 2, 8, 3, 7, 4, 6, 0, 5];
numbers.sort();
//console.log(numbers); // assendong order [0,1,2,3,4,5,6,7,8,9]
numbers.reverse();
//console.log(numbers);*/ // dessending order [9,8,7,6,5,4,3,2,1,0]

// Another way:

let numbers = [1, 9, 2, 8, 3, 7, 4, 6, 0, 5];
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers); // dessending order by using camparasion method

numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers); // assending order by using camparasion method
