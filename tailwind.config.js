/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3faf3",
          100: "#def2de",
          200: "#bfebbf",
          300: "#98e398",
          400: "#5ed95e",
          500: "#28c128",
          600: "#21ad21",
          700: "#1d961d",
          800: "#177d17",
          900: "#116311",
        },
        green: {
          50: "#f3faf3",
          100: "#def2de",
          200: "#bfebbf",
          300: "#98e398",
          400: "#5ed95e",
          500: "#28c128",
          600: "#21ad21",
          700: "#1d961d",
          800: "#177d17",
          900: "#116311",
        },
        secondary: {
          50: "#f3f9fc",
          100: "#dff0f8",
          200: "#bedff2",
          300: "#94c6ec",
          400: "#52a8e3",
          500: "#0088d9",
          600: "#007ec4",
          700: "#0071ac",
          800: "#00638f",
          900: "#004c69",
        },
      },
    },
    fontFamily: {
      sans: ['"Mulish"'],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
