// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("response", res);
//         return res.json();
//     })
//     .then(data => {
//         console.log(data.ticker.price);
//     })
//     .catch(e => {
//         console.log(e);
//     })

const bitCoin = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        console.log(data);
    }
    catch (e) {
        console.log("there was an error", e)
    }
}