<script>
  import { clickOutside } from "./actions.js";

  let activeNav = "Home";
  let isMobile;
  let isMobileAndNavActive = false;
  $: console.log({ isMobile, isMobileAndNavActive });
  function handleClickOutside() {
    console.log("clickoutside");
    if (isMobile && isMobileAndNavActive) {
      isMobileAndNavActive = !isMobileAndNavActive;
    }
  }
  import { onMount } from "svelte";
  $: isMobile =
    typeof window !== "undefined" &&
    !window.matchMedia("(min-width: 480px)").matches;
  onMount(() => {
    isMobile = !window.matchMedia("(min-width: 480px)").matches;
  });
</script>

<style>
  nav {
    border-top: 1px solid gold;
    border-bottom: 1px solid gold;
    padding: 1em;
    position: fixed;
    bottom: 2em;
    z-index: 999;
    background: papayawhip;
  }
  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    max-width: 70ch;
    margin: 0 auto;
    padding: 0;

    /* mobile stuff */
    flex-direction: column;
  }
  nav ul li {
    margin-bottom: 1em;
  }
  @media (min-width: 480px) {
    nav {
      top: 0;
      position: sticky;
      margin-bottom: 1.5rem;
    }
    nav ul {
      flex-direction: row;
    }
    nav ul li {
      margin-bottom: 0;
    }
  }
</style>

<nav use:clickOutside={handleClickOutside}>
  {#if isMobile}
    {#if isMobileAndNavActive}
      <ul>
        <li class="menulink" id="menu-TOC">
          <a href="#TOC">ToC</a>
        </li>
        <li class="menulink" id="menu-community">
          <a href="#community">Community</a>
        </li>
        <li class="menulink" id="menu-workshops">
          <a href="#workshops">Workshops</a>
        </li>
        <li class="menulink" id="menu-packages">
          <a href="#packages">Packages</a>
        </li>
        <li class="menulink" id="menu-FAQ">
          <a href="#FAQ">FAQ</a>
        </li>
      </ul>
    {/if}
    <button on:click={() => (isMobileAndNavActive = !isMobileAndNavActive)}>
      {#if isMobileAndNavActive}close{:else}open{/if}
    </button>
  {:else}
    <ul>
      <li class="menulink" id="menu-TOC">
        <a href="#TOC">ToC</a>
      </li>
      <li class="menulink" id="menu-community">
        <a href="#community">Community</a>
      </li>
      <li class="menulink" id="menu-workshops">
        <a href="#workshops">Workshops</a>
      </li>
      <li class="menulink" id="menu-packages">
        <a href="#packages">Packages</a>
      </li>
      <li class="menulink" id="menu-FAQ">
        <a href="#FAQ">FAQ</a>
      </li>
    </ul>
  {/if}
</nav>
