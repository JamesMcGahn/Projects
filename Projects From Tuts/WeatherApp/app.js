const weather = new Weather('Boston', 'MA')
const ui = new UI
function getWeather() {
    weather.getWeather()
        .then(results => {
            console.log(results)
            ui.paint(results)
        })
        .catch(err => console.log(err))
}
document.addEventListener('DOMContentLoaded', getWeather)