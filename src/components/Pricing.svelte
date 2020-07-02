
<script>
  import {onMount} from 'svelte'
  let affiliateCode = ''
  onMount(() => {
    affiliateCode = new URLSearchParams(window.location.search).get(
      "a"
    );
    affiliateCode = affiliateCode ? `/${affiliateCode}`: ''
  })
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
      lg:text-lg xl:text-xl">
      Pick your Coding Career package
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
                    Best Value
                  </p>
                  <h2
                    class="mt-2 text-center text-3xl leading-9 font-semibold
                    font-display text-gray-900 sm:-mx-6">
                    The Creator Package
                  </h2>
                  <div
                    class="mt-4 flex items-center justify-center font-display">
                    <span
                      class="-ml-8 text-right text-2xl leading-8 font-semibold
                      text-gray-400 tracking-wide line-through sm:text-3xl
                      sm:leading-9">
                      $249
                    </span>
                    <span
                      class="px-3 flex items-start text-6xl leading-none
                      tracking-tight font-medium text-gray-900 sm:text-7xl">
                      <span class="mt-2 mr-1 text-4xl leading-none sm:text-5xl">
                        $
                      </span>
                      <span>199</span>
                    </span>
                    <span
                      class="text-2xl leading-8 font-semibold text-gray-400
                      tracking-wide sm:text-3xl sm:leading-9">
                      USD
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6
                bg-gray-100 sm:px-10 sm:py-10">
                <ul>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6 text-yellow-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      450+ pages of Career Guides, Principles, Strategies, and
                      Tactics
                    </p>
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6 text-yellow-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      Lifetime access to book updates and Coding Career
                      Community
                    </p>
                  </li>
                  <!-- <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6 text-yellow-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      Lifetime access
                    </p>
                  </li> -->
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6 text-yellow-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      PDF, EPUB, MOBI versions + Audio Book + Bibliography with
                      <span class="font-bold">
                        2 hours of Author Commentary
                      </span>
                    </p>
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6 text-yellow-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      <span class="font-bold">
                        10 Hours of Behind The Scenes Recorded Livestreams
                      </span>
                    </p>
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6 text-yellow-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black ">
                      <span class="font-bold">Upcoming Live Workshops</span>
                      (
                      <a
                        class="text-blue-500 hover:underline"
                        href="/#workshops">
                        Learn more
                      </a>
                      )
                    </p>
                  </li>
                </ul>
                <div class="mt-10">
                  <div class="rounded-lg shadow-lg">
                    <a
                      href={`https://swyx.podia.com/coding-career-creator-package${affiliateCode}?coupon=LAUNCHSALE50&via=shawn-wang`}
                      data-podia-embed={affiliateCode ? undefined : "link"}
                      data-coupon="LAUNCHSALE50"
                      class="block w-full text-center rounded-lg bg-yellow-500
                      px-6 py-4 text-xl leading-6 font-semibold font-display
                      text-black hover:bg-gray-700 focus:outline-none
                      focus:shadow-outline transition ease-in-out duration-150">
                      Buy Now
                    </a>
                  </div>
                  <p
                    class="mt-6 text-center text-base leading-6 font-medium
                    text-gray-900">
                    Buying for your team?
                    <a
                      class="text-black underline font-semibold hover:opacity-75"
                      href="/#team-pricing">
                      View team pricing →
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
                  <h2
                    class="mt-2 text-center text-3xl leading-9 font-semibold
                    font-display text-gray-900">
                    The Community Package
                  </h2>
                  <div
                    class="mt-4 flex items-center justify-center font-display">
                    <span
                      class="-ml-8 text-right text-2xl leading-8 font-semibold
                      text-gray-400 tracking-wide line-through sm:text-3xl
                      sm:leading-9">
                      $99
                    </span>
                    <span
                      class="px-3 flex items-start text-6xl leading-none
                      tracking-tight font-medium text-gray-900 sm:text-7xl">
                      <span class="mt-2 mr-1 text-4xl leading-none sm:text-5xl">
                        $
                      </span>
                      <span>79</span>
                    </span>
                    <span
                      class="text-2xl leading-8 font-semibold text-gray-400
                      tracking-wide sm:text-3xl sm:leading-9">
                      USD
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="flex-1 flex flex-col justify-between border-t-2
                border-gray-100 p-6 bg-gray-100 sm:p-10 lg:p-6 xl:p-10">
                <ul>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6 text-yellow-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      450+ pages of Career Guides, Principles, Strategies, and
                      Tactics
                    </p>
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6 text-yellow-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      PDF, EPUB, MOBI versions +
                      <span class="font-bold">Audio book + Bibliography</span>
                      (
                      <a class="text-blue-500 hover:underline" href="/#files">
                        Learn more
                      </a>
                      )
                    </p>
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6 text-yellow-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      <span class="font-bold">
                        Lifetime access to book updates
                      </span>
                    </p>
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6 text-yellow-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      Dedicated
                      <span class="font-bold">Coding Career Community</span>
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
                      href={`https://swyx.podia.com/coding-career-community-package${affiliateCode}?coupon=LAUNCHSALE20&via=shawn-wang`}
                      data-podia-embed={affiliateCode ? undefined : "link"}
                      data-coupon="LAUNCHSALE20">
                      Buy Now
                    </a>
                  </div>
                </div>
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
                    <span
                      class="-ml-8 text-right text-2xl leading-8 font-semibold
                      text-gray-400 tracking-wide line-through sm:text-3xl
                      sm:leading-9">
                      $59
                    </span>
                    <span
                      class="px-3 flex items-start text-6xl leading-none
                      tracking-tight font-medium text-gray-900 sm:text-7xl">
                      <span class="mt-2 mr-1 text-4xl leading-none sm:text-5xl">
                        $
                      </span>
                      <span>39</span>
                    </span>
                    <span
                      class="text-2xl leading-8 font-semibold text-gray-400
                      tracking-wide sm:text-3xl sm:leading-9">
                      USD
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="flex-1 flex flex-col justify-between border-t-2
                border-gray-100 p-6 bg-gray-100 sm:p-10 lg:p-6 xl:p-10">
                <ul>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6 text-yellow-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      450+ pages of Career Guides, Principles, Strategies, and
                      Tactics
                    </p>
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6 text-yellow-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-black">
                      PDF + EPUB + MOBI Versions
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
                      href={`https://swyx.podia.com/coding-career-handbook${affiliateCode}?coupon=LAUNCHSALE20&via=shawn-wang`}
                      data-podia-embed={affiliateCode ? undefined : "link"}
                      data-coupon="LAUNCHSALE20">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
