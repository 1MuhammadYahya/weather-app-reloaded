<script>
	/* Store Items */
	import { viewWidgets } from '../../store.ts';
	import { weatherData } from '../../store.ts';

	/* Custom Widgets */
	import Main from './Main/main.svelte'

	/* Store dependent Variables */
	let data;
	let visible = false;

	/* Subscribing to the values */
	viewWidgets.subscribe(view => { visible = view });
	weatherData.subscribe( weather => { data = weather })

	/* Local Variables */
	let weather = {};

	function setContexts() {
		weather = { 'main': { 'alerts': data.alerts, 'current': data.current, 'location': data.location } }
	}

	$:data && setContexts();
</script>

<main>
	<Main data={weather.main}/>
</main>

<style>

</style>