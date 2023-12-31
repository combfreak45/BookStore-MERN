/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/assets/main.jpg')",
        side: "url('../src/assets/side.jpg')"
      },
    },
  },
  plugins: [],
};
