const addMovieModal = document.getElementById('add-modal');
const startMovieButton = document.querySelector('header button');
const backdrop = document.querySelector('#backdrop');
const cancelButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = addMovieModal.querySelector('.btn--success');
const userInputs = addMovieModal.querySelectorAll('input')
const entryTextSection = document.querySelector('#entry-text');
const movieList = document.querySelector('#movie-list')
const deleteMovieModal = document.getElementById('delete-modal');
const delMovieCancelBtn = deleteMovieModal.querySelector('.btn--passive');
const delMovieBtn = deleteMovieModal.querySelector('.btn--danger');
const notification = document.querySelector('.notification');

let movies = [];

const getSavedMovies = function () {
    const moviesJSON = localStorage.getItem('movies');
    try {
        if (moviesJSON !== null) {
            movies = JSON.parse(moviesJSON)
        } else {
            movies = []
        }
    } catch (e) {
        movies = []
    }
}


function renderMovies(movies) {
    movies.forEach(movie => renderMovieElement(movie.id, movie.title, movie.img, movie.rating))
}

const updateUI = () => {
    movies.length > 0 ? entryTextSection.style.display = 'none' : entryTextSection.style.display = 'block';
}

const renderMovieElement = (id, title, img, rating) => {

    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.id = id
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${img}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5</p>
    </div>
    `

    movieList.append(newMovieElement);

}

function displayNote(msg) {
    notification.classList.add('note')
    notification.innerText = msg;

    setTimeout(() => {
        notification.classList.remove('note')
        notification.innerText = ''
    }, 1500)
}


const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    showBackdrop();
}
const removeMovieModal = () => addMovieModal.classList.remove('visible');
const hideBackdrop = () => backdrop.classList.remove('visible');
const showBackdrop = () => backdrop.classList.add('visible');
const hideDelMovieModal = () => {
    deleteMovieModal.classList.remove('visible')
};

const clearMovieInputs = () => {
    userInputs.forEach(input => input.value = '');
}

const deleteMovieHandler = (e) => {
    let id = e.target.closest('li').id
    showBackdrop();
    deleteMovieModal.classList.toggle('visible')
    delMovieBtn.addEventListener('click', deleteMovie)
    delMovieCancelBtn.addEventListener('click', deleteMovie)
    function deleteMovie(e) {
        if (!e.target.classList.contains('btn--passive')) {
            movieDel = movies.findIndex(movie => movie.id === id)
            movies.splice(movieDel, 1)
            movieList.children[movieDel].remove();
            localStorage.setItem('movies', JSON.stringify(movies))
            cancelClickHandler();
            updateUI()
        } else {
            cancelClickHandler();
        }
        delMovieBtn.removeEventListener('click', deleteMovie)
        delMovieCancelBtn.removeEventListener('click', deleteMovie)
    }
}


const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imgValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === '' || imgValue.trim() === '' || ratingValue.trim() === '') {
        displayNote('Please enter a value for each field')
        return
    }
    if (+ratingValue < 1 || +ratingValue > 5) {
        displayNote('Please enter a rating in between 1 & 5')
        return
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        img: imgValue,
        rating: ratingValue,
    }

    movies.push(newMovie);
    const { id, title, img, rating } = newMovie;
    removeMovieModal();
    hideBackdrop();
    clearMovieInputs()
    renderMovieElement(id, title, img, rating)
    localStorage.setItem('movies', JSON.stringify(movies))
    updateUI()
}

const cancelClickHandler = () => {
    hideBackdrop();
    removeMovieModal();
    hideDelMovieModal();
}

const init = function () {
    getSavedMovies();
    renderMovies(movies)
    updateUI()
}

init()
startMovieButton.addEventListener('click', showMovieModal)
cancelButton.addEventListener('click', cancelClickHandler)
backdrop.addEventListener('click', cancelClickHandler)
confirmAddMovieButton.addEventListener('click', addMovieHandler)
movieList.addEventListener('click', deleteMovieHandler)

