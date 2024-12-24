/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff9934",
      },
      height: {
        custom: "calc(100vh - 68px)",
      },
    },
  },
  plugins: [],
};
