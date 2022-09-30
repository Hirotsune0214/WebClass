/*

*
**
***
****
*****
****
***
**
*


item += "\n";

function printStars(n) {
  let item = "";
  for (let i = 0; i <= n ; i++) {
    item = item + "*";  // "****" + "*" --> "*****"
    console.log(item); // **
  }
  for (let i = 0; i <= n ; i++) {
    for (let j = 0; j < n - i; j++) {
      item = item.slice(4);
    }
    item += "\n";
  }
  console.log(item); // **
}
printStars(4);
*/

function printStars(n) {
    let item = "";

    for (let i = 0; i <= n ; i++) {
     for(let j = n; j <= i - n ; j++ ){ //Check
       console.log(item);
     } //for
     
    } //for
}
    printStars(5);