/*let word = "Yaletown";
let str = "Vancouver";

if(
  word.includes("Y")){
  console.log("True");
}else{
  console.log("False");
}

if(str.includes("Y")){
  console.log("True");
}else{
  console.log("False");
}*/

function printYes(str){
  for(let i = 0; i < str.length; i++){
    if(str[i] == "y"){
      exists = true;
      break;
    }else{
      exists = false;
    }
  }

  if(exists == true){
    console.log("Yes");
  } else{
    console.log("No");
  }

} //function
printYes("crazy");

/* function printYes(str) {

     let exists = false; // This flag value tells us if y exists or not

     for (let i = 0; i < str.length; i++) {
         if (str[i] == 'y') {
             exists = true;
             break;
         } 
        else {
            exists = false;
        }
     }

     if (exists == true) {
         console.log('Yes');
     } else {
         console.log('No');
     }
 }
 printYes("crazy");
 printYes("Japan");
*/
