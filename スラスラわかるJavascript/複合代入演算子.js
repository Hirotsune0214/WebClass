/*複合代入演算子 : Compound Substitution Calculus 
変数に対して計算と代入を同時に行なう
+=
(例)
a = 1;
a += 2;
aの値の結果は3になる
-=
*=
/=
%= : 除算した余りを代入
(例)
a = 10;
a %= 3;
aは1
++ : 変数に1加算する(インクリメント)
-- : 変数に1減算する(デクリメント)

let a = 10;
a = a + 5;
console.log(a);

let b = 10;
b += 5;
console.log(b);

let a = 10;
a++; //インクリメント
console.log(a);

let x = "100" + 100;
console.log(x); //100100 ""は消えて連結される
*/

let y = 10;
y *= 3; //30
y++; //31
console.log(y);
