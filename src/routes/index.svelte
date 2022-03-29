<script>
	import Nav from '../components/NavBar/Nav.svelte'
	import Widgets from '../components/Widgets/widgets.svelte'
	import { initialize } from './index.ts';
	import { weatherData } from '../store';

	import { beforeUpdate } from 'svelte'

	beforeUpdate(() => { initialize() } );

	let weather;

	weatherData.subscribe( data => { weather = data } )
</script>

<main>
	<Nav/>
	<Widgets/>
</main>
<p> Powered by <a href='https://www.weatherapi.com' target="_blank" rel="noopener norefferer" > Weatherapi.com </a> </p>

<style>
  main, p { position: absolute; margin: 0; }

  a { color: var(--main-font-color); font-weight: 400 }

	main {
			top: 0;
			left: 0;
			background-color: var(--bg-color);
			width: 100%;
			height: 100%;
			overflow-x: hidden;
	}
	p {
			bottom: 0;
			right: 10px;
			text-align: end;
			font-size: 14px;
			font-weight: 200;
      position: absolute;
			padding: 0 5px 5px;
      border-radius: 10px 0 0;
      box-shadow: var(--box-shadow);
			color: var(--main-font-color);
			background-color: var(--bg-color);
	}

  :global(:root){
      --bg-color: #e0e0e0;
      --box-shadow: 0px 0px 16px 4px rgba(0,0,0,0.1);
      --main-font-color: rgb(0, 0, 40);
      --max-width: 550px;
  }

	:global(h1, h2, h3, h4, h5, h6) {	font-family: 'Dosis', sans-serif; color: var(--main-font-color)	}
	:global(h1) {	opacity: .7; }
	:global(h2, h3) { opacity: .5; }
	:global(h4, h5, h6) { opacity: .3; }

	:global(p) { font-family: 'Quicksand', sans-serif; }
</style>