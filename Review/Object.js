// An object is also a type of data structure where we save 
// value in the form of key and value pairs
// Generally we use Objects, when we want to save details about a particular element/items
//オブジェクトは関連のあるデータと機能の集合


// InstructorPrabh

// let prabh = {
//     name : "Prabh",
//     coursesITeach: ["Intro To Computing", "Algorithms", "Web Dev I", "Web Dev II"],
//     age: 27,
//     address : {
//         city : "Vancouver",
//         province: "BC",
//         zipCode : "V5N 4R7"
//     },
//     teach : function() {
//         console.log("Prabh is an awesome teacher")
//     }
// }


// console.log(prabh, "Whole Object");

// How can we access elements/items inside an object

/* Another Example
let Hiro = {
    name : "Hiro",
    age : 27,
    address : {
      city : "Vancouver",
      province : "BC(州)",
    },
    student : function() {
      console.log("Hiro is a student of CICCC");
    }
}

console.log(Hiro);
console.log(Hiro.name); //output is Hiro
console.log(Hiro.address.city); output is Vancouver
Hiro.student(); output is Hiro is a student of CICCC

console.log(Hiro["name"]); //output is Hiro
console.log(Hiro["address"]["province"]) //output is BC(州)
Hiro["student"](); output is Hiro is a student of CICCC
*/ 


// 1. Dot operator

// console.log
// console.error
// console.table
// array.push
// array.pop

// console.log(prabh.name, "My name");
// console.log(prabh.age, "My age");

// console.log(prabh.address.city , "My City");

// prabh.teach();


// 2. [ ] 

// console.log(prabh["name"]);

// console.log(prabh["age"]);

// prabh["teach"]() // Prabh is an awesome teacher

// console.log(prabh["address"]["city"]); // Vancouver


// Complex Arrays
// Students records


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

console.log(studentsRecords, "students");

console.log(studentsRecords[1]["name"]); // Yuki



let prabh = {
  name : "Prabh",
  coursesITeach: ["Intro To Computing", "Algorithms", "Web Dev I", "Web Dev II"],
  age: 27,
  address : {
      city : "Vancouver",
      province: "BC",
      zipCode : "V5N 4R7"
  },
  teach : function() {
      console.log("Prabh is an awesome teacher")
  }
}

// CollegeList is the new property i want to add
prabh.collegeList = ["CICCC", "VCC"];

console.log(prabh);

