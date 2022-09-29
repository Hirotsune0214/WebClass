/*Write a function to check if there are duplicates in an array ?

// HINT - You have to use 2 for loops nested to solve this problem
Let numList = [ 20, 40, -10, 5, 40, 5, 11]; //
Function duplicatesArray(array) {
// Write your logic here
}   
duplicatesArray(numList) // True*/

let numList = [ 20, 40, -10, 5, 40, 5, 11]; 

function duplicatesArray(array) {
  
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++){
        if (array[j] == array[j + 1]) {
          return true
        } else{
          return false
        }
      } //for
    } //for
    return array
  } //function
  
  console.log(duplicatesArray(numList));
