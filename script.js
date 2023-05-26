const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')
const pressure = document.querySelector('.pressure')
const wind = document.querySelector('.wind')

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=c674f7d659690afacbcbc98048f09936'
const API_UNITS = '&units=metric'

const getWeather = () => {
	const city = input.value || 'Rzym'
	const URL = API_LINK + city + API_KEY + API_UNITS

	axios.get(URL).then(res => {
		cityName.textContent = res.data.name
		const temp = res.data.main.temp
        const hum = res.data.main.humidity
        const press = res.data.main.pressure
        const blast = res.data.wind.speed
        const wea = res.data.weather[0].main
        console.log(res.data);

		temperature.textContent = Math.floor(temp) + ' ℃'
		wind.textContent = blast + ' m/s'
		pressure.textContent = press + ' hPa'
		humidity.textContent = hum + ' %'
        weather.textContent = wea
	})
}

getWeather()
