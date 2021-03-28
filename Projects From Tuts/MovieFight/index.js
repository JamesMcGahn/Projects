const fetchData = async (searchTerm) => {
    const res = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: keys.API_KEY,
            s: searchTerm,
        }
    })

    return res.data.Search;
};


const input = document.querySelector('input');

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

    for (let movie of movies) {
        const div = document.createElement('div');

        div.innerHTML = `
        <img src="${movie.Poster}" />
        <h1>${movie.Title}</h1>
        `;
        document.querySelector('#target').appendChild(div);
    }
};

input.addEventListener('input', debounce(onInput));