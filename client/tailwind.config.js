/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        parkit: {
          100: "#404258",
          200: "#6C4AB6",
        },
      },
    },
  },
  plugins: [],
};
