
// Fetch Data from the trending API
// async ()の意味を調べる
// awaitとthenの違いを調べる
// 下記の場合はawaitがあるからthenが必要ない

// modifiedArray = 変更された配列
let modifiedArray = [];

const generateUI = (array) => {

}

const parseList = (array) => {
    // Destructuring
    return array.results.map(({ backdrop_path, popularity }) => {
        return {
            filmUrl: backdrop_path || 'https://via.placeholder.com/150', // ||を使用しているので片方falseでも、もう片方のサイズで表示してくれる
            followers: popularity || 0
        }
    })

}




const getFilmsData = async () => {
    const data = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=e637cac811429980a9cc6032cf3a3326');
    // jsonを入れることで、オブジェクト形式のデータに変換してくれる
    const finalData = await data.json(); // Parse the data to JSON. parseは集合体に変換するもの
    console.log(finalData);
/*

    /* using map insted of simple for loop 
    for (let i = 0; i < finalData.length; i++) {
        console.log(finalData[i]); // access to each index so need [i]
    }
    */

/*
返ってきたのがarrayならfinalData.map()で大丈夫。
返ってきたのがオブジェクトの場合、finalData.result.mapなどのようにしないといけない。
下記はmapで表示出来るかの確認を行なっている
 
modifiedArray = finalData.results.map((film) => {
    return {
        filmUrl: film.backdrop_path || 'https://via.placeholder.com/150', // ||を使用しているので片方falseでも、もう片方のサイズで表示してくれる
        followers: film.popularity || 0
    }
})
console.log(modifiedArray, "value");
*/


generateUI(modifiedArray);
}

getFilmsData();
