// 変数を宣言するもの。testが変数
// 書き換えが可能
let test = "Hello Wolrd";

//test = "Hello World2"

//定数 = ある一定の値を維持したもの
//書き換えが出来ない
const NewTest = "He..Hello World";

//配列
const inoki = ["いーち", "にーい", "さーん", "ダー"];

//ループ文
// let index = 0;
// while(index < inoki.length){
//   //繰り返したい命令
//   console.log(inoki[index]);
//   //下記がないと永遠とループされる
//   index++;

// }
//console.log(inoki[2]);

//if / else
// if(inoki.length > 5){
//   console.log("ボンバイエ");
// } else {
//   console.log("ボンバ");
// }

//関数
//・同じ命令を何度も使いたい時
//・任意のタイミングで命令を実行させたい時
// const pro = function() 左記の書き方もある
// const pro = () => {
//   //ここに実行した命令を書く
//   if(inoki.length > 5){
//     console.log("ボンバイエ");
//   } else {
//     console.log("ボンバ");
//   }
// };

// pro();

//同じ命令を一部だけ変えて使いまわしたい時に引数が有効
// const pro = (arg) => {
//   //ここに実行した命令を書く
//   if(inoki.length > arg){
//     console.log("ボンバイエ");
//   } else {
//     console.log("ボンバ");
//   }
// };

// pro(3);
// pro(5);

//オブジェクト = 複数の値を持てる。データの塊
const test2 = {
  color : "pink",
  size : "large",
  perfume : "mint",
  //関数も入れることが出来る
  hello : () => {
      console.log("Hello world");
  }
};

console.log(test2.hello());