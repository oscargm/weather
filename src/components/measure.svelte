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
    padding: 0.05rem 0;
  }
</style>

<div class="measure">
  <span>{text}</span>
  <div>
    <span>{value}</span>
    <span>{unit}</span>
  </div>
</div>
