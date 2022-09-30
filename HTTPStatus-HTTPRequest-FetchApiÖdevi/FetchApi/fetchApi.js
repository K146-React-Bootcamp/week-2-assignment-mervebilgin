// Fetch Api

// JSON dosyadan veri çekmek
fetch("settings.json").then(
    response => response.json()
).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
})


// API uzerinden veri çektik
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach(item => console.log(item))
})