/*グローバルスコープ : スクリプト全体で変数を参照出来る
  ・関数の外側で宣言した変数。宣言を省略した変数
　・宣言を省略した変数
　ローカルスコープ : ある関数の中でのみ変数を参照できる
  ・関数の内側で宣言した変数
  ・関数の引数

// グローバルスコープ
function func() {
  str = "ABC";
  console.log(str);
}
func();
console.log(str);

//ローカルスコープ
function func() {
  let str = "ABC";
  console.log(str);
}
func();
console.log(str);
上記のローカルスコープだとエラーが表示される。
関数の内側で、変数宣言を行なっているからその変数は関数内でのみ有効なローカル変数
となる。そのため、関数の外側から変数strの値を出力しようとしても
変数が見つからない結果になる

let str = "グローバル";
function func1(){
  let str = "func1";
  console.log(str);
}
function func2(){
  let str = "func2";
  console.log(str);
}
func1();
func2();
console.log(str);

28行目から39行目がグローバルスコープ
29行目から32行目がローカルスコープ
33行目から36行目がローカルスコープなので結果が違う*/

let global = 0;
function func(){
  global++;
}
for(let i = 0; i < 10; i++){
  func();
}
console.log(global);

// globalはグローバルスコープ内で値が保持され続ける
//50行目のfunc();が46-48行目を10回呼び続ける