
<script>
  // export let siteTheme
  // export let toggleTheme
  let visits = 'loading'
  import {onMount} from 'svelte'
  onMount(() => {
    let prefix = ''
    if (window.location.hostname === "localhost") prefix = "http://localhost:3333"
    fetch(prefix + '/visits' + window.location.search).then(x => x.json()).then(begindata => {
      // console.log({begindata})
      visits = begindata.visits
    })
  })
  
  $: message = visits === 'loading' ? '' : `You are visitor number ${visits}!`
  $: console.log(message)
</script>
<div class="bg-white">
  <div
    class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
    <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
      <div class="px-5 py-2">
        <a
          href="mailto:swyx@hey.com"
          class="text-base leading-6 text-gray-500 font-semibold hover:text-gray-900">
          Contact
        </a>
      </div>
      <div class="px-5 py-2">
        <a
          href="https://twitter.com/Coding_Career"
          class="text-base leading-6 text-gray-500 font-semibold hover:text-gray-900">
          Twitter
        </a>
      </div>
      <div class="px-5 py-2">
        <a
          href="https://github.com/sw-yx/codingcareer.com"
          class="text-base leading-6 text-gray-500 font-semibold hover:text-gray-900">
          View Source
        </a>
      </div>
    </nav>
    <div class="mt-8">
      <p class="text-center text-base leading-6 text-gray-700">
        © 2020 All rights reserved.
      </p>
    </div>
  </div>
</div>
