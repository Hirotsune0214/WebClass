// fetchメソッド

// ()内に外部のサイトならurlで、ファイルならパス
// 文字列なので''で囲む
// urlからデータを読み込む
fetch('text.json')
// データを受け取って、加工 (整形)
.then(response => {
    // jsonはオブジェクト (連想配列)
    // textはテキスト
    // そのデータをオブジェクトにして、.then(data => {に渡す
    return response.text()
})
.then(data => {
    console.log(data)
    /*
    const a = document.createElement('a')
    p.textContent = date.name // test.jsonのnameの値が入っている
    a.href = data.url // test.jsonのurlをa.hrefに入れる
    document.getElementById('test').appendChild(a)
    */
    
})
//　通信にエラーが発生した場合にcatchにいく
.catch(error => {
    console.log(error)
})

/*
// fetchメソッド

// ()内に外部のサイトならurlで、ファイルならパス
// 文字列なので''で囲む
// urlからデータを読み込む
fetch('test.json')
// データを受け取って、加工 (整形)
.then(response => {
    // jsonはオブジェクト (連想配列)
    // textはテキスト
    // そのデータをオブジェクトにして、.then(data => {に渡す
    return response.json()
})
.then(data => {
    const p = document.createElement('p')
    p.textContent = date.name // test.jsonのnameの値が入っている
    document.getElementById('test').appendChild(p)
})
//　通信にエラーが発生した場合にcatchにいく
.catch(error => {
    console.log(error)
})
*/