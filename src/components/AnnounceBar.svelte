<script>
  import {onDestroy} from 'svelte'

  const end = new Date('07/14/2020 11:59 PM PDT');

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

      console.log({hours, minutes, seconds})
  }

  timer = setInterval(showRemaining, 1000);
  showRemaining()
  onDestroy(() => clearInterval(timer))

</script>


<div
  class="font-medium absolute w-full text-md text-center text-black
  bg-yellow-500 p-2">
  {#if distance < 0} Launch Sale ending now! {:else} 🎉 Launch Sale! <code class="bg-yellow-600">{hours}h{minutes}m{seconds}s</code> left – {/if} 25% of Book Sales donated to<a
    class="pl-1 underline"
    href="https://www.freecodecamp.org/news/freecodecamp-servers-update-october-2019/"
    target="_blank"
    rel="noreferrer">
  support FreeCodeCamp.
  </a>
</div>
