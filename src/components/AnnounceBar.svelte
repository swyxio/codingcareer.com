<script>
  import { onDestroy, onMount } from "svelte";

  // const end = new Date("08/01/2020 11:59 PM PDT");

  // const _second = 1000;
  // const _minute = _second * 60;
  // const _hour = _minute * 60;
  // var timer;
  // let hours, minutes, seconds, distance;

  // hours = minutes = seconds = distance = 0;
  // function showRemaining() {
  //   var now = new Date();
  //   distance = end - now;
  //   if (distance < 0) {
  //     clearInterval(timer);
  //     return;
  //   }
  //   hours = Math.floor(distance / _hour);
  //   minutes = Math.floor((distance % _hour) / _minute);
  //   seconds = Math.floor((distance % _minute) / _second);
  // }

  // timer = setInterval(showRemaining, 1000);
  // showRemaining();
  // onDestroy(() => clearInterval(timer));

  let couponCode = "BLACKFRIYAY";
  onMount(() => {
    couponCode = new URLSearchParams(window.location.search).get("c");
  });
  let isShown = true;
</script>

{#if isShown && couponCode}
  <div
    class="font-medium fixed top-0 z-50 w-full text-md text-center text-black
    bg-yellow-500 p-2">
    <div class="relative">
      {#if couponCode === "BLACKFRIYAY"}
      <a href="#buy">
        🎉 Celebrating Black Friday with our first sale post launch! 50% off everything, including team licenses! 🎉
      </a>
      {:else}
      <a href="#buy">
        Coupon
        <code class="bg-yellow-600">{couponCode}</code>
        has been applied!
      </a>
      {/if}
      <button class="absolute right-0" on:click={() => (isShown = false)}>
        x
      </button>
    </div>
  </div>
{/if}
<!-- {:else}
    {#if distance < 0} 
    Launch Sale ending soon! 
    {:else} 
    🔈 Launch Sale ending soon - <code class="bg-yellow-600">{hours}h{minutes}m{seconds}s</code> to get 20% off!
    {/if}  -->
