<script>
	/* Store Items */
	import { weatherData } from '../../store.ts';

	/* Svelte functions */
	import { slide } from "svelte/transition";

	/* Custom Widgets */
	import Main from './Main/main.svelte'
	import Hourly from './Hourly/Hourly.svelte'
	import Today from './Today/Today.svelte';
	import Forecast from "./Forecast/Forecast.svelte";

	/* Store dependent Variables */
	let data;

	/* Subscribing to the values */
	weatherData.subscribe( weather => { data = weather })

	/* Local Variables */
	let weather = {}, city;

	/* This function updates the data to be inline with the updated weather data */
	function update() {
			/* Makes setting other variables later on easier */
			let location = data.location;
			/* Stores the main weather data needed to pass on to the widgets */
			weather = {
				'main': {'alerts': data.alerts, 'current': data.current, 'location': location},
				'currentDay': data.forecast.forecastday[0],
				'forecast': data.forecast.forecastday
			}
			/* The name of the current city */
			city = `${location.name}, ${location.region}, ${location.country}`;
	}

	/* Updating the variables every time the data is updated */
	$:data && update();
</script>

<main>
	{#if data}
	<h1> { city } </h1>
		<div class='container'>
			<Main data={ weather.main }/>
			<Hourly data={ weather.currentDay.hour } />
		</div>
		<div class='container'>
			<Today data={ [weather.currentDay.day, weather.currentDay.astro, city] } />
		</div>
		<h2> Forecast for { weather.forecast.length } { weather.forecast.length > 1  ? 'days' : 'day' } </h2>
		<div class='container' >
			<Forecast Data={ weather.forecast }/>
		</div>
	{:else}
		<h1 transition:slide> Loading...</h1>
	{/if}
</main>

<style>
	h1, h2 { text-align: center; }
	h1 { opacity: .5; font-size: 28px }

	.container {
			display: flex;
			flex-direction: column;
			align-items: center;
		justify-content: center;
	}

	@media ( min-width: 1000px ) { .container { flex-direction: row; } }
</style>