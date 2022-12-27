<script>
  import { onMount } from 'svelte';

  /** @type {string} The title of the tool */
  export let title;

  /** @type {string} The URL to the tool */
  export let link;

  /** @type {number} The size of the tool */
  export let size = 50;
  /** @type {string} The x position of the tool */
  export let x = '0';
  /** @type {string} The x position of the tool */
  export let y = '0';

  /** @type {string} The color of the tool */
  export let color = '#000';

  /** @type {string} The color of the text */
  export let textcolor = '#fff';

  onMount(() => {
    let text = document.getElementById('title' + title);
    let circle = document.getElementById('circle' + title);
    let width = text?.clientWidth;
    // @ts-ignore
    text.style.transform = `translate(-${width / 2}px, 0.5em)`;
    // @ts-ignore
    text.style.fill = textcolor;
    // @ts-ignore
    circle.style.fill = color;
  });

  function openUrl() {
    window.open(link, '_blank');
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<circle id={'circle' + title} cx={x} cy={y} r={size} on:click={openUrl} />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<text id={'title' + title} {x} {y} on:click={openUrl}>{title}</text>

<style>
  text {
    fill: #fff;
    transform: translate(0.5em, 0.5em);
  }

  text,
  circle {
    cursor: pointer;
  }
</style>
