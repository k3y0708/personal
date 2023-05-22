<script>
  /** @type {string}*/
  export let name;
</script>

<h3>{name}</h3>
<div id={'skillsection' + name.replace(' ', '')}>
  <slot />
</div>
<div class="hidden" style="display: none;" />

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }

  h3 {
    margin-top: 1.8rem;
    margin-bottom: 1rem;
  }
</style>
