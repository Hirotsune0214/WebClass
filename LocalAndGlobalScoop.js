/*グローバルスコープ(変数) = スクリプト全体で変数を参照できる
　・関数の外側で宣言した変数
　・宣言を省略した変数
　ローカルスコープ(変数) = ある関数の中でのみ変数を参照できる
　・関数の内側で宣言した変数
　・関数の引数


function func(){
  str = "ABC";
  console.log(str);
}
func();
console.log(str);*/

//Global = 任意の変数名の前にはvarを記述
// var test = 'Global';
// console.log(test);

//Loccal = ローカル変数は関数内で宣言した変数
// function local(){
//   var lhensu = 'Local';
//   return lhensu;

// }

// console.log(local());

if (true) {
  var value1 = 10;
  console.log(value1);
}
console.log(value1);

if (true) {
  let value2 = 20;
  //console.log(value2);
}
console.log(value1);