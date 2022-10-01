// Question 1 Write a function to find the index of the value in the 2D Array


function findIndex(array, target) {

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length-1; j++){
            return [array[i][j]] = array[i][j + 1];  // Here 0 is the index of outer array, and 1 is the index of inner array
        } //for
    } //for
    return  [0, 1];
} //function

// findINdex(numList, 5);
let numList = [[1,2,3], [4,5,6], [7,8,9]];
console.log(findIndex(array, 5));

// Example - findINdex(numList, 5) // [1, 1]

/*function find2d(matrix, item) {
    let ix = 0, col = -1;
    while (ix < matrix.length && (col = matrix[ix].indexOf(item)) === -1) ix++;
    return ix === matrix.length ? undefined : [ix, col];
}
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


*/