<script context="module">
  import h1 from "./H1.svelte";
  import h2 from "./H2.svelte";
  import p from "./P.svelte";
  import a from "./A.svelte";
  import ul from "./UL.svelte";
  import strong from "./Strong.svelte";
  export { h1, h2, p, a, strong, ul };
</script>

<!-- <div class="relative container mx-auto px-8"> -->
<!-- <div
  class="relative max-w-screen-md mx-auto px-8 pt-16 text-xl text-gray-700
  leading-normal"> -->
<slot>
  <!-- the mdsvex content will be slotted in here -->
</slot>
<!-- </div> -->
