<script>
  export let title = 'Various Tools';
  export let backgroundColor = 'transparent';
</script>

<section style={'background-color: ' + backgroundColor + ';'}>
  <h1>{title}</h1>
  <div>
    <slot />
  </div>
</section>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
  }
</style>
