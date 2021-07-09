/*function sum() {
  // outer function
  let a = 3;
  let b = 5;
  function add() {
    // inner function // it is access the outer function variables
    return a + b;
  }
  return add;
}
let res = sum();
console.log(res());*/ // res calling like a method other wise it will give add function

//=======================================================

/*let a = 5;
function multi() {
  //let a = 4;
  return a * a;
}
let val = multi();
console.log(val);*/

//=====================================

/*function sum() {
  let number = 0;
  function getchange(val) {
    number += val;
  }
  return {
    increment: function () {
      getchange(3);
    },

    decrement: function () {
      getchange(-1);
    },

    value: function () {
      return number;
    },
  };
}

let res = sum();
res.increment();
res.value();
console.log(res.value());
res.decrement();*/

//=====================================

function sum() {
  let number = 0;
  function changeBy(val) {
    number += val;
  }
  return {
    increament: function () {
      changeBy(2);
    },
    decreament: function () {
      changeBy(-1);
    },
    value: function () {
      return number;
    },
  };
}
let res = sum();
res.increament();
console.log(res.value());
res.decreament();
console.log(res.value());
