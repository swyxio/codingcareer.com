<script>
  export let title;
  export let showContents = false;
  export let handler = () => (showContents = !showContents);
  // import { fade } from "svelte/transition";
  import { fade, fly } from "svelte/transition";
  import { scale } from "svelte/transition";

  // function squish(node, { duration }) {
  //   return {
  //     duration,
  //     css: t => {
  //       return `
  //       transform: scaleY(${t})
  //       `;
  //     }
  //   };
  // }
</script>

<div
  class="bg-white mx-8 sm:px-6 relative max-w-screen-md mx-auto pt-4 text-xl
  text-gray-700 leading-normal">
  <div
    class="sticky top-0 bg-gray-300 -ml-4 -mt-2 flex flex-row-reverse
    md:flex-row items-center justify-end md:justify-between flex-wrap
    sm:flex-no-wrap p-4">
    <div class="ml-4 mt-2">
      <h3 class="text-lg leading-6 font-medium text-gray-900 font-bold">
        {title}
      </h3>
      <p class="mt-1 text-sm leading-5 text-gray-500">100 pages</p>
    </div>
    <div class="ml-4 mt-2 flex-shrink-0">
      <span class="inline-flex rounded-md shadow-sm">
        <button
          type="button"
          on:click={handler}
          class="relative inline-flex items-center px-4 py-2 border
          border-transparent text-sm leading-5 font-medium rounded-md text-white
          bg-indigo-600 hover:bg-indigo-500 focus:outline-none
          focus:shadow-outline-indigo focus:border-indigo-700
          active:bg-indigo-700">
          {#if showContents}Collapse{:else}Expand{/if}
        </button>
      </span>
    </div>
  </div>
  <!-- {#if withButton}
  {:else}
    <h3
      class="sticky top-0 text-lg leading-6 font-medium text-gray-900 bg-white
      font-bold py-5">
      {title}
    </h3>
  {/if} -->
  <!-- <div in:fade out:fly={{ y: -200, duration: 500 }}> -->
  {#if showContents}
    <div in:fade class="pt-6">
      <slot />
    </div>
  {/if}

</div>
