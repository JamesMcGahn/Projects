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
    renderTable(results)
}

function renderDropdown(results) {
    console.log(results);
    for (let i = 0; i < results.results.length; i++) {
        companyResult = document.createElement('div');
        companyResult.classList.add('dropDown-item');
        companyResult.innerHTML = `<h6> ${results.results[i].organization_fields.lingo_account_code} ${results.results[i].name}</h6> `
        companyResult.addEventListener('click', () => {
            console.log(results.results[i].id)
            ticketSearch(results.results[i].id);
            searchOptions.classList.add('hidden');
        })
        searchOptions.appendChild(companyResult);
    }
}

function renderTable(results) {
    const tableContainer = document.querySelector('#tableContainer');
    const table = document.createElement('table');
    tableContainer.appendChild(table);
    const tableHeader = document.createElement('tr');
    tableHeader.innerHTML = `
    <th>Ticket #</th>
    <th>Ticket Type</th>
    <th>Ticket Summary</th>
    <th>Status</th>
    `
    table.appendChild(tableHeader);
    ticketData = results.results;
    for (let i = 0; i < ticketData.length; i++) {
        const tableRow = document.createElement('tr')
        let fields = results.results[i].fields;
        let ticketType = fields[fields.findIndex(x => x.id == 360039468853)].value;
        let ticketSummary = fields[fields.findIndex(x => x.id == 360041558474)].value;

        tableRow.innerHTML = `
        <td><a href="${keys.DOMAIN}/agent/tickets/${ticketData[i].id}">${ticketData[i].id}</a></td>
        <td>${ticketType}</td>
        <td>${ticketSummary === null ? results.results[i].raw_subject : ticketSummary}</td>
        <td><span class="${ticketData[i].status}"> ${ticketData[i].status}</span></td>
        `
        table.appendChild(tableRow);
    }

}


const search = document.querySelector('input');
search.addEventListener('input', debounce(companySearch));
const searchDropdown = document.querySelector('#container');
const searchOptions = document.querySelector('#searchOptions');