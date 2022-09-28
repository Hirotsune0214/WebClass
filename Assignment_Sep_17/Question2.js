//let n = 1; That does not need

/*for(n = 1; n <= 30; n++){
  
if(
  n % 2 == 0 ){
  console.log(n);
  
}

}*/

//下記の場合だと、0も含まれるが+=を使用するのもあり。
for(n = 0; n <= 30; n += 2){
  console.log(n);
}