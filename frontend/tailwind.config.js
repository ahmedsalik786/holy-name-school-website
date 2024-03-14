/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 30s linear infinite", // Adjust the duration (10s) as needed
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
