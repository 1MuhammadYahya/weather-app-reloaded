<script>
    /* Store dependent variables */
    export let data = [];

    /* Local variables */
    const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]

    let url, curr, day, month, innerWidth;

    /* This function updates the data to be in sync with the latest available data */
    function update() {
        /* Storing the current weather data in a global variable */
        curr = data.day;
        /* Mutating the url to the condition icon so that we get a 128x128 px icon rather than the standard 64x64 px one  */
        url = (curr.condition.icon).replaceAll('64', '128');
        /* Extracting the date and month from the date of the forecast */
        let date = new Date(data.date_epoch * 1000);
        day = date.getDate();
        month = months[date.getMonth()];
    }

    $:data && update();
</script>

<svelte:window bind:innerWidth />

<main>
    <div id='wrapper'>

        <!-- Weather condition icon -->
        <div id='img'>
            <h2>
                {#if day === (new Date).getDate()}
                    Today
                {:else}
                    { day }
                    <sup>
                        {#if day === 1}st
                        {:else if day === 2}nd
                        {:else if day === 3}rd
                        {:else}th
                        {/if}
                    </sup>
                    of { month }
                {/if}
            </h2>

            <img alt={ curr.condition.text } height='150px' width='150px' src={ url }>

        </div>

        <!-- Contains the entire summery of weather data -->
        <div id='details'>

            <div class='containers'>

                <span> <h4> Average Temperature : </h4> <h4> { curr.avgtemp_c }&deg;C </h4> </span>

                <span> <h4> Condition : </h4> <h4> { curr.condition.text } </h4> </span>

                <span> <h4> Max Wind Speed : </h4> <h4> { curr.maxwind_kph } kmph </h4> </span>

                <span> <h4> { curr.daily_chance_of_snow > 0 ? `Chances of snow` : `Chances Of Rain` } </h4> <h4 class="info" > { curr.daily_chance_of_snow > 0 ? curr.daily_chance_of_snow : curr.daily_chance_of_rain }% </h4> </span>

            </div>

            <div class='containers'>

                <span> <h4> Min/Max Temp : </h4> <h4> { curr.mintemp_c }&deg;C / {curr.maxtemp_c}&deg;C </h4> </span>

                <span> <h4> Visibility : </h4> <h4> { curr.avgvis_km } KM </h4> </span>

                <span> <h4> Humidity : </h4> <h4> { curr.avghumidity } % </h4> </span>

                <span> <h4> UV index : </h4> <h4> { curr.uv } of 11 </h4> </span>

            </div>

        </div>

    </div>
</main>

<style>
    h2 { margin: 0 }

    main { margin: 20px }

    span { justify-content: space-between; }

    main, .containers, #details { width: 100%; }

    main, #details, #wrapper, #img { align-items: center }

    h4 { margin: 0 20px; text-align: center; font-size: 20px }

    main, span, .containers, #wrapper, #details, #img { display: flex; }

    main, .containers, #wrapper, #details, #img { flex-direction: column; }

    #wrapper {
        width: 80%;
        padding: 20px;
        border-radius: 20px;
        box-shadow: var(--box-shadow);
    }

    @media ( min-width: 600px ) {
        span { width: 90% }
        #wrapper { width: 85vw }
        .containers { align-items: center; }
        h4 { margin: 0; width: fit-content }
        #details { flex-direction: row; width: 100%; }
    }

    @media ( min-width: 765px ) {
        h4 { margin: 1px }
        #details { flex-direction: column; width: 50% }
        #wrapper { flex-direction: row; justify-content: space-evenly }
    }

    @media ( min-width: 1200px ) {
        #details { width: 100%; }
        main { width: calc(33% - 20px); margin: 0 }
        #wrapper { flex-direction: column; padding: 10px 0; width: 100%; }
    }
</style>
