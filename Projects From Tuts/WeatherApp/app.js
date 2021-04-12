const weather = new Weather('Boston', 'MA')

function getWeather() {
    weather.getWeather()
        .then(results => {
            console.log(results)
        })
        .catch(err => console.log(err))
}
document.addEventListener('DOMContentLoaded', getWeather)