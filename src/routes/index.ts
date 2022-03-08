// const ipLookupKey = 'd7ebff72ce731bb6c05b29d386634078352eceb49a2c0271f133ba13a46da66c'
// const weatherApiKey = 'ab15d6963bbd40edbf1142543220803';

import { weatherData } from '../store';
import { data } from '../data';

export async function initialize(){
	// const regex = "\\b(?:[0-9]{1,3}\\.){3}[0-9]{1,3}\\b";

	// const ip = (await (await fetch('https://www.cloudflare.com/cdn-cgi/trace')).text()).match(regex)[0];
	// const cityRes = await (await fetch(`https://api.ipinfodb.com/v3/ip-city/?key=${ipLookupKey}&ip=${ip}&format=json`)).json();
	// const city = `${cityRes.cityName}, ${cityRes.regionName}, ${cityRes.countryName}`;

	// const weatherRes = await(await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${city}&key=${weatherApiKey}&days=3&aqi=yes&alerts=yes`)).json();

	weatherData.set(data)

	return(200)
}

export async function updateWeather(){

}