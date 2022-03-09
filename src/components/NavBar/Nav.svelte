<script>
	import SearchBar from './search_bar.svelte';
	import Logo from './logo.svelte';
</script>

<main>
	<Logo/>
	<SearchBar/>
</main>

<style>
	main {
      margin: 0;
			width: 100vw;
			top: 0;
      left: 0;
			padding: 8px;
			height: 36px;
			background: rgba( 224, 224, 224, 30% );
			color: white;
			box-shadow: var(--box-shadow);
			display: flex;
			justify-content: center;
			align-items: center;
	}

	@media (min-width: 550px) { main { height: 24px; } }
</style>