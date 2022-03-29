<script>
	/* Store dependent variables */
	export let data = {};

	/* Local variables */
	let city, url, curr, innerWidth;

	/* This function updates the data to be in sync with the latest available data */
	function update() {
		/* Storing the location data in a temporary variable to update the city name */
		let location = data.location;
		/* Creating a name which looks like ' Sargodha, Punjab, Pakistan ' */
		city = `${location.name}, ${location.region}, ${location.country}`

		/* Storing the current weather data in a global variable */
		curr = data.current;

		/* Mutating the url to the condition icon so that we get a 128x128 px icon rather than the standard 64x64 px one  */
		url = (data.current.condition.icon).replaceAll('64', '128');
	}

	$:data && update();
</script>

<svelte:window bind:innerWidth />

<main>
	<div id='wrapper'>

		<!-- Weather condition icon -->
		<div id='img'>

			<img alt={ curr.condition.text } height='150px' width='150px' src={ url }>

			<!-- Appending or removing 'temperature' from the heading depending on the screen's width -->
			<h1> { (innerWidth > 764 || innerWidth < 390) ? curr.temp_c : `Temperature : ${curr.temp_c}` }&deg;C </h1>

		</div>

		<!-- Contains the entire summery of weather data -->
		<div id='details'>

			<div class='containers'>

				<span> <h4> Feels Like : </h4> <h4> { curr.feelslike_c }&deg;C </h4> </span>

				<span> <h4> Condition : </h4> <h4> { curr.condition.text } </h4> </span>

				<span> <h4> Wind Speed : </h4> <h4> { curr.wind_kph } kmph </h4> </span>

				<span> <h4> Will it Rain : </h4> <h4> { curr.precip_mm > 0 ? 'Yes' : 'No' } </h4> </span>

			</div>

			<div class='containers'>

				<span> <h4> Pressure : </h4> <h4> { curr.pressure_mb } mb </h4> </span>

				<span> <h4> Visibility : </h4> <h4> { curr.vis_km } KM </h4> </span>

				<span> <h4> Humidity : </h4> <h4> { curr.humidity } % </h4> </span>

				<span> <h4> UV index : </h4> <h4> { curr.uv } of 11 </h4> </span>

			</div>

		</div>

	</div>
</main>

<style>
	span { justify-content: space-between; }

	h4 { margin: 0 20px; text-align: center; }

	main, .containers, #details { width: 100%; }

	h1 { margin: 0 20px 10px 20px; opacity: .6; }

	main, #details, #wrapper, #img { align-items: center }

	main, span, .containers, #wrapper, #details, #img { display: flex; }

	main, .containers, #wrapper, #details, #img { flex-direction: column; }

	#wrapper {
      	width: 80%;
		padding: 20px;
      	border-radius: 20px;
      	box-shadow: var(--box-shadow);
	}

	@media ( min-width: 600px ) {
		span { width: 90% }
		#wrapper { width: 85vw }
		.containers { align-items: center; }
		h4 { margin: 0; width: fit-content }
		#details { flex-direction: row; width: 100%; }
	}

	@media ( min-width: 765px ) {
		h4 { margin: 1px }
		#details { flex-direction: column; width: 50% }
		#wrapper { flex-direction: row; justify-content: space-evenly }
	}

	@media ( min-width: 1000px ) {
		#details { width: 100%; }
		main { width: 350px; margin: 0 30px 0 40px; }
		#wrapper { width: 350px; flex-direction: column; padding: 10px 0 }
	}
</style>