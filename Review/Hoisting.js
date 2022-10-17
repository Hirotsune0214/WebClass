
console.log(a); // undefined and not the error

var a = 5;

// Hoisting 
// hoisting is a concept where variables 
// declared from var keyword or functions declared from "function" keyword
// are pushed to the top of the scope
// ホイスティング(Hoisting)とは、コンテキスト内で宣言した変数や関数の定義をコード実行前にメモリに配置することです。
// ホイスティングのことを「宣言の巻き上げ」といったりもします。
// 変数が宣言される前に、その変数をアクセス可能にしたり、利用可能にしたりすることです。
// コード実行前に、変数宣言にコードスキャンします。

console.log(b); // Reference Error


let b = 10;


// What happens behind the scene
// Declaration / Definition
// Assignment / Call
var a;
console.log(a); // undefined 
a = 10;

console.log(c);  // Error Reference (Temporal Dead Zone)
let c = 100;




// Functions
//printNameが呼ばれて関数内が実行されている
function printName() {
    console.log("Prabh");
}

printName(); // Prabh


// The above concept is called as hoisiting, when function or var variables are accessed
// before there are declared

