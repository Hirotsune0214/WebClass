/*const score = 70
if ( score >= 90 ) {
  console.log("Grade A");
} else if (score >= 70 && score < 90) {
  console.log("Grade B");
} else if (score >= 50 && score < 70) {
  console.log("Grade C");
} else {
  console.log("Grade F");
}*/

//4つの科目の合計の平均を出して計算する

function student(score1, score2, score3, score4){
  let averageScore = (score1 + score2 + score3 + score4) / 4
  
  if ( averageScore >= 90 ) {
    console.log("Grade A");
  } else if (averageScore >= 70 && averageScore < 90) {
    console.log("Grade B");
  } else if (averageScore >= 50 && averageScore < 70) {
    console.log("Grade C");
  } else {
    console.log("Grade F");
  }
  
  }
  student(90, 80, 95, 89);
  student(90, 100, 95, 89);
  student(10, 50, 30, 40);