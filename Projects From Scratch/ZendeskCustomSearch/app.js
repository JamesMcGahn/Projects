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
        console.log(res.data.results)
    } catch (err) {
        console.log(err)
    }
}

