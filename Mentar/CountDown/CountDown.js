// function countDown() {
// //   for (let num = 10; num >= 0; num--) {
// //     if (num >= 0) {
// //       //console.log(num); //10からundefinedまで表示される。現在は10-0までの表示である
// //       return num; //10と表示
// //     }
// //   }
// // }
// // console.log(countDown(10));

/* カウントダウンが出来る
for(let num = 10; num >= 0; num--){
  console.log(num);
}
*/

let count = 10;
  let countdown = function(){
    console.log(count--);
    let id = setTimeout(countdown, 1000);
    if(count < 0){
      clearTimeout(id);
    }
  }
  countdown();