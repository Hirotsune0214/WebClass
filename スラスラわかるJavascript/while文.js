/*while文
  while (継続条件式){
    繰り返す処理
  }

  継続処理の結果がtrueの間ブロック内の処理を繰り返し、
  falseになると繰り返しを終了する。


aの値が100を超えるまで変数aの値をどんどん倍にしていく

forは初期値が中で定義されているが、while文は外で定義される。
繰り返しの継続条件のみを指定する単純な構文

let a = 1;
while ( a <= 100){
  a *= 2;
  console.log(a);
}
console.log("finish");

0,1,2までループする
let a = 0;
while(a < 3){
  a++;
}
console.log(a);*/