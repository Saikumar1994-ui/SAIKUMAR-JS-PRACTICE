function sum(a) {
  return function Mult(b) {
    return function Sub(c) {
      return a + b + c;
    };
  };
}
let res = sum(3)(4)(4);
console.log(res);
