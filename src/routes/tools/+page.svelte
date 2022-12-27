<script>
  import ToolElement from '$lib/tools/Element.svelte';
  import ToolSection from '$lib/tools/Section.svelte';
</script>

<svelte:head>
  <title>Tools</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<ToolSection title="FrontEnd Design">
  <ToolElement
    description="Create a custom divider"
    link="https://www.shapedivider.app/"
    img="shape-divider.png">
    Page Divider</ToolElement>
  <ToolElement description="Create a SVG shape" link="https://haikei.app/" img="haikei.png">
    Random SVG</ToolElement>
  <ToolElement description="Find a color palette" link="https://colorhunt.co/" img="colorhunt.png">
    Color Palettes</ToolElement>
</ToolSection>

<ToolSection title="Dev Tools">
  <ToolElement description="Test a regex" link="https://regex101.com/" img="regex.svg">
    Regex
  </ToolElement>
  <ToolElement description="Decode a JWT" link="https://jwt.io/" img="jwt.png">JWT</ToolElement>
</ToolSection>

<ToolSection>
  <ToolElement
    description="Create a custom profile picture"
    link="https://pfpmaker.com/"
    img="pfpmaker.png">
    PfpMaker</ToolElement>
  <ToolElement
    description="Find a unused username"
    link="https://www.handlefinder.com/"
    img="HandleFinder.jpg">
    Handlefinder</ToolElement>
</ToolSection>

<style>
</style>
