<script>
  import ToolElement from '$lib/tools/Element.svelte';
  import ToolSection from '$lib/tools/Section.svelte';
</script>

<svelte:head>
  <title>Tools | Keyvan Atashfaraz</title>
  <meta name="author" content="Keyvan Atashfaraz" />
  <meta name="description" content="Tools loved by Keyvan" />
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

<ToolSection title="AI">
  <ToolElement
    description="An AI which communicates over a chat"
    link="https://chat.openai.com/"
    img="chatgpt.jpg">
    ChatGPT
  </ToolElement>
  <ToolElement
    description="An AI which creates cooking recipes"
    link="http://chefgpt.xyz/"
    img="chefgpt.webp">
    ChefGPT
  </ToolElement>
</ToolSection>

<ToolSection title="Business Generators">
  <ToolElement
    description="Generate a business logo"
    link="https://brandmark.io/"
    img="brandmark.png">
    Brandmark
  </ToolElement>
  <ToolElement
    description="Generate a business name"
    link="https://namelix.com/app/"
    img="namelix.jpg">
    NameLix
  </ToolElement>
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
