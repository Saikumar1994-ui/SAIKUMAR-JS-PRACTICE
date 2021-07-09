// let fruits =['mango','banana','kiwi','orange'];
// console.log(fruits.join(' & '));


// var a = ['mango','banana','kiwi','orange'];
// console.log(a.join());
// console.log(a.join(','));
// console.log(a.join('+'));
// console.log(a.join(''));
// console.log(a.join(' '));


function f(a,b,c){
    var s=Array.prototype.join.call(arguments);
    console.log(s);
}
f(1,'a','d')