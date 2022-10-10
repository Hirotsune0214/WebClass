/*
Using a for loop print all even(奇数) numbers up to and including n. Don’t include 0.
forで10まで回して、奇数だけ抜き取るのでif文を使用する
*/

n = 10;
for(let i = 1; i <= n; i++){
    if(i % 2 == 1){
      console.log(i);
    }
}
