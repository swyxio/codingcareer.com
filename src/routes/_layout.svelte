<!-- <script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script><style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style><Nav {segment}/> -->

<main
  class="font-sans text-black antialiased leading-tight bg-gray-200
  vsc-initialized">
  <slot />
</main>
