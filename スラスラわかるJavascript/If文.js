/*if文
if (条件式) {
  条件を満たす場合に実行する処理
} else{
  条件を満たさない場合に実行する処理
}

比較演算子
==
!= : 左辺と右辺が等しくない場合はtrue
<
<=
>
>=
=== 左辺と右辺が等しく、かつデータ型も、等しい場合はtrue
!== 左辺と右辺が等しくない、もしくはデータ型が等しくない場合はtrue
(例) 1 !== '1' は　true


let color = "";
if(color == "blue" ){
  console.log("Go");
} else if( color == "yellow"){
  console.log("Better to stop");
} else if ( color == "red" ) {
  console.log("Stop");
} else{
  console.log("Crash");
}


論理演算子

&& 左辺と右辺のどちらもtrueの場合はtrue
|| 左辺と右辺のどちらかがtrueの場合はtrue
!  真偽値を反転させる 審議値を反転させる
(例)
!a
aがfalseの場合はtrue,aがtrueの場合はfalse

let color = "red";
if(color == "blue" || color == "green"){
  console.log("Go");
} else {
  console.log("Stop");
}

let a;

if(!a){
  console.log("aは空です");
}
1.aの中身はundefined
2.undefinedはfalseと同等
3.falseを反転させてtrueに

多方向分岐
if (条件式1) {
  条件式1の条件を満たす場合に実行する処理 
} else if (条件式2) {
  条件式2の条件を満たす場合に実行する処理
} else if (条件式3) {
  条件式3の条件を満たす場合に実行する処理
} else {
  全ての条件式の条件を満たさない場合に実行する処理
}*/

let x = "ABC";
if (x != "ABC"){
  console.log("ok");
} else {
  console.log("ng");
}