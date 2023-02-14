JS

let header = document.getElementById('header');
/*
    今日やった授業の検索の機能を加える
*/


let nav = document.getElementById('nav');

// let filmsRecommend = document.createElement('h2')  Your friends followed this. Not here??

/* For each films*/
let modifiedArray = [];

const generateUI = (array) => {
    let container = document.getElementById('container');
    array.forEach(({ filmsUrl, filmsSubtitle, followers, filmsExplanation }) => {
        let article = document.createElement('article');
        let section = document.createElement('section');
        let filmsImg = document.createElement('img');
        let filmsSummary = document.createElement('h2'); // filmsSubtitle = Oscars 2017, Harry Potter Marathon 
        let followersData = document.createElement('p'); // followers
        let filmsText = document.createElement('p') // explanation

        filmsImg.src = filmsUrl;

        textContainer.appendChild(filmsSummary); // filmsSubtitle = Oscars 2017, Harry Potter Marathon
        followersData.textContent = `${followers} followers`;
        textContainer.appendChild(filmsText);

        article.appendChild(textContainer); // textContainerは複数あるからappendの方がいいのでは？違いは？


    })
}

const parseList = (array) => {
    return array.map(({ filmsUrl, filmsSubtitle, followers, filmsExplation }) => {
        return {
            /*
            filmsUrl: API's detail || "https://via.placeholder.com/150", // 画像
            filmsSubtitle: API's detail || "No summary found", //　Oscars 2017等
            followers: API's detail || 0,
            */
        }
    })
}

const getFilmsData = async () => {
    const data = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=<<e637cac811429980a9cc6032cf3a3326>>');
    const finalData = await data.json();

    let modifiedArray = parseList(finalData);

    generateUI(modifiedArray);
}

getFilmsData();


/**********************************************************************/

HTML

  <body>
    <div id="header"></div>
    <div id="container">
        <img class="main" src="images/Avengers.jpg" alt="Avengers">
        <p>Best the day</p>
        <p>Super hero movies of 2016</p>
        <p>A super text about a superb playlist. I have to say that tonight I have absolutely no<br>
           inspiration for a lorem so here goes nothing
        </p>
        <p>Your friends followed thisß</p>
    </div>
    <div id="nav">
        <h2>My Movie Mood</h2>

        <h2>Browser</h2>
        <ul>
            <li>Discover</li>
            <li>Tops</li>
            <li>Genre</li>
            <li>Moods</li>
        </ul>

        <h2>My movies</h2>
            <ul>
                <li>Watchlist</li>
                <li>Favorites</li>
            </ul>

        <h2>My playlists</h2>
        <ul>
            <li>Action</li>
            <li>Drama</li>
            <li>Comedy</li>
            <li>Horror</li>
            <li>Sci-fi</li>
        </ul>

        <button onclick="">+ Create playlist</button>
    </div>







 
 /* width:100%; */
/*
.container .f-container {
   flex-direction: row;
}
*/

/*
一つのカゴに
300px　横
500px 縦
その中にフルサイズで画像3つ入れる
 display: grid;
    grid-template-columns: repeat(3, 1fr);
*?