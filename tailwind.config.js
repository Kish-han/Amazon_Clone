module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
  },
  variants:[ "responsive", "group-hover", "hover", "focus","active"],
  //   extend: {},
  // },
  plugins: [require("@tailwindcss/line-clamp")],
};
