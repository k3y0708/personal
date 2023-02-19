<script>
  import { getActive, mobileSetActive, setActive, toggleMenu } from '$lib/navbar';
  import { onMount } from 'svelte';

  onMount(() => {
    setActive(getActive(window.location.pathname));
    window.onresize = () => {
      // @ts-ignore
      document.getElementById('header-placeholder').style.height =
        // @ts-ignore
        document.querySelector('header').offsetHeight + 'px';
    };
  });
</script>

<header>
  <a href="/" on:click={() => setActive('personal')}>
    <div id="personal" class="header-tile">Keyvan Atashfaraz</div>
  </a>
  <a href="/tools" on:click={() => setActive('tools')}>
    <div id="tools" class="header-tile">Tools</div>
  </a>
  <a href="https://docs.atashfaraz.de" target="_blank" rel="noreferrer">
    <div id="docs" class="header-tile">
      Docs
      <svg width="24" height="24" viewBox="0 0 24 24" class="newtab">
        <path
          d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
      </svg>
    </div>
  </a>
  <a href="/other" on:click={() => setActive('other')}>
    <div id="other" class="header-tile">Other</div>
  </a>
</header>
<div id="header-placeholder" />

<span style="display: none;" class="selected" />
<!-- This is a hack to include the selected style -->

<div class="bottom-menu bottom-menu-hidden">
  <a href="/" on:click={() => mobileSetActive('personal')}>
    <div id="personal">Keyvan Atashfaraz</div>
  </a>
  <a href="/tools" on:click={() => mobileSetActive('tools')}>
    <div id="tools">Tools</div>
  </a>
  <a href="https://docs.atashfaraz.de" target="_blank" rel="noreferrer">
    <div id="other">
      Docs
      <svg width="24" height="24" viewBox="0 0 24 24" class="newtab">
        <path
          d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
      </svg>
    </div>
  </a>
  <a href="/other" on:click={() => mobileSetActive('other')}>
    <div id="other">Other</div>
  </a>
</div>
<navbar>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={toggleMenu}>
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

  header a {
    height: 1fr;
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
    height: calc(100% - 0.5em);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a,
  a:focus,
  a:active {
    color: #fff;
    text-decoration: none;
  }

  .bottom-menu {
    display: none;
    z-index: 20;
  }

  svg.newtab {
    fill: #fff;
    width: 0.5em;
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

    .bottom-menu {
      display: block;
      position: fixed;
      bottom: 1.5em;
      width: 100%;
      background-color: #00adb5;
      text-align: center;
      padding: 0.25em;
      font-size: 1.5em;
      cursor: pointer;
      height: 6em;
      transition: 0.5s;
    }

    .bottom-menu-hidden {
      height: 0;
      padding: 0;
    }
  }
</style>
