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
</script>

<svelte:head>
  <title>Cracking the Coding Career</title>
</svelte:head>

<div class="sm-0 md-2 col" />
<div class="sm-12 md-8 col">
  <div class="paper">
    <Hero />
  </div>
</div>
<!-- <Why />
<PullQuote />
<WhatsInside />
<PullQuote />
<BuyNow />
<PullQuote2 />
<FAQ /> -->

<Footer />

<!-- floater -->
<!-- <div class="fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
  <div class="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
    <div
      class={'p-2 rounded-lg bg-indigo-600 shadow-lg sm:p-3 ' + (showdeal ? '' : 'inline-flex w-14 md:w-16')}>
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <button
            type="button"
            on:click={flipdeal}
            class="flex p-2 rounded-lg bg-indigo-800">
            <svg
              class="h-6 w-6 text-white"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3
                3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0
                7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988
                3.988 0 01-1.564-.317z" />
            </svg>
          </button>
          {#if showdeal}
            <p class={'ml-3 font-medium text-white h-16 md:h-10 lg:h-4'}>
              <span class="md:hidden">
                Launch Sale! Use LEARNINPUBLIC at checkout for 10% off!
              </span>
              <span class="hidden md:inline">
                We are celebrating our big launch! Use LEARNINPUBLIC at checkout
                for 10% off!
              </span>
            </p>
          {/if}
        </div>
        {#if showdeal}
          <div
            class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0
            sm:w-auto">
            <div class="rounded-md shadow-sm">
              <a
                href="#TODOFIXME"
                class="flex items-center justify-center px-4 py-2 border
                border-transparent text-sm leading-5 font-medium rounded-md
                text-indigo-600 bg-white hover:text-indigo-500
                focus:outline-none focus:shadow-outline transition ease-in-out
                duration-150">
                Buy Now
              </a>
            </div>
          </div>
        {/if}
        {#if showdeal}
          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
            <button
              type="button"
              on:click={flipdeal}
              class="-mr-1 flex p-2 rounded-md hover:bg-indigo-500
              focus:outline-none focus:bg-indigo-500 transition ease-in-out
              duration-150"
              aria-label="Dismiss">
              <svg
                class="h-6 w-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div> -->
