<script>
	import Item from './search_item.svelte';
</script>

<main>
	<h2> Search </h2>
	<input type='text'>
</main>

<style>
	main {
			width: 60vw;
			max-width: var(--max-width);
			display: flex;
			height: 32px;
			align-items: center;
	}
	h2 {
      margin: 0 10px 0 0;
			font-size: 16px;
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
  }
</style>