// function printStars(n) {
//   let item = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i; j++) {
//       "\n"  // "****" + "*" --> "*****"
//     }
//     item += "\n";
//   }
//   console.log(item);
// }
// printStars(5);

let n = 5; 
let string = "";
for (let i = 0; i < n; i++) {
  // printing star
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);