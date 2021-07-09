let person = {
  name: "saikumar",
  age: 25,
  city: "khammam",
  add: { cty: "hyd", mand: "bcm" },
};

let {
  city,
  add: { cty, mand },
  ...rest
} = person;
//console.log(city, cty, mand);

//console.log(person.add.mand);

//console.log(rest);

function addingElements(a, b) {
  return [a + b, a * b];
}

let [sum, multi] = addingElements(4, 5);
console.log(sum, multi);
