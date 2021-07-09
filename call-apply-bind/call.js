// let person = {
//   name: "sai",
//   age: 34,
// };
// let person1 = {
//   name: "kumar",
//   age: 25,
// };
// let person2 = {
//   name: "praveen",
//   age: 20,
// };
// function getDetails(message, data) {
//   return this.name + " " + this.age + " " + message + " " + data;
// }

// console.log(getDetails.call(person, "hello", "hi"));
// console.log(getDetails.apply(person, ["hello", "hi"]));
// console.log(getDetails.call(person1, "hello", "hi"));

//======================================================================

let fruits = {
  name: "mango",
  color: "yellow",
  getName: function (a, b) {
    return this.name + " " + this.color + " " + a + " " + b;
  },
};

let animals = {
  name: "banana",
  color: "green",
};

let persons = {
  name: "sai",
  color: "black",
};

let ball = fruits.getName.call(persons, "hyd", "sec");
//console.log(ball);

let ball1 = fruits.getName.apply(persons, ["hyd", "sec"]);
//console.log(ball1);

//console.log(ball, ball1);

let ball2 = fruits.getName.bind(persons);
console.log(ball2("abc", "def"));
console.log(ball2("bet", "def"));
