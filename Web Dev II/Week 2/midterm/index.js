// Fetch Data from the trending API
let modifiedArray = [];
const generateUI = (array) => {
    let container = document.getElementById('container');
    let counter = 0;
    array.length = 9;

   

    array.forEach(({ filmUrl, popularity}) => {
        if (counter === 0) {
            container = document.createElement('div');
            container.id = 'container';
            document.body.appendChild(container);

            container.style.display = 'inline_block';
            container.style.float = 'left';
            container.style.margin = '10px';
            container.style.backgroundColor = '#F2F2F2';
            container.style.border = '3px solid black';
            container.style.textAlign = 'center';
            container.style.width = '20%';
          //  container.style.height = '300px';
           // container.style.flexBasis = '10px'
           container.style.position = 'relative';

        }

        let article = document.createElement('article');
        container.appendChild(article);

        article.style.display = 'flex';
        //ßarticle.style.vertical-align = 'baseline';
        article.style.width = '100%';
        article.style.height = '100%';


        let filmImg = document.createElement('img');

        filmImg.style.width = '100%';
        filmImg.style.height = '100%';
        filmImg.style.display = 'inline-block';


        let followers = document.createElement('p');
        let posterURL = "https://image.tmdb.org/t/p/w500"+filmUrl;

        filmImg.src = posterURL;
        followers.textContent = popularity;
        article.appendChild(filmImg);
        article.appendChild(followers);
 
            
        counter++;
    
        if (counter === 3) {
            counter = 0;
        }

    });
};

const parseList = (array) => {
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
    let modifiedArray = parseList(finalData);
    console.log(modifiedArray);
    generateUI(modifiedArray);
}

getFilmsData();