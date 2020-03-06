<script>
  import { onMount } from 'svelte'
  const colors = {
    default: 'black',
    good: 'green',
    regular: 'yellow',
    bad: 'red',
  }
  export let type = 'default'
  let color = colors[type]
  onMount(() => {
    color = colors[type]
  })
</script>

<style>
  .gg-flag {
    --ggs: 1;
  }
  .gg-flag {
    box-sizing: border-box;
    position: relative;
    display: block;
    color: var(--color);
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 18px;
    border-left: 2px solid;
  }
  .gg-flag::after,
  .gg-flag::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 8px;
    border-color: var(--color);
    color: var(--color);
  }
  .gg-flag::before {
    border-top: 2px solid;
    border-bottom: 2px solid;
  }
  .gg-flag::after {
    border: 2px solid;
    border-left: 0;
    top: 2px;
    left: 7px;
  }
</style>

<i class="gg-flag" style="--color:{color}" />
