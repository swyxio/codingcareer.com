const production = !process.env.ROLLUP_WATCH;
module.exports = {
  purge:  {
    // mode: 'all', // TODO: purge typography styles
    // options: {
    //   whitelist: ['h1', 'h2', 'h3', 'p', 'blockquote', 'strong' /* etc. */],
    // },
    content: [
      "./src/**/*.svelte",
      // may also want to include base index.html
    ],
    defaultExtractor: content => {
      // Capture as liberally as possible, including things like `h-(screen-1.5)`
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
      const broadMatchesWithoutTrailingSlash = broadMatches.map(match => _.trimEnd(match, '\\'))
      // // Capture classes within other delimiters like .block(class="w-1/2") in Pug
      // const innerMatches = content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) || []
      const matches = broadMatches
        .concat(broadMatchesWithoutTrailingSlash)
      // .concat([...content.matchAll(/(?:class:)*([\w\d-\/:%.]+)/gm)].map(([_match, group, ..._rest]) => group))
      return matches
    },
    enabled: production // disable purge in dev
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
