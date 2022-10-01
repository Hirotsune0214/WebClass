/*配列は変数の集まり
　個々の変数の事を要素 : elementを呼ぶ
　各要素を識別するために、インデックス(必ず0から始まる)が割り振られる。

配列の宣言
let 配列名 = [ 値1, 値2, 値3 ・・・・];
let number = [10, 20, 30];

要素の参照
配列名[インデックス];
let number = [10, 20, 30];
console.log(number[1]); //20が表示される

要素への代入
配列名[インデックス] = 値;

let number = [10, 20, 30];
number[1] = 50;
console.log(number[1]); // 1番目のインデックスが50に上書きされる。

要素の追加
let number = [10, 20, 30];
number[3] = 99; // 3番目に追加される
console.log(number);
[ 10, 20, 30, 99 ]

離れたインデックスの指定
let number = [10, 20, 30];
number[9] = 99; // 9番目に追加される

console.log(number);
[ 10, 20, 30, <6 empty items>, 99 ] //途中の番号は欠番になる

要素数の取得
配列名.length(厳密には最大インデックス+1)を表す。

let number = [10, 20, 30];
console.log(number.length-1); //-1をつけると-1と表示され、こっちが正解


二次元配列 = 2つの配列を要素とした二次元配列。*/

let number = [[ 10, 20, 30] , [40, 50, 60]];
console.log(number[0][2]); //30

