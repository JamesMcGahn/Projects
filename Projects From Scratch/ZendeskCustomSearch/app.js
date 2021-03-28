const fetchData = async (searchTerm) => {
    try {
        const res = await axios.get(`${keys.DOMAIN}/api/v2/search.json`, {
            headers: {
                Authorization: `${keys.API_KEY}`
            },
            params: {
                query: `lingo_account_code:${searchTerm}`,

            }
        })
        return res.data;
    } catch (err) {
        console.log(err)
    }
}

const debounce = (fn, delay = 1500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay)
    }
}

const companySearch = async (event) => {
    results = await fetchData(event.target.value);
    console.log(results);
    for (let i = 0; i < results.results.length; i++) {
        companyResult = document.createElement('div');
        companyResult.innerHTML = `<h1> ${results.results[i].organization_fields.lingo_account_code} ${results.results[i].name} `

        searchDropdown.appendChild(companyResult);
    }


}


const search = document.querySelector('input');
search.addEventListener('input', debounce(companySearch));
const searchDropdown = document.querySelector('#container');