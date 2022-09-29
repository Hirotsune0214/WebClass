/*
Write a function to check if there are duplicates in a sorted array ?
// HINT - You have to use 2 for loops nested to solve this problem
Let numList = [ 2, 10, 12, 12, 40, 50]; //
Function duplicatesArrayInSorted(array) {
// Write your logic here
}
duplicates = 重複
‘*/

let numList = [2, 10, 12, 12, 40, 50];

function duplicatesArrayInSorted(array) {
  
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++){
      if (array[j] == array[j + 1]) {
        return true;
      } else{
        return false;
      }
    } //for
  } //for
  return array;
} //function

console.log(duplicatesArrayInSorted(numList));

/*


*/