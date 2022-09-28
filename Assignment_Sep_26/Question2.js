/*
Write a function to check if there are duplicates in a sorted array ?
// HINT - You have to use 2 for loops nested to solve this problem
Let numList = [ 2, 10, 12, 12, 40, 50]; //
Function duplicatesArrayInSorted(array) {
// Write your logic here
}
duplicates = 重複
‘*/

let numList = [2, 10, 12, 12, 40, 50]; //

function duplicatesArrayInSorted(array) {
  let num = array[0]; //2

  //I need change sentences of for
  //return
  for (let i = 0; i <= numList; i++) {
    for (let j = 0; j < numList[i + 1]; j++) {
      if (num === num.length) {
        return ture
      } else{
        return false
      }
    } //for
  } //for
  return num
} //function

let duplicatesNumber = duplicatesArrayInSorted(numList);
console.log(duplicatesNumber);