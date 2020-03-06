<script>
  import { onMount } from 'svelte'
  import Measure from './measure.svelte'
  import Temp from './temp.svelte'
  import Weather from './weather.svelte'
  import ColorSwitcher from './color-switcher.svelte'
  import Pollution from './pollution.svelte'
  export let id
  export let weatherInfo
  let background = [255, 255, 255]
  let textColor = 'black'
  const changeBackground = () => {
    background = background[0] === 0 ? [255, 255, 255, 0.8] : [0, 0, 0, 0.8]
    textColor = background[0] === 0 ? 'white' : 'black'
  }
</script>

<style>
  h2 {
    margin: 0;
  }
  .card-wrapper {
    width: 300px;
    padding: 1rem;
  }
  .card {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 10px;
    color: var(--text-color);
    background-color: rgba(var(--background-color));
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    transition: color 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  }
  .measures {
    padding: 0.5rem 0;
  }
</style>

<div class="card-wrapper" {id}>
  <div
    class="card"
    style="--background-color: {background.join(',')};--text-color: {textColor}">
    <div class="card-header">
      <h2>{weatherInfo.name}</h2>
      <div class="color-switcher">
        <ColorSwitcher
          checked={textColor === 'white'}
          onChange={changeBackground} />
      </div>
    </div>
    <div class="weather-info">
      <Temp
        current={weatherInfo.main.temp}
        feelsLike={weatherInfo.main.feels_like}
        min={weatherInfo.main.temp_min}
        max={weatherInfo.main.temp_max}
        unit={'ºC'} />
      <div class="measures">
        <Measure
          text={'Pressure:'}
          value={weatherInfo.main.pressure}
          unit={`hpa`} />
        <Measure
          text={'Humidity:'}
          value={weatherInfo.main.humidity}
          unit={`%`} />
      </div>
      <Weather
        icon={weatherInfo.weather[0].iconUrl}
        description={weatherInfo.weather[0].description} />
      <Pollution />
    </div>
  </div>
</div>
