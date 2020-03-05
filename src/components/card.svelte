<script>
  import { onMount } from 'svelte'
  import Measure from './measure.svelte'
  import Temp from './temp.svelte'
  export let index
  export let id
  export let weatherInfo
  onMount(() => {
    console.log('weatherInfo', weatherInfo)
    console.log('keys', Object.keys(weatherInfo.main))
  })
</script>

<style>
  .card-wrapper {
    width: 300px;
    padding: 1rem;
  }
  .card {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: #333 10px 10px 10px 3px;
  }
</style>

<div class="card-wrapper" id="{id}}">
  <div class="card">
    <h2>{weatherInfo.name}</h2>
    <div class="weather-info">
      <Temp
        current={weatherInfo.main.temp}
        feelsLike={weatherInfo.main.feels_like}
        min={weatherInfo.main.temp_min}
        max={weatherInfo.main.temp_max}
        unit={'ºC'} />
      <Measure
        text={'Pressure:'}
        value={weatherInfo.main.pressure}
        unit={`hpa`} />
      <Measure
        text={'Humidity:'}
        value={weatherInfo.main.humidity}
        unit={`%`} />
    </div>
  </div>
</div>
