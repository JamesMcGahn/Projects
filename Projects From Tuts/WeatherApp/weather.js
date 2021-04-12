class Weather {
    constructor(city, state, country) {
        this.apiKey = keys.API_KEY;
        this.city = city;
        this.state = state;
        this.country = 'US';
    }

    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},${this.country}&units=imperial&appid=${this.apiKey}`);
        const responseData = await response.json();

        return responseData
    }
}