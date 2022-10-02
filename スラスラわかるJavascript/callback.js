/*callback関数は後でして欲しい指示
  コールバック関数とは、ある関数を呼び出す時に、
  引数に指定する別の関数のことです
  関数の中で関数を利用する

高階関数 = A関数をB関数の引数に渡すことが出来る


// A関数(コールバックとして実行される関数)
function hello(){
    // 実行されたら"hello"と出力する
    console.log("hello");
}

// B関数 (コールバックを実行する関数)
function execute(callback){
  // コールバックの実行
  callback();
}

// hello関数を引数にして、execute関数を実行する
execute(hello);

22行目で「execute」関数を実行。その際に引数として「hello」関数を渡す
16行目の「execute」関数が呼ばれて、引数の「callback」変数には「hello」関数が入る
18行目で「callback」変数の内容は「hello」関数であるため、「callback()」のように「()」（カッコ）をつけて関数を実行する
10行目のhello関数が呼ばれる
12行目のconsole.log関数で “hello” という文字列を出力する

function printName() {
  console.log("prabh");
}

// SO here callback is passed as a parameter
function greet(callback) {

  // We are calling that parameter since its a function
  // callback();
  callback();
  console.log("Print me after printing prabh");
}

greet(printName);

1.greet(printName);が呼ばれる
2.greetがある35行目が呼ばれる。
　greet(callback)→greet(printName)になる。
3.38行目のcallbackの変数はprintNameで、関数が実行される。
4.30行目のprintName()が呼ばれる。
5.31行目のconsole.logが呼ばれる


// 高階関数
function main(fn){
    fn("コールバックに渡す引数だよ"); 
}

//コールバック関数
function sub(arg){
    alert(arg);
}

//高階関数に関数を渡して実行
main(sub);
*/

//高階関数
function a(funB, funC) {
  funB();
  funC();
}

//コールバック関数
function b() {
  console.log("I am B");
}
//コールバック関数
function c() {
  console.log("I am C");
}

a(b, c);
//高階関数の関数を記載aして()内にはcallbackに使用する関数(b, c)を記入
