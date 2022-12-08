// console.log("I am inside the script file");

// window.document

// First way Document.getElementById helps you access a html element based on their ID
// 任意のHTMLタグで指定したIDにマッチするドキュメント要素を取得するメソッド
// 引数に指定されたidと一致する要素のElementオブジェクトを返すメソッドです。
// HTMLにはidでmyButtonが存在する
let myButton = document.getElementById("myButton");

console.log(myButton);


// Second Way
// タグ名(TagName)を指定して要素(HTMLCollection)を取得するメソッドです。
// buttonのタグを指定している
let myButtonLis
console.log(myButtonListByClasses);


// Fourth Way (Generic Way)
// By Tag Name
 let myButtonByQuery = document.querySelector("button");

//By Class Name
// let myButtonByQuery = document.querySelector(".btn");

// By ID name
//let myButtonByQuery = document.querySelector("#myButton");

console.log(myButtonByQuery, "by Quesry selector");
t = document.getElementsByTagName("button");

console.log(myButtonList);

// Third Way
// 指定されたクラス名を持つ要素を検索するメソッド
let myButtonListByClasses = document.getElementsByClassName("btn");
