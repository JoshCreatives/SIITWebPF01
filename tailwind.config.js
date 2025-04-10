/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // ✅ Correctly includes JSX/TSX files
  theme: {
    extend: {},
  },
  plugins: [],
};
