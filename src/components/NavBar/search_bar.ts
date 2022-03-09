// const weatherApiKey = 'ab15d6963bbd40edbf1142543220803';

import { weatherData } from '../../store';
import { viewWidgets } from '../../store';
import { data } from '../../data';

export async function updateData( city ){
// const weatherRes = await(await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${city}&key=${weatherApiKey}&days=3&aqi=yes&alerts=yes`)).json();

	weatherData.set(data)
	viewWidgets.set(true);
	return(200);
}