function happy() {
  console.log("I am happy");
}

function sad() {
  console.log("I am sad");
}

let score = 70;
let passMarks = 50; //絶対的な評価基準

if (score > passMarks) {
  happy();
} else {
  sad();
}


// Type Coercian
let sum = '4' + 4; // 44
//文字列を数値演算すると暗黙に（内部で）数値型に変換されるから2
let sum2 = '4' - 2; // 2

let sum3 = undefined + 4; // NaN



// Weakly Typed Language (Javascript)
let name = "Prabh";


// Java
// int num = 4;


// Compile Time Error 
// const a;
// Errors that come during compile time, which means they cannot run until those issues are fixed


// Run Time Error

console.log(userName);

let userName = "Prabh";

// Run time Errors are those which compile succesfully but give errors when we actually run the code.

