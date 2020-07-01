<script>
  import Hero from "../components/Hero.svelte";
  // import Intro from "../components/Intro.svx";
  import MediaLinks from "../components/MediaLinks.svelte";
  import Nav from "../components/Nav.svelte";
  import Packages from "../components/Packages.svx";
  import TOC from "../components/TOC.svelte";
  import FAQ from "../components/FAQ.svx";
  import Footer from "../components/Footer.svx";
  import FreePreview from "../components/FreePreview.svelte";
  import Reviews from "../components/Reviews.svelte";
  import AboutMe from "../components/AboutMe.svelte";
  // import Why from "../components/Why.svx";
  // import PullQuote from "../components/PullQuote.svelte";
  // import Packages from "../components/Packages.svelte";
  // import PullQuote2 from "../components/PullQuote2.svelte";
  // import BuyNow from "../components/BuyNow.svelte";
  // import FAQ from "../components/FAQ.svelte";

  let showdeal = false;
  const flipdeal = () => (showdeal = !showdeal);

  let y = 0;

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
        .forEach((x) => x && x.classList.remove("menuactive"));
      entries.forEach((entry) => {
        // Are we in viewport?
        if (entry.intersectionRatio > 0) {
          let tgt = document.getElementById(`menu-${entry.target.id}`);
          tgt && tgt.classList.add("menuactive");
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
  main {
    position: relative;
  }
  main::after {
    content: "";
    background-image: url(/codingcareer/duck-bg-pattern.png);
    background-repeat: round;
    opacity: 0.05;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
  :global(.menuactive) {
    border-bottom: 2px solid gold;
    font-weight: bold;
  }
</style>

<svelte:window bind:scrollY={y} />
<!-- https://webcode.tools/open-graph-generator/book -->
<svelte:head>
  <title>The Coding Career Handbook</title>
  <meta property="og:type" content="books.book" />
  <meta property="og:title" content="The Coding Career Handbook" />
  <meta property="og:site_name" content="Learn in Public" />
  <meta property="og:url" content="https://www.learninpublic.org" />
  <meta
    property="og:description"
    content="450+ pages of the best advice I have ever written, with Career
    Guides, Principles, Strategies, and Tactics for the Junior-to-Senior
    developer." />
  <meta
    property="og:image"
    content="https://www.learninpublic.org/codingcareer/ogimage.png" />
  <meta property="books:rating:value" content="5" />
  <meta property="books:rating:scale" content="5" />
  <meta property="books:author" content="https://swyx.io" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:label1" content="Followers" />
  <meta name="twitter:data1" content="1800+" />
  <meta name="twitter:label2" content="Reviews" />
  <meta name="twitter:data2" content="⭐⭐⭐⭐⭐" />
</svelte:head>

<main id="top">
  <Hero />
  <MediaLinks />
  <Nav />
  <TOC />
  <Packages />
  <!-- <FreePreview /> -->
  <Reviews />
  <AboutMe />
  <FAQ />
</main>

<!-- <Why />
<PullQuote />
<WhatsInside />
<PullQuote />
<BuyNow />
<PullQuote2 />
<FAQ /> -->

<Footer />
