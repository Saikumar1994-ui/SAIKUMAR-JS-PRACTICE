// By default, the replace() method replaces only the first match:

/*let persons = "kumar, sai, gopi, kumar, praveen, sai, kumar";
let pson = persons.replace("kumar", "rothith");
console.log(pson);*/ //rothith, sai, gopi, kumar, praveen, sai, kumar

// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work.

/*let persons = "kumar, sai, gopi, kumar, praveen, sai, kumar";
let pson = persons.replace("KUMAR", "rothith");
console.log(pson);*/ // kumar, sai, gopi, kumar, praveen, sai, kumar

//To replace case insensitive, use a regular expression with an /i flag (insensitive):

/*let persons = "kumar, sai, gopi, kumar, praveen, sai, kumar";
let pson = persons.replace(/KUMAR/i, "rothith");
console.log(pson);*/ //rothith, sai, gopi, kumar, praveen, sai, kumar
// Note that regular expressions are written without quotes.

// To replace all matches, use a regular expression with a /g flag (global match):

let persons = "kumar, sai, gopi, kumar, praveen, sai, kumar";
let pson = persons.replace(/kumar/g, "rothith");
console.log(pson); //rothith, sai, gopi, rothith, praveen, sai, rothith
