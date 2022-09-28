/*二次元配列 = 2D arrays*/
/*let nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
];

console.log(nums[3][0]);*/

/*for文 多重ループ
外側の for 文で繰り返し処理が一回行われると、ブロック内に記述された 
for 文が最初から最後まで実行されます。これを外側の繰り返し処理が終わるまで繰り返します。
外側が1回ループする毎に内側の処理は3回処理されるため

let nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

for(let i = 0; i < nums.length; i++){
  for(let j = 0; j < nums.length; j++){
      console.log(nums[i][j]);
  }
}

DRY RUN
i     j       nums[i][j]    
0    0        nums[0][0]    1    
0    1        nums[0][1]    2
0    2        nums[0][2]    3
1    0        nums[1][0]    4
1    1        nums[1][1]     5
1    2        nums[1][2]     6
2    0        nums[2][0]     7
2    1        nums[2][1]     8
2    2        nums[2][2]     9
3 

console.log(nums[3][1]);*/


