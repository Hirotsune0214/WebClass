//let numList = [1,2,3,4,5,6]; // True
let numList = [ 50, 10, 4, 4 , 2, 3] // False*/

function sortedList(array) {

  let max = array[0]; //1
  for(let i = 0; i < array.length; i++){
    if(max <= numList[i + 1]){
      return true
  } else {
      return false
  }   
} //for
  return max
} //function
let sortedArray = sortedList(numList);
console.log(sortedArray);

//sortedList(numList) // true