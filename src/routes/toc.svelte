<script>
  import TOC from "../components/TOC.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
  <title>Table of Contents</title>
</svelte:head>


<div class="flex flex-col min-h-screen font-sans text-gray-900">
  <main>
    <div class="relative bg-gray-100 overflow-hidden">
      <TOC />
      <Footer>
      </Footer>
    </div>
  </main>
</div>
