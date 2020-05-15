module.exports = {
  plugins: [
    require("tailwindcss"),
    // require("postcss-import"),
    require("postcss-nested"), // https://tailwindcss.com/docs/using-with-preprocessors/#nesting
    require("autoprefixer"),
  ],
};
