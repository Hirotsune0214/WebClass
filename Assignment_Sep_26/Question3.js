/*Write a function to check if there are duplicates in an array ?

// HINT - You have to use 2 for loops nested to solve this problem
Let numList = [ 20, 40, -10, 5, 40, 5, 11]; //
Function duplicatesArray(array) {
// Write your logic here
}‘
duplicatesArray(numList) // True*/

let numList = [ 20, 40, -10, 5, 40, 5, 11]; 

function duplicatesArray(array) {
  let num = array[0]; //20

  //I need change sentences of for
  //return
  for (let i = 0; i <= numList.length; i++) {
    for (let j = 0; j < numList.length; j++) {
      if (num == numList.length) {
        return true
      } else{
        return false
      }
    } //for
  } //for
  return numList
} //function

let trueFalse = duplicatesArray(numList);
console.log(trueFalse);// True*/

//duplicatesArray(numList) // True*/
  

