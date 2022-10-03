// Question 2 Write a function that takes a string, and capitalizes every first letter of the word

// let str = "hello world";

// function capitlize(str) {
//     // return's first capitalized
// }

// capitlize(str); // Hello World

// HINT - .split method on a string
// .join method on the array

{
    const capitalizeName = function(name) {
      //空白で分ける
      const names = name.split(' ');
      //下記をする意味??
      const namesUpper = [];
      //namesをnに渡す??
      for(const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        //上の方法か下の方法で最初の文字を大文字にできる
        //n[0]は[H]と[W]をreplaceし、大文字に変換
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
      }
      //連結した文字列を新たに作成して返す。
      console.log(namesUpper.join(' '));
    }
    capitalizeName('hello world');
    }
