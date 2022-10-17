//Print all the odd numbers from 0 → n , where n will be dynamic inside a function
//奇数だけ出力する問題


function printOddNumbers(n) {
    for(let i = 0; i <= n; i++){
    if(i % 2 === 1){
      console.log(i, " is odd numbers");
    }
  } 
} //function

printOddNumbers(10);
//1 3 5 7 9 are OK