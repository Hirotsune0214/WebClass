/*Write a function which accepts 4 parameters (different scores of a student for subjects), and
then calculate the average of all the score.
If the average is more than 90 , then console grade A
If the average is between 70 and 90 , then console grade B
If the average is between 50-70, then console grade C
Other wise console grade F
For the above question you can use If else block
So you can write
If ( condition ) {
}
Else if ( other condition) {
}
Else if (other condition) {
} else {
}
*/

function average(a, b, c, d){
  let total = (a + b + c + d) / 4;

  if(total >= 90){
    console.log("grade A");
  } else if (total >= 70 && total < 90){
    console.log("grade B");
  } else if( total >= 50 && total < 70){
     console.log("grade C");
  } else {
    console.log("grade F");
  }

} //function

average( 50, 90, 30, 70 );
average( 90, 90, 95, 95 );
average( 10, 5, 15, 70 );