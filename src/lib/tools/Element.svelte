<script>
  /** @type {string} The description of the tool */
  export let description;

  /** @type {string} The URL to the tool */
  export let link;

  export let img = 'https://www.w3schools.com/html/pic_trulli.jpg';

  const openLink = () => {
    window.open(link, '_blank');
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div title={description} class="wrapper" on:click|preventDefault={openLink}>
  <div class="inner">
    <a href={link} target="_blank" rel="noreferrer">
      <img
        src={img.split('://')[0] == 'https' ? img : '/tools/' + img}
        alt={description}
        class="thumbnail" />
    </a>
  </div>
  <div>
    <a href={link} target="_blank" rel="noreferrer">
      <img src={'https://www.google.com/s2/favicons?domain=' + link} alt={description} />
      <slot />
    </a>
  </div>
</div>

<style>
  a {
    color: #fff;
    text-decoration: none;
  }

  div.wrapper {
    background-color: #272727;
    border-radius: 5px;
    margin: 0.25em;
    width: calc(100% - 0.5em);
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  div.inner {
    width: 95%;
    margin-top: 0.5em;
  }

  img.thumbnail {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 5px;
  }

  @media only screen and (min-width: 600px) {
    div.wrapper {
      width: calc(100% / 2 - 0.5em);
    }
  }

  @media only screen and (min-width: 768px) {
    div.wrapper {
      width: calc(100% / 2 - 0.5em);
    }
  }

  @media only screen and (min-width: 992px) {
    div.wrapper {
      width: calc(100% / 3 - 0.5em);
    }
  }

  @media only screen and (min-width: 1200px) {
    div.wrapper {
      width: calc(100% / 5 - 0.5em);
    }
  }
</style>
