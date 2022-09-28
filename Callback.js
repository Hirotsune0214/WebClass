/*Callbackは今ではなく後でする指示
  基本構文
function 関数( 別の関数（callback） ) {
 
    //何らかの処理を記述する
 
    //引数に指定した関数を実行する
    callback();
 
}

function testFunc(callback) {
 
  setTimeout(function() {
    console.log('testFuncが実行されました');
    callback();
  }, 2000)
 
}

function myCallback() {
 
  console.log('myCallbackが実行されました');

}

testFunc(myCallback);


let a = 3;  let b = 2; let c = a; 
a=b=c=1


console.log(a);*/

// Callback Functions

// When a function is passed as a parameter to another function its called
// as funciton callback


function printName() {
  console.log("prabh");
}

// SO here callback is passed as a parameter
function greet(callback) {

  // We are calling that parameter since its a function
  // callback();
  callback();
  console.log("Print me after printing prabh");
}

greet(printName);

// call greet with printname as a paramater
// call the parameter which is printName
// console.log(Prabh)



 /*Multiple parameters as functions
   高階関数 = Higher order function
  

高階関数
function a(funB, funC) {
  funB();
  funC();
}

普通の関数(コールバック関数)
function b() {
  console.log("I am B");
}

普通の関数(コールバック関数)
function c() {
  console.log("I am C");
}

高階関数にコールバック関数を渡して実行
a(b, c);*/