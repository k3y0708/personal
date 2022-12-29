<script>
  import { setActive } from '$lib/navbar';
  import { onMount } from 'svelte';

  onMount(() => {
    // @ts-ignore
    document.querySelector('main').style.marginBottom =
      // @ts-ignore
      document.querySelector('footer').offsetHeight + 'px';
  });
</script>

<!-- svelte-ignore a11y-missing-content -->
<footer>
  <section>
    <a href="https://github.com/k3y0708" target="_blank" rel="noreferrer" class="fa fa-github" />
    <a
      href="https://www.instagram.com/k3y0708/"
      target="_blank"
      rel="noreferrer"
      class="fa fa-instagram" />
    <a
      href="https://www.linkedin.com/in/keyvan-atashfaraz"
      target="_blank"
      rel="noreferrer"
      class="fa fa-linkedin" />
    <a
      href="https://www.reddit.com/user/k3y0708/"
      target="_blank"
      rel="noreferrer"
      class="fa fa-reddit" />
    <a
      href="https://www.xing.com/profile/Keyvan_Atashfaraz"
      target="_blank"
      rel="noreferrer"
      class="fa fa-xing" />
    <a href="mailto:keyvan@atashfaraz.de" class="fa fa-envelope" />
  </section>
  <section>
    <a href="/privacy" on:click={() => setActive('none')}>Privacy</a>
  </section>
</footer>

<style>
  .fa {
    padding: 13px;
    font-size: 20px;
    width: 20px;
    text-align: center;
    text-decoration: none;
    margin: 5px 2px;
    border-radius: 50%;
  }

  .fa:hover {
    opacity: 0.7;
  }

  .fa-linkedin {
    background: #007bb5;
    color: white;
  }

  .fa-instagram {
    background: #125688;
    color: white;
  }

  .fa-reddit {
    background: #ff5700;
    color: white;
  }

  .fa-xing {
    background: #026466;
    color: white;
  }

  .fa-github {
    background: #333;
    color: white;
  }

  .fa-envelope {
    background: #333;
    color: white;
  }

  footer {
    background-color: #202020;
    color: #fff;
    padding: 1em;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: calc(100% - 2em);
  }

  a {
    color: #666;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    footer {
      bottom: 2.5em;
    }
  }
</style>
