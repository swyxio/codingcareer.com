<script>
  import Hero from "../components/Hero.svelte";
  import Intro from "../components/Intro.svx";
  import WhatsInside from "../components/WhatsInside.svx";
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

  let y = 0;
  let activeNav = "Home";

  import { onMount } from "svelte";
  onMount(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.55,
    };
    let callback = (entries, observer) => {
      document
        .querySelectorAll(".menulink")
        .forEach((x) => x.classList.remove("menuactive"));
      entries.forEach((entry) => {
        // Are we in viewport?
        if (entry.intersectionRatio > 0) {
          let tgt = document.getElementById(`menu-${entry.target.id}`);
          tgt.classList.add("menuactive");
        }
      });
    };
    let observer = new IntersectionObserver(callback, options);
    document.querySelectorAll(".menuitem").forEach((x) => observer.observe(x));
  });
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
  nav {
    border-top: 1px solid gold;
    border-bottom: 1px solid gold;
    padding: 1em;
    top: 0;
    position: sticky;
    z-index: 999;
    background: papayawhip;
  }
  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    max-width: 70ch;
    margin: 0 auto;
    padding: 0;
  }
  :global(.menuactive) {
    border-bottom: 2px solid gold;
    font-weight: bold;
  }
</style>

<svelte:window bind:scrollY={y} />
<svelte:head>
  <title>The Coding Career Handbook</title>
</svelte:head>

<!-- class="row site" -->
<main class:darkMode={siteTheme === '🦆'} id="top">
  <Hero />
  <nav class="mb-5">
    <ul>
      <li>
        <a href="#top">Back to Top</a>
      </li>
      <li class="menulink" id="menu-missing-manual">
        <a href="#missing-manual">Handbook</a>
      </li>
      <li class="menulink" id="menu-community">
        <a href="#community">Community</a>
      </li>
      <li class="menulink" id="menu-workshops">
        <a href="#workshops">Workshops</a>
      </li>
      <li class="menulink" id="menu-packages">
        <a href="#packages">Packages</a>
      </li>
    </ul>
  </nav>
  <Intro />
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
