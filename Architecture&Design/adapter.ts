type OldWeatherData = {
	temp: number
	loc: string
	rain: boolean
}

type NewWeatherData = {
	temperature: number
	location: string
	rain: boolean
}

class OldWeatherService {
	private mockedData: OldWeatherData = {
		temp: 20,
		loc: 'Germany',
		rain: false,
	}

	async fetch(): Promise<OldWeatherData> {
		return new Promise((res) => {
			setTimeout(() => res(this.mockedData), 1000)
		})
	}
}

interface WeatherClient {
	getCurrentWeather(): Promise<NewWeatherData>
}

class WeatherAdapter implements WeatherClient {
	private oldService: OldWeatherService

	constructor(oldService: OldWeatherService) {
		this.oldService = oldService
	}

	async getCurrentWeather(): Promise<NewWeatherData> {
		const data = await this.oldService.fetch()
		return {
			temperature: data.temp,
			location: data.loc,
			rain: data.rain,
		}
	}
}

// Testing
const oldService = new OldWeatherService()
const weatherClient: WeatherClient = new WeatherAdapter(oldService)

weatherClient.getCurrentWeather().then((weather) => {
	console.log(weather)
	// Output after 1 second:
	// { temperature: 22, condition: 'Sunny with a chance of code' }
})
