//Print all the odd numbers from 0 → n , where n will be dynamic inside a function

/*function printEvenNumber(num) {
  for (let i = 1; i <= num; i++ ) {
      if (i % 2 == 0) {
          console.log(i, " is an even number");
      }
  }
}

printEvenNumber(100);*/

function printOddNumbers(n) {
  for(let i = 1; i <= n; i++ ){
     if(i % 2 == 1){ // Check == and === diffrence 
        console.log(i, " is an add number");
    }
   }
  } //function
  printOddNumbers(30);