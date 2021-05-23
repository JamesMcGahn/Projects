const addMovieBtn = document.querySelector('#add-movie-btn');
const searchBtn = document.querySelector('#search-btn');

const movies = [];

const addMovieHandler = () => {
    const title = document.querySelector('#title').value;
    const extraName = document.querySelector('#extra-name').value;
    const extraValue = document.querySelector('#extra-value').value;

    if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') return


    const newMovie = {
        info: {
            title,
            [extraName]: extraValue,

        },
        id: Math.random()
    }

    movies.push(newMovie)
    renderMovies()
    console.log(movies)
}

const renderMovies = (filter = '') => {
    const movieList = document.querySelector('#movie-list')
    movieList.innerHTML = ''
    movies.length > 0 ? movieList.classList.add('visible') : movieList.classList.remove('visible')

    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.toLowerCase().includes(filter.toLowerCase()))

    filteredMovies.forEach(movie => {
        const movieEl = document.createElement('li');
        let text = movie.info.title + ' - ';

        for (const key in movie.info) {
            if (key !== 'title') text += `${key}: ${movie.info[key]}`
        }
        movieEl.textContent = text
        movieList.append(movieEl)
    })
}

const filterMovie = () => {
    const filterTerm = document.querySelector('#filter-title').value
    renderMovies(filterTerm)
}

addMovieBtn.addEventListener('click', addMovieHandler)
searchBtn.addEventListener('click', filterMovie)
