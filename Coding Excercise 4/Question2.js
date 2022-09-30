/*
Write a function to check if there are duplicates in a sorted array ?
Let numList = [ 2, 10, 12, 12, 40, 50]; //
Function duplicatesArrayInSorted(array) {
// Write your logic here
}
duplicates = 重複
‘*/



function duplicatesArrayInSorted(array) {
  
  for (let i = 0; i < array.length; i++) {
    //let j = i + 1;
      if (array[i] === array[i + 1]) {
        return false;
      }
  } //for
  return true;
} //function

let numList = [2, 10, 15, 20, 30, 40]; //true
//let numList = [2, 10, 12, 12, 40, 50]; //false
console.log(duplicatesArrayInSorted(numList));