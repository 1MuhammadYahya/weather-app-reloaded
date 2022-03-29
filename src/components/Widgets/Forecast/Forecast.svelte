<script>
    /* Store dependent variables */
    export let Data;

    /* Custom Widgets */
    import ForecastItem from './Forecast_Item.svelte'

</script>

<main>
    {#each Data as data}
        <ForecastItem {data}/>
    {/each}
</main>

<style>
    main { margin-bottom: 40px }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 40px;
    }

    @media ( min-width: 1200px ) { main { flex-direction: row } }

</style>