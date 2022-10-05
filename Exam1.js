//Write a recursive function called 'reverse' which accepts a string and returns a new string in reverse.

// reverse("awesome") // "emosewa"
// reverse("rithmschool") // "loohcsmhtir"
//配列名.reverse

/*再帰を使用しないといけない
  1つの文字列は反転出来るが、もう一つを反転させる方法が不明
function reverse(str){
  return str.split("").reverse().join("");
}

//let numList = reverse["awesome", "rithmschool"];
let numList = reverse("awesome"); //emosewaで反対に出来る
console.log(numList);*/

function reverse (str) {
  if (str === "") {
      return "";
  } else {
      return reverse(str.substr(1)) + str.charAt(0);
  }
}
reverse("awesome") // "emosewa"
reverse("rithmschool") // "loohcsmhtir"
let reverseStringIs = reverse("awesome", "rithmschool")
console.log(reverseStringIs)


//prime number : 素数 = 1と自分自身でしか割れない数字 
//「 2、3、5、7、11、13、17、19、23、29、31、37、41、43、47、53、59、61、67、71、73、79、83、89、97」
// function primejudge (num) {
//   let prime_numbers = [];
//   for(let i = 2; i <= 100; n++){
//      if(i === 2){
//      prime_numbers;
//     }
//   }
// };
// countPrimes(100)


//How to swap 2 variables without a temporary variable?
/*
This code is C languag
#include<stdio.h>;
int main()
{
  // intialise two variables
  int x = 25, y = 17;
  // Arithmatic Code to swap 'x' and 'y'
  x = x + y;  // after addition x with contain 42
  y = x - y;  // y will contanis 25
  x = x - y;  // x becomes 17
  
  printf("After Swapping two values: x = %d, y = %d", x, y);
  
  return 0;
}*/
