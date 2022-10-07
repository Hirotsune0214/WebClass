//   function countPrimes(num) {

// 	if(flg === 0){
// 		return [];
//   };

//   let prime_numbers = [];

//   for(let i = 2; i <= num; i++){
//     //for(let j = 1; j <= num[i]; j++){ 

//       if (countPrimes(i) == 0) {
//         prime_numbers.push([i]);
//         }
//         return prime_numbers;
//   //} //for
// } //for
// } //function

// console.log(countPrimes(100));


function getPrimeNumber(num){
	let flg = 0;
	for(let i=2; i<=num -1; i++){
		if(num % i === 0){
			flg = i;
			break;
		}
	}
	if(flg === 0){
		return true;
	}
	else{
		return false;
	}
}
 

var prime_numbers = [];
 

for(let i=2; i<=100; i++){
	if(getPrimeNumber(i) === true){
		prime_numbers.push(i);
	}
}
 
console.log(prime_numbers);