<script>
  import AnnounceBar from "../components/AnnounceBar.svelte";
  import Hero from "../components/Hero.svelte";
  import WhatsInside from "../components/WhatsInside.svelte";
  import Reviews from "../components/Reviews.svelte";
  import AboutAuthor from "../components/AboutAuthor.svelte";
  import Pricing from "../components/Pricing.svelte";
  import FAQ from "../components/FAQ.svelte";
  import Footer from "../components/Footer.svelte";
</script>

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
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:label1" content="Followers" />
  <meta name="twitter:data1" content="1900+" />
  <meta name="twitter:label2" content="Reviews" />
  <meta name="twitter:data2" content="⭐⭐⭐⭐⭐" />
</svelte:head>

<div class="flex flex-col min-h-screen font-sans text-gray-900">
  <main>
    <div class="relative bg-gray-100 overflow-hidden">
      <AnnounceBar />
      <Hero />
      <WhatsInside />
      <Reviews />
      <Pricing />
      <AboutAuthor />
      <FAQ />
      <Footer />
    </div>
  </main>
</div>
