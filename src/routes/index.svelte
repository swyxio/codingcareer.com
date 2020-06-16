<script>
  import Hero from "../components/Hero.svelte";
  import WhatsInside from "../components/WhatsInside.svelte";
  import WhoFor from "../components/WhoFor.svelte";
  import Footer from "../components/Footer.svx";
  import FreePreview from "../components/FreePreview.svelte";
  import Reviews from "../components/Reviews.svelte";
  import AboutMe from "../components/AboutMe.svelte";
  // import Why from "../components/Why.svx";
  // import PullQuote from "../components/PullQuote.svelte";
  // import WhatsInside from "../components/WhatsInside.svelte";
  // import PullQuote2 from "../components/PullQuote2.svelte";
  // import BuyNow from "../components/BuyNow.svelte";
  // import FAQ from "../components/FAQ.svelte";

  let showdeal = false;
  const flipdeal = () => (showdeal = !showdeal);

  let siteTheme = "light";
  const toggleTheme = () =>
    (siteTheme = siteTheme === "light" ? "🦆" : "light");
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
  main {
    /* background-color: #0078d4; */
    /* background-image: url(http://www.transparenttextures.com/patterns/foggy-birds.png); */
    /* background-image: url(/duck-bg-pattern.png); */
    position: relative;
  }
  main::after {
    content: "";
    background-image: url(/duck-bg-pattern.png);
    background-repeat: round;
    opacity: 0.05;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
</style>

<svelte:head>
  <title>Cracking the Coding Career</title>
</svelte:head>

<!-- class="row site" -->
<main class:darkMode={siteTheme === '🦆'}>
  <Hero />
  <WhatsInside />
  <WhoFor />
  <FreePreview />
  <Reviews />
  <AboutMe />
</main>

<!-- <Why />
<PullQuote />
<WhatsInside />
<PullQuote />
<BuyNow />
<PullQuote2 />
<FAQ /> -->

<Footer {siteTheme} {toggleTheme} />
