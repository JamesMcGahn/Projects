const fetchData = async (searchTerm) => {
    const res = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: keys.API_KEY,
            s: searchTerm,
        }
    })
    if (res.data.Error) {
        return [];
    }
    console.log(res.data.Search)
    return res.data.Search;
};

const root = document.querySelector('.autocomplete');
root.innerHTML = `
    <label><b>Search For a Movie</b></label>
    <input class="input" type="text"/>
    <div class="dropdown">
        <div class="dropdown-menu">
            <div class="dropdown-content results"></div>
        </div>
    </div>
`;

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');

const debounce = (callback, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            callback.apply(null, args);
        }, delay)
    }
};

const onInput = async (event) => {
    const movies = await fetchData(event.target.value);
    dropdown.classList.add('is-active');
    if (!movies.length) {
        dropdown.classList.remove('is-active');
        return;
    }

    resultsWrapper.innerHTML = '';
    for (let movie of movies) {
        const option = document.createElement('a');
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
        option.classList.add('dropdown-item');
        option.innerHTML = `
        <img src="${imgSrc}" />
        ${movie.Title}
        `;
        option.addEventListener('click', () => {
            dropdown.classList.remove('is-active');
            input.value = movie.Title;
            onMovieSelect(movie);
        })
        resultsWrapper.appendChild(option);
    }
};

input.addEventListener('input', debounce(onInput));

document.addEventListener('click', event => {
    if (!root.contains(event.target)) {
        dropdown.classList.remove('is-active');
    }
});

const onMovieSelect = async movie => {
    const res = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: keys.API_KEY,
            i: movie.imdbID,
        }

    })
    const summary = document.querySelector('#summary');
    summary.innerHTML = movieTemplate(res.data);

}

const movieTemplate = (movieDetail) => {
    return `
    <article class="media">
    <figure class="media-left">
      <p class="image">
        <img src="${movieDetail.Poster}" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h1>${movieDetail.Title}</h1>
        <h4>${movieDetail.Genre}</h4>
        <p>${movieDetail.Plot}</p>
      </div>
    </div>
    <article  class="notification is-primary">
    <p class="title">${movieDetail.Awards}</p>
    <p class="subtitle">Awards</p>
  </article>
  <article  class="notification is-primary">
    <p class="title">${movieDetail.BoxOffice}</p>
    <p class="subtitle">Box Office</p>
  </article>
  <article  class="notification is-primary">
    <p class="title">${movieDetail.Metascore}</p>
    <p class="subtitle">Metascore</p>
  </article>
  <article  class="notification is-primary">
    <p class="title">${movieDetail.imdbRating}</p>
    <p class="subtitle">IMDB Rating</p>
  </article>
  <article  class="notification is-primary">
    <p class="title">${movieDetail.imdbVotes}</p>
    <p class="subtitle">IMDB Votes</p>
  </article
    `;
}