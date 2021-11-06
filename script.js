const APIURL1 =
  "https://api.themoviedb.org/3/discover/movie?sort_bypopularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const APIURL2 = "https://api.themoviedb.org/3/discover/movie?sort_bypopularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=2";
const APIURL3 = "https://api.themoviedb.org/3/discover/movie?sort_bypopularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=3";
const APIURL4 = "https://api.themoviedb.org/3/discover/movie?sort_bypopularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=4";
const APIURL5 = "https://api.themoviedb.org/3/discover/movie?sort_bypopularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=5";
const APIKEY = "04c35731a5ee918f014970082a0088b1";
const IMGURL = "https://image.tmdb.org/t/p/w500";
const SEARCHAPIURL = "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query="

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.querySelector('main');
async function getMovie() {
  const resp1 = await fetch(APIURL1);
  const resp2 = await fetch(APIURL2);
  const resp3 = await fetch(APIURL3);
  const resp4 = await fetch(APIURL4);
  const resp5 = await fetch(APIURL5);
  const respData1 = await resp1.json();
  const respData2 = await resp2.json();
  const respData3 = await resp3.json();
  const respData4 = await resp4.json();
  const respData5 = await resp5.json();
  respData1.results.forEach((movie) => {
    const singlemovie = document.createElement("div");
    singlemovie.classList.add("movie");
    singlemovie.innerHTML = `
        <img
          src="${IMGURL + movie.poster_path}"
          alt=""
        />
        <div class="movieinfo">
            <h3>${movie.title}</h3>
            <span class ="${getColor(movie.vote_average)}">${movie.vote_average}</span>
        </div>
        <div class="synopsis">
            <h3><u>Synopsis:</u></h3>
            ${movie.overview}
            <h3><u>Release Date:</u></h3>
            <h4>${movie.release_date}
            </div>
        </div>
        `;
        main.appendChild(singlemovie);
  });

  respData2.results.forEach((movie) => {
    const singlemovie = document.createElement("div");
    singlemovie.classList.add("movie");
    singlemovie.innerHTML = `
        <img
          src="${IMGURL + movie.poster_path}"
          alt=""
        />
        <div class="movieinfo">
            <h3>${movie.title}</h3>
            <span class ="${getColor(movie.vote_average)}">${movie.vote_average}</span>
        </div>
        <div class="synopsis">
            <h3><u>Synopsis:</u></h3>
            ${movie.overview}
            <h3><u>Release Date:</u></h3>
            ${movie.release_date}
            </div>
        </div>
        `;
        main.appendChild(singlemovie);
  });

  respData3.results.forEach((movie) => {
    const singlemovie = document.createElement("div");
    singlemovie.classList.add("movie");
    singlemovie.innerHTML = `
        <img
          src="${IMGURL + movie.poster_path}"
          alt=""
        />
        <div class="movieinfo">
            <h3>${movie.title}</h3>
            <span class ="${getColor(movie.vote_average)}">${movie.vote_average}</span>
        </div>
        <div class="synopsis">
            <h3><u>Synopsis:</u></h3>
            ${movie.overview}
            <h3><u>Release Date:</u></h3>
            ${movie.release_date}
            </div>
        </div>
        `;
        main.appendChild(singlemovie);
  });

  respData4.results.forEach((movie) => {
    const singlemovie = document.createElement("div");
    singlemovie.classList.add("movie");
    singlemovie.innerHTML = `
        <img
          src="${IMGURL + movie.poster_path}"
          alt=""
        />
        <div class="movieinfo">
            <h3>${movie.title}</h3>
            <span class ="${getColor(movie.vote_average)}">${movie.vote_average}</span>
        </div>
        <div class="synopsis">
            <h3><u>Synopsis:</u></h3>
            ${movie.overview}
            <h3><u>Release Date:</u></h3>
            ${movie.release_date}
            </div>
        </div>
        `;
        main.appendChild(singlemovie);
  });

  respData5.results.forEach((movie) => {
    const singlemovie = document.createElement("div");
    singlemovie.classList.add("movie");
    singlemovie.innerHTML = `
        <img
          src="${IMGURL + movie.poster_path}"
          alt=""
        />
        <div class="movieinfo">
            <h3>${movie.title}</h3>
            <span class ="${getColor(movie.vote_average)}">${movie.vote_average}</span>
        </div>
        <div class="synopsis">
            <h3><u>Synopsis:</u></h3>
            ${movie.overview}
            <h3><u>Release Date:</u></h3>
            ${movie.release_date}
            </div>
        </div>
        `;
        main.appendChild(singlemovie);
  });
  return respData1, respData2, respData3, respData4, respData5;
}

getMovie();

function getColor(rating){
    if(rating >= 8){
        return 'green';
    }
    else if(rating >= 6){
        return 'orange';
    }
    else{
        return 'red';
    }
}

console.log(getMovie());

async function getSearchedMovie(url) {
    console.log("reached");
    const resp1 = await fetch(url);
    const respData1 = await resp1.json();
    console.log(respData1);
    main.innerHTML = '';
    respData1.results.forEach((movie) => {
      const singlemovie = document.createElement("div");
      singlemovie.classList.add("movie");
      singlemovie.innerHTML = `
          <img
            src="${IMGURL + movie.poster_path}"
            alt=""
          />
          <div class="movieinfo">
              <h3>${movie.title}</h3>
              <span class ="${getColor(movie.vote_average)}">${movie.vote_average}</span>
          </div>
          <div class="synopsis">
            <h3><u>Synopsis:</u></h3>
            ${movie.overview}
            <h3><u>Release Date:</u></h3>
            ${movie.release_date}
            </div>
          `;
          main.appendChild(singlemovie);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    console.log(searchTerm);
    getSearchedMovie(SEARCHAPIURL + searchTerm);
})