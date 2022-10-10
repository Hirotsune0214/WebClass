function calculationBMI(height, weight){
  
  let temp;
  temp = height / 100; //1.7
  let bmi
  bmi = weight / (temp * temp);
  return bmi;

} //function

let bmi = calculationBMI(170, 60);
console.log(Math.floor(bmi * 100) / 100); //20.76
