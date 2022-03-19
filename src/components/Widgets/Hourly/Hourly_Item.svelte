<script>
	export let data;

	/* local variables */
	let url, hour, time;

	function update() {
		url = data.condition.icon.replaceAll('64', '128');
		time = new Date(data.time_epoch*1000).getHours();
		hour = time > 12 ? time - 12 : time;
	}

	/* Updating variables whenever the data changes */
	$: data && update();
</script>

<!-- item starts here -->
<main>
	<!-- Displays the time -->
	<h5> { time > 12 ? `${hour}:00 PM` : `${hour}:00 AM` } </h5>

	<!-- Displays the current weather condition icon -->
	<img src={ url } alt={ data.condition.text } height='90px' width='90px'>

	<!-- Data is shown below -->
	<div id='item' >
		<!-- Current Temperature -->
		<h1> { data.temp_c }&deg;C </h1>

		<div id='details' >
			<!-- What the temperature feels like -->
			<span> <h5> Feels like : </h5> <h5> { data.feelslike_c }&deg;C </h5> </span>

			<!-- Humidity -->
			<span> <h5> Humidity </h5> <h5> { data.humidity }% </h5> </span>

			<!-- Wind speed in Kilometers per hour -->
			<span> <h5> Wind speed </h5> <h5> { data.wind_kph }kph </h5> </span>

			<!-- Pressure in millibars -->
			<span> <h5> Pressure </h5> <h5> { data.pressure_mb }mb </h5> </span>

			<!-- Chance of rain or snow. If it will snow, it displays the chance of snow otherwise the chances of rain are shown -->
			<span> <h5> { data.chance_of_snow > 0 ? 'Chance of snow' : 'Chance of rain' } </h5> <h5> { data.chance_of_snow > 0 ? data.chance_of_snow : data.chance_of_rain }% </h5> </span>

			<!-- Visibility in kilometers -->
			<span> <h5> Visibility </h5> <h5> { data.vis_km } KM </h5> </span>
		</div>
	</div>
</main>
<!-- item ends here -->

<style>
	h1, h5 { margin: 0 }

  h1 { text-align: center; }

	h5 { width: max-content; }

	span, main { display: flex}

	span > h5 { margin-top: 5px }

  #item { height: 100%; width: 140%; }

  span { justify-content: space-between; }

  #details {
		height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
	}

	main {
			box-shadow: var(--box-shadow);
      margin: 15px;
      border-radius: 20px;
      padding: 10px 40px 40px;
      flex-direction: column;
			align-items: center;
			width: 250px;
	}
</style>