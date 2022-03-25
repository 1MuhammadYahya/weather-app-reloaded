<script>
	/* Data driven variable */
	export let data;

	/* Local variable */
	let day, astro;

	/* Function to update local variables to be in sync with the weather data */
	function update () { day = data[0]; astro = data[1]; }

	/* Calling the update function everytime the data changes */
	$:data && update()
</script>

<div id='wrapper'>

	<h2>
		Weather in { data[2].substring(0, data[2].indexOf(",") ) }
	</h2>

	<div id='container'>
		<section>
			 <!--Minimum and maximum temperature-->
			<div> <h4> Min/Max </h4> <h4 class="info" > { day.mintemp_c }&deg;C/{ day.maxtemp_c }&deg;C </h4> </div>

			 <!--Average humidity through the day -->
			<div> <h4> Humidity </h4> <h4 class="info" > { day.avghumidity }% </h4> </div>

			 <!--The Average visibility during the day in kilometers -->
			<div> <h4> Visibility </h4> <h4 class="info" > { day.avgvis_km } KM </h4> </div>

			 <!--The chances of rain through the day -->
			<div> <h4> { day.daily_chance_of_snow > 0 ? `Chances of snow` : `Chances Of Rain` } </h4> <h4 class="info" > { day.daily_chance_of_snow > 0 ? day.daily_chance_of_snow : day.daily_chance_of_rain }% </h4> </div>

			 <!--The max wind speed through the day in kilometers -->
			<div> <h4> Max Wind speed </h4> <h4 class="info" > { day.maxwind_kph }KM/ph </h4> </div>
		</section>

		<section>
			 <!--The weather condition during the day -->
			<div> <h4> Weather Condition </h4> <h4 class="info" > { day.condition.text } </h4> </div>

			 <!--The UV index during the day -->
			<div> <h4> UV </h4> <h4 class="info" > { day.uv } out of 10 </h4> </div>

			 <!--The time of sunrise -->
			<div> <h4> Sunrise </h4> <h4 class="info" > { astro.sunrise } </h4> </div>

			 <!--The time of sunset -->
			<div> <h4> Sunset </h4> <h4 class="info" > { astro.sunset } </h4> </div>

			 <!--The current phase of the moon -->
			<div> <h4> Moon Phase </h4> <h4 class="info" > { astro.moon_phase } </h4> </div>
		</section>
	</div>
</div>

<style>
    section { width: 47.5%; }

    #wrapper, section { flex-direction: column; }

    .info { right: 50px; position: absolute; opacity: .4; }

    #wrapper, #container, section > div, section { display: flex; }

    h4 { position: relative; font-size: 20px; line-height: 0; opacity: .4 }

    section > div { width: 100%; position: relative; border-bottom: 1px dashed;}

    #container { flex-direction: row; width: 100%; justify-content: space-around; }

    #wrapper {
        box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #f4f4f4;
        border-radius: 20px;
        height: fit-content;
        width: calc( 100vw - 105px );
        margin: 35px;
        color: rgba( 0, 0, 50, .7);
        padding: 0 20px 20px;
        align-items: center;
    }

    @media ( max-width: 1030px ) {
        #container { flex-direction: column; align-items: center; }
        section { width: 100%; }
    }

    @media ( max-width: 550px ) { h4 { font-size: 15px; } .info { right: 0; font-size: 14px; } }
</style>
