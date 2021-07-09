/*let str = "Please locate where 'locate' occurs!";
console.log(str.search("locate")); // 7
console.log(str.search("a"));*/ //3

var str =
  "JavaScript is a scripting language. Scripting languages are often interpreted";
console.log(str.search("scripting")); //16

//In this example, we will see that search() method is case-sensitive.

var str1 =
  "JavaScript is a scripting language. Scripting languages are often interpreted";
console.log(str1.search(/Scripting/)); //36

//We can ignore case-sensitive behaviour of search() method by using ignore flag. Let's understand with the help of example:

var str2 =
  "JavaScript is a scripting language. Scripting languages are often interpreted";
console.log(str2.search(/Scripting/i)); // 16

//In this example, we will search a regular expression which is not present in the given string.

var str3 =
  "JavaScript is a scripting language. Scripting languages are often interpreted";
console.log(str3.search(/Javatpoint/)); // -1
