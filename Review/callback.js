// Callback Functions
//コールバック関数とは、他の関数に引数として渡される関数のこと

// When a function is passed as a parameter to another function its called
// as funciton callback

/*
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
*/
function printName() {
  console.log("prabh"); 
}
function greet(callback) { 

  callback();
  console.log("Print me after printing prabh");
}

greet(printName);

/*
1.greet(printName)で関数が実行され、26行目のcallbackにprintname(引数)が入る
2.26行目のgreet関数が実行され、引数に渡されたcallback(printgName)を呼び出す
3.pritnName関数が実行されて、console.logが表示される

*/


// call greet with printname as a paramater
// call the parameter which is printName
// console.log(Prabh)

// Multiple parameters as functions

//50-51行目の役割??
function a(funB, funC) {
  funB();
  funC();
}

function b() {
  console.log("I am B");
}

function c() {
  console.log("I am C");
}

a(b, c);