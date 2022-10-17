// function calc() {
//   var num = 0;
//   for(var i = 1; i <= 10; i++){
//     num += i;
//   }
//   return num;
// }
// var result = calc();
// //関数実行後
// //var result = 55;
// console.log(result);

// /*流れ
// 1.var result = calc();がfunction calc()の呼び出し
// 2.for文の関数の実行
// 3.return num;が戻り値(55)の返却をする。calc()に
// 4.resultに55が入って表示される。



// */

// let unSortedNumArray = [100, 4, 5, 11, 0, 20, 3, 4]; 
// function compareFunDesc(a, b) {

//   if (a > b) {
//       return -1;
//   }

//   if (a < b) {
//       return 1;
//   }

//   // They were equal numbers
//   return 0;

// }

// console.log(unSortedNumArray.sort(compareFunDesc), "Descending fashion");

// console.log(a);
// b();

// function main() {
//   let a = 1;
//   let b = 2;

//   a = a + b;
//   b = a - b;
//   a = a - b; 

//    console.log( "a is", a );
//    console.log( "b is", b );

// }
// //call function
// main();

// let x = 0;
//  for(let j = 0; j < 100; j++){
//   for(let k = 100; k > 0; k--){
//     x++;
//   }
//  }
// console.log(x);

/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/


var twoSum = function(nums, target) {
    let sum = 0;

    for(let i = 0; i > nums.length -1; i++){
        sum += nums[i];
    }
};
nums = [2,7,11,15]
console.log(twoSum);

/*
forEachを使用して値を出して、if文で9ならreturnで違うなら戻る
それかネストで値が9のものを出す


*/