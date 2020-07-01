<script>
  import { onMount } from "svelte";
  let from = null;
  onMount(() => {
    const searchParams = new URLSearchParams(window.location.search).get(
      "from"
    );
    if (searchParams) {
      from = searchParams;
    }
  });

  function click() {
    document.getElementById("packages").scrollIntoView();
  }
</script>

<style>
  .FAB {
    padding: 0.875rem 2.5rem;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    border-radius: 2rem;
    border: none;
    position: fixed;
    bottom: 1em;
    background: linear-gradient(to right, #ff335f, #9198e5);
    left: 25%;
    /* transform: translate3d(-50%, 0, 0); */
    text-align: center;
    z-index: 3;
    width: 80vw;
    max-width: 200px;
  }
  .FAB:hover {
    /* https://www.w3schools.com/howto/howto_css_shake_image.asp */
    animation: shake 0.5s;
    animation-iteration-count: 1;
  }
  @media (min-width: 768px) {
    .FAB {
      left: 2em;
      bottom: 2em;
      transform: initial;
    }
  }
</style>

<!-- href={`${from ? '?from=' + from : ''}#packages`} -->
<button class="FAB btn btn-primary" on:click={click}>
  {#if from}
    <b>Hello {from}!</b>
    <br />
    Get the right package for you
  {:else}
    <b>Buy Now!</b>
  {/if}
</button>
