 const persons =['sai','praveen']
 let x= persons.push('gopi','hyderabad');
// persons.push('raghu');
// persons.push('guru');
// persons.push('ganesh');
console.log(persons);
console.log(x);

//The push() method adds a new element to an array (at the end).
//The push() method returns the new array length.
//===================================================

// let sports = ['soccer', 'baseball']
// let total = sports.push('football', 'swimming')

// console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
// console.log(total)   // 4

//===========================================================
// let vegetables = ['parsnip', 'potato']
// let moreVegs = ['celery', 'beetroot']

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot')
//Array.prototype.push.apply(vegetables, moreVegs)

//console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']

//==============================================================

// let persons =['sai','kumar'];
// let persons1 =['gopi','praveen'];
// Array.prototype.push.apply(persons,persons1)
// console.log(persons);



// let sports = ['soccer', 'baseball'];
//  let total = ['football', 'swimming'];
//  //Array.prototype.push.apply(sports,total);
//  Array.prototype.push.call(sports,total);
//  console.log(sports);
