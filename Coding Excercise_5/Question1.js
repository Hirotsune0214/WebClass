// Question 1 Write a function to find the index of the value in the 2D Array


let numList = [[1,2,3], [4,5,6], [7,8,9]];

function findIndex(array, target) {
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            console.log([i][j]);
        } //for
    } //for

    return [0, 1] // Here 0 is the index of outer array, and 1 is the index of inner array
}
// findINdex(numList, 5);

// Example - findINdex(numList, 5) // [1, 1]