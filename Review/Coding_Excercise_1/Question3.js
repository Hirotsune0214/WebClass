/*Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does
not. 
variable.match('探す文字');
Other option = includesメソッドとは、特定の要素が配列や文字列に含まれているかどうか確認するためのメソッド
*/
let string = "Vancouver";

/* First option 
  if( string.match('b')){
    console.log('True');
  } else {
    console.log('False');
  }
*/

function match(str){
  for(let i = 0; i < str.length; i++){
    if(str[i] == 'b'){
      exists = true;
      break;
    }
      exists = false;
  }

  if(exists === true){
    console.log('true');
  } else {
    console.log('false');
  }
} //function

match("Vancouver");
match("Yaletown");
// console.log(match("Vancouver"));
// console.log(match("Yaletown"));