function calc() {
  var num = 0;
  for(var i = 1; i <= 10; i++){
    num += i;
  }
  return num;
}
var result = calc();
//関数実行後
//var result = 55;
console.log(result);

/*流れ
1.var result = calc();がfunction calc()の呼び出し
2.for文の関数の実行
3.return num;が戻り値(55)の返却をする。calc()に
4.resultに55が入って表示される。



*/