<script>
  export let href;
  export let src;
  export let isSmall = false;
  export let ariaLabel;
</script>

<style>
  img {
    filter: grayscale(1);
  }
  img:hover {
    filter: grayscale(0);
  }
</style>

<a {href} class="m-2" target="_blank" aria-label={ariaLabel} rel="noreferrer">
<!--  <img class:w-20={!isSmall} class:w-10={isSmall} class="max-w-none" {src} alt="" />-->
  <img class="w-16 max-w-none" {src} alt="" />
</a>
