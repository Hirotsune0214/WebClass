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
let myButtonList = document.getElementsByTagName("button");

console.log(myButtonList);

// Third Way
// 指定されたクラス名を持つ要素を検索するメソッド
let myButtonListByClasses = document.getElementsByClassName("btn");

console.log(myButtonListByClasses);



// Fourth Way (Generic Way)
// By Tag Name
 let myButtonByQuery = document.querySelector("#mybutton");
 // IDの時は#。Classの時は.を使用する

//By Class Name
// let myButtonByQuery = document.querySelector(".btn");

// By ID name
//let myButtonByQuery = document.querySelector("#myButton");

console.log(myButtonByQuery, "by Quesry selector");

// What we prefer for accessing elements from the DOM (HTML) - Document Object Model

// 1. document.getElementByID
// 2. querySelector

// EVENTS ****************
// When we talk about events. its more like type of event being fired + the event Handler (What should happen)
// Let's say if we have a button, If someone clicks , it should do something

// Now here remember - What is the event being called - click 
// Event Handler - Here it would be what should happen if click event is fired.

// We can add events in multiple ways **************************************

// 1. By using add event listener

// myButtonQuery, I want to attach an event listener to it

// (アクションを記載、 function(parameter??))
myButtonByQuery.addEventListener("click", function() {
    // console.log("I am called!");

    alert("Hello How are you ??")
})

const myDiv = document.querySelector("#myDiv");

console.log(myDiv, "myDiv");

myDiv.addEventListener("mouseover", function() {
  console.log("I entered the red block");
})


myDiv.addEventListener("mouseout", function() {
  console.log("I left the red block");
})

// let sumButton = document.querySelector("#sum23");

// sumButton.addEventListener("click", function() {
//   let a = 2;
//   let b = 3;
//   console.log(a + b);
// })

// If you want to explore other types of events :)
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp#:~:text=The%20addEventListener()%20method%20allows%20you%20to%20add%20event%20listeners,events%2C%20like%20the%20xmlHttpRequest%20object.


// 2. By directly calling events in the HTML (RECOMMENDED WAY)

// Global Variable
let firstNumber;
let SecondNumber;

function findSum() {
  console.log(firstNumber + SecondNumber, "final sum");
}

function setFirstNumber(event) {

  // We are using paseInt because input box the value as a string, and we have to
  // conver it into a number since we are adding it.
  firstNumber = parseInt(event.target.value);

}

  // We are using paseInt because input box the value as a string, and we have to
  // conver it into a number since we are adding it.
function setSecondNumber(event) {
  SecondNumber = parseInt(event.target.value);
  console.log(event.target.value); // 「.」を使用する
}

/*
Stringをnumberに変更する
let a = "10"
let b = parseInt(a)

もしくは

let c = Number(a)
*/