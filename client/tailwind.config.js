module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-black": "#262626",
        "custom-gray": "#313131",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
