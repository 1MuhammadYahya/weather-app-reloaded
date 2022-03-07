<script>
	import Nav from '../components/NavBar/Nav.svelte'
</script>

<main>
	<Nav/>
	<footer> <p> Powered by <a href='https://www.weatherapi.com'> Weatherapi.com </a> </p> </footer>
</main>

<style>
	:global(:root){
  	--bg-color: #e0e0e0;
		--box-shadow: 0px 0px 16px 4px rgba(0,0,0,0.1);
		--main-font-color: rgb(0, 0, 40);
		--max-width: 550px;
	}
	main {
			margin: 0;
			position: absolute;
			top: 0;
			left: 0;
			background-color: var(--bg-color);
			width: 100%;
			height: 100%;
			overflow-x: hidden;
	}
	p {
			position: absolute;
			bottom: 0;
			right: 10px;
			font-size: 14px;
			font-weight: 200;
			color: var(--main-font-color);
	}

	a { color: var(--main-font-color); font-weight: 400 }

	:global(h1, h2, h3, h4, h5, h6) {	font-family: 'Dosis', sans-serif; color: var(--main-font-color)	}
	:global(h1) {	opacity: .7; }
	:global(h2, h3) { opacity: .5; }
	:global(h4, h5, h6) { opacity: .3; }

	:global(p) { font-family: 'Quicksand', sans-serif; }
</style>