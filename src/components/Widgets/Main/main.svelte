<script>
	export let data = {};

	let city, url;

	function update() {
		let location = data.location;
		city = `${location.name}, ${location.region}, ${location.country}`

		url = (data.current.condition.icon).replaceAll('64', '128');
	}

	$:data && update();
</script>

<main>
	<h2> { city } </h2>
	<div id='wrapper'>
		<img src={url} alt={data.current.condition.code} width='128px' height='auto'>
		<div id='details'>
			<div class='container'>
				<span> <h4> Temperature </h4> <h4> {data.current.temp_c}&deg;C </h4> </span>
				<span> <h4> Min/ Max </h4> <h4> 10&deg;C </h4> </span>
				<span> <h4> Min/ Max </h4> <h4> 10&deg;C </h4> </span>
				<span> <h4> Min/ Max </h4> <h4> 10&deg;C </h4> </span>
			</div>
			<div class='container'>
				<span> <h4> Min/ Max </h4> <h4> 10&deg;C </h4> </span>
				<span> <h4> Min/ Max </h4> <h4> 10&deg;C </h4> </span>
				<span> <h4> Min/ Max </h4> <h4> 10&deg;C </h4> </span>
				<span> <h4> Min/ Max </h4> <h4> 10&deg;C </h4> </span>
			</div>
		</div>
	</div>
</main>

<style>

	#details { width: 60% }

  span { padding-top: 10px }

	span:nth-child(3) { color: black }

  h4 { margin: 0; width: 50%; text-align: end }

  main { flex-direction: column; }

  #wrapper, main { align-items: center; }

  #details ,#wrapper, main, span { display: flex }

	#wrapper { width: 100%; justify-content: inherit; margin-top: 10px }

	.container { width: 50%; }
	main {
			box-shadow: var(--box-shadow);
			margin: 20px 15px 20px 15px;
			padding: 15px;
			border-radius: 15px;
			justify-content: center;
	}

	@media (min-width: 1100px) { img { margin-right: 10px } }
</style>