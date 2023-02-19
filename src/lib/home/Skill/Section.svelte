<script>
  /** @type {string}*/
  export let name;

  function toggleHeight() {
    const section = document.getElementById('skillsection' + name.replace(' ', ''));
    if (section?.classList.contains('hidden')) {
      section.classList.remove('hidden');
    } else {
      section?.classList.add('hidden');
    }
  }
</script>

<h3 on:click={toggleHeight}>{name}</h3>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id={'skillsection' + name.replace(' ', '')}>
  <slot />
</div>
<div class="hidden" style="display: none;" />

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    transition: max-height 0.7s;
    max-height: 20rem;
  }

  .hidden {
    max-height: 0px;
  }

  h3 {
    margin-top: 1.8rem;
    margin-bottom: 1rem;
  }
</style>
