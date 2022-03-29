<script>
	/* External varaibles */
	export let data;

	/* local variables */
	let url, hour, time, main;

	function update() {
		/* Replacing the 64x64 pixel image for the higher quality 128x128 pixel condition image. */
		url = data.condition.icon.replaceAll('64', '128');
		/* Retrieving the time of the data in a 12-hour format. */
		time = new Date(data.time_epoch*1000).getHours();
		/* Appending the current time with an 'AM' or a 'PM' depending on if the data is from before-noon or after-noon */
		hour = time > 12 ? `${time - 12}:00 PM` : `${time}:00 AM`;
	}

	/* Updating variables whenever the data changes */
	$:data && update();
</script>

<!-- item starts here -->
<main style={ time % 3 === 0 ? 'background-color : rgba( 255, 255, 255, .2 )' : "" } bind:this={main}>
	<!-- Displays the time -->
	<h3> { hour } </h3>

	<!-- Displays the current weather condition icon -->
	<img src={ url } alt={ data.condition.text } height='90px' width='90px'>

	<!-- Data is shown below -->
	<div id='item' >
		<!-- Current Temperature -->
		<h1> { data.temp_c }&deg;C </h1>

		<div id='details' >
			<!-- What the temperature feels like -->
			<span> <h4> Feels like : </h4> <h4> { data.feelslike_c }&deg;C </h4> </span>

			<!-- Humidity -->
			<span> <h4> Humidity </h4> <h4> { data.humidity }% </h4> </span>

			<!-- Wind speed in Kilometers per hour -->
			<span> <h4> Wind speed </h4> <h4> { data.wind_kph }kph </h4> </span>

			<!-- Pressure in millibars -->
			<span> <h4> Pressure </h4> <h4> { data.pressure_mb }mb </h4> </span>

			<!-- Chance of rain or snow. If it will snow, it displays the chance of snow otherwise the chances of rain are shown -->
			<span> <h4> { data.chance_of_snow > 0 ? 'Chance of snow' : 'Chance of rain' } </h4> <h4> { data.chance_of_snow > 0 ? data.chance_of_snow : data.chance_of_rain }% </h4> </span>

			<!-- Visibility in kilometers -->
			<span> <h4> Visibility </h4> <h4> { data.vis_km } KM </h4> </span>
		</div>
	</div>
</main>
<!-- item ends here -->

<style>
	h1, h3, h4 { margin: 0 }

	h3 { width: max-content; }

	span, main { display: flex}

	span > h4 { margin-top: 0 }

	#item { height: 100%; width: 140%; }

  	h1 { text-align: center; opacity: .6; }

  	span { justify-content: space-between; }

  	#details {
		height: 100%;
    	display: flex;
    	flex-direction: column;
    	justify-content: space-evenly;
	}

	main {
		box-shadow: 0 0 16px 4px rgba(0,0,0, .05);
        margin: 5px 15px 15px;
        border-radius: 20px;
        padding: 10px 40px 40px;
        flex-direction: column;
		align-items: center;
		width: 250px;
	}
</style>