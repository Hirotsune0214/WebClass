/*Write a function to check if there are duplicates in an array ?

// HINT - You have to use 2 for loops nested to solve this problem
Let numList = [ 20, 40, -10, 5, 40, 5, 11]; //
Function duplicatesArray(array) {
// Write your logic here
}   
duplicatesArray(numList) // True*/



function duplicatesArray(array) {
  
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++){
        if (array[i] === array[j]) {
          return true;
        } 
        }
    } //for
    return false;
  } //function
  
  //let numList = [ 20, 40, -10, 5, 35, 100, 11]; //false
  let numList = [ 20, 40, -10, 5, 40, 5, 11]; //true
  console.log(duplicatesArray(numList));
