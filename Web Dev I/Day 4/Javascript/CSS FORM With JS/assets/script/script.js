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
  newUser.uploadImage = event.target.files[0];
  console.log(event.target.files);
}

function submitForm(event) {
  // console.log("form submitted");

  // So we are skipping the default behavior of a form to send information through the action
  // action which we didn't declare(宣言)!
  // イベントに対するデフォルトの動作をキャンセルする
  event.preventDefault();
  console.log(newUser);

  userList.push(newUser);

  // Fix 1 - By Doing Deep Copy in JS

  // JSON - Javascript Object Notation

  // Object
  // let a = {
  //   x :10
  // }

  // // JSON
  // // let a = {
  // //   'x': 10
  // // }

  // // FIX 1
  // // JSON.stringify
  // // We did Deep copy of newUser
  // // JSON.parse() は、JSON 文字列を取得
  // // JSON.stringify()はJavaScriptのObjectをJSONの文字列に変換することのできる静的メソッド
  // let newUserObject = JSON.parse(JSON.stringify(newUser));
  // userList.push(newUserObject);


  // // FIX 2
  // // let newUserObject2 = {...newUser};
  // userList.push(newUser);
}

function showUserList() {
  console.log(userList, "total users");
}

// Right now the data will be replicated everytime with the last submitted value.
// Because of pass by reference, which means the object the we are saving inside the array is pointing to the same object everytime!
// 今のコードだと数人登録後にshow usersを押下しても最後に登録された情報のみが複数回表示される
// FIX 1を入れたのでデータを別々に保存出来るようになった