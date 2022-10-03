// Question 1 Write a function to find the index of the value in the 2D Array
// Example - findINdex(numList, 5) // [1, 1]

function findIndex(array, target) {
  //if array doesn't have a number then return [ -1 , -1]
  let result = [ -1 , -1];
    // Rows 行
    for(let i = 0; i < numList.length; i++){
        // column 列
        for(let j = 0; j < numList[i].length; j++){
            // if target is found, return result
            if(array[i][j] == target){
              // Why result[0][1]?? Because of 2D array?/
              result[0] = i;
              result[1] = j;
              return result;
            }  
         // Here 0 is the index of outer array, and 1 is the index of inner array
        } //for
    } //for
    // if target isn't found, return line 6's parameter
    return result;
} //function


let numList = [[1,2,3], [4,5,6], [7,8,9]];
console.log(findIndex(numList, 4));
//findINdex(numList, 5);


