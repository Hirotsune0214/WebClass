
// //We can remove the duplicate characters from a string by using 
// //the simple for loop, sorting, hashing, and IndexOf() method.
// // 'abcd' -> 'abcd'
// // 'aabbccdd' -> 'abcd'
// // 'abcddbca' -> 'abcd'
// // // 'abababcdcdcd' -> 'abcd'
// /*var str4 ='りんご、みかん、バナナ、りんご';
// var result4 = str4.replace(/りんご/g, '').replace(/みかん/g, '').replace(/、/g, '');
// console.log(result4);*/
// //=> バナナ
// let array =['abcd', 'aabbccdd', 'abcddca', 'abababcdcdcd']
// function removeDupes(str){
//    let result = array.replace('aabbccdd', 'abcd').replace('abcddca', 'abcd').replace('abcddcaabababcdcdcd', 'abcd'); 
// }
// //return result;
// console.log(str);





// // productOfArray([1,2,3]) // 6 
// // productOfArray([1,2,3,10]) // 60

// // let numList = [1,2,3];

// function productOfArray(array){
//    if(array === array.length){
//       return productOfArray(array*array.length)
//    }
// }

// productOfArray([1,2,3]); // 6 
// productOfArray([1,2,3,10]); // 60


/*Write a recursive function 
called 'isPalindrome' which returns true 
if the string passed to it is a palindrome(前からでも後ろからでも読める文字) 
(reads the same forward and backward). Otherwise it returns false.*/
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') //false

function isPalindrome(str){
   var len = str.length;
   var mid = Math.floor(len/2);

   for ( var i = 0; i < mid; i++ ) {
       if (str[i] !== str[len - 1 - i]) {
           return false;
       }
   }
   return true;
}
console.log(isPalindrome('tacocat'));
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') //false