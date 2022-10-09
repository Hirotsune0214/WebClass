

// How we can make an array

// 1. First way  0         1       2
// let students = ["Akito", "Amir", "Abed"];

// console.log(students[2]); // "Abed"
// console.log(students[11]); // undefined
//配列の作成方法

let rollNumberList = [100, 101, 201, 200];

// console.log(students, "Student's whose name starts with A");
console.log(rollNumberList);


// 2. Second Way (Advance way since it uses a concept called Classes)
let collegeList = new Array("Cornerstone", "VCC", "Langara");

console.log(collegeList);



// ADD VALUE INSIDE ARRAY******************

// A method is a function attached/provided to different types of data structures 
// Two steps
// 1. Write dot(.) on the data you want to see the methods
// 2. Use that method and call the function by using ()

// PUSH METHOD*********************
// 配列名.pushで配列に値の追加が出来る。一番最後に追加される。
// push <-> unshiftで値が追加されるとこが違う

// students.push("Yuki", "Hikaru", "Tatiana");

let students = ["Akito", "Amir", "Abed"];

// The push function returns the length of the array, however
// it also adds value inside the array which we provide inside parameters
// let value = students.push("Yuki");

// students[3] = "Yuki";
// students[4] = "Hikaru";
// students[5] = "Tatiana";

// console.log(value, "with new values"); // 6

// console.log(students.length);


// POP METHOD*********************
// 配列の削除を行なう。popは最後の値を削除
// 配列名.pop();
// pop <-> shiftで削除される場所が違う

// students.pop(); // ["Akito", "Amir"]
// students.pop();// ["Akito"]
// students.pop();// []

// let newVal = students.pop();


// console.log(newVal, "New students array");

// UNSHIFT METHOD*********************
// 配列名.unshiftで配列に値の追加が出来る。一番最初に追加される。
// push <-> unshiftで値が追加されるとこが違う

// students.unshift("Yuki", "Hikaru");

// console.log(students, "New Value");

// SHIFT METHOD*********************
//配列名.shift()で配列の最初の文字を削除する
// pop <-> shiftで削除される場所が違う

// students.shift(); // ["Amir", "Abed"];
// students.shift(); // ["Abed"]

let numbersArray = [1,2,3,4];



// Types of Method for arrays

// Inplace Array methods - Those methods which change the orignal array, for example Splice Method
// Not Inpace Array methods - Those methods which do not change the orignal array, hence you have 
// to asssign the output of that method to a variable, For Example Slice Method


// SPLICE METHOD*********************
// numbersArray.splice(0,2);
// 配列名.splice(挿入番号, 削除する要素数, 挿入する要素)
/*spliceの効果
  要素を取り除く
  置き換える
  追加する
*/

/*削除する場合の記法
splice(変化が開始する位置,削除する要素の数)*/
/*let number = [1, 2, 3, 4, 5];
number.splice(1, 2);
console.log(number);
//[ 1, 4, 5 ]
//arrayの1から2(2と3)が削除される。要素の削除
*/

/*
置き換える場合
//splice(変化が開始する位置,削除する要素の数,追加する要素1,追加する要素2……)
const a=[0,1,2,3];

a.splice(1,2,10,20);
console.log(a);//[0,10,20,3]
*/

/* 追加
const a=[0,1,2,3];

追加するなら削除する値を0にしたら追加になる
a.splice(0,0,-1);
console.log(a);//[-1,0,1,2,3]。unshiftと同じ
*/

/******************************************************** */


// Where first parameter means the starting index where you want add or delete
// Second parameter means how many values you want to delete , i.e count
// Third parameter and onwards are those values which you want add for your given first parameter

// numbersArray.splice(1, 1); // [1,3,4]
// numbersArray.splice(1, 0) // [1,2,3,4];
// numbersArray.splice(1, 0, 5, 6, 7); // [1, 5, 6, 7, 2, 3, 4]

numbersArray.splice(2, 2, 4, 5);

console.log(numbersArray, "new Value");



// SLICE METHOD*********************
/*文字列や配列などからデータの一部分だけ取り出せるメソッド
//配列名.slice(開始位置, 終了位置);
開始位置のインデックスは含むが終了位置の値は含まず、
1つ前のインデックスまでを切り取る
*/
let numberA = [100, 200, 400, 500];
let slicedValue = numberA.slice(0, 2);

console.log(numberA, "Orignal Array");
console.log(slicedValue, "new Array"); //[ 100, 200 ]




// COMPLEX EXAMPLE
// STUDENT RECORD

let studentsRecords = [
    {
        name : "Akito",
        rollNumber: 100
    }, 
    {
        name: "Yuki",
        rollNumber: 101
    },
    {
        name: "Hikaru",
        rollNumber : 102
    }
]


studentsRecords.push({
    name: "Geri",
    rollNumber: 103
})

console.log(studentsRecords, "studentrecords");