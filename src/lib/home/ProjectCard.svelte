<script>
  /**@type {string}*/
  export let name;

  /**@type {string}*/
  export let repo;

  /**@type {string}*/
  export let description = 'This is one of my projects (but without a description 😁).';

  const toggleLineClamp = () => {
    const projectDescription = document.getElementById('projectDescription' + name);
    if (projectDescription?.classList.contains('line-clamp')) {
      projectDescription.classList.remove('line-clamp');
    } else {
      projectDescription?.classList.add('line-clamp');
    }
  };
</script>

<div>
  <h3>{name}</h3>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <p
    id={'projectDescription' + name}
    class="line-clamp"
    title={description}
    on:click={toggleLineClamp}>
    {description}
  </p>
  <a href={repo} target="_blank" rel="noreferrer">
    View Repo
    <svg width="0.7em" height="0.7em" viewBox="0 0 24 24" fill="white">
      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  </a>
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

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 6.8em;
  }

  .line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    line-clamp: 5;
    -webkit-box-orient: vertical;
    height: 6.8em;
  }

  h3 {
    margin: 0;
  }

  a {
    color: #fff;
    text-decoration: none;
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
