// Let's add JS here!

// This is an array which will hold the list users
let userList = [];

// Create user Object
let newUser = {};

function setFirstName(event) {
  newUser.firstName = event.target.value;
}

function setLastName(event) {
  newUser.lastName = event.target.value;
}

function setEmail(event) {
  newUser.email = event.target.value;
}

function setDOB(event) {
  newUser.dob = event.target.value;
}

function setGender(event) {
  newUser.gender = event.target.value;
}

function setPassword(event) {
  newUser.password = event.target.value;
}

function setContact(event) {
  newUser.contact = event.target.value;
}

function setHobbies(event) {
  
}

function uploadImage(event) {
  // Here we are targetting onlu one file at a time
  newUser.uploadImage = event.target.files[0].name;
  console.log(event.target.files);
}

function submitForm(event) {
  // console.log("form submitted");

  // So we are skipping the default behavior of a form to send information through the action
  // action which we didn't declare(宣言)!
  // イベントに対するデフォルトの動作をキャンセルする
  event.preventDefault();
  console.log(newUser);

  // Fix 1 - By Doing Deep Copy in JS

  // JSON - Javascript Object Notation

  // Object
  // let a = {
  //   x :10
  // }

  // JSON
  // let a = {
  //   'x': 10
  // }

  // FIX 1
  // JSON.stringify
  // We did Deep copy of newUser
  // JSON.parse() は、JSON 文字列を取得
  // JSON.stringify()はJavaScriptのObjectをJSONの文字列に変換することのできる静的メソッド
  let newUserObject = JSON.parse(JSON.stringify(newUser));
  userList.push(newUserObject);


  // FIX 2
  // // let newUserObject2 = {...newUser};
  // userList.push(newUserObject);
}

function showUserUI() {
  console.log(userList, "total users");
  //createShowListUserUI();
  createShowListUserUIwithForIn()
}

function createShowListUserUI() {

  // Accessing h1 element from HTML
  let title = document.getElementByd("tableTitle");

  // Then we add inner html (additional html elements inside the h1 tag)
  title.innerHTML = "<p style =' color : red'>THIS is <span style = 'color : white'> user </span> list table</p>";
  
  // Accessing the div with the given ID showUserList
  let showListUserDiv = document.querySelector("#showUserList");

  // We are updating the innerhtml to empty because we want to create html from start and fresh
  // HTML要素の中身を取得したり変更する
  showListUserDiv.innerHTML = "";

  // Creating a div element
  const div = document.createElement("div");

  // Creating a table element
  const table = document.createElement("table");

  // We want to show the list of users in the table, so we have to run a loop on userlist
  for(let i = 0; i < userList.length ; i++){

    // So we will add table row based on the length of user list
    const tr = document.createElement("tr");

    // userlist[i] --> { name: "Prabh", email: "knowprabh@gmail.com" }

    // But since we want to run a loop in the object, we can either use for in loop
    // or we can convert the object to an array

    // Here we are converting it to keys since we want to show that
    const objectKeyArray= Object.keys(userList[i]);  // Object.keys converts an object keys into an array of keys . it means. ['name', 'email', 'password']

    for (let j = 0 ; j < objectKeyArray.length; j++) {
      // document.createElementは、要素を作成する
      // this will hod the data inside td
      const td = document.createElement("td");

      // adding content using text content value or innerhtml its yourchoice
      td.textContent = userList[i][objectKeyArray[j]]; // userList[i]は右記を表示させる { name: "Hiro", email: "hiroyukitsune4@gmail,com"}
      // objectKeyはname,email,password等
      // The above means userList[i] { name: "Hiro", email: "hiroyukitsune4@gmail,com"}
      // objectKeyArray[0] --> name
      // objectKeyArray[1] --> email

      // userList[i].name
      // userList[i].["name"]
      // 上記で名前にダイレクトでアクセスが可能である

      tr.appendChild(td);
  }
  table.appendChild(tr);
  }
      // I am adding a table inside div
    // <div>
         // <table></table>
    // </div>
    // div.appendChild(table);

     /*

    let object = {
     a : 4,
    b :5,
    c: 10

}

// Convert keys into array of keys
let array = Object.keys(object); // ['a', 'b', 'c']

let arrayValues = Object.values(object); // [4,5,10];


    */

  div.appendChild(table);
  showListUserDiv.appendChild(div);
}

function createShowListUserUIwithForIn() {
   // Accessing h1 element from HTML
   let title = document.getElementById("tableTitle");

   // Then we add inner html (additional html elements inside the h1 tag)
   title.innerHTML = "<p style =' color : red'>THIS is <span style = 'color : white'> user </span> list table</p>";
   
   // Accessing the div with the given ID showUserList
   let showListUserDiv = document.querySelector("#showUserList");
 
   // We are updating the innerhtml to empty because we want to create html from start and fresh
   // HTML要素の中身を取得したり変更する
   showListUserDiv.innerHTML = "";
 
   // Creating a div element
   const div = document.createElement("div");
 
   // Creating a table element
   const table = document.createElement("table");
   
   for(let i = 0; i < userList.length ; i++){
    let tr = document.createElement("tr");  

    // This is a loop that can be used to run on objects
    // here item is the key
    // if i want to see the valued of thay key
    // we have to write userList[i][item] === userList[i].name
    for (let item in userList[i]){
        // userList[i] { name: "Hiro", email: "hiroyukitsune4@gmail,com"}
        let td = document.createElement("td");

       // td.textContent = userList[i][item]};
       td.textContent = userList[i][item];

      // { name: "Hiro", email: "hiroyukitsune4@gmail,com"}

      // userList[i].name

      // userList[i][item]


        tr.appendChild(td);
      }

      table.appendChild(tr);
   }

   div.appendChild(table);
   showListUserDiv.append(div);
}

// Right now the data will be replicated everytime with the last submitted value.
// Because of pass by reference, which means the object the we are saving inside the array is pointing to the same object everytime!
// 今のコードだと数人登録後にshow usersを押下しても最後に登録された情報のみが複数回表示される
// FIX 1を入れたのでデータを別々に保存出来るようになった

/* First Way is using Append Child. Recommend
append child

const mainHeading = document.getElementById("main-heading");

const h1heading = document.createElement("h1"); // <h1></h1>. this is not linked to the above variable yet

h1heading.textContent = "Please fill the form here!"; // リンクさせないといけない

So we have to make h1 tag a child of mainHeading

mainHeading.appendChild(h1heading); // So this makes h1 tag a child of main Heading

<script src="assets/script/script.js" defer></script>
// deferと加えると反映される
// defer属性をつけることで、JSの読み取りはasync属性の時と同様にHTML解析と同時に並行して行ってくれます。
// さらにHTMLの読み込みが完了してからJSの実行が始まります。

*/

/* Second Way is using innerHTML

mainHeading.innerHTML = "<h1>Please fill the form here! </h1>"
innerHTML = 、HTML要素の中身を取得したり、変更したりする


*/