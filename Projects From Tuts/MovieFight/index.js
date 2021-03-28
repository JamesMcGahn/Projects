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