<script>
	let innerWidth;

	let size = 24;

	$: innerWidth && (size = innerWidth > 550 ? 24 : 18);
</script>

<svelte:window bind:innerWidth/>

<main style='line-height: {size}px'>
	<img src='https://i.ibb.co/4WLn4W8/round-filter-drama-black-24dp.png' alt='Favicon' height='24px' width="24px">
	<h1 style='font-size: {size}px'> Mausum </h1>
</main>

<style>
	main {
			display: flex;
			width: fit-content;
			height: fit-content;
			flex-direction: column;
			position: absolute;
			left: 8px;
		align-items: center;
	}
	h1 { margin: 0; }

	@media (min-width: 550px) { main { flex-direction: row } }
</style>