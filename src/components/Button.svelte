<script>
  export let text = 'Buy Now';
  export let search = '';
  export let target = '';
  export let large = false;
  export let cta = false;
  
  const classes = {
    base: 'block font-semibold leading-6 text-center text-black rounded-lg shadow-md sm:w-1/3 font-display hover:bg-yellow-450 transform transition-transform active:scale-95 active:shadow-0 motion-reduce:transform-none',
    small: ' px-3 py-3 m-0 mx-auto mt-10',
    large: ' w-full px-6 py-5 my-5 mr-5 text-xl',
    cta: ' bg-yellow-500 focus:bg-yellow-450',
    plain: ' bg-transparent'
  }
</script>
  
<a class={classes.base + (large ? classes.large : classes.small) + (cta ? classes.cta : classes.plain)}
  href="{target}{search}">
  {text}
</a>
