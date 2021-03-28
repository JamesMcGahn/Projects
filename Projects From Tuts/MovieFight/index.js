const fetchData = async (searchTerm) => {
    const res = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: keys.API_KEY,
            s: searchTerm,
        }
    })

    console.log(res.data)
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

const onInput = debounce(event => {
    fetchData(event.target.value);
});

input.addEventListener('input', onInput);