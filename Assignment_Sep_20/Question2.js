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
      item = item + "*";
      console.log(item);
    }
     for(let j = n; j > 0 ; j-- ){ //Check
       item = item.slice(1);
       console.log(item);
     }
}
    printStars(4);