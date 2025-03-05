/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#805AF1",
        "gray-f4": "#F4F4F4",
        "gray-c3": "#C3C3C3",
      },
    },
  },
  plugins: [],
};
