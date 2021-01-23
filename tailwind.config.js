/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        textarea: "0px 0px 4px rgba(0, 0, 0, 0.16)",
        boxshadow: "0px 0px 6px rgba(0, 0, 0, 0.16)",
        boxshadowlg: "0px 0px 20px rgba(0, 0, 0, 0.66)"
      },
      colors: {
        terngreen: "#2dce89",
        salaamgrey: "#f6f6f7",
        springblue: "#243547",
        springgold: "#f0c78a"
      },
      spacing: {
        7: "1.75rem",
        11: "2.90rem",
        28: "7rem",
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        104: "26rem"
      },
      fontSize: {
        xxs: "0.5rem"
      },
      width: {
        7: "1.75rem",
        95: "95%"
      },
      maxWidth: {
        "8xl": "88rem"
      },
      zIndex: {
        999: "999"
      }
    }
  },
  variants: {},
  plugins: []
};
