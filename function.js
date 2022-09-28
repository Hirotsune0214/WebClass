/*function(関数) = 「複数の処理を１つにまとめて名前を付けたもの」

function 関数名(引数) {
  ～～～処理内容を記載～～～
  }


function（関数）の定義
function test(){
  console.log("Hello World");
}
function（関数）の呼び出し
  test();


引数 = 関数にデータ（特定の値）を渡してあげる役割を担っています。
       関数名(引数1,引数2,引数3・・・)と記述すればOKです。

function test(a, b){
  console.log(a + b);
}
  test("I am " , "fine");
  文を繋げるときは「,」を使用する
  */

/*戻り値(return)
function sample() {
  //処理
  return 式
}

//関数の定義⇒戻り値（menseki）
function sankaku(teihen, takasa){
  let menseki = teihen * takasa / 2;
  return menseki;
}

  let sample;
  //関数「sankaku」を実行し戻り値を変数「sample」に代入
  sample = sankaku(10 , 5);
  console.log(sample);*/


