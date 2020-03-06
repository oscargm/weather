<script>
  import { onMount } from 'svelte'

  export let description = ''
  export let icon = ''
  onMount(() => {
    const container = document.querySelector('.icon')
    container.style['background-image'] = icon
  })
</script>

<style>
  .weather {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    padding: 1rem 0;
  }
  .icon {
    width: 3rem;
    height: 3rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #888;
  }
</style>

<div class="weather">
  <div class="icon" />
  <span>{description}</span>
</div>
