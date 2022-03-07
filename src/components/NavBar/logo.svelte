<script>
	let innerWidth;

	let size = 24;

	$: innerWidth && (size = innerWidth > 550 ? 24 : 18);
</script>

<svelte:window bind:innerWidth/>

<main style='line-height: {size}px'>
	<img src='logo.svg' alt='Mausum Logo' height={size}>
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
	}
	h1 { margin: 0; }

	@media (min-width: 550px) { main { flex-direction: row } }
</style>