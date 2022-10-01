/*連想配列 : Associative array = はキーと値のセットで1つとして扱われる
　{}で全体を囲むことに注意
let 連想配列名 = { キー1: 値2, キー2: 値2, キー1: 値2, };
 

//(例)
let favorites = {
  food : "Curry",
  color : "Blue",
  number : 7
};

console.log(favorites.food);

let favorites = {
  food : "Curry",
  color : "Blue",
  number : 7
};

console.log(favorites["food"]);
let key = "food";
console.log(favorites[key]);
// 一度目は普通に出力され、22行目で"food"をkeyに代入して出力している

//連想配列へ要素の追加
let favorites = {
  food : "Curry",
  color : "Blue",
  number : 7
};
favorites.sports = "Soccer"; //要素が追加される
console.log(favorites.sports);
console.log(favorites);
出力結果
Soccer
{ food: 'Curry', color: 'Blue', number: 7, sports: 'Soccer' }

let x = 10, y = 20;
x = y;  
y = x; 
console.log(y);

let x = 10;
x += 10;
console.log(x);*/

//50と表示するには
let number = [[10, 20], [30, 40, 50, 60], [70, 80, 90]];
console.log(number[1][2]);

