/*let a = 10;
let b = 15;

if(a < b){
  console.log("b is larger than a");
}
else{
  console.log("b is smaller than a");
}*/
// Function使用時
function Compare(num1, num2){
  if(num1 < num2) {
    console.log("num2 is larger than num1");
  } else if (num1 > num2 ){
    console.log("num2 is smaller than num1");
  } else {
    console.log("num2 and num1 are equal");
  }
}

Compare(10, 15);
Compare(15, 10);
Compare(10, 10);