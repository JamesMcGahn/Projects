const fetchData = async (params) => {
    try {
        const res = await axios.get(`${keys.DOMAIN}/api/v2/search.json`, {
            headers: {
                Authorization: `${keys.API_KEY}`
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
    if (results.results.length === 0) renderTable(results);
    for (let i = 0; i < results.results.length; i++) {
        companyResult = document.createElement('div');
        companyResult.classList.add('dropDown-item');
        let companyName = results.results[i].name;
        companyName = companyName.length > 43 ? `${companyName.substring(0, 43)}...` : companyName;
        companyResult.innerHTML = `<h6> ${results.results[i].organization_fields.lingo_account_code} ${companyName}</h6> `
        searchOptions.classList.remove('hidden');
        companyResult.addEventListener('click', () => {
            console.log(results.results[i].id)
            search.value = results.results[i].name;
            ticketSearch(results.results[i].id);
            clearSearchOptions();
        })
        searchOptions.appendChild(companyResult);
    }
}

function renderTable(results) {
    const clearTable = document.querySelector('#results-table');
    clearTable === !null ? clearTable.remove() : clearTable;
    tableContainer.innerHTML = ``;
    if (results.count > 0) {
        const table = document.createElement('table');
        table.id = 'results-table';
        tableContainer.appendChild(table);
        const tableHeader = document.createElement('tr');
        tableHeader.innerHTML = `
    <th>Ticket #</th>
    <th>Account Code</th>
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
            let ticketAcctCode = fields[fields.findIndex(x => x.id == 360042338954)].value;
            tableRow.innerHTML = `
        <td><a href="${keys.DOMAIN}/agent/tickets/${ticketData[i].id}">${ticketData[i].id}</a></td>
        <td>${ticketAcctCode === null ? ticketAcctCode : ticketAcctCode.toUpperCase()}</td>
        <td>${ticketType === null ? 'Not Entered' : ticketType}</td>
        <td id="td-summary">${ticketSummary === null ? results.results[i].raw_subject : ticketSummary}</td>
        <td><span class="${ticketData[i].status}"> ${ticketData[i].status}</span></td>
        `
            table.appendChild(tableRow);
        }

    } else {
        tableContainer.innerHTML = `
        <div class="no-results">
        <h3> No Search Results Found </h3>
        </div>
        `;
    }

}

const clearSearchOptions = () => {
    searchOptions.classList.add('hidden');
    while (searchOptions.hasChildNodes()) {
        searchOptions.removeChild(searchOptions.firstChild);
    }
}


document.addEventListener('click', event => {
    if (!searchOptions.contains(event.target)) {
        clearSearchOptions();
    }
});



const search = document.querySelector('input');
search.addEventListener('input', debounce(companySearch));
const searchDropdown = document.querySelector('#container');
const searchOptions = document.querySelector('#searchOptions');
const tableContainer = document.querySelector('#tableContainer');