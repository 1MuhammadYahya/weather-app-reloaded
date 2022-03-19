<script>
	/* This variable stores the hourly weather data i.e. 24 hours */
	export let data;

	/* Helper variables */
	let innerWidth;

	/* custom widgets */
	import Hourly from './Hourly_Item.svelte'
</script>

<svelte:window bind:innerWidth />

{#if innerWidth < 1000 } <h3>Hourly Data</h3> {/if}
<main>
	<div>
		{#each data as hour}
			<Hourly data={hour}/>
		{/each}
	</div>
</main>

<style>
	div, main { display: flex; }

  h3 { text-align: center; opacity: .3; margin-bottom: 0; }

  main {
			overflow-x: auto;
			width: 88%;
			margin-top: 20px;
			flex-direction: column;
	}

	@media ( min-width: 1000px ) { main { margin-top: 0; margin-right: 30px; } div { height: 397px; } }
</style>