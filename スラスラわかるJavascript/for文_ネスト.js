for (let i = 0; i < 3; i++){
  for (let j = 0; j < 3; j++){
    console.log('i = ' + i + ', j = ' + j);
  }
}

/*
このサンプルでは外側の for 文で繰り返し処理が一回行われると、
ブロック内に記述された for 文が最初から最後まで実行されます。
これを外側の繰り返し処理が終わるまで繰り返します。
i = 0, j = 0
i = 0, j = 1
i = 0, j = 2
i = 1, j = 0
i = 1, j = 1
i = 1, j = 2
i = 2, j = 0
i = 2, j = 1
i = 2, j = 2  
*/

const result = [
  [88, 78, 82],
  [92, 64, 76]
];

//for (let i = 0; i < 2; i++) 配列と要素数文回してもよい
for (let i = 0; i < result.length; i++){
  for (let j = 0; j < result[i].length; j++){
    console.log('成績 = ' + result[i][j]);
  }
}
/*
成績 = 88
成績 = 78
成績 = 82
成績 = 92
成績 = 64
成績 = 76

iの0周目    	　 jの0周目
i < 2は配列文		 j < 3は要素数

i = 88      　  j = 88
i = 78          j = 78
i = 82          j = 82

iの1周目　　　　jの1周目
i = 92          j = 92
i = 64          j = 64
i = 76          j = 76

result[i][j]
       0  0 = 88が表示される
       0  1 = 78 so on
*/