<script>
  export let current = -1
  export let feelsLike = -1
  export let min = -1
  export let max = -1
  export let unit = 'unit'
</script>

<style>
  .temp-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem 0;
  }
  h4,
  h5 {
    margin: 0;
    padding: 0;
  }
  .temp,
  .feels-like,
  .range {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  .current > .temp > span {
    /* text-align: right; */
    font-size: 2rem;
  }
</style>

<div class="temp-wrapper">
  <div class="current">
    <div class="temp">
      <h4>Temperature:&nbsp;</h4>
      <span>{current}&nbsp;{unit}</span>
    </div>
    <div class="feels-like">
      <h5>Feels like:&nbsp;</h5>
      <span>{feelsLike}&nbsp;{unit}</span>
    </div>
  </div>
  <div class="range">
    <h5>Min&nbsp;-&nbsp;Max:&nbsp;</h5>
    <span>{min}&nbsp;-&nbsp;{max}&nbsp;{unit}</span>
  </div>
</div>
