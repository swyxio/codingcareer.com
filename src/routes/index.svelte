<script>
  import Hero from "../components/Hero.svelte";
  import Footer from "../components/Footer.svx";
  // import Why from "../components/Why.svx";
  // import PullQuote from "../components/PullQuote.svelte";
  // import WhatsInside from "../components/WhatsInside.svelte";
  // import PullQuote2 from "../components/PullQuote2.svelte";
  // import BuyNow from "../components/BuyNow.svelte";
  // import FAQ from "../components/FAQ.svelte";

  let showdeal = false;
  const flipdeal = () => (showdeal = !showdeal);

  let siteTheme = "light";
  const toggleTheme = () => siteTheme = siteTheme === "light" ? "🦆" : "light"
</script>

<style>
  :global(main) {
    --bg-color: #eee;
    --text-color: #41403e;
    --highlight-color: aquamarine;
  }

  :global(.darkMode) {
    --bg-color: #1d1d1d;
    --text-color: #d7d7d7;
    --highlight-color: indigo;
  }
  /* .paper {
    transition: background-color 1s ease;
    background-color: var(--bg-color);
    color: var(--text-color);
    border-color: var(--text-color);
  } */
  /* :global(a, a:visited) {
    color: var(--text-color);
    border-color: var(--text-color);
  }
  :global(.no-border) {
    border: 0
  }  */
</style>

<svelte:head>
  <title>Cracking the Coding Career</title>
</svelte:head>

 <!-- class="row site" -->
<main
 class:darkMode={siteTheme === '🦆'}>
  <Hero />
</main>

<!-- <Why />
<PullQuote />
<WhatsInside />
<PullQuote />
<BuyNow />
<PullQuote2 />
<FAQ /> -->

<!-- <Footer {siteTheme} {toggleTheme} /> -->
