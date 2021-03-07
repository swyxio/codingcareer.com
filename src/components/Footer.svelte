
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

<div class="bg-blue-500">
  <div class="duck" aria-hidden="true">
    <div class="bob">
      <img src="/duck.svg" alt="" class="w-14 h-14 z-10">
    </div>
  </div>
  <div
    class="max-w-screen-xl mx-auto pb-12 px-4 overflow-hidden sm:px-6 lg:px-8 z-20">
    <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
      <div class="px-5 py-2">
        <a
          href="mailto:swyx@hey.com"
          class="text-base leading-6 text-white font-semibold hover:text-gray-900 transition-colors">
          Contact
        </a>
      </div>
      <div class="px-5 py-2">
        <a
          href="https://twitter.com/Coding_Career"
          class="text-base leading-6 text-white font-semibold hover:text-gray-900">
          Twitter
        </a>
      </div>
      <div class="px-5 py-2">
        <a
          href="https://github.com/sw-yx/codingcareer.com"
          class="text-base leading-6 text-white font-semibold hover:text-gray-900">
          View Source
        </a>
      </div>
    </nav>
    <div class="mt-8">
      <p class="text-center text-base leading-6 text-gray-900">
        © 2020-2021 All rights reserved
      </p>
    </div>
  </div>
</div>

<style>
@keyframes move {
  from { transform: translate(-15rem, -2.75rem) }
  to { transform: translate(calc(100vw + 10rem), -2.75rem) }
}

@keyframes bob {
  from { transform: translateY(-0.1rem) rotate(-2.5deg) scaleX(0.975)}
  10% { transform: translateY(-0.1rem) rotate(-2.5deg) scaleX(0.975) }
  to { transform: translateY(0.1rem) rotate(2.5deg) scaleX(1.025)}
}

@keyframes turn {
 from { transform: scaleX(-1) }
 50% { transform: scaleX(-1) }
 51% { transform: scaleX(1) }
 to { transform: scaleX(1) }
}

@media (min-width: 500px) {
  .duck {
    --dur: 10s;
  }
}
@media (min-width: 1000px) {
  .duck {
    --dur: 15s;
  }
}
@media (min-width: 1500px) {
  .duck {
    --dur: 20s;
  }
}
@media (min-width: 2000px) {
  .duck {
    --dur: 25s;
  }
}

.duck {
  display: inline-block;
  transform-origin: center;
  animation: var(--dur) move linear infinite alternate;
}
.duck .bob {
  animation: 1s bob ease-out infinite alternate;
}
.duck img {
  animation: calc(var(--dur) * 2) turn infinite reverse;
}

.duck::after {
  content: '';
  position: absolute;
  width: 5rem;
  height: 2rem;
  top: 0;
  left: 0;
  right: 0;
  transform-origin: center;
  transform: translate(-1rem, 2.75rem);
  opacity: 0.75;
  background-color: #4299E1;
  z-index: 2;
}
</style>
