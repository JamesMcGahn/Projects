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
input.addEventListener('input', (event) => {
    fetchData(event.target.value);
})