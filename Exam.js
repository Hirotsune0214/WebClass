
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





// productOfArray([1,2,3]) // 6 
// productOfArray([1,2,3,10]) // 60

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

// function isPalindrome(str){
//    var len = str.length;
//    var mid = Math.floor(len/2);

//    for ( var i = 0; i < mid; i++ ) {
//        if (str[i] !== str[len - 1 - i]) {
//            return false;
//        }
//    }
//    return true;
// }
// console.log(isPalindrome('tacocat'));
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') //false

function isPalindrome(str){
    const cahrList = [...str]; // ここで受け取った文字を1文字ずつ配列化します。
    let judgement = true; // 返却する真偽値の変数を予めtrueで宣言しておきます。
    for (let i = 0; i < cahrList.length; i++) {  // 配列化した文字を1文字ずつチェックしていきます。
        // 左辺は一番左に位置する文字、右辺は一番右に位置する文字です。
        // 左右の文字をfor文のiが大きくなるにつれてどんどん中央に寄っていくイメージです。
        // 一番左の文字 と 一番右の文字が合致しなくなるかをチェックしていきます。
        if (cahrList[i] !== cahrList[cahrList.length - 1 - i]) {
            judgement = false; // 合致しなくなったらその時点で返却する変数の値をfalseにします。
        }
    }
    // 上のチェックを全文字通過し、falseにならなければ最初に宣言したtrueが生きたままなので、trueが返却され回文であることがわかります。
    // チェックに引っかかった場合は変数にfalseが入っているので、回文でないことを返却します。
    return judgement;
}

const ret = isPalindrome('amanaplanacanalpanama'); // amanaplanacanalpanama　とかも入れて確かめてみてください！
console.log(ret);