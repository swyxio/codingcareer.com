const isProduction = !process.env.ROLLUP_WATCH;
module.exports = {
  purge:  {
    // mode: 'all', // TODO: purge typography styles
    // options: {
    //   safelist: ['h1', 'h2', 'h3', 'p', 'blockquote', 'strong' /* etc. */],
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
    enabled: isProduction // disable purge in dev
  },
  theme: {
    extend: {
      fontSize: {
        '6xl': '4rem'
      },
      colors: {
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          650: '#5e6c82',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        yellow: {
          100: '#fffff0',
          200: '#fefcbf',
          300: '#faf089',
          400: '#f6e05e',
          500: '#ecc94b',
          600: '#d69e2e',
          700: '#b7791f',
          800: '#975a16',
          900: '#744210'
        }
      },
    },
  },
  variants: {},
  plugins: [],
}
