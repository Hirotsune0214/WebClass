/*continueは、一回分の繰り返し処理を中断し、次の繰り返し処理へ進む構文
  ある条件のときにだけ処理を行ないたくない場合等に利用

//for文とcontinue文

let tickets = [ "指定席", "自由席", "指定席", "自由席", "自由席" ];
for(let i = 0; i < tickets.length; i++){
  if(tickets[i] == "自由席"){
    //[i]はlet tickets内の値を表示させるために必要
    continue;
  }
  console.log(i + " : " + tickets[i]);
}
console.log("終了");

//continueする値とマッチしたらtrueとなり、次の繰り返しに進む。
  もう一度、for文の比較に遷移する*/ 