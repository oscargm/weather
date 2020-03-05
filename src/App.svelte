<script>
  import { onMount } from 'svelte'
  // import fetch from 'node-fetch'
  import { getImage, getWeatherData } from './api/base.service.js'
  import Card from './components/card.svelte'
  // global.fetch = fetch
  let weather
  let cities = [
    { id: 6356055, name: 'Barcelona' },
    { id: 2950159, name: 'Berlin' },
  ]
  let selectedCity = cities[0]
  onMount(async () => {
    // citiesGet()
    imagesGet()
    weatherGet()
  })

  const imagesGet = async () => {
    console.log('imagesGet', selectedCity)
    const container = document.querySelector('.container')
    container.style['background-image'] = await getImage(selectedCity.name)
  }

  const weatherGet = async () => {
    console.log('weatherGet', selectedCity)
    weather = await getWeatherData(selectedCity.id)
  }
  const onCitySelectionChange = event => {
    console.log('event', event.target.value)
    selectedCity = cities.find(city => city.id === parseInt(event.target.value))
    weatherGet()
    imagesGet()
  }
</script>

<style>
  .title {
    text-align: center;
  }
  .container {
    margin: 0 auto;
    width: 1600px;
    height: 900px;
    display: flex;
    justify-content: flex-end;
    border: 1px solid red;
    background-position: center center;
    background-color: #ccc;
    background-repeat: no-repeat;
    background-size: contain;
  }
</style>

<main>
  <div class="title">
    <h1>Weather App</h1>
  </div>
  <select id="citySelector" on:change={onCitySelectionChange}>
    {#each cities as { id, name }}
      <option value={id}>{name}</option>
    {/each}
  </select>
  <div class="container">
    {#if weather}
      <Card index={0} weatherInfo={weather} />
    {/if}
  </div>
</main>
