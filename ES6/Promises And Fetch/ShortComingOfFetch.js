url = "https://jsonplaceholder.typicode112.com/posts123456/";

fetch(url)
    .then(response => response.json())
    .catch(error=> console.log('Bad',error));