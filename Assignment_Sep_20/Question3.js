/*
        *
      *   *
    *       *
  *  * * * *  *  
*/

let n = 5;
let item = "*"; //change variable

for (let i = 0; i <= n ; i++) {
  for (let j = 0; j < n - i; j++){
    item += " "; //change variable
  }
  for(let k = 0; k <= i*2 - 1; k++){
    item += "*"; //change variable
  } 
  item += "\n";
}
console.log(item);
