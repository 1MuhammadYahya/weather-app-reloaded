<script>
	/* This variable stores the hourly weather data i.e. 24 hours */
	export let data;

	/* custom widgets */
	import Hourly from './Hourly_Item.svelte'

</script>

<h2>Hourly Data</h2>
<main>
	<div>
		{#each data as hour}
			<Hourly data={hour}/>
		{/each}
	</div>
</main>

<style>
	div, main { display: flex; }

	div { height: 400px; }

  	h2 {
	  	opacity: .3;
      	display: block;
			margin-bottom: 0;
    	text-align: center;
  	}

	main {
		overflow-x: scroll;
		width: 88%;
		margin-top: 20px;
		flex-direction: column;
	}

	@media ( min-width: 1000px ) {
		h2 { display: none; }
    	div { height: 397px; }
		main { margin-top: 0; margin-right: 30px; }
	}
</style>