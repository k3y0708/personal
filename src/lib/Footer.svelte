<script>
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
  <a href="https://github.com/k3y0708" target="_blank" rel="noreferrer" class="fa fa-github" />
  <a
    href="https://www.instagram.com/k3y0708/"
    target="_blank"
    rel="noreferrer"
    class="fa fa-instagram" />
  <a href="#" target="_blank" class="fa fa-linkedin" />
  <a
    href="https://www.reddit.com/user/k3y0708/"
    target="_blank"
    rel="noreferrer"
    class="fa fa-reddit" />
  <a
    href="https://t.snapchat.com/iucDxUOH"
    target="_blank"
    rel="noreferrer"
    class="fa fa-snapchat-ghost" />
  <a
    href="https://www.xing.com/profile/Keyvan_Atashfaraz"
    target="_blank"
    rel="noreferrer"
    class="fa fa-xing" />
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

  .fa-snapchat-ghost {
    background: #fffc00;
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
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

  footer {
    background-color: #202020;
    color: #fff;
    padding: 1em;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: calc(100% - 2em);
  }

  @media (max-width: 768px) {
    footer {
      bottom: 2.5em;
    }
  }
</style>
