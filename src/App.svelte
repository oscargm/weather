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
    console.log('inner height', window.innerHeight)
    console.log('inner width', window.innerWidth)
    // imagesGet()
    weatherGet()
  })

  const imagesGet = async () => {
    console.log('imagesGet', selectedCity)
    const container = document.querySelector('.container')
    container.style['background-image'] = await getImage(selectedCity.name, {
      width: window.innerWidth,
      height: window.innerHeight,
    })
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
  .main {
    margin: 0;
    padding: 0;
  }
  .title {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 3rem 0;
    text-align: center;
    color: white;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  .container {
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
    width: var(--container-width);
    height: var(--container-height);
    background-position: center center;
    /* background-color: #ccc; */
    background: transparent;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .content {
    padding: 1rem;
  }
  #citySelector {
    position: absolute;
    left: 50px;
    top: 50px;
  }
  .weather-card {
    position: absolute;
    top: 150px;
    right: 150px;
  }
</style>

<main class="main">

  <div
    class="container"
    style="--container-width: {window.innerWidth}px;--container-height: {window.innerHeight}px">
    <!-- <div class="title">
      <h1>Weather App</h1>
    </div> -->
    <div class="content">
      <!-- <select id="citySelector" on:change={onCitySelectionChange}>
        {#each cities as { id, name }}
          <option value={id}>{name}</option>
        {/each}
      </select> -->
      {#if weather}
        <div class="weather-card">
          <Card weatherInfo={weather} id={'weather'} />
        </div>
      {/if}
    </div>
  </div>
</main>
