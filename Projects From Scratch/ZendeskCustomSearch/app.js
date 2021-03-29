const fetchData = async (params) => {
    try {
        const res = await axios.get(`${keys.DOMAIN}/api/v2/search.json`, {
            headers: {
                Authorization: `${keys.API_KEY}`,
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            params,
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
    const regex = /(^[a-zA-Z]{3}\d{2}$)|(^[a-zA-Z]{5}$)/;
    let results;
    if (regex.test(event.target.value)) {
        const params = new URLSearchParams();
        params.append('query', `lingo_account_code:${event.target.value} type:organization`);
        results = await fetchData(params);
        renderDropdown(results)
    } else if (event.target.value) {
        const params = new URLSearchParams();
        params.append('query', `type:organization "${event.target.value}"`);
        results = await fetchData(params);
        renderDropdown(results)
    }
}


const ticketSearch = async (companyId) => {
    const params = new URLSearchParams();
    params.append('query', `organization:${companyId} type:ticket status<solved`);
    results = await fetchData(params);
    console.log(results)
}

function renderDropdown(results) {
    console.log(results);
    for (let i = 0; i < results.results.length; i++) {
        companyResult = document.createElement('div');
        companyResult.classList.add('dropDown-item');
        companyResult.innerHTML = `<h1> ${results.results[i].organization_fields.lingo_account_code} ${results.results[i].name} `
        companyResult.addEventListener('click', () => {
            console.log(results.results[i].id)
            ticketSearch(results.results[i].id);
        })
        searchDropdown.appendChild(companyResult);
    }
}


const search = document.querySelector('input');
search.addEventListener('input', debounce(companySearch));
const searchDropdown = document.querySelector('#container');