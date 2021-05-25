<script>
  import Button from './Button.svelte';
  import Guest from './community/Guest.svelte';
  import Emoji from './community/Emoji.svelte';
  import { getRand, observeIntersection } from '../util.js';

  let width;
  let height;

  const speakers = {
    host: false,
    guestA: false,
    guestB: false,
    guestC: false
  };

  const speakerKeys = Object.keys(speakers);

  setInterval(() => {
    speakerKeys.forEach(key => speakers[key] = false);
    speakers[speakerKeys[getRand(speakerKeys.length - 1)]] = true;
  }, 2000);

  let intersected = false;
</script>

<section id="learn-more" class="py-16 bg-white overflow-hidden lg:py-16s">
  <div
    class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
    <h2
      class="text-center mt-1 mb-12 text-4xl tracking-tight leading-10 font-semibold
      text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-5xl" id="community">
      The Community
    </h2>
    <div class="max-w-3xl mx-auto">
      <div use:observeIntersection={{ threshold: 0.15, callback: () => intersected = true }} class="max-w-full flex flex-row relative">
        <div bind:clientWidth={width} bind:clientHeight={height}
          class="w-full"
        >
          <img src="talking-duck.jpg" alt="Duck with its bill open" class="w-full rounded-lg">
          {#if speakers.host}
            <Emoji left="20%" top="30%" x={width/5} y={height/7} />
          {/if}
        </div>
        <div class="w-1/4 lg:w-1/4 h-full flex flex-col gap-4 lg:gap-8 absolute top-3 sm:top-8 -right-6 sm:-right-12">
          {#if intersected}
            <Guest color="blue-400" speaking={speakers.guestA} />
            <Guest color="purple-400" speaking={speakers.guestB} />
            <Guest color="red-400" speaking={speakers.guestC} />
          {/if}
        </div>
      </div>
      <p
        class="text-left max-w-3xl mx-auto mt-16 lg:mt-20 text-xl leading-7 text-gray-650">
        <span class="font-bold text-black">The Coding Career Community</span> is the book's auxiliary presence to ask questions, find jobs, get feedback and meet collaborators. Use it as a friendly resource as you build your career! We're active with new topics <span class="font-bold text-black">every day</span> and no matter how much you engage we'll be here for you. Membership is granted for life.
      </p>
      <h3
        class="mt-1 text-2xl text-center tracking-tight leading-10 font-semibold
        text-gray-900 sm:leading-none sm:text-3xl lg:text-2xl xl:text-2xl mt-12">
        Platforms
      </h3>
      <p
        class="text-left max-w-3xl mx-auto mt-6 text-xl leading-7 text-gray-650">
        We are on <span class="font-bold text-black">Discord</span> for realtime live chat as well as <span class="font-bold text-black">Circle Community</span>, our async knowledge base. Every month I hold a casual virtual meetup and occasionally we even manage to catch up in person.
      </p>
      <p
        class="text-left max-w-3xl mx-auto mt-6 text-xl leading-7 text-gray-650">
        I have extensive dev community moderation experience having served the 200k-strong <a href="https://www.reddit.com/r/reactjs/" class=" text-blue-500" rel="noreferrer" target="_blank">/r/reactjs community</a> and started the <a href="https://twitter.com/SvelteSociety" class=" text-blue-500" rel="noreferrer" target="_blank">Svelte Society</a> global movement.
      </p>
      <p class="text-left max-w-3xl mx-auto mt-6 text-xl leading-7 text-gray-650">
      Whether you're interested in book discussion, bouncing ideas, seeing early drafts of people's work (including mine!) or job postings, you'll find someone to talk about your career with.
      </p>
      <div class="flex flex-row justify-center mt-6">
        <Button text="Join the community" target="#buy" large cta />
      </div>
      <p class="text-base leading-6 text-gray-600 mt-6 italic">Note: This is a professional community. Participation is subject to a Code of Conduct. You will be removed if you repeatedly violate it.</p>
  </div>
</section>
