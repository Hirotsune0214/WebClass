let userName = "Prabh";


// Length Method
console.log(userName.length);

            // 0123456789
let college = "Cornerstone";

// Just like arrays you can access indexes in strings as well,
//  each index represent a letter where they are placed
console.log(college[3]); // n

console.log(college[5]); // r


// UPPERCASE METHOD - It changes all the the letters to capital
// console.log(college.toUpperCase());

/*toUpperCaseは小文字の値を大文字に変換して文字列の値を返します。
  toLowerCase()は大文字のアルファベットを小文字に変換する。
*/ 
let upperCaseCollege = college.toUpperCase();
// LOWER CASE METHOD - It changes all the letters to small caps
console.log(upperCaseCollege, "Changed capitals");
console.log(upperCaseCollege.toLowerCase(), "Changed to small again");


// Character At Method
// charAtは指定位置の文字を取得する
console.log(college.charAt(2), "char at");



// One Excercise for today is For Arrays, For Strings, For Objects 
// Learn 2 additional methods that i have not taught 