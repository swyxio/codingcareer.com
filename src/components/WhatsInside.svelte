<script>
  import { reviewsIntersected } from '../stores.js';
</script>

<section id="learn-more" class="py-16 bg-white overflow-hidden lg:py-16s">
  <div
    class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
    <h2
      class="text-center mt-1 text-4xl tracking-tight leading-10 font-semibold
      text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-5xl">
      What's in The
      <span>Book</span>
    </h2>
    <div class="max-w-3xl mx-auto">
      <p
        class="text-justify md:text-left max-w-3xl mx-auto mt-6 text-xl leading-7 text-gray-650 italic">
        10 hours of audio. 40 chapters. 450+ pages. 1,400+ links to original sources curated over 3 years. 
        Priceless insights from dozens of developers at the top of their fields. 
        Proven ideas, tested by personal experience, backed by solid theoretical foundations.
      </p>

      <img src="/codingcareer/unused/thisbookotherbooks3.png" alt="This book compared to other books" class="mt-8">

      <div class="flex flex-col md:flex-row md:justify-start mt-8">
        <h3
          class="md:flex-shrink-0 text-center md:text-left text-2xl md:w-44 mb-2 sm:mb-4 md:mb-0 tracking-tight leading-10 font-semibold
          text-gray-900 sm:leading-none sm:text-3xl lg:text-2xl xl:text-2xl">
          Career Guides
        </h3>
        <p
          class="max-w-full text-justify md:text-left text-xl leading-7 text-gray-650">
          Specific advice on <span class="font-bold text-black">every career stage</span> from
          Code Newbie to Junior Dev to Senior Dev, and every transition after: the
          <span class="font-bold text-black">First Job Hunt</span>, going
          <span class="font-bold text-black">from Junior to Senior</span>, and <span class="font-bold text-black">Beyond</span>.
        </p>
      </div>
      <div class="flex flex-col md:flex-row md:justify-start mt-8">
        <h3
          class="md:flex-shrink-0 text-center md:text-left text-2xl md:w-44 mb-2 sm:mb-4 md:mb-0 tracking-tight leading-10 font-semibold
          text-gray-900 sm:leading-none sm:text-3xl lg:text-2xl xl:text-2xl">
          Principles
        </h3>
        <p
          class="max-w-full text-justify md:text-left text-xl leading-7 text-gray-650">
          The <span class="font-bold text-black">best investments</span> are in things that
        <em>don't</em>
        change. We discuss timeless rules for successful default behavior. Learn
        to
        <span class="font-bold text-black">
          grow your network and expertise,
          <em>while</em>
          you learn.</span>
      </p>
      </div>
      <div class="flex flex-col md:flex-row md:justify-start mt-8">
        <h3
          class="md:flex-shrink-0 text-center md:text-left text-2xl md:w-44 mb-2 sm:mb-4 md:mb-0 tracking-tight leading-10 font-semibold
          text-gray-900 sm:leading-none sm:text-3xl lg:text-2xl xl:text-2xl">
          Strategies
        </h3>
        <p
          class="max-w-full text-justify md:text-left text-xl leading-7 text-gray-650">
          Everything to do with making big moves, from
        <span class="font-bold text-black">Betting on Technologies</span>, to
        <span class="font-bold text-black">Career Ladders</span>, to
        <span class="font-bold text-black">Software Business Models</span>. Grow your business and personal impact!
      </p>
      </div>
      <div class="flex flex-col md:flex-row md:justify-start mt-8">
        <h3
          class="md:flex-shrink-0 text-center md:text-left text-2xl md:w-44 mb-2 sm:mb-4 md:mb-0 tracking-tight leading-10 font-semibold
          text-gray-900 sm:leading-none sm:text-3xl lg:text-2xl xl:text-2xl">
          Tactics
        </h3>
        <p
          class="max-w-full text-justify md:text-left text-xl leading-7 text-gray-650">
          Important, self-contained skills that you can repeatedly call on
          throughout your career, from <span class="font-bold text-black">Negotiating</span>
          to
          <span class="font-bold text-black">Side Projects</span>
          to
          <span class="font-bold text-black">Twitter</span>
          to
          <span class="font-bold text-black">Writing</span>.
      </div>
    </div>

    {#if $reviewsIntersected}
      <h3
        class="contents-link text-center text-base font-bold mt-10 md:mt-12 text-3xl lg:text-4xl
        xl:text-5xl">
        View the 
        <a class="text-blue-500 hover:underline" href="./toc">
          Full Table of Contents →
        </a>
      </h3>
    {/if}
  </div>
</section>

<style>
  @keyframes onmount {
    from { opacity: 0; transform: scale(0); }
    to { opacity: 1; transform: scale(1); }
  }

  .contents-link {
    animation: 0.5s ease-in-out 1 onmount;
  }

  @media (prefers-reduced-motion) {
    @keyframes onmount {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .contents-link {
      animation: 1s ease-in-out 1 onmount;
    }
  }
</style>
