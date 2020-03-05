<script>
  export let text = ''
  export let value = ''
  export let unit = ''
</script>

<style>
  .measure {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>

<div class="measure">
  <span>{text}</span>
  <div>
    <span>{value}</span>
    <span>{unit}</span>
  </div>
</div>
