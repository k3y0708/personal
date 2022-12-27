<script>
  /** @type {string}*/
  export let name;
</script>

<h3>{name}</h3>
<div>
  <slot />
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
  }
</style>
