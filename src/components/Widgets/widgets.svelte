<script>
	/* Store Items */
	import { viewWidgets } from '../../store.ts';
	import { weatherData } from '../../store.ts';

	/* Custom Widgets */
	import Main from './Main/main.svelte'
	import Hourly from './Hourly/Hourly.svelte'
	import Today from './Today/Today.svelte';

	/* Store dependent Variables */
	let data;
	let visible = false;

	/* Subscribing to the values */
	viewWidgets.subscribe(view => { visible = view });
	weatherData.subscribe( weather => { data = weather })

	/* Local Variables */
	let weather = {}, city;

	/* This function updates the data to be inline with the updated weather data */
	function update() {
		let location = data.location;

		weather = { 'main': { 'alerts': data.alerts, 'current': data.current, 'location': location }, 'forecast': data.forecast.forecastday[0] }

		city = `${location.name}, ${location.region}, ${location.country}`;
	}

	/* Updating the variables every time the data is updated */
	$:data && update();
</script>

<main>
	<h1> { city } </h1>
	<div class='container'>
			<Main data={ weather.main }/>
			<Hourly data={ weather.forecast.hour } />
	</div>
	<div class='container'>
		<Today data={ [weather.forecast.day, weather.forecast.astro, city] } />
	</div>
</main>

<style>
	h1 { opacity: .5; text-align: center; font-size: 28px }
	.container {
			display: flex;
			flex-direction: column;
			align-items: center;
	}

	@media ( min-width: 1000px ) { .container { flex-direction: row; } }
</style>