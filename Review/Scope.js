

// Local Scope (Block) = ページ内の部分的な範囲のみ参照できる。
// ブロックスコープと関数スコープがある

let a = 4;
let b = 5;

if (b > a) { // true
    let success = "Yes b is greater than a"; // the life of this variable is inside the if block only
} else {
    let noSuccess = "Yes a is greater than b";
}

// console.log(success); // ReferenceError: success is not defined



// ********************************

// Function Scope = 関数スコープ


function sum () {
    let myName = 'Prabh'; // Variable here (which means its block scope is function)

    if (4 > 3) {
        var mySurName = "Gambhir"; // Function Scope
        console.log(myName); // This variable is accessible inside if, because the scope of myName variable is function which is the parent of if block
    }

    console.log(mySurName); // Function scope

}

sum(); //sumを呼んで、sumの中を実行する役割

/*Result is
Prabh
Gambhir
*/

function sampleFnc() {
  let test = "関数スコープです！";
  // 関数内なので上記のは表示される
  console.log(test); // => "関数スコープです！"
}
sampleFnc();

// 関数のスコープ外から変数「test」は参照できないためエラー
console.log(test); // => ReferenceError: arg is not defined

/**************************************************** */
// Function with Prameter

function sampleFnc(argument) {
  // 関数のスコープ内から引数「argument」は参照できる
  console.log(argument); // => 1
}
sampleFnc(1);

/*
1.sampleFnc(1)が56行目のsampleFnc(argument)に代入される
2.56行目のargumentには1が入っているので、ブロック内にあるargumentの表示は1になる
*/

// 関数のスコープ外から引数「argument」は参照できないためエラー

/**************************************************** */

//Block scope = 「{}」で囲まれた部分でのみ有効なスコープになります。
// Is this inportant???

{
  //{}内で変数「sample」は参照できる
  let sample = 'This is Block scope';
  console.log(sample);
}

//スコープ外から変数「sample」は参照できない
console.log(sample);



// Global Scope = JavaScriptのどこからでもアクセスできるスコープのことをいいます
let myName = "prabh";

console.log(myName); // This variable is accessible in the global scope because it is not wrapped inside  a block