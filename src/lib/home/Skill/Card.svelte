<script>
  // @ts-nocheck

  /**@type {string}*/
  export let name;

  /**@type {string}*/
  export let level;

  export let icon = 'unset';
</script>

<div>
  <h3>
    {#if icon !== 'unset'}<img src={'/skills/' + icon} alt={'Logo of ' + name} />{/if}{name}
  </h3>
  {#each Array.from({ length: level }, (_, i) => i) as _, i}<svg
      class="star-colored"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="green"
      ><path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg
    >{/each}{#each Array.from({ length: 10 - level }, (_, i) => i) as _, i}<svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="grey"
      ><path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg
    >{/each}
</div>

<style>
  div {
    background-color: #272727;
    border-radius: 5px;
    width: calc(100% - 1.5em);
    padding: 0.5em;
    margin: 0.25em;
    height: fit-content;
  }

  h3 {
    margin: 0;
  }

  img {
    height: 1em;
    margin-right: 0.5em;
  }

  @media only screen and (min-width: 600px) {
    div {
      width: calc(100% / 2 - 1.5em);
    }
  }

  @media only screen and (min-width: 768px) {
    div {
      width: calc(100% / 2 - 1.5em);
    }
  }

  @media only screen and (min-width: 992px) {
    div {
      width: calc(100% / 3 - 1.5em);
    }
  }

  @media only screen and (min-width: 1200px) {
    div {
      width: calc(100% / 5 - 1.5em);
    }
  }
</style>
