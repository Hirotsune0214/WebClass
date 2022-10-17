/*配列内の値のインデックスを1つずつ取り出す
for-of文は、配列など複数要素をもつiterableオブジェクトに対し、要素をひとつずつ取り出して繰り返し処理を行います。
*/
let numList = [1, 2, 3, 4, 5, 6];

for(let num of numList){
  console.log(num, "value");
}