/*Write a function that takes an array as a parameter and returns the largest number inside that
array*/
let numList = [ 20, 40, -10, 5, 40, 5, 11]; // 40

function largestNumber(array) {
  let largest = numList[0];
  for(let i = 0; i < numList.length; i++){
    if(largest < numList[i]){ //左が大きくなると場合は、>で左記の場合は、
                              //小さい場合になる
       largest = numList[i];
    }
  }
  return largest;
}
console.log(largestNumber(numList));

// Print the largest number inside the array // 40


/*var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
console.log(largest);*/


/*function minOfArray(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

function maxOfArray(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

const arr = [30, 40, 10, 20];
const min = minOfArray(arr);
const max = maxOfArray(arr);

console.log(min);
console.log(max);*/