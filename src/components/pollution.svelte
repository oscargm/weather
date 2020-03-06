<script>
  import Flag from './icons/flag.svelte'
  let pollution = [
    { id: 0, name: 'NO₂', value: 100, unit: 'µg/m3' },
    { id: 1, name: 'PM10', value: 5, unit: 'µg/m3' },
    { id: 2, name: 'O3', value: 30, unit: 'µg/m3' },
  ]
  let pollutantMargins = [
    { id: 0, good: 20, regular: 30, bad: 40 },
    { id: 1, good: 5, regular: 10, bad: 20 },
    { id: 2, good: 40, regular: 70, bad: 100 },
  ]

  const getPollutantStatus = (pollutantId, pollutantValue) => {
    console.log('getPollutantStatus', pollutantId, pollutantValue)
    const margin = pollutantMargins.find(pol => pol.id === pollutantId)
    console.log('margin', margin)
    if (margin) {
      const flagType = Object.keys(margin)
        .filter(k => k !== 'id')
        .find(k => pollutantValue < margin[k])
      return flagType ? flagType : 'bad'
    } else return 'default'
  }
</script>

<style>
  h2 {
    border-bottom: 1px dashed black;
  }
  .pollution {
    display: flex;
    flex-direction: column;
  }
  .pollutant {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    padding: 0.1rem 0;
  }
  .pollutant > div {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    padding: 0.2rem 0;
  }
  .pollutant-flag {
    width: 30px;
  }
</style>

<div class="pollution">
  <h2>Pollution</h2>
  {#each pollution as { id, name, value, unit }}
    <div class="pollutant" {id}>
      <div>
        <span class="pollutant-flag">
          <Flag type={getPollutantStatus(id, value)} />
        </span>
        <span>{name}</span>
      </div>
      <div>
        <span>{value}</span>
        <span>{unit}</span>
      </div>
    </div>
  {/each}
</div>
