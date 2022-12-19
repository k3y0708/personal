<script>
  import { onMount } from 'svelte';

  /**
   * @param {string} activeElement - The id of the active element
   */
  function setActive(activeElement) {
    const headerTiles = document.getElementsByClassName('header-tile');
    for (let i = 0; i < headerTiles.length; i++) {
      headerTiles[i].classList.remove('selected');
    }
    document.getElementById(activeElement)?.classList.add('selected');
  }

  /**
   * @param {string} path
   */
  function getActive(path) {
    if (path === '/') {
      return 'personal';
    }
    if (path === '/tools') {
      return 'tools';
    }
    if (path === '/others') {
      return 'others';
    }
    alert('Invalid path: ' + path);
    return 'personal';
  }

  onMount(() => setActive(getActive(window.location.pathname)));
</script>

<header>
  <a href="/" on:click={() => setActive('personal')}>
    <div id="personal" class="header-tile">Keyvan Atashfaraz</div>
  </a>
  <a href="/tools" on:click={() => setActive('tools')}>
    <div id="tools" class="header-tile">Tools</div>
  </a>
  <a href="/others" on:click={() => setActive('others')}>
    <div id="others" class="header-tile">Anderes</div>
  </a>
  <a href="https://docs.atashfaraz.de" target="_blank" rel="noreferrer">
    <div id="others" class="header-tile">Docs</div>
  </a>
</header>
<div id="header-placeholder" />

<span style="display: none;" class="selected" />
<!-- This is a hack to include the selected style -->

<navbar>
  <div>
    <svg height="0.75em" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="80" width="200" height="20" fill="#fff" />
      <rect y="40" width="200" height="20" fill="#fff" />
      <rect width="200" height="20" fill="#fff" />
    </svg>
  </div>
  <span />
</navbar>

<style>
  #header-placeholder {
    height: 2em;
  }

  navbar {
    display: none;
    bottom: 0;
  }

  header {
    display: flex;
    top: 0;
    justify-content: center;
  }

  header,
  navbar {
    background-color: #00adb5;
    margin: 0;
    flex-direction: row;
    position: fixed;
    width: 100%;
    z-index: 1000;
  }

  navbar span {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  header div,
  navbar div {
    font-size: 1.5em;
    padding: 0.25em;
    width: fit-content;
    cursor: pointer;
  }

  header div:hover,
  navbar div:hover {
    background-color: #009aa2;
  }

  .selected {
    text-decoration: underline;
  }

  .header-tile {
    width: 25vw;
    text-align: center;
  }

  a,
  a:focus,
  a:active {
    color: #fff;
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    header {
      justify-content: center;
    }

    navbar {
      display: flex;
    }

    .header-tile:not(.selected) {
      display: none;
    }

    .header-tile {
      width: 100%;
    }

    .selected {
      text-decoration: none;
    }
  }
</style>
