/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        space: "url('/space.svg')",
        eth2: "url('/ETH2.svg')",
        eth6: "url('/ETH6.svg')",
      },
    },
  },
  plugins: [],
};
