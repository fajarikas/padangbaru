/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "added-green": "#006A67",
        "white-primary": "#FBFBFB",
        "brown-primary": "#443A3A",
        "added-yellow": "#FFF4B7",
      },
      fontFamily: {
        "sodo-sans": ["Sodo Sans", "sans-serif"],
      },
      letterSpacing: {
        extraWide: "4.16px",
      },
    },
  },
  plugins: [],
};
