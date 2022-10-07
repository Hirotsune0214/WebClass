function sumArray(values){
  let sum = 0;
    for(let i = 0; i < values.length; i++){
      sum += values[i];
    }
    return sum;
}

let input1 = [3, 11, 7, 2, 9, 10]; //42
let input2 = [-1, 110, 1, 1, 0]; //111
//sumArray(input1);
//sumArray(input2);
console.log(sumArray(input1));
console.log(sumArray(input2));