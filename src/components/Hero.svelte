<script>
  let search = "";
  import { onMount } from "svelte";
  onMount(() => {
    search = window.location.search;
  });
  import AsSeenOn from "./_AsSeenOnImg.svelte";
</script>

<style>
  .underline-effect {
    background-image: linear-gradient(120deg, #f6e05e 0%, #fffff0 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
  }
  .underline-effect:hover {
    background-size: 100% 88%;
  }
  .book-cover {
    width: 150%;
    margin-left: -25%;
    max-width: 150%;
  }
</style>

<div
  class="mt-24 mx-auto pb-16 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20
  xl:mt-24">
  <div class="lg:grid lg:grid-cols-12 lg:gap-8">
    <div
      class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-8 lg:mx-auto
      lg:text-left lg:mt-16">
      <div
        class="text-sm font-semibold uppercase tracking-wider text-gray-700
        sm:text-base lg:text-sm xl:text-base">
        Available Now
      </div>
      <!-- <h1
        class="capitalize mt-1 text-4xl tracking-tight leading-10 font-extrabold
        text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
        Learn how to build
        <br class="hidden md:inline" />
        <span class="underline-effect">an exceptional</span>
        career
      </h1> -->
      <h1
        class="capitalize mt-1 text-4xl tracking-tight leading-10 font-extrabold
        text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
        <span class="underline-effect">The Missing Manual</span>
        <br class="hidden md:inline" />
        <span class="md:text-5xl">for Junior to Senior Devs</span>
      </h1>
      <!-- <h2
        class="mt-3 text-base text-black sm:mt-5 sm:text-xl lg:text-lg
        xl:text-xl">
        You cracked the coding interview.
        <span class="font-na">Now what?</span>
        Time for the
        <span class="font-bold">tacit knowledge</span>
        every developer takes
        <span class="italic">years</span>
        to learn. Build an awesome,
        <span class="italic">sustainable</span>
        career with
        <span class="font-bold">
          the Missing Manual for Junior to Senior Devs
        </span>
        !
      </h2> -->
      <!-- you can use to build an awesome, <span class="italic">sustainable</span> career! -->
      <div class="flex-col sm:flex-row flex justify-center lg:justify-start">
        <a
          class="shadow-md w-full sm:w-1/3 my-5 mr-5 text-center rounded-lg
          bg-yellow-500 px-6 py-4 text-xl leading-6 font-semibold font-display
          text-black hover:bg-yellow-600 focus:outline-none focus:shadow-outline
          transition ease-in-out duration-150 border-black border-2"
          href={`${search}#buy`}>
          Buy Now
        </a>
        <a
          class="shadow-md w-full sm:w-1/3 my-5 text-center rounded-lg
          bg-transparent px-6 py-4 text-xl leading-6 font-semibold font-display
          text-black hover:bg-yellow-500 focus:outline-none focus:shadow-outline
          transition ease-in-out duration-150"
          href={`${search}#learn-more`}>
          See Samples
        </a>

        <!-- <div
          class="text-sm font-semibold uppercase tracking-wider text-gray-700
          sm:text-base lg:text-sm xl:text-base"> -->
        <!-- <a 
          class="sm:w-1/3 my-5 text-center rounded-lg
          bg-transparent px-6 py-4 text-xl leading-6 font-semibold font-display
           text-gray-600 hover:text-black hover:underline"
          href="https://swyx.podia.com/login">Login</a> -->
        <!-- </div> -->
      </div>
      <div>
        <p class="text-lg italic text-gray-900 leading-loose sm:w-5/6 w-full">
          “The book could've been called <span class="font-bold">Hacker News: The Good Parts</span>. All the
          experience-based advice for career success, none of the toxic
          nonsense.”
          <a
            href="https://twitter.com/forrestbrazeal/status/1275846608551317506?s=20"
            aria-label="twitter link"
            target="_blank"
            class="hover:underline hover:text-blue-500"
            rel="noreferrer"> - Forrest Brazeal, AWS Serverless Hero
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="inline w-5 h-5 ml-1">
              <path
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86
                3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20
                0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </a>
        </p>
        <!-- <div class="flex items-center mt-3">
          <img
            class="lazyload h-16 w-16 rounded-full shadow-md"
            data-src="/profiles/forrest.jpg"
            alt="Forrest Brazeal" />
          <div class="flex flex-col ml-2">
            <p class="text-xl font-bold">Forrest Brazeal</p>
            <p class="">AWS Serverless Hero, Cloud Bard at ACloudGuru</p>
          </div>
        </div> -->
      </div>
      <p
        class="mt-3 hidden sm:block text-center md:text-left font-bold text-base
        text-black sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        As Seen On
      </p>
      <div
        class="hidden sm:flex flex-col sm:flex-row mt-5 sm:max-w-lg sm:mx-auto
        sm:text-center lg:text-left lg:mx-0 items-center">
        <!-- <a
          href="https://www.producthunt.com/posts/the-coding-career-handbook?utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-the-coding-career-handbook"
          target="_blank"
          rel="noreferrer">
          <img
            class="max-w-none"
            alt="The Coding Career Handbook - Guides, Principles, Strategies and
            Tactics for Jr to Sr Devs | Product Hunt Embed"
            data-src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=211610&amp;theme=light"
            width="200px"
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=211610&amp;theme=light" />
        </a> -->
        <AsSeenOn
          href="https://podcast.newline.co/episodes/cracking-the-coding-career-with-shawn-wang"
          src="/codingcareer/icon-newline.jpg"
          ariaLabel="Newline Podcast" />
        <AsSeenOn
          href="https://www.softwaresessions.com/episodes/learning-in-public/"
          src="/codingcareer/icon-software-seshs.jpg"
          ariaLabel="Software Sessions Podcast" />
        <AsSeenOn
          src="/codingcareer/icon-prodready.png"
          href="https://www.productionreadypod.com/episodes/marketing-yourself-your-products-by-learning-in-public-w-shawn-wang"
          ariaLabel="Production Ready Podcast" />

        <AsSeenOn
          href="https://www.youtube.com/watch?v=bcca0VCJe9Q"
          src="/codingcareer/icon-react-europe.jpg"
          ariaLabel="React Europe" />

        <AsSeenOn
          href="https://www.youtube.com/watch?v=QFHO2-8fGtM"
          src="/codingcareer/icon-fsa.png"
          ariaLabel="Fullstack Academy" />


        <AsSeenOn
          href="https://aquestionofcode.com/71-how-should-developers-market-themselves-shawn-wang/"
          src="/codingcareer/icon-aqoc.jpg"
          ariaLabel="A Question of Code Podcast" />
        <AsSeenOn
          href="https://www.youtube.com/watch?v=50GKF08jLxo"
          src="/codingcareer/icon-rk.jpg"
          ariaLabel="React Knowledgeable" />
        <AsSeenOn
          href="https://www.youtube.com/watch?v=1ayI9j57VlQ"
          src="/codingcareer/icon-include.png"
          ariaLabel="IncludeJS" />
      </div>
    </div>
    <div
      class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0
      lg:max-w-none lg:mx-0 lg:col-span-4 lg:flex lg:items-center">
      <div class="text-center md:absolute md:top-0 md:right-0">
        <a
          class="text-blue-500 hover:underline"
          href="https://codingcareer.circle.so/">
          Already bought? Log In ↗
        </a>
      </div>
      <div class="relative mx-auto w-full lg:max-w-lg">
        <img
          class="w-full book-cover"
          src="/codingcareer/book-mock-1.png"
          alt="Book cover" />
      </div>
    </div>
  </div>
</div>
