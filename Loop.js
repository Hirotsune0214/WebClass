/*forとwhileの違い
for文	指定した回数だけ繰り返す。
while文	条件を満たす限り繰り返す。ある結果に辿り着くまで繰り返す。
*/ 
/*while文

必要な変数の宣言や初期化などは while 文の外で行う

while(継続条件(条件式)){
  繰り返す処理
  (実行する文1)
  (実行する文2)
}

let a = 1;

while (a <= 100){
  a *= 2;
  console.log(a);
}
  console.log("Finish");

  a *= 2;
  console.log(a);
  128まで表示される

  console.log(a);
  a *= 2;
  64までしか表示されない
  
  掛けてから表示するか掛ける前に表示するかによって結果が異なる

let i = 0;

while(i <= 5){
  i++;
  console.log(i);
}
console.log(i);をブロック内外どちらに記入するかでも結果が変わるので注意が必要
*/

/*for文
初期値：繰り返す回数の初期値
条件式：繰り返しを継続する条件
増減値：「初期値」を増減する式
for (  初期値;  条件式;  増減値  ) {
 
  // 繰り返す処理を書く
 
}

稼働順
1. let count = 0
2. count <= 5 比較する
3. console.log(count)
4. count++して1.に戻る


for(let count = 0; count <= 5; count++){
  console.log(count);


let fruitsArray = ["Apples", "Mangoes", "Oranges", "Pineapple"];

for( let i = 0; i <= fruitsArray.length - 1 ; i++ ){
  console.log(fruitsArray[i]);
}

-1がないとlengthとarrayの長さが異なるのでundefinedも表示されてしまうため必要である}*/