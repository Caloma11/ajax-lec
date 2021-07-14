console.log("Hello from src/index.js!");
const key = '4b7b6415';

const button = document.querySelector("#clickBtn");


const movieList = document.querySelector("#movies")

const searchForm = document.querySelector("#searchForm");

const searchInput = document.querySelector("#searchInput");


searchInput.addEventListener("keyup", (event) => {
  event.preventDefault();
  const query = searchInput.value;

  if (query.length === 0) return;

  movieList.innerHTML = "";

  const url = `http://www.omdbapi.com/?apikey=${key}&s=${query}`
  fetch(url)
  .then(response => response.json())
  .then((data) => {

    data.Search.forEach((movieObj) => {
      const movieHTML = `<li>
        <img src="${movieObj.Poster}">
        <span>${movieObj.Title}<span>
      <li>`
      movieList.insertAdjacentHTML('afterbegin', movieHTML)
    })
  })

  // searchInput.value = "";

})


const input = document.querySelector("#searchInput");
input.addEventListener("keyup", (e) => {
  searchAlgoliaPlaces(e);
});

const searchAlgoliaPlaces = (event) => {
  console.log(event)
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: event.currentTarget.value })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data); // Look at local_names.default
    });
};


JSON.stringify({query: "rio"})
