<script>
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import Header from '$lib/header/Header.svelte';
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
