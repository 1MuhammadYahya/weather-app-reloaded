<script>
	/* Store Items */
	import { viewWidgets } from '../../store.ts';
	import { weatherData } from '../../store.ts';

	/* Custom Widgets */
	import Main from './Main/main.svelte'
	import Hourly from './Hourly/Hourly.svelte'

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
		weather = { 'main': { 'alerts': data.alerts, 'current': data.current, 'location': location }, 'hourly': data.forecast.forecastday[0].hour }
		city = `${location.name}, ${location.region}, ${location.country}`;
	}

	$:data && update();
</script>

<main>
	<h2 style='opacity: .7'> { city } </h2>
	<div>
		<Main data={ weather.main }/>
		<Hourly data={ weather.hourly } />
	</div>
</main>

<style>
	h2 { opacity: .7; text-align: center; }
	div {
			display: flex;
			flex-direction: column;
			align-items: center;
	}

	@media ( min-width: 1000px ) { div { flex-direction: row; } }
</style>