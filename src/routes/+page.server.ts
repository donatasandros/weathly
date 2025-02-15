import { OPEN_WEATHER_API_KEY } from '$env/static/private';

type Weather = {
	city: string;
	country: string;
	dt: number;
	temp: number;
	temp_min: number;
	temp_max: number;
	feels_like: number;
	humidity: number;
	wind: number;
	pressure: number;
	clouds: number;
};

export const load = async (event) => {
	const city = event.url.searchParams.get('city');

	if (city?.trim()) {
		const weatherResponse = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
		);

		const weatherData = await weatherResponse.json();

		if (weatherData.cod === '404') {
			return {
				weather: null
			};
		}

		return {
			weather: {
				city: weatherData.name,
				country: weatherData.sys.country,
				dt: weatherData.dt,
				temp: weatherData.main.temp,
				temp_min: weatherData.main.temp_min,
				temp_max: weatherData.main.temp_max,
				feels_like: weatherData.main.feels_like,
				humidity: weatherData.main.humidity,
				wind: weatherData.wind.speed,
				pressure: weatherData.main.pressure,
				clouds: weatherData.clouds.all
			} as Weather
		};
	}

	return {
		weather: undefined
	};
};
