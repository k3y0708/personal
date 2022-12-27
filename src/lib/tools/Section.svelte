<script>
  export let title = 'Various Tools';
  export let backgroundColor = 'transparent';
</script>

<div style={'background-color: ' + backgroundColor + ';'}>
  <h1>{title}</h1>
  <div class="sectionBody">
    <slot />
  </div>
</div>

<style>
  .sectionBody {
    display: flex;
    flex-wrap: wrap;
  }
</style>
