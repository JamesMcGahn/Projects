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
const movies = [];

const updateUI = () => {
    movies.length > 0 ? entryTextSection.style.display = 'none' : entryTextSection.style.display = 'block';
}

const renderMovieElement = () => {
    const { id, title, img, rating } = movies[movies.length - 1];
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
            cancelClickHandler();
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

    if (titleValue.trim() === '' || imgValue.trim() === '' || ratingValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5) {
        alert('Please enter correct values')
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        img: imgValue,
        rating: ratingValue,
    }

    movies.push(newMovie);
    removeMovieModal();
    hideBackdrop();
    clearMovieInputs()
    updateUI()
    renderMovieElement()
}

const cancelClickHandler = () => {
    hideBackdrop();
    removeMovieModal();
    hideDelMovieModal();
}

startMovieButton.addEventListener('click', showMovieModal)
cancelButton.addEventListener('click', cancelClickHandler)
backdrop.addEventListener('click', cancelClickHandler)
confirmAddMovieButton.addEventListener('click', addMovieHandler)
movieList.addEventListener('click', deleteMovieHandler)

