/*残りはinput2をどうやって足すようにするか*/

let input1 = [3, 11, 7, 2, 9, 10];
let input2 = [-1, 110, 1, 1, 0];
function sumArray(values){
  let sum = 0;
    for(let i = 0; i < input1.length; i++){
      sum += input1[i];
    } 
}

sumArray(input1);
sumArray(input2);


// let numList = [1,2,3,4,5,6]; // 1 + 2 + 3 + 4 + 5 + 6 → 21
// function sumOfElements(array) {
//   let sum = 0;
//   for(let i = 0; i < numList.length; i++){
//     sum += numList[i]; 
//   }
// return sum;
// }
// sumOfElements(numList); // 21let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);*/