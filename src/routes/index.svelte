<script>
  import AnnounceBar from "../components/AnnounceBar.svelte";
  import Hero from "../components/Hero.svelte";
  import WhatsInside from "../components/WhatsInside.svelte";
  import Reviews from "../components/Reviews.svelte";
  import AboutAuthor from "../components/AboutAuthor.svelte";
  import FAQ from "../components/FAQ.svelte";
</script>

<div class="flex flex-col min-h-screen font-sans text-gray-900">
  <main>
    <div class="relative bg-gray-100 overflow-hidden">
      <AnnounceBar />
      <Hero />
      <WhatsInside />
      <Reviews />
      <AboutAuthor />
      <FAQ />
    </div>
  </main>
</div>
