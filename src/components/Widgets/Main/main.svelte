<script>
	export let data = {};

	let city, url, curr, innerWidth;

	function update() {
		let location = data.location;
		city = `${location.name}, ${location.region}, ${location.country}`

		url = (data.current.condition.icon).replaceAll('64', '128');
		curr = data.current;
	}

	$:data && update();
</script>

<svelte:window bind:innerWidth />

<main>
	<div id='wrapper'>
		<div id='img'>
			<img alt={ data.current.condition.text } height='150px' width='150px' src={ url }>
			<h1> { (innerWidth > 765 || innerWidth < 380) ? curr.temp_c : `Temperature : ${curr.temp_c}` }&deg;C </h1>
		</div>
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
	#wrapper { width: 80% }

  span { justify-content: space-between; }

	h4 { margin: 0 20px; text-align: center; }

	main, .containers, #details { width: 100%; }

	h1 { margin: 0 20px 10px 20px; opacity: .6; }

	main, #details, #wrapper, #img { align-items: center }

	main, span, .containers, #wrapper, #details, #img { display: flex; }

	main, .containers, #wrapper, #details, #img { flex-direction: column; }

	#wrapper {
			box-shadow: var(--box-shadow);
			border-radius: 20px;
			padding: 20px;
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
			main { width: 350px; margin: 0 30px; }
			#wrapper { width: 350px; flex-direction: column; padding: 10px 0 }
	}
</style>