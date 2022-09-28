
let array = [ 1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19 ];

function binarySearch(array, target){
let low = 0;
let high = array.length - 1;

while(high <= low){ 
  let mid = Math.floor( (low + high) / 2);
  if(array[mid] === target){
    return arr[mid];
  } if (target > array[mid]) {
    low = mid + 1;
  } else{
    high = mid - 1;
  }
}
  return -1
}


console.log(binarySearch(array, 15));