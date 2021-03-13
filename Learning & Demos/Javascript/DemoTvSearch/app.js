const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchInput = form.elements.query.value;
    const config = { params: { q: searchInput } };
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=`, config)
    displayShows(res.data);
    form.elements.query.value = '';

})

const displayShows = (shows) => {

    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}