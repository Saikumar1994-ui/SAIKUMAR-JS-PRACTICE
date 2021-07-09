let numbers = [1, 3, 5, 7, 9, 0];
//let [a, b] = numbers; // array distruction
//console.log(a, b);

//let [d, c, ...rest] = numbers;
//console.log(d, c, rest); // usuing rest operator

let [...sai] = numbers;
//console.log(sai);

let persons = { name: "sai", type: "kumar" };
let { name, type } = persons;

//console.log(name);

let numbers1 = [1, 3, 5, 7, 9, 2, 4, 6];
let num = numbers1;
num.push("sai");
//console.log(numbers1);
//console.log(num);

let newnum = [...numbers1];
newnum.push("gopi");
console.log(numbers1);
console.log(newnum);
