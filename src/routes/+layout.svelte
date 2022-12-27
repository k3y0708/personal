<script>
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import Footer from '$lib/Footer.svelte';
  import Header from '$lib/Header.svelte';
  import { webVitals } from '$lib/vitals';
  import '../app.css';
  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId,
    });
  }
</script>

<Header />

<main>
  <slot />
</main>

<div id="navbar-placeholder-mobile" />
<Footer />

<style>
  #navbar-placeholder-mobile {
    display: none;
    height: 2.5em;
  }

  main {
    z-index: 10;
    position: relative;
    background-color: #323232;
    padding: 1em;
    padding-top: 0;
    width: calc(100% - 2em);
  }

  @media (max-width: 768px) {
    #navbar-placeholder-mobile {
      display: block;
    }
  }
</style>
