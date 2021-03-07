<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import Emoji from './Emoji.svelte';

  export let color = "purple-400";
  export let speaking = false;

  let mounted = false;
  let emoji = false;
  let width;
  let height;

  onMount(() => {
    mounted = true;
    setTimeout(() => {
      emoji = true;
    }, 10);
  });
</script>

{#if mounted}
  <div
    bind:clientWidth={width}
    bind:clientHeight={height}
    in:fly={{ duration: 500, y: 100 }}
    class="w-full h-3/10 relative flex items-end justify-center rounded-lg shadow-2xl ring-gray-600 bg-{color} z-10"
  >
    <img src="/guest-duck.svg" alt="">

    {#if speaking}
      <Emoji left="-15%" top="-25%" x={width / 2} y={height / 2} />
    {/if}
  </div>
{/if}
