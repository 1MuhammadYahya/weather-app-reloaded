<!-- This is a component which manages the whole of the nav bar i.e. everything in the nav bar as well as the nav bar itself -->

<script>
	import { fade } from 'svelte/transition'

	import halfred from 'halfred'

	import Item from './search_item.svelte';
	import { updateData } from './search_bar';

	let city, cityList = [ '', '', '', '', '' ];

	/* This makes the autocomplete items either visible or not visible */
	let visible = false;

	/* This function gets the list of cities for the city autocompletion */
	async function retrieveCityList(){
		visible = city.length > 1;

		let cityRes = halfred.parse(await (await fetch(`https://api.teleport.org/api/cities/?search=${city}&limit=5`)).json()).embeddedArray('city:search-results');

		let length = cityRes.length > 5 ? cityRes.length : 5;

		for (let i = 0; i < length; i++ ) {
			if (!cityRes[i])
				break;

			cityList[i] = cityRes[i].matching_full_name;
		}
	}

	function setCity(event){
		document.getElementById('inp').value = event.detail.city;
		updateData(event.detail.city);
		collapse();
	}

	function collapse() { visible = false; }

	$: city && retrieveCityList();
</script>

<main>
	<div id='bar' >
		<h2> Search </h2>
		<input type='text' bind:value={city} required id='inp' name='input' on:blur={collapse}>
	</div>
	{#if visible}
		<div id='results' transition:fade={{duration: 200}}>
			{#each cityList as name } <Item city={name} on:name={setCity}/> {/each}
		</div>
	{/if}
</main>

<style>
	main, #bar { display: flex }

	h2 { margin: 0 10px 0 0; font-size: 12px; }

  #bar {
      padding-top: 0;
      align-items: center;
			width: 100%;
      flex-direction: row;
	}

	#results {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			box-shadow: var(--box-shadow);
      margin-top: 20px;
      border-radius: 20px;
      padding: 10px;
			width: 80vw;
			max-width: var(--max-width);
			background-color: var(--bg-color);
	}

	main {
			width: 60vw;
			max-width: var(--max-width);
			height: 32px;
			align-items: center;
			flex-direction: column;
	}

	input {
			width: 100%;
			border: none;
			background-color: var(--bg-color);
			box-shadow: var(--box-shadow);
			border-radius: 10px;
			color: var(--main-font-color);
			opacity: .6;
      padding: 2px 2px 2px 5px;
			line-height: 6px;
			height: 24px;
  }

	input:focus { outline: none }

	@media (min-width: 550px) {
			main { height: 24px }

			h2 { font-size: 16px }
  }
</style>