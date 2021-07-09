/*x = 5; // Assign 5 to x
console.log(x); // 5
var x;*/ // Declare x

//==================================================

/*let x; // Declare x
x = 10; // Assign 10 to x
console.log(x);*/ // 10

//=================================================

/*carName = "valvo";
let carName;
console.log(carName);*/ //ReferenceError: Cannot access 'carName' before initialization

//====================================

/*let carName;
carName = "volvo";
console.log(carName);*/ // this is the way

//=======================================

/*var x = 5; // Initialize x
var y = 7; // Initialize y
console.log(x + " " + y);*/ // 5 7

//=========================================

/*var x = 5; // Initialize x
console.log(x + " " + y); // 5 undefined
var y = 7;*/ // Initialize y

//=======================================

/*var x = 5; // Initialize x
var y; // Declare y
console.log(x + " " + y); // 5 undefined
y = 7;*/ // Assign 7 to y

//========================================

/*var x = 5; // Initialize x
y = 7; // Assign 7 to y
console.log(x + " " + y); // 5 7
var y;*/ // Declare y

//======================================

/*var x = 1;
if (x === 1) {
  var x = 2;
  console.log(x); //2
}
console.log(x);*/ //2

//=====================================

/*function foo() {
  var x = 1;
  function boo() {
    var y = 2;
    console.log(x); //1
    console.log(y); //2
  }
  boo();
  console.log(x); //1
  console.log(y); // ReferenceError: y is not defined
}
foo();*/

//==============================================

function doSomething() {
  console.log(ball); // undefined
  var ball = 177;
  console.log(ball); // 177
}
doSomething();
