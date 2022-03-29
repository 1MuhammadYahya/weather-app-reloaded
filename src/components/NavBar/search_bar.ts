// const weatherApiKey = 'ab15d6963bbd40edbf1142543220803';

import { getWeather } from "../../routes/index";
import { weatherData } from '../../store';

export async function updateData( city ){
	/* Setting the weather data to null to initiate the loading screen */
	weatherData.set( null );
	/* Updating the data */
	await getWeather(city);

	return(200);
}