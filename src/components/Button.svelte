<script>
export let text = 'Buy Now';
export let search = '';
export let large = false;
export let cta = false;

const classes = {
  base: 'block font-semibold leading-6 text-center text-black border-black rounded-lg shadow-md sm:w-1/3 font-display',
  small: ' px-3 py-2 m-0 mx-auto mt-2',
  large: ' w-full px-6 py-4 my-5 mr-5 text-xl',
  cta: ' bg-yellow-500 hover:bg-yellow-600 border-2',
  plain: ' bg-transparent hover:bg-yellow-500'
}
</script>

<a class={classes.base + (large ? classes.large : classes.small) + (cta ? classes.cta : classes.plain)}
  href={`${search}#buy`}>
  {text}
</a>
