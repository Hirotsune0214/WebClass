/*関数はよく使うあるいは記述に手間のかかる一連の処理をひとまとめにしたもの
　必要なときに何度も呼び出すことが出来る。
　引数 = parameterという作業に必要な材料を渡す
  関数が先業を終えると戻り値 = returnを返してくれる。

  流れ
   引数(関数へ渡す)→  → 関数(一連の処理)  →
   処理に必要な情報      関数では、受け取った引数を使って処理を行なう

   → 戻り値(スクリプトへ結果を戻す(返す))

   関数の定義 引数・戻り値なし
   function 関数() {
       処理;
   }
   定義した関数の呼び出し 引数・戻り値なし
   関数名();

   (例)
   // 関数の定義
   function sayHello(){
        console.log("こんにちは");
   }
   sayHello(); //関数の呼び出し

   関数を定義しただけでは実行されず、関数を呼び出したタイミングで
   初めて実行される。

   sayHello(); //関数の呼び出し
   function sayHello() {
        console.log("こんにちは");
   }
   これでも呼び出しがされる。

   関数の定義 引数あり
   引数とは、関数に渡す材料。引数は、複数指定可能。
   function 関数名(引数を入れる変数名){
      処理;
   }
   定義した関数の呼び出し 引数あり
   関数名(引数として渡す値);

   関数は引数を受ける変数に代入します。
   変数を宣言しているのがfunction文の()内なのでlet等は必要ではない。

   引数が複数ある場合
  function 関数名(引数1, 引数2・・・){
      処理;
   }

   定義した関数の呼び出し 引数が複数ある場合
   関数名(引数1, 引数2・・・);

   引数のある関数
   function sayHello(name){
      console.log(name + "さん、こんにちは");
   }
   sayHello("Hiro");
   出力結果 : Hiroさん、こんにちは
   "Hiro"の文字列が引数として関数に渡され、nameに代入

   戻り値のある関数の書き方
   1-10までの合計値を求める関数で、算出した合計値を関数の呼び出し元に
   返却が必要。算出した合計値を関数の呼び出し元に返却しないといけない。
   この返却された値を戻り値 = Return valueと呼ぶ。
   戻り値は引数と違い、1つしか指定出来ない

   関数の定義 戻り値あり
   function 関数名() {
      処理;
      return 戻り値;
   }

   ※returnを宣言後以降の処理はされないので、置き場所に注意

   定義した関数の呼び出し 戻り値あり
   戻り値を入れる変数名 = 関数名();

   return文が実行されると、関数の呼び出し元に戻る。
   戻り値として指定した値が返却される。
   戻り値を代入する変数を用意する 

   function calc(){
      let num = 0;
      for( let i = 0; i <= 10 ; i++){
        num += i;
      }
      return num;
  } //function
  let result = calc();
  console.log(result);

  関数実行前
  let result = calc();
  関数実行後
  ket result = 55;

  1.let result = calc();でfunction calc()の呼び出し
  2.関数の実行 let num = 0;からreturn numまで
  3.return numで戻り値の返却をcalcにする

  

  function calcCircle(radius){
   return radius * radius * 3.14; // radius = 半径
  }
  function callFunc() {
   let area = calcCircle(5);
   return area;

  }
  console.log(callFunc());

  78.5

  1.112行目のcallFunc開始で107行目のcallFunc()を呼びに行く
  2.107行目のcalcCircle開始で104行目のcalcCircle(radius)を呼びに行く
  3.105行目の結果が108行目にreturnされcalcCircle終了
  4.109行目に入った値が112行目に入る。callFunc終了
*/

  


