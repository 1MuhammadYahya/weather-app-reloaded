<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function collapse() {
		dispatch('name', { 'city': city });
	}

	export let city = '';
</script>

<main on:click={collapse}>
	<h3 on:click={collapse}>{city}</h3>
</main>

<style>
	main, h3 { transition: all .2s ease-in-out }
	main {
			border-bottom: 1px dashed var(--main-font-color);
			width: 90%;
			text-align: center;
			background-color: var(--bg-color);
	}
	h3 {
			margin: 0;
			padding-top: 15px;
			padding-bottom: 15px;
			opacity: 30%;
	}

	main:hover {
			transform: scale(1.03);
	}

	main:hover > h3 { opacity: 45% }
</style>
