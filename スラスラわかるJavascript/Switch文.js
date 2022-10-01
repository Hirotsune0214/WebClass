/*switch文で表現出来ることはif文でも可能
  逆にif文で表現できることがswitch文でも表現できるとは限らない
  switch文では値の大小やデータ型の比較が出来ない
  条件式による分岐の場合はswitch文で簡潔に記述しても良い

  switch (変数) {
    case 値1:
      変数の中身が値1に一致した場合の処理
    case 値2:
      変数の中身が値2に一致した場合の処理
    case 値2:
      変数の中身が値2に一致した場合の処理
    default:
      どの値にも一致しなかった場合
  }
(例)
let a = 2;

switch (a) {
  case 1:
    console.log("a is 1");
    break;
  case 2:
    console.log("a is 2");
    break;
  case 3:
    console.log("a is 3");
    break;
  default:
    console.log("It doesn't match");
}

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  // Only change code above this line
  return answer;
}

caseInSwitch(1);*/