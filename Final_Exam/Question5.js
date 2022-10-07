function isPalindrome(str){
  const cahrList = [...str]; 
  let judgement = true; 
  for (let i = 0; i < cahrList.length; i++) {  
      if (cahrList[i] !== cahrList[cahrList.length - 1 - i]) {
          judgement = false; 
      }
  }
  
  return judgement;
}

const ret = isPalindrome('amanaplanacanalpanama'); 
console.log(ret);