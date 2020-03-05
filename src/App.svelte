<script>
  import { onMount } from 'svelte'
  import Card from './components/card.svelte'

  let weather
  let cityId = 6356055

  onMount(async () => {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=${API_KEY}&units=metric`
      // `http://localhost:3000/weather`
    )
    weather = await res.json()
  })
  // export let name
</script>

<main>
  <h1>Weather App</h1>
  {#if weather}
    <Card index={0} id={'weather'} weatherInfo={weather} />
  {/if}
</main>
