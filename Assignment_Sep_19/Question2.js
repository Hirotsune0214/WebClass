/*Write a function that takes an array as a parameter and calculates the sum of the numbers
inside the array*/
let numList = [1,2,3,4,5,6]; // 1 + 2 + 3 + 4 + 5 + 6 → 21
function sumOfElements(array) {
  let sum = 0;
  for(let i = 0; i < numList.length; i++){
    sum += numList[i]; 
  }
return sum;
}
sumOfElements(numList); // 21

/*const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);*/