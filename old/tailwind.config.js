const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: {
    content: ["./src/**/*.html", "./src/**/*.svelte"],
    options: {
      defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
