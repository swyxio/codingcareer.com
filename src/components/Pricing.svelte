<script>
  import { onMount } from "svelte";
  import GoldTick from './GoldTick.svelte'
  let affiliateCode = "";
  let couponCode;
  $: console.log({ affiliateCode });
  onMount(() => {
    couponCode = new URLSearchParams(window.location.search).get("c");
    couponCode = couponCode ? `coupon=${couponCode}` : undefined
    affiliateCode = new URLSearchParams(window.location.search).get("a");
    affiliateCode = {
      "gergely": "uguka",
      "erik": "354p7",
      "sebastien": "gozhi",
    }[affiliateCode] || affiliateCode
    if (!affiliateCode) {
      // try to restore from localstorage
      affiliateCode = window.localStorage.getItem('swyxAffiliateCode')
    }
    affiliateCode = affiliateCode ? `/${affiliateCode}` : "";
  });
</script>

<div id="buy" class="mt-16 bg-yellow-500 py-12 lg:mt-20">
  <div class="relative z-0">
    <h2
      class="text-4xl leading-10 font-display font-semibold text-gray-900
      md:text-5xl md:leading-none text-center">
      Pricing
    </h2>
    <h3
      class="text-center mt-3 text-base font-bold text-black sm:mt-5 sm:text-xl
      lg:text-lg xl:text-xl bg-white">
      25% of Book Sales donated to<a
        class="pl-1 underline"
        href="https://www.freecodecamp.org/news/freecodecamp-servers-update-october-2019/"
        target="_blank"
        rel="noreferrer">
      support FreeCodeCamp
      </a>! Thanks to you we have donated $7500 so far!
    </h3>
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative lg:grid lg:grid-cols-10 my-10">
        <div
          class="max-w-lg mx-auto lg:max-w-none lg:mx-0 lg:col-start-4
          lg:col-end-8 lg:row-start-1 lg:row-end-4">
          <div class="relative z-10 rounded-lg shadow-xl">
            <div>
              <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
                <div>
                  <p
                    class="text-center text-lg leading-7 font-semibold
                    font-display text-yellow-600 uppercase tracking-widest">
                    For Future Makers
                  </p>
                  <h2
                    class="mt-2 text-center text-3xl leading-9 font-semibold
                    font-display text-gray-900 sm:-mx-6">
                    The Creator Package
                  </h2>
                  <div
                    class="mt-4 flex items-center justify-center font-display">
                    <!-- <span
                      class="-ml-8 text-right text-2xl leading-8 font-semibold
                      text-gray-400 tracking-wide line-through sm:text-3xl
                      sm:leading-9">
                      $249
                    </span> -->
                    <span
                      class="-ml-6 px-3 flex items-start text-6xl leading-none
                      tracking-tight font-medium text-gray-900 sm:text-7xl">
                      <span class="mt-2 mr-1 text-4xl leading-none sm:text-5xl">
                        $
                      </span>
                      <span>249</span>
                    </span>
                    <!-- <span
                      class="text-2xl leading-8 font-semibold text-gray-400
                      tracking-wide sm:text-3xl sm:leading-9">
                      USD
                    </span> -->
                  </div>
                </div>
              </div>
              <div
                class="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6
                bg-gray-100 sm:px-10 sm:py-10">
                <ul>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <GoldTick />
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      Everything in <span class="font-bold">The Coding Career Community Package</span>!
                      <em>The Coding Career Handbook, Audio Book + Bibliography, Updates + All future editions, Coding Career Community</em></p>
                    <!-- <ul class="block flex-1"> -->
                    <!-- </ul> -->
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <GoldTick />
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      Special
                      <span class="font-bold">
                        Creators' Channel
                      </span> in Community Discord <em>with regular updates and discussions</em>
                    </p>
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <GoldTick />
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      Get more out of every chapter with
                      <span class="font-bold">
                        3+ hours of Author Commentary
                      </span> in high-quality recorded video
                    </p>
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <GoldTick />
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      <span class="font-bold">
                        10 Hours of Recorded Livestreams
                      </span> demonstrating Mise en Place Writing
                    </p>
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <GoldTick />
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black ">
                      <span class="font-bold">Upcoming Live Workshops</span>
                      (<a
                        class="text-blue-500 hover:underline"
                        href="/#workshops">
                        Learn more</a>)
                    </p>
                  </li>
                </ul>
                <div class="mt-10">
                  <div class="rounded-lg shadow-lg">
                    <a
                      href={`https://swyx.podia.com/coding-career-creator-package${affiliateCode}?${couponCode || ""}&via=shawn-wang`}
                      data-podia-embed={affiliateCode ? undefined : 'link'}
                      data-coupon={couponCode}
                      class="block w-full text-center rounded-lg bg-yellow-500
                      px-6 py-4 text-xl leading-6 font-semibold font-display
                      text-black hover:bg-gray-700 focus:outline-none
                      focus:shadow-outline transition ease-in-out duration-150">
                      Find Your Tribe
                    </a>
                  </div>
                  <p
                    class="mt-6 text-center text-base leading-6 font-medium
                    text-gray-900">
                    No Credit Card?
                    <a
                      class="text-black underline font-semibold hover:opacity-75"
                      href="https://gumroad.com/products/bAZJq">
                      Use Paypal ↗️
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-6 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-1
          lg:col-end-4 lg:row-start-2 lg:row-end-3">
          <div
            class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden
            lg:rounded-none lg:rounded-l-lg">
            <div class="flex-1 flex flex-col">
              <div class="bg-white px-6 pt-12 pb-10">
                <div>
                  <p
                    class="text-center text-md leading-7 font-semibold
                    font-display text-yellow-600 uppercase">
                    Best Value
                  </p>
                  <h2
                    class="mt-2 text-center text-3xl leading-9 font-semibold
                    font-display text-gray-900">
                    The Community Package
                  </h2>
                  <div
                    class="mt-4 flex items-center justify-center font-display">
                    <!-- <span
                      class="-ml-8 text-right text-2xl leading-8 font-semibold
                      text-gray-400 tracking-wide line-through sm:text-3xl
                      sm:leading-9">
                      $99
                    </span> -->
                    <span
                      class="-ml-6 px-3 flex items-start text-6xl leading-none
                      tracking-tight font-medium text-gray-900 sm:text-7xl">
                      <span class="mt-2 mr-1 text-4xl leading-none sm:text-5xl">
                        $
                      </span>
                      <span>99</span>
                    </span>
                    <!-- <span
                      class="text-2xl leading-8 font-semibold text-gray-400
                      tracking-wide sm:text-3xl sm:leading-9">
                      USD
                    </span> -->
                  </div>
                </div>
              </div>
              <div
                class="flex-1 flex flex-col justify-between border-t-2
                border-gray-100 p-6 bg-gray-100 sm:p-10 lg:p-6 xl:p-10">
                <ul>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <GoldTick />
                    </div>
                    <p class="ml-3 text-base font-bold leading-6 text-black">
                      The Coding Career Handbook
                    </p>
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <GoldTick />
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      <span class="font-bold">Audio book + Bibliography</span> for easier reading
                      (<a class="text-blue-500 hover:underline" href="/#files">
                        Learn more</a>)
                    </p>
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <GoldTick />
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      <span class="font-bold">
                        Updates + All future editions
                      </span>
                    </p>
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <GoldTick />
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      Lifetime Access to
                      <span class="font-bold">Coding Career Community</span>
                      (<a class="text-blue-500 hover:underline" href="/#community">
                        Learn more</a>)
                    </p>
                  </li>
                </ul>
                <div class="mt-8">
                  <div class="rounded-lg shadow-md">
                    <a
                      class="block w-full text-center rounded-lg bg-white px-6
                      py-3 text-base leading-6 font-semibold font-display
                      text-black hover:text-yellow-600 focus:outline-none
                      focus:shadow-outline transition ease-in-out duration-150"
                      href={`https://swyx.podia.com/coding-career-community-package${affiliateCode}?${couponCode || ""}&via=shawn-wang`}
                      data-podia-embed={affiliateCode ? undefined : 'link'}
                      data-coupon={couponCode}
                      Join 700+ Developers
                    </a>
                  </div>
                </div>
                
                  <p
                    class="mt-6 text-center text-base leading-6 font-medium
                    text-gray-900">
                    <a
                      class="text-black underline font-semibold hover:opacity-75"
                      href="/#team-pricing">
                      View team pricing
                    </a>
                  </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-6 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-8
          lg:col-end-11 lg:row-start-2 lg:row-end-3">
          <div
            class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden
            lg:rounded-none lg:rounded-r-lg">
            <div class="flex-1 flex flex-col">
              <div class="bg-white px-6 pt-12 pb-10">
                <div>
                  <h2
                    class="mt-2 text-center text-3xl leading-9 font-semibold
                    font-display text-gray-900">
                    Book Only
                  </h2>
                  <div
                    class="mt-4 flex items-center justify-center font-display">
                    <!-- <span
                      class="-ml-8 text-right text-2xl leading-8 font-semibold
                      text-gray-400 tracking-wide line-through sm:text-3xl
                      sm:leading-9">
                      $59
                    </span> -->
                    <span
                      class="-ml-6 px-3 flex items-start text-6xl leading-none
                      tracking-tight font-medium text-gray-900 sm:text-7xl">
                      <span class="mt-2 mr-1 text-4xl leading-none sm:text-5xl">
                        $
                      </span>
                      <span>59</span>
                    </span>
                    <!-- <span
                      class="text-2xl leading-8 font-semibold text-gray-400
                      tracking-wide sm:text-3xl sm:leading-9">
                      USD
                    </span> -->
                  </div>
                </div>
              </div>
              <div
                class="flex-1 flex flex-col justify-between border-t-2
                border-gray-100 p-6 bg-gray-100 sm:p-10 lg:p-6 xl:p-10">
                <ul>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <GoldTick />
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      450+ pages of Career Guides, Principles, Strategies, and
                      Tactics
                    </p>
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <GoldTick />
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      PDF + EPUB + MOBI Versions
                    </p>
                  </li>

                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <GoldTick />
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      Updates to 2020 edition
                    </p>
                  </li>
                </ul>
                <div class="mt-8">
                  <div class="rounded-lg shadow-md">
                    <a
                      class="block w-full text-center rounded-lg bg-white px-6
                      py-3 text-base leading-6 font-semibold font-display
                      text-black hover:text-yellow-600 focus:outline-none
                      focus:shadow-outline transition ease-in-out duration-150"
                      href={`https://swyx.podia.com/coding-career-handbook${affiliateCode}?${couponCode || ""}&via=shawn-wang`}
                      data-podia-embed={affiliateCode ? undefined : 'link'}
                      data-coupon={couponCode}
                      Buy Now
                    </a>
                  </div>
                  
                  <p
                    class="mt-6 text-center text-base leading-6 font-medium
                    text-gray-900">
                    <a
                      class="text-black underline font-semibold hover:opacity-75"
                      href="/#team-pricing">
                      View team pricing
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
