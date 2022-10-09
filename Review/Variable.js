// How you can create variables

// Using Let Keyword
let userName = "Prabh";
//再代入ができる変数を宣言できる


// Using Var keyword
var age = 27;


// Using const keyword
const collegeName = "CICCC";
//constは再代入できない変数を宣言するキーワードです。 
//そのため、constキーワードで宣言した変数に対して、
//後から値を代入することはできません。

// const prabh; // Give an error because you have to give const variable a value


const game = "CallOfDuty";

game = "Apex Games";

console.log(game);  // TypeError: Assignment to constant variable.


// Any programming language, needs an environment to execute

// How can we run javascript (2 Ways)


// 1. BROWSER ****************
// Using Browser because it have pre installed compiler called as V8 Engline
// Earlier Javascript used to only work on browsers 

// Other Browsers have other engines 
// Mozilla Firefox uses (SpiderMonkey)
// Google Chrome uses (V8 Engine)
// Edge uses Chakra



// 2. Node.js **************
// Node.js is a runtime environment which make it possible to run javascript anywhere other than browser


// (The developer got inspired from V8 Engine and made Node.js for Any platform)



console.log(userName);
console.log(age);
console.log(collegeName);



// Create multiple variables in 1 line
// 複数行書く際は1行で大丈夫

// Don't have to use multiple let keywords
let a = 4, b = 5, c = 10;