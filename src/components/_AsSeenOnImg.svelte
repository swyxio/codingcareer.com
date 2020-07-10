<script>
  export let href;
  export let src;
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

<a {href} class="mx-2" target="_blank" aria-label={ariaLabel} rel="noreferrer">
  <img class="w-20 max-w-none" {src} alt="" />
</a>
