const ipLookupKey = 'd7ebff72ce731bb6c05b29d386634078352eceb49a2c0271f133ba13a46da66c'
const weatherApiKey = 'ab15d6963bbd40edbf1142543220803';

import { weatherData } from '../store';

export async function initialize() {
	const regex = "\\b(?:[0-9]{1,3}\\.){3}[0-9]{1,3}\\b",
		ip = (await (await fetch('https://www.cloudflare.com/cdn-cgi/trace')).text()).match(regex)[0],
		cityRes = await (await fetch(`https://api.ipinfodb.com/v3/ip-city/?key=${ipLookupKey}&ip=${ip}&format=json`)).json(),
		city = `${cityRes.cityName}, ${cityRes.regionName}, ${cityRes.countryName}`;

	await getWeather( city );
}

export async function getWeather( cityName ) {
	console.log('Hullo')
	const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${cityName}&days=3&aqi=yes&alerts=yes`,
		weatherRes = (await (await fetch(url)).json());
	weatherData.set(weatherRes)
}