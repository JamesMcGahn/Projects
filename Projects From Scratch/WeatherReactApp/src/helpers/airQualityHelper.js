class Polluant {
    constructor(name, value, weight, conversion, oneMin, oneMax, twoMin, twoMax, threeMin, threeMax, fourMin, fourMax, fiveMin, fiveMax, sixMin, sixMax) {
        this.name = name
        this.rawValue = value;
        this.value = ((1 / weight) * value) / conversion
        this.totalRange = sixMax - oneMin
        this.currentRangeIndex = null
        this.curentScale = 0
        this.currentText = ''
        this.currentColor = ''
        this.range = {
            good: {
                min: oneMin,
                max: oneMax,
                scale: oneMax - oneMin,
            },
            moderate: {
                min: twoMin,
                max: twoMax,
                scale: twoMax - twoMin
            },
            sensitive: {
                min: threeMin,
                max: threeMax,
                scale: threeMax - threeMin,
            },
            unhealthy: {
                min: fourMin,
                max: fourMax,
                scale: fourMax - fourMin
            },
            very: {
                min: fiveMin,
                max: fiveMax,
                scale: fiveMax - fiveMin
            },
            hazardous: {
                min: sixMin,
                max: sixMax,
                scale: sixMax - sixMin
            },
        }
    }

    establishCurrents() {
        if (this.value > this.range.good.min && this.value <= this.range.good.max) {
            this.curentScale = this.value / this.range.good.scale
            this.currentRange = 'Good'
            this.currentText = 'Air quality is considered satisfactory, and air pollution poses little or no risk.'
            this.currentColor = 'green'
            this.currentRangeIndex = 0
        } else if (this.value >= this.range.moderate.min && this.value <= this.range.moderate.max) {
            this.curentScale = (this.value - this.range.moderate.min) / this.range.moderate.scale
            this.currentRange = 'Moderate'
            this.currentText = 'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people.'
            this.currentColor = 'yellow'
            this.currentRangeIndex = 1
        }
        else if (this.value >= this.range.sensitive.min && this.value <= this.range.sensitive.max) {
            this.curentScale = (this.value - this.range.sensitive.min) / this.range.sensitive.scale
            this.currentRange = 'Unhealthy for Sensitive Groups'
            this.currentText = 'Although general public is not likely to be affected, persons with heart and lung disease, older adults and children are at greater risk from the presence of particles in the air'
            this.currentColor = 'orange'
            this.currentRangeIndex = 2
        }
        else if (this.value >= this.range.unhealthy.min && this.value <= this.range.unhealthy.max) {
            this.curentScale = (this.value - this.range.unhealthy.min) / this.range.unhealthy.scale
            this.currentRange = 'Unhealthy'
            this.currentText = 'Everyone may begin to experience some adverse health effects, and members of the sensitive groups may experience more serious effects.'
            this.currentColor = 'red'
            this.currentRangeIndex = 3
        }
        else if (this.value >= this.range.very.min && this.value <= this.range.very.max) {
            this.curentScale = (this.value - this.range.very.min) / this.range.very.scale
            this.currentRange = 'Very Unhealthy'
            this.currentText = 'This would trigger a health alert signifying that everyone may experience more serious health effects.'
            this.currentColor = 'purple'
            this.currentRangeIndex = 4
        }
        else if (this.value >= this.range.hazardous.min && this.value <= this.range.hazardous.max) {
            this.curentScale = (this.value - this.range.hazardous.min) / this.range.hazardous.scale
            this.currentRange = 'Hazardous'
            this.currentText = 'This would trigger health warnings of emergency conditions. The entire population is more likely to be affected.'
            this.currentColor = 'maroon'
            this.currentRangeIndex = 5
        }
    }



}

class AllPolluants {
    constructor() {
        this.all = []
    }

    addPolluant(name, value, weight, conversion, oneMin, oneMax, twoMin, twoMax, threeMin, threeMax, fourMin, fourMax, fiveMin, fiveMax, sixMin, sixMax) {
        let poll = new Polluant(name, value, weight, conversion, oneMin, oneMax, twoMin, twoMax, threeMin, threeMax, fourMin, fourMax, fiveMin, fiveMax, sixMin, sixMax)
        poll.establishCurrents()
        this.all.push(poll)
    }

    getPollutantsList() {
        return this.all
    }

    highestPollutant() {
        let categories = [[], [], [], [], [], []]
        let highestPollutant
        for (let i = 0; i < this.all.length; i++) {
            categories[this.all[i].currentRangeIndex].push(this.all[i])
        }

        let max = 0
        let category = null
        let poll = null
        for (let i = categories.length - 1; i >= 0; i--) {
            if (categories[i].length === 0) continue
            if (categories[i].length === 1) {
                highestPollutant = categories[i][0]
                break;
            }
            if (categories[i].length > 1) {
                for (let j = 0; j < categories[i].length; j++)
                    if (categories[i][j].curentScale > max) {
                        max = categories[i][j].curentScale
                        category = i
                        poll = j
                    }
                highestPollutant = categories[category][poll]
            }
        }
        return highestPollutant
    }


}

const airQualityHelper = (air) => {
    let all = new AllPolluants()
    let { aqi, pm10, co, o3, so2, no2, pm25 } = air
    all.addPolluant('O3 (Ozone)', o3, 2.00, 1000, 0, 0.054, 0.055, 0.070, 0.071, 0.085, 0.086, 0.105, 0.106, 0.200, 0.201, 0.6)
    all.addPolluant('PM 2.5', pm25, 1, 1, 0, 12, 12.1, 35.4, 35.5, 55.4, 55.5, 150.4, 150.5, 250.4, 250.5, 500.4)
    all.addPolluant('PM 10', pm10, 1, 1, 0, 54, 55, 154, 155, 254, 255, 354, 355, 424, 425, 604)
    all.addPolluant('CO (Carbon Monoxide)', co, 1.145, 1000, 0, 4.4, 4.5, 9.4, 9.5, 12.4, 12.5, 15.4, 15.5, 30.4, 30.5, 50.4)
    all.addPolluant('SO2 (Sulfur Dioxide)', so2, 2.62, 1, 0, 35, 36, 75, 76, 185, 186, 304, 305, 604, 605, 1004)
    all.addPolluant('NO2 (Nitrogen Dioxide)', no2, 1.88, 1, 0, 53, 54, 100, 101, 360, 361, 649, 650, 1249, 1250, 2049)





    let totalAqi = new Polluant("AQI", aqi, 1, 1, 0, 50, 51, 100, 101, 150, 151, 200, 201, 300, 301, 500)
    totalAqi.establishCurrents()

    let listOfAll = all.getPollutantsList()
    let highest = all.highestPollutant()

    return [totalAqi, listOfAll, highest]
}