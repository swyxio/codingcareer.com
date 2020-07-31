<script>
  import {onDestroy, onMount} from 'svelte'

  const end = new Date('08/01/2020 11:59 PM PDT');

  const _second = 1000;
  const _minute = _second * 60;
  const _hour = _minute * 60;
  var timer;
  let hours, minutes, seconds, distance

  hours = minutes = seconds = distance = 0
  function showRemaining() {
      var now = new Date();
      distance = end - now;
      if (distance < 0) {
          clearInterval(timer);
          return;
      }
      hours = Math.floor((distance / _hour));
      minutes = Math.floor((distance % _hour) / _minute);
      seconds = Math.floor((distance % _minute) / _second);
  }

  timer = setInterval(showRemaining, 1000);
  showRemaining()
  onDestroy(() => clearInterval(timer))

  let couponCode
  onMount(() => {
    couponCode = new URLSearchParams(window.location.search).get("c")
  })

</script>


<div
class="font-medium fixed top-0 z-50 w-full text-md text-center text-black
bg-yellow-500 p-2">
  <a href="#buy">
    {#if couponCode}
      Coupon <code class="bg-yellow-600">{couponCode}</code> has been applied!
    {:else}
      {#if distance < 0} 
      Launch Sale ending soon! 
      {:else} 
      🔈 Launch Sale ending soon - <code class="bg-yellow-600">{hours}h{minutes}m{seconds}s</code> to get 20% off!
      {/if} 
      {/if}
    </a>
  </div>
  <!-- 🔈 Launch Sale extended by popular demand -  -->