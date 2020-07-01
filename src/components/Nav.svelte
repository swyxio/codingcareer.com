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
    font-size: 1rem;
    padding: 0.875rem 2.5rem;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    border-radius: 2rem;
    border: none;
    position: fixed;
    bottom: 1em;
    background: linear-gradient(to right, #ff335f, #9198e5);
    left: 10%;
    /* transform: translate3d(-50%, 0, 0); */
    text-align: center;
    z-index: 3;
    width: 80vw;
    max-width: 300px;
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
<button class="FAB btn-primary" on:click={click}>
  {#if from === 'Product Hunt'}
    Welcome
    <b>Product Hunt</b>
    !
    <a class="logo_7d0b3" title="Product Hunt Logo" href="/">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <path
            d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20
            8.954 20 20"
            fill="#DA552F" />
          <path
            d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0
            1 0 0-14"
            fill="#FFF" />
        </g>
      </svg>
    </a>
    <br />
    The
    <b>Creator</b>
    Package is perfect for makers like you 👀
  {:else if from === 'Hacker News'}
    Welcome
    <b>Hacker News</b>
    !
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="30px"
      height="30px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve">
      <path
        fill="#F26822"
        d="M0,0v100h100V0H0z
        M54.375,57.656v24.531h-8.906V57.656L23.594,14.375h10.313L50,47.031l16.563-32.656h9.688
        L54.375,57.656z" />
    </svg>
    <br />
    All books should have a comment section, so check out the
    <b>Community</b>
    Package!
  {:else if from}
    <b>Hello {from}!</b>
    <br />
    Get the right package for you!
  {:else}
    <b>Buy Now!</b>
  {/if}
</button>
